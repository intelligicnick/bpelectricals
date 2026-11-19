# Design System

## Brand colours (from logo)

| Token | Hex | Usage |
|-------|-----|--------|
| `bp-navy` | `#1A2B3C` | Primary brand, headings on light |
| `bp-navy-deep` | `#0F1A24` | Hero overlays, footer |
| `bp-sky` | `#4DA3E8` | Accent, links, CTAs |
| `bp-sky-light` | `#E8F4FC` | Hover states, badges |
| `bp-charcoal` | `#1C1C1C` | Body text |
| `bp-muted` | `#5C6670` | Secondary text |
| `bp-border` | `#E2E8ED` | Borders |
| `bp-surface` | `#F7F9FB` | Alternate sections |

Defined in `src/app/globals.css` via Tailwind v4 `@theme`.

## Typography

- **Headings:** Manrope (`--font-manrope`)
- **Body:** Inter (`--font-inter`)

Hierarchy:

- Display / H1: 2.75rem–4.25rem, bold, tight tracking
- H2: 1.875rem–2.25rem
- Eyebrow: uppercase, 0.2em letter-spacing, `bp-sky`

## Layout

- Max content width: `max-w-7xl` (1280px); hero grids may use `1440px`
- Asymmetry: 5/7 column splits, offset imagery (`lg:col-start-7`, negative margins on images)
- Section rhythm: `py-20` / `lg:py-28`
- Generous horizontal padding: `px-5` → `lg:px-12`

## Components

- Sharp corners (`rounded-sm`) for industrial feel
- Cards: 1px borders, hover elevation via border + shadow
- CTAs: primary sky, secondary navy, outline for on-dark sections

## Motion

- Scroll reveal: `.reveal` + `Reveal` component (Intersection Observer)
- Hero: `animate-fade-up` on load
- Hover: link arrows, image borders — keep subtle

## Photography

Decorative photography in `src/lib/images.ts` (`public/images/stock/`). Verified project shots stay in `public/images/portfolio/`. See `ASSET_GUIDELINES.md` and `public/images/stock/IMAGE_SOURCES.md`.
