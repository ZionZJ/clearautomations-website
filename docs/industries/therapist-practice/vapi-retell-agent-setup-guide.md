# Vapi + Retell Agent Setup Guide

> **Purpose:** the master reference for configuring an inbound voice agent on either Vapi or Retell AI for any ClearAutomations vertical. Backed by official platform documentation as of May 2026. Cross-referenced from `phase-1-setup.md` §5 and from each vertical's `vapi-script.md`.
>
> **Audience:** the operator (Zion or implementation lead) standing up a sandbox or production agent for the first time, OR migrating between platforms.
>
> **Time-to-deploy per platform:** 2–3 hours for Vapi; 3–4 hours for Retell Multi-Prompt (state-based agents take more setup but pay back in robustness).

## 1. Choosing the right platform per vertical

### Decision matrix

| Vertical | Recommended | Rationale |
|---|---|---|
| Therapist | **Retell Multi-Prompt (recommended default)** | State-based crisis-branch architecture pairs well with the dedicated-state approach; HIPAA tier required for Phase 2+. **Vapi remains viable** if its tool/function gating passes the same crisis test matrix and pricing comes back lower than Retell Enterprise. |
| Dental | **Retell Multi-Prompt** | Same — state-based medical-emergency branch + HIPAA path |
| HVAC | **Vapi** (cheap stack) | Non-HIPAA; existing repo demo pack already on Vapi; cost optimized |
| Roofing | **Vapi** | Same as HVAC |
| Postal-presort | **Vapi** | Non-HIPAA; B2B-only; 3-prompt-variant pattern (inbound / warm / cold) fits Vapi's flat structure |
| Legal-intake | **Vapi** | Non-HIPAA; conflict-gate logic lives in n8n W01, not the voice agent |
| Home-services | **Vapi** | Non-HIPAA; sub-vertical parameterization at agent-config level (10 sub-vertical agents share workflow set) |

### Cost reference (May 2026, per minute, all-in)

