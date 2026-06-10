# 06 - Weekly Owner Digest

## Purpose

Aggregates the week's pipeline metrics into an owner-facing summary email: lead count by sub-vertical urgency, callback hit rate, estimate pulse, review pulse, recurring-reactivation activity (if applicable), workflow failures.

Production step: schedule via Cron, Monday 8 AM in the contractor's local timezone. The demo JSON uses a manual trigger.

## Tags

`demo`, `home-services`, `phase-1`, `reporting`

## Inputs

Use `../demo-data/weekly-metrics.json`.

## n8n Steps

1. Import `06-weekly-owner-digest.json`.
2. Pin the sample metrics object.
3. Execute manually.
4. Confirm digest formats correctly + skips recurring-reactivation section for non-pest/non-landscape sub-verticals.
5. If moving to production, connect HubSpot pipeline pull + Retell voice-agent metrics + Resend template, and schedule the Cron trigger (Monday 8 AM, contractor's local timezone).

## 90-Day ROI Report

A 13-week rollup of the weekly digests, built in from day one as the anti-month-3-churn lock. The weekly digest answers "what happened this week"; the 90-day report answers "what has this system paid for."

Contents:

- Recovered-call count: missed calls captured by the AI that became booked jobs across the 13 weeks.
- Booked-job value: total dollar value of jobs traced to workflow-captured leads.
- Response-speed trend: week-over-week callback-time trend against the under-2-minute target.

Build it from day one so the data exists at the day-90 review; do not wait until month 3 to start collecting.

## Demo Notes

The digest is the payoff screen for the SKU. Sub-vertical-aware sections appear only when relevant (e.g., recurring service block for pest/landscape only).
