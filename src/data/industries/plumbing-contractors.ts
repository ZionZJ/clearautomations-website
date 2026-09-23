import type { Industry } from "./types";

export const plumbingContractorsIndustry: Industry = {
  slug: "plumbing-contractors",
  name: "Plumbing Contractors",
  form: {
    kind: "plumbing-contractor",
    ctaLabel: "Free Missed-Call Snapshot",
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
      url: "https://www.clearautomations.com/industries/plumbing-contractors",
      type: "website",
    },
  },
  hero: {
    eyebrow: "Texas-first automation for plumbing contractors",
    title: "When water is coming through the ceiling, they call the next plumber.",
    mutedTitle: "We answer before they hang up.",
    body:
      "ClearAutomations manages missed-call recovery, lead response, estimate follow-up, booking, and CRM/FSM workflows for plumbing companies. We check the systems you already have before adding custom infrastructure.",
    primaryCta: "Request a Free Missed-Call Snapshot",
    secondaryCta: "See How It Works",
    stats: [
      { value: "1 page", label: "public-data Snapshot" },
      { value: "1 day", label: "typical delivery" },
      { value: "$0", label: "starting price" },
    ],
  },
  problems: {
    eyebrow: "The leak is response time",
    title: "Plumbing owners do not need more software. They need to stop missing emergencies.",
    items: [
      {
        num: "01",
        text:
          "Burst-pipe and no-water calls come in nights and weekends, when the caller is highly motivated to reach someone. The size and value of that gap should be measured from the shop's own call and booking records.",
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
    eyebrow: "One offer ladder",
    title: "Observe the gap. Validate it with real data.",
    mutedTitle: "Build only what the plumbing operation can support and measure.",
    note:
      "Every engagement follows the same ladder. Implementation scope and price come from call volume, locations, integrations, and workflows rather than a feature menu.",
    items: [
      {
        phase: "Start here",
        name: "Free Missed-Call Snapshot",
        setup: "Free",
        monthly: "-",
        timeline: "1 business day",
        result: "See observable call and booking gaps before sharing internal data",
        status: "Public information only",
        items: [
          "Published hours and after-hours path",
          "Visible call and booking options",
          "Observable gaps separated from assumptions",
          "Real data needed to validate the opportunity",
        ],
        note:
          "Focused only on observable front-desk revenue leakage, with no invented revenue-loss claim.",
      },
      {
        phase: "Validate with real data",
        name: "Revenue-Recovery Blueprint",
        setup: "$1,000",
        monthly: "-",
        timeline: "5 business days",
        result: "Know what is leaking, what can be recovered, and what to build",
        status: "45-minute discovery and actual-data analysis",
        featured: true,
        items: [
          "Call, lead, booking, and estimate baseline",
          "Current-state workflow map",
          "ROI range with assumptions shown",
          "Prioritized implementation and measurement plan",
        ],
        note:
          "The full $1,000 credits toward implementation within 60 days.",
      },
      {
        phase: "Principal engagement",
        name: "Front Desk Revenue Recovery",
        setup: "$5,000-$10,000",
        monthly: "$1,500-$3,000",
        timeline: "Scoped in Blueprint",
        result: "A managed workflow tied to the verified plumbing baseline",
        status: "Priced from volume, locations, integrations, and workflows",
        items: [
          "Missed-call and overflow handling",
          "New-lead and open-estimate follow-up",
          "Approved human handoffs and exception tasks",
          "Reliability and performance reporting",
        ],
        note:
          "Urgent gas, sewage, flooding, and no-water situations follow approved human escalation rules; the system does not diagnose.",
      },
      {
        phase: "Expansion after proof",
        name: "Advanced Workflow Expansion",
        setup: "Scoped",
        monthly: "Typically $5,000",
        timeline: "After visible ROI",
        result: "Add a measured second workflow for a qualified operation",
        status: "Not a front-door offer",
        items: [
          "Requires baseline metrics and a stable original system",
          "Reserved for higher-volume or multi-location operations",
          "Adds one quantified workflow at a time",
          "Keeps explicit human ownership and handoffs",
        ],
        note:
          "Expansion is proposed only when the original system has demonstrated value and the next workflow has a defensible business case.",
      },
    ],
  },
  addons: [
    {
      name: "Dispatch Handoff Map",
      price: "Component - scoped in Blueprint",
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
      price: "Component - scoped in Blueprint",
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
      price: "Component - scoped in Blueprint",
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
        "Designed to sit beside the client's current dispatch, booking, and lead-tracking systems, using native capabilities first.",
    },
  ],
  resultsModel: {
    eyebrow: "Measurement plan",
    title: "What the Blueprint measures before and after launch",
    note:
      "No performance or revenue claim is made before the shop's real calls, estimates, bookings, and job data establishes a baseline.",
    rows: [
      {
        metric: "After-hours emergency calls",
        today: "Voicemail, owner cell, or next-day callback",
        modeled: "Response time, owner assignment, handoff, and outcome recorded",
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
      q: "Does this work with my current dispatch or field-service system?",
      a:
        "The Blueprint reviews the system's native capabilities, account access, and available integrations before recommending any additional connection or workflow.",
    },
    {
      q: "Can it send SMS follow-ups?",
      a:
        "Yes, after opt-in, unsubscribe language, sender setup, and frequency caps are configured. The demo keeps those rules visible instead of burying them.",
    },
    {
      q: "What does the Snapshot form collect?",
      a:
        "Business name, website, email, an optional phone number, and one front-desk challenge. The Snapshot itself uses public information and does not require customer data.",
    },
  ],
  cta: {
    eyebrow: "Start with the emergency lane",
    title: "Request a free Missed-Call Snapshot.",
    body:
      "We will use public information to review your published hours, call and booking paths, observable gaps, and the real operating data needed to validate the opportunity.",
    note:
      "Do not include payment details, private customer notes, gate codes, access instructions, or emergency details that should remain inside your dispatch system.",
  },
};
