# 01 - Emergency Service Intake

## Purpose

Receives the plumbing service request payload (from the Retell post-call webhook or the website form), scores it on the 5-tier plumbing urgency taxonomy, and splits safety emergencies onto an immediate-human path. This is the load-bearing workflow: the safety branch is the liability and trust point of the whole build.

## Tags

`demo`, `plumbing`, `phase-1`, `speed-to-lead`

## Node Walkthrough

1. **Emergency Intake Webhook**: POST endpoint at `demo-plumbing-emergency-intake`. The only demo workflow with a live webhook trigger.
2. **Score Urgency (5-Tier Taxonomy)**: code node classifying the payload into one tier:
   - `safety-emergency`: gas smell, sewage backup, major flooding. Sets `safetyEmergency: true` and, for gas, `gasInvolved: true`.
   - `emergency`: burst pipe, no water, water heater failure. Immediate human callback.
   - `high`: active leak, partial outage. Fast callback.
   - `quote`: repipe, water heater replacement, sewer line, fixture. Stage 2 follow-up.
   - `routine`: drain cleaning, inspection, maintenance. Scheduled and nurture.
   Also stamps `voiceAgent: plumbing-bayou-city-intake` so the CRM record shows which agent handled intake.
3. **Safety Emergency?**: IF node on `safetyEmergency`. True branch is the human path; false branch is the standard path.
4. **Immediate Human Escalation**: marks the lead `never-ai-queue` with an on-call-human escalation note. Safety emergencies never sit in an AI queue.
5. **Standard Routing**: marks the lead for the AI-managed queue per the Dispatch Handoff Map.
6. **Return Routing Result**: responds to the webhook with the routed lead.

## Demo Steps

1. Import `01-emergency-service-intake.json`.
2. Keep inactive until the webhook path is confirmed; use Listen for Test Event for the demo.
3. POST each record from `../demo-data/emergency-service-requests.json` to the test webhook.
4. Confirm the gas-smell and sewage-backup records take the Immediate Human Escalation branch with `safetyEmergency: true`.
5. Confirm the gas record returns the leave-the-area / gas-utility / 911 escalation note.
6. Confirm burst pipe scores `emergency`, the repipe inquiry scores `quote`, and drain cleaning scores `routine`.

## Production Steps

1. Complete the compliance gate in `../setup-manual.md` first. A2P 10DLC registration is build step 1; nothing texts before it.
2. Point the Retell agent's post-call webhook at the production path.
3. Replace the response-only branches with: HubSpot deal creation in `New Lead` (with `urgency_tier`, `service_type`, `safety_emergency`), dispatcher callback task creation (under-2-minute target), and the on-call alert for the safety branch.
4. Wire escalation targets from the approved Dispatch Handoff Map before go-live.
5. QA the safety branch with live test calls before activating. The AI must never hold a gas, sewage, or flooding call.

## Demo Notes

This workflow routes urgency. It does not diagnose the problem, quote pricing, or promise dispatch windows. A missed plumbing call is worth $285 to $1,200, and emergency calls close at 12 to 16 percent, so routing speed is the whole game.
