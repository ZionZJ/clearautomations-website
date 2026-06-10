# 07 - Post-Job Review Request

## Purpose

Filters completed roofing jobs so happy homeowners receive review requests and unresolved jobs route to manager follow-up first.

## Tags

`demo`, `roofing`, `storm-restoration`, `phase-3`, `reviews`

## Inputs

Use `../demo-data/completed-roofing-jobs.json` as pinned data or manual test input.

## n8n Steps

1. Import `07-post-job-review-request.json`.
2. Pin the sample completed-job array.
3. Execute manually.
4. Confirm only eligible happy-homeowner jobs receive `send-review-request`.
5. If moving to production, connect approved email/SMS copy and review links.

## Demo Notes

Do not ask unresolved or unhappy customers for public reviews before manager follow-up.
