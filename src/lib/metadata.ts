import type { Metadata } from "next";
import { site } from "./site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetaInput): Metadata {
  const fullTitle =
    path === "/" ? `${site.name} | ${site.legalName}` : `${title} | ${site.name}`;
  const url = `${site.url.replace(/\/$/, "")}${path}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "electrical products",
      "electrical contracting",
      "B2B electrical supply",
      "industrial electrical equipment",
      site.legalName,
      ...keywords,
    ],
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_IN",
      images: [{ url: `${site.url}${site.logoPath}`, alt: site.legalName }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
