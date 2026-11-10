import { site } from "@/lib/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    logo: `${site.url}${site.logoPath}`,
    description: site.tagline,
    ...(site.email && { email: site.email }),
    ...(site.phone && { telephone: site.phone }),
    ...(site.address && {
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
