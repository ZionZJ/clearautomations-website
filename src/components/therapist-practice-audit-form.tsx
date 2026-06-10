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

export function TherapistPracticeAuditForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = {
      vertical: "therapists",
      source: "clearautomations-industries-therapists",
      practiceName: (
        form.elements.namedItem("practiceName") as HTMLInputElement
      ).value,
      contactName: (
        form.elements.namedItem("contactName") as HTMLInputElement
      ).value,
      workEmail: (form.elements.namedItem("workEmail") as HTMLInputElement)
        .value,
      workPhone: (form.elements.namedItem("workPhone") as HTMLInputElement)
        .value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
      providerCount: (
        form.elements.namedItem("providerCount") as HTMLSelectElement
      ).value,
      ehrTools: (form.elements.namedItem("ehrTools") as HTMLInputElement)
        .value,
      adminPain: (form.elements.namedItem("adminPain") as HTMLSelectElement)
        .value,
      monthlyVolume: (
        form.elements.namedItem("monthlyVolume") as HTMLSelectElement
      ).value,
      phiAcknowledgement: (
        form.elements.namedItem("phiAcknowledgement") as HTMLInputElement
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
          Therapist-practice audit requested.
        </h3>
        <p className="text-[var(--navy-text)] text-[15px] leading-[1.7]">
          You will receive a non-PHI workflow review and next-step map within 2
          business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <HoneypotField />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Practice name">
          <input type="text" name="practiceName" placeholder="Practice name" required className={inputClass} />
        </Field>
        <Field label="Your name">
          <input type="text" name="contactName" placeholder="Your name" required className={inputClass} />
        </Field>
        <Field label="Work email">
          <input type="email" name="workEmail" placeholder="you@practice.com" required className={inputClass} />
        </Field>
        <Field label="Work phone">
          <input type="tel" name="workPhone" placeholder="Work phone" required className={inputClass} />
        </Field>
        <Field label="Practice website" className="sm:col-span-2">
          <input type="url" name="website" placeholder="https://example.com" required className={inputClass} />
        </Field>
        <Field label="Provider count">
          <select name="providerCount" required defaultValue="" className={selectClass}>
            <option value="" disabled>Provider count</option>
            <option value="solo">Solo practice</option>
            <option value="2-5">2-5 providers</option>
            <option value="6-15">6-15 providers</option>
            <option value="16-50">16-50 providers</option>
            <option value="50+">50+ providers</option>
          </select>
        </Field>
        <Field label="Monthly session volume">
          <select name="monthlyVolume" required defaultValue="" className={selectClass}>
            <option value="" disabled>Monthly session volume</option>
            <option value="under-50">Under 50 sessions</option>
            <option value="50-200">50-200 sessions</option>
            <option value="200-500">200-500 sessions</option>
            <option value="500+">500+ sessions</option>
          </select>
        </Field>
        <Field label="Current EHR/tools" className="sm:col-span-2">
          <input type="text" name="ehrTools" placeholder="Current EHR/tools only" required className={inputClass} />
        </Field>
        <Field label="Biggest admin bottleneck" className="sm:col-span-2">
          <select name="adminPain" required defaultValue="" className={selectClass}>
            <option value="" disabled>Biggest admin bottleneck</option>
            <option value="slow-lead-response">Slow lead response</option>
            <option value="consult-no-shows">Consult no-shows</option>
            <option value="directory-maintenance">Directory maintenance</option>
            <option value="intake-paperwork">Intake paperwork</option>
            <option value="claims-reconciliation">Claims reconciliation</option>
            <option value="unclear">Not sure yet</option>
          </select>
        </Field>
      </div>

      <label className="flex gap-3 items-start text-[13px] leading-[1.6] text-[var(--navy-text)]">
        <input
          type="checkbox"
          name="phiAcknowledgement"
          required
          className="mt-1 accent-[var(--amber)]"
        />
        <span>
          I understand this form is for practice/business information only and
          will not include patient names, symptoms, insurance details,
          appointment reasons, clinical notes, or other patient-specific
          information.
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
        {status === "submitting"
          ? "Sending..."
          : "Request Therapist-Practice Audit"}
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

