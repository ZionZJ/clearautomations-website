# 08 - Weekly Firm Digest

## Purpose

Cron Monday 8 AM (firm timezone). Aggregates the week's funnel metrics: inbound count, conflict-clearance rate, callback-SLA hit, conversion-to-engagement, review pulse, SOL warnings (Phase 3).

## Tags

`demo`, `legal-intake`, `phase-1`, `reporting`

## Inputs

Use `../demo-data/weekly-firm-metrics.json`.

## n8n Steps

1. Import `08-weekly-firm-digest.json`.
2. Pin the sample metrics object.
3. Execute manually.
4. Confirm digest formats correctly + includes SOL warnings if Phase 3 active.
5. If moving to production, connect HubSpot pipeline pull + CMS metrics + Resend template.

## Demo Notes

The digest is the firm-management view: managing partner reads in 60 seconds Monday morning, knows where the week stands. No prospective-client information appears in the digest — only aggregate metrics.
