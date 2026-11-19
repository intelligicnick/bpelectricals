# Asset Guidelines

## Logo

- **Source file:** `public/images/bp-logo.png` (uploaded BP Electroinfra mark)
- **Usage:** Header, footer (inverted), Open Graph fallback via site URL + logo path
- **Do not** distort aspect ratio; height constrained via Tailwind (`h-10` / `h-12`)

## Favicon

- Generate `app/icon.png` from logo monogram when ready (optional v1 enhancement)

## Photography

Decorative sections use curated stock files from `public/images/stock/` via `src/lib/images.ts` (see `IMAGE_SOURCES.md` for licences). Verified project photography remains in `public/images/portfolio/` for portfolio cards only.

Before production:

1. Prefer client-owned site photography and product shots
2. Confirm model releases and client approval for project images
3. Optimise: WebP/AVIF via `next/image`, width appropriate to layout
4. Update `alt` text to describe real scenes

## Icons

- Inline SVG for chevrons and menu (no icon font dependency)

## Environment

Never commit `.env.local`. Document contact values in secure client handoff.

## Replacing project placeholders

`ProjectPlaceholder` component shows dashed border and explicit “awaiting verified project data” badge. Swap for real `article` + image when assets exist — do not remove the badge until content is verified.
