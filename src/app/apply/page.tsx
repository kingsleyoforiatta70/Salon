import type { Metadata } from "next";
import Image from "next/image";
import { ApplyForm } from "@/components/apply-form";
import { courseTracks, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apply for Admission",
  description:
    "Apply online to Native Touch Designs School. Choose your training track, submit your details, and pay the 200 GHS application form fee securely.",
  alternates: { canonical: "/apply" },
  openGraph: {
    title: `Apply for Admission | ${site.name}`,
    description:
      "Take your first step toward becoming a certified beauty professional. Paperless online enrollment.",
    url: "/apply",
  },
};

const DEFAULT_TRACK = courseTracks.find((t) => t.featured)!.slug;

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ track?: string }>;
}) {
  const { track } = await searchParams;
  const initialTrack = courseTracks.some((t) => t.slug === track)
    ? track!
    : DEFAULT_TRACK;

  return (
    <>
      {/* ---------------------------------------------------------------- hero */}
      <section className="bg-cream grid lg:grid-cols-2">
        <div className="relative order-first h-[320px] sm:h-[420px] lg:h-auto lg:min-h-[620px]">
          <Image
            src="/images/apply-hero.jpg"
            alt="Instructor blending gold shimmer eyeshadow onto a student model during a practical session"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[50%_30%]"
          />
        </div>

        <div className="flex items-center px-6 py-12 sm:px-10 lg:py-20">
          <div className="max-w-xl">
            <p className="bg-sand-soft/60 text-ink inline-flex rounded-full px-4 py-1.5 text-[0.6rem] font-semibold tracking-[0.2em] uppercase">
              Paperless Online Enrollment
            </p>
            <h1 className="font-display text-ink mt-6 text-[2.5rem] leading-[1.04] font-bold sm:text-5xl lg:text-[3.9rem]">
              Apply for Admission
            </h1>
            <p className="mt-6 text-[0.95rem] leading-relaxed">
              Take your first step toward becoming a certified beauty
              professional at{" "}
              <strong className="text-ink font-semibold">{site.name}</strong>.
              Fill out our simple secure form.
            </p>
            <p className="font-display text-sand mt-5 text-[0.95rem] font-medium italic">
              &ldquo;{site.motto} ({site.mottoGloss})&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- materials guarantee */}
      <section className="bg-cream pb-14 lg:pb-20">
        <div className="mx-auto max-w-[1300px] px-6 sm:px-10">
          <div className="bg-ink rounded-2xl px-7 py-6 lg:px-9">
            <h2 className="text-sand text-[0.6rem] font-semibold tracking-[0.2em] uppercase">
              Practicals Material Guarantee
            </h2>
            <p className="text-cream/85 mt-2.5 text-[0.85rem] leading-relaxed">
              &ldquo;Students are not to buy anything for practicals; the school
              provides all.&rdquo; No hidden fees or surprise supplies.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- the three steps */}
      <div className="bg-cream pb-20 lg:pb-28">
        <h2 className="sr-only">Application form</h2>
        <ApplyForm initialTrack={initialTrack} />
      </div>
    </>
  );
}
