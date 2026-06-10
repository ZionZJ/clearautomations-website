# ClearAutomations Business Associate Agreement — DRAFT TEMPLATE

> ## ⚠️ ATTORNEY REVIEW REQUIRED BEFORE USE
>
> **This is a working draft based on the U.S. Department of Health and Human Services Office for Civil Rights (HHS OCR) sample business associate contract provisions (publicly available at hhs.gov/hipaa). It is not legal advice. It has not been reviewed by counsel licensed in Texas or any other jurisdiction.**
>
> **What to ask your attorney to verify:**
>
> 1. The defined terms match the current HIPAA Privacy, Security, and Breach Notification Rules (45 CFR Parts 160 and 164) as amended through 2024–2025.
> 2. The permitted uses and disclosures section reflects ClearAutomations' actual operational needs (voice-agent transcripts, CRM logging, email routing, EHR handoff) without overreaching.
> 3. The breach notification timeline (currently 60 days) matches both HIPAA Federal requirements AND any applicable state-law requirements (Texas HB 300 has stricter notification rules in some scenarios).
> 4. The subcontractor flow-down provisions correctly bind downstream vendors (Retell, Twilio Security Edition, Anthropic/OpenAI HIPAA-eligible APIs, hosting provider, email provider) to BAAs of equivalent strength.
> 5. The indemnification and limitation-of-liability provisions align with the Master Services Agreement (Sections 9–10 of the MSA) without creating gaps or contradictions.
> 6. The termination + return/destruction-of-PHI provisions are operationally feasible (some PHI may be in immutable system logs).
> 7. The Texas HB 300 references are accurate as of the current statute and rules.
>
> **Budget for attorney review:** Combined with the MSA review, $1,500–$3,500 total for both documents. For a strict healthcare-specialty firm (Hall Render, Norton Rose Fulbright), expect the higher end.
>
> **When this BAA applies:** This BAA is signed (in addition to the MSA) for any engagement where ClearAutomations will create, receive, maintain, or transmit Protected Health Information (PHI) on behalf of Client. This typically applies to Phase 2 and Phase 3 of healthcare engagements (therapist, dental, future healthcare verticals). Phase 1 is intentionally non-PHI and does not technically require a BAA, but many healthcare clients ask for a signed BAA as a trust signal even in Phase 1; signing one early is generally fine.

---

# BUSINESS ASSOCIATE AGREEMENT

**This Business Associate Agreement** (this "**BAA**") is entered into as of *[Effective Date]* (the "**Effective Date**") by and between:

**[Client Legal Name]**, a *[entity type]* with its principal place of business at *[Address]* ("**Covered Entity**"), and

**ClearAutomations LLC**, a Texas limited liability company with its principal place of business at *[Address]* ("**Business Associate**").

Covered Entity and Business Associate are each referred to as a "**Party**" and collectively as the "**Parties**."

## RECITALS

WHEREAS, Covered Entity is a "covered entity" as defined in the Health Insurance Portability and Accountability Act of 1996, as amended ("HIPAA"), and its implementing regulations at 45 CFR Parts 160 and 164 (the "HIPAA Rules");

WHEREAS, Business Associate provides services to Covered Entity under one or more Statements of Work executed pursuant to that certain Master Services Agreement between the Parties dated *[MSA Effective Date]* (the "MSA"), which Services may involve the creation, receipt, maintenance, or transmission of Protected Health Information on behalf of Covered Entity;

WHEREAS, Business Associate is a "business associate" of Covered Entity as defined in the HIPAA Rules;

WHEREAS, the Parties desire to enter into this BAA to satisfy the requirements of the HIPAA Rules and applicable state laws, including the Texas Medical Records Privacy Act ("Texas HB 300");

NOW, THEREFORE, in consideration of the mutual covenants and agreements set forth herein, the Parties agree as follows:

## 1. DEFINITIONS

Capitalized terms used but not otherwise defined in this BAA have the meanings ascribed to them in the HIPAA Rules. Without limiting the foregoing:

