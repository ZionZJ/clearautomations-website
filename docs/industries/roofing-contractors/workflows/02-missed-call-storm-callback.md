# 02 - Missed Storm Call Callback

## Purpose

Turns missed storm calls and voicemail snippets into a prioritized callback queue.

## Tags

`demo`, `roofing`, `storm-restoration`, `phase-1`, `speed-to-inspection`

## Inputs

Use `../demo-data/missed-storm-calls.json` as pinned data or manual test input.

## n8n Steps

1. Import `02-missed-call-storm-callback.json`.
2. Pin the sample missed-call array for the code node.
3. Execute manually.
4. Confirm leak, hail, and repeat-caller language sorts above lower urgency calls.
5. If moving to production, connect this to the phone provider webhook and CRM callback tasks.

## Demo Notes

A missed storm call is not treated as lost. It becomes a visible task with priority.
