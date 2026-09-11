import type { Metadata } from "next";
import Image from "next/image";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Admissions",
  description:
    "Reach the Native Touch Designs School admissions team in Greater Accra, Ghana. Ask about enrollment dates, course schedules, and practical training arrangements.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact Admissions | ${site.name}`,
    description:
      "Ask about enrollment dates, course schedules, and practical training arrangements at Native Touch Designs School.",
    url: "/contact",
  },
};

const officeDetails = [
  {
    icon: MapPinIcon,
    label: "Location",
    value: site.contact.location,
    note: site.contact.locationNote,
  },
  {
    icon: PhoneIcon,
    label: "Telephone / WhatsApp",
    value: site.contact.phone,
    href: site.contact.phoneHref,
    note: site.contact.hours,
  },
  {
    icon: MailIcon,
    label: "Email Admissions",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    note: "Prompt response within 24 hours",
  },
  {
    icon: null,
    label: "Training Hours",
    value: "Morning & Afternoon Practical Sessions",
    note: "Greater Accra Training Facility",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ---------------------------------------------------------------- hero */}
      <section className="relative isolate flex min-h-[420px] items-center justify-center overflow-hidden lg:min-h-[600px]">
        <Image
          src="/images/contact-hero.jpg"
          alt="Student model admiring her hand-painted stiletto nails"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[30%_45%]"
        />
        <div className="bg-ink/65 absolute inset-0 -z-10" />

        <div className="mx-auto max-w-3xl px-6 pt-24 pb-12 text-center">
          <h1 className="font-display text-[2.4rem] leading-[1.05] font-bold text-white sm:text-5xl lg:text-[4rem]">
            Contact Admissions
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[0.95rem] leading-relaxed text-white/85">
            We are here to answer your questions, walk you through course
            tracks, and guide you through the enrollment process. Reach out to
            get started.
          </p>
        </div>
      </section>

      {/* -------------------------------------------------- intro + two panels */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-[1300px] px-6 sm:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="bg-sand-soft/60 text-ink inline-flex rounded-full px-4 py-1.5 text-[0.6rem] font-semibold tracking-[0.2em] uppercase">
              Get in Touch
            </p>
            <h2 className="font-display text-ink mt-6 text-3xl leading-[1.12] font-bold sm:text-4xl lg:text-[2.8rem]">
              Visit Our Campus or Send an Inquiry
            </h2>
            <p className="mt-5 text-[0.92rem] leading-relaxed">
              Our admissions staff is ready to answer questions about
              enrollment, course schedules, and our practical beauty
              curriculum.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-[0.85fr_1.15fr]">
            {/* admissions office */}
            <div className="border-ink/5 rounded-2xl border bg-white p-7 shadow-[0_14px_44px_-28px_rgba(25,40,27,0.5)] lg:p-9">
              <h3 className="font-display text-ink text-2xl font-bold">
                Admissions Office
              </h3>

              <dl className="mt-7 space-y-6">
                {officeDetails.map((d) => (
                  <div key={d.label} className="flex items-start gap-3">
                    {d.icon ? (
                      <d.icon className="text-ink mt-1 h-4 w-4 shrink-0" />
                    ) : (
                      <span className="mt-1 h-4 w-4 shrink-0" aria-hidden />
                    )}
                    <div>
                      <dt className="text-ink text-[0.8rem] font-semibold">
                        {d.label}
                      </dt>
                      <dd className="mt-1 text-[0.88rem]">
                        {d.href ? (
                          <a
                            href={d.href}
                            className="hover:text-ink break-all underline-offset-4 transition-colors hover:underline"
                          >
                            {d.value}
                          </a>
                        ) : (
                          d.value
                        )}
                        <span className="text-body/60 block text-[0.75rem]">
                          {d.note}
                        </span>
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>

              <p className="bg-ink text-cream/85 mt-8 rounded-lg p-4 text-[0.78rem] leading-relaxed">
                <strong className="text-cream font-semibold">
                  Notice to Applicants:
                </strong>{" "}
                Application form submissions require a non-refundable
                application fee of 200 GHS processed securely via Paystack.
              </p>
            </div>

            {/* inquiry form */}
            <div className="border-ink/5 rounded-2xl border bg-white p-7 shadow-[0_14px_44px_-28px_rgba(25,40,27,0.5)] lg:p-9">
              <h3 className="font-display text-ink text-2xl font-bold">
                Send Us a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
