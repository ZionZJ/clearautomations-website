# 03 - Estimate Follow-Up (Phase 2)

## Purpose

Drives a 3-touch email + 1-touch SMS estimate-followup sequence with lost-reason tagging. Sub-vertical-agnostic; works for plumbing repair quotes, electrical panel upgrades, fence installs, tree-removal estimates, etc.

## Tags

`demo`, `home-services`, `phase-2`, `quotes`

## Inputs

Use `../demo-data/open-estimates.json`.

## n8n Steps

1. Import `03-estimate-follow-up.json` (the JSON ships in this pack at `workflows/03-estimate-follow-up.json`).
2. Configure email + SMS templates (sub-vertical-agnostic; can be customized per contractor).
3. Pin the sample estimate array from `../demo-data/open-estimates.json`.
4. Execute manually (the demo JSON uses a manual trigger).
5. Confirm the cadence step fires by quote age (D3 / D7 / D14), lost records get `tag-lost-reason`, and lost-reason tagging writes back to HubSpot in production.

## Demo Notes

Lost-reason enum: price / timing / competitor / no-response / scope. Same enum as HVAC W03.

High-ticket estimates ($7,500 or more) set `financeReminderEligible: true`, which adds contractor-approved financing reminder copy to the follow-up touch. Phase 2 gating applies to production rollout, not import: the workflow imports now and launches after Phase 1 stabilizes (2+ weeks live).
