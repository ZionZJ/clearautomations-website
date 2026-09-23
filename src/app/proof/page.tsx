import type { Metadata } from "next";
import { PageSection, SimplePage } from "@/components/simple-page";

export const metadata: Metadata = {
  title: "Proof | ClearAutomations",
  description:
    "Modeled HVAC and plumbing revenue-recovery workflows and the ClearAutomations case-study policy.",
};

const examples = [
  {
    title: "HVAC after-hours call recovery",
    body:
      "Modeled example: an after-hours no-cool call gets an immediate acknowledgment, is routed to the on-call path or a morning callback queue, and lands in the CRM with an owner assigned instead of waiting in voicemail.",
  },
  {
    title: "Plumbing overflow and emergency routing",
    body:
      "Modeled example: when two calls arrive at once, the overflow caller is acknowledged and triaged. Gas, sewage, and flooding keywords route straight to a person rather than an automated path.",
  },
  {
    title: "Open-estimate follow-up",
    body:
      "Modeled example: replacement and repair estimates receive scheduled follow-up touches with stop and escalation rules, so quotes do not quietly stall after the first send.",
  },
  {
    title: "Baseline and weekly reporting",
    body:
      "Modeled example: response time, contact rate, appointments booked, and estimates reactivated are measured against the pre-launch baseline, with workflow failures logged and assigned.",
  },
];

export default function ProofPage() {
  return (
    <SimplePage
      eyebrow="Proof"
      title="Modeled examples until client results are approved."
      description="ClearAutomations will only publish real client names, metrics, screenshots, or stories after written permission. Until then, this page uses clearly labeled modeled examples. They illustrate the workflow, not a promised result."
    >
      <PageSection title="Modeled workflow examples">
        <div className="grid gap-4 md:grid-cols-2">
          {examples.map((example) => (
            <div
              key={example.title}
              className="border border-[var(--rule)] rounded-lg p-5 bg-[var(--surface)]"
            >
              <p className="font-[var(--font-display)] text-[1.25rem] text-[var(--ink)] font-bold mb-2">
                {example.title}
              </p>
              <p>{example.body}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection title="Publishing rule">
        <p>
          Real case studies require client approval for the business name,
          screenshots, workflows shown, metrics, and any quote attributed to a
          person or company.
        </p>
      </PageSection>
    </SimplePage>
  );
}
