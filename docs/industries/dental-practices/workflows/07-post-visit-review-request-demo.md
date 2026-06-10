# 07 - Post-Visit Review Request - Demo

## Purpose

Filters fake completed visits so happy visits receive review requests and unresolved issues route to office-manager follow-up first.

## Tags

`demo`, `dental`, `fake-data`, `reviews`

## Inputs

Use `../demo-data/completed-visits-for-review.json` as pinned data or manual test input.

## n8n Steps

1. Import `07-post-visit-review-request-demo.json`.
2. Pin the sample completed-visit array.
3. Execute manually.
4. Confirm only eligible happy visits receive `send-review-request`.
5. Before production, complete BAA, vendor, access, retention, opt-in, and approved-copy review.

## Demo Notes

Do not ask unresolved or unhappy patients for public reviews before office-manager follow-up.
