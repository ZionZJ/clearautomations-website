# 02 - Missed Call Callback Queue

## Purpose

Turns missed calls and voicemail snippets into a priority-sorted callback queue with after-hours and weekend weighting. This is the plumbing money story: 85 percent of voicemail callers never call back, the after-hours emergency caller books whoever answers first, and each missed call is worth $285 to $1,200.

## Tags

`demo`, `plumbing`, `phase-1`, `speed-to-lead`

## Node Walkthrough

1. **Manual Demo Trigger**: demo-only trigger. The production target path is `demo-plumbing-missed-call` (see `../setup-manual.md`).
2. **Prioritize Missed Calls**: code node scoring each missed call:
   - After-hours detection on the ISO timestamp with the uppercase-T regex `/T(17|18|19|20|21|22|23):/` (plus 1).
   - Weekend weighting from the local date portion of the timestamp (plus 1).
   - Safety phrases (gas, sewage, flooding) force `queue: human-now` (plus 5).
   - Emergency phrases (burst pipe, no water, water heater) add 3; repeat callers add 1.
   - Output sorts by `priorityScore`, queued as `human-now`, `call-now`, or `next-business-block`.

## Demo Steps

1. Import `02-missed-call-callback-queue.json`.
2. Pin `../demo-data/missed-call-leads.json` on the code node.
3. Execute manually.
4. Confirm the Sunday evening sewage voicemail sorts to the top in `human-now` (safety plus after-hours plus weekend weights).
5. Confirm the Saturday 2am burst pipe and the Tuesday evening water heater leak land in `call-now`, above every quote call.
6. Confirm the weekday business-hours tankless quote sorts to `next-business-block`.

## Production Steps

1. Complete the compliance gate in `../setup-manual.md`. A2P 10DLC registration with The Campaign Registry is build step 1; the privacy policy must state SMS opt-in data is not shared with third parties.
2. Replace the manual trigger with the phone-provider missed-call webhook (Twilio or Telnyx) at the production path.
3. **Missed-call text-back**: add an SMS node that texts the caller within seconds ("Got your call, we'll be right with you. Reply here."). This step is 10DLC-gated: it stays disabled until registration is approved, and every message carries opt-out language ("Reply STOP to opt out"). Inbound callers are consent-clean because they called the business, but the opt-out catch must also honor informal opt-outs (email, voicemail, spoken) within 10 business days.
4. Create the dispatcher callback task in HubSpot with the under-2-minute target.
5. Route `human-now` and `call-now` items per the approved **Dispatch Handoff Map** (the add-on that documents when automation routes to dispatcher, owner, or on-call plumber).
6. Respect quiet hours: queue, do not send, text-backs that would land outside the approved window.

## Demo Notes

A missed 2am burst-pipe call should become an immediate task, not a voicemail tomb. The queue exists so the highest-value call is always at the top when a human picks up the list.
