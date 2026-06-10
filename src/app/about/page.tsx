import type { Metadata } from "next";
import { BulletList, PageSection, SimplePage } from "@/components/simple-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About | Clear Automations",
  description:
    "ClearAutomations builds client-owned AI automation systems for small businesses.",
};

export default function AboutPage() {
  return (
    <SimplePage
      eyebrow="About"
      title="A practical automation partner for small businesses."
      description="ClearAutomations builds systems that help small teams respond faster, follow up consistently, and keep ownership of their tools."
    >
      <PageSection title="What ClearAutomations does">
        <BulletList
          items={[
            "An AI front-desk employee that answers calls and runs callbacks.",
            "Automated follow-up for leads, estimates, appointments, and reviews.",
            "CRM and pipeline setup that the client owns.",
            "Workflow documentation, handoff, and support.",
          ]}
        />
      </PageSection>

      <PageSection title="Founder-led delivery">
        <p>
          ClearAutomations is operated by {siteConfig.founderName}. Delivery is
          founder-led: strategy, build quality, and client handoff stay with
          the person you talked to on day one.
        </p>
      </PageSection>

      <PageSection title="How the work is different">
        <BulletList
          items={[
            "Client-owned accounts and exports wherever practical.",
            "Clear data boundaries before sensitive workflows launch.",
            "Demo-safe workflow packs before production integrations.",
            "Plain-English documentation so the client understands what was built.",
          ]}
        />
      </PageSection>
    </SimplePage>
  );
}

