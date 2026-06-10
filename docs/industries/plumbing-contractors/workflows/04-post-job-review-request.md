# 04 - Post-Job Review Request

## Purpose

Turns completed jobs into consistent, filtered review requests while protecting the public rating. Job types are filtered, opted-out customers are excluded, and negative responses route to a manager instead of a public review link.

## Tags

`demo`, `plumbing`, `phase-3`, `reviews`

## Node Walkthrough

1. **Manual Demo Trigger**: demo-only trigger. The production target path is `demo-plumbing-review-request`.
2. **Filter Review Requests**: code node that, per completed job, resolves one `reviewAction`:
   - `excluded-review-opt-out` when `reviewOptOut === true`. Hard exclusion; no message of any kind.
   - `excluded-job-type` when the job type is not on the reviewable list (warranty callbacks and recalls never trigger a review ask).
   - `manager-follow-up-first` when the technician status signals an unhappy customer, a complaint, or a manager flag. The manager calls before any review request goes out.
   - `send-review-request` for happy customers on reviewable job types.

## Demo Steps

1. Import `04-post-job-review-request.json`.
2. Pin `../demo-data/completed-jobs-for-review.json` on the code node.
3. Execute manually.
4. Confirm the repipe customer with `reviewOptOut: true` returns `excluded-review-opt-out`.
5. Confirm the unhappy drain-cleaning customer routes to `manager-follow-up-first`.
6. Confirm the warranty callback returns `excluded-job-type`.

## Production Steps

1. Complete the compliance gate in `../setup-manual.md`. Review-request SMS is automated outbound text and is fully 10DLC-gated.
2. Trigger from job completion in the field-service platform (Housecall Pro for this demo client).
3. Send the approved email plus SMS with the contractor's review link. Every SMS carries opt-out language; STOP and informal opt-outs (email, voicemail, spoken to a tech) are honored within 10 business days and write `reviewOptOut: true` back to the customer record.
4. Respect quiet hours (send next morning for jobs completed in the evening) and a frequency cap of one review request per job, with at most one reminder.
5. Route negative responses to the manager with the job context so the call happens before the customer posts anywhere public.

## Demo Notes

The system avoids asking unhappy customers for public reviews, and it never messages someone who said stop. Both rules are workflow logic, not training reminders for techs.
