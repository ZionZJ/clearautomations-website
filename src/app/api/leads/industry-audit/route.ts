import { handleLeadRequest } from "@/lib/lead-routing";

export const runtime = "nodejs";

const industryConfig = {
  "hvac-contractors": {
    routeName: "industry-audit-hvac-contractors",
    webhookEnvVar: "N8N_HVAC_AUDIT_WEBHOOK_URL",
    requiredFields: [
      "vertical",
      "companyName",
      "contactName",
      "workEmail",
      "workPhone",
      "website",
      "serviceArea",
      "monthlyLeadVolume",
      "afterHoursCoverage",
      "currentTools",
      "biggestLeak",
      "dataAcknowledgement",
      "contactConsent",
    ],
  },
  "plumbing-contractors": {
    routeName: "industry-audit-plumbing-contractors",
    webhookEnvVar: "N8N_PLUMBING_AUDIT_WEBHOOK_URL",
    requiredFields: [
      "vertical",
      "companyName",
      "contactName",
      "workEmail",
      "workPhone",
      "website",
      "serviceArea",
      "monthlyLeadVolume",
      "afterHoursCoverage",
      "currentTools",
      "biggestLeak",
      "dataAcknowledgement",
      "contactConsent",
    ],
  },
  "home-services": {
    routeName: "industry-audit-home-services",
    webhookEnvVar: "N8N_HOME_SERVICES_AUDIT_WEBHOOK_URL",
    requiredFields: [
      "vertical",
      "companyName",
      "contactName",
      "workEmail",
      "workPhone",
      "website",
      "serviceArea",
      "subVertical",
      "monthlyLeadVolume",
      "afterHoursCoverage",
      "currentTools",
      "biggestLeak",
      "dataAcknowledgement",
      "contactConsent",
    ],
  },
} as const;

export async function POST(request: Request) {
  return handleLeadRequest(request, (body) => {
    const vertical = typeof body.vertical === "string" ? body.vertical : "";
    return industryConfig[vertical as keyof typeof industryConfig] ?? null;
  });
}

