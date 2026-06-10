# 01 - Inbound Form Callback (with SMS Warm-Up)

## Purpose

Receives the inbound form payload, fires SMS warm-up confirmation, and triggers AI callback 30-45 seconds later. Targets the industry's typical 2-minute response window.

## Tags

`demo`, `postal-presort`, `phase-1`, `speed-to-lead`

## Inputs

Use `../demo-data/inbound-form-lead.json`.

## n8n Steps

1. Import `01-inbound-form-callback.json`.
2. Keep inactive until the webhook path is confirmed.
3. Execute with the sample inbound payload.
4. Confirm SMS warm-up fires within 5 seconds and Vapi callback fires within 30-45 seconds.
5. If moving to production, replace response-only behavior with HubSpot contact creation, Vapi inbound trigger, and post-call processing webhook.

## Demo Notes

This workflow is the highest-leverage Phase 1 component. The 30-45 second target is materially faster than the industry-standard 2-minute response and is the primary feature differentiation.
