# 02 - Missed-Call Callback Queue

## Purpose

Phone-provider webhook turns missed calls and voicemail snippets into a prioritized callback queue. PI / family / immigration / criminal practices weight differently per firm config.

## Tags

`demo`, `legal-intake`, `phase-1`, `speed-to-lead`

## Inputs

Use `../demo-data/missed-call-leads.json`.

## n8n Steps

1. Import `02-missed-call-callback-queue.json`.
2. Configure case-type prioritization weights (PI > family > immigration > estate by default; firm-configurable).
3. Pin the sample missed-call array.
4. Execute manually.
5. Confirm priority-1 callbacks fire within 4 business hours of voicemail receipt.
6. If moving to production, connect Telnyx webhook + Vapi inbound trigger.

## Demo Notes

The 4-hour callback target is the SKU's promise. Per industry research, the firm that calls back first wins; faster than 4 hours is operationally tight for a solo or small firm without after-hours coverage.
