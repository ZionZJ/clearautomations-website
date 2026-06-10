# 05 - Intake Handoff Simulation - Disabled

## Purpose

Shows how a BAA-covered Phase 2 intake handoff could work using fake data only.

## Tags

`demo`, `therapist`, `phase-2-simulated`

## Inputs

Use `../demo-data/fake-intake-packet.json`.

## n8n Steps

1. Import `05-intake-handoff-simulation-disabled.json`.
2. Keep inactive by default.
3. Execute manually only in a fake-data demo.
4. Review the simulated clinician-routing output.
5. Do not connect this workflow to a real EHR, real intake form, or production email.
6. Before production, confirm BAA template, E&O/cyber coverage, hosting BAA chain, AI/vendor BAAs, internal risk analysis, and retention settings.

## Demo Notes

This workflow is a roadmap illustration, not a production workflow. It should help clients understand why Phase 2 is valuable and why it cannot be rushed.
