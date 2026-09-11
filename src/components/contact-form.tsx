"use client";

import { useRef, useState } from "react";
import { ArrowRightIcon } from "@/components/icons";

type Field = "name" | "email" | "phone" | "message";
type Errors = Partial<Record<Field, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+()\d][\d\s()+-]{6,19}$/;

function validate(values: Record<Field, string>): Errors {
  const errors: Errors = {};

  const name = values.name.trim();
  if (!name) errors.name = "Please enter your name.";
  else if (name.length < 2) errors.name = "That name looks too short.";
  else if (name.length > 80) errors.name = "Please keep your name under 80 characters.";

  const email = values.email.trim();
  if (!email) errors.email = "Please enter your email address.";
  else if (!EMAIL.test(email)) errors.email = "Please enter a valid email address.";

  const phone = values.phone.trim();
  if (!phone) errors.phone = "Please enter a phone or WhatsApp number.";
  else if (!PHONE.test(phone)) errors.phone = "Please enter a valid phone number.";

  const message = values.message.trim();
  if (!message) errors.message = "Please tell us how we can help.";
  else if (message.length < 10) errors.message = "Please add a little more detail.";
  else if (message.length > 2000) errors.message = "Please keep your message under 2000 characters.";

  return errors;
}

const fieldClass =
  "mt-2 w-full rounded-lg border bg-cream/40 px-4 py-3 text-[0.9rem] text-ink placeholder:text-body/45 focus:bg-white";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Honeypot: a real person never fills a field they cannot see.
    if ((data.get("company") as string)?.trim()) return;

    const values = {
      name: (data.get("name") as string) ?? "",
      email: (data.get("email") as string) ?? "",
      phone: (data.get("phone") as string) ?? "",
      message: (data.get("message") as string) ?? "",
    };

    const found = validate(values);
    setErrors(found);

    const firstInvalid = (Object.keys(found) as Field[])[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setSubmitted(true);
  }

  function describe(field: Field) {
    return errors[field] ? `${field}-error` : undefined;
  }

  function border(field: Field) {
    return errors[field] ? "border-red-600" : "border-ink/15";
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="mt-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="text-ink text-[0.68rem] font-semibold tracking-[0.12em] uppercase"
          >
            Your Name <span className="text-red-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={80}
            placeholder="e.g. Akosua Mensah"
            aria-invalid={!!errors.name}
            aria-describedby={describe("name")}
            className={`${fieldClass} ${border("name")}`}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1.5 text-[0.75rem] text-red-700">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-ink text-[0.68rem] font-semibold tracking-[0.12em] uppercase"
          >
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={120}
            placeholder="e.g. akosua@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={describe("email")}
            className={`${fieldClass} ${border("email")}`}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1.5 text-[0.75rem] text-red-700">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="phone"
          className="text-ink text-[0.68rem] font-semibold tracking-[0.12em] uppercase"
        >
          Phone / WhatsApp Number <span className="text-red-600">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          maxLength={20}
          placeholder="e.g. +233 24 123 4567"
          aria-invalid={!!errors.phone}
          aria-describedby={describe("phone")}
          className={`${fieldClass} ${border("phone")}`}
        />
        {errors.phone && (
          <p id="phone-error" role="alert" className="mt-1.5 text-[0.75rem] text-red-700">
            {errors.phone}
          </p>
        )}
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="text-ink text-[0.68rem] font-semibold tracking-[0.12em] uppercase"
        >
          Message / Question <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={2000}
          placeholder="Ask about upcoming enrollment dates, course schedules, or practical arrangements…"
          aria-invalid={!!errors.message}
          aria-describedby={describe("message")}
          className={`${fieldClass} resize-y ${border("message")}`}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1.5 text-[0.75rem] text-red-700">
            {errors.message}
          </p>
        )}
      </div>

      <div aria-hidden className="absolute left-[-9999px]">
        <label htmlFor="company">Company (leave blank)</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        className="bg-ink hover:bg-forest mt-7 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white transition-colors"
      >
        Submit Inquiry
        <ArrowRightIcon className="h-4 w-4" />
      </button>

      {submitted && (
        <p
          role="status"
          className="bg-sand-soft/50 text-ink mt-4 rounded-lg px-4 py-3 text-[0.78rem] leading-relaxed"
        >
          Your details are complete and valid. Inquiry delivery switches on once
          the admissions backend is connected — until then, please reach the
          office directly by phone or email.
        </p>
      )}
    </form>
  );
}
