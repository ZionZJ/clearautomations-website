# Website Optimization Skill Notes (Internal)

**Purpose:** Internal codification of the design + content + technical principles ClearAutomations applies when delivering the productized "Website Optimization Tune-Up" SKU. First instantiation: Embracing Minds Counseling (May 2026). Reusable across future therapist clients first, then dental and other healthcare verticals as each gets its first real client.

**Audience:** Future Zion + future agents picking up website-optimization work. Not for client distribution.

**Sibling docs (where the SKU is deployed):**
- [../clients/embracing-minds/website/audit.md](./../clients/embracing-minds/website/audit.md)
- [../clients/embracing-minds/website/optimization-sow.md](./../clients/embracing-minds/website/optimization-sow.md)
- [../clients/embracing-minds/website/specialty-page-content.md](./../clients/embracing-minds/website/specialty-page-content.md)
- [../clients/embracing-minds/website/schema-markup.md](./../clients/embracing-minds/website/schema-markup.md)

---

## 1. The SKU in one paragraph

The Website Optimization Tune-Up is a $2,500–$3,500, 2-week, 8-deliverable engagement layered on top of an existing client website. It is *not* a rebuild. It is the surgical fix for the gap between "your site exists" and "your site converts." Every deliverable is templatable and reusable across clients in the same vertical with three swap-outs: practice copy, schema, pricing/insurance.

The SKU is paired with the Phase 1 automation engagement, not standalone. The pitch: "Your site is fine. The lead-flow around it isn't yet. We fix the form, sharpen the conversion path, and wire it into automated follow-up — that's the 30–40% lift."

---

## 2. Why we don't pitch full rebuilds

We do not sell custom website builds as the default offering. Reasons:

1. **CA's core competency is automation, not web design.** Pretending otherwise dilutes brand and capacity.
2. **Custom builds are not productizable.** A 5-clinician therapist site is genuinely different from a dental practice or HVAC operation. Templates don't transfer cleanly across verticals; the work doesn't compound.
3. **The lift is in automation, not redesign.** Rebuilds rarely move conversion as much as the automation that runs after the form submits. We optimize for actual ROI.
4. **Price-to-effort is wrong.** A custom Next.js build for a healthcare client = $8K–$15K, plus ongoing maintenance, plus the support burden when the WordPress they were comfortable with is gone. The customer often regrets it within a year.

**When to deviate (pitch a rebuild):** Only when the client *explicitly* asks, *and* their current site is genuinely broken (not WEAK — broken: dead links, security issues, completely-stalled CMS, broken booking). Even then, quote it as a separate SOW with a separate scope, not as part of Phase 1.

---

## 3. The frontend-design skill, applied to healthcare aesthetics

The plugin's `frontend-design` skill defaults to "pick a BOLD extreme: brutalist, maximalist, retro-futuristic..." That framing is correct for SaaS, agencies, and consumer brands. It is **wrong** for therapy, dental, or any healthcare audience seeking trust, calm, and competence.

For healthcare verticals, apply the skill's *principles* — typography, color, spatial composition, motion, differentiation — but commit to a **calm, refined, trust-forward aesthetic**, not an extreme one.

### Typography

- **Pair a distinctive serif display with a refined humanist sans.** Serifs read as warm, considered, professional — exactly the signal therapy and dental practices need. Refined humanist sans (Inter Tight, Manrope, Söhne, Sohne Mono) for body keeps reading distance comfortable.
- **Recommended display options:** Fraunces (Recoleta-adjacent, warm), Source Serif 4 (calm + readable), Cormorant Garamond (elegant + literary), GT Sectra (editorial), Newsreader (open-source editorial). Pick ONE per practice; don't mix three serifs.
- **Recommended body options:** Inter Tight, Manrope, Sohne, IBM Plex Sans (institutional-feel for clinical-supervision pages).
- **Avoid:** Inter (default), Roboto (Google default), Arial (system), Times New Roman (dated), Comic Sans (obviously). The skill explicitly bans the first three.
- **Sizes:** Body 16–18px on desktop, 17–19px on mobile. Line-height 1.55–1.7 (body), 1.1–1.2 (display). Generous, not cramped.

### Color

- **Earthy and calm, not corporate or digital.** Sage green, warm cream, dusty terracotta, oat, ink charcoal. A single dusty-blue-or-rust accent. Avoid pure white backgrounds (too clinical-sterile); use cream / off-white #FAF7F2-ish.
- **No purple gradients.** The frontend-design skill explicitly bans the purple-on-white AI cliche. Therapy sites get hit with this constantly. Resist.
- **Existing-brand harmony rules.** When the client already has a palette (EM uses warm browns), the new pages must harmonize, not introduce a new system. Pick accents that complement, don't fight.
- **Contrast floor:** WCAG 2.1 AA minimum (4.5:1 for body, 3:1 for large text). Test every page.

### Motion

