import type { Metadata } from "next";
import Image from "next/image";
import { CourseTracks } from "@/components/course-tracks";
import { disciplines, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Training Programs",
  description:
    "Choose from 1-month, 3-month and 6-month beauty training tracks in nails, makeup, brows, lashes and hair making. All practical tools provided by Native Touch Designs School.",
  alternates: { canonical: "/courses" },
  openGraph: {
    title: `Our Training Programs | ${site.name}`,
    description:
      "1-month, 3-month and 6-month beauty training tracks. All practical tools provided by the school.",
    url: "/courses",
  },
};

// the strip is deliberately irregular: alternate columns drop down the page and
// flip their caption above the image, matching the editorial rhythm in the design
const strip = [
  { height: "lg:h-[384px]", offset: "lg:mt-0", captionFirst: false },
  { height: "lg:h-[384px]", offset: "lg:mt-[72px]", captionFirst: true },
  { height: "lg:h-[444px]", offset: "lg:mt-0", captionFirst: false },
  { height: "lg:h-[300px]", offset: "lg:mt-[180px]", captionFirst: true },
];

export default function CoursesPage() {
  return (
    <>
      {/* ---------------------------------------------------------------- hero */}
      <section className="relative isolate flex min-h-[500px] items-center justify-center overflow-hidden lg:min-h-[780px]">
        <Image
          src="/images/courses-hero.jpg"
          alt="Two Native Touch students wearing polished editorial makeup and gold hoop earrings"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[50%_25%]"
        />
        <div className="bg-ink/60 absolute inset-0 -z-10" />

        <div className="mx-auto max-w-3xl px-6 pt-24 pb-12 text-center">
          <h1 className="font-display text-[2.5rem] leading-[1.05] font-bold text-white sm:text-6xl lg:text-[4.2rem]">
            Our Training Programs
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[0.95rem] leading-relaxed text-white/85">
            Choose the track that fits your career goals. All practical tools
            are provided by {site.name}.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------- disciplines strip */}
      {/* full-bleed: the columns run edge to edge rather than sitting in the grid */}
      <section className="bg-cream pt-14 pb-16 lg:pt-20 lg:pb-24">
        <h2 className="sr-only">Disciplines we teach</h2>
        <ul className="grid grid-cols-2 gap-3 px-3 sm:gap-4 sm:px-4 lg:grid-cols-4">
          {disciplines.map((d, i) => {
            const s = strip[i];
            const caption = (
              <div className={s.captionFirst ? "pb-4 lg:pb-5" : "pt-4 lg:pt-5"}>
                <h3 className="font-display text-ink text-xl leading-tight font-bold lg:text-[1.6rem]">
                  {"coursesTitle" in d ? d.coursesTitle : d.title}
                </h3>
                <p className="mt-1.5 text-[0.8rem]">{d.tagline}</p>
              </div>
            );

            return (
              <li
                key={d.slug}
                id={d.slug}
                className={`flex scroll-mt-28 flex-col ${s.offset}`}
              >
                {s.captionFirst && caption}
                <div
                  className={`relative h-[230px] overflow-hidden rounded-xl sm:h-[320px] ${s.height}`}
                >
                  <Image
                    src={d.image}
                    alt={d.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                {!s.captionFirst && caption}
              </li>
            );
          })}
        </ul>
      </section>

      {/* ------------------------------------------------------------- pricing */}
      <section className="bg-cream pb-20 lg:pb-28">
        <h2 className="sr-only">Tuition tracks</h2>
        <CourseTracks />
      </section>
    </>
  );
}
