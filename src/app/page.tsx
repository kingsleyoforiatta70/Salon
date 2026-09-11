import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, SparkleIcon } from "@/components/icons";
import { disciplines } from "@/lib/site";

const tickerItems = [
  "Nails",
  "Makeup",
  "Brows & Lashes",
  "Practical Training",
  "Materials Included",
  "Beauty Skills for Real Clients",
  "Hair Making & Styling",
  "Student Work",
];

const pillars = [
  {
    title: "4 Core Disciplines",
    body: "Nails, Makeup, Brows & Lashes, and Hair Making/Styling",
  },
  {
    title: "Practical-First Learning",
    body: "Guided hands-on sessions from your very first week",
  },
  {
    title: "Materials Included",
    body: "Everything you need during practical training is provided",
  },
  {
    title: "Experienced Mentors",
    body: "Learn from instructors with real salon and studio backgrounds",
  },
];

const testimonials = [
  {
    quote:
      "I took the 3-month certificate and was blown away. I literally didn't have to buy a single nail file or hair making bundle for my practicals. The school provided everything as promised!",
    name: "Ama Asare",
    course: "3-Month Certificate – Nails",
    avatar: "/images/avatar-ama.jpg",
  },
  {
    quote:
      "The instructors are incredibly patient. My makeup artistry skills went from basic to professional bridal level in just 6 months. Best investment in my career!",
    name: "Grace Osei",
    course: "6-Month Diploma – Makeup",
    avatar: "/images/avatar-grace.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- hero */}
      <section className="bg-cream relative isolate overflow-hidden lg:min-h-[780px]">
        {/* the photo is an inline block on small screens and a full-bleed backdrop on
            desktop; multiply blending melts its white studio background into the cream */}
        <div className="relative aspect-[5/4] w-full sm:aspect-[16/9] lg:absolute lg:inset-0 lg:-z-10 lg:aspect-auto">
          <Image
            src="/images/hero-wide.jpg"
            alt="Beauty student wearing warm coral eyeshadow and a glossy lip, hair in a curled updo"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[100%_15%] mix-blend-multiply"
          />
        </div>

        <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
          <div className="pt-8 pb-4 sm:pt-10 lg:max-w-[47%] lg:pt-[185px] lg:pb-28">
            <p className="bg-sand-soft/60 text-ink inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.63rem] font-semibold tracking-[0.16em] uppercase">
              <SparkleIcon className="h-3.5 w-3.5" />
              Practical Beauty Education in Ghana
            </p>

            <h1 className="font-display text-ink mt-6 max-w-[13ch] text-[2.6rem] leading-[1.04] font-bold tracking-[-0.01em] sm:text-6xl lg:text-[4.1rem]">
              Learn the craft. Build the confidence.
            </h1>

            <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed">
              Develop real beauty skills in nails, makeup, brows, lashes, and
              hair making/styling through guided practical training, with the
              materials you need included during your learning experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/courses"
                className="bg-ink hover:bg-forest rounded-lg px-6 py-3.5 text-sm font-semibold text-white transition-colors"
              >
                Explore Courses
              </Link>
              <Link
                href="/contact"
                className="border-ink/15 text-ink rounded-lg border bg-white px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-white/60"
              >
                Book a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- discipline cards */}
      <section className="bg-cream pt-10 pb-12 lg:pt-6 lg:pb-16">
        <h2 className="sr-only">Our training disciplines</h2>
        <div className="mx-auto grid max-w-[1500px] gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {disciplines.map((d) => (
            <Link
              key={d.slug}
              href={`/courses#${d.slug}`}
              className="group relative aspect-[16/11] overflow-hidden rounded-xl"
            >
              <Image
                src={d.image}
                alt={d.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-[50%_32%] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="font-display text-lg leading-tight font-bold text-white sm:text-xl">
                  {d.title}
                </h3>
                <span className="mt-1 flex items-center gap-1.5 text-[0.72rem] font-medium text-white/85">
                  View Course
                  <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- ticker */}
      <section aria-hidden className="bg-forest overflow-hidden py-3.5">
        <div className="animate-marquee flex w-max gap-10 pr-10">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center gap-10">
              {tickerItems.map((item) => (
                <span
                  key={item}
                  className="text-cream/85 text-[0.68rem] font-medium tracking-[0.2em] whitespace-nowrap uppercase"
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------- feature panels */}
      <section className="bg-cream py-14 lg:py-20">
        <h2 className="sr-only">How training works at Native Touch</h2>
        <div className="mx-auto grid max-w-[1500px] gap-5 px-5 sm:px-8 lg:grid-cols-2 lg:px-8">
          <article className="bg-cream-soft grid overflow-hidden rounded-2xl sm:grid-cols-[1.15fr_0.85fr]">
            <div className="flex flex-col justify-between gap-8 p-7 lg:p-9">
              <div>
                <h3 className="font-display text-ink text-2xl leading-tight font-bold lg:text-[1.75rem]">
                  Practice from day one
                </h3>
                <p className="mt-4 text-[0.88rem] leading-relaxed">
                  Build confidence through guided, hands-on sessions instead of
                  listening only to theory. From your very first week, you will
                  work with real tools, real techniques, and real guidance.
                </p>
              </div>
              <Link
                href="/courses"
                className="bg-ink hover:bg-forest inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-[0.78rem] font-semibold text-white transition-colors"
              >
                See how training works
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="relative min-h-[200px]">
              <Image
                src="/images/panel-practice.jpg"
                alt="Instructor applying eyeshadow with a brush during a guided practical session"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          </article>

          <article className="bg-ink grid overflow-hidden rounded-2xl sm:grid-cols-[1.15fr_0.85fr]">
            <div className="flex flex-col justify-between gap-8 p-7 lg:p-9">
              <div>
                <h3 className="font-display text-cream text-2xl leading-tight font-bold lg:text-[1.75rem]">
                  Focus on your craft
                </h3>
                <p className="text-cream/75 mt-4 text-[0.88rem] leading-relaxed">
                  Small, focused practical groups mean your tutor sees your
                  hands at work. You refine technique on real models, learn
                  client etiquette, and leave each session with work worth
                  showing.
                </p>
              </div>
              <Link
                href="/student-work"
                className="border-cream/35 text-cream hover:bg-cream hover:text-ink inline-flex w-fit items-center gap-2 rounded-full border px-5 py-2.5 text-[0.78rem] font-semibold transition-colors"
              >
                Explore the student experience
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="relative min-h-[200px]">
              <Image
                src="/images/panel-craft-nails.jpg"
                alt="Close-up of a student's hand-painted stiletto nails with gold bangles"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          </article>
        </div>
      </section>

      {/* ------------------------------------------------------ why section */}
      <section className="bg-cream-soft">
        <div className="grid lg:grid-cols-2">
          <div className="relative h-[420px] sm:h-[560px] lg:h-auto lg:min-h-[680px]">
            <Image
              src="/images/about-portrait.jpg"
              alt="Beauty student with a full natural afro and polished nails, resting her hand near her chin"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-14 sm:px-10 lg:py-24 lg:pr-16 lg:pl-14">
            <p className="text-body/70 text-[0.63rem] font-semibold tracking-[0.22em] uppercase">
              Why Native Touch
            </p>
            <h2 className="font-display text-ink mt-4 max-w-[16ch] text-3xl leading-[1.1] font-bold sm:text-4xl lg:text-[2.65rem]">
              A place to learn beauty with purpose.
            </h2>
            <div className="mt-6 space-y-4 text-[0.9rem] leading-relaxed">
              <p>
                Native Touch Designs School was built on a simple belief: beauty
                training should be practical, supportive, and real. Every
                student who walks through our doors deserves the chance to
                develop professional skills without worrying about the cost of
                materials.
              </p>
              <p>
                Our instructors bring years of salon and studio experience. They
                teach technique, precision, and client confidence across nails,
                makeup, brows and lashes, and hair making/styling – always with
                attention to the diversity of skin tones and hair textures our
                students will encounter in their careers.
              </p>
              <p>
                This is not a place to watch beauty happen on a screen. It is a
                place to hold the brush, shape the brow, fix the hair making,
                and build the hands-on mastery that real clients trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- pillars */}
      <section className="bg-forest">
        <h2 className="sr-only">What sets the school apart</h2>
        <div className="mx-auto grid max-w-[1500px] gap-8 px-6 py-12 sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:gap-10 lg:py-14">
          {pillars.map((p) => (
            <div key={p.title}>
              <h3 className="font-display text-cream text-lg leading-snug font-bold">
                {p.title}
              </h3>
              <p className="text-cream/70 mt-2 text-[0.78rem] leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- testimonials */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
          <p className="text-body/70 text-center text-[0.63rem] font-semibold tracking-[0.22em] uppercase">
            Student Voices
          </p>
          <h2 className="font-display text-ink mt-4 text-center text-3xl font-bold sm:text-4xl lg:text-[2.6rem]">
            What our students say
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="border-ink/5 rounded-2xl border bg-white p-7 shadow-[0_12px_40px_-24px_rgba(25,40,27,0.5)] lg:p-8"
              >
                <blockquote className="text-[0.92rem] leading-relaxed italic">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt=""
                    width={96}
                    height={96}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-ink text-[0.85rem] font-semibold">
                      {t.name}
                    </p>
                    <p className="text-body/70 text-[0.72rem]">{t.course}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ closing cta */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/cta-banner.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="bg-ink/75 absolute inset-0 -z-10" />
        <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:py-28">
          <h2 className="font-display text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-[2.9rem]">
            Your beauty career starts with practice.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[0.9rem] leading-relaxed text-white/80">
            Discover the right discipline, meet the school, and take your first
            step toward professional beauty training.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/courses"
              className="text-ink rounded-lg bg-white px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-white/90"
            >
              View Courses
            </Link>
            <Link
              href="/contact"
              className="hover:text-ink rounded-lg border border-white/50 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white"
            >
              Contact the School
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
