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

export function DentalPracticeAuditForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = {
      vertical: "dental-practices",
      source: "clearautomations-industries-dental-practices",
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
      monthlyPatientVolume: (
        form.elements.namedItem("monthlyPatientVolume") as HTMLSelectElement
      ).value,
      currentTools: (
        form.elements.namedItem("currentTools") as HTMLInputElement
      ).value,
      biggestLeak: (
        form.elements.namedItem("biggestLeak") as HTMLSelectElement
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
          Dental-practice audit requested.
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
            <option value="solo">Solo dentist</option>
            <option value="2-3">2-3 providers</option>
            <option value="4-8">4-8 providers</option>
            <option value="9+">9+ providers</option>
          </select>
        </Field>
        <Field label="Monthly patient volume">
          <select name="monthlyPatientVolume" required defaultValue="" className={selectClass}>
            <option value="" disabled>Monthly patient volume</option>
            <option value="under-150">Under 150 visits</option>
            <option value="150-400">150-400 visits</option>
            <option value="400-800">400-800 visits</option>
            <option value="800+">800+ visits</option>
          </select>
        </Field>
        <Field label="Current PMS/tools" className="sm:col-span-2">
          <input type="text" name="currentTools" placeholder="Current PMS/tools only" required className={inputClass} />
        </Field>
        <Field label="Biggest revenue leak" className="sm:col-span-2">
          <select name="biggestLeak" required defaultValue="" className={selectClass}>
            <option value="" disabled>Biggest revenue leak</option>
            <option value="missed-calls">Missed calls</option>
            <option value="no-shows">No-shows and cancellations</option>
            <option value="recall">Hygiene recall</option>
            <option value="treatment-plans">Treatment plan follow-up</option>
            <option value="schedule-gaps">Schedule gaps</option>
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
          will not include patient names, symptoms, diagnoses, treatment details,
          insurance IDs, appointment reasons, clinical notes, x-rays, or payment
          card details.
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
          : "Request Dental-Practice Audit"}
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

