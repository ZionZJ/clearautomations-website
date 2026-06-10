# ClearAutomations Strategic Review — May 2026

**Date:** 2026-05-12
**Author:** ClearAutomations internal strategy
**Trigger:** Wiki growth from ~115 to 137+ pages since the original productization deep dive (mid-April 2026). Twelve-plus recently-added wiki pages carry direct CA implications and warrant a synthesis pass.
**Audience:** Zion (founder, sole operator). Internal-only; not for client distribution.

---

## Executive summary

The CA productization thesis is sound. The 7-vertical SKU ladder, the 3 pricing tiers (NexSort, Trades, Healthcare), the Vapi-for-non-HIPAA / Retell-for-HIPAA split, and the n8n + HubSpot + Telnyx stack all hold up against the new signal. What needs to change is additive, not corrective.

Six strategic positioning shifts come out of the wiki. Five new SKU candidates emerge. Five existing-SKU adjustments make sense. Five operational improvements are worth absorbing. Six considerations matter for verticals 2 through 7. Five things the wiki implies but that this doc deliberately rejects.

> **Hard constraint:** Embracing Minds Phase 1 cutover starts Tue 2026-05-12 (Week 1) and lands Tue 2026-05-26 (Week 3, post Memorial Day). Per the 20% productivity-dip rule (see [[ai-tool-stack-decision-framework]]), nothing in Group B below executes before 2026-05-26. The cost of mid-engagement scope shift outweighs the value of moving fast on new SKUs.

The artifacts in this doc are productization briefs and a queue. They are not orders to ship anything immediately.

---

## Tier A — Strategic positioning shifts

These shape *how CA talks about itself* and *what bar each engagement must clear*. They do not require code changes; they require copy + decision discipline.

### A1. Verticalization beats commoditization

Source: [[ai-lead-gen-service-vs-receptionist]].

The "AI receptionists are dead" critique is true for the generic commodity pitch (someone on Fiverr will build a basic voice agent for $15). It is false for verticalized voice agents embedded in workflow. Therapist callback inside the EHR-intake flow is a measurable revenue driver. HVAC missed-call recovery routed into a CRM with lead-scoring is a measurable revenue driver. The moat sits in the workflow integration, not the agent.

Implication for CA: the public positioning should read "we build the front desk for therapy practices" or "we build the lead-recovery loop for HVAC contractors," not "we build AI voice agents." Lead with the vertical-specific outcome. Voice agent is a component, not the product.

When to act: Group B (post-2026-05-26). Update `src/app/services/page.tsx` hero copy and the seven industry-page heros.

### A2. Distribution eats product

