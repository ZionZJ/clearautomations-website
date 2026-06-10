# Client Demo Script

Use this script to show a legal-intake firm prospect the demo without implying real client results or giving legal advice.

## Opening

"This is a fictional personal-injury firm demo. It uses fake data only. The point is to show how an inbound intake call moves through a conflict-check gate before any fact-gathering, and how the rest of the funnel is built around that gate. The system is designed around ABA Model Rule 1.18 — the prospective-client rule — so you don't end up with exposure if you have to decline a matter due to conflict. AI doesn't give legal advice; it routes."

## Step 1: Conflict-Cleared Intake

Show `01 - Conflict-Cleared Intake`.

Talking points:

- This is the architectural moat. Generic AI intake tools collect fact pattern before checking conflicts; we collect only minimum information — caller name, state, case-type bucket, opposing parties — before the gate fires.
- The workflow calls your CMS conflict-check API (Clio default; MyCase, PracticePanther, Filevine alternates). In demo mode, `simulateResult: clear` shows the clear path; `simulateResult: conflict` shows the polite-decline path.
- If conflict, the AI declines the matter politely without explaining the nature of the conflict. No more information is collected. CRM logs as `closed-conflict-declined`.
- If clear, the lead routes to your intake coordinator queue with a 4-business-hour SLA target.
- If your firm doesn't have an integrated CMS, the manual-fallback path emails the intake coordinator with the collected fields. Slower but compliant.

## Step 2: Missed-Call Callback Queue

Show `02 - Missed-Call Callback Queue`.

Talking points:

- Missed calls are not lost. The workflow turns them into a prioritized callback queue.
- Practice-area weights (PI > family > immigration > criminal > estate) plus urgency signals in the voicemail text plus repeat-caller bonus drive the priority score.
- Higher-priority calls (PI-with-urgency-keywords, served-papers, just-arrested) get the `call-now` queue; standard inquiries route to `next-business-day`.
- The Vapi script is the same script as W01 — no new conflict-gate logic; W01 always runs after the callback connects.

## Step 3: Post-Engagement Review Request

Show `07 - Post-Engagement Review Request`.

Talking points:

- After a matter closes, eligible-and-happy clients receive a review request. Negative-signal closings route to the managing partner first.
- We never offer compensation for reviews. Bar rules vary by state — your firm verifies per state.
- Review-platform link is firm-configurable: Google, Avvo, Martindale, or any combination.

## Step 4: Weekly Firm Digest

Show `08 - Weekly Firm Digest`.

Talking points:

- Managing partner reads in 60 seconds Monday morning.
- Conflict-clearance rate (architectural moat metric), SLA hit rate (callback speed), engagement rate (discovery → signed) are the headline metrics.
- Aggregate metrics only. No prospective-client information appears in the digest — Rule 1.6 confidentiality enforced at the reporting layer too.

## What's NOT in this demo

- **Fact-pattern collection.** The Vapi script collects only minimum information. Fact pattern is collected by your intake coordinator post-conflict-clearance inside your firm's CMS — never by AI, never in HubSpot.
- **Outbound to prospective clients.** Per ABA Rule 7.3 + state advertising rules, this SKU is inbound-only. We don't sell cold-outbound for legal intake.
- **Legal advice.** AI never discusses case merits, statute of limitations, jurisdiction, damages, or strategy. Attorney sign-off on the Vapi script is non-negotiable for production.

## Close

"The first paid step is a Legal Intake Audit — three hours mapping where your inbound speed leaks today, where your conflict-check workflow creates friction or risk, and where lifecycle communications (engagement-letter signing, SOL tracking) gap. Then we build Phase 1 — conflict-cleared intake — first. Phase 2 adds case-type routing and document collection; Phase 3 adds engagement-letter follow-up and SOL tracking. Every phase requires attorney sign-off on the Vapi script before going live."
