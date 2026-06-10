import type { Industry } from "./types";

export const plumbingContractorsIndustry: Industry = {
  slug: "plumbing-contractors",
  name: "Plumbing Contractors",
  form: {
    kind: "plumbing-contractor",
    ctaLabel: "Plumbing Audit",
  },
  landingCopy: {
    addonsEyebrow: "Add to the build",
    addonsTitle: "Revenue recovery services around the core plumbing build.",
    blockedPolicyTitle: "Not used for production dispatch",
    faqTitle: "Before the first emergency call is routed",
    footerTagline:
      "ClearAutomations: the front desk for Texas plumbing contractors",
    proofCards: [
      {
        headline: "You own the system.",
        body:
          "Your website, CRM, phone numbers, workflows, scripts, and handoff docs stay in your accounts.",
      },
      {
        headline: "Emergencies get priority.",
        body:
          "The workflow separates burst-pipe and no-water emergencies from drips, quotes, and routine service.",
      },
      {
        headline: "Built for the 2am call.",
        body:
          "The demo is designed around after-hours water emergencies, weekend overflow, and the speed that wins the high-ticket job.",
      },
    ],
  },
  metadata: {
    title: "Plumbing Contractor Automation | ClearAutomations",
    description:
      "Missed-call recovery, emergency intake, estimate follow-up, and review automation for Texas plumbing contractors.",
    openGraph: {
      title: "Plumbing Contractor Automation | ClearAutomations",
      description:
        "Automation systems that help Texas plumbing contractors respond faster, book more emergency jobs, and recover stale estimates.",
      url: "https://clearautomations.com/industries/plumbing-contractors",
      type: "website",
    },
  },
  hero: {
    eyebrow: "Texas-first automation for plumbing contractors",
    title: "When water is coming through the ceiling, they call the next plumber.",
    mutedTitle: "We answer before they hang up.",
    body:
      "ClearAutomations is the front desk for plumbing contractors. We build the AI employee that answers every call, recovers missed leads, follows up on estimates, and keeps reviews coming, for companies that win on speed when the emergency hits.",
    primaryCta: "Request a Plumbing Workflow Audit",
    secondaryCta: "See How It Works",
    stats: [
      { value: "2 min", label: "target callback task" },
      { value: "85%", label: "of voicemail callers never call back" },
      { value: "$285-1,200", label: "value of each missed call" },
    ],
  },
  problems: {
    eyebrow: "The leak is speed-to-lead",
    title: "Plumbing owners do not need more software. They need to stop missing emergencies.",
    items: [
      {
        num: "01",
        text:
          "Burst-pipe and no-water calls come in nights and weekends, when the job is biggest and the caller is most ready to book whoever answers first. Emergency plumbing calls close at 12-16%, the highest rate in the trades, but only for the company that picks up.",
      },
      {
        num: "02",
        text:
          "Estimates for repipes, water heaters, and sewer work get quoted once, then sink into a dispatcher's memory or an unread inbox.",
      },
      {
        num: "03",
        text:
          "Past customers, warranty follow-ups, and recurring service opportunities are valuable, but rarely get consistent follow-up.",
      },
    ],
    callout:
      "The first build focuses on lead response, emergency routing, and owner visibility. It does not replace your dispatcher, field-service platform, or licensed-plumber judgment.",
  },
  phases: {
    eyebrow: "Start with the $1,000 AI Assessment.",
    title: "First we map your revenue leak. Then we build.",
    mutedTitle: "Emergency capture, then follow-up, then retention.",
    note:
      "Everything starts with the $1,000 AI Assessment. We quantify exactly how many calls you're missing and what each is worth, then build from there. The fee credits toward the build. The build below is what your AI front desk looks like for plumbing, scoped in your Assessment with 4+ integrations wired in (phone, CRM, SMS, and your calendar or field-service platform). By month 3 you get a simple ROI report: the booked jobs and recovered revenue the system actually generated. Production launch requires real phone, CRM, dispatch, and opt-in settings to be reviewed first.",
    items: [
      {
        phase: "Build · Stage 1",
        name: "Emergency Call Capture",
        setup: "Scoped in Assessment",
        monthly: "Scoped in Assessment",
        timeline: "2-3 weeks",
        result: "Faster callbacks and fewer lost emergency jobs",
        status: "The core build - demo workflow ready",
        featured: true,
        items: [
          "Emergency intake form with urgency scoring (gas / sewage / flooding / burst pipe / no water / leak / routine)",
          "Missed-call callback queue for after-hours and weekend overflow leads",
          "Missed-call text-back SMS within seconds (live only after A2P 10DLC registration, with opt-out language)",
          "Retell AI voice script for emergency qualification and booking handoff",
          "HubSpot pipeline for new lead, scheduled, quoted, won, and lost",
          "Owner digest for response speed, booked jobs, and dropped leads",
        ],
        note:
          "The system prioritizes speed and routing. It should not promise availability, pricing, or diagnosis without your approved rules. Health-and-safety branches (gas, sewage backup, flooding) route to a human immediately. The AI never holds a true emergency.",
      },
      {
        phase: "Build · Stage 2",
        name: "Estimate Follow-Up",
        setup: "Scoped in Assessment",
        monthly: "Scoped in Assessment",
        timeline: "2 weeks",
        result: "More quotes turned into booked jobs",
        status: "Added after CRM and quote process review",
        items: [
          "Stale estimate follow-up sequence (repipe, water heater, sewer, fixture)",
          "Higher-ticket quote reminders by job type and urgency",
          "Finance-option reminder copy approved by the contractor",
          "Lost-reason tagging for price, timing, competitor, or no response",
          "Weekly quote recovery dashboard",
        ],
        note:
          "This stage works best when the company already tracks estimates or can export them from its field-service platform.",
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
          "Post-job review requests by job type",
          "Service-membership and maintenance-plan renewal reminders",
          "Past-customer reactivation campaigns (water heater age, drain service cadence)",
          "Warranty follow-up sequences",
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
        "Document exactly when automation should route to dispatcher, owner, on-call plumber, or normal office follow-up.",
      items: [
        "Urgency matrix (gas / sewage / no-water / leak / routine)",
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
      name: "Past-Customer Reactivation",
      price: "Add-on - scoped in Assessment",
      desc:
        "Import old customers or service members and build a reactivation workflow around equipment age and service cadence.",
      items: [
        "Customer segment map",
        "Reactivation campaign copy",
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
      label: "No diagnosis or pricing promises",
      detail:
        "AI scripts collect context and route leads; licensed plumbers and dispatchers remain responsible for diagnosis, pricing, and commitments.",
    },
    {
      label: "Safety-branch routing",
      detail:
        "Gas smells, sewage backups, and flooding route to the right human path immediately. The AI never holds a true emergency.",
    },
    {
      label: "Dispatch-platform friendly",
      detail:
        "Designed to sit beside ServiceTitan, Housecall Pro, Jobber, FieldEdge, HubSpot, or a simple spreadsheet pipeline.",
    },
  ],
  toolsPolicy: {
    title: "Tools we use around the plumbing booking workflow",
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
          "Handles scripted lead capture and callback support without promising diagnosis, pricing, or plumber availability.",
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
        name: "Holding a true emergency",
        detail:
          "Gas, sewage, and flooding emergencies must route to a human path immediately, never sit in an AI queue.",
      },
      {
        name: "AI pricing or diagnosis",
        detail:
          "The demo does not let AI quote repair prices, diagnose plumbing issues, or promise dispatch windows without approved business rules.",
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
    title: "What a 150-lead/month plumbing shop could recover",
    note:
      "Shops that fix speed-to-lead typically recover 28-30% of lost leads. At $285-1,200 per missed call, that models out to thousands in monthly recovered revenue for a 150-lead shop. This is a planning model, not a case study.",
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
        metric: "Past-customer revenue",
        today: "Reactivation when someone remembers",
        modeled: "Segmented reactivation by equipment age and cadence",
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
        "No. The system captures and prioritizes leads, then routes them to your approved dispatcher, owner, or CRM process. A true emergency always reaches a human fast.",
    },
    {
      q: "Can it handle after-hours emergency calls?",
      a:
        "Yes, as an intake and routing layer. It collects context, scores urgency, and triggers the right callback path without promising diagnosis or availability. Gas, sewage, and flooding route straight to a human.",
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
    eyebrow: "Start with the emergency lane",
    title: "Request a plumbing workflow audit.",
    body:
      "We will review your lead intake, after-hours coverage, callback speed, estimate follow-up, review flow, and past-customer reactivation opportunities. The big platforms are built for big operations. I personally build and run yours, and you can call me.",
    note:
      "Do not include payment details, private customer notes, gate codes, access instructions, or emergency details that should remain inside your dispatch system.",
  },
};
