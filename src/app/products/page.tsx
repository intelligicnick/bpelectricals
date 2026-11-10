import Image from "next/image";
import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Products",
  description: `Electrical product catalogue from ${site.name} — distribution equipment, industrial lines and B2B enquiry.`,
  path: "/products",
  keywords: ["electrical catalogue", "switchgear supply"],
});

const catalogueGroups = [
  {
    name: "Distribution & power",
    items: [
      "Switchgear and protection devices",
      "LT / HT panels and assemblies",
      "Cables and busbar systems",
      "Metering and distribution accessories",
    ],
  },
  {
    name: "Industrial & control",
    items: [
      "Industrial components and accessories",
      "Control and automation equipment",
      "Terminations, glands and consumables",
      "Project-specific BOM fulfilment",
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="B2B electrical product catalogue"
        description="Explore categories, share Bill of Materials requirements, and receive a structured quotation response."
        image={images.switchgear}
        imageAlt="Industrial electrical equipment"
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <FeatureCard
              title="Electrical distribution equipment"
              description="Panels, switchgear, cables, protection and related distribution products."
              href="/electrical-distribution-equipment"
            />
            <FeatureCard
              title="Industrial electrical products"
              description="Components, accessories, control equipment and industrial categories."
              href="/industrial-electrical-products"
            />
          </div>
        </Container>
      </section>

      <section className="bg-bp-surface py-20">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Catalogue structure"
              title="How we organise supply lines"
              description="Specific brands, ratings and datasheets are confirmed during enquiry — we do not publish unverified specifications online."
            />
          </div>
          <div className="space-y-10 lg:col-span-6 lg:col-start-7">
            {catalogueGroups.map((group) => (
              <div key={group.name}>
                <h3 className="text-lg font-bold text-bp-navy">{group.name}</h3>
                <ul className="mt-4 space-y-2 text-sm text-bp-muted">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-bp-sky">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.warehouse}
                alt="Warehouse and logistics for electrical materials"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Enquiry"
              title="Request pricing or availability"
              description="Attach line items, makes, or drawings in your message. Our team will respond with next steps."
            />
            <EnquiryForm subject="Product catalogue enquiry" className="mt-8" />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
