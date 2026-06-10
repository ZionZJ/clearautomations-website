# 01 - Conflict-Cleared Intake (THE ARCHITECTURAL MOAT)

## Purpose

After Vapi script collects minimum information (name, callback, state, case-type bucket, opposing parties), this workflow calls the firm's CMS conflict-check API. If clear, routes to the intake coordinator queue with full transcript. If conflict, logs declination and ends with a polite decline email.

## Tags

`demo`, `legal-intake`, `phase-1`, `conflict-gate`, `aba-1.18`

## Inputs

Use `../demo-data/conflict-check-input.json`.

## n8n Steps

1. Import `01-conflict-cleared-intake.json`.
2. Configure CMS conflict-check API credentials (Clio default; alternate per firm).
3. Pin the sample input.
4. Execute manually with both a clear-scenario payload and a conflict-scenario payload.
5. Confirm clear-scenario routes to `conflict-cleared` CRM stage.
6. Confirm conflict-scenario routes to `closed-conflict-declined` and sends polite decline email.
7. **Production prerequisites:** attorney sign-off on Vapi script + conflict-check API tested with both scenarios.

## Critical-path notes

- This is the architectural moat of the SKU. Generic AI intake bots collect fact pattern before this gate fires; they create ABA Rule 1.18 exposure.
- The conflict-check input is the **minimum** for a meaningful check: caller name, opposing-party names (when known), state, case-type bucket. More than this risks Rule 1.18 violation if the firm has to decline due to conflict.
- If the firm's CMS has no API integration available (or firm runs on a spreadsheet), the manual-fallback path emails the intake coordinator with the collected fields. Slower but compliant.

## Demo Notes

Test with at least 5 conflict scenarios per firm before going live. Common conflict patterns: existing client = caller, existing client = opposing party, declined-matter records, declined-prospective-client records.
