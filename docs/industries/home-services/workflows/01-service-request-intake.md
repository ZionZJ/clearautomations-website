# 01 - Service Request Intake (Sub-Vertical-Aware)

## Purpose

Receives the home-services audit form payload, scores urgency by sub-vertical (plumbing emergency vs landscape consultation), and returns the recommended callback path.

## Tags

`demo`, `home-services`, `phase-1`, `speed-to-lead`, plus sub-vertical-specific tag

## Inputs

Use `../demo-data/service-request-leads.json`.

## n8n Steps

1. Import `01-service-request-intake.json`.
2. Configure sub-vertical-specific urgency-scoring rules (plumbing leak = emergency; landscape design = scheduled).
3. Pin the sample payload.
4. Execute manually with multiple sub-vertical scenarios.
5. Confirm urgency scoring respects sub-vertical context.

## Production Steps

1. Connect the form webhook to the production intake path and the contractor-owned HubSpot pipeline.
2. Route callback tasks per the approved Dispatch Handoff Map (the contractor-approved urgency matrix + escalation paths add-on). Target: callback task in under 2 minutes.

## Demo Notes

The sub-vertical-aware urgency scoring is the core productization win. One n8n workflow handles 10 sub-verticals with parameter-driven branching.
