import { handleLeadRequest, standardLeadConfig } from "@/lib/lead-routing";

export const runtime = "nodejs";

export async function POST(request: Request) {
  return handleLeadRequest(
    request,
    standardLeadConfig({
      routeName: "checklist-download",
      webhookEnvVar: "N8N_CHECKLIST_WEBHOOK_URL",
      requiredFields: ["email", "contactConsent"],
    }),
  );
}

