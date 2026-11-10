# Component Guidelines

## Structure

```
src/components/
  layout/     Header, Footer
  ui/         Container, Button, Reveal
  sections/   PageHero, SectionHeading, CtaBand, ProjectPlaceholder
  cards/      FeatureCard
  forms/      EnquiryForm
  contact/    ContactDetails
  seo/        OrganizationJsonLd
```

## Conventions

- **Server components by default**; `"use client"` only for Header (mobile nav), EnquiryForm, Reveal
- **Props:** prefer explicit strings over CMS for v1
- **Links:** Next.js `Link` for internal routes; external WhatsApp via `Button href`
- **Images:** `next/image` with `fill` + `sizes`; remote patterns in `next.config.ts`

## Header

- Sticky, backdrop blur
- Desktop hover dropdowns; mobile accordion-style stack
- Active state via `usePathname`

## Forms

- Shared `EnquiryForm` with optional `subject` default
- POST JSON to `/api/enquiry`
- Accessible labels, `required` fields, `aria-busy` while submitting

## Sections

- Pair `SectionHeading` with `Container`
- Wrap staggered content in `Reveal` for scroll animation
- End commercial pages with `CtaBand` where appropriate

## Extending

When adding a page:

1. Export `metadata` via `createPageMetadata`
2. Start with `PageHero`
3. Reuse enquiry form with page-specific subject line
4. Register route in `src/lib/navigation.ts` if it should appear in nav/footer
