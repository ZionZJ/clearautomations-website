import type { Industry } from "./types";

export const therapistsIndustry: Industry = {
  slug: "therapists",
  name: "Therapists",
  form: {
    kind: "therapist-practice",
    ctaLabel: "Practice Audit",
  },
  metadata: {
    title: "Therapist Practice Automation | Clear Automations",
    description:
      "Non-PHI front desk automation for therapy practices, with BAA-ready intake and revenue recovery pilots planned for later phases.",
    openGraph: {
      title: "Therapist Practice Automation | Clear Automations",
      description:
        "Speed-to-lead, consult reminders, directory checks, and compliance-aware automation for therapy practices.",
      url: "https://clearautomations.com/industries/therapists",
      type: "website",
    },
  },
  hero: {
    eyebrow: "Texas-first automation for therapy practices",
    title:
      "Your therapy practice is leaking revenue to no-shows and unfiled claims.",
    mutedTitle: "We fix the workflow around it.",
    body:
      "Clear Automations builds front desk systems that respond fast, reduce missed consults, and prepare your practice for deeper HIPAA-covered automation when the legal and technical prerequisites are complete.",
    primaryCta: "Request a Therapist-Practice Audit",
    secondaryCta: "See the Phases",
    stats: [
      { value: "Under 30 min", label: "target lead response" },
      { value: "0 PHI", label: "collected on public site" },
      { value: "2-3 wks", label: "to Phase 1 go-live" },
    ],
  },
  problems: {
    eyebrow: "The leak is operational",
    title: "Most therapy practices do not need more admin tasks.",
    items: [
      {
        num: "01",
        text:
          "Prospective clients reach out after hours, then book with whoever responds first.",
      },
      {
        num: "02",
        text:
          "Consult reminders, directory updates, and lead follow-up live in inboxes and memory.",
      },
      {
        num: "03",
        text:
          "The high-value work - intake, eligibility, and session-to-claim reconciliation - sits behind the PHI line and needs a serious BAA chain.",
      },
    ],
    callout:
      "Phase 1 stays outside PHI so it can ship quickly. Phase 2 and Phase 3 stay limited until BAA, insurance, hosting, subprocessors, and internal risk analysis are complete.",
  },
  phases: {
    eyebrow: "Three phases. One compliance boundary.",
    title: "Start with the public front desk.",
    mutedTitle: "Move behind the PHI line only when ready.",
    note:
      "Phase 1 is available as a non-PHI workflow. Phase 2 and Phase 3 require the compliance prerequisites listed on this page before production launch.",
    items: [
      {
        phase: "Phase 1A",
        name: "Admin-Augmented Front Desk",
        setup: "$1,500-$2,500",
        monthly: "$200-$300/mo",
        timeline: "2 weeks",
        result: "Your admin gets the lead in seconds; the system handles the rest",
        status: "Available now - non-PHI only",
        featured: true,
        items: [
          "PHI-clean replacement contact form",
          "Admin notification within seconds of submission - email + SMS + HubSpot task",
          "EN + ES intake playbook with qualification checklist included in base",
          "Crisis-keyword detection routes to URGENT priority and CCs the practice owner",
          "Reminder cadence in your voice, English or Spanish",
          "Monthly directory health check plus Friday weekly metrics email",
        ],
        note:
          "Your admin handles first-contact calls; the system handles notifications, CRM, reminders, and directory monitoring. Best for practices where human first-contact matters or admin bandwidth is available.",
      },
      {
        phase: "Phase 1B",
        name: "AI Front Desk",
        setup: "$3,500-$5,000",
        monthly: "$400-$600/mo",
        timeline: "3 weeks",
        result: "Autonomous 24/7 callback in under 2 minutes",
        status: "Available now - non-PHI only",
        items: [
          "Everything in Phase 1A, plus the AI layer",
          "AI voice agent calls back inside 2 minutes, 24/7, English or Spanish",
          "16-phrase crisis-branch test required for cutover",
          "STIR/SHAKEN + CNAM registration and Retell HIPAA tier upgrade path for Phase 2",
          "Best for higher-volume practices or practices without bilingual admin staff",
        ],
        note:
          "Most practices start with Phase 1A and upgrade to Phase 1B at 90-180 days when admin bandwidth becomes the bottleneck.",
      },
      {
        phase: "Phase 2",
        name: "Intake to First Session",
        setup: "$7,500",
        monthly: "$750/mo",
        timeline: "Limited pilot",
        result: "BAA-covered intake and routing",
        status: "Limited pilot after BAA readiness",
        items: [
          "BAA-covered intake form replacement using approved tooling only",
          "EHR handoff design for SimplePractice, Jane, or TherapyNotes where supported",
          "Eligibility verification workflow design",
          "Consent collection and e-signature pipeline",
          "Clinician routing by specialty and accepted payer",
        ],
        note:
          "Phase 2 is not generally available until BAA template, insurance, hosting, subprocessors, and risk analysis are complete.",
      },
      {
        phase: "Phase 3",
        name: "Revenue Recovery",
        setup: "$12,000",
        monthly: "$1,500/mo",
        timeline: "Q3 2026 target",
        result: "Session-to-claim reconciliation",
        status: "Planned for group practices",
        items: [
          "Session-to-claim reconciliation audit and automation",
          "Private-pay superbill generation workflow",
          "Denial management and resubmit triggers",
          "Outcome tracking pipeline design",
          "AI scribe handoff review where a BAA-covered vendor is already in use",
        ],
        note:
          "Psychotherapy notes stay out of scope even with a BAA.",
      },
    ],
  },
  addons: [
    {
      name: "HIPAA Risk Analysis",
      price: "$2,000 annual",
      desc:
        "A practical annual risk analysis and remediation report for the systems in scope.",
      items: [
        "Asset inventory",
        "Workflow map",
        "Risk register",
        "Remediation priorities",
      ],
    },
    {
      name: "Modality Templates",
      price: "$1,500 flat",
      desc:
        "Custom workflow documentation templates for practices using EMDR, ACT, DBT, or similar modalities.",
      items: [
        "Admin handoff templates",
        "Non-clinical checklist language",
        "Staff-facing SOPs",
        "Review session",
      ],
    },
    {
      name: "Staff Training",
      price: "$750 half-day",
      desc:
        "Hands-on walkthroughs so your team knows what the automations do, where they stop, and when to intervene.",
      items: [
        "Workflow orientation",
        "Escalation paths",
        "Data handling boundaries",
        "Q&A and recording",
      ],
    },
    {
      name: "Website Optimization Tune-Up",
      price: "$2,500-$3,500 fixed, 2 weeks",
      desc:
        "Surgical website improvements layered on your existing site. Sharpens the conversion path so the Phase 1 automation has a strong front door.",
      items: [
        "PHI-clean replacement contact form",
        "Five specialty landing pages with research-grounded copy",
        "Pricing transparency and CTA hierarchy fix",
        "LocalBusiness and per-clinician schema markup",
        "Header crisis-line callout aligned with voice agent",
        "Blog post CTA closers and WCAG 2.1 AA accessibility pass",
      ],
    },
  ],
  complianceBadges: [
    {
      label: "BAA available before PHI workflows begin",
      detail: "Phase 2/3 do not launch until the BAA chain is complete.",
    },
    {
      label: "Designed around Texas HB 300 requirements",
      detail: "Texas-first workflow language, training, and data handling posture.",
    },
    {
      label: "Proposed-rule readiness",
      detail: "MFA, encryption, asset inventory, scans, pentest, and recovery planning.",
    },
    {
      label: "No psychotherapy notes",
      detail: "Explicitly out of scope even for BAA-covered production work.",
    },
  ],
  toolsPolicy: {
    title: "Tools we use, and tools we will not touch for PHI",
    intro:
      "The automation backbone for PHI workflows must be self-hosted n8n plus BAA-covered vendors. Phase 1 can use a separate non-PHI path.",
    // Internal hosting-layer doctrine (not surfaced to clients): CA's own personal/internal
    // infra runs on Hetzner (cheap, non-PHI). Client-owned non-PHI Phase 1 deployments
    // default to DigitalOcean (SMB-familiar + in-vendor HIPAA upgrade path to DO
    // Standard/Premium Support + BAA). Phase 2/3 PHI workloads land on AWS / GCP /
    // Azure HIPAA-eligible (Hetzner has no HIPAA BAA path; DO basic tier has none either).
    // See `docs/strategic-review-2026-05.md` Tier D5.
    approved: [
      {
        name: "Self-hosted n8n on AWS or GCP",
        detail:
          "Used for PHI workflows only when hosted on BAA-covered infrastructure with retention, backup, and access controls configured. DigitalOcean has no general HIPAA BAA — disqualified for therapist Phase 2/3.",
      },
      {
        name: "Retell AI (HIPAA-included with self-service BAA)",
        detail:
          "Voice agent for non-PHI consult callback. HIPAA included on standard paid plans; BAA via self-service portal. Production target for both Phase 1 callback and any Phase 2+ patient-facing voice work. Crisis-branch routing (988 / 911) is configured at the agent level.",
      },
      {
        name: "Anthropic HIPAA-eligible API or OpenAI HIPAA-eligible API",
        detail:
          "Only HIPAA-eligible API use cases and eligible zero-retention endpoints after BAA approval. Anthropic Claude preferred for clinically-conservative copy generation.",
      },
      {
        name: "Twilio Security or Enterprise Edition",
        detail:
          "Required if SMS or voice could ever carry PHI. ~30% cost premium over standard Twilio is the cost of the BAA.",
      },
      {
        name: "Google Workspace or Microsoft 365",
        detail:
          "Only with the appropriate BAA and least-privilege access.",
      },
    ],
    blocked: [
      {
        name: "Cloud n8n",
        detail:
          "No BAA path for PHI workflows; self-hosting is required.",
      },
      {
        name: "Zapier and Make",
        detail:
          "No BAA path for this use case; avoid for PHI-touching automation.",
      },
      {
        name: "Calendly",
        detail:
          "Avoid for PHI-adjacent scheduling; use consult-only non-PHI flows or BAA-eligible alternatives.",
      },
      {
        name: "Standard Notion or Airtable",
        detail:
          "Enterprise BAA paths only; standard tiers are not used for PHI.",
      },
    ],
  },
  resultsModel: {
    eyebrow: "Illustrative results",
    title: "What a 200-session/month practice could recover",
    note:
      "This is a planning model, not a case study. Replace it with approved client numbers after a pilot.",
    rows: [
      {
        metric: "Lead response after hours",
        today: "Inbox wait until next business day",
        modeled: "Callback task in under 2 minutes",
      },
      {
        metric: "Intro consult no-shows",
        today: "Manual reminders when time allows",
        modeled: "Automated generic reminder sequence",
      },
      {
        metric: "Directory maintenance",
        today: "Quarterly or ad hoc updates",
        modeled: "Monthly health check with assigned actions",
      },
      {
        metric: "Session-to-claim leaks",
        today: "Manual audit, often late",
        modeled: "Phase 3 reconciliation pilot after BAA readiness",
      },
    ],
  },
  faq: [
    {
      q: "Will you sign a BAA?",
      a:
        "BAA available before PHI workflows begin. Phase 1 is intentionally non-PHI and does not require patient data.",
    },
    {
      q: "Do you have E&O and cyber coverage?",
      a:
        "Phase 2/3 require E&O and cyber coverage before launch. Production PHI work does not start until those prerequisites are complete.",
    },
    {
      q: "Are you Texas-compliant?",
      a:
        "The offer is designed around Texas HB 300 requirements, including training, breach notification planning, encryption, and written data-handling boundaries.",
    },
    {
      q: "Do you touch psychotherapy notes?",
      a:
        "No. Psychotherapy notes are explicitly out of scope, even under a BAA.",
    },
    {
      q: "What does the public audit form collect?",
      a:
        "Only practice and business lead data: practice name, contact name, work email, work phone, website, provider count, current tools, admin pain, and monthly volume.",
    },
  ],
  cta: {
    eyebrow: "Start with the non-PHI lane",
    title: "Request a therapist-practice audit.",
    body:
      "We will review your public lead flow, response speed, consult reminders, and directory presence, then send a practical automation map.",
    note:
      "Do not include patient names, symptoms, insurance details, appointment reasons, clinical notes, or other patient-specific information.",
  },
  // Generic therapist-SKU defaults for the fictional Cedar Park demo. Real
  // practices override per-deployment via their own overlay (e.g., Embracing
  // Minds in `clients/embracing-minds/profile.md`).
  therapistConfig: {
    // Generic demo accepts the most-common carriers; production practices set their actual list.
    acceptedInsuranceCarriers: [
      "aetna",
      "cigna",
      "bcbs",
      "uhc-optum",
      "self-pay",
    ],
    // Cedar Park demo: bilingual disabled by default. Practices that offer
    // Spanish flip this true and add "es" to bilingualLanguages.
    practiceOffersBilingual: false,
    bilingualLanguages: [],
    // Cedar Park demo: serves adults only. Practices that serve minors
    // (Embracing Minds at age 7+) flip this true.
    practiceServesMinors: false,
    // Cedar Park demo: no sliding-scale clinician. Practices with an LPC-A or
    // pre-licensed clinician offering reduced fees populate this list.
    slidingScaleClinicians: [],
    // Cedar Park is Texas-based per the demo profile. Multi-state practices
    // expand this array.
    licensedStates: ["TX"],
    // Cedar Park demo offers individual + couples + family + supervision.
    // Practices customize this list per their actual offerings.
    serviceTypesOffered: [
      "therapy-individual",
      "therapy-couples",
      "therapy-family",
      "clinical-supervision",
    ],
  },
};
