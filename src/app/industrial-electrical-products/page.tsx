import { BrandedPhoto } from "@/components/media/BrandedPhoto";
import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Industrial Electrical Products",
  description: `Industrial electrical components, accessories and control equipment from ${site.name}.`,
  path: "/industrial-electrical-products",
});

const lines = [
  "Industrial switchgear and motor control components",
  "Control panels, relays, contactors and starters",
  "Cable glands, lugs, trunking and installation accessories",
  "Maintenance and shutdown consumables for plant electrical teams",
  "Project-based kitting for industrial expansions",
];

export default function IndustrialProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Industrial electrical products"
        description="Components, accessories and control equipment for factories, plants and heavy commercial facilities."
        image={images.industrial}
        imageAlt="Industrial facility electrical context"
      />

      <section className="py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Industrial supply categories"
              description="We align makes and specifications to your approved vendor lists and plant standards during quotation."
            />
            <ul className="mt-10 space-y-4">
              {lines.map((line) => (
                <li
                  key={line}
                  className="border-b border-bp-border pb-4 text-bp-charcoal last:border-0"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <BrandedPhoto
            src={images.controlRoom}
            alt="Industrial control and electrical systems"
            overlay="contrast"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Container>
      </section>

      <section className="bg-bp-surface py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <BrandedPhoto
            src={images.switchgear}
            alt="Industrial electrical components"
            overlay="contrast"
            aspectClassName="aspect-square max-lg:max-h-80"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div>
            <SectionHeading
              eyebrow="Enquiry"
              title="Industrial line enquiry"
              description="Share part numbers, annual consumption, or project kit lists."
            />
            <EnquiryForm
              subject="Industrial electrical products enquiry"
              className="mt-8"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
