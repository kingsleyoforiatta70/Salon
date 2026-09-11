import type { Metadata } from "next";
import { Bodoni_Moda, Poppins } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Practical Beauty Education in Ghana`,
    template: `%s | ${site.name}`,
  },
  description:
    "Train in nails, makeup, brows and lashes, and hair making at Native Touch Designs School in Greater Accra. Hands-on practical beauty education with all practical materials provided.",
  keywords: [
    "beauty school Ghana",
    "nail technician course Accra",
    "makeup artistry training Ghana",
    "lash and brow course Accra",
    "hair making school Ghana",
  ],
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Practical Beauty Education in Ghana`,
    description:
      "Hands-on training in nails, makeup, brows and lashes, and hair making. All practical materials provided by the school.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Practical Beauty Education in Ghana`,
    description:
      "Hands-on training in nails, makeup, brows and lashes, and hair making. All practical materials provided by the school.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GH"
      className={`${bodoni.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="bg-ink sr-only rounded-full px-5 py-3 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60]"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
