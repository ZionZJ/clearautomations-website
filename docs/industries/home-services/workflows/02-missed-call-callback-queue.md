# 02 - Missed-Call Callback Queue

## Purpose

Phone-provider webhook turns missed calls and voicemail snippets into a prioritized callback queue. Same architecture as HVAC's W02; sub-vertical context comes from the contractor's pre-configured business profile.

## Tags

`demo`, `home-services`, `phase-1`, `speed-to-lead`

## Inputs

Use `../demo-data/missed-call-leads.json`.

## n8n Steps

1. Import `02-missed-call-callback-queue.json`.
2. Pin the sample missed-call array.
3. Execute manually.
4. Confirm urgency-keyword detection routes correctly (plumbing leak vs landscape consult).

## Production Steps

1. Connect the Telnyx phone webhook + Retell inbound trigger.
2. Missed-call text-back: send an SMS to the caller within seconds of the missed call ("Got your call, we'll be right with you. Reply here."). Gated on A2P 10DLC registration (nothing texts before it) and includes opt-out language.
3. Route callback tasks per the approved Dispatch Handoff Map (the contractor-approved urgency matrix + escalation paths add-on).

## Demo Notes

Same workflow as HVAC's W02: proven shape, reused intentionally. The demo JSON uses a manual trigger; the production steps above are not part of the demo run.
