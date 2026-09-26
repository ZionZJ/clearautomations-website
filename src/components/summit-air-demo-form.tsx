"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ContactConsent,
  Field,
  HoneypotField,
  inputClass,
  selectClass,
  textareaClass,
} from "@/components/form-fields";

// Server-side proxy to the n8n demo workflow. The browser never sees the n8n URL or token.
const DEMO_ENDPOINT = "/api/demo/summit-air";

const serviceTypes = ["AC Repair", "Heating Repair", "Maintenance Plan", "New System Quote"];
const urgencies = ["Urgent - today", "This week", "Planning ahead"];

type Status = "idle" | "submitting" | "accepted" | "ringing" | "offline" | "error";

// Accepts "(512) 555-0100", "512-555-0100" or "+15125550100" and returns E.164.
function toE164(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (raw.trim().startsWith("+")) return `+${digits}`;
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return raw.trim();
}

export function SummitAirDemoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [elapsed, setElapsed] = useState(0);
  const [runId, setRunId] = useState("");
  const startedAt = useRef(0);
  const timer = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => () => clearInterval(timer.current), []);

  function stopTimer() {
    clearInterval(timer.current);
    setElapsed((performance.now() - startedAt.current) / 1000);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const value = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)
        .value;

    const data = {
      name: value("name"),
      email: value("email"),
      phone: toE164(value("phone")),
      city: value("city"),
      serviceType: value("serviceType"),
      urgency: value("urgency"),
      notes: value("notes"),
      consentGranted: (form.elements.namedItem("consent") as HTMLInputElement).checked,
      companyWebsite: value("websiteUrlConfirm"),
    };

    setStatus("submitting");
    setRunId("");
    startedAt.current = performance.now();
    clearInterval(timer.current);
    setElapsed(0);
    timer.current = setInterval(
      () => setElapsed((performance.now() - startedAt.current) / 1000),
      100,
    );

    try {
      const res = await fetch(DEMO_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.status === 404 || res.status === 503) {
        stopTimer();
        setStatus("offline");
        return;
      }
      if (!res.ok) {
        stopTimer();
        setStatus("error");
        return;
      }

      const result = (await res.json()) as { testRunId?: string };
      setRunId(result.testRunId ? result.testRunId.slice(0, 8) : "");
      setStatus("accepted");
    } catch {
      stopTimer();
      setStatus("error");
    }
  }

  function markRinging() {
    stopTimer();
    setStatus("ringing");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Name">
          <input name="name" defaultValue="David Martinez" autoComplete="name" required className={inputClass} />
        </Field>
        <Field label="Email">
          <input name="email" type="email" placeholder="An inbox you control" autoComplete="email" required className={inputClass} />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Mobile phone">
          <input name="phone" type="tel" placeholder="A phone you control" autoComplete="tel" required className={inputClass} />
        </Field>
        <Field label="City">
          <input name="city" defaultValue="Austin" autoComplete="address-level2" required className={inputClass} />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Service type">
          <select name="serviceType" required className={selectClass}>
            {serviceTypes.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
        <Field label="Urgency">
          <select name="urgency" required className={selectClass}>
            {urgencies.map((u) => (
              <option key={u}>{u}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Notes">
        <textarea
          name="notes"
          defaultValue="The AC stopped cooling this afternoon and the house is getting warm."
          className={textareaClass}
        />
      </Field>

      <ContactConsent name="consent">
        I agree that ClearAutomations, which runs this Summit Air demo, may contact me about this
        request by email, text and phone call, including messages and calls made with automated or
        AI voice technology. Up to 2 texts per request. Message and data rates may apply. Reply STOP
        to opt out or HELP for help, or tell the assistant to stop. See the{" "}
        <a href="/privacy" className="text-[var(--amber)] underline">
          privacy policy
        </a>{" "}
        and{" "}
        <a href="/terms" className="text-[var(--amber)] underline">
          terms
        </a>
        .
      </ContactConsent>

      <HoneypotField />

      <div className="flex flex-wrap items-center gap-4 mt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-[var(--amber)] text-[var(--stone)] text-[15px] font-semibold py-3.5 px-8 rounded hover:bg-[var(--amber-hover)] transition-colors disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Request callback"}
        </button>
        {status === "accepted" && (
          <button
            type="button"
            onClick={markRinging}
            className="border border-white/20 text-white text-[15px] font-semibold py-3.5 px-6 rounded hover:border-[var(--amber)] transition-colors"
          >
            Phone is ringing
          </button>
        )}
        <output
          aria-live="polite"
          className="font-[var(--font-display)] text-[1.6rem] font-bold tabular-nums text-[var(--amber)]"
        >
          {elapsed.toFixed(1)}s
        </output>
      </div>

      <p aria-live="polite" className="text-[14px] leading-[1.6] text-[var(--navy-text)] min-h-[1.5em]">
        {status === "submitting" && "Sending the request..."}
        {status === "accepted" &&
          `Request received${runId ? ` (run ${runId})` : ""}. Watch for the text, then the callback.`}
        {status === "ringing" && `Phone rang ${elapsed.toFixed(1)} seconds after the request was sent.`}
        {status === "offline" && "This demo line is not connected right now. No text or call was sent."}
        {status === "error" && "The request did not go through. No text or call was sent."}
      </p>
    </form>
  );
}
