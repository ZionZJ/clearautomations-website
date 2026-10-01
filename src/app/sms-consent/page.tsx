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
    src: "/sms-consent/meta-form-1-intro-and-questions.png",
    width: 551,
    height: 1166,
    label: "1. Form intro and the separate text-message question",
    caption:
      "The form describes the free Missed-Call Snapshot, then asks \"May ClearAutomations text you about this Snapshot request?\" as its own question. It is not combined with email or phone consent.",
  },
  {
    src: "/sms-consent/meta-form-2-contact-info.png",
    width: 529,
    height: 1006,
    label: "2. Contact information and data use",
    caption:
      "Explains how contact details are used and states that selecting \"No\" to texts does not affect delivery of the Snapshot. Personal details in this test submission are redacted.",
  },
  {
    src: "/sms-consent/meta-form-3-terms-and-sms-disclosure.png",
    width: 548,
    height: 590,
    label: "3. Terms and SMS disclosure shown before Submit",
    caption:
      "Discloses up to three texts per request, message and data rates, STOP and HELP, that text consent is not required, and links to the ClearAutomations Terms and Privacy Policy.",
  },
  {
    src: "/sms-consent/meta-form-4-confirmation.png",
    width: 539,
    height: 639,
    label: "4. Confirmation after Submit",
    caption:
      "Confirms the Snapshot will be emailed within one business day and that no call is required to receive it. Booking a call is offered only as an optional next step.",
  },
];

export default function SmsConsentPage() {
  return (
    <SimplePage
      eyebrow="SMS consent"
      title="How people opt in to ClearAutomations text messages."
      description="ClearAutomations texts only people who request a Free Missed-Call Snapshot and separately agree to receive texts about that request. Text consent is optional, never pre-checked, and never combined with email or phone-call consent."
    >
      <PageSection title="Program details">
        <BulletList
          items={[
            "Program name: ClearAutomations.",
            "Messages relate only to the person's Free Missed-Call Snapshot request and its follow-up.",
            "Up to three text messages per Snapshot request. Message frequency varies.",
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
          number if one is given. Text messages require a separate, optional,
          unchecked checkbox. The text checkbox shows the full SMS disclosure
          and links to the Terms and Privacy Policy. A person can submit the
          form and receive the Snapshot without checking it.
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
