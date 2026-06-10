# 01 - Storm Damage Intake

## Purpose

Receives the roofing storm damage payload, scores urgency, and returns the recommended callback or inspection path.

## Tags

`demo`, `roofing`, `storm-restoration`, `phase-1`, `speed-to-inspection`

## Inputs

Use `../demo-data/storm-damage-lead.json`.

## n8n Steps

1. Import `01-storm-damage-intake.json`.
2. Keep inactive until the webhook path is confirmed.
3. Execute with the sample storm damage payload.
4. Confirm hail, missing shingles, active leak, and photo readiness affect routing.
5. If moving to production, replace response-only behavior with CRM task creation and inspection scheduling.

## Demo Notes

This workflow routes storm leads. It does not diagnose roof damage, quote pricing, or promise claim outcomes.
