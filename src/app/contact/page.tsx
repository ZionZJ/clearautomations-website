import type { Metadata } from "next";
import { PageSection, SimplePage } from "@/components/simple-page";
import { isPlaceholder, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact | ClearAutomations",
  description:
    "Contact ClearAutomations for a Missed-Call Snapshot, Revenue-Recovery Blueprint, or Front Desk Revenue Recovery engagement.",
};

export default function ContactPage() {
  return (
    <SimplePage
      eyebrow="Contact"
      title="Start with a free Missed-Call Snapshot."
      description="The fastest path is the Snapshot form on the homepage. Use this page when you need direct contact details."
    >
      <PageSection title="Direct contact">
        <p>
          Book a 20-minute call:{" "}
          <a
            className="text-[var(--amber)] underline"
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            cal.com/clearautomations/discovery
          </a>
        </p>
        <p>
          Email:{" "}
          <a className="text-[var(--amber)] underline" href={`mailto:${siteConfig.contactEmail}`}>
            {siteConfig.contactEmail}
          </a>
        </p>
        {!isPlaceholder(siteConfig.phoneDisplay) && (
          <p>
            Phone:{" "}
            <a className="text-[var(--amber)] underline" href={siteConfig.phoneHref}>
              {siteConfig.phoneDisplay}
            </a>
          </p>
        )}
        <p>Expected response: same business day for new inquiries.</p>
      </PageSection>

      <PageSection title="Business identity">
        <p>Public brand: {siteConfig.displayName}</p>
        <p>Based in Texas.</p>
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

