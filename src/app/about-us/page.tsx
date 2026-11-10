import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About Us",
  description: `Learn about ${site.legalName} — electrical products, corporate procurement and contracting capabilities for utilities and industry.`,
  path: "/about-us",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built for B2B electrical supply and execution"
        description={`${site.legalName} works with corporate accounts, contractors and facility teams that need dependable product access and practical contracting support.`}
        image={images.controlRoom}
        imageAlt="Electrical control and monitoring environment"
      />

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Company profile"
              title="Who we are"
            />
          </Reveal>
          <Reveal delay={80} className="lg:col-span-6 lg:col-start-7 space-y-5 text-bp-muted leading-relaxed">
            <p>
              Operating as {site.name}, we focus on electrical products,
              industrial lines, and complete electrical works for business
              customers — not retail walk-in trade.
            </p>
            <p>
              Our capabilities span sourcing and supply for active projects,
              coordination with OEM and authorised distribution channels, and
              on-site execution where contracting scope is awarded.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-bp-border bg-bp-surface py-20">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="What we deliver"
            description="Product supply, procurement partnership and contracting — configured to your project or maintenance programme."
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              "Electrical distribution and industrial product supply",
              "Corporate and project-based procurement",
              "Complete electrical works and installation support",
              "Material coordination aligned to site schedules",
            ].map((item) => (
              <li
                key={item}
                className="border-l-4 border-bp-sky bg-white px-6 py-5 text-bp-navy font-medium"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-16 lg:grid-cols-3">
          <Reveal>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-bp-sky">
              Mission
            </h2>
            <p className="mt-4 text-lg font-semibold text-bp-navy">
              Enable reliable electrical infrastructure through accountable
              supply and execution.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-bp-sky">
              Vision
            </h2>
            <p className="mt-4 text-lg font-semibold text-bp-navy">
              Be a preferred electrical partner for corporate and utility-facing
              programmes across India.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-bp-sky">
              Approach
            </h2>
            <p className="mt-4 text-bp-muted leading-relaxed">
              Clear scope, traceable material lines, and communication suited to
              procurement and project teams — without overpromising
              certifications or metrics we have not verified.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
