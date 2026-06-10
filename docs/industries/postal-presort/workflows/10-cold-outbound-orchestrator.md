# 10 - Cold Outbound Orchestrator (Phase 3, ATTORNEY-GATED)

## ⚠️ HARD GATE

This workflow does not deploy to production without **written attorney sign-off** on B2B exemption applicability for the presort company's state. The NexSort `attorney-engagement-brief.md` is a starting framework, not a substitute.

If sign-off is not on file, this workflow remains `active: false`.

## Purpose

Orchestrates compliant cold outbound to Apollo-sourced B2B contacts. Pipeline: Apollo list import → DNCcheck.com scrub → 10DLC SMS warm-up → Vapi cold-caller (Variant C) → email follow-up.

## Tags

`demo`, `postal-presort`, `phase-3`, `cold-outbound`, `attorney-gated`

## Inputs

Use `../demo-data/apollo-list-sample.json`.

## n8n Steps

1. Import `10-cold-outbound-orchestrator.json`.
2. Pin the sample Apollo list.
3. Execute manually.
4. Confirm DNC scrub fires before any contact enters the dial queue.
5. Confirm 10DLC SMS warm-up fires 60-90 seconds before each call.
6. Confirm audit-trail logging captures lead source, scrub timestamp, SMS message, call recording reference, outcome, opt-out timestamp.
7. **Production prerequisites:** attorney sign-off on file, DNCcheck.com account active, Twilio 10DLC registration confirmed, Apollo subscription active, Vapi Variant C agent enabled.

## Audit-trail logging (per B2B-exemption framework)

Every contact's outbound interaction logs:

- Lead source (Apollo + scrub date)
- DNC scrub timestamp
- 10DLC SMS warm-up message + timestamp
- Call recording reference (Vapi)
- Outcome (scheduled / declined / DNC)
- Opt-out timestamp (if applicable)

Retention: state-specific. Typically 2-7 years; verify with attorney sign-off.

## Demo Notes

Phase 3 cold outbound is the highest-risk and highest-reward workflow in the SKU. The audit-trail discipline is the difference between a defensible B2B-exemption posture and a TCPA exposure.
