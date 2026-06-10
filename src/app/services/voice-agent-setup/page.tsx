import type { Metadata } from "next";
import Link from "next/link";
import { BulletList, PageSection, SimplePage } from "@/components/simple-page";

export const metadata: Metadata = {
  title: "AI Front-Desk Employee Setup + Retainer | ClearAutomations",
  description:
    "Managed AI phone intake, missed-call recovery, routing, CRM logging, testing, and monthly tuning for small businesses.",
};

export default function VoiceAgentSetupPage() {
  return (
    <SimplePage
      eyebrow="Featured service"
      title="AI Front-Desk Employee Setup + Retainer"
      description="Never let a qualified call die in voicemail. ClearAutomations builds and manages the phone layer of your AI employee: it answers, qualifies, routes, and documents calls with clear human handoff rules."
    >
      <PageSection title="What this includes">
        <BulletList
          items={[
            "AI phone agent setup for your main intake, missed-call, or after-hours path.",
            "Business-specific scripts, FAQs, routing logic, and escalation rules.",
            "CRM logging for caller details, call summary, lead stage, and next task.",
            "Missed-call text-back, owner alerts, voicemail summaries, and follow-up paths.",
            "Launch testing with sample calls before the agent handles real callers.",
            "Monthly transcript review, prompt tuning, and workflow cleanup.",
          ]}
        />
      </PageSection>

      <PageSection title="Pricing">
        <p>
          This is the phone layer of the AI employee, scoped as a standalone build.
          Exact setup and monthly pricing is scoped in your{" "}
          <strong>$1,000 AI Assessment</strong>. We map your real call paths,
          integrations, and compliance needs first, then quote a fixed number with
          no surprises. The Assessment credits toward the build.
        </p>
      </PageSection>

      <PageSection title="Best fit">
        <BulletList
          items={[
            "Service businesses that miss calls after hours or during busy windows.",
            "Teams that need caller summaries and follow-up tasks in the CRM.",
            "Owners who want coverage without handing caller experience to a black box.",
            "Industries with urgent, high-intent inquiries like HVAC, roofing, dental, therapy, legal intake, and home services.",
          ]}
        />
      </PageSection>

      <PageSection title="Trust boundaries">
        <BulletList
          items={[
            "AI voice agents should use approved disclosure language.",
            "Human handoff and emergency fallback rules are defined before launch.",
            "Regulated workflows need consent, recording, BAA, retention, and vendor review before production use.",
            "The agent does not diagnose, provide legal advice, promise claim outcomes, or replace professional judgment.",
          ]}
        />
        <p>
          See the public{" "}
          <Link href="/trust" className="text-[var(--amber)]">
            Trust
          </Link>{" "}
          page for the operating boundaries used across ClearAutomations voice,
          SMS, email, and healthcare-ready workflows.
        </p>
      </PageSection>

      <PageSection title="Start here">
        <p>
          The free audit maps your current call flow, missed-call handling,
          routing rules, calendar or CRM needs, and the smallest useful launch
          version.
        </p>
        <Link
          href="/#audit"
          className="inline-flex items-center justify-center bg-[var(--amber)] text-[var(--stone)] text-[15px] font-semibold py-3.5 px-8 rounded hover:bg-[var(--amber-hover)] transition-colors"
        >
          Get a Free Audit
        </Link>
      </PageSection>
    </SimplePage>
  );
}
