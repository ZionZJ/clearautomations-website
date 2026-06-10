# 06 - Weekly Owner Digest

## Purpose

Builds a weekly owner-facing summary of lead flow, booked jobs, stale estimates, review opportunities, and workflow failures.

## Tags

`demo`, `hvac`, `phase-1`, `reporting`

## Inputs

Use `../demo-data/dashboard-metrics.json` as pinned data or manual test input.

## n8n Steps

1. Import `06-weekly-owner-digest.json`.
2. Pin the sample metrics object.
3. Execute manually.
4. Confirm the digest includes booking rate, missed calls, stale estimates, review opportunities, and workflow failures.
5. If moving to production, connect CRM, phone, review, and workflow execution metrics.

## 90-Day ROI Report

Weekly digest metrics accumulate over 13 weeks into a 90-day ROI report: recovered-call count, booked-job value, and response-speed trend. Build it in from day one as the anti-month-3-churn lock. By the time a contractor wonders whether the system is worth it, the report already shows what it recovered.

## Demo Notes

The owner digest is the payoff screen: it tells the contractor what the system recovered and what still needs attention.
