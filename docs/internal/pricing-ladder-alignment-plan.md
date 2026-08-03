# Plan — Pricing Ladder Alignment + Nav CTA

*Created 2026-08-02. Closes the highest-value open loop in STRATEGY: the live site and the sales motion quote different prices. Also fixes the nav CTA left behind by the booking-link change.*

**Source of truth for pricing:** `Second Brain/02-DayJob/Zion Work/AI-Venture/STRATEGY.md` §3 (the canonical offer ladder). That doc explicitly supersedes contradicting pricing elsewhere.

---

## Part 1 — Nav CTA (5 minutes, do this first)

`src/components/site-nav.tsx:54-55` still defaults to the audit form:

```ts
ctaHref = "/#audit",
ctaLabel = "Get a Free Audit",
```

The hero and contact page now lead with booking; the nav doesn't. It's on **every page**, so it's the most-seen CTA on the site.

**Change to:**

```ts
ctaHref = siteConfig.bookingUrl,
ctaLabel = "Book a Call",
```

Add `siteConfig` to the existing import on line 2 (currently imports only `primaryNavLinks` from the same module).

**Note:** `bookingUrl` is external, so the nav `<a>` needs `target="_blank" rel="noopener noreferrer"` like the hero button. Because `ctaHref` is a prop, any page passing a custom internal href would then open in a new tab too — check for overrides before adding the attributes globally. If overrides exist, gate it: `target={ctaHref.startsWith("http") ? "_blank" : undefined}`.

**Why "Book a Call" and not "Book a 20-Minute Call":** the nav is a tight space and the hero already carries the long form. Keep it short.

---

## Part 2 — The pricing mismatch

### What the site says today vs. what we sell

| Surface | Site shows | STRATEGY §3 ladder |
|---|---|---|
| Wedge | **$1,000 AI Assessment** | **$1K Assessment** ✅ aligned |
| The default build | *not priced on the site* | **Speed-to-Lead: $5–10K setup + $1.5–3K/mo** |
| The model we're migrating to | *absent* | **$5K/mo AI Employee retainer** |
| Voice agent setup | "Scoped in your $1,000 AI Assessment" | AI Inbound Receptionist $2–15K setup + $400–3K/mo |
| Founder Content System | **$2,000–5,000/mo** | AI Content System — engine $4K + $500–1K/mo, or UGC $0 + $1.5–4K/mo |

**The real problem is not a wrong number — it's an absent one.** The site prices the $1K wedge and one unrelated SKU, then goes quiet. A prospect who has just been told "$2,500/mo for the AI front desk" on a call, then looks up the site, finds no matching price. That gap reads as improvised pricing, which is the single fastest way to lose a deal that discovery had already won.

### The decision to make first (blocking — don't start edits without it)

**How much pricing belongs on the site at all?** Three options; pick one before touching files.

| Option | Shape | Trade-off |
|---|---|---|
| **A — Anchor only** *(recommended)* | Show the $1K Assessment price. For builds show a **"typical range"** band, not a menu. | Keeps price discovery on the call where pain gets built first. Matches `05-sales-call-checklist`: never name a number before pain is built. |
| **B — Full ladder** | Publish all four rungs with setup + monthly. | Transparent, filters tire-kickers early. But it lets a prospect self-disqualify on price before you've quantified their leak, and it invites line-item comparison against $199/mo platforms — the exact commoditization the Stradzo filter exists to avoid. |
| **C — Status quo** | Leave it. | The mismatch stays. Not recommended, but genuinely lower risk than publishing a ladder that's still migrating toward the $5K/mo retainer. |

**Recommendation: A.** It closes the credibility gap (no more silence where a price should be) without handing a cold prospect a menu to price-shop. It also survives the migration to the $5K/mo retainer without another rewrite.

### Under Option A — the concrete changes

**A1. `src/app/services/page.tsx`** — replace "Scoped in your $1,000 AI Assessment" for voice-agent-setup with a real band:

> **Typical engagement: $3,000–10,000 setup, then $1,500–3,000/mo.** Exact scope and price come out of your $1,000 Assessment.

Keeps the Assessment as the wedge while stopping the "they wouldn't tell me a number" reaction.

**A2. Add the retainer to the ladder.** The site has no representation of the **$5K/mo AI Employee retainer**, which STRATEGY calls "the model we are migrating to" and the default ask. It should appear as the top rung, described as an outcome ("a managed AI employee, not a project"), priced **"from $5,000/mo."**

**A3. Reconcile the Founder Content System.** Site says $2,000–5,000/mo; STRATEGY says engine $4K + $500–1K/mo, or UGC $0 + $1.5–4K/mo. **Decide which is real** — the site figure may be the newer thinking. Whichever wins, update the loser. Do not leave two live numbers.

**A4. Sweep the industry data files.** 8 files under `src/data/industries/` carry prices (dental, home-services, hvac, legal-intake, plumbing, postal-presort, roofing, therapists). Audit each against the chosen ladder. **These are the highest-risk surface** — they're vertical landing pages a cold prospect is most likely to land on, and they're easy to forget.

**A5. Homepage + `stack-audit-form.tsx`** — verify the $1,000 Assessment framing is consistent ("credits 100% toward your build"). Currently appears correct; confirm rather than assume.

### What NOT to do

- **Don't publish the $5–10K Speed-to-Lead setup as a hard number.** It's the widest-variance item; a band is honest, a fixed number becomes a ceiling you negotiate down from.
- **Don't add a pricing-comparison table.** Invites platform comparison. Violates "competition is for losers" (`05-sales-call-checklist` lesson 9).
- **Don't touch positioning copy** in this pass. Pricing only. Positioning is a separate, larger job.

---

## Sequencing

**This is not a Monday task.** Cold calls don't route through the website; nothing here blocks outbound. Slot it into a build block (Tue or Thu on the solo plan) in week 1–2.

Ordered by value per minute:

1. **Nav CTA** — 5 min, do it now, it's on every page
2. **Decide A / B / C** — the blocking decision, 10 min of thought
3. **A1 + A3** — the two live contradictions, ~30 min
4. **A4 industry sweep** — ~45 min, highest risk, most tedious
5. **A2 retainer rung** — new copy, ~30 min

Total ~2 hours after the decision.

## Verification

```powershell
cd C:\Users\ZionZ\clearautomations-website
npx tsc --noEmit
npm run lint
npm run build
```

Then grep for stragglers — the check that actually matters:

```powershell
Select-String -Path src -Pattern '\$[0-9]' -Recurse | Select-String -NotMatch 'node_modules'
```

Every hit must match the chosen ladder. **Done means: no price string on the site contradicts STRATEGY §3.**

## After shipping

Update `STRATEGY.md` §3 — it carries an **ACTION OUTSTANDING** flag calling this "the highest-value open loop in the venture." Clear it, and note the date and which option was chosen.

## Copy discipline (repo rule, applies to every string touched)

No em-dashes in body text. No "not just X, it's Y". No filler verbs (delve, leverage) or adjectives (robust, comprehensive, seamless). No emoji. Identifiable AI tone is a bug.
