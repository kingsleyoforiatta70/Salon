import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

const suggestions = [
  { href: "/courses", label: "Training Programs" },
  { href: "/about", label: "About the School" },
  { href: "/student-work", label: "Student Work" },
  { href: "/contact", label: "Contact Admissions" },
];

export default function NotFound() {
  return (
    <section className="bg-cream flex flex-1 items-center px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-xl text-center">
        <p className="font-display text-sand text-[4rem] leading-none font-bold lg:text-[5rem]">
          404
        </p>
        <h1 className="font-display text-ink mt-4 text-3xl leading-tight font-bold sm:text-4xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mx-auto mt-5 max-w-md text-[0.92rem] leading-relaxed">
          The page you were looking for may have moved, or the link may be out
          of date. Here is where you can go instead.
        </p>

        <Link
          href="/"
          className="bg-ink hover:bg-forest mt-8 inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold text-white transition-colors"
        >
          Back to Homepage
          <ArrowRightIcon className="h-4 w-4" />
        </Link>

        <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {suggestions.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="hover:text-ink text-[0.85rem] underline-offset-4 transition-colors hover:underline"
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