1.1 "**Breach**" has the meaning set forth in 45 CFR § 164.402.

1.2 "**Designated Record Set**" has the meaning set forth in 45 CFR § 164.501.

1.3 "**Electronic Protected Health Information**" or "**ePHI**" means Protected Health Information transmitted by or maintained in electronic media.

1.4 "**Individual**" has the meaning set forth in 45 CFR § 160.103.

1.5 "**Protected Health Information**" or "**PHI**" has the meaning set forth in 45 CFR § 160.103, limited to PHI created, received, maintained, or transmitted by Business Associate on behalf of Covered Entity under the Services.

1.6 "**Required by Law**" has the meaning set forth in 45 CFR § 164.103.

1.7 "**Secretary**" means the Secretary of the U.S. Department of Health and Human Services or any officer or employee of HHS to whom the authority involved has been delegated.

1.8 "**Security Incident**" has the meaning set forth in 45 CFR § 164.304.

1.9 "**Services**" has the meaning given in the MSA.

1.10 "**Subcontractor**" means a person or entity to whom Business Associate delegates a function, activity, or service involving the creation, receipt, maintenance, or transmission of PHI on behalf of Covered Entity (e.g., HIPAA-eligible cloud vendors, voice-agent platforms, AI/LLM API providers).

1.11 "**Texas HB 300**" means the Texas Medical Records Privacy Act, codified at Texas Health & Safety Code Chapter 181, as amended.

## 2. PERMITTED USES AND DISCLOSURES OF PHI

2.1 **Performance of Services.** Business Associate may use and disclose PHI to perform the Services described in the MSA and any executed Statement of Work, provided such uses and disclosures comply with the HIPAA Rules, Texas HB 300, and this BAA.

2.2 **Management and Administration.** Business Associate may use PHI for the proper management and administration of Business Associate or to carry out the legal responsibilities of Business Associate, provided that such use is Required by Law or Business Associate obtains reasonable assurances from any third party to whom the PHI is disclosed that the PHI will be kept confidential, used or further disclosed only as Required by Law or for the purpose disclosed, and the third party notifies Business Associate of any instances of which it is aware in which the confidentiality of the PHI has been breached.

2.3 **Aggregation and Analytics.** To the extent permitted by 45 CFR § 164.504(e)(2)(i)(B), Business Associate may aggregate PHI in its possession with PHI of other Covered Entities in Business Associate's possession in order to provide data analyses relating to the health care operations of the respective Covered Entities. Aggregate data may not be disclosed in a manner that identifies any specific Individual.

2.4 **De-Identified Data.** Business Associate may de-identify PHI in accordance with 45 CFR § 164.514(b) and use de-identified data for any lawful purpose without further obligation under this BAA.

2.5 **Prohibited Uses and Disclosures.**
   (a) Business Associate will not use or disclose PHI other than as permitted by this BAA, the MSA, or as Required by Law.
   (b) Business Associate will not use or disclose PHI in a manner that would violate Subpart E of 45 CFR Part 164 if done by Covered Entity, except as set forth in Sections 2.2, 2.3, or 2.4.
   (c) Business Associate will not Sell PHI as defined in 45 CFR § 164.502(a)(5)(ii) and will not use or disclose PHI for marketing purposes as defined in 45 CFR § 164.501 without obtaining a valid authorization from the Individual.
   (d) Business Associate will not disclose PHI to any third party other than a Subcontractor that has executed a written agreement with Business Associate containing terms at least as restrictive as this BAA.

## 3. SAFEGUARDS

3.1 **Administrative, Physical, and Technical Safeguards.** Business Associate will implement and maintain administrative, physical, and technical safeguards as required by 45 CFR § 164.314(a) and Subpart C of 45 CFR Part 164 to prevent the use or disclosure of PHI other than as permitted by this BAA, and to protect the confidentiality, integrity, and availability of ePHI.

