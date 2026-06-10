# E&O + Cyber Insurance Shopping Spec — ClearAutomations LLC

**Author:** ClearAutomations internal
**Date:** 2026-05-15
**Status:** ACTION DOC — Zion executes the quote process directly. Insurance binds before signing the first paying client.

Coverage spec, carrier shortlist, shopping process, and tracking template for binding E&O (Errors & Omissions / Professional Liability) and Cyber Liability insurance for a Texas-based solo AI-services freelancer touching healthcare-adjacent work.

---

## Why you need this before the first paying client

**E&O (Professional Liability) — Errors & Omissions.** Covers professional liability claims that your service caused financial harm to a client. Example claims that E&O responds to:
- Client says your voice agent gave a wrong answer to a prospective patient that lost them a referral
- Client says your CRM configuration corrupted their pipeline data and they lost X consults
- Client says your website-form replacement broke their existing tracking and they lost X qualified leads during the downtime
- Client says the AI script you delivered contained content that exposed them to regulatory scrutiny

**Cyber Liability.** Covers data breach response, ransomware, and third-party claims arising from cyber incidents. Two pieces:
- **First-party (you the policyholder):** breach response costs, forensic investigation, client notification, credit monitoring, business interruption, ransomware payment.
- **Third-party (claims against you):** lawsuits from affected individuals, regulatory fines, payment-card industry fines, vendor contract penalties.

**Why both are non-negotiable for healthcare-adjacent work:**
- The Master Services Agreement (Section 11) commits ClearAutomations to maintain $1M/$1M E&O and $1M/$1M cyber. Without bound coverage, that commitment is contractual fiction.
- Healthcare clients will ask to see your Certificate of Insurance (COI) before signing the Business Associate Agreement. No COI = no signed BAA = no paid healthcare engagement.
- A single PHI breach (even a small one) at a healthcare client triggers HIPAA notification obligations + state notification obligations + potential civil monetary penalties up to $1.5M per violation category per year. Without cyber coverage, that's a personal-bankruptcy event.
- E&O claims in tech services average ~$50K-$200K per claim (per industry data); a single claim without coverage can wipe out the practice.

**Cost reality:** for a solo operator, year 1 is roughly $1,500-$3,500 combined for both policies at $1M/$1M limits. That's the table-stakes overhead for serving paying healthcare clients. Pilot clients don't strictly require it, but bind anyway because the first paid client is around the corner.

---

## Coverage specification

### Errors & Omissions / Professional Liability

| Field | Recommended |
|---|---|
| **Per-claim limit** | $1,000,000 |
| **Aggregate limit** | $1,000,000 (year 1) or $2,000,000 (year 2 onward if budget allows) |
| **Retention (deductible)** | $1,000–$2,500 (lower retention = higher premium; $2,500 is a reasonable balance) |
| **Coverage trigger** | Claims-made (standard for E&O) with retroactive date matching the LLC formation date |
| **Tail coverage** | Optional but recommended; allows reporting of claims after policy termination |
| **Required endorsements** | (1) Tech E&O endorsement, (2) AI/ML output endorsement if available, (3) Subcontractor liability inclusion |
| **Exclusions to verify ARE NOT in your policy** | Bodily injury (usually OK to exclude for tech), property damage, intentional acts (standard), prior known claims (standard) |
| **Exclusions to verify ARE limited or removed** | "Failure of software to perform" exclusion (some carriers add this; demand removal or narrowing), "AI/algorithmic output" carve-outs |

### Cyber Liability

| Field | Recommended |
|---|---|
| **Per-claim limit** | $1,000,000 |
| **Aggregate limit** | $1,000,000 (year 1) or $2,000,000 (year 2 onward) |
| **Retention** | $1,000–$5,000 |
| **First-party coverage MUST include** | Forensic investigation, legal counsel, breach notification costs, credit monitoring services, business interruption, ransomware / extortion (negotiate inclusion vs sublimit) |
| **Third-party coverage MUST include** | Network security liability, privacy liability (HIPAA, state laws including Texas HB 300), media content liability, regulatory defense costs + fines (where insurable) |
| **Required endorsements** | (1) Healthcare data sublimit at full policy limit (some carriers cap PHI breaches lower), (2) Social engineering / wire fraud coverage (gives ~$100K-$250K against business email compromise), (3) Texas HB 300 regulatory defense + fine coverage where insurable |
| **Exclusions to verify** | War/terrorism (standard), known prior breaches (standard), unencrypted data (push for removal — most carriers will cover encrypted breaches at full limit and unencrypted at sublimit) |

### Optional add-ons (consider in year 2)

