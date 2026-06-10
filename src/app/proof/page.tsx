import type { Metadata } from "next";
import { PageSection, SimplePage } from "@/components/simple-page";

export const metadata: Metadata = {
  title: "Proof | Clear Automations",
  description:
    "Modeled ClearAutomations examples and case-study policy before approved client results are public.",
};

const examples = [
  {
    title: "HVAC missed-call recovery",
    body:
      "Modeled example: after-hours service calls route into a callback queue, CRM record, and owner digest instead of waiting in voicemail.",
  },
  {
    title: "Roofing storm lead intake",
    body:
      "Modeled example: storm leads are captured, prioritized, and routed toward inspection scheduling with no claim-outcome promises.",
  },
  {
    title: "Dental no-show and recall recovery",
    body:
      "Modeled example: fake-data patient records show schedule gaps, no-shows, recall opportunities, and treatment-plan follow-up without public PHI collection.",
  },
  {
    title: "Therapy consult response",
    body:
      "Modeled example: non-PHI consult requests are organized for faster response while deeper intake and claims work stays behind BAA readiness.",
  },
];

export default function ProofPage() {
  return (
    <SimplePage
      eyebrow="Proof"
      title="Modeled examples until client results are approved."
      description="ClearAutomations will only publish real client names, metrics, screenshots, or stories after written permission. Until then, this page uses clearly labeled modeled examples."
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

