# Industry Tool-Stack Audit — May 2026

**Date:** 2026-05-14
**Author:** ClearAutomations internal strategy
**Trigger:** User-requested cross-vertical review of CA's 7 productized industry SKUs against the May-2026 wiki signal. The wiki has added 5+ tool-doctrine pages since the original productization deep dive (Hermes 5-pillars, n8n Desk beta, ElevenLabs V2 voice agent build pattern, Cowork fundamentals, Printing Press CLI doctrine).
**Status:** INTERNAL — audit + queued recommendations. Group B/C execution waits per [strategic-review-2026-05.md](./strategic-review-2026-05.md) constraint (post-Tue 2026-05-26 EM go-live).

This document inventories the current state of each industry's productized config + workflow stack, cross-references it against the May 2026 wiki's current-best tool recommendations, and queues the actual updates as Group B (post-cutover) or Group C (longer-arc) work. No production files are edited in this pass.

---

## TL;DR

**Healthy:** the 7-vertical productization remains sound. Pricing ladders, compliance posture per vertical, and workflow shape all hold up against the new wiki signal. No structural changes needed.

**6 outdated items found** (5 small, 1 material):
1. Resend BAA unconfirmed for therapist Phase 2+ (already flagged 2026-05-08 in EM gates doc; no change in status). **MATERIAL.**
2. Vapi HIPAA pricing positioning in `dental-practices.ts:221` ("uneconomic at SMB volume") needs re-validation against current Vapi + Retell Enterprise quotes.
3. ABA Formal Opinion 512 (2024) referenced in legal-intake README — confirm whether 2026 supersedes.
4. NexSort case study referenced as pending in postal-presort docs — confirm signing status.
5. Postage-rate signal in postal-presort demo profile cites "12-15% rise since early 2025" — verify whether still current in May 2026.
6. Phase 2 EHR / FSM default not standardized — some verticals name 4-5 candidates without a default; dental + roofing especially.

**8 new wiki-signal additions** worth queueing into the next cycle:
1. n8n Desk (beta) as Tier-A for client-delivery enterprise-safe automation. Wait for GA before pitching.
2. Hostinger one-click Hermes template for Phase 1.5 operational monitoring agent (already in Group B per strategic review).
3. ElevenLabs V2 + Claude Code 15-minute voice agent build as a Phase 1 add-on tier (alternative to Retell for non-HIPAA verticals).
4. GPT Image 2 (via Fal AI) for any client-deliverable graphics + thumbnails (text-rendering superiority).
5. n8n Desk MCP — agents can create workflows, not just execute. Productization angle for Group C.
6. Loom + Claude transcript-to-SOP pattern (already in Group B as the Loom-to-SOP skill build).
7. LiveKit for ultra-low-latency on-premises voice (Phase 2/3 candidate for therapist if Retell observability gap proves limiting).
8. Cowork-vs-Hermes decision pattern for ClearAutomations Phase 1.5 internal operations.

**7 client-facing workflow diagrams** created (one per industry) at `clearautomations-website/public/workflow-diagrams/{industry}.svg`. Embeddable on industry landing pages + sales decks.

---

## Cross-vertical state snapshot

| Vertical | Phase 1 Setup | Phase 1 Monthly | Voice Agent | CRM/EHR Default | Workflows | Compliance | Outdated Flags |
|---|---|---|---|---|---|---|---|
| Therapists | $4.5K | $400/mo | Retell AI (HIPAA) | SimplePractice | 7 | HIPAA + BAA + TX HB 300 | Resend BAA unconfirmed |
| Dental | $4.5K | $450/mo | Retell AI (HIPAA) | Dentrix / Open Dental / Eaglesoft | 8 | HIPAA + BAA | Vapi pricing claim needs validation |
| HVAC | $3.5K | $450/mo | Vapi (non-HIPAA) | HubSpot Starter | 6 | TCPA + no diagnosis | None |
| Roofing | $3.5K | $450/mo | Vapi (non-HIPAA) | HubSpot or JobNimbus | 8 | TCPA + no diagnosis | Multiple FSM candidates, no default |
| Legal Intake | $4.5K | $450/mo | Vapi (non-HIPAA) | Clio (default) | 8 | ABA 1.18 + 5.5 + Op. 512 | Op. 512 (2024) recency confirm |
| Postal Presort | $2.5K | $350/mo | Vapi (non-HIPAA) | HubSpot (8 stages) | 11 | TCPA + B2B exemption | NexSort case study pending; postage-rate 2025 |
| Home Services | $3.5K | $450/mo | Vapi × 10 sub-verticals | Jobber (default) | 6 | TCPA + no diagnosis | None |

