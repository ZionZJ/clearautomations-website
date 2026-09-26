import type { Metadata } from "next";
import { BulletList, PageSection, SimplePage } from "@/components/simple-page";
import { SummitAirDemoForm } from "@/components/summit-air-demo-form";

// Unlisted demo page: reachable by URL, kept out of search results and the sitemap.
export const metadata: Metadata = {
  title: "Summit Air Callback Demo | ClearAutomations",
  description:
    "A ClearAutomations demonstration of an AI front desk responding to a new HVAC service request.",
  robots: { index: false, follow: false },
};

export default function SummitAirDemoPage() {
  return (
    <SimplePage
      eyebrow="ClearAutomations demo"
      title="Summit Air service request"
      description="Summit Air is a fictional HVAC company. ClearAutomations runs this demo to show a new service request getting a text and an AI callback within minutes. Use only a phone number and email you control."
    >
      <div className="bg-[var(--navy)] rounded-lg p-6 sm:p-8">
        <SummitAirDemoForm />
      </div>

      <PageSection title="About this demo">
        <BulletList
          items={[
            "Summit Air and its staff are fictional. No real HVAC company receives this request.",
            "Submitting the form sends up to 2 texts and one AI phone call to the number you enter, only if you check the consent box.",
            "The caller identifies itself as an AI assistant. You can tell it to stop at any time.",
            "Reply STOP to any text to opt out, or HELP for help.",
            "SMS consent records are not shared with or sold to third parties.",
          ]}
        />
      </PageSection>
    </SimplePage>
  );
}
