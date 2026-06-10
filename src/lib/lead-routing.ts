import { NextResponse } from "next/server";

type LeadBody = Record<string, unknown>;

type LeadRouteConfig = {
  routeName: string;
  webhookEnvVar: string;
  requiredFields: readonly string[];
};

type LeadRouteResolver = (body: LeadBody) => LeadRouteConfig | null;

const MAX_BODY_CHARS = 16_000;
const HONEYPOT_FIELD = "websiteUrlConfirm";

function isRecord(value: unknown): value is LeadBody {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function hasValue(value: unknown) {
  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value === "number") {
    return Number.isFinite(value);
  }

  return typeof value === "string" && value.trim().length > 0;
}

function missingFields(body: LeadBody, fields: readonly string[]) {
  return fields.filter((field) => !hasValue(body[field]));
}

function getClientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function handleLeadRequest(
  request: Request,
  resolveConfig: LeadRouteResolver,
) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);

  if (contentLength > MAX_BODY_CHARS) {
    return NextResponse.json({ ok: false, error: "Payload too large" }, { status: 413 });
  }

  let rawBody = "";

  try {
    rawBody = await request.text();
  } catch {
    return NextResponse.json({ ok: false, error: "Could not read payload" }, { status: 400 });
  }

  if (rawBody.length > MAX_BODY_CHARS) {
    return NextResponse.json({ ok: false, error: "Payload too large" }, { status: 413 });
  }

  let body: unknown;

  try {
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (!isRecord(body)) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  if (hasValue(body[HONEYPOT_FIELD])) {
    return NextResponse.json({ ok: true });
  }

  const config = resolveConfig(body);

  if (!config) {
    return NextResponse.json({ ok: false, error: "Unsupported lead type" }, { status: 400 });
  }

  const missing = missingFields(body, config.requiredFields);

  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields", fields: missing },
      { status: 400 },
    );
  }

  const webhookUrl = process.env[config.webhookEnvVar];

  if (!webhookUrl) {
    console.error(
      `[lead-routing] LEAD LOST (503): env var ${config.webhookEnvVar} is not set for route ${config.routeName}`,
    );
    return NextResponse.json(
      { ok: false, error: "Lead routing is not configured" },
      { status: 503 },
    );
  }

  const payload = {
    ...body,
    leadRoute: config.routeName,
    receivedAt: new Date().toISOString(),
    userAgent: request.headers.get("user-agent") ?? "unknown",
    clientIp: getClientIp(request),
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        `[lead-routing] LEAD LOST (502): webhook for route ${config.routeName} responded ${response.status}`,
      );
      return NextResponse.json(
        { ok: false, error: "Lead routing failed" },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error(
      `[lead-routing] LEAD LOST (502): webhook fetch for route ${config.routeName} threw`,
      error,
    );
    return NextResponse.json(
      { ok: false, error: "Lead routing failed" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

export function standardLeadConfig(config: LeadRouteConfig) {
  return () => config;
}
