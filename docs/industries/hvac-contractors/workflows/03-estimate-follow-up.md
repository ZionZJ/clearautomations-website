# 03 - Estimate Follow-Up

## Purpose

Classifies stale estimates and recommends the next follow-up action.

## Tags

`demo`, `hvac`, `phase-2`, `quotes`

## Inputs

Use `../demo-data/estimate-requests.json` as pinned data or manual test input.

## n8n Steps

1. Import `03-estimate-follow-up.json`.
2. Pin the sample estimate array.
3. Execute manually.
4. Confirm older or high-value estimates get an active follow-up action.
5. Confirm each row emits `lostReason` and `financeReminderEligible` (see Output Fields below).
6. If moving to production, connect CRM deal stages and approved email/SMS templates.

## Output Fields

- `lostReason`: one of `price`, `timing`, `competitor`, `no-response`, `scope`, or `null`. A CRM-tagged reason passes through when it matches the enum. Stale estimates (14+ days, manager-review cadence) without a tagged reason default to `no-response`; fresher estimates default to `null`. This feeds the owner report so lost quotes stop being anecdotal.
- `financeReminderEligible`: `true` when `estimateValue` is 7500 or more. High-ticket replacement quotes get contractor-approved financing-option reminder copy in the follow-up sequence.

## Demo Notes

This workflow should make replacement quote leakage visible without pretending the system can close the sale alone.
