import type { Metadata } from "next";
import { BulletList, PageSection, SimplePage } from "@/components/simple-page";
import { isPlaceholder, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy | ClearAutomations",
  description:
    "How ClearAutomations handles business workflow information, public form submissions, and sensitive data boundaries.",
};

export default function PrivacyPage() {
  return (
    <SimplePage
      eyebrow="Privacy"
      title="Plain-language privacy notice."
      description="ClearAutomations collects only the information needed to respond to business workflow requests and build approved automation projects."
    >
      <PageSection title="What public forms collect">
        <p>
          Public forms may collect business contact details, website URL,
          current tools, workflow pain points, service area, lead volume, and
          other information needed to evaluate an automation opportunity.
        </p>
        <p>
          Do not submit patient information, payment card details, access codes,
          passwords, insurance IDs, clinical notes, legal matter details, or
          other sensitive private information through public forms.
        </p>
      </PageSection>

      <PageSection title="How submissions are processed">
        <p>
          Form submissions are routed through ClearAutomations lead endpoints
          and then sent to approved workflow systems for review and follow-up.
          The public site does not sell personal information.
        </p>
        <p>
          If you submit a form, ClearAutomations may contact you by email,
          phone call, or text message about your request. Texts are sent only
          with your consent. Marketing email follow-up includes a way to opt
          out.
        </p>
      </PageSection>

      <PageSection title="Text messaging (SMS)">
        <p>
          ClearAutomations texts only people who contacted us directly and
          agreed to be contacted. We do not text purchased or shared lead
          lists.
        </p>
        <p>
          SMS opt-in data and text messaging consent records are not shared
          with, sold to, or transferred to third parties or affiliates for
          marketing purposes.
        </p>
        <p>
          Message and data rates may apply. Reply STOP to opt out of SMS. STOP
          requests are processed automatically and no further text messages
          will be sent, except for a confirmation of the opt-out. You may also
          request removal by email, phone, or voicemail, and ClearAutomations
          will process the request promptly.
        </p>
      </PageSection>

      <PageSection title="Data boundaries">
        <BulletList
          items={[
            "Public forms collect business workflow information only, not customer payment details, access codes, or other sensitive private data.",
            "Workflow demos use sample data until a client approves the production setup.",
            "Call recording, transcript, and retention rules are agreed with each client before launch.",
            "SMS, email, and AI voice workflows require client-approved consent, opt-out, disclosure, and escalation rules before production use.",
          ]}
        />
      </PageSection>

      <PageSection title="Contact">
        {!isPlaceholder(siteConfig.legalEntity) && (
          <p>Legal entity: {siteConfig.legalEntity}</p>
        )}
        {!isPlaceholder(siteConfig.mailingAddress) && (
          <p>Mailing address: {siteConfig.mailingAddress}</p>
        )}
        <p>
          Questions:{" "}
          <a className="text-[var(--amber)] underline" href={`mailto:${siteConfig.contactEmail}`}>
            {siteConfig.contactEmail}
          </a>
        </p>
      </PageSection>
    </SimplePage>
  );
}

