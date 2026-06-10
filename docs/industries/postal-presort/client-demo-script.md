# Client Demo Script

Use this script to show a postal-presort prospect the demo without implying real client results.

## Opening

"This is a fictional postal-presort company demo. It uses fake data only. The point is to show how inbound inquiries, AI callbacks, post-call branching, email follow-up, review collection, and pipeline visibility move through one presort-company-owned automation system. The system sits alongside Window Book, BCC, Satori, or whatever production presort stack you run — it doesn't replace any of it."

## Step 1: Inbound Form Callback (with SMS warm-up)

Show `01 - Inbound Form Callback`.

Talking points:

- The public form captures business workflow data only — never client mail-piece content or end-recipient PII.
- Once submitted, the workflow fires an SMS warm-up text within 5 seconds and queues a Vapi callback within 30-45 seconds.
- That 30-45 second response is faster than the industry-standard 2-minute callback window and is the primary speed-to-lead differentiator.
- Volume tier + PHI status drive priority scoring for the callback queue.

## Step 2: Post-Call Processing (5-Way Branch)

Show `02 - Post-Call Processing (5-Way Branch)`.

Talking points:

- Most AI intake tools branch 3 ways: qualified, no-answer, not-interested. We branch 5 ways.
- The two extra branches — `email-only` and `DNC` — drive different downstream workflows. Email-only triggers W03 follow-up; DNC blocks the number and flags HubSpot.
- Outcome detection is keyword-driven on the transcript; production refines this with stricter NLU.
- This branching is what keeps the funnel clean instead of pushing everyone into a generic "follow up" bucket.

## Step 3: Follow-Up Email Sequence

Show `03 - Follow-Up Email Sequence`.

Talking points:

- 3 touches: D0 immediate, D2 reminder, D5 final.
- Lost-reason tagging on no-response (`price | timing | vendor-changing | no-response | other`) — visible loss patterns instead of anecdotes.
- Cadence label drives which Resend template fires; copy is approved per presort company before launch.

## Step 4: Review Campaign

Show `05 - Review Campaign`.

Talking points:

- Filters on `customerSatisfaction = high` and `reviewOptOut = false` before sending any review request.
- Negative-signal closings route to the office manager for follow-up before any public-review request.
- Three-touch cadence: D7 email, D10 SMS, D14 final email — calibrated for B2B service-business sales cycles.

## Step 5: Weekly Owner Digest

Show `06 - Weekly Owner Digest`.

Talking points:

- Owner reads in 60 seconds Monday morning.
- Callback hit rate (SLA pulse) and conversion rate (discovery → won) are the two headline metrics.
- Workflow failures surface here, so the system stays honest about where it broke.

## Step 6: Daily Pipeline Snapshot

Show `07 - Daily Pipeline Digest`.

Talking points:

- Slim daily complement to the weekly digest.
- Overnight inbound + today's queue + blockers — scannable in 30 seconds before starting the day.
- Daily cadence works for B2B service businesses with 30-90 day sales cycles. Trades verticals would generate more noise than signal at daily cadence; this is sized right for postal-presort.

## Close

"The first paid step is a Postal-Presort Inbound Audit. We map where your inbound speed leaks today, where past inquiries go silent, and where the pipeline drops off. Then we build the smallest automation that recovers funnel without touching your production presort stack. Phase 2 adds warm outbound; Phase 3 adds attorney-cleared cold outbound — both gated on Phase 1 stabilization first."
