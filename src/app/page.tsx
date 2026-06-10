import { HeroVisual } from "@/components/hero-visual";
import { AuditForm } from "@/components/audit-form";
import { ChecklistForm } from "@/components/checklist-form";
import { StackAuditForm } from "@/components/stack-audit-form";
import { FadeIn } from "@/components/fade-in";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { siteConfig } from "@/lib/site-config";

const FAQ_DATA = [
  { q: "Do I have to commit to a big build up front?", a: "No. You start with the $1,000 AI Assessment, a paid diagnosis you own. From there you decide whether to build, and the $1,000 credits toward it. No pressure, no multi-month contracts." },
  { q: "What if I already have a website?", a: "We audit it and upgrade what needs fixing: SEO, forms, speed, mobile experience. We don\u2019t rebuild from scratch unless it\u2019s absolutely necessary." },
  { q: "What AI tools do you use?", a: "Retell AI for the voice layer, HubSpot for CRM (free tier), n8n for workflow automation, Telnyx for calling, Resend for email. Every account is opened in your name. You own all of it." },
  { q: "How long until I see results?", a: "First AI-qualified lead typically within 1-3 weeks of launch. By month 3 you get an ROI report showing the booked jobs and recovered revenue the system actually generated." },
  { q: "What happens if I stop working with you?", a: "Everything keeps running. You own the website, the CRM, the AI agent, the workflows. We hand over all credentials and documentation." },
  { q: "Is the AI going to sound robotic?", a: "No. Modern voice AI is conversational and context-aware. We customize the voice, script, and tone to match your brand. We\u2019ll send you a sample call before launch." },
];

