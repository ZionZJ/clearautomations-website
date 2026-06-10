# 01 - Dental Practice Audit Intake - Non-PHI

## Purpose

Receives the dental-practice audit form payload, checks for obvious patient-specific content, and returns a demo lead record for internal follow-up.

## Tags

`demo`, `dental`, `phase-1`, `non-phi`

## Inputs

Use `../demo-data/practice-audit-lead.json`.

## n8n Steps

1. Import `01-dental-practice-audit-intake-non-phi.json`.
2. Keep inactive until the webhook path is confirmed.
3. Confirm webhook path is demo-only unless intentionally wiring the live website.
4. Execute manually with the sample lead payload.
5. Test a bad payload that includes `patient name` or `diagnosis`; confirm the workflow flags it.
6. If moving to production, replace the final response-only behavior with internal lead logging and a notification node.

## Demo Notes

This workflow is safe for Phase 1 because it avoids patient names, symptoms, diagnoses, treatment details, insurance IDs, appointment reasons, clinical notes, x-rays, and payment card data.
