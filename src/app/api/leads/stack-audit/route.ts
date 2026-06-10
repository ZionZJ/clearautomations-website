import { handleLeadRequest, standardLeadConfig } from "@/lib/lead-routing";

export const runtime = "nodejs";

export async function POST(request: Request) {
  return handleLeadRequest(
    request,
    standardLeadConfig({
      routeName: "stack-audit",
      webhookEnvVar: "N8N_STACK_AUDIT_WEBHOOK_URL",
      requiredFields: [
        "companyName",
        "contactName",
        "email",
        "phone",
        "website",
        "industry",
        "employees",
        "monthlySpend",
        "currentTools",
        "leadProcess",
        "frustrations",
        "automationGoals",
        "contactConsent",
      ],
    }),
  );
}

