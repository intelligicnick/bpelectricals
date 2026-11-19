/** Central site configuration — update contact fields when verified. */
export const site = {
  name: "BP Electrical",
  legalName: "BP Electroinfra Pvt. Ltd.",
  tagline: "Electrical products, procurement and contracting for corporate and industrial clients.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com",
  logoPath: "/images/bp-logo.png",
  /**
   * Set via environment variables before production launch.
   * Leave unset to show enquiry-first contact UI (no invented numbers or addresses).
   */
  phone: process.env.NEXT_PUBLIC_PHONE?.trim() || null,
  email: process.env.NEXT_PUBLIC_EMAIL?.trim() || null,
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP?.trim() || null,
  address:
    process.env.NEXT_PUBLIC_ADDRESS?.trim() ||
    "5th Vihan Commercial Complex, Walbhat Road, Opp Nutun Chemical Compound, Goregaon East, Mumbai, Maharashtra 400063",
} as const;

export const utilityPartners = [
  "Adani Electricity Mumbai Ltd",
  "Tata Power",
] as const;
