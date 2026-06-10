# 06 - Estimate and Contract Follow-Up

## Purpose

Classifies open estimates and unsigned contracts so the office team knows what follow-up should happen next.

## Tags

`demo`, `roofing`, `storm-restoration`, `phase-3`, `estimates`

## Inputs

Use `../demo-data/estimate-records.json` as pinned data or manual test input.

## n8n Steps

1. Import `06-estimate-and-contract-follow-up.json`.
2. Pin the sample estimate records array.
3. Execute manually.
4. Confirm older estimates move into manager review and newer open estimates get follow-up.
5. If moving to production, connect approved email/SMS copy and CRM deal stages.

## Demo Notes

This workflow should surface stalled revenue without using pressure tactics.
