# 08 - Weekly Practice Digest - Demo

## Purpose

Builds a weekly owner-facing summary of missed calls, no-shows, recall opportunities, treatment-plan follow-up, schedule gaps, review opportunities, and workflow failures.

## Tags

`demo`, `dental`, `fake-data`, `reporting`

## Inputs

Use `../demo-data/weekly-practice-metrics.json` as pinned data or manual test input.

## n8n Steps

1. Import `08-weekly-practice-digest-demo.json`.
2. Pin the sample metrics object.
3. Execute manually.
4. Confirm the digest includes callback rate, no-shows, recall, treatment plans, schedule gaps, reviews, and workflow failures.
5. Before production, connect approved reporting sources only after compliance review.

## Demo Notes

The owner digest is the payoff screen: it shows what the front desk workflow is catching and what still needs attention.
