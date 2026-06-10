# 05 - Past-Customer Reactivation

## Purpose

Segments past customers by water heater age and drain-service cadence for reactivation campaigns, behind a hard consent gate. This is the highest TCPA-risk workflow in the pack, so the opt-in gate runs before any segmentation logic.

## Tags

`demo`, `plumbing`, `phase-3`, `retention`

## Node Walkthrough

1. **Manual Demo Trigger**: demo-only trigger. The production target path is `demo-plumbing-reactivation`.
2. **Segment Past Customers (Opt-In Gate)**: code node that, per past customer:
   - **Hard gate first**: any record without `optInSource` is excluded immediately and counted. No segment, no message, no exceptions. The run output ends with a summary row reporting `eligibleCount` and `skippedNoOptIn`.
   - Water heaters at 8 plus years segment to `water-heater-replacement-watch` (the aging check-in campaign).
   - Drain customers at 12 plus months since last service segment to `drain-service-due`.
   - Everyone else gets `no-campaign-this-cycle`.

## Demo Steps

1. Import `05-past-customer-reactivation.json`.
2. Pin `../demo-data/past-customers.json` on the code node.
3. Execute manually.
4. Confirm the records missing `optInSource` are absent from the output and the summary row shows the skipped count.
5. Confirm the 11-year water heater lands in `water-heater-replacement-watch` and the 14-month drain customer lands in `drain-service-due`.

## Production Steps

1. Complete the compliance gate in `../setup-manual.md`. Reactivation is outbound messaging to past customers and is fully 10DLC-gated.
2. Source `optInSource` from real consent records only: service-request forms, inbound calls, and post-job surveys belonging to this contractor. FCC one-to-one consent means consent cannot be shared across brands or bought as leads. Purchased or shared lists never enter this flow.
3. Pull the customer list from the contractor-owned CRM or field-service platform export.
4. Send only contractor-approved campaign copy with opt-out language on every message. Honor STOP and informal opt-outs within 10 business days; suppression propagates to every other workflow.
5. Respect quiet hours and a strict frequency cap (suggested: one reactivation touch per customer per quarter).
6. Report campaign results (sent, skipped, booked) into the weekly owner digest.

## Demo Notes

The skipped count is a feature, not a failure. Showing the prospect that records without consent are excluded by the workflow itself is part of the TCPA-aware sales position.
