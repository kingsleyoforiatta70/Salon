"use client";

import { useRef, useState } from "react";
import {
  CheckIcon,
  CreditCardIcon,
  LockIcon,
  StarIcon,
} from "@/components/icons";
import { courseTracks } from "@/lib/site";

const APPLICATION_FEE = "200";

type Field =
  | "fullName"
  | "email"
  | "phone"
  | "dateOfBirth"
  | "address"
  | "emergencyName"
  | "emergencyPhone";

type Errors = Partial<Record<Field, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+()\d][\d\s()+-]{6,19}$/;

function validate(v: Record<Field, string>): Errors {
  const e: Errors = {};

  const name = v.fullName.trim();
  if (!name) e.fullName = "Please enter your full legal name.";
  else if (name.length < 2) e.fullName = "That name looks too short.";

  const email = v.email.trim();
  if (!email) e.email = "Please enter your email address.";
  else if (!EMAIL.test(email)) e.email = "Please enter a valid email address.";

  const phone = v.phone.trim();
  if (!phone) e.phone = "Please enter a phone or WhatsApp number.";
  else if (!PHONE.test(phone)) e.phone = "Please enter a valid phone number.";

  const dob = v.dateOfBirth;
  if (!dob) e.dateOfBirth = "Please enter your date of birth.";
  else {
    const d = new Date(dob);
    if (Number.isNaN(d.getTime())) e.dateOfBirth = "Please enter a valid date.";
    else if (d > new Date())
      e.dateOfBirth = "Date of birth cannot be in the future.";
    else if (d < new Date("1900-01-01"))
      e.dateOfBirth = "Please check this date.";
  }

  const address = v.address.trim();
  if (!address) e.address = "Please enter your residential address.";
  else if (address.length < 5) e.address = "Please give a little more detail.";

  const en = v.emergencyName.trim();
  if (!en) e.emergencyName = "Please enter an emergency contact name.";
  else if (en.length < 2) e.emergencyName = "That name looks too short.";

  const ep = v.emergencyPhone.trim();
  if (!ep) e.emergencyPhone = "Please enter an emergency contact phone.";
  else if (!PHONE.test(ep))
    e.emergencyPhone = "Please enter a valid phone number.";

  return e;
}

const fieldClass =
  "mt-2 w-full rounded-lg border bg-white px-4 py-3 text-[0.9rem] text-ink placeholder:text-body/40";

function FieldLabel({
  field,
  children,
}: {
  field: Field;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={field}
      className="text-ink text-[0.66rem] font-semibold tracking-[0.12em] uppercase"
    >
      {children} <span className="text-red-600">*</span>
    </label>
  );
}

function FieldError({ field, message }: { field: Field; message?: string }) {
  if (!message) return null;
  return (
    <p
      id={`${field}-error`}
      role="alert"
      className="mt-1.5 text-[0.75rem] text-red-700"
    >
      {message}
    </p>
  );
}

function StepHeading({
  n,
  children,
}: {
  n: number;
  children: React.ReactNode;
}) {
  return (
    <h2 className="flex items-center gap-3">
      <span className="bg-ink text-cream flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[0.75rem] font-semibold">
        {n}
      </span>
      <span className="font-display text-ink text-xl font-bold lg:text-[1.6rem]">
        {children}
      </span>
    </h2>
  );
}

