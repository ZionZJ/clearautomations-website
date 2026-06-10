# Import Checklist

Use this checklist after importing the legal-intake demo workflows.

## Before Import

- Confirm you are in the demo n8n area or project (`DEMO - Legal Intake - Lone Star PI Group`).
- Confirm workflow JSON files are coming from `docs/industries/legal-intake/workflows/`.
- Confirm no JSON file contains real credentials.
- Confirm no JSON file contains real prospective-client information, real fact patterns, real opposing-party names, or anything privileged.
- **Confirm written attorney sign-off on the Vapi script is on file.** Non-negotiable for production.

## After Import

- Workflow names start with `DEMO - Legal Intake -`.
- Every workflow is inactive after import.
- Tags are added:
  - `demo`
  - `legal-intake`
  - `phase-1`
  - workflow-specific tags such as `conflict-gate`, `aba-1.18`, `speed-to-lead`, `reviews`, `aba-compliant`
- Timezone is set to the firm's primary state timezone.
- Successful production execution saving is disabled where available.
- Webhook URLs are copied into the manual only after confirming the final path.

## Functional Tests

- Run Workflow 01 with `demo-data/conflict-check-input.json` (default `simulateResult: clear`). Confirm output includes `outcome: clear` and routes to coordinator queue.
- Re-run Workflow 01 with the same input but `simulateResult: conflict`. Confirm output shows `outcome: conflict` and the workflow does NOT collect or expose more information.
- Re-run Workflow 01 with `simulateResult: manual-fallback`. Confirm output flags the manual-fallback path.
- Run Workflow 02 with `demo-data/missed-call-leads.json`. Confirm priority-1 (PI / mass-tort with urgency signals) callbacks sort above lower-priority queues.
- Run Workflow 07 with `demo-data/closed-engagements.json`. Confirm only happy + non-opt-out engagements receive `send-review-request`; others route to manager.
- Run Workflow 08 with `demo-data/weekly-firm-metrics.json`. Confirm digest includes conflict-clearance rate, SLA hit rate, engagement rate.

## CMS Conflict-Check Integration (Production)

Per `setup-manual.md` §7, the conflict-check API integration is the highest-priority Phase 1 production build item. Per-CMS integration time:

- **Clio API:** 8-10 hours; best-documented; `Matter` and `RelatedContact` endpoints.
- **MyCase API:** 10-12 hours.
- **PracticePanther API:** 10-12 hours.
- **Filevine API:** 12-16 hours; may require firm to upgrade to Enterprise tier.
- **Manual fallback:** workflow pauses + emails intake coordinator with collected fields.

The W01 demo's `simulateResult` field is replaced in production by an actual API call to the firm's CMS. Test both clear AND conflict scenarios before going live — at minimum 5 conflict scenarios per firm.

## HubSpot Pipeline Setup

- Use `demo-data/hubspot-pipeline.json` as the configuration reference.
- 8 stages: New Intake → Conflict-Cleared → Conflict-Declined → Coordinator Callback Queue → Discovery Scheduled → Discovery Held → Engaged → Closed Lost.
- 13 custom properties matching the pipeline JSON.
- **Critical compliance note:** no fact-pattern fields. Per ABA Rule 1.18, fact pattern is collected post-conflict-clearance by the intake coordinator inside the firm's CMS — never in HubSpot.

## Phase Gating

- **Phase 1 workflows (W01, W02, W07, W08)** can run on production webhooks after attorney sign-off + CMS conflict-check integration test pass.
- **Phase 2 workflows (W03 case-type-routing, W04 document-collection)** require Phase 1 stabilization (2+ weeks live) before launch.
- **Phase 3 workflows (W05 engagement-letter-followup, W06 SOL-tracker)** require Phase 2 stabilization. SOL tracker requires firm to pre-load existing case-list with SOL dates.

## Crisis-Branch Testing

Before any production deployment, test the Vapi crisis branch with these synthetic phrases (NOT real callers):

- "He's hitting me right now"
- "I'm thinking about hurting myself"
- "I have a plan"

Confirm: (1) crisis script delivered verbatim, (2) internal SMS alerts sent to managing partner test recipient, (3) CRM logged as `crisis-routed`, (4) no clinical or fact-pattern content collected.

## Publishing Rules

- Demo workflows can be published only against demo accounts.
- Production SMS requires opt-in, unsubscribe language, sender registration, and frequency caps.
- Per ABA Rule 7.3 + state advertising rules, the SKU is **inbound-only**. No outbound to prospective clients.
- Telnyx STIR/SHAKEN attestation + CNAM registration must complete before launch.
- Do not connect production CMS, payment, or e-sign systems until the firm has approved routing rules and provided attorney sign-off.
