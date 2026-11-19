import { BrandedPhoto } from "@/components/media/BrandedPhoto";
import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Industries We Serve",
  description: `Sectors served by ${site.name} — utilities, industry, construction, real estate and institutions.`,
  path: "/industries",
});

const industries = [
  {
    name: "Power utilities",
    detail:
      "Distribution products and project support aligned to utility procurement practices.",
  },
  {
    name: "Commercial infrastructure",
    detail:
      "Electrical material and contracting for offices, campuses and mixed-use developments.",
  },
  {
    name: "Industrial facilities",
    detail:
      "Plant electrical components, shutdown material and execution partners for production environments.",
  },
  {
    name: "Construction & EPC",
    detail:
      "Bill of materials fulfilment and site electrical works for contractors and EPC teams.",
  },
  {
    name: "Real estate",
    detail:
      "Tower and township electrical packages coordinated with development milestones.",
  },
  {
    name: "Institutional clients",
    detail:
      "Hospitals, education and public-sector facilities with structured procurement needs.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Who we serve"
        description="B2B relationships across sectors that depend on disciplined electrical supply and accountable execution."
        image={images.heroGrid}
        imageAlt="Power grid and infrastructure"
      />

      <section className="py-20">
        <Container className="mb-12">
          <BrandedPhoto
            src={images.construction}
            alt="Construction and infrastructure industries"
            overlay="editorial"
            aspectClassName="aspect-[21/9] max-h-[360px]"
            sizes="100vw"
          />
        </Container>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 60}>
                <article className="h-full border border-bp-border bg-white p-8">
                  <h2 className="text-lg font-bold text-bp-navy">{ind.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-bp-muted">
                    {ind.detail}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-bp-navy py-20 text-white">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              light
              title="Sector-specific enquiries"
              description="Tell us about your industry, site locations and whether you need products, procurement, or contracting."
            />
            <Button href="/contact" className="mt-8">
              Contact Us
            </Button>
          </div>
          <BrandedPhoto
            src={images.industrial}
            alt="Industrial electrical environment"
            overlay="editorial"
            aspectClassName="aspect-video"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Container>
      </section>
    </>
  );
}
