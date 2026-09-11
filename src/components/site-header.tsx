"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-2 z-50 px-3 sm:top-4 sm:px-5">
      <nav
        aria-label="Main"
        className="mx-auto max-w-[1400px] rounded-[2rem] border border-white/50 bg-white/65 shadow-[0_10px_40px_-12px_rgba(25,40,27,0.35)] backdrop-blur-xl sm:rounded-full"
      >
        <div className="flex items-center justify-between gap-4 py-2 pr-2 pl-3 sm:pl-4">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5"
            aria-label={`${site.name} — home`}
          >
            <Image
              src="/images/crest.jpg"
              alt=""
              width={80}
              height={80}
              priority
              className="h-11 w-11 rounded-full object-cover sm:h-12 sm:w-12"
            />
            <span className="font-display text-ink hidden text-[0.95rem] leading-tight font-bold xl:block">
              Native Touch
              <span className="text-body block text-[0.62rem] font-sans font-medium tracking-[0.18em] uppercase">
                Designs School
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`text-[0.92rem] transition-colors hover:text-ink ${
                      active ? "text-ink font-semibold" : "text-body"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/apply"
              className="bg-ink hover:bg-forest rounded-lg px-5 py-2.5 text-[0.85rem] font-semibold text-white transition-colors sm:px-6"
            >
              Apply Now
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="text-ink hover:bg-ink/10 rounded-full p-2.5 transition-colors lg:hidden"
            >
              {open ? (
                <CloseIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <div
          id="mobile-nav"
          hidden={!open}
          className="border-ink/10 border-t px-4 pt-3 pb-4 lg:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className="text-ink block py-2.5 text-[0.95rem] font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