export default function Home() {
  return (
    <>
      <SiteNav />

      {/* 1. HERO */}
      <section className="pt-24 pb-14 sm:pt-32 sm:pb-20">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-[13px] font-medium text-[var(--amber)] tracking-wide uppercase mb-6">
                The AI employee for your front desk
              </p>
              <h1 className="font-[var(--font-display)] text-[clamp(2.4rem,5.5vw,4rem)] font-bold leading-[1.08] tracking-tight text-[var(--ink)] mb-6">
                Your leads are slipping
                <br />
                away while you sleep.
                <br />
                <span className="text-[var(--ink-dim)]">We fix that.</span>
              </h1>
              <p className="text-[clamp(1rem,1.8vw,1.15rem)] leading-[1.7] text-[var(--ink-soft)] max-w-[540px] mb-10">
                An AI employee that handles your front-desk work: calls leads back
                in under two minutes, never forgets a follow-up, runs your CRM.
                You own the automation. We deliver the outcome.
                Built for businesses that don&apos;t have a tech team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#audit"
                  className="inline-flex items-center justify-center bg-[var(--amber)] text-[var(--stone)] text-[15px] font-semibold py-3.5 px-8 rounded hover:bg-[var(--amber-hover)] transition-colors"
                >
                  Get a Free AI Audit
                </a>
                <a
                  href="#phases"
                  className="inline-flex items-center justify-center text-[15px] font-medium text-[var(--ink-soft)] py-3.5 px-8 border border-[rgba(255,255,255,0.12)] rounded hover:border-[var(--ink-dim)] transition-colors"
                >
                  See How It Works
                </a>
              </div>
              <p className="mt-5 text-[14px] text-[var(--ink-dim)] max-w-[540px]">
                or start with the{" "}
                <a href="#stack-audit" className="text-[var(--amber)] hover:underline">
                  $1,000 AI Assessment
                </a>
                : we map exactly where leads leak and what to build. Credits toward your build.
              </p>
            </div>
            <div className="hidden lg:block">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="py-12 sm:py-16 border-t border-[rgba(212,168,67,0.15)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <FadeIn>
            <p className="text-[13px] font-medium text-[var(--ink-dim)] tracking-wide uppercase mb-10">
              Sound familiar?
            </p>
          </FadeIn>
          <div className="grid gap-8 sm:gap-10 max-w-[800px]">
            {[
              {
                num: "01",
                text: "A lead fills out your form at 7pm Friday. Nobody calls until Monday. They\u2019ve already hired your competitor.",
              },
              {
                num: "02",
                text: "Your team spends 15 hours a week on follow-up calls that could be handled by a system that never forgets.",
              },
              {
                num: "03",
                text: "You\u2019re paying for ads but have no system to convert the traffic into booked appointments.",
              },
            ].map((item, i) => (
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
            <p className="mt-10 text-[clamp(1rem,1.8vw,1.1rem)] leading-[1.7] text-[var(--ink-dim)] max-w-[640px] border-l-2 border-[rgba(212,168,67,0.3)] pl-6">
              Every month without a system, you&apos;re burning ad spend and losing the customers who were ready to buy. Your competitors are already automating. The gap widens every week.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3. HOW WE FIX IT */}
      <section id="phases" className="bg-[var(--navy)] text-white py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <FadeIn>
            <p className="text-[13px] font-medium text-[var(--navy-muted)] tracking-wide uppercase mb-4">
              One clear starting point. Grow as it proves out.
            </p>
            <h2 className="font-[var(--font-display)] text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] tracking-tight mb-12">
              Start with the Assessment.
              <br />
              <span className="text-[var(--navy-muted)]">
                Then we build your AI employee. Then you grow.
              </span>
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-4">
            {[
              {
                phase: "Start here", name: "AI Assessment", setup: "$1,000", monthly: "credits to build", timeline: "5 business days", result: "Know exactly where leads leak, and what to build",
                items: ["Full audit of your lead flow: calls, forms, follow-up, CRM", "Quantified dollar figure on what slow follow-up is costing you", "A prioritized \u201cwhat to build first\u201d plan you own", "45-minute discovery call to map your workflows", "Delivered as a clear report, not a sales pitch", "Credits 100% toward your build within 60 days"],
                featured: true,
                roi: "A paid diagnosis, not a free sales call. The $1,000 comes off your build.",
              },
              {
                phase: "Then we build", name: "Speed-to-Lead AI Employee", setup: "Scoped in Assessment", monthly: "Scoped in Assessment", timeline: "2\u20134 weeks", result: "Every lead answered + booked in under 2 minutes",
                items: ["AI voice + text agent answers every inquiry instantly", "4+ integrations wired in (CRM / calendar / SMS / phone)", "Missed-call text-back + owner alerts", "Follow-up + 14-day re-engagement sequences", "Built on tools you already own", "You own all of it. Fire us and keep everything"],
                featured: false,
              },
              {
                phase: "Then you grow", name: "The full AI Employee", setup: "Scoped as you scale", monthly: "Scoped as you scale", timeline: "Ongoing", result: "Takes on more of the work your team does by hand",
                items: ["Outbound + multi-channel follow-up", "Scheduling + pipeline automation", "Performance reporting + monthly optimization", "New workflows added as you grow", "Never more than you need", "The model most clients move to"],
                featured: false,
              },
            ].map((phase) => (
              <FadeIn key={phase.name}>
                <div className={`bg-[var(--navy)] p-6 sm:p-8 md:p-10 border rounded-lg ${phase.featured ? "border-[rgba(212,168,67,0.3)] shadow-[0_0_30px_rgba(212,168,67,0.06)] relative overflow-hidden" : "border-white/5"}`}>

                  {phase.featured && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--amber)] to-transparent opacity-50" />
                  )}

                  <div className="md:grid md:grid-cols-[1fr_1.5fr] lg:grid-cols-[1fr_1.8fr] md:gap-10 lg:gap-16 items-center relative z-10">
                    <div>
                      <p className="text-[12px] font-semibold text-[var(--navy-muted)] tracking-widest uppercase mb-1">
                        {phase.phase}
                      </p>
                      <h3 className="font-[var(--font-display)] text-[1.8rem] font-bold mb-2">
                        {phase.name}
                      </h3>
                      <p className="text-[var(--navy-text)] text-[15px] mb-8">{phase.result}</p>

                      <div className="flex flex-wrap gap-6 mb-6 pb-6 border-b border-white/10 md:border-b-0 md:mb-0 md:pb-0">
                        <div>
                          <p className="text-[11px] text-[var(--navy-muted)] uppercase tracking-wide mb-0.5">Setup</p>
                          <p className="font-[var(--font-display)] text-[1.4rem] lg:text-[1.6rem] font-semibold whitespace-nowrap">{phase.setup}</p>
                        </div>
                        <div>
                          <p className="text-[11px] text-[var(--navy-muted)] uppercase tracking-wide mb-0.5">Monthly</p>
                          <p className="font-[var(--font-display)] text-[1.4rem] lg:text-[1.6rem] font-semibold whitespace-nowrap">{phase.monthly}</p>
                        </div>
                        <div>
                          <p className="text-[11px] text-[var(--navy-muted)] uppercase tracking-wide mb-0.5">Timeline</p>
                          <p className="font-[var(--font-display)] text-[1.4rem] lg:text-[1.6rem] font-semibold whitespace-nowrap">{phase.timeline}</p>
                        </div>
                      </div>

                      {/* ROI callout for the featured (Assessment) card */}
                      {"roi" in phase && phase.roi && (
                        <p className="hidden md:block text-[13px] text-[var(--amber)] mt-4 italic">{phase.roi}</p>
                      )}
                    </div>

                    <ul className="space-y-3 md:pt-2 md:pl-10 lg:pl-12 md:border-l md:border-white/10 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-4 md:space-y-0">
                      {phase.items.map((item) => (
                        <li key={item} className="text-[14px] text-[var(--navy-text)] leading-relaxed flex gap-3 items-start">
                          <span className="text-[var(--amber)] mt-0.5 shrink-0">{"\u2500"}</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ROI callout for the featured (Assessment) card — mobile */}
                  {"roi" in phase && phase.roi && (
                    <p className="md:hidden text-[13px] text-[var(--amber)] mt-4 italic">{phase.roi}</p>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

          <p className="text-[14px] text-[var(--navy-muted)] mt-6">
            No hidden fees. No multi-month contracts. You own everything we build.
          </p>
          <p className="text-[14px] text-[var(--navy-text)] mt-3 max-w-[640px]">
            And we don&apos;t install it and disappear. By month 3 you get a simple ROI
            report: the booked jobs and recovered revenue your AI employee actually
            generated. That&apos;s how you know it&apos;s working, not just running.
          </p>
          <p className="text-[14px] text-[var(--navy-muted)] mt-3">
            Need only the phone layer? See the{" "}
            <a href="/services/voice-agent-setup" className="text-[var(--amber)] hover:underline">
              AI Front-Desk Employee Setup
            </a>
            .
          </p>
        </div>
      </section>

      {/* 3b. ADD-ON SERVICES */}
      <section className="py-12 sm:py-16 border-t border-[var(--rule)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <FadeIn>
            <p className="text-[13px] font-medium text-[var(--ink-dim)] tracking-wide uppercase mb-4">
              Capabilities of the build
            </p>
            <h2 className="font-[var(--font-display)] text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-[1.1] tracking-tight text-[var(--ink)] mb-10">
              What your AI employee can handle.
            </h2>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Smart Booking",
                desc: "Clients book themselves. You stop playing phone tag.",
                items: ["Online booking page", "SMS + email reminders", "No-show follow-ups", "Calendar sync (Google/Outlook)"],
              },
              {
                name: "24/7 Chat AI",
                desc: "An AI that answers questions and qualifies leads while you sleep.",
                items: ["Website chat widget", "SMS conversation bot", "Trained on your business", "Auto-books appointments"],
              },
              {
                name: "Social Autopilot",
                desc: "Your social presence runs itself.",
                items: ["Post scheduling (FB/IG/Google)", "Content calendar", "Google Business updates", "Monthly reporting"],
              },
            ].map((addon, i) => (
              <FadeIn key={addon.name} delay={i * 100}>
                <div className="border border-[rgba(255,255,255,0.1)] rounded-lg p-6 sm:p-8 bg-[var(--surface)]">
                  <h3 className="font-[var(--font-display)] text-[1.3rem] font-bold text-[var(--ink)] mb-1">{addon.name}</h3>
                  <p className="font-[var(--font-display)] text-[1.1rem] text-[var(--amber)] mb-3">Scoped in your build</p>
                  <p className="text-[14px] text-[var(--ink-soft)] leading-[1.6] mb-5">{addon.desc}</p>
                  <ul className="space-y-2.5">
                    {addon.items.map((item) => (
                      <li key={item} className="text-[13px] text-[var(--ink-soft)] flex gap-2.5 items-start">
                        <span className="text-[var(--amber)] mt-0.5 shrink-0">{"\u2500"}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          <p className="text-[14px] text-[var(--ink-dim)] mt-6">
            These are capabilities your AI employee can take on. They get scoped into your build, not sold as separate products to manage.
          </p>
        </div>
      </section>

      {/* 3b2. CREATIVE SERVICES */}
      <section id="creative" className="py-12 sm:py-16 border-t border-[var(--rule)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <FadeIn>
            <p className="text-[13px] font-medium text-[var(--ink-dim)] tracking-wide uppercase mb-4">
              Content &amp; brand assets
            </p>
            <h2 className="font-[var(--font-display)] text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-[1.1] tracking-tight text-[var(--ink)] mb-3">
              Need content to fuel the system?
            </h2>
            <p className="text-[15px] text-[var(--ink-soft)] leading-[1.7] max-w-[540px] mb-10">
              AI-generated brand assets, edited videos, and a full content engine, built with the same automation-first approach.
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Brand Asset Sprint",
                price: "$500",
                desc: "Campaign visuals and launch assets that support a specific offer or lead magnet.",
                items: ["AI-assisted from your brand book", "Social media ready sizes", "Consistent style across all assets", "Built for campaigns, not decoration"],
                href: "#audit",
                cta: "Scope in audit",
              },
              {
                name: "Video Edit Package",
                price: "$300\u2013800",
                desc: "Proof clips, short explainers, and sales enablement videos tied to a lead-generation path.",
                items: ["Basic: trim + subtitles + color", "Standard: full edit + motion graphics", "Premium: reusable style direction", "Includes raw file handoff"],
                href: "#audit",
                cta: "Scope in audit",
              },
              {
                name: "Founder Content System",
                price: "$2,000\u20135,000/mo",
                desc: "Turn founder knowledge into consistent content without building a media team.",
                items: ["Weekly content ideas", "Post drafts + short-form scripts", "Repurposing across channels", "Monthly performance review"],
                href: "/services/founder-content-system",
                cta: "View service",
              },
            ].map((service, i) => (
              <FadeIn key={service.name} delay={i * 100}>
                <div className="border border-[rgba(255,255,255,0.1)] rounded-lg p-6 sm:p-8 bg-[var(--surface)]">
                  <h3 className="font-[var(--font-display)] text-[1.3rem] font-bold text-[var(--ink)] mb-1">{service.name}</h3>
                  <p className="font-[var(--font-display)] text-[1.1rem] text-[var(--amber)] mb-3">{service.price}</p>
                  <p className="text-[14px] text-[var(--ink-soft)] leading-[1.6] mb-5">{service.desc}</p>
                  <ul className="space-y-2.5">
                    {service.items.map((item) => (
                      <li key={item} className="text-[13px] text-[var(--ink-soft)] flex gap-2.5 items-start">
                        <span className="text-[var(--amber)] mt-0.5 shrink-0">{"\u2500"}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.href}
                    className="inline-flex mt-6 text-[13px] font-semibold text-[var(--amber)] hover:underline"
                  >
                    {service.cta}
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3c. TECH STACK AUDIT */}
      <section id="stack-audit" className="py-12 sm:py-16 bg-[var(--surface)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="max-w-[800px] mx-auto">
            <FadeIn>
              <div className="border border-[rgba(212,168,67,0.25)] rounded-lg p-8 sm:p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--amber)] to-transparent opacity-40" />

                <div className="relative z-10">
                  <p className="text-[13px] font-medium text-[var(--amber)] tracking-wide uppercase mb-3">
                    Not sure what you need?
                  </p>
                  <h2 className="font-[var(--font-display)] text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-[1.1] tracking-tight text-[var(--ink)] mb-2">
                    AI Assessment
                  </h2>
                  <p className="font-[var(--font-display)] text-[1.3rem] text-[var(--amber)] mb-6">
                    $1,000 one-time, credits toward your build
                  </p>
                  <p className="text-[15px] text-[var(--ink-soft)] leading-[1.7] mb-6">
                    A paid, in-depth diagnosis, not a sales call. We map exactly where leads leak across your front desk, quantify what it&apos;s costing you, and hand you a prioritized build plan you own.
                  </p>

                  <ul className="space-y-3 mb-8">
                    {[
                      "Full audit of your lead flow: calls, forms, follow-up, CRM, after-hours",
                      "45-minute discovery call to map your workflows",
                      "Quantified dollar figure on what slow / missed follow-up is costing you",
                      "A prioritized \u201cwhat to build first\u201d plan, yours whether or not you hire us",
                    ].map((item) => (
                      <li key={item} className="text-[14px] text-[var(--ink-soft)] flex gap-3 items-start">
                        <span className="text-[var(--amber)] mt-0.5 shrink-0">{"\u2500"}</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className="text-[14px] text-[var(--ink-dim)] mb-6">
                    Delivered within 5 business days. No commitment to build, and the $1,000 credits 100% toward your build if you move forward within 60 days.
                  </p>

                  <StackAuditForm />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. BEFORE / AFTER */}
      <section id="results" className="py-12 sm:py-16 border-t border-[var(--rule)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <FadeIn>
            <p className="text-[13px] font-medium text-[var(--ink-dim)] tracking-wide uppercase mb-4">
              The transformation
            </p>
            <h2 className="font-[var(--font-display)] text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] tracking-tight text-[var(--ink)] mb-10">
              What changes once your AI employee is live
            </h2>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="relative">
              <div className="md:hidden pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[var(--stone)] to-transparent z-10" />
              <p className="md:hidden text-[11px] text-[var(--ink-faint)] uppercase tracking-widest mb-3 flex items-center gap-1.5">
                Swipe <span aria-hidden="true">&rarr;</span>
              </p>
              <div className="overflow-x-auto -mx-6 px-6">
              <table className="w-full min-w-[640px] text-left">
                <thead>
                  <tr className="border-b-2 border-[rgba(212,168,67,0.3)]">
                    <th className="py-3 pr-8 text-[13px] font-semibold text-[var(--ink-dim)] uppercase tracking-wide">Scenario</th>
                    <th className="py-3 pr-8 text-[13px] font-semibold text-[var(--ink-dim)] uppercase tracking-wide">Today</th>
                    <th className="py-3 text-[13px] font-semibold text-[var(--amber)] uppercase tracking-wide">With your AI employee</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { scenario: "Lead submits form at 7pm Friday", today: "Sits in inbox until Monday", after: "AI calls back in under 2 minutes" },
                    { scenario: "Follow-up on old leads", today: "Manual spreadsheet, forgotten", after: "Automated 14-day re-engagement" },
                    { scenario: "Post-job review requests", today: "Asked when someone remembers", after: "Automatic, filtered by job type" },
                    { scenario: "Tracking leads", today: "Sticky notes + email threads", after: "CRM with stage tracking + history" },
                    { scenario: "Response to missed call", today: "Maybe call back tomorrow", after: "Automatic SMS + voicemail + email within 2 min" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[var(--rule)] last:border-b-0">
                      <td className="py-4 pr-8 text-[15px] font-medium text-[var(--ink)]">{row.scenario}</td>
                      <td className="py-4 pr-8 text-[15px] text-[var(--ink-dim)]">{row.today}</td>
                      <td className="py-4 text-[15px] text-[var(--ink)] font-medium">{row.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4b. ILLUSTRATIVE RESULT */}
      <section className="py-12 sm:py-16 bg-[var(--surface)] border-t border-[var(--rule)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="max-w-[720px] mx-auto text-center">
            <FadeIn>
              <p className="text-[13px] font-medium text-[var(--amber)] tracking-wide uppercase mb-4">
                Illustrative model
              </p>
              <h2 className="font-[var(--font-display)] text-[clamp(1.5rem,3vw,2.2rem)] font-bold leading-[1.15] tracking-tight text-[var(--ink)] mb-5">
                A modest response-time lift can pay for the system.
              </h2>
              <p className="text-[15px] text-[var(--ink-soft)] leading-[1.8]">
                For a service business receiving 40 qualified inquiries a month,
                saving just 4 leads from slow follow-up can cover the build before
                the longer-term automation gains start compounding.
              </p>
              <p className="text-[12px] text-[var(--ink-faint)] mt-6">
                Illustrative example, not client data.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. WHY US + FOUNDER */}
      <section className="py-12 sm:py-16 bg-[var(--stone-dark)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {[
              { headline: "You own everything.", body: "Your website, your CRM, your AI agent, your data. Fire us and keep it all. We build on open platforms you control: no lock-in, no proprietary systems, no hostage situations." },
              { headline: "Live in 2\u20134 weeks.", body: "Not a 6-month roadmap. You start with a paid Assessment, we build, and the system pays for itself with a single new client. By month 3 you see the ROI in writing." },
              { headline: "The big platforms aren't built for you.", body: "The big AI platforms are built for big operations. I personally build and run yours, and you can call me. Enterprise-grade systems, sized for your business, at a price that makes sense." },
            ].map((d, i) => (
              <FadeIn key={d.headline} delay={i * 100}>
                <h3 className="font-[var(--font-display)] text-[1.3rem] font-bold text-[var(--amber)] mb-3 leading-tight">{d.headline}</h3>
                <p className="text-[15px] text-[var(--ink-soft)] leading-[1.7]">{d.body}</p>
              </FadeIn>
            ))}
          </div>

          {/* Empathy + authority */}
          <FadeIn>
            <div className="mt-12 pt-10 border-t border-[rgba(255,255,255,0.06)] max-w-[720px]">
              <p className="text-[15px] text-[var(--ink-soft)] leading-[1.8] mb-4">
                You didn&apos;t start your business to manage tech stacks and chase down
                leads. You started it because you&apos;re great at what you do. Somewhere
                between the missed calls, the forgotten follow-ups, and the tools that
                promise everything, the growth stalled. We&apos;ve sat across the table
                from owners in exactly that spot.
              </p>
              <p className="text-[15px] text-[var(--ink-soft)] leading-[1.8]">
                Before ClearAutomations, our founder spent 5 years at RSM deploying AP
                automation platforms (Basware, Coupa) for mid-market and enterprise
                clients. The same systems large companies pay six figures to implement,
                adapted and priced for small businesses.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="text-[11px] text-[var(--ink-faint)] uppercase tracking-widest mr-1">
                  Built on
                </span>
                {["HubSpot", "n8n", "Retell AI", "Telnyx", "Resend"].map((tool) => (
                  <span
                    key={tool}
                    className="text-[12px] text-[var(--ink-dim)] border border-[rgba(255,255,255,0.12)] rounded px-2.5 py-1"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Founder */}
          <FadeIn>
            <div className="mt-12 pt-10 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Placeholder photo — replace with real headshot */}
              <div className="w-16 h-16 rounded-full bg-[rgba(212,168,67,0.12)] border border-[rgba(212,168,67,0.25)] flex items-center justify-center text-[var(--amber)] text-[22px] font-bold shrink-0">
                ZJ
              </div>
              <div>
                <p className="text-[16px] font-semibold text-[var(--ink)] mb-1">{siteConfig.founderName}</p>
                <p className="text-[14px] text-[var(--ink-soft)] leading-[1.6] max-w-[520px]">
                  5 years building enterprise AP and workflow automation systems at RSM. Now I build the same modular systems for small businesses at a fraction of the cost. Based in Texas.
                </p>
                <div className="flex gap-4 mt-3">
                  <a href={siteConfig.linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-[13px] text-[var(--ink-dim)] hover:text-[var(--amber)] transition-colors">LinkedIn</a>
                  <a href={`mailto:${siteConfig.contactEmail}`} className="text-[13px] text-[var(--ink-dim)] hover:text-[var(--amber)] transition-colors">Email</a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. FAQ */}
      <section id="faq" className="py-12 sm:py-16 border-t border-[var(--rule)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-16">
            <FadeIn>
              <div>
                <p className="text-[13px] font-medium text-[var(--ink-dim)] tracking-wide uppercase mb-4">Common questions</p>
                <h2 className="font-[var(--font-display)] text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-[1.1] tracking-tight text-[var(--ink)]">
                  Before you ask
                </h2>
              </div>
            </FadeIn>

            <div className="divide-y divide-[var(--rule)]">
              {FAQ_DATA.map((faq) => (
                <details key={faq.q} className="group py-5">
                  <summary className="flex justify-between items-center cursor-pointer list-none text-[16px] font-semibold text-[var(--ink)] leading-snug hover:text-[var(--amber)] transition-colors">
                    {faq.q}
                    <span className="text-[var(--ink-dim)] group-hover:text-[var(--amber)] group-open:rotate-45 transition-all text-xl ml-4 shrink-0">+</span>
                  </summary>
                  <p className="mt-4 text-[15px] text-[var(--ink-soft)] leading-[1.7] max-w-[640px] pr-4">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA — FREE AI AUDIT */}
      <section id="audit" className="bg-[var(--navy)] text-white py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid md:grid-cols-[1fr_400px] gap-12 items-start">
            <FadeIn>
              <div>
                <h2 className="font-[var(--font-display)] text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] tracking-tight mb-4">
                  Get a free AI audit
                  <br />
                  of your business.
                </h2>
                <p className="text-[var(--navy-text)] text-[15px] leading-[1.7] max-w-[440px] mb-6">
                  We&apos;ll review your website, SEO, lead flow, and follow-up process. You&apos;ll get a video walkthrough of exactly what&apos;s broken and how to fix it. Free, no obligation.
                </p>
                <p className="text-[var(--navy-muted)] text-[13px]">Typically delivered within 48 hours.</p>
                <p className="text-[var(--navy-muted)] text-[13px] mt-4">
                  Ready to go deeper?{" "}
                  <a href="#stack-audit" className="text-[var(--amber)] hover:text-[var(--amber-hover)] transition-colors underline">
                    Start with the $1,000 AI Assessment
                  </a>
                  . It credits toward your build.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-[var(--navy-text)] text-[14px] font-medium mb-2">Not ready to talk yet?</p>
                  <p className="text-[var(--navy-muted)] text-[13px] leading-[1.6] max-w-[400px]">
                    Grab our free 5-Minute Stack Audit Checklist, a self-assessment that shows you where your lead capture process is leaking revenue.
                  </p>
                  <ChecklistForm />
                </div>
              </div>
            </FadeIn>

            <AuditForm />
          </div>
        </div>
      </section>

      <SiteFooter />

      {/* FAQ Schema (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_DATA.map((faq) => ({
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
