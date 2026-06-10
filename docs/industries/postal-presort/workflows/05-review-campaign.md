# 05 - Review Campaign

## Purpose

Triggered when a deal closes won + 7-day delay. Fires a staggered review-request sequence (D0 email, D3 SMS, D7 final email with review link). Honors opt-out flags.

## Tags

`demo`, `postal-presort`, `phase-1`, `reviews`

## Inputs

Use `../demo-data/closed-won-records.json`.

## n8n Steps

1. Import `05-review-campaign.json`.
2. Pin the sample closed-won payload.
3. Execute manually.
4. Confirm the 3-touch staggered sequence respects opt-out flags.
5. If moving to production, connect Google Business Profile review link, approved templates, and HubSpot opt-out flag check.

## Demo Notes

Filter on `customerSatisfaction = high` (captured at closing) before sending review request. Negative-signal closings route to manager follow-up first (`escalate-to-manager` action).
