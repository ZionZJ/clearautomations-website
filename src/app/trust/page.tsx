import type { Metadata } from "next";
import { BulletList, PageSection, SimplePage } from "@/components/simple-page";

export const metadata: Metadata = {
  title: "Trust & Boundaries | Clear Automations",
  description:
    "ClearAutomations trust boundaries for AI voice, SMS, email, HIPAA/BAA readiness, client ownership, and data handling.",
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

      <PageSection title="AI voice boundaries">
        <BulletList
          items={[
            "AI voice agents should identify the business and use approved disclosure language.",
            "Human handoff rules are defined before launch.",
            "AI voice agents do not diagnose, provide legal advice, promise claim outcomes, or replace professional judgment.",
          ]}
        />
      </PageSection>

      <PageSection title="SMS and email readiness">
        <BulletList
          items={[
            "Production outreach needs client-approved consent and opt-out language.",
            "Marketing email must use accurate sender identity and non-deceptive subject lines.",
            "SMS workflows need opt-in, unsubscribe handling, quiet hours, and realistic frequency caps.",
          ]}
        />
      </PageSection>

      <PageSection title="Healthcare and dental readiness">
        <BulletList
          items={[
            "Public forms are designed to stay non-PHI.",
            "Patient-like demos use fake data until production controls are approved.",
            "PHI workflows require the client-approved BAA path, vendor review, access controls, and retention settings before launch.",
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

