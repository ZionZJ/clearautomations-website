# 06 - Statute of Limitations Tracker (Phase 3)

## Purpose

Cron weekly. Pulls cases from CMS with SOL field; flags cases approaching SOL (90 / 60 / 30 / 14 day warnings). Internal alerts to assigned attorney; never to prospective client.

## Tags

`demo`, `legal-intake`, `phase-3`, `sol-tracking`, `risk-management`

## Inputs

Use `../demo-data/active-cases-with-sol.json`.

## n8n Steps

1. Import `06-statute-of-limitations-tracker.json`.
2. Configure CMS pull credentials and SOL field mapping.
3. Pin the sample cases payload.
4. Execute manually.
5. Confirm 90/60/30/14 day warnings fire to assigned attorney email + SMS.
6. **Production prerequisite:** firm must pre-load existing case-list with SOL dates before Phase 3 launch.

## Demo Notes

This is risk-management infrastructure, not lead-funnel. SOL slip-through is a malpractice exposure; weekly tracking with escalating alerts is best-practice.
