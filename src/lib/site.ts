export const site = {
  name: "Native Touch Designs School",
  shortName: "Native Touch",
  motto: "Forma, Ars, Confidentia",
  mottoGloss: "Beauty, Art, and Confidence",
  description:
    "A practical beauty training institution dedicated to developing hands-on skills, professional confidence, and real-world readiness in aspiring beauty professionals.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nativetouchschool.edu.gh",
  contact: {
    location: "Greater Accra, Ghana",
    locationNote: "Practical Studio & Beauty Lab",
    phone: "+233 (0) 24 000 0000",
    phoneHref: "tel:+233240000000",
    email: "admissions@nativetouchschool.edu.gh",
    hours: "Mon – Sat, 8:00 AM – 5:00 PM GMT",
  },
} as const;

export const navLinks = [
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About the School" },
  { href: "/student-work", label: "Student Work" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLinks = [
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About the School" },
  { href: "/student-work", label: "Student Work" },
  { href: "/apply", label: "Apply Now" },
  { href: "/staff", label: "Staff Portal" },
] as const;

export const disciplines = [
  {
    slug: "nails",
    title: "Nails",
    tagline: "Gel, Acrylic, Dip & Nail Art",
    image: "/images/discipline-nails.jpg",
    alt: "Long coffin nails with hand-painted black swirl tips and crystal accents",
  },
  {
    slug: "makeup",
    title: "Makeup",
    tagline: "Bridal, Editorial & Evening Glam",
    image: "/images/discipline-makeup.jpg",
    alt: "Student soft glam makeup with mauve shimmer eyeshadow and a glossy nude lip",
  },
  {
    slug: "brows-lashes",
    title: "Brows & Lashes",
    // the Courses page mockup spells this one out in full
    coursesTitle: "Eye Brows & Lashes",
    tagline: "Mapping, Lamination & Extensions",
    image: "/images/discipline-brows.jpg",
    alt: "Close-up of laminated brows and hand-applied volume lash extensions",
  },
  {
    slug: "hair-making",
    title: "Hair Making & Styling",
    coursesTitle: "Hair Making",
    tagline: "Weave Fixing, Closure & Styling",
    image: "/images/discipline-hair.jpg",
    alt: "Lace front wig styled in a voluminous side-parted body wave",
  },
] as const;

export const applicationFee = "200 GHS One-time Application Form Fee";

export const courseTracks = [
  {
    slug: "1-month",
    chip: "1 Month Track",
    chipShort: "1 Month",
    title: "1 Month Intensive Beauty Training",
    price: "1,500",
    curriculum: ["Nails", "Makeup", "Eye brows and lashes"],
    enrollmentCurriculum: [
      "Nails Artistry",
      "Makeup Artistry",
      "Eyebrows & Lashes",
    ],
    summary:
      "A fast-paced, highly intensive 4-week training foundation in professional nail artistry, beauty makeup application, and brow & lash styling. All practical supplies and equipment are provided by the school.",
    featured: false,
  },
  {
    slug: "3-month",
    chip: "3 Months Track",
    chipShort: "3 Months",
    title: "3 Month Professional Beauty & Hair Making Certificate",
    price: "3,000",
    curriculum: ["Nails", "Makeup", "Eye brows and lashes", "Hair Making"],
    enrollmentCurriculum: [
      "Nails Artistry",
      "Makeup Artistry",
      "Eyebrows & Lashes",
      "Hair Weaving & Styling",
    ],
    summary:
      "A comprehensive 12-week certificate programme featuring advanced nail enhancement, bridal & evening makeup, precision brow & lash care, and professional hair making fixing. All practical materials provided.",
    featured: true,
  },
  {
    slug: "6-month",
    chip: "6 Month Track",
    chipShort: "6 Months",
    title: "6 Month Master Beauty & Salon Diploma",
    price: "6,000",
    curriculum: ["Nails", "Makeup", "Eye brows and lashes", "Hair Making"],
    enrollmentCurriculum: [
      "Nails Masterclass",
      "HD Photographic Makeup",
      "Advanced Brows & Lashes",
      "Premium Hair Wig Construction & Business",
    ],
    summary:
      "A complete 24-week master diploma in beauty arts and salon leadership. Covers advanced nail artistry, high-fashion & photographic makeup, brow/lash lamination & extension, hair making mastery, hygiene, and client consulting. Complete practical toolkit provided.",
    featured: false,
  },
] as const;
