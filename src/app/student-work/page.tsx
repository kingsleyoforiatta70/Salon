import type { Metadata } from "next";
import Image from "next/image";
import { SparkleIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Student Work",
  description:
    "A showcase of nails, makeup, brows, lashes and hair making produced by Native Touch Designs School students using school-provided premium materials.",
  alternates: { canonical: "/student-work" },
  openGraph: {
    title: `Student Work | ${site.name}`,
    description:
      "Nails, makeup, brows, lashes and hair making produced by our students using school-provided premium materials.",
    url: "/student-work",
  },
};

type Tile = {
  src: string;
  alt: string;
  span: string;
  priority?: boolean;
};

function GalleryImage({ src, alt, span, priority }: Tile) {
  return (
    <figure
      className={`relative h-[300px] overflow-hidden rounded-2xl sm:h-[400px] ${span}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
        className="object-cover"
      />
    </figure>
  );
}

export default function StudentWorkPage() {
  return (
    <section className="bg-cream pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <header className="mx-auto max-w-3xl text-center">
          <p className="bg-sand-soft/60 text-ink inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.6rem] font-semibold tracking-[0.2em] uppercase">
            <SparkleIcon className="h-3.5 w-3.5" />
            Student Showcase
          </p>
          <h1 className="font-display text-ink mt-6 text-[2.4rem] leading-[1.06] font-bold sm:text-5xl lg:text-[3.9rem]">
            Practical Mastery in Action
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[0.92rem] leading-relaxed">
            A glimpse into the stunning work produced by our students using
            school-provided premium materials. Each creation represents hours of
            guided technique and personal artistic evolution.
          </p>
        </header>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-12">
          {/* ------------------------------------------------------------ row 1 */}
          <GalleryImage
            src="/images/sw-nails-flame.jpg"
            alt="Long coffin acrylic nails with hand-painted orange flame tips"
            span="lg:col-span-5 lg:h-[600px]"
            priority
          />

          <article className="border-ink/5 flex flex-col rounded-2xl border bg-white p-6 shadow-[0_14px_44px_-30px_rgba(25,40,27,0.5)] sm:col-span-2 lg:col-span-4 lg:h-[600px] lg:p-7">
            <h2 className="font-display text-ink text-center text-xl font-bold lg:text-2xl">
              Tailored Bridal Makeup
            </h2>
            <p className="mt-3 text-center text-[0.82rem] leading-relaxed">
              Our professional bridal track teaches colour matching, HD camera
              preparedness, and long-wear skin artistry suited perfectly for
              real Ghanaian brides.
            </p>
            <figure className="relative mt-5 min-h-[220px] flex-1 overflow-hidden rounded-xl">
              <Image
                src="/images/sw-bridal-portrait.jpg"
                alt="Student bridal makeup with a sleek low bun and soft neutral glam"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover"
              />
            </figure>
            <figcaption className="text-body/60 mt-3 text-center text-[0.7rem] italic">
              Makeup Student Showcase
            </figcaption>
          </article>

          <GalleryImage
            src="/images/sw-portrait-glam.jpg"
            alt="Student soft glam makeup with a bronze lip and waved blow-dry"
            span="lg:col-span-3 lg:h-[600px]"
            priority
          />

          {/* ------------------------------------------------------------ row 2 */}
          <GalleryImage
            src="/images/sw-brows.jpg"
            alt="Close-up of sculpted eyebrows and hand-applied lash extensions"
            span="lg:col-span-3 lg:h-[580px]"
          />

          <article className="bg-ink flex flex-col rounded-2xl p-6 sm:col-span-2 lg:col-span-4 lg:h-[580px] lg:p-7">
            <h2 className="font-display text-cream text-center text-xl font-bold lg:text-2xl">
              Wig Construction
            </h2>
            <p className="text-cream/75 mt-3 text-center text-[0.82rem] leading-relaxed">
              See the precision stitch and styling work from our 3-Month Hair
              Making class. Complete master kits are fully provided on campus.
            </p>
            <figure className="relative mt-5 min-h-[220px] flex-1 overflow-hidden rounded-xl">
              <Image
                src="/images/sw-wig-video.jpg"
                alt="Student-installed lace front wig styled bone straight with a defined parting"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover"
              />
            </figure>
            <figcaption className="text-cream/55 mt-3 text-center text-[0.7rem] italic">
              Hair Making &amp; Styling Showcase
            </figcaption>
          </article>

          <GalleryImage
            src="/images/sw-softglam.jpg"
            alt="Student soft glam with fluffy lashes, laid edges and a glossy nude lip"
            span="lg:col-span-5 lg:h-[580px]"
          />

          {/* ------------------------------------------------------------ row 3 */}
          <GalleryImage
            src="/images/sw-updo.jpg"
            alt="Bridal updo with a sculpted top knot and cascading barrel curls"
            span="lg:col-span-4 lg:h-[360px]"
          />
          <GalleryImage
            src="/images/sw-bridal-scarf.jpg"
            alt="Student bridal makeup look with a deep red headwrap and warm glam eyes"
            span="lg:col-span-4 lg:h-[360px]"
          />
          <GalleryImage
            src="/images/sw-nails-gold.jpg"
            alt="Almond nails finished with gold chrome tips and a marble accent"
            span="lg:col-span-4 lg:h-[360px]"
          />
        </div>
      </div>
    </section>
  );
}
