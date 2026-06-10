# Therapist Practice — Phase 1 Admin-Augmented Tier Setup

> **SKU:** Phase 1 Admin-Augmented Front Desk
> **Pricing:** $1,500-$2,500 setup (one-time) + $200-$300/mo retainer
> **Timeline:** 2 weeks from kickoff to go-live
> **Status:** Alpha — first deployed on Embracing Minds Counseling (Humble, TX) starting 2026-05-26
> **Sibling SKU:** Phase 1 AI Front Desk — see [`phase-1-setup.md`](./phase-1-setup.md). $3,500-$5,000 + $400-$600/mo, 3-week timeline.

This is the entry-level tier of the therapist-practice front-desk SKU. It does everything the AI Front Desk tier does *except* the autonomous voice agent — instead, the practice's bilingual admin (or front-desk staff) handles all first-contact calls, with the system providing immediate notification + lead enrichment + outcome logging support.

## When to recommend this tier vs the AI tier

| Recommend Admin-Augmented when... | Recommend AI Front Desk when... |
|---|---|
| Practice owner believes human contact is clinically essential on first call | Practice owner is comfortable with AI handling qualification + booking |
| Practice already has bilingual admin staff (solves Spanish-supply via human) | Practice has no bilingual staff; Spanish-language access matters |
| Volume is under ~80 inquiries/month (admin can absorb the work) | Volume is over ~80/month or unpredictable spikes |
| Owner has had bad experiences with chatbot-style tools | Owner is automation-friendly and wants 24/7 coverage |
| Budget-sensitive ($200-300/mo is the right entry point) | Budget supports the $400-600/mo tier for the autonomy benefit |
| Practice operates predictable business hours; off-hours leads can wait until next AM | Practice loses competitive ground if inquiries wait until business hours |
| Practice is doing this for the first time and wants a low-stakes start | Practice has piloted similar tools and is ready for AI |

Many practices land on Admin-Augmented for Phase 1 and graduate to AI Front Desk after 90-180 days when their admin's bandwidth becomes the bottleneck. Document this upgrade path in the proposal as a Phase 1B option.

## What this tier delivers

