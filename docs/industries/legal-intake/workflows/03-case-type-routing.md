# 03 - Case-Type Routing (Phase 2)

## Purpose

After conflict clearance, route the lead to the right intake coordinator based on practice area + state licensure + coordinator availability.

## Tags

`demo`, `legal-intake`, `phase-2`, `routing`

## Inputs

Use `../demo-data/conflict-cleared-leads.json`.

## n8n Steps

1. Import `03-case-type-routing.json`.
2. Configure practice-area → coordinator mapping per firm (single-area firms can skip).
3. Configure state-licensure matrix (which attorneys are admitted in which states).
4. Pin the sample cleared-lead payload.
5. Execute manually.
6. Confirm routing produces the correct coordinator assignment.

## Demo Notes

Solo practices route everything to the single attorney. Small firms (2-10 attorneys) benefit most from this workflow when practice areas are split (PI specialist + family specialist, etc.).
