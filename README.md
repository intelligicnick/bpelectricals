# BP Electrical — Corporate Website

Premium 10-page corporate website for **BP Electroinfra Pvt. Ltd.** (brand: **BP Electrical**), built with Next.js, TypeScript, and Tailwind CSS.

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about-us` | About Us |
| `/products` | Products |
| `/electrical-distribution-equipment` | Electrical Distribution Equipment |
| `/industrial-electrical-products` | Industrial Electrical Products |
| `/electrical-contracting` | Electrical Contracting |
| `/electrical-supply-procurement` | Electrical Supply & Procurement |
| `/projects` | Projects & Work Experience |
| `/industries` | Industries We Serve |
| `/contact` | Contact Us |

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
cp .env.example .env.local
# Add verified contact values and production URL
npm run build
npm start
```

## Contact configuration

Set these in `.env.local` before launch (no invented values are shown on the site until configured):

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_PHONE`
- `NEXT_PUBLIC_EMAIL`
- `NEXT_PUBLIC_WHATSAPP` (country code, no `+`, e.g. `9198XXXXXXXX`)
- `NEXT_PUBLIC_ADDRESS`

## Enquiry API

`POST /api/enquiry` validates and logs enquiries. Wire email or CRM in `src/app/api/enquiry/route.ts`.

## Documentation

- `PROJECT_BRIEF.md`
- `DESIGN_SYSTEM.md`
- `WEBSITE_CONTENT.md`
- `SEO_STRATEGY.md`
- `COMPONENT_GUIDELINES.md`
- `ASSET_GUIDELINES.md`
