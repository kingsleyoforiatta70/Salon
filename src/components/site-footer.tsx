import Link from "next/link";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { footerLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream/75">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16 lg:py-20">
        <div>
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="bg-cream text-ink font-display flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold"
            >
              N
            </span>
            <span className="font-display text-cream text-lg font-bold">
              {site.name}
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            {site.description}
          </p>
        </div>

        <div>
          <h2 className="text-cream text-xs font-sans font-semibold tracking-[0.2em] uppercase">
            Quick Links
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-cream transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-cream text-xs font-sans font-semibold tracking-[0.2em] uppercase">
            Contact
          </h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{site.contact.location}</span>
            </li>
            <li className="flex items-start gap-3">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0" />
              <a
                href={site.contact.phoneHref}
                className="hover:text-cream transition-colors"
              >
                {site.contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0" />
              <a
                href={`mailto:${site.contact.email}`}
                className="hover:text-cream break-all transition-colors"
              >
                {site.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-cream/15 border-t">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-6 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-display text-sand italic">{site.motto}</p>
        </div>
      </div>
    </footer>
  );
}
