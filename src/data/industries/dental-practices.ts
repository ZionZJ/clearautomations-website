import type { Industry } from "./types";

export const dentalPracticesIndustry: Industry = {
  slug: "dental-practices",
  name: "Dental Practices",
  form: {
    kind: "dental-practice",
    ctaLabel: "Dental Audit",
  },
  landingCopy: {
    addonsEyebrow: "Add to any phase",
    addonsTitle: "Compliance-aware services around the dental workflow.",
    blockedPolicyTitle: "Not used for PHI workflows",
    faqTitle: "Before patient data enters the system",
    footerTagline:
      "ClearAutomations - dental practice automation for Texas operators",
    proofCards: [
      {
        headline: "You own the workflow.",
        body:
          "Your website, PMS, CRM, reminders, workflows, templates, and patient list stay in your accounts.",
      },
      {
        headline: "The public lane stays non-PHI.",
        body:
          "The first audit collects practice and business data only, while deeper patient workflows stay fake-data demos until the BAA path is approved.",
      },
      {
        headline: "Built around front desk leaks.",
        body:
          "The system focuses on missed calls, no-shows, recall, treatment-plan follow-up, schedule gaps, and owner visibility.",
      },
    ],
  },
  metadata: {
    title: "Dental Practice Automation | Clear Automations",
    description:
      "Non-PHI front desk automation demos for dental practices, with fake-data recall, no-show, and treatment-plan recovery workflows.",
    openGraph: {
      title: "Dental Practice Automation | Clear Automations",
      description:
        "Missed-call, no-show, recall, and treatment-plan recovery workflows for Texas dental practices.",
      url: "https://clearautomations.com/industries/dental-practices",
      type: "website",
    },
  },
  hero: {
    eyebrow: "Texas-first automation for dental practices",
    title: "Your schedule is leaking revenue before treatment even starts.",
    mutedTitle: "We help recover the front desk workflow around it.",
    body:
      "Clear Automations builds non-PHI public audit flows and fake-data workflow demos for dental practices that want faster response, fewer empty chairs, better recall, and clearer treatment-plan follow-up.",
    primaryCta: "Request a Dental-Practice Audit",
    secondaryCta: "See the Recovery Phases",
    stats: [
      { value: "2 min", label: "target callback task" },
      { value: "0 PHI", label: "collected on public site" },
      { value: "8", label: "demo workflows ready" },
    ],
  },
  problems: {
    eyebrow: "The leak is operational",
    title: "Dental practices do not need more front desk busywork.",
    items: [
      {
        num: "01",
        text:
          "New-patient calls get missed during chairside rushes, lunch breaks, and end-of-day overflow.",
      },
      {
        num: "02",
        text:
          "Cancellations and no-shows leave empty production time unless the team has a fast, organized recovery path.",
      },
      {
        num: "03",
        text:
          "Recall lists and treatment plans are valuable, but follow-up often depends on whoever has time after the day is already full.",
      },
    ],
    callout:
      "The first public workflow stays outside PHI. Patient-like recall, no-show, and treatment-plan demos use fake data only until BAA, vendor, hosting, access, and retention controls are approved.",
  },
  phases: {
    eyebrow: "Three phases. One compliance boundary.",
    title: "Start with the public front desk.",
    mutedTitle: "Move into patient workflows only when ready.",
    note:
      "Phase 1 is available as a non-PHI workflow. Phase 2 and Phase 3 require compliance prerequisites before production launch.",
    items: [
      {
        phase: "Phase 1",
        name: "New-Patient Lead Recovery",
        setup: "$4,500",
        monthly: "$450/mo",
        timeline: "2-4 weeks",
        result: "Faster response to missed calls and public inquiries",
        status: "Available now - non-PHI only",
        featured: true,
        items: [
          "Dental practice audit form collecting only business contact data",
          "Missed-call callback queue for new-patient inquiries",
          "Front desk workflow map for calls, web forms, and booking requests",
          "Non-clinical owner dashboard for response speed and lead outcomes",
          "Approved copy boundaries for what automation can and cannot ask",
        ],
        note:
          "The public workflow avoids patient names, symptoms, treatment details, insurance IDs, appointment reasons, clinical notes, x-rays, and payment card data.",
      },
      {
        phase: "Phase 2",
        name: "No-Show and Recall Recovery",
        setup: "$7,500",
        monthly: "$750/mo",
        timeline: "Limited pilot",
        result: "Fewer empty chairs and cleaner hygiene follow-up",
        status: "Fake-data demo until BAA readiness",
        items: [
          "Cancellation and no-show recovery workflow",
          "Hygiene recall segmentation and reactivation workflow",
          "Schedule gap fill workflow using approved contact lists",
          "PMS handoff design where supported",
          "Opt-in and message-frequency review",
        ],
        note:
          "Production patient workflows require the approved BAA chain, vendor review, access controls, retention settings, and practice-approved copy.",
      },
      {
        phase: "Phase 3",
        name: "Treatment Plan Recovery",
        setup: "$9,500",
        monthly: "$1,250/mo",
        timeline: "Limited pilot",
        result: "More diagnosed work moved into scheduled care",
        status: "Fake-data demo until clinical boundary review",
        items: [
          "Treatment-plan follow-up classification using approved records only",
          "Patient-friendly next-step reminders approved by the practice",
          "Financial coordinator task queue",
          "Unscheduled treatment dashboard",
          "Post-visit review request workflow",
        ],
        note:
          "AI does not recommend treatment, discuss clinical care, or make insurance/payment promises.",
      },
    ],
  },
  addons: [
    {
      name: "HIPAA Readiness Review",
      price: "$2,000 flat",
      desc:
        "A practical readiness pass before any patient-facing production workflow is considered.",
      items: [
        "Vendor inventory",
        "Workflow map",
        "Data boundary review",
        "Remediation priorities",
      ],
    },
    {
      name: "Front Desk Script Pack",
      price: "$1,000 flat",
      desc:
        "Approved language for missed calls, reminders, recall, and treatment-plan follow-up.",
      items: [
        "Callback scripts",
        "Reminder copy",
        "Escalation rules",
        "Staff-facing SOPs",
      ],
    },
    {
      name: "Schedule Gap Sprint",
      price: "$1,500 flat",
      desc:
        "A focused build to surface near-term openings and match them with approved fake-data demo segments first.",
      items: [
        "Gap logic",
        "Eligible segment map",
        "Message cadence",
        "Owner report",
      ],
    },
  ],
  complianceBadges: [
    {
      label: "Non-PHI public audit",
      detail:
        "The public form collects practice and business workflow data only.",
    },
    {
      label: "BAA before patient workflows",
      detail:
        "Recall, appointment, and treatment-plan production flows require approved BAA and vendor controls.",
    },
    {
      label: "No clinical advice by AI",
      detail:
        "AI may route and remind; it does not diagnose, recommend treatment, or discuss care decisions.",
    },
    {
      label: "Patient data boundary",
      detail:
        "Demo workflows use fake data until access controls, retention, opt-in, and approved copy are complete.",
    },
  ],
  toolsPolicy: {
    title: "Tools we use around the dental workflow",
    intro:
      "The demo uses self-hosted n8n as the workflow backbone. Any production patient workflow must use BAA-covered vendors and practice-approved data handling.",
    approved: [
      {
        name: "Self-hosted n8n",
        detail:
          "Coordinates intake, callback, reminder, recall, treatment-plan, review, and reporting workflows after hosting controls are approved.",
      },
      {
        name: "Retell AI (HIPAA-included with self-service BAA)",
        detail:
          "Voice agent for new-patient callback. HIPAA included on standard paid plans; BAA via self-service portal. Replaces Vapi for production deployment because Vapi's $1,000/mo flat HIPAA add-on is uneconomic at SMB dental volume.",
      },
      {
        name: "Anthropic HIPAA-eligible API or OpenAI HIPAA-eligible API",
        detail:
          "Only HIPAA-eligible API use cases and eligible zero-retention endpoints after BAA approval. Anthropic Claude preferred for patient-friendly copy generation.",
      },
      {
        name: "Twilio Security or Enterprise Edition",
        detail:
          "Required if SMS or voice could ever carry patient-specific information. Replaces Telnyx for healthcare verticals; ~30% cost premium is the cost of the BAA.",
      },
      {
        name: "Practice-owned PMS or CRM",
        detail:
          "Production integrations depend on Dentrix, Open Dental, Eaglesoft, Curve, HubSpot, or export options available to the practice.",
      },
    ],
    blocked: [
      {
        name: "Public patient intake",
        detail:
          "The public audit form does not collect patient symptoms, treatment details, insurance IDs, or appointment reasons.",
      },
      {
        name: "AI diagnosis or treatment advice",
        detail:
          "AI does not recommend clinical care, interpret x-rays, or discuss diagnoses.",
      },
      {
        name: "Standard automation tools for PHI",
        detail:
          "Avoid non-BAA paths for patient-facing workflows.",
      },
      {
        name: "Hidden data ownership",
        detail:
          "Clear Automations should not own the practice's phone number, PMS exports, workflow exports, or contact list.",
      },
    ],
  },
  resultsModel: {
    eyebrow: "Illustrative results",
    title: "What a busy dental front desk could make visible",
    note:
      "This is a planning model, not a case study. Replace it with approved client numbers after a pilot.",
    rows: [
      {
        metric: "Missed calls",
        today: "Voicemail and manual callback when time allows",
        modeled: "Callback task and new-patient priority in under 2 minutes",
      },
      {
        metric: "No-shows and cancellations",
        today: "Manual rescheduling and open-chair scrambling",
        modeled: "Fake-data demo recovery queue and schedule-gap logic",
      },
      {
        metric: "Hygiene recall",
        today: "Batch outreach when the team has capacity",
        modeled: "Segmented recall workflow after compliance readiness",
      },
      {
        metric: "Treatment plans",
        today: "Coordinator follow-up spread across notes and memory",
        modeled: "Stalled-plan dashboard and approved next-step tasks",
      },
    ],
  },
  faq: [
    {
      q: "Does the public form collect PHI?",
      a:
        "No. It collects practice and business workflow data only. Do not include patient names, treatment details, insurance IDs, appointment reasons, x-rays, or clinical notes.",
    },
    {
      q: "Will you sign a BAA?",
      a:
        "BAA review is required before production patient workflows begin. The public audit and demo workflows are intentionally non-PHI or fake-data only.",
    },
    {
      q: "Can this work with my practice software?",
      a:
        "The first build can run beside your current tools. Direct integrations depend on your PMS, account access, export options, and compliance approval.",
    },
    {
      q: "Can AI talk about dental treatment?",
      a:
        "No. AI can help route, remind, classify, and summarize approved workflow data. It does not diagnose, recommend treatment, interpret x-rays, or discuss clinical care.",
    },
    {
      q: "What does the audit form collect?",
      a:
        "Only practice and business data: practice name, contact, website, provider count, current tools, monthly volume, and the biggest workflow leak.",
    },
  ],
  cta: {
    eyebrow: "Start with the non-PHI lane",
    title: "Request a dental-practice audit.",
    body:
      "We will review your missed-call flow, new-patient response speed, cancellation/no-show recovery, recall workflow, treatment-plan follow-up, and owner visibility.",
    note:
      "Do not include patient names, symptoms, diagnoses, treatment details, insurance IDs, appointment reasons, clinical notes, x-rays, or payment card data.",
  },
};
