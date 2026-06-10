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

export function PlumbingContractorAuditForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = {
      vertical: "plumbing-contractors",
      source: "clearautomations-industries-plumbing-contractors",
      companyName: (form.elements.namedItem("companyName") as HTMLInputElement)
        .value,
      contactName: (form.elements.namedItem("contactName") as HTMLInputElement)
        .value,
      workEmail: (form.elements.namedItem("workEmail") as HTMLInputElement)
        .value,
      workPhone: (form.elements.namedItem("workPhone") as HTMLInputElement)
        .value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
      serviceArea: (form.elements.namedItem("serviceArea") as HTMLInputElement)
        .value,
      monthlyLeadVolume: (
        form.elements.namedItem("monthlyLeadVolume") as HTMLSelectElement
      ).value,
      afterHoursCoverage: (
        form.elements.namedItem("afterHoursCoverage") as HTMLSelectElement
      ).value,
      currentTools: (form.elements.namedItem("currentTools") as HTMLInputElement)
        .value,
      biggestLeak: (form.elements.namedItem("biggestLeak") as HTMLSelectElement)
        .value,
      dataAcknowledgement: (
        form.elements.namedItem("dataAcknowledgement") as HTMLInputElement
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
          Plumbing workflow audit requested.
        </h3>
        <p className="text-[var(--navy-text)] text-[15px] leading-[1.7]">
          You will receive a missed-call and emergency-intake workflow review
          within 2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <HoneypotField />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Company name">
          <input type="text" name="companyName" placeholder="Company name" required className={inputClass} />
        </Field>
        <Field label="Your name">
          <input type="text" name="contactName" placeholder="Your name" required className={inputClass} />
        </Field>
        <Field label="Work email">
          <input type="email" name="workEmail" placeholder="you@company.com" required className={inputClass} />
        </Field>
        <Field label="Work phone">
          <input type="tel" name="workPhone" placeholder="Work phone" required className={inputClass} />
        </Field>
        <Field label="Company website" className="sm:col-span-2">
          <input type="url" name="website" placeholder="https://example.com" required className={inputClass} />
        </Field>
        <Field label="Service area" className="sm:col-span-2">
          <input type="text" name="serviceArea" placeholder="Houston, DFW, San Antonio, Austin, etc." required className={inputClass} />
        </Field>
        <Field label="Monthly lead volume">
          <select name="monthlyLeadVolume" required defaultValue="" className={selectClass}>
            <option value="" disabled>Monthly lead volume</option>
            <option value="under-50">Under 50 leads</option>
            <option value="50-150">50-150 leads</option>
            <option value="150-400">150-400 leads</option>
            <option value="400+">400+ leads</option>
          </select>
        </Field>
        <Field label="After-hours coverage">
          <select name="afterHoursCoverage" required defaultValue="" className={selectClass}>
            <option value="" disabled>After-hours coverage</option>
            <option value="owner-cell">Owner cell phone</option>
            <option value="answering-service">Answering service</option>
            <option value="office-hours-only">Office hours only</option>
            <option value="dispatcher">Dedicated dispatcher</option>
          </select>
        </Field>
        <Field label="Current CRM/dispatch tools" className="sm:col-span-2">
          <input type="text" name="currentTools" placeholder="ServiceTitan, Jobber, Housecall Pro, spreadsheet, etc." required className={inputClass} />
        </Field>
        <Field label="Biggest revenue leak" className="sm:col-span-2">
          <select name="biggestLeak" required defaultValue="" className={selectClass}>
            <option value="" disabled>Biggest revenue leak</option>
            <option value="missed-calls">Missed calls</option>
            <option value="after-hours-emergencies">After-hours emergencies</option>
            <option value="unquoted-estimates">Unfollowed estimates</option>
            <option value="past-customer-reactivation">Past-customer reactivation</option>
            <option value="reviews">Not enough reviews</option>
            <option value="unclear">Not sure yet</option>
          </select>
        </Field>
      </div>

      <label className="flex gap-3 items-start text-[13px] leading-[1.6] text-[var(--navy-text)]">
        <input
          type="checkbox"
          name="dataAcknowledgement"
          required
          className="mt-1 accent-[var(--amber)]"
        />
        <span>
          I understand this form is for business workflow information only and
          will not include customer payment card numbers, access codes, private
          notes, or emergency details that should stay inside our dispatch
          system.
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
        {status === "submitting" ? "Sending..." : "Request Plumbing Workflow Audit"}
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
