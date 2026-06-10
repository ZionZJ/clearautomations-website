import type { Metadata } from "next";
import { PageSection, SimplePage } from "@/components/simple-page";
import { isPlaceholder, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact | ClearAutomations",
  description:
    "Contact ClearAutomations for AI automation audits and small-business workflow builds.",
};

export default function ContactPage() {
  return (
    <SimplePage
      eyebrow="Contact"
      title="Start with a free audit."
      description="The fastest path is the free audit form on the homepage. Use this page when you need direct contact details."
    >
      <PageSection title="Direct contact">
        <p>
          Email:{" "}
          <a className="text-[var(--amber)] underline" href={`mailto:${siteConfig.contactEmail}`}>
            {siteConfig.contactEmail}
          </a>
        </p>
        {!isPlaceholder(siteConfig.phoneDisplay) && (
          <p>Phone: {siteConfig.phoneDisplay}</p>
        )}
        <p>Expected response: within 1-2 business days for new inquiries.</p>
      </PageSection>

      <PageSection title="Business identity">
        <p>Public brand: {siteConfig.displayName}</p>
        <p>Based in Texas.</p>
        {!isPlaceholder(siteConfig.legalEntity) && (
          <p>Legal entity: {siteConfig.legalEntity}</p>
        )}
        {!isPlaceholder(siteConfig.mailingAddress) && (
          <p>Mailing address: {siteConfig.mailingAddress}</p>
        )}
      </PageSection>

      <PageSection title="Sensitive information">
        <p>
          Please do not email patient information, payment card details, access
          codes, passwords, insurance IDs, legal matter details, or other
          sensitive private information unless a secure client-specific process
          has already been approved.
        </p>
      </PageSection>
    </SimplePage>
  );
}

