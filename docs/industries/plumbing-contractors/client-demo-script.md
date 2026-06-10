# Client Demo Script

Use this script to show a plumbing prospect the demo without implying real client results.

## Opening

"This is a fictional plumbing contractor demo, Bayou City Pipe & Drain out of Houston. It uses fake data only. The point is to show how missed calls, emergency requests, stale estimates, reviews, and past-customer outreach can move through one system that you own."

## Step 1: Emergency Service Intake (the trust moment)

Show `01 - Emergency Service Intake`.

Run the gas-smell sample from `demo-data/emergency-service-requests.json` first.

Talking points:

- "Watch what the system does with a gas smell. It does not qualify, it does not queue, it does not schedule. It flags a safety emergency and routes to your on-call human immediately, and the voice script has already told the caller to leave the area and call the gas utility, or 911 if anyone is in danger."
- "Same for sewage backup and major flooding. The AI never holds a true emergency. That is a liability line we build in, not a setting you have to remember."
- Then run the burst-pipe sample: tier 2 emergency, immediate human callback task.
- Then the repipe inquiry: it lands in the quote lane for structured follow-up instead of competing with emergencies.
- The 5 tiers: safety emergency, emergency, high, quote, routine. Every call gets exactly one lane.

## Step 2: Missed Call Callback Queue (the 2am Saturday story)

Show `02 - Missed Call Callback Queue`.

Talking points:

- "Here is the call that pays for the whole system. Saturday, 2am, burst pipe in a master bathroom. Today that call hits voicemail, and 85 percent of voicemail callers never call back. They call the next plumber, and emergency callers book whoever answers first."
- The queue weights after-hours calls and weekend calls higher, because that is when the job is biggest and the caller is most ready to book.
- A missed call in plumbing is worth $285 to $1,200. Emergency calls close at 12 to 16 percent, the highest of the trades. Losing even two of these a week is real money.
- The owner sees what needs action first, sorted, not buried in a voicemail box.

## Step 3: Estimate Follow-Up

Show `03 - Estimate Follow-Up`.

Talking points:

- Repipe, water heater, sewer line, and fixture quotes get sent once, then forgotten. This recovers them.
- Quotes at $5,000 and up get contractor-approved finance-option reminder copy.
- Lost reasons (price, timing, competitor, no response, scope) become visible instead of staying anecdotal.

## Step 4: Review Request

Show `04 - Post-Job Review Request`.

Talking points:

- Completed jobs are filtered by job type before asking for reviews.
- Customers who opted out of review messages are excluded automatically.
- A negative response routes to the manager first, protecting the public rating.

## Step 5: Past-Customer Reactivation

Show `05 - Past-Customer Reactivation`.

Talking points:

- Water heaters at 8 plus years and drain customers past their service cadence are low-risk revenue.
- The hard gate: a record without a documented opt-in source never gets a message. The run shows a skipped count. That is the FCC one-to-one consent rule built into the workflow, not a policy memo.

## Step 6: Weekly Owner Digest

Show `06 - Weekly Owner Digest`.

Talking points:

- The owner gets a simple summary: leads, booked jobs, missed calls captured, safety escalations, stale estimates, review opportunities, opt-outs honored, and workflow failures.
- This is where the automation proves what it recovered, week after week, and rolls up into a 90-day ROI report.

## Close

"The first paid step is the $1,000 AI Assessment. We map exactly how many calls you are missing, what each one is worth, and where your estimates leak, then scope the build around your numbers. The $1,000 credits 100 percent toward the build if you move forward within 60 days. Want me to put an Assessment slot on the calendar?"