Pricing tiers from [strategic-review-2026-05.md](./strategic-review-2026-05.md) hold: NexSort ($2.5K/$1.5K/$1K setup; $350-$650/mo), Trades ($3.5K/$2.5K/$2K; $450-$650/mo), Healthcare ($4.5K/$7.5K/$9.5-12K; $400-$1.5K/mo). All verticals clear the $50/mo recurring floor per Tibo's pricing doctrine ([tibo-solo-ai-portfolio-case-study]).

---

## Per-vertical findings

### Therapists

**Current state:** healthy. EM is the first paying client and Phase 1 cutover is mid-stream (Tue 2026-05-12 to Tue 2026-05-26).

**Outdated references:**
- **Resend BAA unconfirmed** (per `email-templates.md` line 1). This is a Phase 2+ blocker, not a Phase 1 blocker. Already in the production-readiness gates queue. Status as of 2026-05-14: still unconfirmed.

**New wiki signal worth considering (Group B post-cutover):**
- **ElevenLabs V2 + Claude Code 15-minute voice build** as an alternative to Retell for the Cedar Park demo persona — pure marketing-tool, not for EM Phase 2+ (still Retell-anchored due to HIPAA).
- **LiveKit + Mem0 long-term memory** as a Phase 2 candidate if Retell's HIPAA observability gap proves limiting (Vapi observability gate already documented).
- **Hostinger VPS for Phase 1.5 monitoring agent** — already in Group B strategic-review queue.

**Recommended Group B updates (post-2026-05-26):**
1. Confirm Resend BAA in writing OR swap to Postmark with confirmed BAA before Phase 2 launch.
2. Add a sentence to `therapists.ts` toolsPolicy `approved[]` confirming Retell stays the production target and that ElevenLabs is a no-PHI-demo alternative.

---

### Dental

**Current state:** healthy. No paying clients yet; second-most-likely target vertical after therapist.

**Outdated references:**
- `dental-practices.ts:221` states: *"Vapi's $1,000/mo flat HIPAA add-on is uneconomic at SMB dental volume."* This claim relies on third-party comparisons that the strategic review explicitly flagged as not-reliable for SOW anchoring. Per the verify-vendor-pricing-against-official-docs feedback rule, this claim should be sourced from a written Vapi quote OR softened to "TBD by sales."

**Recommended Group B update:**
1. Email Vapi sales for written HIPAA quote (one-time action; same email goes out for therapist too).
2. Update `dental-practices.ts:221` to reflect actual quoted pricing OR mark as "pending written quote, anchor on Retell HIPAA-included tier as default."

**New wiki signal worth considering:**
- Dental Phase 2 EHR-handoff currently lists 5 PMS candidates (Dentrix, Open Dental, Eaglesoft, Curve, HubSpot) with no default. Per the strategic-review Tier B doctrine (one-feature MVP per vertical), naming **Open Dental as the default** (cheapest, most-flexible, growing market share at small/mid practices) sharpens the SKU. Cross-reference target the first dental signing.

---

### HVAC Contractors

**Current state:** healthy. Priority-1 GTM vertical post-EM cutover.

**Outdated references:** none flagged.

**New wiki signal worth considering:**
- The 8-step automation-agency-client-lifecycle-playbook SOP applies to HVAC the same as to therapist. Phase 1 setup process should adopt the 30-second Stripe receipt + 5-minute gratitude + perception-of-progress sequence before first paying client.
- Cold-email lead-gen Phase 2 bundle (per `ai-lead-gen-service-vs-receptionist`) is a candidate for HVAC specifically (non-HIPAA + B2B-ish outreach to property managers + commercial accounts).

**Recommended Group B update:**
1. Add Speed-to-Lead AI Agent as a Phase 1.5 upsell line ($1.5K + $300-$500/mo per strategic review Tier B brief).
2. Cold-Email Lead Gen bundle queued as Phase 2 conditional offering (per strategic review Tier B item 3).

---

### Roofing Contractors

**Current state:** healthy.

**Outdated references:**
- Phase 2/3 integration target lists 6 candidates (HubSpot, JobNimbus, Jobber, AccuLynx, Roofr, CompanyCam) with no default. Same productization gap as dental.

**Recommended Group B update:**
1. Name **JobNimbus as the default** roofing CRM (most-used industry-specific tool; CompanyCam complements for photo doc).
2. Storm Response Playbook add-on ($750) already exists; flag for first roofing client as a default-inclusion.

