# 08 - Outbound Dial Queue (Phase 2)

## Purpose

Cron daily 7 AM CT. Builds a Tier 1 (past inquiries 30+ days) + Tier 2 (proximity leads) outbound dial queue. Fires SMS warm-up 30-45 seconds before each call. Caps at 60-80 calls per day.

## Tags

`demo`, `postal-presort`, `phase-2`, `warm-outbound`

## Inputs

Use `../demo-data/outbound-dial-targets.json`.

## n8n Steps

1. Import `08-outbound-dial-queue.json`.
2. Pin the sample targets.
3. Execute manually.
4. Confirm Tier 1 + Tier 2 sorting and the 60-80 day cap.
5. If moving to production, connect HubSpot contact-pull node, Twilio 10DLC SMS, and Vapi outbound-warm trigger.

## Demo Notes

Variant B (outbound warm) of the Vapi script handles these calls. Calling-hours enforcement (9 AM-4:30 PM CT) is set at the Vapi config level, not the workflow level.
