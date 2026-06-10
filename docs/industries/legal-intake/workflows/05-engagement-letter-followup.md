# 05 - Engagement Letter Follow-Up (Phase 3)

## Purpose

3-touch sequence (D3 / D7 / D14) reminding prospective client to sign + return engagement letter. DocuSign or Adobe Sign integration for e-sign.

## Tags

`demo`, `legal-intake`, `phase-3`, `engagement-letter`

## Inputs

Use `../demo-data/engagement-letters-sent.json`.

## n8n Steps

1. Import `05-engagement-letter-followup.json`.
2. Configure DocuSign or Adobe Sign account credentials.
3. Pin the sample sent-letters payload.
4. Execute manually.
5. Confirm 3-touch sequence fires on schedule and stops on signed event.

## Demo Notes

Phase 3 is internal lifecycle work. The sequence is firm-to-prospective-client, which is consent-by-engagement-attempt; not outbound marketing.
