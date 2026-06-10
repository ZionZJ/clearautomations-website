# Clear Automations Industry SKU Packs

This folder contains the 7 productized industry SKU packs (formerly `n8n-demos/`). Each pack holds the generic workflow templates, fictional demo persona, and setup guides for that vertical.

**Client-specific overlays live elsewhere:** `docs/clients/{client-slug}/` is where engagements with real practices/businesses get tracked. Start at [`../clients/_template/`](../clients/_template/) when a new client signs.

Use packs with fake data first. Do not connect production client accounts, customer lists, phone numbers, CRMs, dispatch systems, EHRs, payer portals, or claim documents until a client-specific implementation has been approved.

## Active Demo Packs

| Demo | Folder | Status | Core Promise |
| --- | --- | --- | --- |
| Therapist Practice | `therapist-practice/` | Active | Non-PHI front desk automation for consults and directory follow-up |
| HVAC Contractors | `hvac-contractors/` | Active | Missed-call recovery and emergency service booking for Texas HVAC shops |
| Roofing Contractors | `roofing-contractors/` | Active | Storm lead capture, inspection booking, and insurance follow-up for Texas roofers |
| Dental Practices | `dental-practices/` | Active | Missed calls, no-shows, recall, and treatment-plan recovery |

## Future Adds Backlog

| Rank | Industry | Why It Matters | Suggested Demo Angle |
| --- | --- | --- | --- |
| 1 | Legal Intake | High-value leads and bilingual Texas intake angle, but crowded competitor space | 24/7 Intake + Document Follow-Up for Small Firms |
| 2 | Med Spas | High-growth and high-margin, but medical oversight and regulatory positioning need care | Consultation Booking + Review + Membership Follow-Up |
| 3 | Electricians | Strong Texas demand from construction and data centers, but less emotional urgency than HVAC/roofing | Missed Calls + Quote Follow-Up + Service Agreement Renewals |

## Build Rules

- Each demo pack should include a `README.md`, setup manual, import checklist, demo script, fake client profile, fake data, workflow JSON, and workflow manuals.
- Each public industry page should own its page copy and audit form copy through the industry data layer.
- Workflow JSON should ship inactive.
- AI should collect context and route work; it should not diagnose, quote, promise availability, promise claim outcomes, or replace licensed/professional judgment.
- The client should own the CRM, phone number, workflow exports, contact list, and source accounts.
