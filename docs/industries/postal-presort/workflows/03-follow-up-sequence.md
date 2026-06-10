# 03 - Follow-Up Email Sequence

## Purpose

3-touch email follow-up triggered when post-call branching outputs `email-only` or `no-answer` outcomes. Lost-reason tagging on no-response.

## Tags

`demo`, `postal-presort`, `phase-1`, `email-sequence`

## Inputs

Use `../demo-data/email-sequence-trigger.json`.

## n8n Steps

1. Import `03-follow-up-sequence.json`.
2. Configure email-sequence cadence (D0 immediate, D2 reminder, D5 final).
3. Pin the sample trigger payload.
4. Execute manually.
5. Confirm 3 emails fire on schedule.
6. If moving to production, connect approved Resend templates and HubSpot contact-update node for lost-reason tagging.

## Demo Notes

Email copy is parameterized by the outcome reason. Lost-reason enum: price / timing / vendor-changing / no-response / other.
