# 02 - Post-Call Processing (5-Way Branch)

## Purpose

Receives the Vapi end-of-call webhook, parses transcript, writes contact note + outcome to HubSpot, and branches into one of five outcome paths.

## Tags

`demo`, `postal-presort`, `phase-1`, `branching`

## Inputs

Use `../demo-data/vapi-end-of-call-payload.json`.

## n8n Steps

1. Import `02-post-call-processing.json`.
2. Pin the sample Vapi payload.
3. Execute manually.
4. Confirm the branching produces the expected outcome label (qualified / no-answer / not-interested / email-only / DNC).
5. If moving to production, connect the HubSpot contact-update node and the downstream outcome-specific workflows.

## Five-way branch outcomes

- **qualified** → CRM stage = "discovery-scheduled"; calendar invite sent
- **no-answer** → retry scheduler queues for next business day
- **not-interested** → CRM stage = "closed-lost-not-interested"; reason captured
- **email-only** → trigger 3-touch email sequence (W03)
- **DNC** → block number in Vapi + flag in HubSpot

## Demo Notes

The 5-way branching is more granular than the industry-standard 3-way (qualified / no-answer / not-interested). Captures email-only and DNC as distinct paths because they drive different downstream workflows.
