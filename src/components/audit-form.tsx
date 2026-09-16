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
import { siteConfig } from "@/lib/site-config";

const LEAD_ENDPOINT = "/api/leads/free-audit";

export function AuditForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = {
      business: (form.elements.namedItem("business") as HTMLInputElement).value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
      challenge: (form.elements.namedItem("challenge") as HTMLSelectElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
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

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-8 text-center">
        <div className="text-[var(--amber)] text-3xl mb-4">&#10003;</div>
        <h3 className="font-[var(--font-display)] text-[1.4rem] font-bold text-white mb-2">
          Snapshot requested.
        </h3>
        <p className="text-[var(--navy-text)] text-[15px] leading-[1.7]">
          You&apos;ll receive your one-page Missed-Call Snapshot within one
          business day at the email you provided.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <HoneypotField />
      <Field label="Business name">
        <input
          type="text"
          name="business"
          placeholder="Clearview HVAC"
          required
          className={inputClass}
        />
      </Field>
      <Field label="Website URL">
        <input
          type="url"
          name="website"
          placeholder="https://example.com"
          required
          className={inputClass}
        />
      </Field>
      <Field label="Current front-desk challenge">
        <select
          name="challenge"
          required
          className={selectClass}
          defaultValue=""
        >
          <option value="" disabled>
            Select one
          </option>
          <option value="missed-calls">Missed or unanswered calls</option>
          <option value="slow-followup">Slow follow-up on new leads</option>
          <option value="open-estimates">Open estimates not followed up</option>
          <option value="after-hours">After-hours coverage</option>
          <option value="other">Something else</option>
        </select>
      </Field>
      <Field label="Email">
        <input
          type="email"
          name="email"
          placeholder="you@company.com"
          required
          className={inputClass}
        />
      </Field>
      <Field label="Phone (optional)">
        <input
          type="tel"
          name="phone"
          placeholder="Business phone"
          className={inputClass}
        />
      </Field>
      <ContactConsent>
        I agree that ClearAutomations may contact me about this Snapshot by
        email and, if I provided a phone number, by phone or text. Message and
        data rates may apply. Reply STOP or tell us to stop to opt out. I understand this form is for
        business workflow information, not sensitive customer, patient,
        payment, or legal details.
      </ContactConsent>
      <PrivacyNote />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-[var(--amber)] text-[var(--stone)] text-[15px] font-semibold py-3.5 px-8 rounded hover:bg-[var(--amber-hover)] transition-colors mt-2 disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Request My Free Snapshot"}
      </button>

      {status === "error" && (
        <p className="text-center text-sm text-red-400">
          Something went wrong. Email us directly at{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="underline">
            {siteConfig.contactEmail}
          </a>
        </p>
      )}
    </form>
  );
}
