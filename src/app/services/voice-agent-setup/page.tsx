import type { Metadata } from "next";
import Link from "next/link";
import { BulletList, PageSection, SimplePage } from "@/components/simple-page";

export const metadata: Metadata = {
  title: "Front Desk Revenue Recovery | ClearAutomations",
  description:
    "Managed missed-call recovery, lead and estimate follow-up, CRM/FSM workflows, human handoffs, QA, and performance reporting for HVAC and plumbing companies.",
};

export default function FrontDeskRevenueRecoveryPage() {
  return (
    <SimplePage
      eyebrow="Principal engagement"
      title="Front Desk Revenue Recovery"
      description="Recover missed calls and stalled estimates through a managed workflow built around the systems your HVAC or plumbing company already uses."
    >
      <PageSection title="Typical scope">
        <BulletList
          items={[
            "After-hours and overflow call handling with explicit human handoffs.",
            "Missed-call, new-lead, and open-estimate follow-up paths.",
            "CRM/FSM logging, stage updates, owner assignment, alerts, and exception tasks.",
            "Native-platform review before custom tools are added.",
            "Launch QA, reliability monitoring, transcript/workflow review, and ongoing tuning.",
            "Weekly reporting against the baseline established in the Blueprint.",
          ]}
        />
      </PageSection>

      <PageSection title="Pricing">
        <p>
          Implementation is typically <strong>$5,000–$10,000</strong>, followed
          by <strong>$1,500–$3,000 per month</strong> for management. Price is
          based on inbound volume, locations, integrations, channels, workflow
          complexity, compliance, reporting, and support.
        </p>
        <p>
          The scope comes from the <strong>$1,000 Revenue-Recovery Blueprint</strong>.
          The full Blueprint fee credits toward an implementation agreement
          signed within 60 days.
        </p>
      </PageSection>

      <PageSection title="Success measures">
        <BulletList
          items={[
            "Lead response and contact time",
            "Qualified conversations and appointments booked",
            "Open estimates reactivated",
            "Recovered revenue using client-confirmed job data",
            "Workflow failure and escalation rate",
            "Administrative time saved",
          ]}
        />
      </PageSection>

      <PageSection title="Ownership and boundaries">
        <BulletList
          items={[
            "Client-owned accounts wherever practical, with a documented handoff path.",
            "Approved disclosure, recording, consent, retention, and escalation rules before launch.",
            "No diagnosis, legal advice, claim-outcome promises, or replacement of professional judgment.",
            "No promise of a specific recovered dollar amount before a real baseline exists.",
          ]}
        />
        <p>
          See the public <Link href="/trust" className="text-[var(--amber)]">Trust</Link> page for operating boundaries.
        </p>
      </PageSection>

      <PageSection title="Start here">
        <p>
          Begin with the free Missed-Call Snapshot. It uses public information
          to identify observable gaps and the data needed to validate them.
        </p>
        <Link
          href="/#audit"
          className="inline-flex items-center justify-center bg-[var(--amber)] text-[var(--stone)] text-[15px] font-semibold py-3.5 px-8 rounded hover:bg-[var(--amber-hover)] transition-colors"
        >
          Get a Free Missed-Call Snapshot
        </Link>
      </PageSection>
    </SimplePage>
  );
}
