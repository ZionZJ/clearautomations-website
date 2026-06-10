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

export function PostalPresortAuditForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = {
      vertical: "postal-presort",
      source: "clearautomations-industries-postal-presort",
      companyName: (form.elements.namedItem("companyName") as HTMLInputElement)
        .value,
      contactName: (form.elements.namedItem("contactName") as HTMLInputElement)
        .value,
      workEmail: (form.elements.namedItem("workEmail") as HTMLInputElement)
        .value,
      workPhone: (form.elements.namedItem("workPhone") as HTMLInputElement)
        .value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
      monthlyPieceVolume: (
        form.elements.namedItem("monthlyPieceVolume") as HTMLSelectElement
      ).value,
      mailClassMix: (
        form.elements.namedItem("mailClassMix") as HTMLSelectElement
      ).value,
      currentMailPrep: (
        form.elements.namedItem("currentMailPrep") as HTMLSelectElement
      ).value,
      workshareInterest: (
        form.elements.namedItem("workshareInterest") as HTMLSelectElement
      ).value,
      phiStatus: (form.elements.namedItem("phiStatus") as HTMLSelectElement)
        .value,
      biggestPain: (
        form.elements.namedItem("biggestPain") as HTMLSelectElement
      ).value,
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
          Postal-presort inbound audit requested.
        </h3>
        <p className="text-[var(--navy-text)] text-[15px] leading-[1.7]">
          You will receive an inbound funnel review and next-step map within 2
          business days.
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
        <Field label="Monthly piece volume">
          <select name="monthlyPieceVolume" required defaultValue="" className={selectClass}>
            <option value="" disabled>Monthly piece volume</option>
            <option value="under-500">Under 500 pieces</option>
            <option value="500-2k">500-2,000 pieces</option>
            <option value="2k-10k">2,000-10,000 pieces</option>
            <option value="10k-25k">10,000-25,000 pieces</option>
            <option value="25k+">25,000+ pieces</option>
          </select>
        </Field>
        <Field label="Mail class mix">
          <select name="mailClassMix" required defaultValue="" className={selectClass}>
            <option value="" disabled>Primary mail class</option>
            <option value="first-class">First-Class</option>
            <option value="marketing-mail">Marketing Mail</option>
            <option value="periodicals">Periodicals</option>
            <option value="flats">Flats</option>
            <option value="mix">Mix of multiple</option>
          </select>
        </Field>
        <Field label="Current mail prep">
          <select name="currentMailPrep" required defaultValue="" className={selectClass}>
            <option value="" disabled>Where mail prep happens</option>
            <option value="in-house">In-house</option>
            <option value="outsourced-other">Outsourced to another presort</option>
            <option value="hybrid">Hybrid</option>
            <option value="unsure">Unsure</option>
          </select>
        </Field>
        <Field label="Workshare interest">
          <select name="workshareInterest" required defaultValue="" className={selectClass}>
            <option value="" disabled>Primary interest</option>
            <option value="cost-reduction">Postage cost reduction</option>
            <option value="address-cleaning">CASS / NCOA address cleaning</option>
            <option value="imb-tracking">IMb piece-level tracking</option>
            <option value="all">All of the above</option>
          </select>
        </Field>
        <Field label="PHI / regulated-data status">
          <select name="phiStatus" required defaultValue="" className={selectClass}>
            <option value="" disabled>PHI status</option>
            <option value="no-phi">No PHI in our mail</option>
            <option value="some-phi">Some PHI (healthcare clients)</option>
            <option value="mostly-phi">Mostly PHI</option>
          </select>
        </Field>
        <Field label="Biggest pain" className="sm:col-span-2">
          <select name="biggestPain" required defaultValue="" className={selectClass}>
            <option value="" disabled>Biggest pain</option>
            <option value="postage-cost">Postage costs keep going up</option>
            <option value="mailroom-staffing">Mailroom staffing</option>
            <option value="compliance">Compliance / address hygiene</option>
            <option value="vendor-changing">Considering changing presort vendor</option>
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
          will not include client mail-piece content, end-recipient
          information, payment details, or anything from our production presort
          stack.
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
        {status === "submitting" ? "Sending..." : "Request Inbound Audit"}
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
