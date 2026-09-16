"use client";

import { useState, type FormEvent } from "react";
import {
  ContactConsent,
  Field,
  HoneypotField,
  PrivacyNote,
  inputClass,
  selectClass,
  textareaClass,
} from "@/components/form-fields";
import { siteConfig } from "@/lib/site-config";

const LEAD_ENDPOINT = "/api/leads/stack-audit";

export function StackAuditForm() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = {
      companyName: (form.elements.namedItem("companyName") as HTMLInputElement).value,
      contactName: (form.elements.namedItem("contactName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
      industry: (form.elements.namedItem("industry") as HTMLSelectElement).value,
      employees: (form.elements.namedItem("employees") as HTMLSelectElement).value,
      monthlySpend: (form.elements.namedItem("monthlySpend") as HTMLSelectElement).value,
      currentTools: (form.elements.namedItem("currentTools") as HTMLTextAreaElement).value,
      leadProcess: (form.elements.namedItem("leadProcess") as HTMLTextAreaElement).value,
      frustrations: (form.elements.namedItem("frustrations") as HTMLTextAreaElement).value,
      automationGoals: (form.elements.namedItem("automationGoals") as HTMLTextAreaElement).value,
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
          Revenue-Recovery Blueprint requested.
        </h3>
        <p className="text-[var(--navy-text)] text-[15px] leading-[1.7]">
          You&apos;ll get a calendar link for a 45-minute discovery call within
          1 business day. The Blueprint arrives within 5 business days of the
          call and receipt of the required data.
        </p>
      </div>
    );
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center bg-[var(--amber)] text-[var(--stone)] text-[15px] font-semibold py-3.5 px-8 rounded hover:bg-[var(--amber-hover)] transition-colors"
      >
        Request a Revenue-Recovery Blueprint
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
      <HoneypotField />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Company name">
          <input
            type="text"
            name="companyName"
            placeholder="Company name"
            required
            className={inputClass}
          />
        </Field>
        <Field label="Your name">
          <input
            type="text"
            name="contactName"
            placeholder="Your name"
            required
            className={inputClass}
          />
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
        <Field label="Phone">
          <input
            type="tel"
            name="phone"
            placeholder="Business phone"
            required
            className={inputClass}
          />
        </Field>
        <Field label="Website URL" className="sm:col-span-2">
          <input
            type="url"
            name="website"
            placeholder="https://example.com"
            required
            className={inputClass}
          />
        </Field>

        <Field label="Industry">
          <select name="industry" required defaultValue="" className={selectClass}>
            <option value="" disabled>
              Industry
            </option>
            <option value="hvac">HVAC</option>
            <option value="plumbing">Plumbing</option>
            <option value="electrical">Electrical</option>
            <option value="home-services">Other home services</option>
          </select>
        </Field>

        <Field label="Team size">
          <select name="employees" required defaultValue="" className={selectClass}>
            <option value="" disabled>
              Team size
            </option>
            <option value="1-5">1-5 employees</option>
            <option value="6-25">6-25 employees</option>
            <option value="26-100">26-100 employees</option>
            <option value="100+">100+ employees</option>
          </select>
        </Field>

        <Field label="Approximate monthly inbound lead volume" className="sm:col-span-2">
          <select name="monthlySpend" required defaultValue="" className={selectClass}>
            <option value="" disabled>
              Monthly inbound leads
            </option>
            <option value="under-50">Under 50</option>
            <option value="50-200">50-200</option>
            <option value="201-500">201-500</option>
            <option value="500+">More than 500</option>
          </select>
        </Field>
      </div>

      <Field label="Current tools">
        <textarea
          name="currentTools"
          placeholder="CRM, scheduling, email, ads, phone, accounting, etc."
          required
          className={textareaClass}
        />
      </Field>
      <Field label="Lead process">
        <textarea
          name="leadProcess"
          placeholder="Walk through what happens when a new lead comes in, from inquiry to booked appointment."
          required
          className={textareaClass}
        />
      </Field>
      <Field label="Current frustrations">
        <textarea
          name="frustrations"
          placeholder="What is the most frustrating part of your current setup?"
          required
          className={textareaClass}
        />
      </Field>
      <Field label="Automation goals">
        <textarea
          name="automationGoals"
          placeholder="If you could automate one thing tomorrow, what would it be?"
          required
          className={textareaClass}
        />
      </Field>
      <ContactConsent>
        I agree that ClearAutomations may contact me about this Blueprint by
        email, phone call, and text message. Message and data rates may apply.
        Reply STOP or tell us to stop to opt out. I understand this form is for
        business workflow information, not sensitive customer, patient,
        payment, or legal details.
      </ContactConsent>
      <PrivacyNote />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-[var(--amber)] text-[var(--stone)] text-[15px] font-semibold py-3.5 px-8 rounded hover:bg-[var(--amber-hover)] transition-colors mt-2 disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Request My Blueprint ($1,000)"}
      </button>

      {status === "error" && (
        <p className="text-center text-sm text-red-400">
          Something went wrong. Email{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="underline">
            {siteConfig.contactEmail}
          </a>
        </p>
      )}
    </form>
  );
}

