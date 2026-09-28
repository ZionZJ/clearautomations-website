import { createHmac, timingSafeEqual } from "node:crypto";

// Receives Retell agent webhooks for the Summit Air demo, verifies Retell's
// signature, and forwards final call_analyzed events to the n8n post-call workflow.
//
// Required server-only env vars:
//   SUMMIT_AIR_RETELL_API_KEY       Retell API key with the webhook badge (signing key)
//   SUMMIT_AIR_RETELL_WEBHOOK_URL   n8n production webhook for the post-call workflow
//   SUMMIT_AIR_N8N_TOKEN            shared demo token (sent as "Bearer <token>")
//
// Signature format (docs.retellai.com/features/secure-webhook):
//   X-Retell-Signature: v=<unix ms>,d=<hex HMAC-SHA256(raw body + timestamp)>
// Verified against the raw body string, within a 5 minute window.

export const runtime = "nodejs";

const MAX_BODY_CHARS = 2_000_000;
const MAX_SKEW_MS = 5 * 60 * 1000;

function verifyRetellSignature(rawBody: string, header: string, signingKey: string) {
  const parts = Object.fromEntries(
    header.split(",").map((part) => {
      const [key, ...rest] = part.trim().split("=");
      return [key, rest.join("=")];
    }),
  );
  const timestamp = Number(parts.v);
  const digest = parts.d ?? "";

  if (!Number.isFinite(timestamp) || Math.abs(Date.now() - timestamp) > MAX_SKEW_MS) {
    return false;
  }
  if (!/^[0-9a-f]+$/i.test(digest)) {
    return false;
  }

  const expected = createHmac("sha256", signingKey).update(rawBody + parts.v).digest();
  const received = Buffer.from(digest, "hex");
  return received.length === expected.length && timingSafeEqual(received, expected);
}

export async function POST(request: Request) {
  const signingKey = process.env.SUMMIT_AIR_RETELL_API_KEY;
  const webhookUrl = process.env.SUMMIT_AIR_RETELL_WEBHOOK_URL;
  const token = process.env.SUMMIT_AIR_N8N_TOKEN;

  if (!signingKey || !webhookUrl || !token) {
    console.error("[summit-air-retell] not configured: missing signing key, webhook URL, or token");
    return new Response(null, { status: 503 });
  }

  const rawBody = await request.text();
  if (rawBody.length > MAX_BODY_CHARS) {
    return new Response(null, { status: 413 });
  }

  const signature = request.headers.get("x-retell-signature");
  if (!signature || !verifyRetellSignature(rawBody, signature, signingKey)) {
    console.warn("[summit-air-retell] rejected request with missing or invalid signature");
    return new Response(null, { status: 401 });
  }

  let event = "";
  try {
    event = String((JSON.parse(rawBody) as { event?: unknown }).event ?? "");
  } catch {
    return new Response(null, { status: 400 });
  }

  // Only the final analyzed event drives the workflow. Acknowledge others so Retell stops retrying.
  if (event !== "call_analyzed") {
    return new Response(null, { status: 204 });
  }

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: rawBody,
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    if (!upstream.ok) {
      console.error(`[summit-air-retell] n8n responded ${upstream.status}`);
      return new Response(null, { status: 502 });
    }
  } catch (error) {
    console.error("[summit-air-retell] n8n request failed", error);
    return new Response(null, { status: 502 });
  }

  return new Response(null, { status: 204 });
}
