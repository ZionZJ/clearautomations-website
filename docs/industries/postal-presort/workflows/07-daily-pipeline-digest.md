# 07 - Daily Pipeline Digest

## Purpose

Cron daily 8 AM CT. Slim version of the weekly digest, focused on overnight inbound + today's queue + blockers. Owner reads in 30 seconds before starting the day.

## Tags

`demo`, `postal-presort`, `phase-1`, `reporting`

## Inputs

Use `../demo-data/daily-pipeline-snapshot.json`.

## n8n Steps

1. Import `07-daily-pipeline-digest.json`.
2. Pin the sample snapshot.
3. Execute manually.
4. Confirm the digest is short and scannable.
5. If moving to production, connect HubSpot pipeline-pull node and Resend template.

## Demo Notes

Daily digest distinguishes B2B service businesses from trades — postal presort sales cycles are slow enough that daily metrics are scannable; trades verticals would generate more noise than signal at daily cadence.
