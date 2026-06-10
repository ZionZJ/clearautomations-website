# 01 - Emergency Service Intake

## Purpose

Receives the HVAC service request payload, scores urgency, and returns the recommended callback path.

## Tags

`demo`, `hvac`, `phase-1`, `speed-to-lead`

## Inputs

Use `../demo-data/emergency-service-request.json`.

## n8n Steps

1. Import `01-emergency-service-intake.json`.
2. Keep inactive until the webhook path is confirmed.
3. Execute with the sample emergency payload.
4. Confirm no-cool and vulnerable-occupant language produces `urgent-callback`.
5. If moving to production, replace the response-only behavior with CRM task creation and dispatcher notification.
6. In production, callback and dispatcher routing follow the contractor-approved Dispatch Handoff Map, a paid add-on scoped in the Assessment.

## Demo Notes

This workflow routes urgency. It does not diagnose the system, quote pricing, or promise technician availability.
