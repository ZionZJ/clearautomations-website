import type { Metadata } from "next";
import { BulletList, PageSection, SimplePage } from "@/components/simple-page";
import { isPlaceholder, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms | ClearAutomations",
  description:
    "Service terms outline and business-use boundaries for ClearAutomations.",
};

export default function TermsPage() {
  return (
    <SimplePage
      eyebrow="Terms"
      title="Service terms outline."
      description="A plain-language outline of how ClearAutomations works with clients. Signed client engagements use written proposals and agreements reviewed by counsel."
    >
      <PageSection title="Scope of this page">
        <p>
          This page is a business-readiness outline, not legal advice. Signed
          client work is governed by the written proposal or statement of work
          for that engagement.
        </p>
      </PageSection>

      <PageSection title="Services">
        <p>
          ClearAutomations may provide automation strategy, website and workflow
          implementation, AI voice or chat configuration, CRM setup, reporting,
          documentation, training, and support as agreed in a written proposal
          or statement of work.
        </p>
      </PageSection>

      <PageSection title="Client responsibilities">
        <BulletList
          items={[
            "Provide accurate business information and timely approvals.",
            "Own or approve the systems connected to the project.",
            "Approve customer-facing copy, consent language, and disclosures before launch.",
            "Confirm applicable legal, privacy, industry, and professional requirements.",
          ]}
        />
      </PageSection>

      <PageSection title="Boundaries">
        <BulletList
          items={[
            "ClearAutomations does not provide legal, medical, insurance, financial, or clinical advice.",
            "AI workflows route, summarize, and assist approved business processes; they do not replace licensed judgment.",
            "Regulated workflows may require a separate agreement, BAA, vendor review, retention controls, and access controls before production use.",
          ]}
        />
      </PageSection>

      <div id="text-messaging" className="scroll-mt-24">
        <PageSection title="Text messaging terms">
          <p>
            <strong>Program name:</strong> ClearAutomations. These terms apply
            when you check the optional text-message box on a ClearAutomations
            form.
          </p>
          <BulletList
            items={[
              "Messages relate only to your Free Missed-Call Snapshot request and its follow-up, such as confirming we received your request, letting you know your Snapshot is ready, and scheduling a follow-up conversation you asked for.",
              "You will receive up to three text messages per Snapshot request. Message frequency varies.",
              "Message and data rates may apply.",
              "Consent to receive text messages is optional and is not a condition of purchase.",
              "Reply STOP at any time to opt out. You will receive one message confirming the opt-out and no further texts.",
              "Reply HELP for help.",
              "Carriers are not liable for delayed or undelivered messages.",
              "SMS opt-in information is not shared with third parties for marketing.",
            ]}
          />
          <p>
            Support:{" "}
            <a className="text-[var(--amber)] underline" href={`mailto:${siteConfig.contactEmail}`}>
              {siteConfig.contactEmail}
            </a>{" "}
            or{" "}
            <a className="text-[var(--amber)] underline" href={siteConfig.phoneHref}>
              {siteConfig.phoneDisplay}
            </a>
            . See the{" "}
            <a className="text-[var(--amber)] underline" href="/privacy">
              Privacy Policy
            </a>{" "}
            for how ClearAutomations handles your information.
          </p>
        </PageSection>
      </div>

      {(!isPlaceholder(siteConfig.legalEntity) ||
        !isPlaceholder(siteConfig.mailingAddress)) && (
        <PageSection title="Business details">
          {!isPlaceholder(siteConfig.legalEntity) && (
            <p>Legal entity: {siteConfig.legalEntity}</p>
          )}
          {!isPlaceholder(siteConfig.mailingAddress) && (
            <p>Mailing address: {siteConfig.mailingAddress}</p>
          )}
        </PageSection>
      )}
    </SimplePage>
  );
}

