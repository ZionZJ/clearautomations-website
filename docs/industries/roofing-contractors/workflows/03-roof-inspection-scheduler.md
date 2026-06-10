# 03 - Roof Inspection Scheduler

## Purpose

Routes qualified storm leads into available inspection slots or a dispatcher callback task.

## Tags

`demo`, `roofing`, `storm-restoration`, `phase-1`, `speed-to-inspection`

## Inputs

Use `../demo-data/inspection-slots.json` as pinned data or manual test input.

## n8n Steps

1. Import `03-roof-inspection-scheduler.json`.
2. Pin the sample lead and slot payload.
3. Execute manually.
4. Confirm a preferred afternoon window matches an afternoon slot.
5. If moving to production, connect this to the approved calendar or dispatcher queue.

## Demo Notes

This workflow can suggest or route an inspection slot. It should not promise availability unless the contractor approves the rule.
