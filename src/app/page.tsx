import { HeroVisual } from "@/components/hero-visual";
import { AuditForm } from "@/components/audit-form";
import { StackAuditForm } from "@/components/stack-audit-form";
import { FadeIn } from "@/components/fade-in";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { siteConfig } from "@/lib/site-config";

const FAQ_DATA = [
  { q: "Do I have to commit to a big build up front?", a: "No. Start with the free Missed-Call Snapshot. If the public observations justify looking at real data, the $1,000 Revenue-Recovery Blueprint gives you a workflow map, ROI range, and implementation plan you own. The full $1,000 credits toward implementation within 60 days." },
  { q: "What if I already have call, booking, or CRM software?", a: "The Blueprint starts by mapping what your current systems can already do. We use native capabilities first and recommend custom automation only where a measured gap remains." },
  { q: "How do you choose the technology?", a: "Technology is selected after discovery based on call volume, locations, integrations, workflows, compliance needs, and the systems you already own. You are not locked into a predetermined software bundle." },
  { q: "How long until I see results?", a: "The free Snapshot is delivered within one business day. A paid Blueprint is delivered within five business days after discovery and receipt of the required data. Implementation timing depends on call volume, integrations, and workflow scope, and is confirmed in the Blueprint." },
  { q: "What happens if I stop working with you?", a: "Client accounts are used wherever practical, and the implementation includes documentation and an orderly handoff path. Any continuing third-party service costs and platform limits are made clear before launch." },
  { q: "Does this require an AI voice agent?", a: "No. The first system may use routing, text-back, staff tasks, booking, or CRM workflows without an AI voice layer. Voice automation is added only when the data, disclosure requirements, and human handoff plan support it." },
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
                Managed front-desk revenue recovery
              </p>
              <h1 className="font-[var(--font-display)] text-[clamp(2.4rem,5.5vw,4rem)] font-bold leading-[1.08] tracking-tight text-[var(--ink)] mb-6">
                Recover missed calls
                <br />
                and stalled estimates.
                <br />
                <span className="text-[var(--ink-dim)]">Measure what comes back.</span>
              </h1>
              <p className="text-[clamp(1rem,1.8vw,1.15rem)] leading-[1.7] text-[var(--ink-soft)] max-w-[540px] mb-10">
                ClearAutomations connects call handling, lead response, estimate
                follow-up, booking, and CRM workflows for HVAC and plumbing
                companies. We use the systems you already have, manage what is
                missing, and report against real operating data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#audit"
                  className="inline-flex items-center justify-center bg-[var(--amber)] text-[var(--stone)] text-[15px] font-semibold py-3.5 px-8 rounded hover:bg-[var(--amber-hover)] transition-colors"
                >
                  Get a Free Missed-Call Snapshot
                </a>
                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-[15px] font-medium text-[var(--ink-soft)] py-3.5 px-8 border border-[rgba(255,255,255,0.12)] rounded hover:border-[var(--ink-dim)] transition-colors"
                >
                  Book a 20-Minute Call
                </a>
              </div>
              <p className="mt-5 text-[14px] text-[var(--ink-dim)] max-w-[540px]">
                Prefer to talk now? Call{" "}
                <a href={siteConfig.phoneHref} className="text-[var(--amber)] hover:underline">
                  {siteConfig.phoneDisplay}
                </a>
                . Or start with the{" "}
                <a href="#blueprint" className="text-[var(--amber)] hover:underline">
                  $1,000 Revenue-Recovery Blueprint
                </a>
                : actual-data analysis, a workflow map, and a build plan you own.
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
                text: "Lead and estimate follow-up depends on someone remembering the next touch, so valid opportunities can quietly stall.",
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
              Without a defined response and follow-up path, paid and organic leads can disappear between the first call, estimate, and booking decision.
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
              Start with the Snapshot.
              <br />
              <span className="text-[var(--navy-muted)]">
                Validate with real data. Build only what earns its place.
              </span>
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-4">
            {[
              {
                phase: "Start here", name: "Missed-Call Snapshot", setup: "Free", monthly: "—", timeline: "1 business day", result: "See the observable gaps before sharing internal data",
                items: ["One page based on public information", "Published hours and booking-path review", "Observable gaps separated from assumptions", "No invented dollar-loss claim", "The data needed to validate the opportunity", "Focused only on front-desk revenue leakage"],
                featured: true,
                roi: "A useful first look with no meeting required.",
              },
              {
                phase: "Validate with real data", name: "Revenue-Recovery Blueprint", setup: "$1,000", monthly: "credits to build", timeline: "5 business days", result: "Know what is leaking, what can be recovered, and what to build",
                items: ["One 45-minute workflow discovery", "Analysis of available call, lead, booking, and estimate data", "Current-state workflow map", "ROI range with assumptions shown", "Prioritized implementation and measurement plan", "Credits 100% toward implementation within 60 days"],
                featured: false,
              },
              {
                phase: "Then implement", name: "Front Desk Revenue Recovery", setup: "$5,000–10,000", monthly: "$1,500–3,000/mo", timeline: "Scoped in Blueprint", result: "Recover calls and estimates through a managed, measurable workflow",
                items: ["After-hours and overflow call handling", "Missed-call and lead response", "Open-estimate follow-up", "CRM / FSM logging and human handoffs", "QA, reliability monitoring, and optimization", "Weekly performance reporting against the baseline"],
                featured: false,
              },
              {
                phase: "Expand after proof", name: "Advanced Workflow Expansion", setup: "Scoped", monthly: "Typically $5,000/mo", timeline: "After measured results", result: "Add a quantified second workflow for qualified clients",
                items: ["For high-volume or multi-location operations", "Begins only after the front-desk system is live", "Requires a measured business case", "Adds cross-channel or back-office workflows", "Uses existing systems before introducing custom tools", "Not sold as the front-door offer"],
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
            Clear scope, visible assumptions, client-owned accounts, and a documented handoff path.
          </p>
          <p className="text-[14px] text-[var(--navy-text)] mt-3 max-w-[640px]">
            We baseline the current process before launch, then report response,
            contact, booking, estimate-recovery, reliability, and revenue measures.
            That is how you know the system is working, not merely running.
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
              What Front Desk Revenue Recovery can include.
            </h2>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Missed-Call Recovery",
                desc: "Capture and route high-intent calls that would otherwise wait in voicemail.",
                items: ["After-hours and overflow paths", "Missed-call text-back", "Human escalation", "Call summaries and owner alerts"],
              },
              {
                name: "Lead & Estimate Follow-Up",
                desc: "Move valid opportunities forward without relying on someone's memory.",
                items: ["New-lead response", "Open-estimate reminders", "Appointment confirmations", "Stop and escalation rules"],
              },
              {
                name: "CRM / FSM Operations",
                desc: "Keep the systems your team already uses accurate and actionable.",
                items: ["Lead and job-stage updates", "Task and owner assignment", "Native-first integrations", "Performance and reliability reporting"],
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
            These are components of one managed engagement. They are scoped from the Blueprint, not sold as unrelated products.
          </p>
        </div>
      </section>

      {/* 3c. REVENUE-RECOVERY BLUEPRINT */}
      <section id="blueprint" className="py-12 sm:py-16 bg-[var(--surface)]">
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
                    Revenue-Recovery Blueprint
                  </h2>
                  <p className="font-[var(--font-display)] text-[1.3rem] text-[var(--amber)] mb-6">
                    $1,000 one-time, credits toward your build
                  </p>
                  <p className="text-[15px] text-[var(--ink-soft)] leading-[1.7] mb-6">
                    A paid, actual-data diagnosis. We map the current front-desk workflow, establish a defensible leakage baseline, and hand you a prioritized implementation plan you own.
                  </p>

                  <ul className="space-y-3 mb-8">
                    {[
                      "Analysis of available call, lead, booking, estimate, and CRM / FSM data",
                      "45-minute discovery call to map your workflows",
                      "Current-state workflow map and ROI range with assumptions shown",
                      "A prioritized implementation and measurement plan, yours whether or not you hire us",
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
              What changes once the recovery workflow is live
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
                    <th className="py-3 text-[13px] font-semibold text-[var(--amber)] uppercase tracking-wide">With managed recovery</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { scenario: "Lead arrives after hours", today: "Waits for the next manual inbox check", after: "Acknowledged and routed through the approved follow-up path" },
                    { scenario: "Open estimate needs follow-up", today: "Timing depends on individual memory", after: "Scheduled touches with stop and escalation rules" },
                    { scenario: "Customer needs a human", today: "Ownership is unclear", after: "Assigned to the approved person with context" },
                    { scenario: "Tracking lead progress", today: "Scattered across calls, texts, and inboxes", after: "Visible stages, owners, outcomes, and exceptions" },
                    { scenario: "Workflow fails", today: "Discovered after a lead complains", after: "Logged, surfaced, and assigned for correction" },
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

      {/* 5. WHY US + FOUNDER */}
      <section className="py-12 sm:py-16 bg-[var(--stone-dark)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {[
              { headline: "Native first.", body: "We check what your current call, booking, dispatch, and lead-management systems can already do before adding custom infrastructure. You should not pay us to rebuild a feature you already own." },
              { headline: "Measured from baseline.", body: "The Blueprint separates verified leakage from assumptions. After launch, reporting focuses on response, contact, booking, estimate recovery, reliability, and revenue." },
              { headline: "Client-owned and documented.", body: "Accounts are opened in your name wherever practical, configurations are documented, and the engagement includes an orderly handoff path." },
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
                automation platforms (Basware, Coupa) into mid-market and enterprise
                stacks. Not replacing what those companies ran. Embedding with their
                teams and making AI work inside it. That is what happens here, at a
                size and price a small business can actually use.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="text-[11px] text-[var(--ink-faint)] uppercase tracking-widest mr-1">
                  Operating principles
                </span>
                {["Native-first review", "Client-owned accounts", "Human handoffs", "Measured reporting"].map((tool) => (
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
                  5 years embedding with mid-market and enterprise finance teams at RSM, deploying AP automation into stacks they already ran. I do the same thing for small businesses now: audit what you have, deploy AI into it, and stay until it works. Based in Texas.
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

      {/* 7. CTA — FREE MISSED-CALL SNAPSHOT */}
      <section id="audit" className="bg-[var(--navy)] text-white py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid md:grid-cols-[1fr_400px] gap-12 items-start">
            <FadeIn>
              <div>
                <h2 className="font-[var(--font-display)] text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] tracking-tight mb-4">
                  Get a free Missed-Call Snapshot
                  <br />
                  for your business.
                </h2>
                <p className="text-[var(--navy-text)] text-[15px] leading-[1.7] max-w-[440px] mb-6">
                  We&apos;ll use public information to create a one-page view of your published hours, call and booking paths, observable gaps, and the real data needed to validate the opportunity. No meeting required.
                </p>
                <p className="text-[var(--navy-muted)] text-[13px]">Typically delivered within one business day.</p>
                <p className="text-[var(--navy-muted)] text-[13px] mt-4">
                  Ready to go deeper?{" "}
                  <a href="#blueprint" className="text-[var(--amber)] hover:text-[var(--amber-hover)] transition-colors underline">
                    Continue with the $1,000 Revenue-Recovery Blueprint
                  </a>
                  . It credits toward your build.
                </p>
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
