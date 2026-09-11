import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // the staff admissions portal is private and must never be indexed
      disallow: ["/staff", "/staff/"],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
