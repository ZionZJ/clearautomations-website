import { ComplianceBadges } from "@/components/compliance-badges";
import { AuditForm } from "@/components/audit-form";
import { DentalPracticeAuditForm } from "@/components/dental-practice-audit-form";
import { FadeIn } from "@/components/fade-in";
import { LegalIntakeAuditForm } from "@/components/legal-intake-audit-form";
import { PostalPresortAuditForm } from "@/components/postal-presort-audit-form";
import { RoofingContractorAuditForm } from "@/components/roofing-contractor-audit-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { TherapistPracticeAuditForm } from "@/components/therapist-practice-audit-form";
import type { Industry } from "@/data/industries";
import { siteConfig } from "@/lib/site-config";

type IndustryLandingProps = {
  industry: Industry;
};

export function IndustryLanding({ industry }: IndustryLandingProps) {
  const basePath = `/industries/${industry.slug}`;
  const landingCopy = industry.landingCopy ?? {};
  const proofCards =
    landingCopy.proofCards ??
    [
      {
        headline: "You own everything.",
        body:
          "Your website, your CRM, your workflows, your accounts, and your documentation. No lock-in.",
      },
      {
        headline: "The safe lane ships first.",
        body:
          "Phase 1 focuses on business workflow data first. Sensitive or regulated workflows wait for the right controls.",
      },
      {
        headline: "Built with the risk in view.",
        body:
          "The offer is explicit about BAA coverage, vendor limits, data boundaries, and what stays out of scope.",
      },
    ];
  const navLinks = [
    { href: `${basePath}#phases`, label: "Phases" },
    { href: `${basePath}#compliance`, label: "Compliance" },
    { href: `${basePath}#tools`, label: "Tools" },
    { href: `${basePath}#results`, label: "Results" },
    { href: `${basePath}#faq`, label: "FAQ" },
  ];

  return (
    <>
      <SiteNav
        links={navLinks}
        ctaHref={`${basePath}#audit`}
        ctaLabel={industry.form.ctaLabel}
      />

      <section className="pt-24 pb-14 sm:pt-32 sm:pb-20">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <p className="text-[13px] font-medium text-[var(--amber)] tracking-wide uppercase mb-6">
                {industry.hero.eyebrow}
              </p>
              <h1 className="font-[var(--font-display)] text-[clamp(2.35rem,5.5vw,4rem)] font-bold leading-[1.08] text-[var(--ink)] mb-6">
                {industry.hero.title}
                <br />
                <span className="text-[var(--ink-dim)]">
                  {industry.hero.mutedTitle}
                </span>
              </h1>
              <p className="text-[clamp(1rem,1.8vw,1.15rem)] leading-[1.7] text-[var(--ink-soft)] max-w-[640px] mb-10">
                {industry.hero.body}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#audit"
                  className="inline-flex items-center justify-center bg-[var(--amber)] text-[var(--stone)] text-[15px] font-semibold py-3.5 px-8 rounded hover:bg-[var(--amber-hover)] transition-colors"
                >
                  {industry.hero.primaryCta}
                </a>
                <a
                  href="#phases"
                  className="inline-flex items-center justify-center text-[15px] font-medium text-[var(--ink-soft)] py-3.5 px-8 border border-[rgba(255,255,255,0.12)] rounded hover:border-[var(--ink-dim)] transition-colors"
                >
                  {industry.hero.secondaryCta}
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              {industry.hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-[rgba(255,255,255,0.1)] rounded-lg p-6 bg-[var(--surface)]"
                >
                  <p className="font-[var(--font-display)] text-[2rem] text-[var(--amber)] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[13px] text-[var(--ink-soft)] uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 border-t border-[rgba(212,168,67,0.15)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <FadeIn>
            <p className="text-[13px] font-medium text-[var(--ink-dim)] tracking-wide uppercase mb-4">
              {industry.problems.eyebrow}
            </p>
            <h2 className="font-[var(--font-display)] text-[clamp(1.7rem,3.2vw,2.6rem)] font-bold leading-[1.12] text-[var(--ink)] mb-10 max-w-[760px]">
              {industry.problems.title}
            </h2>
          </FadeIn>

          <div className="grid gap-8 sm:gap-10 max-w-[860px]">
            {industry.problems.items.map((item, i) => (
              <FadeIn key={item.num} delay={i * 120}>
                <div className="flex gap-6 items-start">
                  <span className="font-[var(--font-display)] text-[2.5rem] font-light text-[rgba(255,255,255,0.15)] leading-none shrink-0 -mt-1">
                    {item.num}
                  </span>
                  <p className="text-[clamp(1.05rem,2vw,1.25rem)] leading-[1.6] text-[var(--ink)]">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <p className="mt-10 text-[clamp(1rem,1.8vw,1.1rem)] leading-[1.7] text-[var(--ink-dim)] max-w-[760px] border-l-2 border-[rgba(212,168,67,0.3)] pl-6">
              {industry.problems.callout}
            </p>
          </FadeIn>
        </div>
      </section>

      <section id="phases" className="bg-[var(--navy)] text-white py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <FadeIn>
            <p className="text-[13px] font-medium text-[var(--navy-muted)] tracking-wide uppercase mb-4">
              {industry.phases.eyebrow}
            </p>
            <h2 className="font-[var(--font-display)] text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] mb-12">
              {industry.phases.title}
              <br />
              <span className="text-[var(--navy-muted)]">
                {industry.phases.mutedTitle}
              </span>
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-4">
            {industry.phases.items.map((phase) => (
              <FadeIn key={phase.name}>
                <div
                  className={`bg-[var(--navy)] p-6 sm:p-8 md:p-10 border rounded-lg ${
                    phase.featured
                      ? "border-[rgba(212,168,67,0.3)] shadow-[0_0_30px_rgba(212,168,67,0.06)] relative overflow-hidden"
                      : "border-white/5"
                  }`}
                >
                  {phase.featured && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--amber)] to-transparent opacity-50" />
                  )}

                  <div className="md:grid md:grid-cols-[1fr_1.7fr] md:gap-12 items-start relative z-10">
                    <div>
                      <p className="text-[12px] font-semibold text-[var(--navy-muted)] tracking-widest uppercase mb-1">
                        {phase.phase}
                      </p>
                      <h3 className="font-[var(--font-display)] text-[1.8rem] font-bold mb-2">
                        {phase.name}
                      </h3>
                      <p className="text-[var(--amber)] text-[13px] font-semibold mb-2">
                        {phase.status}
                      </p>
                      <p className="text-[var(--navy-text)] text-[15px] mb-8">
                        {phase.result}
                      </p>

                      <div className="flex flex-wrap gap-6 mb-6 pb-6 border-b border-white/10 md:border-b-0 md:mb-0 md:pb-0">
                        <div>
                          <p className="text-[11px] text-[var(--navy-muted)] uppercase tracking-wide mb-0.5">
                            Setup
                          </p>
                          <p className="font-[var(--font-display)] text-[1.4rem] lg:text-[1.6rem] font-semibold whitespace-nowrap">
                            {phase.setup}
                          </p>
                        </div>
                        <div>
                          <p className="text-[11px] text-[var(--navy-muted)] uppercase tracking-wide mb-0.5">
                            Monthly
                          </p>
                          <p className="font-[var(--font-display)] text-[1.4rem] lg:text-[1.6rem] font-semibold whitespace-nowrap">
                            {phase.monthly}
                          </p>
                        </div>
                        <div>
                          <p className="text-[11px] text-[var(--navy-muted)] uppercase tracking-wide mb-0.5">
                            Timeline
                          </p>
                          <p className="font-[var(--font-display)] text-[1.4rem] lg:text-[1.6rem] font-semibold whitespace-nowrap">
                            {phase.timeline}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="md:pl-10 md:border-l md:border-white/10">
                      <ul className="space-y-3 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-4 md:space-y-0">
                        {phase.items.map((item) => (
                          <li
                            key={item}
                            className="text-[14px] text-[var(--navy-text)] leading-relaxed flex gap-3 items-start"
                          >
                            <span className="text-[var(--amber)] mt-0.5 shrink-0">
                              -
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      {phase.note && (
                        <p className="text-[13px] text-[var(--navy-muted)] mt-5 leading-[1.6]">
                          {phase.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <p className="text-[14px] text-[var(--navy-muted)] mt-6">
            {industry.phases.note}
          </p>
        </div>
      </section>

      <div id="compliance">
        <ComplianceBadges badges={industry.complianceBadges} />
      </div>

      <section className="py-12 sm:py-16 border-t border-[var(--rule)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <FadeIn>
            <p className="text-[13px] font-medium text-[var(--ink-dim)] tracking-wide uppercase mb-4">
              {landingCopy.addonsEyebrow ?? "Add to any phase"}
            </p>
            <h2 className="font-[var(--font-display)] text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-[1.1] text-[var(--ink)] mb-10">
              {landingCopy.addonsTitle ??
                "Compliance-aware services around the core build."}
            </h2>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {industry.addons.map((addon, i) => (
              <FadeIn key={addon.name} delay={i * 100}>
                <div className="border border-[rgba(255,255,255,0.1)] rounded-lg p-6 sm:p-8 bg-[var(--surface)]">
                  <h3 className="font-[var(--font-display)] text-[1.3rem] font-bold text-[var(--ink)] mb-1">
                    {addon.name}
                  </h3>
                  <p className="font-[var(--font-display)] text-[1.1rem] text-[var(--amber)] mb-3">
                    {addon.price}
                  </p>
                  <p className="text-[14px] text-[var(--ink-soft)] leading-[1.6] mb-5">
                    {addon.desc}
                  </p>
                  <ul className="space-y-2.5">
                    {addon.items.map((item) => (
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
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" className="py-12 sm:py-16 bg-[var(--surface)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <FadeIn>
            <p className="text-[13px] font-medium text-[var(--amber)] tracking-wide uppercase mb-4">
              Tools policy
            </p>
            <h2 className="font-[var(--font-display)] text-[clamp(1.7rem,3.2vw,2.4rem)] font-bold leading-[1.12] text-[var(--ink)] mb-4 max-w-[760px]">
              {industry.toolsPolicy.title}
            </h2>
            <p className="text-[15px] text-[var(--ink-soft)] leading-[1.7] max-w-[760px] mb-10">
              {industry.toolsPolicy.intro}
            </p>
          </FadeIn>

          <div className="grid gap-6 lg:grid-cols-2">
            <PolicyColumn title="Allowed with prerequisites" items={industry.toolsPolicy.approved} />
            <PolicyColumn
              title={landingCopy.blockedPolicyTitle ?? "Not used for this workflow"}
              items={industry.toolsPolicy.blocked}
            />
          </div>
        </div>
      </section>

      <section id="results" className="py-12 sm:py-16 border-t border-[var(--rule)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <FadeIn>
            <p className="text-[13px] font-medium text-[var(--ink-dim)] tracking-wide uppercase mb-4">
              {industry.resultsModel.eyebrow}
            </p>
            <h2 className="font-[var(--font-display)] text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] text-[var(--ink)] mb-10">
              {industry.resultsModel.title}
            </h2>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="overflow-x-auto -mx-6 px-6">
              <table className="w-full min-w-[640px] text-left">
                <thead>
                  <tr className="border-b-2 border-[rgba(212,168,67,0.3)]">
                    <th className="py-3 pr-8 text-[13px] font-semibold text-[var(--ink-dim)] uppercase tracking-wide">
                      Metric
                    </th>
                    <th className="py-3 pr-8 text-[13px] font-semibold text-[var(--ink-dim)] uppercase tracking-wide">
                      Today
                    </th>
                    <th className="py-3 text-[13px] font-semibold text-[var(--amber)] uppercase tracking-wide">
                      Modeled System
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {industry.resultsModel.rows.map((row) => (
                    <tr
                      key={row.metric}
                      className="border-b border-[var(--rule)] last:border-b-0"
                    >
                      <td className="py-4 pr-8 text-[15px] font-medium text-[var(--ink)]">
                        {row.metric}
                      </td>
                      <td className="py-4 pr-8 text-[15px] text-[var(--ink-dim)]">
                        {row.today}
                      </td>
                      <td className="py-4 text-[15px] text-[var(--ink)] font-medium">
                        {row.modeled}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[13px] text-[var(--ink-faint)] leading-[1.6] mt-5">
              {industry.resultsModel.note}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[var(--stone-dark)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {proofCards.map((item, i) => (
              <FadeIn key={item.headline} delay={i * 100}>
                <h3 className="font-[var(--font-display)] text-[1.3rem] font-bold text-[var(--amber)] mb-3 leading-tight">
                  {item.headline}
                </h3>
                <p className="text-[15px] text-[var(--ink-soft)] leading-[1.7]">
                  {item.body}
                </p>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-12 pt-10 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[rgba(212,168,67,0.12)] border border-[rgba(212,168,67,0.25)] flex items-center justify-center text-[var(--amber)] text-[22px] font-bold shrink-0">
                ZJ
              </div>
              <div>
                <p className="text-[16px] font-semibold text-[var(--ink)] mb-1">
                  {siteConfig.founderName}
                </p>
                <p className="text-[14px] text-[var(--ink-soft)] leading-[1.6] max-w-[560px]">
                  5 years embedding with enterprise finance teams at RSM,
                  deploying AP automation into stacks they already ran. Now
                  doing the same for home-service companies in Texas: diagnose
                  the leak, deploy the recovery workflow, and stay until it works.
                </p>
                <div className="flex gap-4 mt-3">
                  <a
                    href={siteConfig.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-[var(--ink-dim)] hover:text-[var(--amber)] transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="text-[13px] text-[var(--ink-dim)] hover:text-[var(--amber)] transition-colors"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="faq" className="py-12 sm:py-16 border-t border-[var(--rule)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-16">
            <FadeIn>
              <div>
                <p className="text-[13px] font-medium text-[var(--ink-dim)] tracking-wide uppercase mb-4">
                  {landingCopy.faqEyebrow ?? "Common questions"}
                </p>
                <h2 className="font-[var(--font-display)] text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-[1.1] text-[var(--ink)]">
                  {landingCopy.faqTitle ?? "Before launch"}
                </h2>
              </div>
            </FadeIn>

            <div className="divide-y divide-[var(--rule)]">
              {industry.faq.map((faq) => (
                <details key={faq.q} className="group py-5">
                  <summary className="flex justify-between items-center cursor-pointer list-none text-[16px] font-semibold text-[var(--ink)] leading-snug hover:text-[var(--amber)] transition-colors">
                    {faq.q}
                    <span className="text-[var(--ink-dim)] group-hover:text-[var(--amber)] group-open:rotate-45 transition-all text-xl ml-4 shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-[15px] text-[var(--ink-soft)] leading-[1.7] max-w-[680px] pr-4">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="audit" className="bg-[var(--navy)] text-white py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid md:grid-cols-[1fr_460px] gap-12 items-start">
            <FadeIn>
              <div>
                <p className="text-[13px] font-medium text-[var(--amber)] tracking-wide uppercase mb-4">
                  {industry.cta.eyebrow}
                </p>
                <h2 className="font-[var(--font-display)] text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] mb-4">
                  {industry.cta.title}
                </h2>
                <p className="text-[var(--navy-text)] text-[15px] leading-[1.7] max-w-[500px] mb-6">
                  {industry.cta.body}
                </p>
                <p className="text-[var(--navy-muted)] text-[13px] leading-[1.6] max-w-[500px]">
                  {industry.cta.note}
                </p>
              </div>
            </FadeIn>

            <AuditFormSlot kind={industry.form.kind} />
          </div>
        </div>
      </section>

      <SiteFooter
        tagline={
          landingCopy.footerTagline ??
          "ClearAutomations - industry-specific AI automation for small businesses"
        }
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: industry.faq.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </>
  );
}

function AuditFormSlot({ kind }: { kind: Industry["form"]["kind"] }) {
  if (["hvac-contractor", "plumbing-contractor", "home-services"].includes(kind)) {
    return <AuditForm />;
  }

  if (kind === "roofing-contractor") {
    return <RoofingContractorAuditForm />;
  }

  if (kind === "dental-practice") {
    return <DentalPracticeAuditForm />;
  }

  if (kind === "postal-presort") {
    return <PostalPresortAuditForm />;
  }

  if (kind === "legal-intake") {
    return <LegalIntakeAuditForm />;
  }

  return <TherapistPracticeAuditForm />;
}

function PolicyColumn({
  title,
  items,
}: {
  title: string;
  items: { name: string; detail: string }[];
}) {
  return (
    <div className="border border-[rgba(255,255,255,0.1)] rounded-lg p-6 sm:p-8 bg-[var(--stone)]">
      <h3 className="font-[var(--font-display)] text-[1.35rem] text-[var(--ink)] font-bold mb-5">
        {title}
      </h3>
      <div className="space-y-5">
        {items.map((item) => (
          <div key={item.name}>
            <p className="text-[15px] text-[var(--amber)] font-semibold mb-1">
              {item.name}
            </p>
            <p className="text-[14px] text-[var(--ink-soft)] leading-[1.6]">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
