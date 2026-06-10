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

