# 02 - Missed Call New-Patient Callback - Non-PHI

## Purpose

Turns missed calls and voicemail snippets into a prioritized callback queue without asking clinical questions.

## Tags

`demo`, `dental`, `phase-1`, `non-phi`

## Inputs

Use `../demo-data/missed-call-leads.json` as pinned data or manual test input.

## n8n Steps

1. Import `02-missed-call-new-patient-callback-non-phi.json`.
2. Pin the sample missed-call array for the code node.
3. Execute manually.
4. Confirm new-patient language sorts above generic callback language.
5. If moving to production, connect this to the phone provider webhook and internal callback tasks.

## Demo Notes

The callback workflow is about response speed and office routing. It should not become patient intake unless the production BAA chain and data handling controls are complete.
