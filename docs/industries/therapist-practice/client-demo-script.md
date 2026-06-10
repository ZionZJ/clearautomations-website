# Client Demo Script

Use this script to show a therapist prospect the demo without overstating compliance status or implying live client results.

## Opening

"This is a fictional therapy practice demo. It uses fake data only. The first lane I will show is Phase 1, which is intentionally non-PHI. The deeper intake and claims workflows are simulations until BAA, insurance, hosting, subprocessors, and risk analysis are complete."

## Step 1: Practice Audit Intake

Show `01 - Practice Audit Intake - Non-PHI`.

Talking points:

- The public form collects practice/business data only.
- The validator rejects obvious patient-specific content.
- Accepted leads receive a demo lead ID and are ready for internal routing.

## Step 2: Callback Queue

Show `02 - Speed-to-Lead Callback Queue - Non-PHI`.

Talking points:

- The goal is response speed, not clinical intake.
- The workflow assigns a callback priority from business context only.
- The script avoids symptoms, diagnoses, appointment reasons, and insurance details.

## Step 3: Consult Reminders

Show `03 - Consult Reminder Sequence - Non-PHI`.

Talking points:

- Messages are generic.
- No clinical topic appears in reminder copy.
- The workflow can later connect to Twilio Security or Enterprise Edition before PHI-adjacent use.

## Step 4: Directory Health Check

Show `04 - Directory Health Check`.

Talking points:

- Directory drift is a recurring admin leak.
- The workflow turns listing maintenance into a monthly checklist.
- It can be run without patient data.

## Step 5: Dashboard Digest

Show `07 - Demo Dashboard Digest`.

Talking points:

- The dashboard summarizes lead speed, consult conversion, directory tasks, and simulated roadmap metrics.
- It helps the practice owner see where the system is paying off.

## Step 6: Simulated Advanced Roadmap

Show Workflows 05 and 06 only after making the fake-data boundary explicit.

Talking points:

- Intake handoff and session-to-claim reconciliation are the premium opportunities.
- They require BAA-covered infrastructure and vendors.
- Psychotherapy notes remain out of scope.

## Close

"For v1, the public website and Phase 1 automation collect no PHI. The first paid step is a therapist-practice audit that maps lead response, consult reminders, directory drift, and the safe roadmap for deeper automation."
