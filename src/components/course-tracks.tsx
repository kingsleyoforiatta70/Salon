"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRightIcon, CheckIcon, StarIcon } from "@/components/icons";
import { applicationFee, courseTracks } from "@/lib/site";

const DEFAULT_TRACK = courseTracks.find((t) => t.featured)!.slug;

export function CourseTracks() {
  const [selected, setSelected] = useState<string>(DEFAULT_TRACK);

  return (
    <fieldset className="mx-auto max-w-[1300px] px-6 sm:px-10">
      <legend className="sr-only">Choose a tuition track</legend>

      <div className="grid items-center gap-6 lg:grid-cols-3">
        {courseTracks.map((t) => {
          const active = selected === t.slug;

          return (
            <label
              key={t.slug}
              className={`group block rounded-3xl px-7 transition-all duration-300 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-4 lg:px-8 ${
                active
                  ? "bg-ink cursor-default py-9 shadow-[0_28px_70px_-40px_rgba(25,40,27,0.85)] has-[:focus-visible]:outline-[#c5a880] lg:py-12"
                  : "border-ink/8 has-[:focus-visible]:outline-ink cursor-pointer border bg-white py-7 shadow-[0_14px_44px_-32px_rgba(25,40,27,0.5)] hover:border-[#c5a880] lg:py-9"
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
                  className={`rounded px-2.5 py-1 text-[0.66rem] font-semibold ${
                    active ? "bg-forest text-cream" : "bg-sand-soft text-ink"
                  }`}
                >
                  {t.chip}
                </span>
                {t.featured ? (
                  <span
                    className={`inline-flex items-center gap-1 rounded px-2.5 py-1 text-[0.62rem] font-semibold tracking-wide uppercase ${
                      active ? "bg-sand text-ink" : "bg-sand-soft text-ink"
                    }`}
                  >
                    <StarIcon className="h-3 w-3" />
                    Most Popular
                  </span>
                ) : (
                  <span
                    className={`text-[0.7rem] ${active ? "text-cream/60" : "text-body/60"}`}
                  >
                    Practicals Provided
                  </span>
                )}
              </div>

              <hr
                className={`mt-4 ${active ? "border-cream/15" : "border-ink/10"}`}
              />

              <h3
                className={`font-display mt-5 text-[1.45rem] leading-[1.15] font-bold lg:text-[1.7rem] ${
                  active ? "text-cream" : "text-ink"
                }`}
              >
                {t.title}
              </h3>

              <p className="mt-3 flex flex-wrap items-baseline gap-x-2.5">
                <span
                  className={`font-display text-[2.8rem] leading-none font-bold lg:text-[3.4rem] ${
                    active ? "text-white" : "text-ink"
                  }`}
                >
                  {t.price}
                </span>
                <span
                  className={`text-[0.82rem] ${active ? "text-cream/80" : "text-body"}`}
                >
                  GHS Tuition Fee
                </span>
              </p>

              <p
                className={`mt-4 text-[0.78rem] ${active ? "text-cream/65" : "text-body/70"}`}
              >
                + {applicationFee}
              </p>

              <h4
                className={`mt-7 text-[0.66rem] font-semibold tracking-[0.14em] uppercase ${
                  active ? "text-cream/90" : "text-ink"
                }`}
              >
                Curriculum Disciplines:
              </h4>
              <ul className="mt-4 space-y-3.5">
                {t.curriculum.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckIcon
                      className={`h-3.5 w-3.5 shrink-0 ${active ? "text-sand" : "text-forest"}`}
                    />
                    <span
                      className={`text-[0.85rem] ${active ? "text-cream" : "text-ink"}`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p
                className={`mt-6 text-[0.8rem] leading-relaxed ${
                  active ? "text-cream/75" : "text-body"
                }`}
              >
                {t.summary}
              </p>

              <span
                className={`mt-7 block rounded-lg px-6 py-3.5 text-center text-sm font-semibold transition-colors ${
                  active
                    ? "bg-white text-[#16301f]"
                    : "bg-sand-soft text-ink group-hover:bg-sand"
                }`}
              >
                {active ? "Selected Track" : "Select This Track"}
              </span>
            </label>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Link
          href={`/apply?track=${selected}`}
          className="bg-ink hover:bg-forest inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-semibold text-white transition-colors"
        >
          Continue to Application
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
        <p className="text-body/70 mt-3 text-[0.78rem]">
          {applicationFee} · secured by Paystack
        </p>
      </div>
    </fieldset>
  );
}
