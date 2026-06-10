# 04 - Hygiene Recall Reactivation - Demo

## Purpose

Segments fake hygiene recall records by overdue window and contact readiness.

## Tags

`demo`, `dental`, `fake-data`, `recall-demo`

## Inputs

Use `../demo-data/hygiene-recall-records.json` as pinned data or manual test input.

## n8n Steps

1. Import `04-hygiene-recall-reactivation-demo.json`.
2. Pin the sample recall array.
3. Execute manually.
4. Confirm highly overdue records get higher priority.
5. Before production, complete BAA, vendor, access, retention, opt-in, and approved-copy review.

## Demo Notes

This is fake-data only. Do not connect real recall lists until production controls are approved.