- **General Liability:** ~$300-$500/yr for $1M/$1M. Only useful if you do any in-person client work (rare for CA's model).
- **Business Owner's Policy (BOP):** Packages GL + property + business interruption. Maybe $400-$700/yr. Only useful with a physical office.
- **Crime coverage:** Covers employee theft and check forgery. Useful only when you hire your first W-2.

---

## Carrier shortlist (2026)

Five carriers to get quotes from. Aim for 3-4 actual quotes; pick the best combination of price + coverage + carrier reputation.

### Tier A — Combined E&O + Cyber via tech-focused brokers

**1. Embroker** ([embroker.com](https://embroker.com))
- Startup + tech-focused, online quoting, fast
- Underwrites both E&O and Cyber, often bundled
- AI-services-friendly (specifically advertises coverage for AI/ML practices in 2026)
- Online quote in ~24 hours, bind in 3-5 business days
- Typical solo-operator combined premium: $1,500-$3,000/yr

**2. Vouch** ([vouch.us](https://vouch.us))
- Startup-focused E&O + cyber, AI-friendly
- Online quoting, fast bind
- Often the cheapest at the $1M/$1M tier for very small operators
- Caveat: some healthcare-adjacent risks may push you out of their preferred class
- Typical solo-operator combined premium: $1,200-$2,500/yr

### Tier B — Direct carriers, may need broker for combo

**3. Hiscox** ([hiscox.com/small-business-insurance](https://www.hiscox.com))
- E&O for small business, well-established carrier
- Direct online quote available
- Strong for E&O alone, cyber sold separately
- Typical E&O premium: $500-$1,200/yr at $1M/$1M

**4. Coalition** ([coalitioninc.com](https://www.coalitioninc.com))
- Cyber-first carrier with strong response capability
- Increasingly competitive on tech E&O combo
- Active risk monitoring + breach response services included
- Typical cyber premium: $700-$2,000/yr at $1M/$1M

**5. At-Bay** ([at-bay.com](https://www.at-bay.com))
- Tech E&O + cyber combined, AI-aware
- Strong on technical underwriting (they read your tech stack vs just pricing on industry code)
- Slower quote turnaround than Embroker but more thorough
- Typical combined premium: $1,500-$3,500/yr

### Tier C — Broker-shopped (use if Tier A/B quotes feel high)

**6. Founder Shield** ([foundershield.com](https://foundershield.com))
- Broker that shops multiple carriers for startups
- Good when you want someone else doing the comparison work
- Slightly higher cost (broker fee built in) but often surfaces better terms

**7. Higginbotham** (Texas-headquartered)
- Large Texas insurance broker, can shop national carriers
- Useful if you want a local Texas-based broker relationship
- Slower than online tech-focused brokers but established

---

## Information to have ready before requesting quotes

Compile this into a one-page sheet. Same data goes to every carrier:

### Business profile

- Legal entity: ClearAutomations LLC (assuming Texas LLC by quote time)
- State of formation: Texas
- Federal EIN: [TBD upon LLC formation]
- Date of formation: [TBD]
- Owner / sole member: Zion John
- Number of employees / contractors: 0 (sole operator)
- Office: home-based, no physical office space yet
- Years in business: 0 (new entity) — note that prior consulting experience can be cited for the "Years in industry" question
- Number of clients projected for year 1: 1-5 paying + 1-3 pilot
- Projected annual revenue: $50,000-$200,000
- Service description: "AI-powered front-desk automation and workflow design services for small and mid-sized businesses, including healthcare practices subject to HIPAA"
- Industries served: therapy/counseling, dental, HVAC contractors, roofing contractors, legal intake, postal-presort, home services

### Tech stack disclosure

- Primary tools: n8n (self-hosted), Retell AI / Vapi (voice agents), HubSpot (CRM), Telnyx / Twilio (telephony), Resend / Postmark (email), Anthropic + OpenAI APIs (LLMs)
- Hosting: DigitalOcean / Hetzner / AWS (case-by-case per client)
- Storage of client data: maintained on client-owned vendor accounts; CA has admin access but does not warehouse client data on CA-owned systems
- AI/ML use: yes, both as a feature of services (voice agents, content generation) and as a development tool (Claude Code)
- Data types handled: business contact information (always), PHI (Phase 2+ of healthcare engagements only, under signed BAA)

### Security posture

- MFA enabled on all vendor accounts: yes
- Password manager: 1Password Team (separate vaults per client)
- Endpoint protection on operator workstation: yes (built-in OS + reputable commercial AV)
- Encrypted backups: yes (automated, cloud-based)
- Documented incident response plan: yes (per the production-readiness-gates doc template)
- HIPAA workforce training completed: yes (when first healthcare engagement starts)
- BAAs in place with sub-processors: yes (per the BAA template subcontractor inventory)

### Compliance commitments

- HIPAA: yes, where applicable (signed BAA per engagement)
- Texas HB 300: yes (Texas resident + Texas-licensed clients)
- TCPA: yes (telephony work for non-healthcare verticals)
- ABA Model Rules (legal-intake vertical): yes
- State-specific data privacy laws (CCPA, state consumer health privacy): not currently serving California clients; will reassess

### Prior claims history

- E&O claims: 0
- Cyber incidents: 0
- Known prior breaches: none
- Pending claims or known threats: none

---

## Shopping process (one week)

### Day 1 — Today

- [ ] Compile the business profile + tech stack + security posture + compliance commitments above into a single PDF (~2-3 pages). Title it "ClearAutomations LLC — Insurance Underwriting Profile."
- [ ] Submit online quote requests to **Embroker**, **Vouch**, and **At-Bay** (Tier A + B combined-quote carriers).
- [ ] Submit online E&O quote request to **Hiscox**.
- [ ] Submit online cyber quote request to **Coalition**.

### Days 2–5 — Quote responses arrive

- [ ] Log each quote in the tracker below.
- [ ] For each quote, note: carrier, broker (if any), combined premium, per-claim and aggregate limits, retention, key exclusions, recommended endorsements added, response time.
- [ ] Flag anything in the policy language that looks unusual (e.g., AI exclusions, healthcare data sublimits below policy limit, prior-acts retroactive date issues).

### Days 6–7 — Compare and bind

- [ ] Pick the best combination of price + coverage + carrier reputation. Often the answer is "Embroker combined quote" or "Hiscox E&O + Coalition cyber" depending on what underwriting comes back at.
- [ ] If the chosen quote has minor language issues, request endorsement adjustments before binding (most carriers accommodate; small policies, low friction).
- [ ] Bind the policy. Pay the first premium (annual or monthly; monthly usually has a small surcharge).
- [ ] Request the Certificate of Insurance (COI). Healthcare clients ask for this.
- [ ] Save COI + policy declarations + endorsements to `clearautomations-website/docs/internal/compliance/insurance/` (create this subfolder; not committed to public repos given it has policy numbers).

### Within 2 weeks

- [ ] Add insurance line item to monthly bookkeeping (P&L recurring expense).
- [ ] Add policy renewal date to calendar with 60-day reminder for shopping comparable quotes at renewal time.

---

## Quote tracker

Fill in as quotes come back. Save as a separate file once populated (`insurance-quotes-2026.md` in the same folder).

| Carrier | Broker | Type | Per-Claim | Aggregate | Retention | Annual Premium | AI Endorsement | Healthcare Sublimit | Quote Date | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| Embroker | direct | Combined E&O + Cyber | $1M | $1M | $2,500 | ? | ? | ? | | |
| Vouch | direct | Combined E&O + Cyber | $1M | $1M | $1,000 | ? | ? | ? | | |
| At-Bay | direct | Combined E&O + Cyber | $1M | $1M | $2,500 | ? | ? | ? | | |
| Hiscox | direct | E&O only | $1M | $1M | $1,000 | ? | ? | n/a | | |
| Coalition | direct | Cyber only | $1M | $1M | $1,000 | ? | n/a | ? | | |

---

## Common gotchas

1. **AI/ML exclusions sneaking in.** Some carriers add AI exclusions to the standard tech E&O form. Read the AI endorsement language carefully. The right language affirms coverage for "the use of artificial intelligence or machine learning tools or output thereof, including but not limited to large language models, voice synthesis, and automated decisioning, in the rendering of Services." Push back if the policy excludes AI output.

2. **Healthcare data sublimit below policy limit.** Some cyber policies cap PHI breach coverage at $250K or $500K even though the aggregate is $1M. Demand healthcare data sublimit matches policy aggregate.

3. **Retroactive date matching LLC formation.** Make sure the policy's retroactive date is on or before the LLC formation date. If retro date is set to policy inception, any claim related to pre-policy work is uncovered.

4. **"Prior acts" coverage missing.** If you've been doing freelance work as a sole proprietor before the LLC, prior acts coverage extends protection to that prior work. Worth asking for, especially if any pre-LLC engagements were healthcare-adjacent.

5. **Subcontractor coverage.** If you bring on a contractor (developer, designer, bilingual reviewer), the policy should cover claims arising from their work performed on your behalf. Some standard policies exclude subcontractors; add the endorsement.

6. **Texas HB 300 regulatory defense.** Standard cyber policies cover federal HIPAA defense. Some don't explicitly cover state-specific regulatory actions. For Texas-based work, push to include Texas HB 300 regulatory defense.

7. **Tail coverage at policy end.** Claims-made policies require tail coverage to report claims after the policy terminates. Build into renewal planning.

---

## Renewal planning

Most policies are annual. Set a calendar reminder 60 days before renewal (year 1: ~April 2027 if you bind in May 2026) to:

1. Review year's claims activity (hopefully zero).
2. Review year's revenue change (premium adjusts based on revenue).
3. Request renewal quote + 2-3 competitive quotes from other carriers.
4. Negotiate using competing offers.
5. Bind by renewal date (lapses kill the policy).

Year 2 onward, consider raising aggregate to $2M/$2M as revenue grows. Common trigger: when annual revenue crosses $100K or first paying healthcare Phase 2+ engagement signs.

---

## What this doc does NOT cover

- General liability for in-person work (not needed yet; revisit if you ever take a client in person)
- Workers' compensation (not required while sole operator with no employees)
- Health insurance for the operator (separate decision; consider via marketplace or HSA-eligible high-deductible plan)
- Disability insurance for the operator (separate, optional but worth pricing once revenue stabilizes)
- LLC operating agreement insurance clauses (handled by attorney during LLC formation)

---

## Change log

- 2026-05-15: Initial shopping spec. Quote tracker populated as quotes arrive. Bind target: within 7 business days of quote submission.
