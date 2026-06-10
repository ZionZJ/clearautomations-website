import { handleLeadRequest, standardLeadConfig } from "@/lib/lead-routing";

export const runtime = "nodejs";

export async function POST(request: Request) {
  return handleLeadRequest(
    request,
    standardLeadConfig({
      routeName: "free-audit",
      webhookEnvVar: "N8N_FREE_AUDIT_WEBHOOK_URL",
      requiredFields: ["business", "website", "challenge", "email", "contactConsent"],
    }),
  );
}

