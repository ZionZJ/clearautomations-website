# 06 - Session-to-Claim Reconciliation Simulation - Disabled

## Purpose

Shows how a Phase 3 workflow could compare fake session records against fake claim records to surface missed or denied claims.

## Tags

`demo`, `therapist`, `phase-3-simulated`

## Inputs

Use `../demo-data/fake-sessions-and-claims.json`.

## n8n Steps

1. Import `06-session-claim-reconciliation-simulation-disabled.json`.
2. Keep inactive by default.
3. Execute manually only with fake data.
4. Review unmatched sessions, denied claims, and modeled recovery value.
5. Do not connect this workflow to real EHR, clearinghouse, payer, or billing data.
6. Before production, complete the same BAA, insurance, subprocessor, hosting, and internal risk prerequisites required for Phase 2.

## Demo Notes

Use this workflow to demonstrate the premium group-practice opportunity without implying ClearAutomations is currently processing live PHI.
