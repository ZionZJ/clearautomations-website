# Import Checklist

Use this checklist after importing the postal-presort demo workflows.

## Before Import

- Confirm you are in the demo n8n area or project (`DEMO - Postal Presort - Lone Star Mail Services`).
- Confirm workflow JSON files are coming from `docs/industries/postal-presort/workflows/`.
- Confirm no JSON file contains real credentials.
- Confirm no JSON file contains real client mail-piece content, end-recipient PII, or production-stack credentials.

## After Import

- Workflow names start with `DEMO - Postal Presort -`.
- Every workflow is inactive after import.
- Tags are added:
  - `demo`
  - `postal-presort`
  - `mailing-services`
  - `phase-1`
  - workflow-specific tags such as `speed-to-lead`, `branching`, `email-sequence`, `reviews`, `reporting`
- Timezone is set to the presort company's timezone (e.g., `America/Chicago` for NexSort, `America/Chicago` for Lone Star).
- Successful production execution saving is disabled where available.
- Webhook URLs are copied into the manual only after confirming the final path.

## Functional Tests

- Run Workflow 01 with `demo-data/inbound-form-lead.json`. Confirm SMS warm-up text + Vapi callback record are produced.
- Run Workflow 02 with `demo-data/vapi-end-of-call-payload.json`. Confirm the 5-way branch outputs `outcome` and the correct `nextAction`.
- Run Workflow 03 with `demo-data/email-sequence-trigger.json`. Confirm cadence labels (D0 / D2 / D5 / mark-stale) match the `daysSinceTrigger` values.
- Run Workflow 05 with `demo-data/closed-won-records.json`. Confirm only `customerSatisfaction = high` and `reviewOptOut = false` records receive a review touch; others route to manager.
- Run Workflow 06 with `demo-data/weekly-digest-metrics.json`. Confirm digest string includes callback hit rate and conversion rate.
- Run Workflow 07 with `demo-data/daily-pipeline-snapshot.json`. Confirm daily snapshot string is short and scannable.

## HubSpot Pipeline Setup

- Use `demo-data/hubspot-pipeline.json` as the configuration reference for the demo (or production) HubSpot pipeline.
- 7 stages: New Inquiry → Callback Scheduled → Discovery Scheduled → Discovery Held → Quoted → Won → Closed Lost.
- 13 custom properties matching the pipeline JSON.
- Phase 2 + 3 add additional pipeline stages and properties; Phase 1 needs only the above.

## Phase Gating

- **Phase 1 workflows (W01, W02, W03, W05, W06, W07)** can run on production webhooks after presort-company sign-off.
- **Phase 2 workflows (W04, W08, W09)** are not part of this Phase 1 pack — see workflow `.md` manuals for spec.
- **Phase 3 workflows (W10)** require **written attorney sign-off** on B2B exemption applicability before deployment.

## Publishing Rules

- Demo workflows can be published only against demo accounts.
- Production SMS requires opt-in, unsubscribe language, sender registration (10DLC if applicable), quiet hours (9 AM-4:30 PM CT for outbound), and frequency caps.
- Telnyx STIR/SHAKEN attestation + CNAM registration + First Orion / Hiya submissions must complete before launching outbound voice (Phase 2/3).
- Do not connect production CRM, payment, or production-presort-stack systems until the presort company has approved routing rules.
