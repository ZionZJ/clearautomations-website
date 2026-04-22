export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--stone)]/95 backdrop-blur-sm border-b border-[var(--rule)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 flex items-center justify-between h-14">
          <a href="/" className="text-[15px] font-semibold tracking-tight text-[var(--ink)]">
            Clear<span className="text-[var(--amber)]">.</span>Automations
          </a>
          <a
            href="#audit"
            className="text-[13px] font-medium text-[var(--amber)] hover:text-[var(--amber-hover)] transition-colors"
          >
            Get a Free Audit →
          </a>
        </div>
      </nav>

      {/* 1. HERO */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="max-w-[720px]">
            <p className="text-[13px] font-medium text-[var(--amber)] tracking-wide uppercase mb-6">
              AI automation for small business
            </p>
            <h1 className="font-[var(--font-fraunces)] text-[clamp(2.4rem,5.5vw,4rem)] font-bold leading-[1.08] tracking-tight text-[var(--ink)] mb-6">
              Your business runs on
              <br />
              manual processes.
              <br />
              <span className="text-[var(--ink-muted)]">We replace them.</span>
            </h1>
            <p className="text-[clamp(1rem,1.8vw,1.15rem)] leading-[1.7] text-[var(--ink-soft)] max-w-[540px] mb-10">
              AI phone agents that call leads back in minutes. Automated
              follow-ups that never forget. CRM systems that track every
              opportunity. Built for businesses that don&apos;t have a tech team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#audit"
                className="inline-flex items-center justify-center bg-[var(--amber)] text-white text-[15px] font-semibold py-3.5 px-8 rounded hover:bg-[var(--amber-hover)] transition-colors"
              >
                Get a Free AI Audit
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center text-[15px] font-medium text-[var(--ink-soft)] py-3.5 px-8 border border-[var(--rule)] rounded hover:border-[var(--ink-muted)] transition-colors"
              >
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="py-20 sm:py-28 border-t border-[var(--rule)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <p className="text-[13px] font-medium text-[var(--ink-muted)] tracking-wide uppercase mb-12">
            Sound familiar?
          </p>
          <div className="grid gap-10 sm:gap-16 max-w-[800px]">
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
            ].map((item) => (
              <div key={item.num} className="flex gap-6 items-start">
                <span className="font-[var(--font-fraunces)] text-[2.5rem] font-light text-[var(--rule)] leading-none shrink-0 -mt-1">
                  {item.num}
                </span>
                <p className="text-[clamp(1.05rem,2vw,1.25rem)] leading-[1.6] text-[var(--ink)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW WE FIX IT */}
      <section id="how" className="bg-[var(--navy)] text-white py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <p className="text-[13px] font-medium text-[var(--navy-muted)] tracking-wide uppercase mb-4">
            Three phases. Each stands alone.
          </p>
          <h2 className="font-[var(--font-fraunces)] text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] tracking-tight mb-16">
            Phase 1 works on its own.
            <br />
            <span className="text-[var(--navy-muted)]">
              Phase 2 amplifies it. Phase 3 scales it.
            </span>
          </h2>

          <div className="grid gap-px bg-white/5 sm:grid-cols-3 border border-white/5 rounded-sm overflow-hidden">
            {[
              {
                phase: "Phase 1", name: "Capture", setup: "$2,500", monthly: "$350/mo", timeline: "Week 1\u20133", result: "First AI-qualified lead",
                items: ["Website redesign + local SEO", "AI inbound voice agent", "Smart contact form", "CRM setup + pipeline", "Google Review campaign", "Automated email follow-ups"],
              },
              {
                phase: "Phase 2", name: "Convert", setup: "$1,500", monthly: "+$500/mo", timeline: "Week 4\u20136", result: "100 warm calls/day",
                items: ["Outbound AI calling agent", "SMS warm-up sequences", "Voicemail drop campaigns", "Call transcript logging", "Number reputation (STIR/SHAKEN)", "No-answer email fallbacks"],
              },
              {
                phase: "Phase 3", name: "Scale", setup: "$1,000", monthly: "+$150/mo", timeline: "Week 7+", result: "Predictable pipeline",
                items: ["Cold outbound (attorney-cleared)", "Lead lists (DNC-scrubbed)", "Google Ads management", "Weekly performance reporting", "Monthly script optimization", "Full CRM analytics"],
              },
            ].map((phase) => (
              <div key={phase.name} className="bg-[var(--navy)] p-8 sm:p-10">
                <p className="text-[12px] font-semibold text-[var(--navy-muted)] tracking-widest uppercase mb-1">
                  {phase.phase}
                </p>
                <h3 className="font-[var(--font-fraunces)] text-[1.6rem] font-bold mb-2">
                  {phase.name}
                </h3>
                <p className="text-[var(--navy-text)] text-sm mb-6">{phase.result}</p>

                <div className="flex gap-4 mb-8 pb-8 border-b border-white/10">
                  <div>
                    <p className="text-[11px] text-[var(--navy-muted)] uppercase tracking-wide">Setup</p>
                    <p className="font-[var(--font-fraunces)] text-[1.4rem] font-semibold">{phase.setup}</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-[var(--navy-muted)] uppercase tracking-wide">Monthly</p>
                    <p className="font-[var(--font-fraunces)] text-[1.4rem] font-semibold">{phase.monthly}</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-[var(--navy-muted)] uppercase tracking-wide">Timeline</p>
                    <p className="font-[var(--font-fraunces)] text-[1.4rem] font-semibold">{phase.timeline}</p>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {phase.items.map((item) => (
                    <li key={item} className="text-[14px] text-[var(--navy-text)] leading-relaxed flex gap-2.5 items-start">
                      <span className="text-[var(--amber)] mt-0.5 shrink-0">\u2500</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-[14px] text-[var(--navy-muted)] mt-8">
            Platform costs included in retainer. No hidden fees. Cancel any phase, any time.
          </p>
        </div>
      </section>

      {/* 4. BEFORE / AFTER */}
      <section className="py-20 sm:py-28 border-t border-[var(--rule)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <p className="text-[13px] font-medium text-[var(--ink-muted)] tracking-wide uppercase mb-4">
            The transformation
          </p>
          <h2 className="font-[var(--font-fraunces)] text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] tracking-tight text-[var(--ink)] mb-12">
            What changes after Phase 1
          </h2>

          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b-2 border-[var(--ink)]">
                  <th className="py-3 pr-8 text-[13px] font-semibold text-[var(--ink-muted)] uppercase tracking-wide">Scenario</th>
                  <th className="py-3 pr-8 text-[13px] font-semibold text-[var(--ink-muted)] uppercase tracking-wide">Today</th>
                  <th className="py-3 text-[13px] font-semibold text-[var(--amber)] uppercase tracking-wide">After Phase 1</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { scenario: "Lead submits form at 7pm Friday", today: "Sits in inbox until Monday", after: "AI calls back within 5 minutes" },
                  { scenario: "Follow-up on old leads", today: "Manual spreadsheet, forgotten", after: "Automated 14-day re-engagement" },
                  { scenario: "Google reviews", today: "3 reviews, 3.2 stars", after: "15+ reviews, 4.5 stars in 60 days" },
                  { scenario: "Tracking leads", today: "Sticky notes + email threads", after: "CRM with stage tracking + history" },
                  { scenario: "Response to missed call", today: "Maybe call back tomorrow", after: "Automatic SMS + voicemail + email within 2 min" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-[var(--rule)] last:border-b-0">
                    <td className="py-4 pr-8 text-[15px] font-medium text-[var(--ink)]">{row.scenario}</td>
                    <td className="py-4 pr-8 text-[15px] text-[var(--ink-muted)]">{row.today}</td>
                    <td className="py-4 text-[15px] text-[var(--ink)] font-medium">{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. WHY US */}
      <section className="py-20 sm:py-28 bg-[var(--stone-dark)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid sm:grid-cols-3 gap-12 sm:gap-16">
            {[
              { headline: "You own everything.", body: "No GoHighLevel lock-in. Your website, your CRM, your AI agent, your data. Fire us and keep it all. We build on open platforms you control \u2014 HubSpot, Vapi, n8n." },
              { headline: "First lead in 1\u20133 weeks.", body: "Not a 6-month roadmap. Phase 1 produces results before Phase 2 starts. The system pays for itself with a single new client." },
              { headline: "Enterprise experience. SMB prices.", body: "5 years deploying automation at a Big 4 consulting firm for companies 10x your size. Now building the same systems for businesses at a price that makes sense." },
            ].map((d) => (
              <div key={d.headline}>
                <h3 className="font-[var(--font-fraunces)] text-[1.3rem] font-bold text-[var(--ink)] mb-3 leading-tight">{d.headline}</h3>
                <p className="text-[15px] text-[var(--ink-soft)] leading-[1.7]">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-20 sm:py-28 border-t border-[var(--rule)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid sm:grid-cols-[280px_1fr] gap-12 sm:gap-20">
            <div>
              <p className="text-[13px] font-medium text-[var(--ink-muted)] tracking-wide uppercase mb-4">Common questions</p>
              <h2 className="font-[var(--font-fraunces)] text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-[1.1] tracking-tight text-[var(--ink)]">
                Before you ask
              </h2>
            </div>

            <div className="divide-y divide-[var(--rule)]">
              {[
                { q: "Do I need to commit to all 3 phases?", a: "No. Phase 1 works on its own. Most clients start there, see results, then add Phase 2. No pressure, no multi-month contracts." },
                { q: "What if I already have a website?", a: "We audit it and upgrade what needs fixing \u2014 SEO, forms, speed, mobile experience. We don\u2019t rebuild from scratch unless it\u2019s necessary." },
                { q: "What AI tools do you use?", a: "Vapi for voice agents, HubSpot for CRM (free tier), n8n for workflow automation, Telnyx for calling, Resend for email. You own every account." },
                { q: "How long until I see results?", a: "First AI-qualified lead typically within 1-3 weeks of Phase 1 launch. The review campaign starts producing within the first 10 days." },
                { q: "What happens if I stop working with you?", a: "Everything keeps running. You own the website, the CRM, the AI agent, the workflows. We hand over all credentials and documentation." },
                { q: "Is the AI going to sound robotic?", a: "No. Modern voice AI is conversational and context-aware. We customize the voice, script, and tone to match your brand. We\u2019ll send you a sample call before launch." },
              ].map((faq) => (
                <details key={faq.q} className="group py-5">
                  <summary className="flex justify-between items-center cursor-pointer list-none text-[16px] font-semibold text-[var(--ink)] leading-snug">
                    {faq.q}
                    <span className="text-[var(--ink-faint)] group-open:rotate-45 transition-transform text-xl ml-4 shrink-0">+</span>
                  </summary>
                  <p className="mt-3 text-[15px] text-[var(--ink-soft)] leading-[1.7] max-w-[560px]">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA \u2014 FREE AI AUDIT */}
      <section id="audit" className="bg-[var(--navy)] text-white py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid sm:grid-cols-[1fr_400px] gap-16 items-start">
            <div>
              <h2 className="font-[var(--font-fraunces)] text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] tracking-tight mb-4">
                Get a free AI audit
                <br />
                of your business.
              </h2>
              <p className="text-[var(--navy-text)] text-[15px] leading-[1.7] max-w-[440px] mb-6">
                We&apos;ll review your website, SEO, lead flow, and follow-up process. You&apos;ll get a video walkthrough of exactly what&apos;s broken and how to fix it &mdash; free, no obligation.
              </p>
              <p className="text-[var(--navy-muted)] text-[13px]">Typically delivered within 48 hours.</p>
            </div>

            <form className="flex flex-col gap-4" action="https://formspree.io/f/PLACEHOLDER" method="POST">
              <input type="text" name="business" placeholder="Business name" required className="bg-white/5 border border-white/10 rounded px-4 py-3 text-[15px] text-white placeholder:text-[var(--navy-muted)] focus:outline-none focus:border-[var(--amber)] transition-colors" />
              <input type="url" name="website" placeholder="Website URL" required className="bg-white/5 border border-white/10 rounded px-4 py-3 text-[15px] text-white placeholder:text-[var(--navy-muted)] focus:outline-none focus:border-[var(--amber)] transition-colors" />
              <select name="challenge" required className="bg-white/5 border border-white/10 rounded px-4 py-3 text-[15px] text-[var(--navy-muted)] focus:outline-none focus:border-[var(--amber)] transition-colors" defaultValue="">
                <option value="" disabled>Biggest lead gen challenge</option>
                <option value="slow-followup">Slow follow-up on leads</option>
                <option value="no-online-presence">Weak online presence</option>
                <option value="wasting-ad-spend">Wasting money on ads</option>
                <option value="manual-processes">Too many manual processes</option>
                <option value="other">Something else</option>
              </select>
              <input type="email" name="email" placeholder="Email" required className="bg-white/5 border border-white/10 rounded px-4 py-3 text-[15px] text-white placeholder:text-[var(--navy-muted)] focus:outline-none focus:border-[var(--amber)] transition-colors" />
              <input type="tel" name="phone" placeholder="Phone (optional)" className="bg-white/5 border border-white/10 rounded px-4 py-3 text-[15px] text-white placeholder:text-[var(--navy-muted)] focus:outline-none focus:border-[var(--amber)] transition-colors" />
              <button type="submit" className="bg-[var(--amber)] text-white text-[15px] font-semibold py-3.5 px-8 rounded hover:bg-[var(--amber-hover)] transition-colors mt-2">
                Request My Free Audit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="border-t border-[var(--rule)] py-10">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <p className="text-[15px] font-semibold text-[var(--ink)] mb-1">
              Clear<span className="text-[var(--amber)]">.</span>Automations
            </p>
            <p className="text-[13px] text-[var(--ink-muted)]">
              Built by Zion John &middot; AI automation for small business
            </p>
          </div>
          <div className="flex gap-6">
            <a href="mailto:zion@clearautomations.com" className="text-[13px] text-[var(--ink-muted)] hover:text-[var(--amber)] transition-colors">Email</a>
            <a href="#" className="text-[13px] text-[var(--ink-muted)] hover:text-[var(--amber)] transition-colors">LinkedIn</a>
            <a href="#" className="text-[13px] text-[var(--ink-muted)] hover:text-[var(--amber)] transition-colors">YouTube</a>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 mt-8 pt-6 border-t border-[var(--rule)]">
          <p className="text-[12px] text-[var(--ink-faint)]">&copy; 2026 Clear Automations. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
