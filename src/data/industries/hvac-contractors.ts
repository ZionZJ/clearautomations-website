import type { Industry } from "./types";

export const hvacContractorsIndustry: Industry = {
  slug: "hvac-contractors",
  name: "HVAC Contractors",
  form: {
    kind: "hvac-contractor",
    ctaLabel: "HVAC Audit",
  },
  landingCopy: {
    addonsEyebrow: "Add to the build",
    addonsTitle: "Revenue recovery services around the core HVAC build.",
    blockedPolicyTitle: "Not used for production dispatch",
    faqTitle: "Before the first emergency lead is routed",
    footerTagline:
      "ClearAutomations: the front desk for Texas HVAC contractors",
    proofCards: [
      {
        headline: "You own the system.",
        body:
          "Your website, CRM, phone numbers, workflows, scripts, and handoff docs stay in your accounts.",
      },
      {
        headline: "Emergency calls get priority.",
        body:
          "True emergencies (no-cool in a heat wave, no-heat in a freeze, medically heat-sensitive households) route to a human immediately. The AI never holds them in a queue.",
      },
      {
        headline: "Built for Texas seasonality.",
        body:
          "The demo is designed around summer spikes, after-hours calls, storm-driven demand, and replacement quotes.",
      },
    ],
  },
  metadata: {
    title: "HVAC Contractor Automation | ClearAutomations",
    description:
      "Missed-call recovery, emergency booking, estimate follow-up, and review automation for Texas HVAC contractors.",
    openGraph: {
      title: "HVAC Contractor Automation | ClearAutomations",
      description:
        "Automation systems that help Texas HVAC contractors respond faster, book more urgent jobs, and recover stale estimates.",
      url: "https://clearautomations.com/industries/hvac-contractors",
      type: "website",
    },
  },
  hero: {
    eyebrow: "Texas-first automation for HVAC contractors",
    title: "Every missed AC call can become someone else's booked job.",
    mutedTitle: "We recover the lead before it cools off.",
    body:
      "ClearAutomations is the front desk for HVAC contractors. We build the AI employee that answers every call, recovers missed leads, follows up on estimates, and keeps reviews coming, for companies that cannot afford slow response during Texas heat.",
    primaryCta: "Request an HVAC Workflow Audit",
    secondaryCta: "See the Workflow Phases",
    stats: [
      { value: "2 min", label: "target callback task" },
      { value: "85%", label: "of voicemail callers never call back" },
      { value: "$350+", label: "cost of one missed service call" },
    ],
  },
  problems: {
    eyebrow: "The leak is speed-to-lead",
    title: "HVAC owners do not need more software. They need fewer dropped jobs.",
    items: [
      {
        num: "01",
        text:
          "No-cool calls arrive after hours, on weekends, and during heat waves when every competitor is one tap away. The average shop misses 27% of its calls, and 85% of callers who hit voicemail never call back.",
      },
      {
        num: "02",
        text:
          "Estimate requests get quoted once, then disappear into inboxes, sticky notes, or a dispatcher memory stack. A missed service call costs $350 or more. A missed replacement call can cost $7,500 to $14,000.",
      },
      {
        num: "03",
        text:
          "Maintenance plans, review requests, and aging equipment opportunities are valuable, but rarely get consistent follow-up.",
      },
    ],
    callout:
      "The first build focuses on lead response, booking, and owner visibility. It does not replace your dispatcher, field-service platform, or technician judgment.",
  },
  phases: {
    eyebrow: "Start with the $1,000 AI Assessment.",
    title: "First we map your revenue leak. Then we build.",
    mutedTitle: "Missed-call recovery, then follow-up, then retention.",
    note:
      "Everything starts with the $1,000 AI Assessment. We quantify exactly how many calls you're missing and what each is worth, then build from there. The fee credits toward the build. The build below is what your AI front desk looks like for HVAC, scoped in your Assessment with 4+ integrations wired in (phone, CRM, SMS, and your calendar or field-service platform). By month 3 you get a simple ROI report: the booked jobs and recovered revenue the system actually generated. Production launch requires real phone, CRM, dispatch, and opt-in settings to be reviewed first.",
    items: [
      {
        phase: "Build · Stage 1",
        name: "Missed Call Recovery",
        setup: "Scoped in Assessment",
        monthly: "Scoped in Assessment",
        timeline: "2-3 weeks",
        result: "Faster callbacks and fewer lost emergency leads",
        status: "The core build - demo workflow ready",
        featured: true,
        items: [
          "Emergency service intake form with urgency scoring",
          "Missed-call callback queue for after-hours and overflow leads",
          "Missed-call text-back SMS within seconds (live only after A2P 10DLC registration, with opt-out language)",
          "Retell AI voice script for no-cool qualification and booking handoff",
          "HubSpot pipeline for new lead, scheduled, quoted, won, and lost",
          "Owner digest for response speed, booked jobs, and dropped leads",
        ],
        note:
          "The system prioritizes speed and routing. It should not promise availability, pricing, or technician diagnosis without your approved rules.",
      },
      {
        phase: "Build · Stage 2",
        name: "Estimate Follow-Up",
        setup: "Scoped in Assessment",
        monthly: "Scoped in Assessment",
        timeline: "2 weeks",
        result: "More quotes turned into booked installs",
        status: "Added after CRM and quote process review",
        items: [
          "Stale estimate follow-up sequence",
          "Replacement quote reminders by system age and urgency",
          "Finance-option reminder copy approved by the contractor",
          "Lost-reason tagging for price, timing, competitor, or no response",
          "Weekly quote recovery dashboard",
        ],
        note:
          "This phase works best when the company already tracks estimates or can export them from its field-service platform.",
      },
      {
        phase: "Build · Stage 3",
        name: "Retention and Reviews",
        setup: "Scoped in Assessment",
        monthly: "Scoped in Assessment",
        timeline: "1-2 weeks",
        result: "More repeat work and stronger local proof",
        status: "Added after emergency and quote flows are stable",
        items: [
          "Maintenance plan renewal reminders",
          "Post-job review requests by job type",
          "Seasonal tune-up reactivation campaigns",
          "Warranty follow-up and filter reminder sequences",
          "Monthly owner report with wins, failures, and next actions",
          "90-day ROI report, built in from day one",
        ],
        note:
          "Review and SMS workflows require opt-in, unsubscribe language, and realistic frequency caps before production use.",
      },
    ],
  },
  addons: [
    {
      name: "Dispatch Handoff Map",
      price: "Add-on - scoped in Assessment",
      desc:
        "Document exactly when automation should route to dispatcher, owner, technician, or normal office follow-up.",
      items: [
        "Urgency matrix",
        "Service-area rules",
        "Escalation paths",
        "Approved handoff copy",
      ],
    },
    {
      name: "Review Recovery Sprint",
      price: "Add-on - scoped in Assessment",
      desc:
        "Turn completed jobs into a simple, compliant review request system with owner visibility.",
      items: [
        "Review-link setup",
        "Email and SMS copy",
        "Job-type filtering",
        "Weekly review report",
      ],
    },
    {
      name: "Maintenance Plan Reactivation",
      price: "Add-on - scoped in Assessment",
      desc:
        "Import old customers or maintenance members and build a seasonal reactivation workflow.",
      items: [
        "Customer segment map",
        "Tune-up campaign copy",
        "Renewal reminders",
        "Conversion report",
      ],
    },
  ],
  complianceBadges: [
    {
      label: "TCPA-aware outreach",
      detail:
        "Production SMS and callback flows need opt-in, unsubscribe language, quiet hours, and frequency caps. We only text people who contacted your business directly (no purchased or shared lists), and opt-outs are honored whether someone replies STOP or just asks to stop.",
    },
    {
      label: "No diagnosis promises",
      detail:
        "AI scripts collect context and route leads; technicians and dispatchers remain responsible for diagnosis and commitments.",
    },
    {
      label: "Customer privacy boundary",
      detail:
        "Do not collect gate codes, payment cards, private notes, or sensitive emergency details through public demo forms.",
    },
    {
      label: "Dispatch-platform friendly",
      detail:
        "Designed to sit beside ServiceTitan, Housecall Pro, Jobber, FieldEdge, HubSpot, or a simple spreadsheet pipeline.",
    },
  ],
  toolsPolicy: {
    title: "Tools we use around the HVAC booking workflow",
    intro:
      "The demo uses n8n as the automation backbone and can connect to the contractor-owned CRM, phone, email, and dispatch stack after account access is approved.",
    approved: [
      {
        name: "Self-hosted n8n",
        detail:
          "Coordinates form intake, callback queues, follow-up sequences, review requests, and owner digests.",
      },
      {
        name: "Retell AI (or approved voice agent)",
        detail:
          "Handles scripted lead capture and callback support without promising diagnosis, pricing, or technician availability.",
      },
      {
        name: "HubSpot or existing CRM",
        detail:
          "Stores lead status, service type, urgency, quote stage, and follow-up tasks in the contractor's account.",
      },
      {
        name: "Twilio, Telnyx, Resend, or Gmail",
        detail:
          "Used for production messaging only after sender identity, opt-in, and unsubscribe rules are configured.",
      },
    ],
    blocked: [
      {
        name: "Unapproved personal cell routing",
        detail:
          "Avoid routing customer emergencies to a personal phone without hours, ownership, and backup rules.",
      },
      {
        name: "AI pricing or diagnosis",
        detail:
          "The demo does not let AI quote repair prices, diagnose equipment, or promise dispatch windows without approved business rules.",
      },
      {
        name: "Unregistered automated SMS",
        detail:
          "Even one automated text requires A2P 10DLC registration. Registration, opt-in records, and unsubscribe handling come first in every build; no SMS goes live before it.",
      },
      {
        name: "Hidden lead ownership",
        detail:
          "ClearAutomations should not own the contractor's phone number, CRM, workflow exports, or customer list.",
      },
    ],
  },
  resultsModel: {
    eyebrow: "Illustrative results",
    title: "What a 150-lead/month HVAC shop could recover",
    note:
      "Shops that fix speed-to-lead typically recover 28-30% of lost leads. At HVAC ticket sizes, that models out to $15,000 or more in monthly recovered revenue for a 150-lead shop. This is a planning model, not a case study.",
    rows: [
      {
        metric: "After-hours emergency calls",
        today: "Voicemail, owner cell, or next-day callback",
        modeled: "Callback task and routing in under 2 minutes",
      },
      {
        metric: "Missed estimate requests",
        today: "One manual reply, then no structured follow-up",
        modeled: "Follow-up sequence with lost-reason tagging",
      },
      {
        metric: "Maintenance renewals",
        today: "Seasonal reminders when someone remembers",
        modeled: "Segmented renewal and tune-up campaign",
      },
      {
        metric: "Owner visibility",
        today: "CRM checks and call log guesswork",
        modeled: "Weekly digest of leads, booked jobs, and leaks",
      },
    ],
  },
  faq: [
    {
      q: "Will this replace my dispatcher?",
      a:
        "No. The system captures and prioritizes leads, then routes them to your approved dispatcher, owner, or CRM process.",
    },
    {
      q: "Can it handle after-hours emergency calls?",
      a:
        "Yes, as an intake and routing layer. It should collect context, score urgency, and trigger the right callback path without promising diagnosis or availability.",
    },
    {
      q: "Does this work with ServiceTitan, Jobber, or Housecall Pro?",
      a:
        "The first build can run beside those systems. Direct integrations depend on the platform, account access, and API/export options.",
    },
    {
      q: "Can it send SMS follow-ups?",
      a:
        "Yes, after opt-in, unsubscribe language, sender setup, and frequency caps are configured. The demo keeps those rules visible instead of burying them.",
    },
    {
      q: "What does the audit form collect?",
      a:
        "Only business workflow information: company, contact, service area, tools, lead volume, after-hours process, and the biggest revenue leak.",
    },
  ],
  cta: {
    eyebrow: "Start with the missed-call lane",
    title: "Request an HVAC workflow audit.",
    body:
      "We will review your lead intake, after-hours coverage, callback speed, estimate follow-up, review flow, and maintenance plan opportunities. The big platforms are built for big operations. I personally build and run yours, and you can call me.",
    note:
      "Do not include payment details, private customer notes, gate codes, access instructions, or emergency details that should remain inside your dispatch system.",
  },
};