3.2 **Workforce Training.** Business Associate will train its workforce members who handle PHI on the requirements of this BAA and applicable HIPAA Rules and document such training. Training will be repeated at least annually and within the timeframe required by Texas HB 300 for any workforce member newly added to a role involving PHI access.

3.3 **Access Controls.** Business Associate will implement role-based access controls to PHI such that only workforce members with a legitimate business need access PHI in the course of performing the Services.

3.4 **Encryption.** Business Associate will encrypt ePHI at rest and in transit using industry-standard encryption methods (e.g., AES-256 at rest, TLS 1.2 or higher in transit).

3.5 **Logging and Monitoring.** Business Associate will maintain logs of PHI access and disclosure events sufficient to support reporting and accounting obligations under this BAA.

## 4. REPORTING AND BREACH NOTIFICATION

4.1 **Reporting Use or Disclosure Not Permitted.** Business Associate will report to Covered Entity any use or disclosure of PHI not permitted by this BAA of which Business Associate becomes aware, without unreasonable delay and in no event later than fifteen (15) calendar days after discovery.

4.2 **Security Incidents.** Business Associate will report to Covered Entity any Security Incident of which Business Associate becomes aware, except that successfully thwarted attempts (e.g., pings on firewalls, port scans, denial-of-service attempts that do not result in unauthorized access) are reported in aggregate on a periodic basis rather than individually.

4.3 **Breach Notification.** Following the discovery of a Breach of Unsecured Protected Health Information, Business Associate will notify Covered Entity without unreasonable delay and in no event later than sixty (60) calendar days after discovery. The notification will include, to the extent then known:
   (a) The identification of each Individual whose PHI was, or is reasonably believed to have been, accessed, acquired, used, or disclosed during the Breach;
   (b) A brief description of the Breach, including the date of the Breach and the date of discovery;
   (c) A description of the types of PHI involved (e.g., name, social security number, date of birth, diagnosis, etc.);
   (d) Any steps Individuals should take to protect themselves;
   (e) A brief description of the actions Business Associate is taking to investigate, mitigate harm, and prevent further Breaches.

4.4 **Texas HB 300 Coordination.** The Parties acknowledge that Texas HB 300 may impose additional notification requirements. Business Associate will cooperate with Covered Entity to ensure timely notification to affected Texas residents and to the Texas Attorney General as required by Texas HB 300 and Texas Business & Commerce Code § 521.053.

4.5 **Cooperation with Investigations.** Business Associate will reasonably cooperate with Covered Entity's investigation of any Breach or alleged Breach, including providing access to relevant records, logs, and personnel.

## 5. SUBCONTRACTORS

5.1 **Subcontractor BAAs.** In accordance with 45 CFR § 164.502(e)(1)(ii), Business Associate will ensure that any Subcontractor that creates, receives, maintains, or transmits PHI on behalf of Business Associate enters into a written agreement with Business Associate containing terms at least as restrictive as this BAA.

5.2 **Subcontractor Inventory.** Upon Covered Entity's reasonable request, Business Associate will provide a current list of Subcontractors with access to Covered Entity's PHI. As of the Effective Date, the anticipated Subcontractors include:
   - *[Cloud hosting provider — e.g., DigitalOcean Standard Support with BAA, AWS HIPAA-eligible services, GCP HIPAA-eligible services]*
   - *[Voice agent platform — e.g., Retell AI Enterprise tier with BAA, Vapi with HIPAA add-on]*
   - *[Telephony provider — e.g., Twilio Security Edition with BAA]*
   - *[CRM provider — e.g., HubSpot Enterprise with Sensitive Data BAA]*
   - *[Email provider — e.g., Resend with BAA, Postmark with BAA, AWS SES with BAA]*
   - *[AI / LLM API provider — e.g., Anthropic HIPAA-eligible API, OpenAI HIPAA-eligible API]*
   - *[Private storage for call recordings — e.g., AWS S3 with KMS and BAA]*

Business Associate will not engage a new Subcontractor with PHI access without first executing a BAA with that Subcontractor.

## 6. ACCESS, AMENDMENT, AND ACCOUNTING

