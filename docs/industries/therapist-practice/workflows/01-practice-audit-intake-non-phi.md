# 01 - Practice Audit Intake - Non-PHI

## Purpose

Receives the therapist-practice audit form payload, checks for obvious patient-specific content, and returns a demo lead record for internal follow-up.

## Tags

`demo`, `therapist`, `phase-1`, `non-phi`

## Inputs

Use `../demo-data/practice-audit-lead.json`.

Allowed fields:

- `practiceName`
- `contactName`
- `workEmail`
- `workPhone`
- `website`
- `providerCount`
- `ehrTools`
- `adminPain`
- `monthlyVolume`
- `phiAcknowledgement`

## n8n Steps

1. Import `01-practice-audit-intake-non-phi.json`.
2. Keep inactive until the webhook path is confirmed.
3. Confirm webhook path is demo-only unless intentionally wiring the live website.
4. Execute manually with the sample lead payload.
5. Test a bad payload that includes `symptoms` or `diagnosis`; confirm the workflow flags it.
6. If moving to production, replace the final response-only behavior with internal lead logging and a notification node.

## Demo Notes

This workflow is safe for Phase 1 because it avoids patient names, symptoms, insurance details, appointment reasons, and clinical notes.
