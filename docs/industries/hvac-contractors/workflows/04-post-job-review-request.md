# 04 - Post-Job Review Request

## Purpose

Filters completed jobs so happy customers receive review requests and unresolved jobs route to manager follow-up first.

## Tags

`demo`, `hvac`, `phase-3`, `reviews`

## Inputs

Use `../demo-data/completed-jobs-for-review.json` as pinned data or manual test input.

## n8n Steps

1. Import `04-post-job-review-request.json`.
2. Pin the sample completed-job array.
3. Execute manually.
4. Confirm only eligible happy-customer jobs receive `send-review-request`, and that jobs with `reviewOptOut: true` are excluded even when otherwise eligible.
5. If moving to production, connect approved email/SMS copy and review links.
6. In production, honor STOP and informal opt-outs (email, voicemail, "stop texting me") within 10 business days, respect quiet hours, and enforce frequency caps. An opt-out sets `reviewOptOut: true` on the customer record so no further review requests send.

## Demo Notes

Do not ask every customer for a public review. Filter before sending.