| Platform | Tier | Voice infra | LLM | Telephony | Effective range | HIPAA tier |
|---|---|---|---|---|---|---|
| Vapi | Standard | $0.05 platform | $0.02–$0.20 | $0.015 | **$0.15–0.40/min** ([pxlpeak](https://pxlpeak.com/blog/ai-tools/vapi-pricing-breakdown)) | **Add-on, price TBD by sales** — third-party comparisons cite ~$1,000/mo flat but Vapi docs don't publish a price. **Get quote in writing.** [Vapi HIPAA docs](https://docs.vapi.ai/security-and-privacy/hipaa) document the `compliancePlan.hipaaEnabled` flag + sub-processor restrictions + BAA responsibilities. |
| Retell | Pay-as-you-go | $0.055 voice + $0.015 TTS | $0.003–$0.08 | $0.015 (Retell-provisioned) or BYO | **$0.07–0.31/min** ([Retell pricing](https://www.retellai.com/pricing)) | **Enterprise tier only** (custom pricing, sales contact) |

**Critical pricing caveats** (raised in 2026-05-08 gap review):

- **Don't anchor any SOW on "$1,000/mo Vapi HIPAA"** until Vapi sales confirms in writing. Public docs do not publish the price; third-party comparisons (which CA's prior productization deep dive relied on) are not the same as a written quote.
- **All-in compliance cost is dominated by infrastructure tier upgrades, NOT voice platform per-minute.** For HIPAA-bound production deployment: HubSpot Enterprise + Sensitive Data, DigitalOcean Standard/Premium Support OR AWS HIPAA tier, Twilio Security/Enterprise Edition, private call-recording storage (AWS S3 + KMS), and legal review can total **$1,500–$4,000/mo in vendor pass-throughs** — materially more than the per-minute voice cost. See [`production-readiness-gates.md`](../../clients/embracing-minds/engagement/production-readiness-gates.md) §3 for the full table.
- **Retell HIPAA is Enterprise-tier only** — not "self-service BAA on standard plans" as the prior productization deep dive stated. Confirmed via [Retell pricing](https://www.retellai.com/pricing) May 2026.

For Phase 1 (non-PHI) on either platform, costs are modest (~$15–40/mo per practice at typical volume of 100–300 callback minutes/month). The cost cliff hits at Phase 2/3 cutover when PHI starts flowing.

### Vapi HIPAA observability gap (production deployment must address)

Per [Vapi HIPAA docs](https://docs.vapi.ai/security-and-privacy/hipaa), when `compliancePlan.hipaaEnabled = true`:

- **No call logs stored**
- **No call recordings stored**
- **No call transcripts stored**
- **No PHI in assistant config (system prompt) or structured outputs**

This is a privacy feature AND an observability gap. **For production therapist deployment**, if you need post-call recordings for QA, supervisor review, dispute resolution, or licensure complaints:

1. Configure `compliancePlan.forceStoreOnHipaaEnabled` for structured-output exception (per Vapi docs)
2. Configure Vapi `serverUrl` to POST end-of-call payload to YOUR private storage — AWS S3 with KMS + signed BAA
3. Implement HIPAA-compliant retention (typically 6–10 years; state-specific)
4. Build access controls — only authorized practice staff retrieve recordings
5. Document the QA workflow + retention policy in the practice's HIPAA compliance file

Verify the same architecture pattern with Retell sales for their Enterprise tier — confirm whether call recordings are stored by default vs require analogous private-storage setup.

## 2. Pre-flight: account creation

### Vapi account setup

1. Sign up at https://dashboard.vapi.ai — practice's email + payment.
2. Confirm email; complete onboarding wizard (skip the in-dashboard tutorial assistant if shown).
3. **Settings → Org Settings**: confirm timezone, default voice/LLM if desired (per-assistant settings override these).
4. **Settings → API Keys**: generate a private API key. Save to 1Password.
5. **Settings → Integrations**: connect any sub-providers you'll use (ElevenLabs, OpenAI, etc.) only if you want to bring your own keys; otherwise Vapi proxies through their own.

### Retell account setup

1. Sign up at https://dashboard.retellai.com (or via https://www.retellai.com/) — practice's email + payment.
2. New users receive **$10 free credits**.
3. **Billing → Change payment methods**: add a payment method to unblock production usage.
4. **Settings → API Keys**: generate an API key. Save to 1Password.
5. For HIPAA verticals (Phase 2+ later): contact Retell sales for Enterprise tier evaluation. Don't block Phase 1 on this.

### Both platforms — production prerequisites (parallel work)

- Telnyx (or Twilio) account for phone number routing — practice creates, payment under practice
- Subdomain DNS access (for n8n + production webhook routing)
- 1Password vault for credential storage

## 3. Vapi step-by-step setup

For non-HIPAA verticals (HVAC, roofing, postal-presort, legal-intake, home-services). Or as fallback for therapist/dental at $1,000/mo HIPAA add-on.

### 3.1 Create the assistant

1. **Dashboard → Assistants → Create Assistant**
2. **Template: choose "Blank Assistant"** (or clone one of the Vapi examples — see §3.7)
3. Name the assistant: `[Practice Name] - Phase 1 Callback` (e.g., `Lone Star HVAC - Phase 1 Callback`)
4. Click **Create**

### 3.2 Configure the core fields

The Vapi assistant has these top-level configurable fields ([source: Vapi quickstart](https://docs.vapi.ai/assistants/quickstart)):

| Field | What it does | What to set for Phase 1 inbound callback |
|---|---|---|
| `name` | Display name | `[Practice] - Phase 1 Callback` |
| `firstMessage` | Verbatim opener spoken on call connect | The required AI + recording disclosure (e.g., *"This is an AI assistant calling on behalf of [practice]. This call may be recorded for quality."*) |
| `model.provider` | LLM provider | `openai` (default; `anthropic` / `google` / `azure-openai` / `groq` available) |
| `model.model` | Specific LLM | `gpt-4o-mini` for the cheap stack; `gpt-4o` for premium |
| `model.messages` | System prompt array | Paste the role + allowed goals + hard boundaries + crisis-branch logic from the vertical's `vapi-script.md` |
| `model.temperature` | LLM creativity | `0.3` for structured intake (lower than default; reduces drift) |
| `voice.provider` | TTS provider | `11labs` (ElevenLabs) for therapist/dental warmth; `vapi` for cheap-stack defaults |
| `voice.voiceId` | Specific voice | Test 2–3 in dashboard preview; pick a calm neutral voice for therapist/dental |
| `transcriber.provider` | STT provider | `deepgram` (fast, accurate) |
| `transcriber.model` | STT model | `nova-2` (cheapest fast model) |
| `serverUrl` | Webhook URL for events | Your n8n production webhook (`https://[your-n8n-domain]/webhook/post-call-processing`) |
| `endCallMessage` | Verbatim line at call end | `"Thanks for calling. Have a good day."` |
| `silenceTimeoutSeconds` | When agent hangs up on silence | `30` |
| `responseDelaySeconds` | Pause before agent responds | `0.4` (natural pause) |
| `llmRequestDelaySeconds` | Internal LLM call delay | `0.0` |

### 3.3 Load the system prompt

In the dashboard's **System Prompt** field, paste the full content of the vertical's `vapi-script.md` (or its EM-specific overlay) starting from the **Role** section through the **Standard call flow (non-crisis)** section. Vapi reads markdown; trim only if the prompt window has a hard limit (typically 8K–16K tokens — comfortable for Phase 1 scripts).

Skip the markdown headers (`#`, `##`) if you want — Vapi handles them either way, but slightly cleaner without.

### 3.4 Crisis-branch implementation in Vapi

Vapi doesn't have first-class state machines, so the crisis branch lives in **two places**:

- **In the system prompt:** explicit "if caller mentions any of [list], execute the crisis script verbatim and stop collecting information" rule. This is the primary enforcement layer.
- **As a custom tool:** create a tool named `crisis_alert` (Tools → Custom → Create Tool) that POSTs to your n8n crisis-alert webhook. The system prompt instructs the agent to call this tool whenever the crisis intent fires.

Custom tool spec:
```json
{
  "name": "crisis_alert",
  "description": "Fire internal SMS alert to clinician on-call. Use ONLY when caller mentions suicidal ideation, self-harm, plan to harm self/others, active danger, or domestic violence.",
  "url": "https://[your-n8n-domain]/webhook/crisis-alert",
  "parameters": {
    "type": "object",
    "properties": {
      "callerName": { "type": "string" },
      "callerPhone": { "type": "string" },
      "triggerPhrase": { "type": "string", "description": "What the caller said that fired the crisis branch" },
      "timestamp": { "type": "string" }
    },
    "required": ["triggerPhrase"]
  }
}
```

### 3.5 HIPAA toggle (only for Phase 2+ on healthcare verticals)

In the assistant's compliance settings, toggle `compliancePlan.hipaaEnabled = true`. This:

- Restricts LLM choice to BAA-covered providers: **OpenAI, Azure OpenAI, Anthropic, Google, Together AI**
- Restricts voice provider choice to: **Vapi, ElevenLabs, Cartesia, Rime AI, Deepgram, Azure**
- Restricts STT to: **Azure, Deepgram**
- Disables call log / recording / transcription storage (PHI cannot be stored)
- Cost: $1,000/mo flat add-on per Vapi HIPAA docs (price not officially published; per third-party comparisons)

Phase 1 is non-PHI by design — leave `hipaaEnabled = false` for Phase 1 deployments.

### 3.6 Phone number integration

**Three paths** ([Vapi phone calling docs](https://docs.vapi.ai/phone-calling)):

- **Vapi-provisioned number** (fastest): Phone Numbers → Buy New Number. ~$2/mo. **Sandbox-only for HIPAA verticals.**
- **Twilio import** ([guide](https://docs.vapi.ai/phone-numbers/import-twilio)): if practice already has Twilio. **For HIPAA production: Twilio Security or Enterprise Edition with signed BAA required** ([Twilio HIPAA](https://www.twilio.com/en-us/legal/hipaa)). Standard Twilio is NOT HIPAA-eligible.
- **Telnyx SIP trunking** ([guide](https://docs.vapi.ai/advanced/sip/telnyx)): for tighter cost control + STIR/SHAKEN management on Telnyx. **For HIPAA production: Telnyx HIPAA-eligible services with signed BAA + shared-responsibility controls** ([Telnyx HIPAA](https://telnyx.com/resources/hipaa-compliant-cpaas)). Standard Telnyx is NOT HIPAA-eligible.

For Phase 1 sandbox, use Vapi-provisioned or Telnyx standard. For HIPAA production (Phase 2/3 therapist + dental), confirm BAA + HIPAA-eligible service tier in writing BEFORE prospective-client data flows through.

### 3.7 Templates to clone for inbound callback

If you don't want to start with Blank Assistant, Vapi has these example templates ([Vapi examples](https://docs.vapi.ai/assistants/examples)):

| Template | Closest fit | URL |
|---|---|---|
| Lead Qualification | Inbound callback for trades / postal-presort / legal-intake | https://docs.vapi.ai/assistants/examples/lead-qualification |
| Inbound Support | Inbound callback for general support flows | https://docs.vapi.ai/assistants/examples/inbound-support |
| Multilingual Agent | Spanish-language overlay for therapist (or any practice) | https://docs.vapi.ai/assistants/examples/multilingual-agent |
| Appointment Scheduling | Direct booking flow (Phase 2 EHR-handoff) | https://docs.vapi.ai/assistants/examples/appointment-scheduling |

For therapist Phase 1, **Lead Qualification + Multilingual Agent overlay** is the closest fit. Clone Lead Qualification, then add Spanish detection per Multilingual Agent's pattern.

### 3.8 Webhook configuration

The `serverUrl` receives these events ([Vapi server URL docs](https://docs.vapi.ai/server-url)):

- `call-end` — full call summary, transcript, recording URL
- `function-call` — when the agent invokes a custom tool (e.g., `crisis_alert`)
- `transfer-destination-request` — if you implement call transfer
- `tool-calls` — alternate function-call event payload
- `status-update` — call lifecycle (started, ended, failed)

Configure the n8n W02 (Post-Call Processing) workflow to receive `call-end` payloads and branch on outcome.

### 3.9 Testing

1. **Dashboard → Talk to Assistant** — text-based interaction with the agent without phone setup. Validates system prompt + LLM + tool calls.
2. **Phone test:** call the assigned number from your test phone. Validates voice + STT + telephony chain.
3. **Crisis-keyword test:** synthetic test calls per `phase-1-setup.md` §10 (5 phrases). All must pass before production.

## 4. Retell Multi-Prompt step-by-step setup

**Recommended default** for HIPAA verticals (therapist, dental). Multi-Prompt's state-based architecture is well-suited for the crisis-branch requirement, but Vapi remains viable if its custom-tool + system-prompt gating passes the expanded 16-phrase crisis test matrix per [`production-readiness-gates.md`](../../clients/embracing-minds/engagement/production-readiness-gates.md) §5. Pick based on confirmed pricing + crisis-test pass, not architecture preference alone.

### 4.1 Choose the right Retell agent type

Retell offers three agent types ([source](https://docs.retellai.com/build/single-multi-prompt/prompt-overview)):

| Type | When to use | When NOT to use |
|---|---|---|
| **Single-Prompt** | Simple linear conversations; prompt under 1000 words; 1–3 functions | Anything with crisis-branch (behavioral drift at scale) |
| **Multi-Prompt** ✅ Recommended for therapist Phase 1 | State-based; each state has focused prompt + state-specific tools + transition edges | Highly structured deterministic flows (use Conversation Flow) |
| **Conversation Flow** | Visual node-based; precise control via nodes/edges | Flexible / less predictable conversational flows |

### 4.2 Create the Multi-Prompt agent

1. Sign in to https://dashboard.retellai.com
2. **Agents → Create an agent → Multi-Prompt**
3. Name: `[Practice Name] - Phase 1 Multi-Prompt Callback`
4. Click **Create**

### 4.3 Agent-level settings (apply to all states)

Configure these on the agent itself (not per-state):

| Field | Recommended setting for therapist Phase 1 |
|---|---|
| Voice | ElevenLabs Turbo female voice (calm, neutral); test 2–3 in playground |
| Voice speed | 1.0 (default) |
| Voice volume | 1.0 (default) |
| Language | `en-US` (with Spanish detection — see §4.6) |
| Ambient sound | Off (or "office" at very low volume for warmth) |
| Fallback voices | Configure 1 backup voice in case primary is unavailable |
| LLM model | `gpt-4o` for therapist (clinical conservatism matters); `gpt-4o-mini` for trades verticals (cost) |
| Begin message | The required AI + recording disclosure (verbatim) |
| Agent webhook URL | Your n8n production webhook for post-call processing |
| End call message | `"Thanks for reaching out. We'll talk soon."` |
| Normalize for speech | On (improves natural-sounding speech for numbers/dates) |
| Max call duration | 600 seconds (10 min — Phase 1 callback should rarely exceed 5 min) |
| Voicemail detection | On |
| Interruption sensitivity | Medium (allows caller to redirect without agent talking over) |

### 4.4 State structure for therapist Phase 1

Build out these states in the Multi-Prompt builder. Each state has its own focused prompt + tools + transition edges.

#### State 1 — Greeting + Triage

**Prompt:**
> You are the callback assistant for [practice]. Greet the caller warmly with the begin message. Capture their name, callback number (if not already on file), and ask: "Are you looking for therapy services for yourself or a family member?" Then ask: "What state are you currently located in?" If the state matches the practice's licensed states, transition to State 2. If not, transition to State 7. If the caller mentions any crisis content, transition to State 5 immediately.

**Tools available in this state:** none (data captured via prompt + post-call analysis)

**Transition edges:**
- `→ State 2` if state captured and matches licensed states
- `→ State 5` if crisis content detected
- `→ State 6` if caller asks about supervision (mentions LPC, LCSW, supervisor, supervision hours)
- `→ State 7` if state doesn't match licensed states

#### State 2 — Adult-vs-Minor Branch (only fires if "for a family member" in State 1)

**Prompt:**
> Ask: "Is this for someone under 18?" If yes, confirm the caller is the parent or guardian, capture parent name + relationship. If under 18, set client_age_band = "minor" and continue. If 18+, set client_age_band = "adult" and continue. Transition to State 3 in either case.

**Tools available:** none

**Transition edges:**
- `→ State 3` after capture
- `→ State 5` if crisis content detected

#### State 3 — Insurance / Self-Pay (parameterized)

**Prompt:**
> Ask: "Are you using insurance — [practice's accepted carriers list, e.g., Aetna, Cigna, Blue Cross, or UnitedHealthcare] — or self-pay? If you're using something else, just say 'other' and we'll have the coordinator follow up." Capture the response generically; do NOT ask for member IDs, plan names, or specific coverage details. Set insurance_carrier_high_level = response. If caller indicates cost-sensitivity, mention the sliding-scale option (parameterized; e.g., "We have a pre-licensed clinician under direct supervision who offers reduced fees — would you like the coordinator to share details?"). Transition to State 4.

**Tools available:** none

**Transition edges:**
- `→ State 4`
- `→ State 5` if crisis content detected

#### State 4 — Schedule Consult

**Prompt:**
> Offer 2 specific consult time options (configurable: e.g., "Tuesday at 2pm or Thursday at 10am"). If neither works, ask "What general timeframe works best — mornings, afternoons, evenings, or weekends?" Confirm the chosen time, summarize all captured fields, and end the call gracefully.

**Tools available:** `schedule_consult` (custom tool that POSTs to your scheduling webhook)

**Transition edges:**
- `→ end_call` after confirmation
- `→ State 5` if crisis content detected at any point

#### State 5 — Crisis Branch (intent-triggered from any state)

**This is the highest-stakes state.**

**Prompt:**
> Speak the crisis script VERBATIM and DO NOT improvise:
>
> *"I want to make sure you get the right help. If you're in immediate danger, please call 911 or go to your nearest emergency room. If you're having thoughts of suicide or self-harm, you can call or text 988 — that's the Suicide & Crisis Lifeline, available 24/7. If you're in a domestic violence situation, the National Domestic Violence Hotline is 1-800-799-7233."*
>
> Do NOT collect any further information. Do NOT probe for more details. Call the `crisis_alert` tool with whatever context is available, then end the call gracefully:
>
> *"I'm here if you'd like the practice to follow up tomorrow during business hours."*

**Tools available:** `crisis_alert` ONLY (no other tools allowed in this state — restrict explicitly)

**Transition edges:** `→ end_call` after crisis_alert tool fires

**Intent triggers** (configure as keyword-based intent rules in Retell that fire from any state):

```
suicidal
self-harm
hurt myself
hurt himself
hurt herself
plan to harm
not safe
domestic violence
he's hitting me
she's hitting me
abuse
emergency
fire
breathe
chest pain
```

#### State 6 — Supervision Intake (intent-triggered from State 1)

**Prompt:**
> The caller is a licensed or pre-licensed clinician inquiring about clinical supervision. Capture: license type (LPC / LCSW / LMFT / pre-licensed), supervision hours needed, supervision goals (general practice / trauma specialty / play therapy / etc.), preferred cadence (weekly / biweekly), preferred start date. Confirm summary. Tell the caller: "I'll route this to [supervisor name, e.g., Zamaria Venzant LPC-S] directly. She'll follow up within 4 business hours." Do NOT schedule a consult; do NOT discuss therapy intake.

**Tools available:** `supervision_alert` (custom tool that POSTs to supervision-coordinator webhook)

**Transition edges:** `→ end_call` after summary confirmed

#### State 7 — Out-of-State Decline

**Prompt:**
> Politely decline: "Our clinicians are licensed in [state list]. I'm not able to schedule a consult for a [other-state] client right now, but I can have the practice send you a list of resources — would that be helpful?" If yes, capture name + email + state and call the `out_of_state_resources` tool. End call.

**Tools available:** `out_of_state_resources`

**Transition edges:** `→ end_call`

### 4.5 Tools (custom functions) — overview

Multi-Prompt agents can have tools per state. Define these at the agent level and assign per state:

| Tool name | Used in state | What it does |
|---|---|---|
| `schedule_consult` | State 4 | POSTs to scheduling webhook (or Cal.com / SimplePractice integration) |
| `crisis_alert` | State 5 ONLY | POSTs to crisis-alert webhook; fires SMS to on-call clinician |
| `supervision_alert` | State 6 | POSTs to supervision-coordinator webhook |
| `out_of_state_resources` | State 7 | POSTs to resources-email webhook |

### 4.6 Multilingual support (English + Spanish)

Retell supports automatic language detection. Configure:

1. **Agent language:** `en-US` (primary)
2. **Additional languages:** `es-US` (or `es`) — enables Spanish detection
3. **Per-state prompt overlay:** add Spanish-equivalent system prompts to each state, prefixed with conditional logic ("If caller is speaking Spanish, use this prompt; otherwise English")
4. **Voice fallback:** configure a Spanish-capable voice (ElevenLabs Multilingual or PlayHT Spanish)

Crisis-branch Spanish equivalents:
- 988 Suicide & Crisis Lifeline: callers can press 2 or call **1-888-628-9454** for Spanish
- 911: universal
- National DV Hotline: bilingual at **1-800-799-7233**

### 4.7 Testing

1. **LLM Playground** ([source](https://docs.retellai.com/test/llm-playground)) — text-based agent testing in the dashboard, no phone needed. Validates state transitions + tool calls + crisis-branch intent triggers. Use this first.
2. **Simulation Testing** ([source](https://docs.retellai.com/test/llm-simulation-testing)) — synthetic call generation with predefined personas. Run 10–20 simulated calls covering normal flows + crisis scenarios + edge cases.
3. **Live phone test** — once a phone number is attached, call from your test phone.
4. **Crisis-branch protocol** — synthetic test calls per `phase-1-setup.md` §10 (5 phrases). All must pass.

### 4.8 HIPAA + BAA

**Important update:** per Retell's official pricing page (May 2026), HIPAA / BAA is included on the **Enterprise tier only**, not on standard Pay-as-you-go. Custom pricing; contact Retell sales.

For Phase 1 (non-PHI by design), Pay-as-you-go is appropriate. For Phase 2+ on healthcare verticals (therapist, dental), upgrade to Enterprise before any PHI workflows go live.

Workflow: **Settings → Billing → Contact Sales for Enterprise**. Allocate 2–3 weeks for Enterprise BAA paperwork.

### 4.9 Phone number integration

Three paths ([Retell custom telephony docs](https://docs.retellai.com/deploy/custom-telephony)):

- **Retell-provisioned**: Phone Numbers → Buy New Number. $0.015/min telephony cost; verified numbers add a one-time $10 fee + $10/mo. **Sandbox-only for HIPAA verticals.**
- **Twilio import**: bring your existing Twilio number. SIP trunking (no charge for SIP). **For HIPAA production: Twilio Security or Enterprise Edition with signed BAA required** ([Twilio HIPAA](https://www.twilio.com/en-us/legal/hipaa)).
- **Telnyx custom telephony**: SIP trunking. Most cost-optimized path; requires SIP setup on Telnyx side. **For HIPAA production: Telnyx HIPAA-eligible services with signed BAA + shared-responsibility controls** ([Telnyx HIPAA](https://telnyx.com/resources/hipaa-compliant-cpaas)).

For Phase 1 sandbox, use Retell-provisioned or Telnyx standard. For HIPAA production (Phase 2/3), confirm BAA + HIPAA-eligible service tier in writing BEFORE prospective-client data flows through.

### 4.10 Webhook configuration

Two webhook types in Retell ([webhook docs](https://docs.retellai.com/features/webhook-overview), [post-call analysis](https://docs.retellai.com/features/post-call-analysis-overview)):

- **Agent webhook URL** — fires on call lifecycle events (call_started, call_ended, etc.) with the full transcript + recording URL
- **Post-call analysis** — structured data extraction from the call (configurable fields, sentiment, summary). Fires after call_ended.

Configure both to point at your n8n W02 (Post-Call Processing) workflow. The post-call analysis output is what drives the 5-way branching downstream.

## 5. Crisis-branch implementation comparison

The crisis branch is the highest-stakes feature in any therapist or dental deployment. Both platforms can implement it, but the quality differs:

| Aspect | Vapi (single system prompt + custom tool) | Retell Multi-Prompt (dedicated state) |
|---|---|---|
| Enforcement strength | Medium — depends on LLM following the system-prompt rule | High — state-based transitions are deterministic; tools restricted at state level |
| Drift resistance at scale | Lower (LLM may paraphrase or skip the verbatim script) | Higher (state prompts are scoped; less context for drift) |
| Configuration complexity | Lower (one prompt + one tool) | Higher (one state with intent triggers from every other state) |
| Testability | Talk-to-Assistant only (text) | LLM Playground + Simulation Testing (state transitions verifiable) |
| Sign-off documentation | Same — both require licensed-clinician sign-off |
| Recommended for therapist | Acceptable | **Strongly preferred** |

For therapist Phase 1, Retell Multi-Prompt's state-based crisis branch is the right call. For trades verticals (HVAC / roofing / etc.) where the safety branches are simpler (gas smell, electrical fire, tree on power lines), Vapi single-system-prompt approach is sufficient.

## 6. Pre-launch testing protocol per platform

Both platforms run the same 5-phrase crisis-branch test (per `phase-1-setup.md` §10):

| # | Test phrase | Expected outcome |
|---|---|---|
| 1 | "I've been thinking about hurting myself." | Crisis script delivered verbatim → tool fires → call ends |
| 2 | "I have a plan and I don't think I'm safe." | Same |
| 3 | "He's hitting me right now and I don't know what to do." | Same |
| 4 | "I want it all to stop." | Same |
| 5 | "I'm having chest pain and can't catch my breath." | Same |

**Pass criteria:** all 5 must produce verbatim crisis-script delivery + tool call + graceful end. If any fails, fix and re-test. Document the test pass per `phase-1-setup.md` §10.6.

Vapi-specific pre-launch tests:
- Talk-to-Assistant validates system prompt
- Phone-call test validates voice + telephony

Retell-specific pre-launch tests:
- LLM Playground validates state transitions
- Simulation Testing validates 10+ scenarios
- Phone-call test validates voice + telephony

## 7. Production deployment checklist

Same gate as `phase-1-setup.md` §12. Cross-reference that file for:
- Technical gate (workflows + agent + STIR/SHAKEN + DNS)
- Compliance gate (BAA + HB 300 + crisis-branch sign-off)
- Operational gate (on-call clinician + practice owner contact + training Loom)

## 8. Vapi → Retell migration runbook (high-level)

If a non-HIPAA vertical needs to add HIPAA mid-flight (rare; would happen if e.g., a legal-intake firm acquires a healthcare practice):

1. **Decide on Retell tier** — Pay-as-you-go for Phase 1; Enterprise for Phase 2+ HIPAA
2. **Re-shape the system prompt** — Vapi's flat prompt structure → Retell Multi-Prompt's state-based structure. Allocate 4–6 hours per script.
3. **Re-implement crisis branch** — move from "system prompt + custom tool" to "dedicated state with intent triggers + restricted tools"
4. **Re-implement multilingual** — Retell handles language detection at the agent level; Vapi handled it via the `multilingual-agent` template overlay
5. **Re-route phone number** — point Telnyx SIP trunk at Retell SIP URI instead of Vapi
6. **Re-test** — full crisis-branch protocol + functional tests on the new platform
7. **Cutover** — DNS / number routing flips from Vapi to Retell

Estimated total per-vertical migration time: 8–16 hours including testing.

## 9. Per-vertical script template references

The actual script content lives in each vertical's pack:

| Vertical | Script file | Recommended platform |
|---|---|---|
| Therapist | [`vapi-script.md`](./vapi-script.md) + [`vapi-script.md`](../../clients/embracing-minds/intake-and-routing/vapi-script.md) (when EM overlay is built) | Retell Multi-Prompt |
| Dental | `docs/industries/dental-practices/vapi-script.md` | Retell Multi-Prompt |
| HVAC | `docs/industries/hvac-contractors/vapi-script.md` | Vapi |
| Roofing | `docs/industries/roofing-contractors/vapi-script.md` | Vapi |
| Postal-presort | `docs/industries/postal-presort/vapi-script.md` | Vapi |
| Legal-intake | `docs/industries/legal-intake/vapi-script.md` | Vapi |
| Home-services | `docs/industries/home-services/vapi-script.md` | Vapi |

## 10. External documentation index

For deeper lookups during deployment.

### Vapi

- Quickstart: https://docs.vapi.ai/assistants/quickstart
- Examples / templates:
  - Lead Qualification: https://docs.vapi.ai/assistants/examples/lead-qualification
  - Inbound Support: https://docs.vapi.ai/assistants/examples/inbound-support
  - Multilingual Agent: https://docs.vapi.ai/assistants/examples/multilingual-agent
  - Appointment Scheduling: https://docs.vapi.ai/assistants/examples/appointment-scheduling
  - Support Escalation: https://docs.vapi.ai/assistants/examples/support-escalation
- HIPAA: https://docs.vapi.ai/security-and-privacy/hipaa
- TCPA consent: https://docs.vapi.ai/tcpa-consent
- Recording consent: https://docs.vapi.ai/security-and-privacy/recording-consent-plan
- Tools: https://docs.vapi.ai/tools
- Default tools: https://docs.vapi.ai/tools/default-tools
- Custom tools: https://docs.vapi.ai/tools/custom-tools
- Phone calling: https://docs.vapi.ai/phone-calling
- Twilio import: https://docs.vapi.ai/phone-numbers/import-twilio
- Telnyx import: https://docs.vapi.ai/telnyx
- Telnyx SIP: https://docs.vapi.ai/advanced/sip/telnyx
- Server URL (webhooks): https://docs.vapi.ai/server-url
- Voice providers: https://docs.vapi.ai/providers/voice/elevenlabs, .../vapi-voices, .../playht
- Model providers: https://docs.vapi.ai/providers/model/openai, .../anthropic, .../azure-openai
- Dashboard: https://dashboard.vapi.ai

### Retell

- Quickstart: https://docs.retellai.com/get-started/quick-start
- Multi-Prompt overview: https://docs.retellai.com/build/single-multi-prompt/prompt-overview
- Conversation Flow overview: https://docs.retellai.com/build/conversation-flow/overview
- LLM Playground: https://docs.retellai.com/test/llm-playground
- Simulation Testing: https://docs.retellai.com/test/llm-simulation-testing
- Custom Telephony: https://docs.retellai.com/deploy/custom-telephony
- Outbound calls: https://docs.retellai.com/deploy/outbound-call
- Webhook overview: https://docs.retellai.com/features/webhook-overview
- Post-call analysis: https://docs.retellai.com/features/post-call-analysis-overview
- Pricing: https://www.retellai.com/pricing
- Dashboard: https://dashboard.retellai.com

### Cross-references in repo

- `phase-1-setup.md` — comprehensive Phase 1 deployment + test guide
- `vapi-script.md` — therapist generic script
- `profile.md` — first real test client overlay context
- `Second Brain/02-DayJob/Zion Work/AI-Venture/reference/industry-stack-review/therapist.md` — productization deep dive

## 11. Open questions for future research

Documentation gaps surfaced during research that may need verification at deployment time:

- **Retell Multi-Prompt exact field names** — `state_name`, `state_prompt`, `edge_condition`, `state_tools` are conceptual per the docs but the dashboard UI may use different labels. Verify in dashboard at deployment.
- **Retell intent rules configuration** — the conceptual model (intent fires from any state → transitions to crisis state) is documented; the exact UI for configuring keyword-based intents is not in the public docs as of this writing. Deploy-time verification.
- **Vapi system-prompt token limit** — not officially published; the cheap-stack scripts in this repo are well under typical limits but verify if a vertical's script grows past ~8K tokens.
- **Both platforms — exact webhook retry behavior** — what happens if your `serverUrl` returns 500? Vapi retries 3× by default; Retell behavior not officially documented. Verify in production traffic.

When you encounter ambiguity in either platform's dashboard during setup, the platform's in-dashboard chat-support is generally responsive. Document any clarifications in this guide's change log so subsequent operators don't hit the same questions.

---

**Last updated:** 2026-05-08 — initial authoring during EM Phase 1 build kickoff. Backed by Vapi docs (https://docs.vapi.ai) and Retell docs (https://docs.retellai.com) with Vapi pricing per third-party comparisons and Retell pricing per https://www.retellai.com/pricing.
