# 09 - Retry Scheduler (Phase 2)

## Purpose

Re-queues no-answer outcomes from outbound calls (Variant B + Variant C). Respects business hours, contact preferences, and DNC. Maximum 3 retry attempts spread across 7 days.

## Tags

`demo`, `postal-presort`, `phase-2`, `retry`

## Inputs

Use `../demo-data/no-answer-outcomes.json`.

## n8n Steps

1. Import `09-retry-scheduler.json`.
2. Pin the sample no-answer records.
3. Execute manually.
4. Confirm next-attempt timestamps respect business hours + DNC + contact preferences.
5. If moving to production, connect HubSpot contact-update node and the dial-queue trigger for next-attempt scheduling.

## Demo Notes

Maximum 3 retry attempts. After 3 failures, contact moves to `closed-lost-no-response` with the option to re-engage via the ghosting workflow if business circumstances change.
