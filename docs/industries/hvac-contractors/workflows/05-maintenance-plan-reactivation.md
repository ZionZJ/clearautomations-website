# 05 - Maintenance Plan Reactivation

## Purpose

Segments maintenance members and old tune-up customers for renewal or seasonal reactivation.

## Tags

`demo`, `hvac`, `phase-3`, `retention`

## Inputs

Use `../demo-data/maintenance-memberships.json` as pinned data or manual test input.

## n8n Steps

1. Import `05-maintenance-plan-reactivation.json`.
2. Pin the sample maintenance-member array.
3. Execute manually.
4. Confirm expired plans with an `optInSource` get a renewal action.
5. Confirm records without `optInSource` are excluded from sends and counted in the `skippedNoConsent` summary. This is a hard gate: FCC one-to-one consent means no purchased or shared lists, only customers who contacted this contractor directly.
6. If moving to production, connect approved renewal copy and CRM/customer-list exports.
7. In production, honor STOP and informal opt-outs (email, voicemail, "stop texting me") within 10 business days, respect quiet hours, and enforce frequency caps. This is the highest TCPA-risk workflow in the pack because it texts past customers.

## Demo Notes

This flow is low drama but high payoff: HVAC revenue gets smoother when tune-up and plan renewals are not memory-based.
