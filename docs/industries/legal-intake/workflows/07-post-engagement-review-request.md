# 07 - Post-Engagement Review Request

## Purpose

Triggered when a case closes won (settlement / verdict / engagement complete) + happy-filter. Email + SMS request for Google / Avvo / Martindale review. Manager-route on negative-signal closings.

## Tags

`demo`, `legal-intake`, `phase-1`, `reviews`

## Inputs

Use `../demo-data/closed-engagements.json`.

## n8n Steps

1. Import `07-post-engagement-review-request.json`.
2. Configure review platform links (Google + Avvo + Martindale per firm preference).
3. Pin the sample closed-engagement payload.
4. Execute manually.
5. Confirm only happy closings trigger review request; negative-signal closings route to managing partner.

## Demo Notes

Critical compliance note: state bar rules vary on solicitation of reviews from former clients. Default to inviting a review without scripting the content; never offer compensation for reviews. The review-platform link is just a link — the prospective reviewer writes their own copy.
