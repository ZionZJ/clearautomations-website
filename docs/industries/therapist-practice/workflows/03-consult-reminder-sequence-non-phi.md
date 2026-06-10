# 03 - Consult Reminder Sequence - Non-PHI

## Purpose

Creates generic consult reminder messages for demo consults. The messages do not include clinical context.

## Tags

`demo`, `therapist`, `phase-1`, `non-phi`

## Inputs

Use `../demo-data/consults.json`.

## n8n Steps

1. Import `03-consult-reminder-sequence-non-phi.json`.
2. Execute manually with the fake consult records.
3. Review the generated 24-hour and 2-hour reminder copy.
4. Confirm every message is generic and does not include symptoms, diagnosis, appointment reason, or payer information.
5. If connecting to SMS/email later, attach demo-only credentials first.
6. Before production use where PHI could enter, confirm Twilio Security Edition or Enterprise Edition and the required BAA path.

## Demo Notes

Use this workflow to show no-show reduction without implying the public website is collecting patient intake information.
