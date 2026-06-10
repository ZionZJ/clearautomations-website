# Import Checklist

Use this checklist after importing the roofing contractor demo workflows.

## Before Import

- Confirm you are in the demo n8n area or project.
- Confirm workflow JSON files are coming from `docs/industries/roofing-contractors/workflows/`.
- Confirm no JSON file contains real credentials.
- Confirm no JSON file contains real homeowner, claim, adjuster, payment, or access data.

## After Import

- Workflow names start with `DEMO - Roofing Contractors -`.
- Every workflow is inactive after import.
- Tags are added:
  - `demo`
  - `roofing`
  - `storm-restoration`
  - `phase-1`
  - workflow-specific tags such as `speed-to-inspection`, `claims`, or `reviews`
- Timezone is set to `America/Chicago`.
- Successful production execution saving is disabled where available.
- Webhook URLs are copied into the manual only after confirming the final path.

## Functional Tests

- Run Workflow 01 with `demo-data/storm-damage-lead.json`.
- Run Workflow 02 with `demo-data/missed-storm-calls.json`.
- Run Workflow 03 with `demo-data/inspection-slots.json`.
- Run Workflow 04 with `demo-data/photo-document-checklist.json`.
- Run Workflow 05 with `demo-data/insurance-claim-records.json`.
- Run Workflow 06 with `demo-data/estimate-records.json`.
- Run Workflow 07 with `demo-data/completed-roofing-jobs.json`.
- Run Workflow 08 with `demo-data/storm-dashboard-metrics.json`.

## Publishing Rules

- Demo workflows can be published only against demo accounts.
- Production SMS requires opt-in, unsubscribe language, quiet hours, and frequency caps.
- Do not connect production CRM, calendar, phone, photo storage, claim files, or homeowner lists until the client has approved routing rules.
