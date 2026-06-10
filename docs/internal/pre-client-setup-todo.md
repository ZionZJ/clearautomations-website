# ClearAutomations Pre-Client Setup Todo List

## Summary
Use this as the top-to-bottom checklist to make ClearAutomations demo-ready and client-ready. Default path: **HVAC + Plumbing demos first** (the week-1 cold-outreach verticals), then Roofing, Dental, Therapist. Keep public demos fake-data only until a signed client scope exists.

## Ordered Checklist

1. **Business Identity + Placeholders**
   - [ ] Decide final legal entity name, public brand name, and whether to form/file in Texas via [SOSDirect](https://www.sos.state.tx.us/corp/sosda/index.shtml).
   - [ ] Get EIN from the IRS if needed: [IRS EIN](https://www.irs.gov/businesses/employer-identification-number).
   - [ ] Fill site placeholders: legal entity, mailing address, public phone, support email, LinkedIn, booking link.
   - [ ] Set up business banking/payment method for tool subscriptions.
   - [ ] Create Stripe for invoices/payment links: [Stripe](https://stripe.com/pricing).

2. **Business Phone Number**
   - [ ] Get a real public business number before pitching.
   - Recommended split:
     - **Quo/OpenPhone-style number** for your public business line: easy calling/texting/shared inbox. [Quo](https://www.quo.com/pricing)
     - **Telnyx/Twilio number** for AI demo/testing lines. [Telnyx](https://telnyx.com/pricing), [Twilio](https://www.twilio.com/en-us/pricing)
   - Pros: separates personal phone, makes demos real, supports call recordings/transcripts.
   - Cons: SMS registration/10DLC can take time; AI phone testing has per-minute costs.
   - [ ] Add the number to `src/lib/site-config.ts` once final.

3. **Core Tool Accounts**
   - [ ] n8n automation hub: choose either [n8n Cloud](https://n8n.io/pricing/) or Hostinger VPS n8n template: [Hostinger n8n VPS](https://www.hostinger.com/support/10473267-how-to-use-the-n8n-vps-template-at-hostinger).
     - n8n Cloud pros: less maintenance. Cons: monthly SaaS cost, less server control.
     - Hostinger VPS pros: control, can host demos. Cons: you own security/backups/updates.
   - [ ] HubSpot CRM: [HubSpot Free CRM](https://www.hubspot.com/products/free-crm-software).
   - [ ] Resend for transactional email: [Resend](https://resend.com/pricing).
   - [ ] Retell AI for voice demos (go-forward default; Vapi stays a documented alternate for deep-custom builds): [Retell pricing](https://www.retellai.com/pricing).
   - [ ] Scheduling: Calendly or Cal.com. [Calendly plans](https://help.calendly.com/hc/en-us/articles/8815568416535-Calendly-s-subscription-plans), [Cal.com](https://cal.com/pricing).

4. **Website + Hosting**
   - [ ] Confirm hosting choice: Hostinger is fine for predictable flat-price Next.js hosting: [Hostinger Next.js](https://www.hostinger.com/web-apps-hosting/nextjs-hosting). Vercel is the easiest Next-native alternative: [Vercel](https://vercel.com/pricing).
   - [ ] Add hosting env vars (every one of these; a missing variable 503s the form and loses the lead):
     - `N8N_FREE_AUDIT_WEBHOOK_URL`
     - `N8N_STACK_AUDIT_WEBHOOK_URL`
     - `N8N_CHECKLIST_WEBHOOK_URL`
     - `N8N_THERAPISTS_AUDIT_WEBHOOK_URL`
     - `N8N_HVAC_AUDIT_WEBHOOK_URL`
     - `N8N_PLUMBING_AUDIT_WEBHOOK_URL`
     - `N8N_ROOFING_AUDIT_WEBHOOK_URL`
     - `N8N_DENTAL_AUDIT_WEBHOOK_URL`
     - `N8N_POSTAL_PRESORT_AUDIT_WEBHOOK_URL`
     - `N8N_LEGAL_INTAKE_AUDIT_WEBHOOK_URL`
     - `N8N_HOME_SERVICES_AUDIT_WEBHOOK_URL`
   - [ ] Run before publishing: `npm run lint`, `npx tsc --noEmit --incremental false`, `npm run build`.

5. **Import Demo Workflows**
   - [ ] Start with `docs/../industries/hvac-contractors`, then `docs/../industries/plumbing-contractors`.
   - [ ] Create n8n project: `DEMO - HVAC Contractors - Lone Star Comfort`.
   - [ ] Create n8n project for the plumbing demo (name it after the plumbing demo client profile).
   - [ ] Import all HVAC and plumbing workflow JSON files inactive.
   - [ ] Add tags: `demo`, `hvac` or `plumbing`, `home-services`, `phase-1`, plus workflow-specific tags.
   - [ ] Set timezone to `America/Chicago`.
   - [ ] Repeat later for Roofing, Dental, Therapist demos.
   - [ ] Never connect real client data during demo testing.

6. **Workflow Tests**
   - [ ] HVAC: run all six workflows with demo JSON payloads.
   - [ ] Plumbing: run all six workflows with demo JSON payloads; confirm the gas/sewage/flooding safety branch routes to a human path.
   - [ ] Roofing: run storm intake, missed call, scheduler, photo collection, claim follow-up, estimate follow-up, review request, digest.
   - [ ] Dental: run non-PHI audit, missed call, no-show, recall, treatment-plan demo, schedule gap, review request, digest.
   - [ ] Therapist: run non-PHI consult/directory workflows; keep disabled simulations clearly demo-only.
   - [ ] Confirm each workflow outputs: priority, next action, owner/client-safe summary, and no sensitive-data request.

7. **Prompts Needed**
   - [ ] Retell voice prompt per vertical using the `retell-script.md` files (older packs may still carry `vapi-script.md` until swept).
   - [ ] Free Audit summarizer prompt: turn form submissions into “leaks, risk, recommended next step.”
   - [ ] Workflow audit recommendation prompt: map tools, bottlenecks, automation opportunities, and compliance boundaries.
   - [ ] Weekly owner digest prompt: summarize leads, stale follow-ups, failed workflows, and next actions.
   - [ ] Demo narrator prompt: explain each workflow simply during a sales walkthrough.
   - [ ] Founder Content System prompt: turn founder notes/calls into post ideas, scripts, emails, and calendar items.

8. **Demo Readiness**
   - [ ] Record one clean screen walkthrough for HVAC.
   - [ ] Prepare a live demo path: website form -> n8n webhook -> CRM/demo email -> owner digest.
   - [ ] Prepare a voice demo path: Retell test call -> transcript/summary -> CRM/demo task.
   - [ ] Create “what this does not do” language: no diagnosis, no legal advice, no PHI, no claim promises.

9. **Client Sales + Delivery Docs**
   - [ ] Use `reference/client-facing-docs` templates for discovery, proposal, SOW, kickoff, UAT, launch, runbook, support.
   - [ ] Have attorney review MSA/SOW/privacy/terms before signed client use.
   - [ ] Prepare first-offer packages: Free Audit, $1,000 AI Assessment (credits toward the build within 60 days), AI Front-Desk Employee Setup, Phase 1 Capture.
   - [ ] Create Stripe payment links or invoice templates for the AI Assessment and setup fees.

10. **Ready-To-Sell Gate**
   - [ ] Public site builds and all forms submit to branded API routes.
   - [ ] At least one full HVAC demo works end-to-end.
   - [ ] Business phone, email, booking link, and payment path are live.
   - [ ] You can explain tool ownership, handoff, compliance boundaries, and support terms.
   - [ ] You have one pitch script, one demo recording, one proposal template, and one launch checklist ready.

## Assumptions
- HVAC is the first sales demo because it has the clearest missed-call ROI story.
- Quo/OpenPhone-style number is best for ClearAutomations’ public business line; Telnyx/Twilio/Vapi numbers are best for automation demos.
- Hostinger is acceptable if you want predictable hosting; Vercel is easier if Next.js deployment becomes annoying.
- Client data stays out of demos until signed scope, access rules, consent language, and compliance checks are complete.
