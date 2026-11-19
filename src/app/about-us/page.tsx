import { createPageMetadata } from "@/lib/metadata";
import { BrandedPhoto } from "@/components/media/BrandedPhoto";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { images } from "@/lib/images";
import { contractLabourLicence } from "@/lib/portfolio";
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
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Company profile" title="Who we are" />
            <div className="mt-6 space-y-5 text-bp-muted leading-relaxed">
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
              <p>
                Registered office:{" "}
                <span className="font-medium text-bp-charcoal">{site.address}</span>
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <BrandedPhoto
              src={images.substation}
              alt="Power distribution and electrical infrastructure"
              overlay="contrast"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-bp-border bg-bp-surface py-20">
        <Container className="mb-14">
          <SectionHeading
            eyebrow="Compliance"
            title="Licensed contracting establishment"
            description="Maharashtra government licence for deployment of contract labour on awarded electrical works."
          />
          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="border border-bp-border bg-white px-6 py-5">
              <dt className="text-xs font-semibold uppercase tracking-widest text-bp-muted">
                Principal employer (registered)
              </dt>
              <dd className="mt-2 font-semibold text-bp-navy">
                {contractLabourLicence.principalEmployer}
              </dd>
            </div>
            <div className="border border-bp-border bg-white px-6 py-5">
              <dt className="text-xs font-semibold uppercase tracking-widest text-bp-muted">
                Licence validity
              </dt>
              <dd className="mt-2 font-semibold text-bp-navy">
                Valid until {contractLabourLicence.validUntil}
              </dd>
              <dd className="mt-1 text-sm text-bp-muted">
                {contractLabourLicence.act} — {contractLabourLicence.licensingOffice}
              </dd>
            </div>
          </dl>
        </Container>
        <Container className="mb-12">
          <BrandedPhoto
            src={images.switchgear}
            alt="Electrical switchgear and equipment"
            overlay="editorial"
            aspectClassName="aspect-[21/9] max-h-[340px]"
            sizes="100vw"
          />
        </Container>
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
        <Container className="mb-16">
          <BrandedPhoto
            src={images.teamWork}
            alt="Electrical works and industrial execution"
            overlay="soft"
            aspectClassName="aspect-[21/9] max-h-[380px]"
            sizes="100vw"
          />
        </Container>
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

      <CtaBand image={images.powerPlant} imageAlt="Power generation and distribution infrastructure" />
    </>
  );
}
