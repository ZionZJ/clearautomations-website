# Import Checklist

Use this checklist after importing the HVAC contractor demo workflows.

## Compliance Gate (Before Anything Texts)

Confirm every item below before any SMS node goes live.

- A2P 10DLC registration with The Campaign Registry is complete. This is mandatory build step 1, not optional. Carriers block 100% of unregistered traffic, and even one automated text requires registration.
- The client's privacy policy explicitly states that SMS opt-in data is not shared with third parties. A missing statement is the number 1 cause of contractor 10DLC application rejections.
- FCC one-to-one consent is respected: consent is not shared across brands or bought as leads, and no purchased or shared lead lists enter any SMS flow.

## Before Import

- Confirm you are in the demo n8n area or project.
- Confirm workflow JSON files are coming from `docs/industries/hvac-contractors/workflows/`.
- Confirm no JSON file contains real credentials.
- Confirm no JSON file contains real customer data.

## After Import

- Workflow names start with `DEMO - HVAC Contractors -`.
- Every workflow is inactive after import.
- Tags are added:
  - `demo`
  - `hvac`
  - `home-services`
  - `phase-1`
  - workflow-specific tags such as `speed-to-lead`, `reviews`, or `retention`
- Timezone is set to `America/Chicago`.
- Successful production execution saving is disabled where available.
- Webhook URLs are copied into the manual only after confirming the final path.

## Functional Tests

- Run Workflow 01 with `demo-data/emergency-service-request.json`.
- Run Workflow 02 with `demo-data/missed-call-leads.json`.
- Run Workflow 03 with `demo-data/estimate-requests.json`.
- Run Workflow 04 with `demo-data/completed-jobs-for-review.json`.
- Run Workflow 05 with `demo-data/maintenance-memberships.json`.
- Run Workflow 06 with `demo-data/dashboard-metrics.json`.
- Voice agent: AI self-identifies at call open per `retell-script.md` call flow step 1.

## Publishing Rules

- Demo workflows can be published only against demo accounts.
- Production SMS requires opt-in, unsubscribe language, quiet hours, and frequency caps. STOP and informal opt-outs (any reasonable method) are honored within 10 business days.
- Do not connect production dispatch, payment, or customer-list systems until the client has approved routing rules.
