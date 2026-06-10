# 04 - Ghosting Re-engagement (14-Day Multi-Channel)

## Purpose

When a deal sits in CRM stage for 3+ days without movement, fire a 14-day multi-channel re-engagement sequence: D3 email, D7 email, D10 SMS, D14 mark-stale.

## Tags

`demo`, `postal-presort`, `phase-2`, `re-engagement`

## Inputs

Use `../demo-data/stale-deal-records.json`.

## n8n Steps

1. Import `04-ghosting-reengagement.json`.
2. Pin the sample stale-deal records.
3. Execute manually.
4. Confirm the 4-touch sequence (3 messages + 1 mark-stale action).
5. If moving to production, connect HubSpot deal-stage-update node and approved Resend / Twilio templates.

## Demo Notes

The 14-day window is calibrated for B2B mailing-services sales cycles (30-90 days end-to-end). Shorter windows generate friction; longer windows lose recall.
