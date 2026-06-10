"use client";

import { useState, type FormEvent } from "react";

const LEAD_ENDPOINT = "/api/leads/checklist";

export function ChecklistForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = {
      email: (form.elements.namedItem("checklist_email") as HTMLInputElement).value,
      contactConsent: (form.elements.namedItem("contactConsent") as HTMLInputElement)
        .checked,
      websiteUrlConfirm: (
        form.elements.namedItem("websiteUrlConfirm") as HTMLInputElement
      ).value,
      source: "stack-audit-checklist",
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
      <div className="mt-4 p-4 border border-[rgba(212,168,67,0.3)] rounded bg-[rgba(212,168,67,0.08)]">
        <p className="text-[15px] text-[var(--ink)] font-medium">
          Checklist sent.
        </p>
        <p className="text-[13px] text-[var(--ink-dim)] mt-1">
          Check your inbox for the 5-Minute Stack Audit Checklist.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
      <div className="hidden" aria-hidden="true">
        <label>
          Leave this field blank
          <input
            type="text"
            name="websiteUrlConfirm"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          name="checklist_email"
          placeholder="Your email"
          aria-label="Email for stack audit checklist"
          required
          className="flex-1 bg-white/5 border border-white/10 rounded px-4 py-3 text-[15px] text-white placeholder:text-[var(--navy-muted)] focus:outline-none focus:border-[var(--amber)] transition-colors"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-[var(--amber)] text-[var(--stone)] text-[15px] font-semibold py-3 px-6 rounded hover:bg-[var(--amber-hover)] transition-colors disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Send Checklist"}
        </button>
      </div>
      <label className="flex gap-3 items-start text-[12px] leading-[1.6] text-[var(--navy-muted)]">
        <input
          type="checkbox"
          name="contactConsent"
          required
          className="mt-1 accent-[var(--amber)]"
        />
        <span>
          Send me the checklist and related ClearAutomations follow-up by
          email. I can opt out anytime.
        </span>
      </label>

      {status === "error" && (
        <p className="text-center text-sm text-red-400">
          Something went wrong. Try again or email{" "}
          <a href="mailto:zion@clearautomations.com" className="underline">
            zion@clearautomations.com
          </a>
        </p>
      )}
    </form>
  );
}

