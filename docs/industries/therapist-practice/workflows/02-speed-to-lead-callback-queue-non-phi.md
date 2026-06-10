# 02 - Speed-to-Lead Callback Queue - Non-PHI

## Purpose

Turns accepted business inquiries into callback tasks. The workflow demonstrates speed-to-lead without asking clinical intake questions.

## Tags

`demo`, `therapist`, `phase-1`, `non-phi`

## Inputs

Use `../demo-data/callback-leads.json`.

## n8n Steps

1. Import `02-speed-to-lead-callback-queue-non-phi.json`.
2. Keep inactive until the demo data is reviewed.
3. Execute manually to generate callback tasks.
4. Review the priority and callback script fields.
5. Confirm the script does not ask for symptoms, diagnosis, appointment reason, insurance member ID, or clinical notes.
6. If connecting to Twilio later, use demo credentials first and keep scripts generic.

## Demo Notes

The callback workflow is about contact speed and scheduling readiness. It should never become patient intake unless the production BAA chain and data handling controls are complete.
