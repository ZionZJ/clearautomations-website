# 04 - Post-Job Review Request

## Purpose

Filters completed jobs so happy customers receive review requests and unresolved jobs route to manager follow-up first.

## Tags

`demo`, `home-services`, `phase-1`, `reviews`

## Inputs

Use `../demo-data/completed-jobs.json`.

## n8n Steps

1. Import `04-post-job-review-request.json`.
2. Configure review-platform link (Google / Yelp / sub-vertical-specific platforms like Houzz for landscape).
3. Pin the sample completed-job array.
4. Execute manually.
5. Confirm only happy-job completions receive `send-review-request`; negative-signal completions route to manager follow-up.

## Demo Notes

Filter logic in Phase 1; full sequence in Phase 3 (full email + SMS + review-link cadence). Manager-route on negative is non-negotiable: never blast review requests to unresolved jobs.
