# Import Checklist

Use this checklist after importing the dental practice demo workflows.

## Before Import

- Confirm you are in the demo n8n area or project.
- Confirm workflow JSON files are coming from `docs/industries/dental-practices/workflows/`.
- Confirm no JSON file contains real credentials.
- Confirm no JSON file contains real patient data.

## After Import

- Workflow names start with `DEMO - Dental Practices -`.
- Every workflow is inactive after import.
- Tags are added:
  - `demo`
  - `dental`
  - `phase-1` or fake-data demo tag
  - `non-phi` where applicable
- Timezone is set to `America/Chicago`.
- Successful production execution saving is disabled where available.
- Webhook URLs are copied into the manual only after confirming the final path.

## Functional Tests

- Run Workflow 01 with `demo-data/practice-audit-lead.json`.
- Run Workflow 01 with a bad test payload that contains the phrase `patient name`; confirm it is rejected or flagged.
- Run Workflow 02 with `demo-data/missed-call-leads.json`.
- Run Workflow 03 with `demo-data/appointment-recovery-records.json`.
- Run Workflow 04 with `demo-data/hygiene-recall-records.json`.
- Run Workflow 05 with `demo-data/treatment-plan-records.json`.
- Run Workflow 06 with `demo-data/schedule-gaps.json`.
- Run Workflow 07 with `demo-data/completed-visits-for-review.json`.
- Run Workflow 08 with `demo-data/weekly-practice-metrics.json`.

## Publishing Rules

- Phase 1 non-PHI workflows can be published after a manual test passes.
- Fake-data simulation workflows stay inactive unless running a fake-data demo.
- Do not connect a PMS, payer portal, production reminder tool, real patient list, or production phone/SMS account to this demo pack.