export function ApplyForm({ initialTrack }: { initialTrack: string }) {
  const [selected, setSelected] = useState(initialTrack);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const track =
    courseTracks.find((t) => t.slug === selected) ?? courseTracks[1];

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if ((data.get("company") as string)?.trim()) return;

    const values = {
      fullName: (data.get("fullName") as string) ?? "",
      email: (data.get("email") as string) ?? "",
      phone: (data.get("phone") as string) ?? "",
      dateOfBirth: (data.get("dateOfBirth") as string) ?? "",
      address: (data.get("address") as string) ?? "",
      emergencyName: (data.get("emergencyName") as string) ?? "",
      emergencyPhone: (data.get("emergencyPhone") as string) ?? "",
    };

    const found = validate(values);
    setErrors(found);
    setSubmitted(false);

    const first = (Object.keys(found) as Field[])[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setSubmitted(true);
  }

  function fieldProps(field: Field) {
    return {
      name: field,
      id: field,
      "aria-invalid": !!errors[field],
      "aria-describedby": errors[field] ? `${field}-error` : undefined,
      className: `${fieldClass} ${errors[field] ? "border-red-600" : "border-ink/15"}`,
    };
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      {/* ------------------------------------------------ step 1: choose track */}
      <section className="mx-auto max-w-[1300px] px-6 sm:px-10">
        <StepHeading n={1}>Select Your Course Track</StepHeading>

        <fieldset className="mt-7">
          <legend className="sr-only">Course track</legend>
          <div className="grid items-center gap-5 lg:grid-cols-3">
            {courseTracks.map((t) => {
              const active = selected === t.slug;
              return (
                <label
                  key={t.slug}
                  className={`block rounded-2xl px-6 transition-all duration-300 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-4 ${
                    active
                      ? "bg-ink cursor-default py-8 shadow-[0_24px_60px_-38px_rgba(25,40,27,0.85)] has-[:focus-visible]:outline-[#c5a880] lg:py-10"
                      : "border-ink/8 bg-cream-soft/40 has-[:focus-visible]:outline-ink cursor-pointer border py-6 hover:border-[#c5a880] lg:py-7"
                  }`}
                >
                  <input
                    type="radio"
                    name="track"
                    value={t.slug}
                    checked={active}
                    onChange={() => setSelected(t.slug)}
                    className="sr-only"
                  />

                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`rounded px-2.5 py-1 text-[0.62rem] font-semibold tracking-wide uppercase ${
                        active
                          ? "bg-forest text-cream"
                          : "bg-sand-soft text-ink"
                      }`}
                    >
                      {t.chipShort}
                    </span>
                    {t.featured ? (
                      <span
                        className={`inline-flex items-center gap-1 rounded px-2.5 py-1 text-[0.58rem] font-semibold tracking-wide uppercase ${
                          active ? "bg-sand text-ink" : "bg-sand-soft text-ink"
                        }`}
                      >
                        <StarIcon className="h-3 w-3" />
                        Most Popular
                      </span>
                    ) : (
                      <span
                        className={`text-[0.68rem] ${active ? "text-cream/60" : "text-body/60"}`}
                      >
                        Practicals Provided
                      </span>
                    )}
                  </div>

                  <h3
                    className={`font-display mt-5 text-[1.1rem] leading-[1.2] font-bold lg:text-[1.25rem] ${
                      active ? "text-cream" : "text-ink"
                    }`}
                  >
                    {t.title}
                  </h3>

                  <p className="mt-2 flex flex-wrap items-baseline gap-x-2">
                    <span
                      className={`font-display text-[2rem] leading-none font-bold lg:text-[2.4rem] ${
                        active ? "text-white" : "text-ink"
                      }`}
                    >
                      {t.price}
                    </span>
                    <span
                      className={`text-[0.78rem] ${active ? "text-cream/80" : "text-body"}`}
                    >
                      GHS Tuition
                    </span>
                  </p>

                  <p
                    className={`mt-3 text-[0.72rem] ${active ? "text-cream/60" : "text-body/70"}`}
                  >
                    + {APPLICATION_FEE} GHS Application Form Fee
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {t.enrollmentCurriculum.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckIcon
                          className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${active ? "text-sand" : "text-forest"}`}
                        />
                        <span
                          className={`text-[0.8rem] leading-snug ${active ? "text-cream" : "text-ink"}`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </label>
              );
            })}
          </div>
        </fieldset>
      </section>

      {/* -------------------------------------------- step 2: applicant details */}
      <section className="mx-auto mt-16 max-w-[1300px] px-6 sm:px-10 lg:mt-20">
        <StepHeading n={2}>
          Applicant Personal &amp; Contact Information
        </StepHeading>

        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <div>
            <FieldLabel field="fullName">Full Legal Name</FieldLabel>
            <input
              type="text"
              autoComplete="name"
              maxLength={100}
              placeholder="e.g. Abena Serwaa Boateng"
              {...fieldProps("fullName")}
            />
            <FieldError field="fullName" message={errors.fullName} />
          </div>

          <div>
            <FieldLabel field="email">Email Address</FieldLabel>
            <input
              type="email"
              autoComplete="email"
              maxLength={120}
              placeholder="e.g. abena.boateng@example.com"
              {...fieldProps("email")}
            />
            <FieldError field="email" message={errors.email} />
          </div>

          <div>
            <FieldLabel field="phone">
              Phone Number (WhatsApp Preferred)
            </FieldLabel>
            <input
              type="tel"
              autoComplete="tel"
              maxLength={20}
              placeholder="e.g. +233 24 555 1234"
              {...fieldProps("phone")}
            />
            <FieldError field="phone" message={errors.phone} />
          </div>

          <div>
            <FieldLabel field="dateOfBirth">Date of Birth</FieldLabel>
            <input
              type="date"
              max="2100-12-31"
              {...fieldProps("dateOfBirth")}
            />
            <FieldError field="dateOfBirth" message={errors.dateOfBirth} />
          </div>

          <div className="sm:col-span-2">
            <FieldLabel field="address">
              Residential Address / Location
            </FieldLabel>
            <input
              type="text"
              autoComplete="street-address"
              maxLength={200}
              placeholder="e.g. House No. 42, Spintex Road, Greater Accra"
              {...fieldProps("address")}
            />
            <FieldError field="address" message={errors.address} />
          </div>

          <div>
            <FieldLabel field="emergencyName">
              Emergency Contact Name
            </FieldLabel>
            <input
              type="text"
              maxLength={100}
              placeholder="e.g. Kwame Boateng (Brother)"
              {...fieldProps("emergencyName")}
            />
            <FieldError field="emergencyName" message={errors.emergencyName} />
          </div>

          <div>
            <FieldLabel field="emergencyPhone">
              Emergency Contact Phone
            </FieldLabel>
            <input
              type="tel"
              maxLength={20}
              placeholder="e.g. +233 20 888 4321"
              {...fieldProps("emergencyPhone")}
            />
            <FieldError
              field="emergencyPhone"
              message={errors.emergencyPhone}
            />
          </div>
        </div>

        <div aria-hidden className="absolute left-[-9999px]">
          <label htmlFor="company">Company (leave blank)</label>
          <input
            id="company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
      </section>

      {/* ------------------------------------------------- step 3: fee checkout */}
      <section className="mx-auto mt-16 max-w-[1300px] px-6 sm:px-10 lg:mt-20">
        <div className="border-sand/50 rounded-3xl border bg-white p-7 lg:p-9">
          <StepHeading n={3}>Application Form Fee Checkout</StepHeading>

          <div className="mt-7 grid gap-7 lg:grid-cols-[1.25fr_1fr] lg:gap-10">
            <dl className="bg-cream rounded-2xl p-6 lg:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <dt className="text-[0.85rem]">Enrolling Track:</dt>
                <dd className="font-display text-ink text-right text-[0.95rem] font-bold">
                  {track.title}
                </dd>
              </div>
              <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
                <dt className="text-[0.85rem]">
                  Tuition (Due upon orientation):
                </dt>
                <dd className="text-ink text-[0.9rem] font-medium">
                  {track.price} GHS
                </dd>
              </div>

              <hr className="border-ink/10 my-5" />

              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <dt className="text-ink text-[0.88rem] font-semibold">
                  Today&apos;s Application Form Fee:
                </dt>
                <dd className="font-display text-ink text-[1.5rem] font-bold lg:text-[1.75rem]">
                  {APPLICATION_FEE}.00 GHS
                </dd>
              </div>
            </dl>

            <div className="flex flex-col justify-center">
              <button
                type="submit"
                className="bg-sage flex w-full items-center justify-center gap-2.5 rounded-lg px-6 py-4 text-[0.95rem] font-semibold text-white transition-colors hover:bg-[#688a70]"
              >
                <CreditCardIcon className="h-4 w-4" />
                Pay {APPLICATION_FEE} GHS &amp; Submit
              </button>

              <p className="text-body/70 mt-4 text-center text-[0.72rem] leading-relaxed">
                By clicking Submit, you agree to the practicals training terms
                and institutional guidelines.
              </p>
              <p className="text-body/55 mt-3 flex items-center justify-center gap-1.5 text-center text-[0.7rem]">
                <LockIcon className="h-3 w-3 shrink-0" />
                256-bit SSL encrypted &middot; Server-side Paystack verification
              </p>

              {submitted && (
                <p
                  role="status"
                  className="bg-sand-soft/50 text-ink mt-5 rounded-lg px-4 py-3 text-[0.76rem] leading-relaxed"
                >
                  Your application details are complete and valid. Payment is
                  not connected yet — the Paystack checkout switches on once the
                  admissions backend is configured. Please contact the
                  admissions office to finish enrolling in the meantime.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}
