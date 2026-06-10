# Client Demo Script

Use this script to show a dental prospect the demo without overstating compliance status or implying live client results.

## Opening

"This is a fictional dental practice demo. It uses fake data only. The first lane I will show is Phase 1, which is intentionally non-PHI. The no-show, recall, treatment-plan, schedule-gap, and review flows are simulations until BAA, vendor, access, retention, opt-in, and approved-copy review are complete."

## Step 1: Practice Audit Intake

Show `01 - Dental Practice Audit Intake - Non-PHI`.

Talking points:

- The public form collects practice/business data only.
- The validator rejects obvious patient-specific content.
- Accepted leads receive a demo lead ID and are ready for internal follow-up.

## Step 2: Missed Call Callback

Show `02 - Missed Call New-Patient Callback - Non-PHI`.

Talking points:

- The goal is response speed, not patient intake.
- The workflow prioritizes missed calls by business context only.
- The script avoids clinical questions, treatment discussion, and insurance details.

## Step 3: Cancellation and No-Show Recovery

Show `03 - Cancellation and No-Show Recovery - Demo`.

Talking points:

- Empty chair time becomes visible.
- This is fake data only until production controls are approved.
- The workflow classifies follow-up needs; it does not discuss care.

## Step 4: Hygiene Recall Reactivation

Show `04 - Hygiene Recall Reactivation - Demo`.

Talking points:

- Recall is often a hidden production leak.
- The workflow segments fake recall records by overdue window and next action.

## Step 5: Treatment Plan Follow-Up

Show `05 - Treatment Plan Follow-Up - Demo`.

Talking points:

- Treatment plans stall for operational reasons.
- The workflow surfaces next steps for approved coordinator follow-up.
- AI does not recommend treatment.

## Step 6: Schedule Gap Fill

Show `06 - Schedule Gap Fill - Demo`.

Talking points:

- Near-term openings should not require front desk heroics.
- The workflow finds eligible fake contacts for open slots.

## Step 7: Review Request

Show `07 - Post-Visit Review Request - Demo`.

Talking points:

- Happy completed visits get review requests.
- Unresolved issues route to the office manager first.

## Step 8: Weekly Practice Digest

Show `08 - Weekly Practice Digest - Demo`.

Talking points:

- The owner sees missed calls, no-shows, recall opportunities, treatment-plan follow-up, reviews, and workflow failures.
- This is the operational proof screen.

## Close

"The first paid step is a dental-practice workflow audit. We map where calls, no-shows, recall, treatment plans, and schedule gaps leak today, then build the smallest non-PHI workflow first."