**New wiki signal worth considering:**
- The cold-email bundle for roofing differs from HVAC: roofing leans seasonal (storms) and insurance-claim-driven, not steady B2B. Skip cold email for roofing Phase 2; lean into storm-radar tooling integration instead (StormCallApp, CompanyCam radar overlays).

---

### Legal Intake

**Current state:** healthy. Highest-stakes greenfield build (UPL liability + ABA Rule 1.18 architecture).

**Outdated references:**
- **ABA Formal Opinion 512 (2024)** referenced in `docs/../industries/legal-intake/README.md` as current guidance. Confirm whether ABA has issued newer AI-related guidance in 2025-2026 that should supersede or supplement. As of the wiki batch through 2026-05-12, no superseding opinion has been mined.

**Recommended Group B update:**
1. Quick verification pass against ABA's website (`americanbar.org/groups/professional_responsibility/`) to confirm 512 still current. If superseded, update the README + the legal-intake voice script's Rule-1.18 framing.
2. Add named default CMS — Clio is already listed as default in the config; ensure it propagates to public industry page copy.

**New wiki signal worth considering:**
- The Hermes Agent operational-monitoring pattern is well-suited to legal-intake: SOL tracker (statute-of-limitations) firing automated alerts to lead attorney is a natural Hermes cron use case.

---

### Postal Presort

**Current state:** healthy. NexSort is the named pending paying client.

**Outdated references:**
- **NexSort case study referenced as pending** in postal-presort demo files. Confirm status: signed engagement? In progress? Shelved? If signed, retire Lone Star Mail Services and write a NexSort-anchored version in parallel to the EM template.
- **Postage-rate signal** in `demo-client-profile.md`: cites "12-15% cumulative rise since early 2025." May 2026 rates may have stabilized or shifted; verify against USPS rate-card data before referencing in client conversations.

**Recommended Group B update:**
1. If NexSort signs: build NexSort overlay using EM-overlay template (profile + Vapi script + HubSpot pipeline + form spec + production-readiness gates).
2. Refresh postage-rate signal with current USPS data point.

**New wiki signal worth considering:**
- Cold-Email Lead Gen (Phase 3-equivalent) per `ai-lead-gen-service-vs-receptionist` is the natural Phase 2 expansion for postal-presort B2B targeting (the current Phase 3 is attorney-gated cold-outbound; the cold-email bundle would be Phase 2.5).

---

### Home Services (General)

**Current state:** healthy. Most flexible vertical (10 sub-vertical Vapi agent variants).

**Outdated references:** none flagged.

**New wiki signal worth considering:**
- The 10 sub-verticals (plumbing, electrical, landscape, pest, garage doors, fence, tree, junk, paint, pressure-wash) all benefit from the cold-email Phase 2 bundle, but the lead-gen target list per sub-vertical is different (e.g., commercial accounts for pressure-wash vs. residential for plumbing). Group C work: write 10 vertical-specific lead-list profiles.

**Recommended Group B update:**
1. Add Speed-to-Lead AI Agent as standard Phase 1.5 across all 10 sub-verticals.

---

## Cross-cutting recommendations

### Group B — Post-cutover (after Tue 2026-05-26)

In order of impact:

1. **Vapi HIPAA written quote** — email Vapi sales for therapist + dental engagements. Update dental config copy with the actual number. **(1 email; downstream copy changes across both verticals.)**
2. **Resend BAA confirmation OR Postmark swap** — single decision blocks therapist Phase 2. **(1 vendor decision; downstream email-template impact.)**
3. **Phase 2 default-tool naming** — Open Dental for dental, JobNimbus for roofing. Reduces sales-call confusion. **(Two config edits.)**
4. **NexSort case study refresh** — if signed, build the overlay; if not, retire as named target. **(One status check, conditional build.)**
5. **ABA Opinion 512 re-confirmation** — verify current authority on AI guidance for legal-intake.
6. **Speed-to-Lead AI Agent productization** — already in strategic-review Tier B. Roll across all 7 verticals.
7. **Cold-Email Lead Gen Phase 2 bundle** — non-HIPAA verticals only (HVAC, roofing, postal-presort, legal-intake, home-services). Already in strategic-review Tier B.
8. **8-step delivery SOP adoption** — applies cross-vertical. Already in strategic-review Tier D.
9. **Loom + Claude transcript-to-SOP skill** — already in strategic-review Tier D.
10. **Hostinger + Hermes Phase 1.5 operational monitoring** — already in strategic-review Tier D.

