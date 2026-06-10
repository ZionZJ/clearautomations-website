# 05 - Recurring Service Reactivation (Phase 3, Pest + Landscape ONLY)

## Purpose

For pest control + landscape sub-verticals only: when a customer's last-service date crosses the recurring interval (quarterly pest, monthly landscape), an opt-in-gated reactivation message fires.

## Tags

`demo`, `home-services`, `phase-3`, `retention`, `pest-or-landscape-only`

## Inputs

Use `../demo-data/recurring-customers.json`.

## n8n Steps

1. Import `05-recurring-service-reactivation.json` (the JSON ships in this pack at `workflows/05-recurring-service-reactivation.json`).
2. **DO NOT enable for sub-verticals other than pest control + landscape.** Other sub-verticals get a "not applicable" note in the dashboard.
3. Configure recurring cadence:
   - Pest control: quarterly (90-day reactivation trigger)
   - Landscape: monthly seasonal (varies by climate; Mar-Nov in TX, year-round in subtropical climates)
4. Pin the sample customer array from `../demo-data/recurring-customers.json`.
5. Execute manually (the demo JSON uses a manual trigger).
6. Confirm the opt-in-source gate: records without `optInSource` come back as `skipped-no-opt-in` and the summary record reports the `skippedNoOptIn` count.

## Demo Notes

Opt-in source is a hard requirement (TCPA W05 compliance, same pattern as HVAC W05). Without `optInSource`, the workflow refuses to send the reactivation message: those records are excluded from the send list, marked `skipped-no-opt-in`, and counted in the run summary.

For other sub-verticals (plumbing, electrical, garage doors, fence/deck, tree service, junk removal, painting, pressure washing), this workflow remains `active: false` and the dashboard surfaces "Recurring service reactivation not applicable for [sub-vertical]."
