# 05 - Insurance Claim Follow-Up

## Purpose

Tracks claim stage and creates the next follow-up action for stalled claim records.

## Tags

`demo`, `roofing`, `storm-restoration`, `phase-2`, `claims`

## Inputs

Use `../demo-data/insurance-claim-records.json` as pinned data or manual test input.

## n8n Steps

1. Import `05-insurance-claim-follow-up.json`.
2. Pin the sample claim records array.
3. Execute manually.
4. Confirm missing adjuster appointment, missing estimate, and stale touches create different actions.
5. If moving to production, connect CRM claim stages and approved homeowner follow-up copy.

## Demo Notes

This workflow tracks status. It does not promise coverage, interpret policy language, or provide legal advice.
