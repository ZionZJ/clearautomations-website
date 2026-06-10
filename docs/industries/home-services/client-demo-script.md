# Client Demo Script

Use this script to show a home-services prospect the demo. Default sub-vertical is plumbing; swap for the prospect's sub-vertical when delivering.

## Opening

"This is a fictional plumber demo, Lone Star Drain & Pipe Co. It uses fake data only. The point is to show how a sub-vertical-aware lead funnel routes service requests, prioritizes missed calls, filters review requests, and reports back to the owner. The same six workflows handle 10 sub-verticals (plumbing, electrical, landscape, pest, garage doors, fence, tree service, junk removal, painting, pressure washing), with the difference at the Retell agent level. If you're an electrician, the demo we're showing you is configured for electrical instead."

## Step 1: Service Request Intake (Sub-Vertical-Aware)

Show `01 - Service Request Intake (Sub-Vertical-Aware)`.

Talking points:

- The form captures the sub-vertical (plumbing, electrical, etc.) and routes urgency keywords specific to that sub-vertical.
- Plumbing leak / gas smell / sewage signals fire `safety-emergency` priority, which triggers the Retell safety branch (plumber's emergency line, gas-utility callout if needed).
- Electrical sparking / smoke / burning signals do the same with electrical-specific safety language.
- Tree-on-house / power-lines triggers the tree-service safety branch.
- Standard inquiries (landscape design consultation, fence install, painting estimate) score lower and route to the standard service queue.

## Step 2: Missed-Call Callback Queue

Show `02 - Missed-Call Callback Queue`.

Talking points:

- Missed calls aren't lost. The workflow turns voicemails into a prioritized queue.
- After-hours signal + sub-vertical-urgency keywords + repeat-caller bonus drive priority score.
- Plumbing emergency voicemail (active leak) sorts above a pest-control routine quarterly call: same workflow, sub-vertical-aware scoring.
- In production, a missed-call text-back SMS goes out within seconds of the missed call ("Got your call, we'll be right with you"). It fires only after A2P 10DLC registration and carries opt-out language. The demo shows the prioritized queue only.

## Step 3: Post-Job Review Request

Show `04 - Post-Job Review Request`.

Talking points:

- Filters happy-job + not-opted-out before sending any review request.
- Negative-signal jobs route to the manager for follow-up first.
- Review-platform link is sub-vertical-specific (Houzz for landscape, Google for plumbing/electrical/etc.).
- Same filter logic as the HVAC and roofing SKUs: proven shape, reused intentionally.

## Step 4: Weekly Owner Digest

Show `06 - Weekly Owner Digest`.

Talking points:

- Owner reads in 60 seconds Monday morning.
- Sub-vertical-aware sections: recurring service reactivation appears for pest control + landscape, says "not applicable" for plumbing / electrical / others.
- Booking rate (new leads → booked jobs) is the headline metric.
- Safety-branch escalations + workflow failures surface here so the system stays honest about where it broke.

## What's NOT in this demo

- **HVAC heat-event lane / replacement-quote system-age trigger.** Those are HVAC-only workflows. If you're an HVAC contractor, you should be on the HVAC SKU, not this catch-all.
- **Roofing storm-recall / insurance-claim follow-up / photo-document collection.** Those are roofing-only. If you're a roofer, you should be on the roofing SKU.
- **Estimate follow-up sequence.** That's Phase 2 (the workflow JSON ships in the pack, but the live demo focuses on Phase 1). Phase 1 captures the lead and books the job; Phase 2 adds the 3-touch + 1-SMS estimate sequence with lost-reason tagging.
- **Recurring service reactivation.** Phase 3, pest + landscape only.

## Close

"The first paid step is the $1,000 AI Assessment. We map where your leads leak today, what your FSM (Jobber, Housecall Pro, ServiceTitan) is doing well, and where the lead-funnel layer needs to bolt on, and you get a scoped build plan. The $1,000 credits 100% toward your build if you start within 60 days. Then we build Phase 1, lead capture, first. Phase 2 adds estimate follow-up; Phase 3 adds retention plus recurring service for pest and landscape. Six workflows total, lean on purpose. Same stack as HVAC and roofing, a different SKU because we don't want to oversell vertical-specific features you don't need."
