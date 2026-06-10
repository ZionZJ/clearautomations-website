# 04 - Directory Health Check

## Purpose

Tracks monthly maintenance tasks for public directory listings such as Psychology Today, Zencare, Headway, and the practice website.

## Tags

`demo`, `therapist`, `phase-1`, `non-phi`

## Inputs

Use `../demo-data/directory-profiles.json`.

## n8n Steps

1. Import `04-directory-health-check.json`.
2. Execute manually with the fake directory profile records.
3. Review each generated action item.
4. Confirm recommendations are limited to public profile data such as availability, specialties listed, phone number, booking link, and accepted payer language.
5. If turning this into a monthly workflow, add a Schedule Trigger after the manual demo is approved.
6. Assign the output to a demo sheet, task tool, or internal dashboard.

## Demo Notes

This is a strong Phase 1 workflow because it has visible value and does not need patient data.
