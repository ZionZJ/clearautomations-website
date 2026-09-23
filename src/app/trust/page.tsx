import type { Metadata } from "next";
import { BulletList, PageSection, SimplePage } from "@/components/simple-page";

export const metadata: Metadata = {
  title: "Trust & Boundaries | ClearAutomations",
  description:
    "ClearAutomations boundaries for call handling, AI voice, SMS, email, client ownership, recordings, and data handling.",
};

export default function TrustPage() {
  return (
    <SimplePage
      eyebrow="Trust"
      title="Automation with the risk in view."
      description="The goal is not to automate everything. The goal is to automate the right work with clear ownership, disclosure, consent, and human escalation."
    >
      <PageSection title="Client ownership">
        <BulletList
          items={[
            "The client should own core business accounts whenever practical.",
            "ClearAutomations uses collaborator access instead of owning client assets by default.",
            "Workflow exports, runbooks, and handoff notes are part of the delivery package.",
          ]}
        />
      </PageSection>

      <PageSection title="Call handling and AI voice boundaries">
        <BulletList
          items={[
            "An AI voice layer is optional. Many systems start with routing, text-back, and staff tasks instead.",
            "Where AI voice is used, it identifies the business and uses approved disclosure language.",
            "Emergency situations such as gas, sewage, or flooding route to a person, not an automated path.",
            "Automated call handling does not diagnose equipment, quote firm prices, or replace a technician's judgment.",
          ]}
        />
      </PageSection>

      <PageSection title="SMS and email readiness">
        <BulletList
          items={[
            "Production outreach needs client-approved consent and opt-out language.",
            "Business text messaging is registered and approved before it is used at volume.",
            "Marketing email must use accurate sender identity and non-deceptive subject lines.",
            "SMS workflows need opt-in, unsubscribe handling, quiet hours, and realistic frequency caps.",
          ]}
        />
      </PageSection>

      <PageSection title="Recordings and customer data">
        <BulletList
          items={[
            "Call recording, transcript, and retention rules are agreed before launch.",
            "Public forms collect business workflow information only, not payment or other sensitive customer details.",
            "Access is limited to the people and systems that need it, and removed at handoff.",
          ]}
        />
      </PageSection>

      <PageSection title="Security posture">
        <p>
          ClearAutomations uses a practical small-business security posture:
          identify systems and data, protect access, detect failures, respond to
          issues, and recover through exports, documentation, and manual fallback
          paths.
        </p>
      </PageSection>
    </SimplePage>
  );
}