- **Restraint.** Therapy and trauma audiences include people whose nervous systems are dysregulated. Bouncy / playful / spring-loaded micro-interactions are wrong tone.
- **Allowed:** Subtle fade-ins on scroll-into-view (200–400ms, easeOutQuad), gentle hover state lifts (2–4px translate, no shadow swells), fade transitions between page sections.
- **Banned:** Parallax (motion-sick risk), auto-playing video, particle-system backgrounds, page-load slide-ins from off-screen, looping marquee text.
- **Reduced-motion media query is non-negotiable.** Every animation MUST be disabled under `@media (prefers-reduced-motion: reduce)`. Test by enabling reduced-motion in OS settings and reloading.

### Spatial composition

- **Generous negative space.** White space signals care. Cramped pages signal mill.
- **Asymmetric but calm.** Single hero image off-center is fine. Diagonal grids and brutalist offsets are not.
- **One primary focal point per section.** No compound CTAs, no four-cards-of-equal-weight choosers. The eye should know where to go.

### Differentiation moment

The skill emphasizes "what's the one thing someone will remember?" For a healthcare practice, the answer is rarely a *visual* moment — it's a *content* moment that the design then supports. Examples:

- **Embracing Minds — bilingual page split.** English left, Spanish right, equal weight, equal photography, equal CTA. Memorable because it signals "we serve both communities equally," not "we translated the English." That's the page someone forwards to a Spanish-speaking friend.
- **Future therapist client — supervision page tile-grid.** Showing supervisees alongside the supervisor (with permission) signals lineage and rigor. Most supervision pages are bio-only.
- **Future dental client — care-plan estimator.** A "what does this cost?" tool on the services page is the trust differentiator dental sites rarely build.

The differentiator must come out of the practice's actual reality. Don't fabricate one. If a client doesn't have a clear differentiator, the page reads generic — that's a content problem, not a design problem.

---

## 4. Content principles (healthcare-vertical-specific)

### Voice

- **Acknowledge before offering.** "Anxiety doesn't have to run your life" before "we offer CBT." Reader is met before sold to.
- **Plain language.** "EMDR is for the experiences that didn't go away when you wanted them to" beats "EMDR is an evidence-based intervention for processing maladaptive memory networks."
- **Short paragraphs.** 1–3 sentences. Long blocks read as institutional.
- **No jargon without immediate definition.** "EMDR (Eye Movement Desensitization and Reprocessing) — a therapy that..."
- **Direct, not saccharine.** "We work with this every day" beats "We are passionate about supporting you on your journey to wellness."

### Compliance guardrails (all healthcare verticals)

- **No outcome promises.** "We work with anxiety" not "we cure anxiety." This is licensure-board policy in most states; in Texas it's BHEC for counselors, TSBDE for dentists.
- **No outcome testimonials.** Even if a client volunteers it, do not run "EM cured my depression" on the site. Testimonials with named outcomes invite advertising-rule scrutiny.
- **Credentials shown, not buried.** Every clinician/provider tile shows the license number or credential abbreviation. If they're an LPC-A, that supervision relationship is named (under whom).
- **Telehealth limitation disclosed.** "Telehealth available throughout Texas" — never imply national reach unless multi-state-licensed.
- **Crisis-line copy verbatim across channels.** Site banner, footer, and voice agent script use the same wording to reduce confusion in a moment when confusion is dangerous. Cross-reference [vapi-script.md](./../clients/embracing-minds/intake-and-routing/vapi-script.md).

### Bilingual content

- **Bilingual clinician review, not machine translation.** Per [email-templates.md](./../clients/embracing-minds/intake-and-routing/email-templates.md). Machine translations encode register failures, dialect mismatches, and cultural-fit gaps that bilingual native speakers spot in 30 seconds.
- **Side-by-side layout when both languages serve.** Don't tuck Spanish on a separate page no one finds. Equal real estate signals equal welcome.
- **Spanish-specific crisis line.** 988 has Spanish (press 2) AND a dedicated Spanish line at 1-888-628-9454. Both should appear on Spanish pages.

---

## 5. Technical implementation principles

### Stay on existing CMS unless broken

EM is on WordPress. The optimization stays on WordPress. Replatforming costs add 3–5x to the engagement and provide approximately zero conversion lift. Only replatform if the existing CMS is *itself* a problem (security, dead vendor, unmaintainable theme).

### Prefer paste-able snippets over custom builds

The schema markup, the crisis banner HTML, the FAQ accordion structure — every deliverable should be a snippet a WordPress dev can paste in 5 minutes. CA does the design + research + writing; EM's dev (or CA) does the WP execution. This keeps the SKU at the $2,500–$3,500 price point.

### Schema markup is required for healthcare verticals

LocalBusiness + MedicalBusiness + Person × N + MedicalSpecialty per service page is the floor. Validation via Google Rich Results Test is acceptance criteria. See [schema-markup.md](./../clients/embracing-minds/website/schema-markup.md) for the canonical template.

### Accessibility floor: WCAG 2.1 AA

