import { BrandedPhoto } from "@/components/media/BrandedPhoto";
import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Electrical Distribution Equipment",
  description: `Distribution equipment, switchgear, panels, cables and protection — supplied by ${site.name}.`,
  path: "/electrical-distribution-equipment",
});

const categories = [
  {
    title: "Switchgear & protection",
    text: "Circuit breakers, isolators, protection relays and related devices for distribution networks.",
  },
  {
    title: "Panels & assemblies",
    text: "LT and HT panel solutions, PCC, MCC and custom assemblies coordinated to your single-line diagrams.",
  },
  {
    title: "Cables & busway",
    text: "Power and control cabling, busbar trunking and terminations for infrastructure projects.",
  },
  {
    title: "Metering & accessories",
    text: "Energy metering, distribution accessories and site consumables aligned to utility standards.",
  },
];

export default function DistributionEquipmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Electrical distribution equipment"
        description="Supply partner for switchgear, panels, cabling and protection used in utility and commercial distribution programmes."
        image={images.substation}
        imageAlt="Electrical substation infrastructure"
      />

      <section className="py-20">
        <Container className="mb-12">
          <BrandedPhoto
            src={images.switchgear}
            alt="Switchgear and distribution equipment"
            overlay="soft"
            aspectClassName="aspect-[21/9] max-h-[340px]"
            sizes="100vw"
          />
        </Container>
        <Container>
          <SectionHeading
            title="Product focus areas"
            description="Manufacturers, ratings and compliance documents are confirmed per enquiry. We do not list unverified technical data sheets on this site."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {categories.map((cat) => (
              <article
                key={cat.title}
                className="border border-bp-border p-8 transition-colors hover:border-bp-sky"
              >
                <h2 className="text-xl font-bold text-bp-navy">{cat.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-bp-muted">
                  {cat.text}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/products">All products</Button>
            <Button href="/contact" variant="outline">
              Distribution enquiry
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-bp-surface py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <BrandedPhoto
            src={images.cables}
            alt="Electrical cabling and distribution materials"
            overlay="editorial"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="border border-bp-border bg-white p-8 lg:p-10">
            <SectionHeading
              eyebrow="Enquiry"
              title="Share your distribution BOM"
              description="Include voltage level, quantities, preferred makes (if any), and delivery location."
            />
            <EnquiryForm
              subject="Electrical distribution equipment enquiry"
              className="mt-8"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
