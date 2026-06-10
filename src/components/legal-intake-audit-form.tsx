"use client";

import { useState, type FormEvent } from "react";
import {
  ContactConsent,
  Field,
  HoneypotField,
  PrivacyNote,
  inputClass,
  selectClass,
} from "@/components/form-fields";

const LEAD_ENDPOINT = "/api/leads/industry-audit";

export function LegalIntakeAuditForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = {
      vertical: "legal-intake",
      source: "clearautomations-industries-legal-intake",
      firmName: (form.elements.namedItem("firmName") as HTMLInputElement)
        .value,
      contactName: (form.elements.namedItem("contactName") as HTMLInputElement)
        .value,
      workEmail: (form.elements.namedItem("workEmail") as HTMLInputElement)
        .value,
      workPhone: (form.elements.namedItem("workPhone") as HTMLInputElement)
        .value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
      practiceAreas: (
        form.elements.namedItem("practiceAreas") as HTMLSelectElement
      ).value,
      attorneyCount: (
        form.elements.namedItem("attorneyCount") as HTMLSelectElement
      ).value,
      monthlyInquiryVolume: (
        form.elements.namedItem("monthlyInquiryVolume") as HTMLSelectElement
      ).value,
      caseManagementSystem: (
        form.elements.namedItem("caseManagementSystem") as HTMLSelectElement
      ).value,
      biggestPain: (
        form.elements.namedItem("biggestPain") as HTMLSelectElement
      ).value,
      ethicsAcknowledgement: (
        form.elements.namedItem("ethicsAcknowledgement") as HTMLInputElement
      ).checked,
      contactConsent: (form.elements.namedItem("contactConsent") as HTMLInputElement)
        .checked,
      websiteUrlConfirm: (
        form.elements.namedItem("websiteUrlConfirm") as HTMLInputElement
      ).value,
    };

    try {
      const res = await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-8 text-center">
        <div className="text-[var(--amber)] text-3xl mb-4">&#10003;</div>
        <h3 className="font-[var(--font-display)] text-[1.4rem] font-bold text-white mb-2">
          Legal intake audit requested.
        </h3>
        <p className="text-[var(--navy-text)] text-[15px] leading-[1.7]">
          You will receive a conflict-cleared intake architecture review within
          2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <HoneypotField />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Firm name">
          <input type="text" name="firmName" placeholder="Firm name" required className={inputClass} />
        </Field>
        <Field label="Your name">
          <input type="text" name="contactName" placeholder="Your name" required className={inputClass} />
        </Field>
        <Field label="Work email">
          <input type="email" name="workEmail" placeholder="you@firm.com" required className={inputClass} />
        </Field>
        <Field label="Work phone">
          <input type="tel" name="workPhone" placeholder="Work phone" required className={inputClass} />
        </Field>
        <Field label="Firm website" className="sm:col-span-2">
          <input type="url" name="website" placeholder="https://example.com" required className={inputClass} />
        </Field>
        <Field label="Primary practice area" className="sm:col-span-2">
          <select name="practiceAreas" required defaultValue="" className={selectClass}>
            <option value="" disabled>Primary practice area</option>
            <option value="personal-injury">Personal Injury</option>
            <option value="family">Family Law</option>
            <option value="immigration">Immigration</option>
            <option value="criminal">Criminal Defense</option>
            <option value="estate">Estate Planning</option>
            <option value="employment">Employment</option>
            <option value="mass-tort">Mass Tort</option>
            <option value="other">Other</option>
          </select>
        </Field>
        <Field label="Attorney count">
          <select name="attorneyCount" required defaultValue="" className={selectClass}>
            <option value="" disabled>Attorney count</option>
            <option value="solo">Solo attorney</option>
            <option value="2-3">2-3 attorneys</option>
            <option value="4-10">4-10 attorneys</option>
            <option value="11-30">11-30 attorneys</option>
            <option value="30+">30+ attorneys</option>
          </select>
        </Field>
        <Field label="Monthly inquiry volume">
          <select name="monthlyInquiryVolume" required defaultValue="" className={selectClass}>
            <option value="" disabled>Monthly inquiry volume</option>
            <option value="under-20">Under 20 inquiries</option>
            <option value="20-50">20-50 inquiries</option>
            <option value="50-150">50-150 inquiries</option>
            <option value="150-500">150-500 inquiries</option>
            <option value="500+">500+ inquiries</option>
          </select>
        </Field>
        <Field label="Case management system" className="sm:col-span-2">
          <select name="caseManagementSystem" required defaultValue="" className={selectClass}>
            <option value="" disabled>Case management in use</option>
            <option value="clio">Clio</option>
            <option value="mycase">MyCase</option>
            <option value="filevine">Filevine</option>
            <option value="practicepanther">PracticePanther</option>
            <option value="lawmatics">Lawmatics</option>
            <option value="spreadsheet">Spreadsheet / no CMS</option>
            <option value="other">Other</option>
          </select>
        </Field>
        <Field label="Biggest pain" className="sm:col-span-2">
          <select name="biggestPain" required defaultValue="" className={selectClass}>
            <option value="" disabled>Biggest pain</option>
            <option value="after-hours-response">After-hours intake response</option>
            <option value="tire-kicker-volume">Tire-kicker triage burden</option>
            <option value="conflict-check-friction">Conflict-check workflow friction</option>
            <option value="case-status-comms">Case-status communication gaps</option>
            <option value="sol-tracking">Statute of limitations tracking</option>
            <option value="unclear">Not sure yet</option>
          </select>
        </Field>
      </div>

      <label className="flex gap-3 items-start text-[13px] leading-[1.6] text-[var(--navy-text)]">
        <input
          type="checkbox"
          name="ethicsAcknowledgement"
          required
          className="mt-1 accent-[var(--amber)]"
        />
        <span>
          I understand this form is for firm/business workflow information only
          and will not include prospective-client names, fact patterns,
          opposing-party names, or anything privileged. I confirm I have
          authority to engage ClearAutomations on the firm&apos;s behalf.
        </span>
      </label>
      <ContactConsent>
        I agree that ClearAutomations may contact me about this audit by email,
        phone call, and text message, including calls and texts placed with
        automated or AI voice technology. Message and data rates may apply.
        Reply STOP or tell us to stop to opt out.
      </ContactConsent>
      <PrivacyNote />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-[var(--amber)] text-[var(--stone)] text-[15px] font-semibold py-3.5 px-8 rounded hover:bg-[var(--amber-hover)] transition-colors mt-2 disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Request Intake Audit"}
      </button>

      {status === "error" && (
        <p className="text-center text-sm text-red-400">
          Something went wrong. Email{" "}
          <a href="mailto:zion@clearautomations.com" className="underline">
            zion@clearautomations.com
          </a>
        </p>
      )}
    </form>
  );
}
