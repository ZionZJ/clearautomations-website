# 06 - Schedule Gap Fill - Demo

## Purpose

Matches fake near-term schedule openings with eligible fake recall or treatment-plan contacts.

## Tags

`demo`, `dental`, `fake-data`, `schedule-gap-demo`

## Inputs

Use `../demo-data/schedule-gaps.json` as pinned data or manual test input.

## n8n Steps

1. Import `06-schedule-gap-fill-demo.json`.
2. Pin the sample schedule-gap payload.
3. Execute manually.
4. Confirm hygiene and restorative gaps match eligible fake contacts.
5. Before production, complete BAA, vendor, access, retention, opt-in, and approved-copy review.

## Demo Notes

This is fake-data only. Do not connect live schedules or patient lists until production controls are approved.
