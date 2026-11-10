# SEO Strategy

## Technical foundation

- **Metadata:** `createPageMetadata()` in `src/lib/metadata.ts` — unique title, description, canonical, Open Graph, Twitter per page
- **Sitemap:** `src/app/sitemap.ts` — all ten primary routes
- **Robots:** `src/app/robots.ts` — allow all, point to sitemap
- **Structured data:** `OrganizationJsonLd` in root layout — name, logo, URL; optional phone/email/address when configured

## Keywords (themes)

- B2B electrical supply India
- Electrical distribution equipment supplier
- Industrial electrical procurement
- Electrical contracting infrastructure
- Corporate electrical works

Avoid keyword stuffing; align headings with user intent (products vs services vs contact).

## On-page

- One H1 per page via `PageHero`
- Descriptive `alt` on `next/image` assets
- Internal links: dropdown nav, footer sitemap, in-content CTAs to `/contact` and product hubs

## Launch checklist

1. Set `NEXT_PUBLIC_SITE_URL` to production domain
2. Submit sitemap in Search Console
3. Replace `example.com` default if env unset
4. Add favicon/apple-touch from logo if required
5. Enable HTTPS and redirects at host

## Content growth (post-launch)

- Replace project placeholders with approved case studies (unique titles + meta descriptions)
- Add blog only if editorial capacity exists — not required for v1