- Skip-to-content link
- Alt text on every image (decorative images get `alt=""`)
- Heading order (no h2 → h4 jumps)
- Color contrast ≥ 4.5:1 body, ≥ 3:1 large text
- Reduced-motion media query
- Keyboard navigation works (tab order, focus styles visible)
- WAVE / axe DevTools clean run

This is not a stretch goal; it's the floor. Healthcare verticals attract scrutiny.

### Performance is a content issue more than a code issue

If the site is on a managed WordPress host, performance fixes mostly come from:
- Removing autoplay video
- Lazy-loading below-fold images
- Using WebP for hero images
- Removing unused plugins

We do not get into Lighthouse-tuning Core Web Vitals for a $3K engagement. If the client's hosting is the bottleneck, that's a separate conversation.

---

## 6. SKU productization checklist

When repurposing this SKU for a new vertical or a second therapist client, swap these and only these:

| Item | Therapist (EM template) | Dental (next vertical) | HVAC | Roofing |
|---|---|---|---|---|
| Specialty pages | 5: anxiety, couples, EMDR, Spanish, supervision | 5: cosmetic, pediatric, restorative, sedation, emergency | 5: install, repair, maintenance, IAQ, commercial | 5: replacement, repair, inspection, storm, gutter |
| Schema types | MedicalTherapy + Person | MedicalTherapy + Dentist + Person | Service + LocalBusiness | Service + LocalBusiness |
| Crisis banner | 988 + 911 + DV + Spanish 988 | 911 + dental-emergency-line | After-hours emergency line | Storm-emergency line |
| BHEC-style ad rules | Texas BHEC (counselors) | TSBDE (dentists) | None (no licensure-ad rule) | None |
| Bilingual review | Required where Spanish-speaking | Optional | Optional | Optional |
| Self-pay pricing block | Required (insurance variable) | Required (no insurance often) | Required (estimate-only) | Required (estimate-only) |
| Sliding-scale callout | Required if practice has it | Rare (in-house plans) | N/A | N/A |

Everything else (audit doc structure, SOW shape, accessibility floor, schema validation, deliverable count, fee bracket) carries across verticals unchanged.

---

## 7. Anti-patterns to avoid

These are the moves that would degrade the SKU's quality or cross-client reusability:

- ❌ **Custom themes per client.** Every client gets snippets pasted into their existing theme. We are not in the WordPress-theme business.
- ❌ **Promising "redesign" when scope is "optimize."** The SOW phrasing must be tight. "Tune-up" or "Optimization" — never "refresh," "redesign," or "rebuild."
- ❌ **Adding pages outside the 5-specialty template.** If a client wants "blog post about X," that's a content engagement, separate quote.
- ❌ **Deploying to client production before sign-off.** Always staging-first. Always Zamaria-equivalent reviews every page before publication.
- ❌ **Mixing this SKU with the contact form work.** The form is Phase 1 W1 prereq; the optimization is parallel. If a client wants only the form, they get [form-spec.md](./../clients/embracing-minds/intake-and-routing/form-spec.md) Path B and we don't pitch the rest.
- ❌ **Quoting under $2,500.** The work doesn't compress further without compromising deliverable quality. Below $2,500 we'd be losing money on the first delivery.
- ❌ **Quoting over $3,500 without explicit scope expansion.** If scope doesn't fit in $2,500–$3,500, it's not the same SKU; it's a custom engagement and gets a separate SOW.

---

## 8. Open productization questions (revisit when 2nd client buys this SKU)

- Should we add a "Phase 1 + Optimization" combo discount?
- Is there a Phase 2 / Phase 3 website-optimization tier (post-launch performance pass, conversion analytics review)?
- Should we offer a thin "self-serve" tier — just the snippets and content, no execution — at sub-$1,000?
- Is there a vertical where the schema-markup-only deliverable can stand alone as its own SKU (e.g., legal-intake, where SEO is most of the job)?

These get answered after delivery #2 — not preemptively.

---

## 9. Cross-references

- [../clients/embracing-minds/website/audit.md](./../clients/embracing-minds/website/audit.md) — first audit
- [../clients/embracing-minds/website/optimization-sow.md](./../clients/embracing-minds/website/optimization-sow.md) — first SOW
- [../clients/embracing-minds/website/specialty-page-content.md](./../clients/embracing-minds/website/specialty-page-content.md) — content template
- [../clients/embracing-minds/website/schema-markup.md](./../clients/embracing-minds/website/schema-markup.md) — schema template
- [../clients/embracing-minds/intake-and-routing/vapi-script.md](./../clients/embracing-minds/intake-and-routing/vapi-script.md) — crisis-copy cross-channel-consistency reference
- `~/.claude/plugins/cache/claude-plugins-official/frontend-design/unknown/skills/frontend-design/SKILL.md` — the upstream skill we adapt from

---

## Change log

- 2026-05-08 — Initial codification, anchored on Embracing Minds first delivery.