6.1 **Access to PHI.** Within fifteen (15) business days of a request from Covered Entity (and in any event within the timeframe required by 45 CFR § 164.524 and Texas HB 300), Business Associate will make available to Covered Entity (or, as directed by Covered Entity, to the Individual) any PHI in a Designated Record Set maintained by Business Associate.

6.2 **Amendment of PHI.** Within fifteen (15) business days of a request from Covered Entity, Business Associate will make any amendment(s) to PHI in a Designated Record Set as directed or agreed to by Covered Entity pursuant to 45 CFR § 164.526.

6.3 **Accounting of Disclosures.** Business Associate will maintain a record of disclosures of PHI sufficient to enable Covered Entity to respond to a request by an Individual for an accounting of disclosures pursuant to 45 CFR § 164.528. Within thirty (30) business days of a request from Covered Entity, Business Associate will provide such record.

## 7. ACCESS BY THE SECRETARY

Business Associate will make its internal practices, books, and records (including policies, procedures, and PHI) relating to the use and disclosure of PHI on behalf of Covered Entity available to the Secretary for purposes of determining Covered Entity's or Business Associate's compliance with the HIPAA Rules.

## 8. TERM AND TERMINATION

8.1 **Term.** This BAA commences on the Effective Date and continues until terminated as provided in this Section 8.

8.2 **Termination for Cause.** Upon Covered Entity's knowledge of a material breach by Business Associate of its obligations under this BAA, Covered Entity will provide an opportunity for Business Associate to cure the breach or end the violation within thirty (30) days. If Business Associate does not cure within such period, Covered Entity may terminate this BAA and the MSA immediately upon written notice.

8.3 **Termination Upon Termination of MSA.** This BAA terminates automatically upon termination of the MSA, except that the obligations in Section 8.4 survive.

8.4 **Return or Destruction of PHI Upon Termination.**
   (a) Upon termination of this BAA for any reason, Business Associate will, if feasible, return to Covered Entity or destroy all PHI received from, or created or received by Business Associate on behalf of, Covered Entity, and will retain no copies of such information.
   (b) If return or destruction is not feasible (for example, because PHI is contained in immutable backup media or system logs whose deletion would compromise audit integrity), Business Associate will extend the protections of this BAA to such PHI and limit further uses and disclosures to those purposes that make the return or destruction infeasible, for so long as Business Associate maintains the PHI.
   (c) Business Associate will provide Covered Entity with written certification of return or destruction (or, where applicable, the reasons return or destruction is not feasible) within thirty (30) days of termination.

## 9. INDEMNIFICATION

