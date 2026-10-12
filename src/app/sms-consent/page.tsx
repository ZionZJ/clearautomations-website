import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BulletList, PageSection, SimplePage } from "@/components/simple-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "SMS Consent | ClearAutomations",
  description:
    "How people opt in to ClearAutomations text messages, with screenshots of the live opt-in forms.",
  // Public for carrier and 10DLC reviewers, but not a marketing page.
  robots: { index: false, follow: true },
};

const metaScreens = [
  {
    src: "/sms-consent/meta-v2-1-intro.png",
    width: 549,
    height: 1163,
    label: "1. Form intro and the separate text-message question",
    caption:
      "The form describes the free Missed-Call Snapshot, then asks \"May ClearAutomations text you about your Snapshot and related services, including automated marketing offers?\" as its own question. It has no default answer and is not combined with email or phone consent.",
  },
  {
    src: "/sms-consent/meta-v2-2-answer-no.png",
    width: 547,
    height: 1157,
    label: "2. Declining texts still continues",
    caption:
      "The two answers are \"Yes, text me\" and \"No, email only\". Choosing \"No, email only\" lets the person continue and receive the Snapshot by email.",
  },
  {
    src: "/sms-consent/meta-v2-3-contact-info.png",
    width: 546,
    height: 1015,
    label: "3. Contact information and data use",
    caption:
      "Explains how contact details are used and states that selecting \"No\" to texts does not affect delivery of the Snapshot. Personal details in this test submission are redacted.",
  },
  {
    src: "/sms-consent/meta-v2-4-terms.png",
    width: 545,
    height: 625,
    label: "4. Terms and SMS disclosure shown before Submit",
    caption:
      "Discloses customer-care and recurring automated marketing texts about the Snapshot and related ClearAutomations services, up to 4 messages per month, message and data rates, STOP and HELP, that text consent is not required, and that SMS opt-in information is not shared with third parties for marketing. Links to the ClearAutomations Terms and Privacy Policy.",
  },
  {
    src: "/sms-consent/meta-v2-5-confirmation.png",
    width: 544,
    height: 637,
    label: "5. Confirmation after Submit",
    caption:
      "Confirms the Snapshot will be emailed within one business day and that no call is required to receive it. Booking a call is offered only as an optional next step.",
  },
];

export default function SmsConsentPage() {
  return (
    <SimplePage
      eyebrow="SMS consent"
      title="How people opt in to ClearAutomations text messages."
      description="ClearAutomations texts only people who request a Free Missed-Call Snapshot and separately agree to receive texts about their Snapshot and related ClearAutomations services. Text consent is optional, never pre-checked, and never combined with email or phone-call consent."
    >
      <PageSection title="Program details">
        <BulletList
          items={[
            "Program name: ClearAutomations.",
            "Messages relate to the person's Free Missed-Call Snapshot and related ClearAutomations services, including recurring automated marketing messages.",
            "Up to 4 text messages per month. Message frequency varies.",
            "Message and data rates may apply.",
            "Reply STOP to opt out or HELP for help. Consent is not a condition of purchase.",
            "SMS opt-in information is not shared with third parties for marketing.",
          ]}
        />
        <p>
          Full terms:{" "}
          <a className="text-[var(--amber)] underline" href="/terms#text-messaging">
            Text messaging terms
          </a>{" "}
          and{" "}
          <a className="text-[var(--amber)] underline" href="/privacy">
            Privacy Policy
          </a>
          . Support:{" "}
          <a className="text-[var(--amber)] underline" href={`mailto:${siteConfig.contactEmail}`}>
            {siteConfig.contactEmail}
          </a>
          .
        </p>
      </PageSection>

      <PageSection title="Opt-in path 1: website form">
        <p>
          The Free Missed-Call Snapshot form at{" "}
          <Link className="text-[var(--amber)] underline" href="/#audit">
            www.clearautomations.com/#audit
          </Link>{" "}
          emails the Snapshot to the address provided and may call the phone
          number, if one is given, about the request and related
          ClearAutomations services. Text messages require a separate,
          optional, unchecked checkbox. The text checkbox shows the full SMS
          disclosure, including that some texts are marketing messages, and
          links to the Terms and Privacy Policy. A person can submit the form
          and receive the Snapshot without checking it.
        </p>
      </PageSection>

      <PageSection title="Opt-in path 2: Meta (Facebook and Instagram) lead form">
        <p>
          Screenshots of the live Meta Instant Form used by ClearAutomations
          lead ads. A person can submit the form and receive the Snapshot
          whether they answer Yes or No to texts.
        </p>
        <div className="grid gap-8 sm:grid-cols-2">
          {metaScreens.map((screen) => (
            <figure key={screen.src} className="flex flex-col gap-3">
              <Image
                src={screen.src}
                width={screen.width}
                height={screen.height}
                alt={screen.label}
                className="w-full h-auto rounded-lg border border-[var(--rule)] bg-white"
              />
              <figcaption>
                <p className="font-[var(--font-display)] text-[1.05rem] text-[var(--ink)] font-bold mb-1">
                  {screen.label}
                </p>
                <p className="text-[14px]">{screen.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </PageSection>
    </SimplePage>
  );
}
