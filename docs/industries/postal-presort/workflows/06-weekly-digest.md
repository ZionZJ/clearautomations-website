# 06 - Weekly Owner Digest

## Purpose

Cron Monday 8 AM CT. Aggregates the week's pipeline metrics into an owner-facing summary email: callback hit rate, scheduled discovery calls, stale deals, review pulse, workflow failures.

## Tags

`demo`, `postal-presort`, `phase-1`, `reporting`

## Inputs

Use `../demo-data/weekly-digest-metrics.json`.

## n8n Steps

1. Import `06-weekly-digest.json`.
2. Pin the sample metrics object.
3. Execute manually.
4. Confirm the digest formats correctly across email clients.
5. If moving to production, connect HubSpot pipeline-pull node, Vapi call-volume metrics, and Resend template.

## Demo Notes

The digest is the payoff screen for the SKU: it shows the owner what the funnel caught last week and what still needs attention.
