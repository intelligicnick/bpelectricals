import { createPageMetadata } from "@/lib/metadata";
import { BrandedPhoto } from "@/components/media/BrandedPhoto";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Electrical Supply & Procurement",
  description: `B2B electrical sourcing, bulk supply and vendor coordination from ${site.name}.`,
  path: "/electrical-supply-procurement",
});

const pillars = [
  "Corporate procurement programmes and rate contracts",
  "Bulk supply aligned to project milestones",
  "Vendor coordination and delivery scheduling",
  "Project-based material supply with consolidated invoicing",
];

export default function SupplyProcurementPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Electrical supply & procurement"
        description="A procurement layer for teams that need responsive sourcing, consolidated supply lines and vendor alignment."
        image={images.warehouse}
        imageAlt="Electrical material storage and logistics"
      />

      <section className="py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              title="How we support procurement teams"
              description="We work alongside your purchase and project controls functions — especially where multiple sites or phases share common material lists."
            />
            <ol className="mt-10 space-y-6">
              {pillars.map((pillar, i) => (
                <li key={pillar} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-bp-navy text-sm font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-2 text-bp-charcoal">{pillar}</p>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={100}>
            <BrandedPhoto
              src={images.cables}
              alt="Electrical materials and cable supply"
              overlay="contrast"
              aspectClassName="aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-bp-surface py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <BrandedPhoto
            src={images.industrial}
            alt="Industrial supply chain for electrical procurement"
            overlay="soft"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div>
            <SectionHeading
              eyebrow="Enquiry"
              title="Procurement enquiry"
              description="Attach RFQs, planned drawdown schedules, or vendor onboarding requirements."
            />
            <EnquiryForm
              subject="Electrical supply & procurement enquiry"
              className="mt-8"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
