# 07 - Demo Dashboard Digest

## Purpose

Aggregates fake demo metrics into a daily summary that can be shown during sales calls.

## Tags

`demo`, `therapist`

## Inputs

Use `../demo-data/dashboard-metrics.json`.

## n8n Steps

1. Import `07-demo-dashboard-digest.json`.
2. Execute manually with the fake dashboard metrics.
3. Review the generated summary.
4. Confirm the digest distinguishes live Phase 1 metrics from simulated Phase 2/3 roadmap metrics.
5. If connecting to email or Slack later, use demo-only credentials.
6. Do not send simulated metrics to a client as real results.

## Demo Notes

This workflow helps package the demo into an executive view: lead response, consult outcomes, directory tasks, and fake advanced workflow value.
