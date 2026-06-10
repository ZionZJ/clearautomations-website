# 02 - Missed Call Callback Queue

## Purpose

Turns missed calls and voicemail snippets into a prioritized callback queue.

## Tags

`demo`, `hvac`, `phase-1`, `speed-to-lead`

## Inputs

Use `../demo-data/missed-call-leads.json` as pinned data or manual test input.

## n8n Steps

1. Import `02-missed-call-callback-queue.json`.
2. Pin the sample missed-call array for the code node.
3. Execute manually.
4. Confirm emergency and after-hours calls sort above quote-only calls.
5. If moving to production, connect this to the phone provider webhook and CRM task creation.
6. In production, add the missed-call text-back: an SMS to the caller within seconds of an unanswered call ("Got your call, we'll be right with you, reply here"). This send is gated behind completed A2P 10DLC registration and includes opt-out language.
7. In production, callback routing follows the contractor-approved Dispatch Handoff Map, a paid add-on scoped in the Assessment.

## Demo Notes

This workflow is the clearest Texas HVAC pain story: a missed AC call should become an immediate task, not a voicemail tomb.
