import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  title: "Front Desk Revenue Recovery | ClearAutomations",
  description:
    "The ClearAutomations offer ladder: a free Missed-Call Snapshot, $1,000 Revenue-Recovery Blueprint, managed implementation, and qualified AI Employee expansion.",
};

const offers = [
  {
    label: "Start here",
    title: "Free Missed-Call Snapshot",
    price: "Free",
    timing: "One business day",
    body:
      "A one-page review based on public information. It identifies observable call and booking gaps, shows its assumptions, and names the real data needed to validate the opportunity.",
    items: [
      "Published hours and after-hours path",
      "Visible call and booking options",
      "Observable gaps separated from assumptions",
      "No comprehensive SEO review or custom video audit",
    ],
    href: "/#audit",
    cta: "Request the free Snapshot",
  },
  {
    label: "Validate with real data",
    title: "Revenue-Recovery Blueprint",
    price: "$1,000 one time",
    timing: "Five business days",
    body:
      "One 45-minute discovery plus analysis of available call, lead, booking, estimate, and workflow data. You receive a current-state map, ROI range, implementation plan, and measurement plan.",
    items: [
      "Actual-data leakage baseline",
      "Current-state workflow map",
      "Native-first capability review",
      "Full $1,000 credit toward implementation within 60 days",
    ],
    href: "/#blueprint",
    cta: "Request the Blueprint",
  },
  {
    label: "Principal engagement",
    title: "Front Desk Revenue Recovery",
    price: "$5,000–10,000 implementation + $1,500–3,000/mo",
    timing: "Scoped in the Blueprint",
    body:
      "A managed workflow for missed calls, after-hours or overflow handling, lead response, open-estimate follow-up, CRM/FSM logging, human handoffs, QA, and performance reporting.",
    items: [
      "Price based on volume, locations, integrations, and workflows",
      "Client-owned accounts wherever practical",
      "Reliability monitoring and ongoing optimization",
      "Reporting against the verified baseline",
    ],
    href: "/services/voice-agent-setup",
    cta: "View implementation details",
  },
  {
    label: "Expansion after proof",
    title: "AI Employee Expansion",
    price: "Typically $5,000/mo",
    timing: "After visible ROI",
    body:
      "A later expansion for high-volume, multi-location, or multi-workflow clients. It begins only after Front Desk Revenue Recovery is live and the next workflow has a quantified business case.",
    items: [
      "Not sold as the front-door offer",
      "Requires baseline metrics and visible ROI",
      "Adds only a measured, valuable second workflow",
      "Builds on the client's existing systems first",
    ],
    href: "/#blueprint",
    cta: "Start with the Blueprint",
  },
];

export default function ServicesPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-24 pb-16 sm:pt-32 sm:pb-20">
        <section className="max-w-[1100px] mx-auto px-6 sm:px-10">
          <p className="text-[13px] font-medium text-[var(--amber)] tracking-wide uppercase mb-6">
            One offer ladder
          </p>
          <h1 className="font-[var(--font-display)] text-[clamp(2.3rem,5vw,3.8rem)] font-bold leading-[1.08] text-[var(--ink)] mb-6 max-w-[820px]">
            Recover missed calls and stalled estimates. Build more only after it proves out.
          </h1>
          <p className="text-[clamp(1rem,1.8vw,1.15rem)] leading-[1.7] text-[var(--ink-soft)] max-w-[760px] mb-12">
            ClearAutomations helps HVAC and plumbing companies connect call
            handling, lead response, estimate follow-up, booking, and CRM/FSM
            workflows. We check the systems you already own before adding custom
            infrastructure.
          </p>

          <div className="grid gap-6 lg:grid-cols-2">
            {offers.map((offer) => (
              <article
                key={offer.title}
                className="border border-[rgba(255,255,255,0.1)] rounded-lg p-6 sm:p-8 bg-[var(--surface)]"
              >
                <p className="text-[12px] font-semibold text-[var(--amber)] uppercase tracking-widest mb-3">
                  {offer.label}
                </p>
                <h2 className="font-[var(--font-display)] text-[1.8rem] font-bold text-[var(--ink)] mb-3">
                  {offer.title}
                </h2>
                <p className="font-[var(--font-display)] text-[1.2rem] text-[var(--amber)] mb-1">
                  {offer.price}
                </p>
                <p className="text-[13px] text-[var(--ink-dim)] mb-5">{offer.timing}</p>
                <p className="text-[14px] text-[var(--ink-soft)] leading-[1.7] mb-6">
                  {offer.body}
                </p>
                <ul className="space-y-2.5 mb-8">
                  {offer.items.map((item) => (
                    <li key={item} className="text-[13px] text-[var(--ink-soft)] flex gap-2.5 items-start">
                      <span className="text-[var(--amber)] mt-0.5 shrink-0">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={offer.href}
                  className="inline-flex items-center justify-center text-[14px] font-semibold text-[var(--amber)] border border-[rgba(212,168,67,0.3)] px-5 py-3 rounded hover:bg-[rgba(212,168,67,0.08)] transition-colors"
                >
                  {offer.cta}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="max-w-[1100px] mx-auto px-6 sm:px-10 mt-14">
          <div className="border border-[rgba(212,168,67,0.25)] rounded-lg p-6 sm:p-8 bg-[var(--stone-dark)]">
            <p className="font-[var(--font-display)] text-[1.5rem] font-bold text-[var(--ink)] mb-3">
              Start without sharing internal data.
            </p>
            <p className="text-[15px] text-[var(--ink-soft)] leading-[1.7] mb-6 max-w-[720px]">
              The free Missed-Call Snapshot uses only public information and
              identifies what would need to be verified before anyone claims a
              dollar impact.
            </p>
            <Link
              href="/#audit"
              className="inline-flex items-center justify-center bg-[var(--amber)] text-[var(--stone)] text-[15px] font-semibold py-3.5 px-8 rounded hover:bg-[var(--amber-hover)] transition-colors"
            >
              Get a Free Missed-Call Snapshot
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
