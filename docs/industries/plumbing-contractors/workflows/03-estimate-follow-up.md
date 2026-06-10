# 03 - Estimate Follow-Up

## Purpose

Recovers stale repipe, water heater, sewer line, and fixture quotes with cadence logic, lost-reason tagging, and finance-option eligibility for plumbing's high-ticket band. Quotes get sent once then forgotten; this workflow is the recovery engine.

## Tags

`demo`, `plumbing`, `phase-2`, `retention`

## Node Walkthrough

1. **Manual Demo Trigger**: demo-only trigger. The production target path is `demo-plumbing-estimate-follow-up`.
2. **Classify Estimate Follow-Up**: code node that, per open estimate:
   - Buckets `jobFamily` as `repipe`, `water-heater`, `sewer`, or `fixture` from the estimate type.
   - Validates `lostReason` against the enum: `price`, `timing`, `competitor`, `no-response`, `scope`. Anything else resolves to null.
   - Sets cadence: `closed-lost` (a lost reason exists), `manager-review` (14 plus days old), `follow-up-now` (5 plus days), or `wait`.
   - Sets `financeReminderEligible: true` when `estimateValue >= 5000`, the plumbing high-ticket band (repipes, tankless conversions, sewer lines).
   - Picks a `messageTheme` per job family, with finance-options copy for eligible quotes.

## Demo Steps

1. Import `03-estimate-follow-up.json`.
2. Pin `../demo-data/open-estimates.json` on the code node.
3. Execute manually.
4. Confirm the $9,800 repipe and $12,500 sewer line return `financeReminderEligible: true`.
5. Confirm the 15-day-old tankless quote resolves to `manager-review`.
6. Confirm the fixture record with `lostReason: no-response` resolves to `closed-lost`.

## Production Steps

1. Complete the compliance gate in `../setup-manual.md` before any SMS touch goes live.
2. Trigger from the HubSpot `Quoted` stage (webhook) or the field-service platform export.
3. Wire the multi-touch sequence: email plus SMS, spaced by urgency and ticket size. SMS is 10DLC-gated, carries opt-out language, honors STOP and informal opt-outs within 10 business days, and respects quiet hours and frequency caps (suggested cap: no more than two follow-up texts per quote per week).
4. Use only contractor-approved finance-option copy. The workflow flags eligibility; it never invents terms.
5. Write `lost_reason` back to HubSpot so the weekly digest and the owner report show why quotes die.

## Demo Notes

Lost reasons become visible instead of staying anecdotal. The finance flag matters in plumbing because the $5,000 plus band (repipe, tankless, sewer) is where a payment-plan reminder moves a stalled decision.
