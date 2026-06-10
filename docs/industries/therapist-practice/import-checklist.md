# Import Checklist

Use this checklist after importing the therapist practice demo workflows.

## Before Import

- Confirm you are in the demo n8n area or project.
- Confirm workflow JSON files are coming from `docs/industries/therapist-practice/workflows/`.
- Confirm no JSON file contains real credentials.
- Confirm no JSON file contains real patient data.

## After Import

- Workflow names start with `DEMO - Therapist Practice -`.
- Every workflow is inactive after import.
- Tags are added:
  - `demo`
  - `therapist`
  - `phase-1` or simulated phase tag
  - `non-phi` where applicable
- Timezone is set to `America/Chicago`.
- Successful production execution saving is disabled where available.
- Manual execution data is redacted where available.
- Webhook URLs are copied into the manual only after confirming the final path.

## Functional Tests

- Run Workflow 01 with `demo-data/practice-audit-lead.json`.
- Run Workflow 01 with a bad test payload that contains the word `symptoms`; confirm it is rejected or flagged.
- Run Workflow 02 with `demo-data/callback-leads.json`.
- Run Workflow 03 with `demo-data/consults.json`.
- Run Workflow 04 with `demo-data/directory-profiles.json`.
- Run Workflow 05 with `demo-data/fake-intake-packet.json` only.
- Run Workflow 06 with `demo-data/fake-sessions-and-claims.json` only.
- Run Workflow 07 with `demo-data/dashboard-metrics.json`.

## Publishing Rules

- Phase 1 non-PHI workflows can be published after a manual test passes.
- Phase 2/3 simulated workflows stay inactive unless running a fake-data demo.
- Do not connect EHRs, payer portals, production Twilio, or production email to this demo pack.
