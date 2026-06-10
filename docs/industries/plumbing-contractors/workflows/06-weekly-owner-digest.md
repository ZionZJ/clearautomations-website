# 06 - Weekly Owner Digest

## Purpose

Rolls the week's numbers into one plain-text digest for the owner: leads, booked jobs, missed calls captured, emergency volume, safety escalations, stale estimates, review activity, reactivation outreach due, opt-outs honored, and workflow failures. This is where the automation proves what it recovered.

## Tags

`demo`, `plumbing`, `phase-1`, `retention`

## Node Walkthrough

1. **Manual Demo Trigger**: demo-only trigger. The production target path is `demo-plumbing-owner-digest`.
2. **Build Owner Digest**: code node computing the booking rate and assembling the digest text from the weekly metrics payload.

## Demo Steps

1. Import `06-weekly-owner-digest.json`.
2. Pin `../demo-data/dashboard-metrics.json` on the code node.
3. Execute manually.
4. Confirm the digest text renders with booking rate, safety escalations, and opt-outs honored.

## Production Steps

1. **Monday cron (production step)**: replace the manual trigger with a Schedule Trigger set to Monday 7:00am `America/Chicago`, so the owner reads the digest before the week starts. The demo JSON intentionally ships with a manual trigger.
2. Aggregate the real metrics from HubSpot (pipeline counts, lost reasons), the phone provider (missed and captured calls), and the n8n execution log (workflow failures) instead of the pinned demo payload.
3. Deliver by email through the contractor's own sending domain (Resend or Gmail/Workspace). The digest is an internal business message to the owner, not customer messaging, so it sits outside the 10DLC scope; everything it reports on still runs behind the compliance gate.
4. Include the opt-outs-honored count every week so compliance stays visible to the owner.

## 90-Day ROI Report

Built in from day one, this is the anti-month-3-churn lock:

- Every weekly digest's metrics are appended to a rolling store (a Google Sheet or HubSpot custom object).
- At week 13, the workflow compiles the 13-week rollup: total missed calls captured, emergency jobs booked from after-hours capture, estimate revenue recovered by follow-up, reviews gained, and reactivation jobs booked, against the client's baseline from the $1,000 AI Assessment.
- The report converts each recovered call using the client's own ticket values (the $285 to $1,200 missed-call band from the Assessment), so the ROI math is in their numbers, not ours.
- Delivered as a standing meeting at day 90, exactly when a results-invisible client would otherwise churn.

## Demo Notes

The digest is the owner's weekly answer to "what did this thing actually do for me." The 90-day rollup is the same answer with a quarter of evidence behind it.
