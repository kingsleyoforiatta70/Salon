import type { Metadata } from "next";
import Image from "next/image";
import { CheckIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the School",
  description:
    "Native Touch Designs School teaches practical beauty pedagogy built for career success in Ghana — guided by Forma, Ars, Confidentia, with every practical material provided by the school.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About the School | ${site.name}`,
    description:
      "Practical beauty pedagogy built for career success. Every practical material is provided by the school.",
    url: "/about",
  },
};

const pillars = [
  {
    title: "Forma (Beauty)",
    body: "We teach modern aesthetics, facial anatomy, colour harmony, and precision nail architecture. Our students understand how to accentuate individuality and deliver captivating visual beauty.",
    image: "/images/pillar-forma.jpg",
    alt: "Student model with bridal glam makeup and a sleek low bun",
  },
  {
    title: "Ars (Artistry)",
    body: "Beauty is an artistic discipline. Students master fine-line nail strokes, seamless hair making stitching, high-definition contouring, and lash sculpting with live models and professional tools.",
    image: "/images/pillar-ars.jpg",
    alt: "Hand-painted nail art with a sculpted three-dimensional flower and gold beading",
  },
  {
    title: "Confidentia (Confidence)",
    body: "Graduates leave not only with a certificate, but with entrepreneurial confidence, client consultation etiquette, salon hygiene management, and readiness to run their own studios.",
    image: "/images/pillar-confidentia.jpg",
    alt: "Native Touch graduate in cap and gown outside the school",
  },
];

const included = [
  "Full Professional Nail Art Supplies",
  "Dermatologist-Approved Makeup Kits",
  "Precision Eyebrow & Lash Styling Tools",
  "Hair Making Wefts, Needles & Mannequin Heads",
  "Sanitation & Sterilization Workstations",
];

const promiseQuote =
  "Students are not to buy anything for practicals; the school provides all.";

export default function AboutPage() {
  return (
    <>
      {/* ---------------------------------------------------------------- hero */}
      <section className="relative isolate flex min-h-[540px] items-center justify-center overflow-hidden lg:min-h-[770px]">
        <div className="absolute inset-0 -z-20 grid grid-cols-2">
          <div className="relative">
            <Image
              src="/images/about-hero-nails.jpg"
              alt="Student model framed by a fan of hand-painted acrylic nail designs"
              fill
              priority
              sizes="50vw"
              className="object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/about-hero-makeup.jpg"
              alt="Makeup brushes blending shimmering eyeshadow on a student model"
              fill
              priority
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="bg-ink/55 absolute inset-0 -z-10" />

        <div className="mx-auto max-w-3xl px-6 pt-24 pb-12 text-center">
          <p className="text-ink inline-flex rounded-full bg-white/90 px-4 py-1.5 text-[0.6rem] font-semibold tracking-[0.2em] uppercase">
            Discover Our Story
          </p>
          <h1 className="font-display mt-6 text-[2.5rem] leading-[1.05] font-bold text-white sm:text-6xl lg:text-[4.2rem]">
            Empowering Beauty Artists
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[0.95rem] leading-relaxed text-white/85">
            We are dedicated to providing the highest quality practical beauty
            education in Ghana, blending creativity with professional
            discipline.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------- heritage + pillars */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="border-ink/20 text-body inline-flex rounded-full border px-4 py-1.5 text-[0.6rem] font-semibold tracking-[0.2em] uppercase">
              Our Heritage &amp; Philosophy
            </p>
            <h2 className="font-display text-ink mt-6 text-3xl leading-[1.12] font-bold sm:text-4xl lg:text-[2.9rem]">
              Practical Beauty Pedagogy Built for Career Success
            </h2>
            <p className="mt-6 text-[0.92rem] leading-relaxed">
              At <strong className="text-ink font-semibold">{site.name}</strong>,
              we believe true elegance stems from mastered technique, creative
              passion, and undeniable self-assurance. Our guiding compass is our
              venerable motto:
            </p>
            <p className="font-display text-ink mt-5 text-[1.05rem] font-bold italic sm:text-[1.2rem]">
              &ldquo;{site.motto} ({site.mottoGloss})&rdquo;
            </p>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {pillars.map((p) => (
              <li
                key={p.title}
                className="relative isolate aspect-[7/8] overflow-hidden rounded-2xl"
              >
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="-z-10 object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />
                <div className="flex h-full flex-col justify-end p-6">
                  <h3 className="font-display text-xl leading-tight font-bold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-[0.8rem] leading-relaxed text-white/80">
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* -------------------------------------------------------------- promise */}
      <section className="bg-forest py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="bg-ink text-cream inline-flex rounded px-3 py-1.5 text-[0.58rem] font-semibold tracking-[0.2em] uppercase">
              The Native Touch Promise
            </p>
            <h2 className="font-display text-cream mt-6 text-3xl leading-[1.1] font-bold sm:text-4xl lg:text-[2.7rem]">
              Zero Out-of-Pocket Practicals Expenses
            </h2>
            <p className="font-display text-sand mt-5 text-[1rem] font-medium italic">
              &ldquo;{promiseQuote}&rdquo;
            </p>
            <p className="text-cream/75 mt-5 max-w-xl text-[0.9rem] leading-relaxed">
              Many beauty schools burden students with lengthy equipment lists
              and costly daily supply fees. At{" "}
              <strong className="text-cream font-semibold">{site.name}</strong>,
              every nail tip, acrylic powder, brush, UV lamp, lash extension,
              cosmetic palette, and hair making track is 100% provided by the
              institution for your coursework.
            </p>
          </div>

          <div className="bg-ink rounded-2xl p-7 lg:p-9">
            <h3 className="text-cream/60 text-[0.6rem] font-sans font-semibold tracking-[0.2em] uppercase">
              Everything Included in Tuition:
            </h3>
            <ul className="mt-6 space-y-4">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon className="text-sand mt-0.5 h-4 w-4 shrink-0" />
                  <span className="text-cream/85 text-[0.85rem] leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- quote banner */}
      <section className="bg-cream pt-14 lg:pt-24">
        <div className="relative isolate flex min-h-[340px] items-center justify-center overflow-hidden lg:min-h-[420px]">
          <Image
            src="/images/about-quote-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div className="bg-ink/75 absolute inset-0 -z-10" />
          <figure className="mx-auto max-w-4xl px-6 text-center">
            <figcaption className="text-cream/85 text-[0.95rem] sm:text-[1.1rem]">
              The Native Touch Difference
            </figcaption>
            <blockquote className="font-display mt-5 text-2xl leading-[1.2] font-bold text-white sm:text-4xl lg:text-[2.9rem]">
              &ldquo;{promiseQuote}&rdquo;
            </blockquote>
          </figure>
        </div>
      </section>
    </>
  );
}