9.1 **Business Associate Indemnification.** Business Associate will defend, indemnify, and hold harmless Covered Entity from any claim, loss, liability, damage, fine, penalty, or expense (including reasonable attorneys' fees) arising from Business Associate's:
   (a) Material breach of this BAA;
   (b) Negligent or willful unauthorized use or disclosure of PHI;
   (c) Failure to comply with the HIPAA Rules or Texas HB 300 to the extent applicable to Business Associate.

9.2 **Covered Entity Indemnification.** Covered Entity will defend, indemnify, and hold harmless Business Associate from any claim arising from Covered Entity's negligent or willful provision of PHI to Business Associate outside the scope of the Services or otherwise in violation of applicable law.

9.3 **Limitation of Liability.** The limitation-of-liability provisions of the MSA (Section 9 of the MSA) apply to this BAA, except that the cap does not apply to (i) liability arising from indemnification under this Section 9, (ii) breach of confidentiality or PHI protection obligations, (iii) civil monetary penalties imposed by HHS or the Texas Attorney General against Covered Entity due to Business Associate's actions, or (iv) gross negligence or willful misconduct.

## 10. MISCELLANEOUS

10.1 **Regulatory References.** A reference in this BAA to a section in the HIPAA Rules or Texas HB 300 means the section as in effect or as amended.

10.2 **Amendment.** The Parties agree to take such action as is necessary to amend this BAA from time to time as necessary for the Parties to comply with the requirements of the HIPAA Rules and Texas HB 300.

10.3 **Survival.** The respective rights and obligations of Business Associate under Sections 8.4 and 9 survive the termination of this BAA.

10.4 **Interpretation.** Any ambiguity in this BAA will be resolved to permit the Parties to comply with the HIPAA Rules and Texas HB 300.

10.5 **Conflict.** In the event of any conflict between this BAA and the MSA, this BAA controls with respect to matters governed by the HIPAA Rules or Texas HB 300; the MSA controls with respect to all other matters.

10.6 **Governing Law.** This BAA is governed by federal law (the HIPAA Rules) and, to the extent not preempted by federal law, by the laws of the State of Texas.

10.7 **Notices.** All notices required under this BAA will be delivered in accordance with the notice provisions of the MSA.

10.8 **Counterparts; Electronic Signature.** This BAA may be executed in counterparts. Electronic signatures have the same legal force as wet signatures.

---

**IN WITNESS WHEREOF**, the Parties have executed this Business Associate Agreement as of the Effective Date.

**COVERED ENTITY: [Client Legal Name]**

By: ______________________________
Name: _________________
Title: _________________
Date: _________________

**BUSINESS ASSOCIATE: CLEARAUTOMATIONS LLC**

By: ______________________________
Name: Zion John
Title: Founder
Date: _________________

---

# OPERATIONAL NOTES (NOT PART OF THE EXECUTED BAA)

## Subcontractor BAA chain — track these

Before signing this BAA with any healthcare client, Business Associate (ClearAutomations) needs the downstream BAA chain in place with each subcontractor that will touch PHI. As of 2026-05-15, the inventory:

| Vendor | BAA Status | Notes |
|---|---|---|
| Retell AI Enterprise tier | TBD | Sales contact required; Standard plan does NOT include HIPAA |
| Vapi (if used) | TBD | HIPAA add-on, ~$1K/mo per third-party reports — get written quote |
| Twilio Security Edition | TBD | ~30% premium over standard Twilio; sales-priced |
| Telnyx HIPAA-eligible services | TBD | Self-service-ish; verify shared-responsibility model |
| HubSpot Enterprise + Sensitive Data | TBD | Sales contact; tier required for healthcare prospects |
| Resend BAA | UNCONFIRMED | Earlier marketing positioned BAA-available; verify in writing |
| Anthropic HIPAA-eligible API | TBD | Self-service via trust.anthropic.com |
| OpenAI HIPAA-eligible API | TBD | Self-service via API console |
| DigitalOcean Standard/Premium Support + BAA | TBD | Per DO HIPAA docs: BAA + Standard/Premium Support tier BOTH required |
| AWS HIPAA-eligible | TBD | Self-service via AWS Artifact |
| GCP HIPAA-eligible | TBD | Self-service via Google Cloud Platform BAA addendum |

Maintain this inventory in a separate tracker and update Section 5.2 of the BAA before sending to a healthcare client.

## When to send this BAA

| Engagement type | BAA required? |
|---|---|
| Non-healthcare vertical (HVAC, roofing, postal-presort, legal-intake, home-services) | No (no PHI) |
| Healthcare Phase 1 (therapist, dental — non-PHI by design) | Technically no, but recommend signing anyway as trust signal |
| Healthcare Phase 2+ (PHI workflows) | YES — required by law |

## What to do if a client modifies the BAA

Some healthcare clients will send back redlines or insist on their own BAA template. Standard playbook:
1. Read their version carefully. If their version is HHS-sample-derived, accept with minor edits.
2. If their version adds asymmetric indemnification, unusually short notification windows (<60 days), or no liability cap, push back with the MSA limitation-of-liability cap as the anchor.
3. If their version is genuinely unworkable, escalate to attorney before negotiating.

## Change log

- 2026-05-15: Initial draft template authored based on HHS OCR sample BAA provisions. Texas HB 300 references added. Subcontractor inventory placeholder included. Pending Texas-licensed attorney redline.
