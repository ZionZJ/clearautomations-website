# 08 - Weekly Storm Pipeline Digest

## Purpose

Builds a weekly owner-facing summary of storm leads, inspection booking, claim follow-up, open estimates, unsigned contracts, review opportunities, and workflow failures.

## Tags

`demo`, `roofing`, `storm-restoration`, `phase-1`, `reporting`

## Inputs

Use `../demo-data/storm-dashboard-metrics.json` as pinned data or manual test input.

## n8n Steps

1. Import `08-weekly-storm-pipeline-digest.json`.
2. Pin the sample metrics object.
3. Execute manually.
4. Confirm the digest includes inspection rate, missed calls, active claims, missing documents, estimates, contracts, reviews, and workflow failures.
5. If moving to production, connect CRM, phone, calendar, claim-stage, review, and workflow execution metrics.

## Demo Notes

The owner digest is the payoff screen: it shows what the storm system caught and what still needs attention.