Source: [[vibe-coded-app-launch-case-study]] (Mao's Prayer Lock $0 to $25K MRR in 6 months after 9 failed apps).

Mao failed nine apps because marketing was an afterthought. Prayer Lock succeeded because he validated via TikTok first, then built. CA's situation is symmetrical. The technical delivery clears the bar. The bottleneck is distribution intuition and sales positioning, not more features.

Implication for CA: do not invest in more service breadth before the existing breadth proves out. The first three to five client deployments should produce case studies, testimonials, and reference architectures, not new SKUs. The CA Carrd needs the next iteration to be marketing-focused (proof points, case-study extracts), not technical-feature-focused.

When to act: Group B. After EM ships and 1-2 more client cases land, refresh the Carrd around "what these clients got."

### A3. Pricing floor: $50–$100/mo for products, $1K+ for audits

Sources: [[tibo-solo-ai-portfolio-case-study]], [[ai-assessment-audit-service-playbook]].

Tibo's rule: never price between $9 and $20/mo for AI products. It attracts low-quality customers, raises churn, and starves you of the data to know what's working. $50–$100/mo is the floor.

Audit playbook's rule: the price jump from $200 to $1K *increases* upsell conversion, not decreases it. At $200, the upsell to a $3K build is a 15x jump and feels jarring. At $1K, the same upsell is a 3x jump and feels obvious. Cheap entries train the customer to expect cheap. Anchoring at $1K signals seriousness.

Implication for CA: bump the current $750 Tech Stack Audit to a productized $1K Process Optimization Audit. Any future $X/mo recurring product should price at $50/mo minimum, even if the wholesale cost permits cheaper.

When to act: Group B. Migrate Tech Stack Audit pricing + delivery template.

### A4. <20% monthly churn is the scaling gate

Source: [[tibo-solo-ai-portfolio-case-study]].

Tibo's threshold for "this product is sticky enough to scale acquisition spend on": <20% monthly churn. Above 20%, fix the offer or the delivery. Above 40%, the product probably needs a pivot, not more marketing.

Implication for CA: track churn explicitly across the next 3 to 5 client cohorts (not EM alone; one client is not a sample). The Phase 1 retainer is sticky by design (it pays for itself in lead-to-consult lift), but the actual number matters. Build a one-row spreadsheet that captures client name, signup month, churn month (if any), reason.

When to act: ongoing. Set the baseline reading at 90 days post-EM go-live (so around Tue 2026-08-26).

### A5. Tools-as-SEO beats blog-as-SEO

Source: [[tibo-solo-ai-portfolio-case-study]].

Tibo's argument: AI-generated Google snippets are killing search-traffic value for static text content. They cannot replace interactive tools. A lightweight free tool (Revid's "thumbnail generator," Outrank's "SEO scorer") ranks long-tail and funnels engaged visitors to the paid product. The tool itself is the marketing asset.

Implication for CA: two candidate tools that map to CA's lane.
- **AI Readiness Calculator** — SMB inputs (size, current tools, automation pain points) returns a readiness score + 3 prioritized next steps. Funnels to the $1K audit.
- **Voice Agent ROI Estimator** — SMB inputs (calls/month, missed call rate, average deal size) returns annual missed-revenue figure. Funnels to the voice agent SKU.

Both rank for long-tail queries that the CA Carrd will never rank for ("HVAC AI readiness," "missed call cost calculator").

When to act: Group C (TBD). Not urgent; ship after the next 2-3 client closes prove the funnel needs more top-of-funnel.

### A6. Taste-as-moat for design surface

Source: [[impeccable-design-toolkit]].

37 visual AI-slop patterns are now catalogued (purple-gradient-on-white, Inter-everywhere, sit-tab borders, monotone hierarchy, shouty UI). A free Chrome extension scans live sites and flags them. Design distinctiveness compounds; design genericity compounds against you.

Implication for CA: the current Carrd almost certainly fires 4-6 of these patterns. Before offering AI Slop Cleanup as a client SKU (see B4 below), CA's own surface should pass its own audit. Apply Impeccable to the Carrd first; productize the cleanup second; self-demonstrate the result.

When to act: Group B. Self-demonstrate before selling.

---

## Tier B — New SKU candidates

Five briefs. Each is a one-page productization candidate, ready to promote to a full standalone brief in `docs/sku-briefs/` when the time to ship arrives.

### B1. Speed-to-Lead AI Agent

| Field | Value |
|---|---|
| Scope | Form-submission trigger fires an AI voice agent within 60 seconds to call the lead, qualify, and book the consult on the spot. Replaces the inbound callback workflow's manual triage step. |
| Price band | $1,500 setup + $300–$500/mo retainer |
| Bolt-on target | All 7 verticals as Phase 1.5 upsell |
| Signal source | [[ai-assessment-audit-service-playbook]] flags this as the "strongest universal upsell pick"; the playbook source rates it #1 of 5 upsell buckets for revenue-tied, recurring, quantifiable, fits-our-stack reasons |
| Expected impact | 21x conversion improvement on leads contacted within 60 seconds vs leads contacted same-day (per [[ai-lead-gen-service-vs-receptionist]] data point). For a 200-lead/month vertical at 5% baseline close, this is the difference between 10 closes/mo and ~20 closes/mo. |
| Ready-when | EM Phase 1 stable (90 days post-go-live, ~2026-08-26). Pilot on EM as proof, then roll to next 2 verticals. |
| DO NOT EXECUTE BEFORE | 2026-05-26 |

### B2. Process Optimization Audit ($1K productized)

| Field | Value |
|---|---|
| Scope | 60-min discovery call + 4-day effort-vs-impact matrix delivery + 1-hr walkthrough + 5-bucket upsell menu presentation. Replaces the existing $750 Tech Stack Audit. |
| Price band | $1,000 fixed |
| Bolt-on target | Universal entry offer across all 7 verticals |
| Signal source | [[ai-assessment-audit-service-playbook]] documents the $200→$500→$1K pricing-psychology journey: higher prices yield *easier* upsells (3x jump from $1K to $3K beats 15x jump from $200 to $3K). |
| Expected impact | Higher upsell close rate on the first paid engagement after the audit. Reduces sales-call burn for clients who can't move past $200 anchor. |
| Ready-when | Post-EM cutover. Update site copy, intake form, delivery template, internal Loom walkthrough. |
| DO NOT EXECUTE BEFORE | 2026-05-26 |

### B3. Cold-Email Lead Gen (B2B outbound)

| Field | Value |
|---|---|
| Scope | The 3-system architecture: targeting + data enrichment, AI personalization engine, sending infrastructure + deliverability. Paired with the inbound voice agent for a complete revenue motion. |
| Price band | $3,000–$15,000/mo retainer (size by lead-volume target + niche) |
| Bolt-on target | 5 non-HIPAA verticals only: HVAC, roofing, postal-presort, legal-intake, home-services. Not for therapist or dental. |
| Signal source | [[ai-lead-gen-service-vs-receptionist]] — the entire wiki page argues this. Verticalization framing protects against the "AI receptionists are dead" critique by bundling outbound with inbound. |
| Expected impact | Per source: 4-15% reply rates vs 0.5-1% industry baseline; 15-30 qualified meetings/mo per client; replaces $70K/yr SDR with measurable cost gap. |
| Ready-when | Post-EM cutover *and* one non-HIPAA vertical (HVAC most likely, since it's the priority-1 vertical per the hub doc) has a first paying Phase 1 client. Cold email as Phase 2 only after Phase 1 proves out. |
| DO NOT EXECUTE BEFORE | 2026-06-30 (gives EM stabilization + first HVAC client time to land) |

### B4. AI Slop Cleanup

| Field | Value |
|---|---|
| Scope | Run Impeccable Chrome extension on client website. Identify firing patterns from the 37 catalogue. Deliver fix recommendations as a 3-phase report (diagnose, fix, polish). Optionally execute the fixes (Path A: client dev, Path B: CA $750 add-on, same model as the EM form). |
| Price band | $500–$1,500 one-time |
| Bolt-on target | All client websites + CA's own Carrd (self-demonstration). Slots between "Brand Asset Sprint" ($500) and "Voice Agent Setup" ($1,500-$3,000) in the productized ladder. |
| Signal source | [[impeccable-design-toolkit]] — 37 patterns, free Chrome scanner, ~25K GitHub stars, /tweak skill. Counterpart to Sandy's text-side anti-AI-slop discipline. |
| Expected impact | Site reads as built-on-purpose, not template-default. Conversion lift on optimized hero + CTA. Self-demonstration ("we ran this on our own site") becomes the sales asset. |
| Ready-when | Post-EM cutover *and* CA's own Carrd has been run through Impeccable first. Self-demonstrate before selling. |
| DO NOT EXECUTE BEFORE | 2026-05-26 |

### B5. Competitive Intelligence Agent

| Field | Value |
|---|---|
| Scope | Hermes-based agent monitors competitor websites + job listings + price pages daily. Delivers a one-pager email summary every weekday at 7am: pricing changes, new hires, product announcements, ad copy shifts. |
| Price band | $9.99–$19.99/mo recurring micro-subscription |
| Bolt-on target | HVAC, roofing, home-services (local-market competitor tracking is highest-value for trades; commoditized verticals where price and capacity comparison matter most). |
| Signal source | [[hermes-agent-browser-harness]] 5-pillars architecture; outcome-priced (delivered daily) rather than tool-access-priced. |
| Expected impact | A new recurring-revenue product with $50-100/mo floor satisfied via annual prepay or bundling (3 trackers for $30/mo). Aggregates across clients to a meaningful MRR after 10+ subscribers. |
| Ready-when | After Hermes operational monitoring (D3) is running for CA itself. Productize the pattern after operating it internally. |
| DO NOT EXECUTE BEFORE | 2026-07-01 |

### B6. Vibe-Code Security Audit

| Field | Value |
|---|---|
| Scope | Apply the 5-failure-mode taxonomy (API key leak / reinvented crypto / JWT issuer unverified / overlapping access control / AI-task-files as latent prompt injection) to vibe-coded client codebases. Deliver findings as a client-ready report with prioritized fixes. Optional hardening sprint (Path A: client dev executes / Path B: CA $750-2K add-on executes). |
| Price band | $3,000–$8,000 one-time audit + $2,000–$5,000/mo optional hardening retainer |
| Bolt-on target | All vibe-coded production codebases (most agency client deliverables qualify). Pairs with B4 AI Slop Cleanup (visual side) and the future Architect/Builder Discovery Gate (process side) for a "code + design + process" trilogy. |
| Signal source | [[vibe-coded-app-audit-failure-modes]] — security holes are systemic in AI-built apps and NOT catchable by AI-only review (the auditor's freelance case documents $40-50K/mo opportunity at this exact SKU). Validated by EM Phase 1 self-audit (CA Action 11 from 2026-05-26 synthesis). |
| Expected impact | First concrete revenue-generating Tier B SKU candidate added since the 2026-05-20 batch. EM self-audit serves as case-study-zero. Sequencing: ship the EM self-audit BEFORE 2026-05-26 cutover, then pitch 2 prospect accounts by 2026-06-30. |
| Ready-when | EM Phase 1 self-audit lands first (pre-cutover). Then external pitches start 2026-05-27+. |
| DO NOT EXECUTE BEFORE | 2026-05-26 |

---

## Tier C — Existing-SKU changes

Five adjustments to what CA already offers. All Group B (post-cutover).

### C1. Voice-agent positioning copy rewrite

What changes: the public site copy moves from generic "we build voice agents" to vertical-specific "we build the front desk for [vertical]." Voice agent becomes a component description, not the headline.

Where: `src/app/services/page.tsx` hero block, the 7 `src/app/industries/[slug]/page.tsx` heros (these render from `src/data/industries/*.ts` hero fields).

Why: defends against the [[ai-lead-gen-service-vs-receptionist]] critique by reframing.

### C2. Audit price + scope migration

What changes: $750 Tech Stack Audit becomes $1,000 Process Optimization Audit. Same time investment (60-min call + 4-day delivery), better deliverable (effort-vs-impact matrix + upsell menu vs current tools-focused checklist).

Where: services page card, intake form, delivery template, the followup-cadence email sequence.

Why: per A3 above. The $200 step does not exist for CA today; the $750 step is too cheap to anchor productively.

### C3. Retainer tiering (AIOS stacked-fee model)

What changes: retainer pricing becomes "$X base + $Y per automation." Currently flat-monthly. Per [[aios-retainer-growth-path]]: $2.5K base + $300-$500 per automation stacked. Every CA-built automation becomes a recurring fee, not a one-time setup event.

Where: `src/data/industries/*.ts` phase-monthly fields + services page. Affects all 7 verticals.

Why: aligns CA's revenue with client value (more automations = more recurring revenue, not just bigger setup fees that taper to zero).

### C4. Upsell menu rank-ordering

What changes: current upsells are presented as a flat list. Going forward, every post-Phase-1 conversation leads with Speed-to-Lead (revenue-tied + recurring + quantifiable + fits-our-stack), then Process Optimization, then custom GPT, then CRM setup. Stop offering scattered add-ons.

Where: post-Phase-1 client communication template + delivery-email upsell paragraph.

Why: specialization rule per [[ai-assessment-audit-service-playbook]]. One bread-and-butter upsell beats five lukewarm ones.

### C5. Phase 1.5 operational layer bundle

What changes: every post-cutover handoff bundles a Hermes-based operational monitoring agent. Telegram alerts on n8n pipeline errors, daily cron summary of voice-agent call quality + Stripe charges + new prospect intake.

Where: new Phase-1.5 line item on industry-config phase listings; included free in Phase 1, billed as add-on for accounts that go to Phase 2 with custom monitoring needs.

Why: client-facing observability turns implicit reliability into explicit reliability. Plus it gives Zion the daily ground-truth read on client health at near-zero marginal effort.

---

## Tier D — Operational improvements

CA-internal, not client-facing. Group B execution.

### D1. 8-step delivery SOP

Source: [[automation-agency-client-lifecycle-playbook]].

Current state: CA runs roughly Step 1 (project complete + delivered). The other 7 steps where retainer revenue, blueprint-IP leverage, and review-flywheel acquisition compound are largely unrun.

The 8 steps:
1. Stripe receipt within 30 seconds of payment.
2. Gratitude email within 5 minutes.
3. Perception-of-progress email within 5 minutes (here's what we're doing this week).
4. Communication-cadence definition email (when you'll hear from us, when to expect deliverables).
5. Generous timeline commitment (under-promise, over-deliver).
6. Hyper-specific win condition email (what success looks like at the end of this engagement).
7. Platform itemization (every tool we'll touch, click-by-click instructions).
8. 15-min onboarding call SOP.

Where: build as a sequence of email templates + a checklist in HubSpot.

### D2. Loom-transcript-to-SOP Claude skill

What it does: feeds a Loom transcript through Claude, outputs a markdown SOP (executive summary, step-by-step usage, troubleshooting, platform appendix). Doubles the perceived value of every deliverable Loom.

Where: `~/.claude/skills/delivery-sop-from-loom/SKILL.md` (Zion's local Claude skills directory).

Source: [[automation-agency-client-lifecycle-playbook]] § Step 4.

### D3. Hermes operational monitoring agent

What it does: a Hermes agent on a CA-owned Hostinger VPS monitors all client deployments. Telegram channel for instant alerts on n8n pipeline failures + Stripe charge anomalies + voice-agent call-quality dips. Daily 7am cron summary to Zion's Telegram.

Where: new agent setup per [[hermes-agent-browser-harness]] 5-pillars architecture. Lives in a dedicated VPS (~$10/mo Hostinger) separate from any client production hosting. Managed via a Cloud Code project at `~/Development/VPS-agents/`.

Note: also feeds into C5 (Phase 1.5 operational layer) as the underlying tech.

### D4. Anti-AI-slop discipline application

What it does: run Impeccable Chrome extension on every client-facing deliverable (website, Carrd, Loom intro, presentation assets) before handoff. Apply the existing text-side rules already codified in `CLAUDE.md` non-negotiable rules across the whole stack.

Where: pre-handoff checklist in HubSpot + a `clearautomations-website/docs/qa-checklist.md` for client-facing artifact review.

### D5. Hosting-layer codification (Hetzner / DO / AWS-GCP three layers)

What changes: explicit comment in `src/data/industries/therapists.ts` toolsPolicy.approved[0] (self-hosted n8n entry) clarifying the three-layer split that came out of the prior turn's Hetzner question.
- Layer 1 (personal/internal): Hetzner. Cheap, no SOP cost since it's already running.
- Layer 2 (client-owned non-PHI): DigitalOcean. SMB-familiar, in-vendor HIPAA upgrade path available.
- Layer 3 (client-owned PHI, Phase 2/3): AWS/GCP/Azure HIPAA-eligible OR DO Standard/Premium Support + BAA. Vendor migration happens at the Phase 1 → Phase 2 boundary.

Where: this is the only Group A code edit. One-line comment, no functional change.

---

## Tier E — Future-client considerations (verticals 2 through 7)

For when CA closes verticals 2 through 7 post-EM. Not actions today, but pattern decisions for the playbook.

### E1. Assessment-first as universal entry

Every future vertical begins with the $1K Process Optimization Audit, not direct-to-build. The audit produces the effort-vs-impact matrix that justifies the engagement. Reduces buyer risk; raises upsell conversion rate per A3.

### E2. One-feature MVP per vertical

Per [[vibe-coded-app-launch-case-study]]: do not bundle 5 services into a vertical's launch. Pick the one highest-pain offer, add complexity from real client feedback. For HVAC the one-feature is missed-call recovery + callback. For roofing it's storm-lead capture. For legal-intake it's conflict-cleared intake. Resist the urge to ship the whole 3-phase stack for client #1 of any vertical.

### E3. Speed-to-Lead is universal Phase 1.5

Applies to all 7 verticals without modification. Industry-specific prompt content varies; the underlying agent + workflow does not. Once B1 is built, it instantiates for any vertical in a day.

### E4. Cold-email lead-gen Phase 2 is non-HIPAA-only

HVAC, roofing, postal-presort, legal-intake, home-services get the Phase 2 cold-email bundle. Therapist and dental do not (compliance complications outweigh the value; their lead-gen plays through directory presence and referrals, not cold email).

### E5. Verticalized voice agent, not horizontal

Each vertical gets industry-specific prompting + workflow integration + ROI-measurement. Moat is in the integration, not the agent. Resist any temptation to launch a "general voice agent service" pitch separate from the verticals.

### E6. Productized website tune-up rollout

The Website Optimization Tune-Up SKU (currently therapist-only, added 2026-05-08) should roll to dental, HVAC, roofing first. Reasons:
- Dental: same group-practice-with-WP-site pattern as therapist; the EM template ports cleanly.
- HVAC: highest GTM priority (priority-1 vertical per the hub doc); has the most legacy WP sites with conversion issues.
- Roofing: similar legacy-WP profile as HVAC + storm-driven seasonal traffic that would benefit from CRO.

Postal-presort, legal-intake, home-services have heterogeneous site situations that don't templatize as cleanly. Wait.

---

## Tier F — Intentionally NOT recommending

These show up as wiki signal but get rejected here, so future Claude sessions don't re-propose them.

| Item | Why not |
|---|---|
| Full website rebuild SKU | Not productizable. $8K–$15K one-off per client. Outside core competency. Stays only as a quote-on-demand exception. |
| Predictive lead scoring / custom ML model training | Not a CA differentiator. Client perceives no extra value over the rule-based scoring already in Phase 2 workflows. Adds infra cost and skill gap without revenue lift. |
| Field-tech mobile app | Distracting. Clients want CA to integrate with existing FSM (ServiceTitan, Jobber, Housecall Pro), not replace it. CA is not in the field-app business. |
| Full content-creation SKU beyond Founder Content System | Distinct business; would dilute the automation positioning. Sandy's content system (per the wiki) is a separate productization candidate but should stand alone, not bolt onto CA. |
| Cross-vertical CRM data migration | Adjacent service. Breaks the "AI automation" brand. Refer out to integration specialists. |

---

## Files to create or edit

### Group A — Do now (mid-cutover-safe)

| Action | File | Status |
|---|---|---|
| Create | `clearautomations-website/docs/strategic-review-2026-05.md` | This file. ✓ |
| Create | `Second Brain/.claude/projects/c--Users-ZionZ-Second-Brain/memory/project_clearautomations_strategic_shifts.md` | Captures Tier A as durable strategic doctrine in user memory. |
| Edit | `Second Brain/memory/MEMORY.md` | Adds pointer line for the new memory entry + this doc. |
| Edit | `clearautomations-website/src/data/industries/therapists.ts` | Adds one-line comment to `toolsPolicy.approved[0]` codifying the Hetzner / DO / AWS-GCP three-layer hosting split. No functional change. User runs `npx tsc --noEmit` to verify. |

### Group B — Post-cutover queue (after Tue 2026-05-26)

Numbered execution queue. DO NOT EXECUTE BEFORE 2026-05-26.

1. Promote the 5 embedded SKU briefs above into standalone files at `clearautomations-website/docs/sku-briefs/{speed-to-lead, process-optimization-audit, cold-email-lead-gen, ai-slop-cleanup, competitive-intelligence-agent}.md`. Use the EM-website-optimization-sow template structure.
2. Add Speed-to-Lead and Process Optimization Audit to all 7 industry configs' `addons` arrays (or wherever they slot in the services page taxonomy).
3. Rewrite `src/app/services/page.tsx` hero + the 7 industry-page heros around the "we build the front desk for [vertical]" framing (per A1).
4. Build the Loom-transcript-to-SOP Claude skill at `~/.claude/skills/delivery-sop-from-loom/` (per D2).
5. Stand up Hermes operational monitoring agent on a Hostinger VPS (per D3). Cloud Code project at `~/Development/VPS-agents/`. Pair with `~/.claude/skills/hermes-monitoring-rollout/`.
6. Run Impeccable Chrome extension on CA's Carrd. Fix flagged patterns. Self-demonstrate before offering AI Slop Cleanup externally (per A6 + D4).
7. Migrate $750 Tech Stack Audit to $1,000 Process Optimization Audit. Update site copy, intake form, delivery template, internal Loom walkthrough (per C2).
8. Roll the EM Website Optimization Tune-Up template to dental, HVAC, roofing (per E6). Three new sets of {audit, SOW, content-template, schema-template} docs at `clearautomations-website/docs/../industries/{dental-practices, hvac-contractors, roofing-contractors}/`.
9. Decide on shipping one or two lightweight tools-as-SEO (AI Readiness Calculator, Voice Agent ROI Estimator) per A5. Build the first one; measure 30-day organic traffic vs the rest of the site.
10. At ~Tue 2026-08-26 (90 days post-EM go-live), evaluate churn across EM + the next 1-2 clients vs Tibo's <20% bar (per A4). If green, scale paid acquisition. If amber/red, iterate offer/delivery before scaling.

### Group C — Tracked, timing TBD

Recurring micro-SaaS (Competitive Intelligence Agent), full anti-AI-slop discipline application across all client surfaces, 8-step delivery SOP full automation. Real but not urgent; sequence after Group B executes successfully.

---

## Pattern references (wiki pages this builds on)

- [[ai-lead-gen-service-vs-receptionist]] — voice-agent positioning anchor; cold-email Phase 2 architecture
- [[ai-assessment-audit-service-playbook]] — $1K audit pricing-psychology + 5-bucket upsell menu
- [[automation-agency-client-lifecycle-playbook]] — 8-step delivery SOP
- [[tibo-solo-ai-portfolio-case-study]] — $50–$100/mo floor + <20% churn + tools-as-SEO
- [[vibe-coded-app-launch-case-study]] — distribution-eats-product + one-feature MVP
- [[hermes-agent-browser-harness]] — 5-pillars + Cloud-Code-managed VPS agents
- [[impeccable-design-toolkit]] — 37 AI-slop visual patterns + Chrome scanner
- [[aios-retainer-growth-path]] — $2.5K base + stacked-fee retainer math
- [[ai-tool-stack-decision-framework]] — 20% productivity-dip rule (the reason Group B waits)
- [[viral-content-psychology-six-principles]] — pre-publish 6-check for any marketing surface CA produces
- [[printing-press-cli-toolkit]] — CLI-vs-MCP-vs-API token economics; potential internal tool for HubSpot reports

## Operating documents this respects

- `docs/../clients/embracing-minds/engagement/production-readiness-gates.md` — Phase 1 gates governing the current EM cutover
- `Second Brain/02-DayJob/Zion Work/AI-Venture/reference/industry-stack-review/index.md` — productization hub doc (4 stack variants, 3 pricing ladders). Gets a post-cutover refresh, not a mid-cutover one.

---

## Verification

After Group A executes, the following must be true:

- This file exists at `clearautomations-website/docs/strategic-review-2026-05.md` and reads cleanly top to bottom in under 15 minutes.
- All 6 Tier A positioning shifts are present with source-wiki citations.
- All 5 Tier B SKU candidates have briefs covering scope, price, bolt-on, signal, impact, ready-when, and an explicit DO-NOT-EXECUTE-BEFORE date.
- All 5 Tier C existing-SKU changes name the specific file or page that changes.
- All 5 Tier D operational improvements tie to specific wiki pages.
- All 6 Tier E future-client considerations are present.
- Tier F section is present so future Claude sessions don't re-propose those items.
- The 10-item Group B execution queue is explicit about the post-2026-05-26 trigger.
- `Second Brain/memory/MEMORY.md` has a new pointer line, not a duplicate content dump.
- `project_clearautomations_strategic_shifts.md` follows the existing `project_*` convention (frontmatter, type, originSessionId).
- `therapists.ts` edit is comment-only, TypeScript clean.
- No EM-engagement files have been touched (vapi script, email templates, form spec, routing matrix, gates doc, profile, HubSpot pipeline, phase-1-setup all untouched).
- No Carrd / services-page / industry-page copy has been edited.
- This doc explicitly says "DO NOT execute Group B before 2026-05-26."

End-to-end:
- Zion can read this doc once, decide which Group B items survive his own evaluation, then ship them post-cutover at his pace.
- The 5 SKU briefs are reusable as productization specs when each goes live.
- Future agent sessions inherit the strategic framing via memory pointers without re-deriving it.

---

## Risk register

| # | Risk | Mitigation |
|---|---|---|
| 1 | This doc becomes a wall of text nobody re-reads | Strict tier structure (A–F) + tables for SKU briefs + execution queue + ~3,500 word cap. |
| 2 | Strategic shifts get acted on prematurely (someone builds Speed-to-Lead during EM cutover) | Every Group B item flagged DO NOT EXECUTE BEFORE [date]. Hard constraint in exec summary. |
| 3 | New SKU briefs are too speculative | Each brief cites a specific wiki page + has a price band + has a "ready-when" trigger. |
| 4 | Tibo's <20% churn bar applied prematurely to EM (n=1) | Explicit: applies to next 3–5 client cohorts, not EM alone. Baseline reading at ~2026-08-26. |
| 5 | The Hetzner toolsPolicy comment causes TypeScript noise | Pure comment-only edit, no field changes. User verifies with `tsc`. |
| 6 | Group B never executes because EM cutover slips | If go-live moves past 2026-05-26, Group B trigger date moves with it. Hard rule: never start Group B while EM is in active migration. |
| 7 | A SKU here gets confused with what CA already sells | Tier F explicitly enumerates rejected ideas. Tier B brief tables show price + bolt-on cleanly so it's clear these are *new*. |

---

## Change log

- 2026-05-12 — Initial authoring. Synthesizes prior-turn exploration of CA's current state (services + 7 industry configs + EM-specific docs + hub doc) against grown wiki (137+ pages, 12+ recently added with CA implications).