1. **PHI-clean replacement contact form** on the practice's website. Same form spec as the AI tier — see [`form-spec.md` template](../../clients/_template/intake-and-routing/form-spec.md) or use the EM example at [`clients/embracing-minds/intake-and-routing/form-spec.md`](../../clients/embracing-minds/intake-and-routing/form-spec.md).
2. **Admin notification triplet** when a form submission lands: email + SMS + HubSpot task, all within seconds. Email has everything needed to call back without logging into anything first. SMS is a short alert. HubSpot task is the system record.
3. **Priority routing** — crisis-keyword detected → URGENT (CC's the practice owner); Spanish-language / sliding-scale / supervision request → HIGH; everything else → Standard. SLA targets: 5 min on-hours for URGENT/HIGH; 30 min for Standard; next business morning for off-hours.
4. **Admin intake playbook** — EN + ES intake scripts, qualification checklist, crisis-keyword recognition with verbatim crisis script, escalation paths. **This is the differentiator.** Most automation freelancers don't ship admin training assets.
5. **HubSpot lead-funnel pipeline** — 8 stages, ~22 custom properties, native HubSpot workflows for auto-stage + SLA escalation.
6. **Email reminder cadence** — 24h + 2h consult reminders in EN + ES, post-consult thank-you, out-of-state decline + resources, cancellation acknowledgement.
7. **Monthly directory health check** — Psychology Today, Zencare, Headway, GoodTherapy. Surfaces stale or missing profiles per clinician.
8. **Friday weekly metrics email** to the practice owner — inquiries, conversion, SLA performance, no-show rate, language-preference split.
9. **Included intake script + qualification checklist** — not an add-on; bundled in the base SKU.

## What this tier intentionally does NOT include

- **AI voice agent.** Save this for the AI tier ([`phase-1-setup.md`](./phase-1-setup.md)).
- **24/7 autonomous response.** Admin handles within business hours; off-hours queue for next AM.
- **STIR/SHAKEN + CNAM registration.** Not needed since the practice isn't initiating outbound voice via a third-party platform.
- **Voice recording + transcription storage.** No voice channel in this tier.
- **Vapi / Retell / Twilio Security Edition / Telnyx HIPAA voice tier.** Smaller vendor stack.

## Vendor stack (3 accounts, all in client's name)

| Vendor | Purpose | Tier | Monthly cost |
|---|---|---|---|
| HubSpot | CRM lead pipeline + admin task assignment | Free for Phase 1 sandbox; **Enterprise + Sensitive Data required for production with real prospective-client data** | $0 sandbox / $1,200+/seat production (Phase 2+ may use this anyway) |
| Resend | Transactional email + SMS notifications + reminder cadence | Standard ($20/mo) for Phase 1 sandbox; **BAA-confirmed alternative (Postmark Pro with BAA) for production** | $20-100/mo |
| 1Password Business | Credential management for the above + client's existing accounts | Standard | $20/mo |

**Compared to AI Front Desk tier:** drops Retell ($15-1,000/mo depending on HIPAA tier), Telnyx ($1-50/mo + per-minute voice), Vapi (if considered). Total vendor cost reduction: ~$50-1,500/mo depending on which tier the AI client was on.

## 2-week deployment timeline

### Week 1: Discovery + Build

**Monday-Tuesday — Discovery + admin intro**
- 15-min onboarding call with practice owner
- Confirm admin's name, mobile phone, email
- Walk admin through the intake playbook
- Owner signs off on intake script + crisis-handling wording (EN + ES)
- Collect admin access grants: registrar (DNS), CMS, SimplePractice (Practitioner Admin)

**Wednesday-Friday — System build**
- Create vendor accounts under client's billing email (HubSpot, Resend, 1Password)
- Configure W01-EM webhook on n8n (PHI keyword check + honeypot + consent gates)
- Configure W02-EM admin notification (email + SMS + HubSpot task)
- Build HubSpot custom properties + pipeline + native workflows
- Deploy replacement form (Path A: client developer / Path B: CA on subdomain at $750 add-on)

### Week 2: Test + Go-Live

**Monday — Test**
- Admin runs 2-3 synthetic dry-run notifications end-to-end
- Test all 3 priority tiers (URGENT crisis-keyword, HIGH Spanish, Standard)
- Confirm admin can log outcomes in HubSpot correctly
- Validate Friday metrics email rendering

**Tuesday-Wednesday — Final calibration**
- Resolve any playbook adjustments admin surfaces during dry-runs
- Confirm DNS + form deployment ready
- Pre-flight all production gates per cutover checklist

**Thursday — Pre-go-live signoff**
- Practice owner + CA initial the production-cutover authorization checklist
- Schedule go-live time for Tuesday morning

**Note on Memorial Day:** if go-live falls in the last week of May, Mon May 25 is Memorial Day. Push DNS cutover to Tuesday.

**Tuesday (Go-Live)**
- DNS cutover at registrar
- Activate W01-EM webhook
- Activate W02-EM admin notification workflow
- Activate W03 reminder cadence
- Activate W04 directory health check (monthly cron)
- Submit test form payload; confirm admin receives email + SMS + HubSpot task
- Admin handles the test submission end-to-end
- Notify owner system is live

**Wednesday — 30-min Day 1 review**
- Walk owner through first day's inquiries
- Address any admin feedback
- Schedule Friday weekly cadence start

## Admin onboarding — practice-side responsibility

This tier requires the admin to absorb a playbook and run intake calls. Practices that don't have admin bandwidth or training capacity should not commit to this tier — recommend AI Front Desk instead.

Minimum admin training time:
- 30 min: walkthrough of playbook with CA + practice owner
- 60 min: solo read-through of playbook
- 30 min: 2-3 dry-run synthetic notifications + intake calls (Zion calls test number; admin runs through script)
- 30 min: HubSpot outcome-logging walkthrough

Total: ~2.5 hours of admin time, spread over Week 1.

After go-live, admin should expect:
- 2-5 form submissions per day (varies by practice marketing volume)
- 5-15 minutes per intake call
- 2-3 minutes per outcome logging
- ~30-60 min daily admin time committed to the system

If volume grows past what admin can handle, surface AI Front Desk upgrade conversation at 90 days.

## Pricing breakdown

### Setup fee ($1,500-$2,500 one-time)

Quote based on:
- Practice size (1-5 clinicians: $1,500; 6-10: $2,000; 11+: $2,500)
- Bilingual requirements (add $200 if Spanish copy needs external review when admin isn't bilingual)
- Replacement form path (add $750 if CA deploys on subdomain rather than client's developer)
- Existing tools migration (add $500 if migrating existing leads from another CRM)

Setup covers:
- All 3 vendor accounts created in client's name
- W01-EM + W02-EM workflow deployment + testing
- Admin intake playbook customized for the practice (clinician roster, payer panel, supervision routing, sliding-scale rules)
- HubSpot pipeline + custom properties + native workflows
- Email template library (6 EN + 6 ES, customized to practice voice)
- Replacement contact form (Path A: provide spec to client dev / Path B: deploy on subdomain)
- 15-min onboarding call + admin training
- Production cutover + Day 1 review

### Monthly retainer ($200-$300/mo)

Tier by practice size:
- 1-5 clinicians: $200/mo
- 6-10 clinicians: $250/mo
- 11+ clinicians: $300/mo

Retainer covers:
- System monitoring (does the form fire, do notifications arrive, do reminders go out)
- Friday weekly metrics email
- Monthly directory health check report
- Up to 2 hours/month of admin support (playbook updates, new clinician routing, HubSpot tweaks)
- Vendor cost stays separate (client pays HubSpot + Resend + 1Password direct)

### Add-ons available

| Add-on | Price | When to recommend |
|---|---|---|
| Replacement form (Path B — CA deploys) | $750 one-time | Client doesn't have a developer or wants subdomain deployment |
| Spanish-script bilingual clinician review | $200-$500 one-time | Client's admin isn't bilingual; CA contracts an LCSW for review |
| Website Optimization Tune-Up | $2,500-$3,500 | Client's website needs CTA + Spanish-bilingual + clinical-supervision landing-page work |
| Psychology Today profile drafting | $400 flat (covers up to 5 clinicians) | Practice has missing PT profiles; this is high-leverage marketing work |
| AI Front Desk upgrade (Phase 1B) | Quote separately | Volume has grown past admin bandwidth; client wants 24/7 coverage |
| HIPAA Risk Analysis | $2,000 annual | Phase 2 readiness gate |

## When the admin tier underperforms — diagnostic playbook

If conversion isn't moving after 60 days, run these checks before recommending AI tier:

1. **Is admin acknowledging notifications within SLA?** Pull W02-EM logs + HubSpot task completion timestamps. If admin is taking >2 hours during business hours regularly, the bottleneck is admin bandwidth, not the system.
2. **Is the form converting?** Check form-submission count vs site visits. Low conversion at form layer = website/CTA problem, not Phase 1 problem.
3. **Are admin's calls qualifying correctly?** Review HubSpot deal stages. If most are `not-fit` or `out-of-state`, the marketing is misaligned with the practice's service area or specialty.
4. **Are reminders going out + working?** Check W03 logs + no-show rates. If reminders fire but no-shows don't drop, the issue is upstream (clinical fit, not operational).
5. **Is Spanish lane firing?** Check `practice_lead_language_preference = es` count. If zero after 30 days, Spanish-search marketing isn't reaching the practice.

If items 1-3 are clean but conversion isn't moving, the AI tier won't fix it either. Surface as a marketing problem.

If item 1 shows admin is the bottleneck, surface the AI tier upgrade path.

## Cross-references

### Sister SKU
- [`phase-1-setup.md`](./phase-1-setup.md) — Phase 1 AI Front Desk tier (full setup guide with Retell + Telnyx + Vapi)
- [`vapi-retell-agent-setup-guide.md`](./vapi-retell-agent-setup-guide.md) — AI tier agent configuration (not applicable to admin tier)

### Generic SKU files (shared by both tiers)
- [`vapi-script.md`](./vapi-script.md) — Vapi/Retell script template (AI tier only; admin tier adapts via [`admin-callback-playbook.md`](../../clients/embracing-minds/intake-and-routing/admin-callback-playbook.md) at the client-overlay level)
- [`demo-client-profile.md`](./demo-client-profile.md) — fictional Cedar Park Counseling Collective (sales demo for prospects)
- [`workflows/`](./workflows/) — generic W01-W07 templates (admin tier uses W01-EM + W02-EM EM-specific variants at client level; W03/W04/W07 stay shared)

### First admin-tier deployment (case study)
- [`clients/embracing-minds/`](../../clients/embracing-minds/) — Embracing Minds Counseling (Humble, TX) — first admin-tier pilot, go-live Tue 2026-05-26
- [`clients/embracing-minds/intake-and-routing/admin-callback-playbook.md`](../../clients/embracing-minds/intake-and-routing/admin-callback-playbook.md) — reference template for future admin-tier clients
- [`clients/embracing-minds/intake-and-routing/admin-notification-spec.md`](../../clients/embracing-minds/intake-and-routing/admin-notification-spec.md) — reference template for the notification triplet

### Strategic context
- [`internal/strategic-review-2026-05.md`](../../internal/strategic-review-2026-05.md) — CA strategic posture; admin-tier emerged from Zamaria's 2026-05-18 feedback
- [`internal/therapist-market-research-2026-05.md`](../../internal/therapist-market-research-2026-05.md) — Texas therapist market data + bilingual-admin supply analysis

## Change log

- 2026-05-18: Initial authoring as the Admin-Augmented Front Desk SKU. Pricing per Zion's gut: $1,500-$2,500 setup + $200-$300/mo retainer. Intake script + qualification checklist included in base (not an add-on). First deployment: Embracing Minds Counseling, Phase 1 pilot, go-live Tue 2026-05-26.
