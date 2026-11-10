import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CtaBand } from "@/components/sections/CtaBand";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Electrical Contracting",
  description: `Complete electrical works, installations and project execution by ${site.name}.`,
  path: "/electrical-contracting",
});

const scopes = [
  {
    heading: "Complete electrical works",
    body: "End-to-end execution for awarded B2B contracts, coordinated with your project managers and safety requirements.",
  },
  {
    heading: "Installations",
    body: "Equipment installation, cabling, terminations and commissioning support aligned to approved drawings.",
  },
  {
    heading: "Infrastructure support",
    body: "Electrical works for commercial buildings, industrial facilities and utility-adjacent infrastructure.",
  },
  {
    heading: "Project execution",
    body: "Site teams, material movement and schedule alignment for multi-phase electrical programmes.",
  },
];

export default function ElectricalContractingPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Electrical contracting"
        description="Execution capability for organisations that need a accountable partner on complete electrical scope — not ad-hoc labour supply."
        image={images.construction}
        imageAlt="Construction and electrical infrastructure site"
      />

      <section className="py-20">
        <Container>
          <SectionHeading
            title="Contracting capabilities"
            description="We discuss scope, timelines and commercial terms after reviewing tender documents or scope notes — without publishing unverified project statistics."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {scopes.map((item) => (
              <article key={item.heading} className="bg-bp-surface p-10">
                <h2 className="text-xl font-bold text-bp-navy">{item.heading}</h2>
                <p className="mt-4 text-sm leading-relaxed text-bp-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-bp-border py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Tender & scope"
            title="Start a contracting conversation"
            description="Share location, approximate scope, and target timelines. We respond with information requests or a meeting proposal."
          />
          <EnquiryForm subject="Electrical contracting enquiry" />
        </Container>
      </section>

      <CtaBand
        title="Combine contracting with material supply"
        description="Many clients engage us for both procurement and execution under aligned commercial structures."
      />
    </>
  );
}
