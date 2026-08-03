import type { Metadata } from "next";
import Link from "next/link";
import { BulletList, PageSection, SimplePage } from "@/components/simple-page";

export const metadata: Metadata = {
  title: "Founder Content System | Clear Automations",
  description:
    "AI-assisted founder content operations for ideas, drafts, short-form scripts, repurposing, publishing rhythm, and monthly performance review.",
};

export default function FounderContentSystemPage() {
  return (
    <SimplePage
      eyebrow="Secondary service"
      title="Founder Content System"
      description="Turn founder knowledge into consistent content without building a media team. This is a content operating system for the sales engine, not generic social posting."
    >
      <PageSection title="What this includes">
        <BulletList
          items={[
            "Weekly content ideas from founder notes, sales calls, FAQs, and customer objections.",
            "Post drafts, short-form video scripts, newsletter angles, and repurposed proof assets.",
            "A repeatable intake and approval workflow so the founder stays in control.",
            "A monthly calendar that supports launches, lead magnets, audits, and service offers.",
            "Performance review to see which topics create replies, calls, and booked conversations.",
          ]}
        />
      </PageSection>

      <PageSection title="Pricing">
        <p>
          Typical retainers run <strong>$1,500-4,000/month</strong>. Setup is
          scoped after the audit when the content sources, approval cadence,
          brand voice, channels, and repurposing needs are clear.
        </p>
      </PageSection>

      <PageSection title="Best fit">
        <BulletList
          items={[
            "Founder-led businesses where expertise is stuck in the founder's head.",
            "Consultants, agencies, local service brands, and B2B operators that need consistent trust-building content.",
            "Teams with sales calls, FAQs, case examples, or field knowledge that can be repurposed.",
            "Businesses that want content to support lead generation instead of becoming a separate media project.",
          ]}
        />
      </PageSection>

      <PageSection title="What this is not">
        <BulletList
          items={[
            "Not a promise of viral growth.",
            "Not a replacement for approved claims, compliance review, or client permission.",
            "Not tool-specific public branding. The tools stay behind the scenes; the offer is the operating system.",
            "Not a general video agency package unless the creative supports a launch, retargeting campaign, proof asset, or lead capture workflow.",
          ]}
        />
      </PageSection>

      <PageSection title="Start here">
        <p>
          The free audit checks whether your content problem is really an idea
          capture problem, a publishing rhythm problem, or a lead conversion
          problem.
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
