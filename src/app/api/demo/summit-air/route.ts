import { NextResponse } from "next/server";

// Server-side proxy for the unlisted Summit Air demo form (/demo/summit-air).
// The browser never sees the n8n webhook URL or token.
//
// Required server-only env vars:
//   SUMMIT_AIR_LEAD_WEBHOOK_URL  n8n production webhook for the lead workflow
//   SUMMIT_AIR_N8N_TOKEN         shared demo token (sent as "Bearer <token>")
//   SUMMIT_AIR_ALLOWED_PHONES    comma-separated E.164 numbers allowed to receive the call/texts
//
// The allowlist is the abuse guard: without it, anyone with the URL could make the
// system text and call any number. Unlisted numbers get the same "not connected"
// response as a disabled demo, so the allowlist is never revealed.

export const runtime = "nodejs";

const MAX_BODY_CHARS = 8_000;
const REQUIRED_FIELDS = ["name", "email", "phone", "serviceType", "urgency", "city"] as const;
const SERVICE_TYPES = new Set(["AC Repair", "Heating Repair", "Maintenance Plan", "New System Quote"]);
const URGENCIES = new Set(["Urgent - today", "This week", "Planning ahead"]);
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const E164_PATTERN = /^\+[1-9]\d{7,14}$/;

type Body = Record<string, unknown>;

function clean(value: unknown, maxLength: number) {
  return String(value ?? "").trim().slice(0, maxLength);
}

function lastFour(phone: string) {
  return `***${phone.slice(-4)}`;
}

function notConnected() {
  return NextResponse.json({ accepted: false, error: "Demo line not connected" }, { status: 503 });
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_CHARS) {
    return NextResponse.json({ error: "Payload too large" }, { status: 413 });
  }

  let body: Body;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_CHARS) {
      return NextResponse.json({ error: "Payload too large" }, { status: 413 });
    }
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }
    body = parsed as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot: pretend success so bots learn nothing.
  if (clean(body.companyWebsite, 200) || clean(body.websiteUrlConfirm, 200)) {
    return NextResponse.json({ accepted: true }, { status: 202 });
  }

  const missing = REQUIRED_FIELDS.filter((field) => !clean(body[field], 1_000));
  if (missing.length > 0 || body.consentGranted !== true) {
    return NextResponse.json(
      { error: "Missing required fields or callback request", fields: missing },
      { status: 400 },
    );
  }

  const name = clean(body.name, 80);
  const email = clean(body.email, 254).toLowerCase();
  const phone = clean(body.phone, 16);
  const serviceType = clean(body.serviceType, 80);
  const urgency = clean(body.urgency, 40);
  const city = clean(body.city, 80);
  const notes = clean(body.notes, 1_000);
  const smsConsent = body.smsConsent === true;

  if (
    !EMAIL_PATTERN.test(email) ||
    !E164_PATTERN.test(phone) ||
    !SERVICE_TYPES.has(serviceType) ||
    !URGENCIES.has(urgency)
  ) {
    return NextResponse.json({ error: "Invalid field value" }, { status: 400 });
  }

  const webhookUrl = process.env.SUMMIT_AIR_LEAD_WEBHOOK_URL;
  const token = process.env.SUMMIT_AIR_N8N_TOKEN;
  const allowed = (process.env.SUMMIT_AIR_ALLOWED_PHONES ?? "")
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);

  if (!webhookUrl || !token || allowed.length === 0) {
    console.error("[summit-air-demo] not configured: missing webhook URL, token, or phone allowlist");
    return notConnected();
  }

  if (!allowed.includes(phone)) {
    console.warn(`[summit-air-demo] blocked submission to non-allowlisted number ${lastFour(phone)}`);
    return notConnected();
  }

  const receivedAt = new Date().toISOString();
  const testRunId = crypto.randomUUID();

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        serviceType,
        urgency,
        city,
        notes,
        consentGranted: true,
        consentTimestamp: receivedAt,
        smsConsent,
        submittedAt: receivedAt,
        source: "summit-air-video-demo",
        testRunId,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    if (!upstream.ok) {
      console.error(`[summit-air-demo] n8n responded ${upstream.status} for run ${testRunId}`);
      return NextResponse.json({ error: "Workflow did not accept the request" }, { status: 502 });
    }
  } catch (error) {
    console.error(`[summit-air-demo] n8n request failed for run ${testRunId}`, error);
    return NextResponse.json({ error: "Workflow did not accept the request" }, { status: 502 });
  }

  return NextResponse.json({ accepted: true, testRunId }, { status: 202 });
}
