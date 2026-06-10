# 03 - Cancellation and No-Show Recovery - Demo

## Purpose

Classifies fake appointment records so no-shows and late cancellations get the right operational follow-up.

## Tags

`demo`, `dental`, `fake-data`, `no-show-demo`

## Inputs

Use `../demo-data/appointment-recovery-records.json` as pinned data or manual test input.

## n8n Steps

1. Import `03-cancellation-and-no-show-recovery-demo.json`.
2. Pin the sample appointment recovery array.
3. Execute manually.
4. Confirm no-shows and late cancellations get different next actions.
5. Before production, complete BAA, vendor, access, retention, opt-in, and approved-copy review.

## Demo Notes

This is fake-data only. Do not connect real appointment records until production controls are approved.
