import type { Metadata } from "next";
import { BulletList, PageSection, SimplePage } from "@/components/simple-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About | ClearAutomations",
  description:
    "ClearAutomations is a founder-led, managed front-desk revenue-recovery service for HVAC and plumbing companies.",
};

export default function AboutPage() {
  return (
    <SimplePage
      eyebrow="About"
      title="A managed front-desk revenue-recovery service for HVAC and plumbing."
      description="ClearAutomations recovers missed calls, speeds up lead response, follows up open estimates, and keeps your CRM/FSM accurate, using the systems you already have wherever possible."
    >
      <PageSection title="What ClearAutomations does">
        <BulletList
          items={[
            "Missed-call recovery and after-hours or overflow call handling, with clear human handoffs.",
            "New-lead response and open-estimate follow-up that does not depend on someone remembering.",
            "CRM/FSM logging, stage updates, and owner assignment in the tools your team already uses.",
            "Weekly reporting against a measured baseline, so you can see what came back.",
          ]}
        />
      </PageSection>

      <PageSection title="How an engagement starts">
        <p>
          Every engagement starts with a free Missed-Call Snapshot built from
          public information. If the gaps justify a closer look, the $1,000
          Revenue-Recovery Blueprint analyzes your real call, lead, and estimate
          data and produces a plan you own. The Blueprint fee credits in full
          toward implementation within 60 days.
        </p>
      </PageSection>

      <PageSection title="Founder-led delivery">
        <p>
          ClearAutomations is operated by {siteConfig.founderName}, who spent
          five years at RSM deploying AP automation platforms into mid-market
          and enterprise finance teams. The same discipline applies here: map
          the current process, work inside the systems you already run, and
          measure the result. Delivery stays with the person you talked to on
          day one.
        </p>
      </PageSection>

      <PageSection title="How the work is different">
        <BulletList
          items={[
            "Native-first: we check what your current phone, booking, and CRM/FSM tools already do before adding anything.",
            "Client-owned accounts and exports wherever practical, with a documented handoff path.",
            "No invented dollar-loss claims. Estimates are separated from verified data.",
            "Plain-English documentation so your team understands what was built.",
          ]}
        />
      </PageSection>
    </SimplePage>
  );
}