### Group C — Tracked, longer arc

- **n8n Desk migration evaluation** — beta as of 2026-05-12; wait for GA + customer references before committing CA Phase 1 to it. Productization angle is "enterprise-safe automation delivery" which strengthens the SKU but the productivity-dip risk during cutover is real.
- **LiveKit ultra-low-latency voice** — Phase 2/3 candidate for therapist if Retell observability gap proves limiting.
- **GPT Image 2 for client deliverables** — text-rendering superiority for landing pages, sales decks, infographics. Tie into the AI Slop Cleanup SKU brief from strategic review.
- **ElevenLabs V2 Phase 1 alternative tier** — non-HIPAA verticals could offer ElevenLabs as an alternative-priced agent (cheaper, faster MVP than Retell for non-HIPAA work).
- **n8n Desk MCP "agents create workflows" pattern** — productization candidate as a deliverable tier ("custom workflow built in front of you in 90 minutes") once GA stabilizes.
- **Per-sub-vertical lead-list profiles** for home services (10 profiles).

### Group F — Intentionally NOT recommending

Things the wiki implies but that this audit rejects for CA's productized SKU:

- **Self-hosted LiveKit production rollout pre-Phase-3** — operational burden too high for current solo-operator capacity.
- **Pre-emptive n8n Desk migration** — beta tool, 20% productivity-dip rule applies, EM cutover in progress.
- **Cold email for healthcare verticals (therapist, dental)** — TCPA + healthcare-marketing rules make this riskier than the value justifies. Already excluded in strategic-review Tier B.

---

## What's actually been edited in this pass

Nothing in production code or workflow JSONs. Mid-cutover constraint per strategic review.

**Files created:**

- This audit doc at `clearautomations-website/docs/industry-tool-stack-audit-2026-05.md`.
- 7 client-facing workflow diagrams at `clearautomations-website/public/workflow-diagrams/{industry}.svg` (created in the same execution batch as this doc). Embeddable on industry landing pages + sales decks. Consistent template, industry-specific iconography + color palette.

**Files NOT edited:**

- No industry config (`src/data/industries/*.ts`) changed.
- No workflow JSON (`docs/../industries/*/workflows/*.json`) changed.
- No EM-engagement file touched (vapi script, email templates, form spec, routing matrix, gates doc, profile, HubSpot pipeline, phase-1-setup, engagement proposal).
- No public site copy edited (services page, industry pages).

All these are queued to Group B / C execution windows.

---

## Verification

- [x] All 7 industries surveyed against current config + workflow inventory
- [x] All 7 industries cross-referenced against May 2026 wiki tool-doctrine signal
- [x] Outdated references enumerated (6 items, severity tagged)
- [x] New wiki signal opportunities enumerated (8 items, timing-tagged)
- [x] Group B / C / F queues mapped to existing strategic review
- [x] 7 SVG workflow diagrams created (one per industry)
- [x] No EM-engagement file touched
- [x] No production code edited during cutover window

---

## Cross-references

- [strategic-review-2026-05.md](./strategic-review-2026-05.md) — strategic positioning shifts + post-cutover execution queue (this audit builds on Tier B/C from there)
- [therapist-market-research-2026-05.md](./therapist-market-research-2026-05.md) — sourced market data + ROI math (per-vertical economics extension implied)
- [engagement-proposal.md](./../clients/embracing-minds/engagement/engagement-proposal.md) — current client deliverable, locked during cutover
- [production-readiness-gates.md](./../clients/embracing-minds/engagement/production-readiness-gates.md) — Phase 1 cutover gates
- Wiki: [[hermes-agent-browser-harness]] — Hermes 5-pillars + Cloud-Code-managed VPS agents
- Wiki: [[n8n-desk-agentic-safe-execution-layer]] — n8n Desk beta positioning
- Wiki: [[voice-ai-conversational-design]] — voice agent platform comparison
- Wiki: [[ai-lead-gen-service-vs-receptionist]] — cold-email Phase 2 bundle architecture
- Wiki: [[automation-agency-client-lifecycle-playbook]] — 8-step delivery SOP
- Wiki: [[impeccable-design-toolkit]] — visual-side anti-AI-slop discipline (applies to the 7 SVGs created here)

## Change log

- 2026-05-14: Initial authoring from parallel research-agent output (Agent A surveyed configs + n8n-demos folders across 7 industries; Agent B mined wiki for May 2026 tool-doctrine signal). All findings + recommendations queued; no production-code or EM-engagement files edited.
