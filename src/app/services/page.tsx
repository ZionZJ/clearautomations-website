import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  title: "Services | ClearAutomations",
  description:
    "Productized ClearAutomations services: the AI front-desk employee, missed-call recovery, and founder-led content systems.",
};

const services = [
  {
    label: "Featured service",
    title: "AI Front-Desk Employee Setup + Retainer",
    href: "/services/voice-agent-setup",
    promise: "Never let a qualified call die in voicemail.",
    price: "Typically $3,000-10,000 setup, then $1,500-3,000/mo",
    priceNote:
      "Exact scope and price come out of your $1,000 AI Assessment, which credits 100% toward the build.",
    body:
      "Managed AI phone intake, missed-call recovery, routing, CRM logging, launch testing, and monthly tuning for service businesses.",
    items: [
      "Inbound AI phone agent configured around your real call paths",
      "Missed-call text-back, voicemail summary, and owner alerts",
      "CRM notes, lead stages, and escalation rules",
      "Monthly transcript review and script tuning",
    ],
  },
  {
    label: "Secondary service",
    title: "Founder Content System",
    href: "/services/founder-content-system",
    promise:
      "Turn founder knowledge into consistent content without building a media team.",
    price: "Typically $1,500-4,000/mo",
    priceNote:
      "Build-and-hand-over option available: a one-time engine build, then a lighter monthly retainer.",
    body:
      "An AI-assisted content operating system for founders who need ideas, drafts, short-form scripts, repurposing, and a sane publishing rhythm.",
    items: [
      "Weekly content ideas pulled from your sales calls and expertise",
      "Post drafts, short-form video scripts, and newsletter angles",
      "Repurposing system for LinkedIn, email, and social clips",
      "Monthly performance review and content calendar reset",
    ],
  },
];

const supportOffers = [
  "Brand Asset Sprint for campaign visuals and launch assets",
  "Video Edit Package for proof clips, explainers, and sales enablement",
  "Future AI ad creative only when tied to lead generation or retargeting",
];

export default function ServicesPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-24 pb-16 sm:pt-32 sm:pb-20">
        <section className="max-w-[1100px] mx-auto px-6 sm:px-10">
          <p className="text-[13px] font-medium text-[var(--amber)] tracking-wide uppercase mb-6">
            Services
          </p>
          <h1 className="font-[var(--font-display)] text-[clamp(2.3rem,5vw,3.8rem)] font-bold leading-[1.08] text-[var(--ink)] mb-6 max-w-[780px]">
            Systems that answer, follow up, and keep the pipeline moving.
          </h1>
          <p className="text-[clamp(1rem,1.8vw,1.15rem)] leading-[1.7] text-[var(--ink-soft)] max-w-[700px] mb-12">
            ClearAutomations stays focused on practical revenue systems:
            the AI front-desk employee, lead recovery, CRM workflows, and
            content systems that support the sales engine.
          </p>

          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="border border-[rgba(255,255,255,0.1)] rounded-lg p-6 sm:p-8 bg-[var(--surface)]"
              >
                <p className="text-[12px] font-semibold text-[var(--amber)] uppercase tracking-widest mb-3">
                  {service.label}
                </p>
                <h2 className="font-[var(--font-display)] text-[1.8rem] font-bold text-[var(--ink)] mb-3">
                  {service.title}
                </h2>
                <p className="text-[15px] text-[var(--ink)] leading-[1.6] mb-3">
                  {service.promise}
                </p>
                <p className="font-[var(--font-display)] text-[1.2rem] text-[var(--amber)] mb-2">
                  {service.price}
                </p>
                {service.priceNote && (
                  <p className="text-[13px] text-[var(--ink-dim)] leading-[1.6] mb-5">
                    {service.priceNote}
                  </p>
                )}
                <p className="text-[14px] text-[var(--ink-soft)] leading-[1.7] mb-6">
                  {service.body}
                </p>
                <ul className="space-y-2.5 mb-8">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="text-[13px] text-[var(--ink-soft)] flex gap-2.5 items-start"
                    >
                      <span className="text-[var(--amber)] mt-0.5 shrink-0">
                        -
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center justify-center text-[14px] font-semibold text-[var(--amber)] border border-[rgba(212,168,67,0.3)] px-5 py-3 rounded hover:bg-[rgba(212,168,67,0.08)] transition-colors"
                >
                  View service details
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="max-w-[1100px] mx-auto px-6 sm:px-10 mt-14 pt-10 border-t border-[var(--rule)]">
          <div className="grid gap-8 md:grid-cols-[1fr_1.5fr]">
            <div>
              <p className="text-[13px] font-medium text-[var(--ink-dim)] tracking-wide uppercase mb-3">
                Support offers
              </p>
              <h2 className="font-[var(--font-display)] text-[1.8rem] font-bold text-[var(--ink)] leading-tight">
                Creative work stays tied to lead generation.
              </h2>
            </div>
            <div>
              <p className="text-[15px] text-[var(--ink-soft)] leading-[1.8] mb-5">
                Design, video, and ad creative can help, but they are not the
                center of the business. They are used when they support a
                launch, retargeting campaign, proof asset, or lead capture
                workflow.
              </p>
              <ul className="space-y-2.5">
                {supportOffers.map((offer) => (
                  <li
                    key={offer}
                    className="text-[14px] text-[var(--ink-soft)] flex gap-2.5 items-start"
                  >
                    <span className="text-[var(--amber)] mt-0.5 shrink-0">
                      -
                    </span>
                    {offer}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-[1100px] mx-auto px-6 sm:px-10 mt-14">
          <div className="border border-[rgba(212,168,67,0.25)] rounded-lg p-6 sm:p-8 bg-[var(--stone-dark)]">
            <p className="font-[var(--font-display)] text-[1.5rem] font-bold text-[var(--ink)] mb-3">
              Not sure which system is leaking revenue first?
            </p>
            <p className="text-[15px] text-[var(--ink-soft)] leading-[1.7] mb-6">
              Start with the free audit. We will look at your calls, forms,
              follow-up, CRM, and content engine, then recommend the smallest
              useful build.
            </p>
            <Link
              href="/#audit"
              className="inline-flex items-center justify-center bg-[var(--amber)] text-[var(--stone)] text-[15px] font-semibold py-3.5 px-8 rounded hover:bg-[var(--amber-hover)] transition-colors"
            >
              Get a Free Audit
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
