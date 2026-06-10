import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries | Clear Automations",
  description:
    "Industry-specific AI automation systems from Clear Automations.",
};

export default function IndustriesPage() {
  return (
    <>
      <SiteNav
        links={[
          { href: "/#phases", label: "Phases" },
          { href: "/#stack-audit", label: "Stack Audit" },
          { href: "/industries", label: "Industries" },
          { href: "/#faq", label: "FAQ" },
        ]}
        ctaHref="/#audit"
      />

      <main className="pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <FadeIn>
            <p className="text-[13px] font-medium text-[var(--amber)] tracking-wide uppercase mb-6">
              Industry playbooks
            </p>
            <h1 className="font-[var(--font-display)] text-[clamp(2.4rem,5vw,3.8rem)] font-bold leading-[1.08] text-[var(--ink)] mb-6 max-w-[760px]">
              Automation offers built around the way each business actually runs.
            </h1>
            <p className="text-[clamp(1rem,1.8vw,1.15rem)] leading-[1.7] text-[var(--ink-soft)] max-w-[660px] mb-12">
              Each vertical has its own workflow model, data boundary, sales
              promise, and tooling policy. Start with the playbook that matches
              the leak you can feel in the business.
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2">
            {industries.map((industry, i) => (
              <FadeIn key={industry.slug} delay={i * 100}>
                <a
                  href={`/industries/${industry.slug}`}
                  className="block border border-[rgba(255,255,255,0.1)] rounded-lg p-6 sm:p-8 bg-[var(--surface)] hover:border-[rgba(212,168,67,0.35)] transition-colors"
                >
                  <p className="text-[13px] text-[var(--amber)] font-medium uppercase tracking-wide mb-3">
                    {industry.name}
                  </p>
                  <h2 className="font-[var(--font-display)] text-[1.6rem] text-[var(--ink)] font-bold leading-tight mb-4">
                    {industry.hero.title}
                  </h2>
                  <p className="text-[15px] text-[var(--ink-soft)] leading-[1.7] mb-6">
                    {industry.hero.body}
                  </p>
                  <span className="text-[14px] font-semibold text-[var(--amber)]">
                    View vertical page
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
