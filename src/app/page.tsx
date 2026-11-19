import Link from "next/link";
import { BrandedPhoto } from "@/components/media/BrandedPhoto";
import { HeroBackground } from "@/components/media/HeroBackground";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ProjectPlaceholder } from "@/components/sections/ProjectPlaceholder";
import { images } from "@/lib/images";
import { portfolioProjects } from "@/lib/portfolio";
import { site, utilityPartners } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[85vh] overflow-hidden bg-bp-navy-deep text-white">
        <HeroBackground
          src={images.transmissionLines}
          alt="High-voltage transmission lines and electrical grid"
          priority
        />
        <Container className="relative z-10 flex min-h-[85vh] flex-col justify-center py-20">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bp-sky">
              {site.legalName}
            </p>
            <h1 className="mt-5 text-[2.75rem] font-bold leading-[1.05] sm:text-6xl lg:text-[4.25rem]">
              Electrical products &amp; works for{" "}
              <span className="text-bp-sky">corporate India</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              BP Electrical partners with organisations that depend on reliable
              electrical supply — from distribution equipment and industrial
              components to B2B procurement and complete contracting scope.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact">Request a Quote</Button>
              <Button href="/products" variant="inverse">
                Explore Products
              </Button>
            </div>
          </div>
          <div className="mt-16 grid gap-6 border-t border-white/15 pt-10 sm:grid-cols-3 lg:max-w-4xl">
            {[
              "Electrical product supplier",
              "Corporate procurement partner",
              "Infrastructure contracting",
            ].map((item) => (
              <p key={item} className="text-sm font-medium text-white/85">
                {item}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container className="grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Introduction"
              title="A supply partner for demanding electrical programmes"
              description="We support utilities, contractors and corporate facilities with material supply and execution capability — aligned to the standards expected by large power and infrastructure organisations."
            />
          </Reveal>
          <Reveal delay={120} className="space-y-8 lg:col-span-6 lg:col-start-7">
            <BrandedPhoto
              src={images.substation}
              alt="Electrical substation and power distribution"
              overlay="editorial"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="space-y-5 text-bp-muted leading-relaxed">
              <p>
                {site.name} operates as the customer-facing brand of{" "}
                {site.legalName}, focused on electrical distribution products,
                industrial electrical lines, and project-based contracting.
              </p>
              <p>
                Our working relationships include engagement with organisations
                such as {utilityPartners.join(" and ")} and other corporate
                accounts — as a supplier and execution support partner, not as
                an endorsement of third-party brands on this website.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-bp-border bg-bp-surface py-16">
        <Container className="mb-12">
          <BrandedPhoto
            src={images.controlRoom}
            alt="Electrical monitoring and corporate operations"
            overlay="soft"
            aspectClassName="aspect-[21/9] max-h-[320px]"
            sizes="100vw"
          />
        </Container>
        <Container>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-bp-muted">
            Ecosystem associations
          </p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-lg font-semibold text-bp-navy">
            {utilityPartners.map((name) => (
              <li key={name}>{name}</li>
            ))}
            <li className="text-bp-muted font-normal">Corporate &amp; industrial clients</li>
          </ul>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <div className="grid items-end gap-10 lg:grid-cols-2 lg:gap-12">
            <SectionHeading
              eyebrow="Products"
              title="Categories built for utility and industry"
              description="Source distribution gear, protection, cabling and industrial electrical lines through a single B2B conversation."
            />
            <BrandedPhoto
              src={images.distributionBoard}
              alt="Electrical distribution panels and switchgear"
              overlay="editorial"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              index={0}
              title="All products"
              description="Browse our full catalogue structure and send a consolidated material enquiry."
              href="/products"
            />
            <FeatureCard
              index={1}
              title="Distribution equipment"
              description="Switchgear, panels, cables, protection and related distribution products."
              href="/electrical-distribution-equipment"
            />
            <FeatureCard
              index={2}
              title="Industrial electrical"
              description="Components, accessories, control equipment and industrial supply categories."
              href="/industrial-electrical-products"
            />
          </div>
        </Container>
      </section>

      <section className="section-pad bg-bp-navy text-white">
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              light
              eyebrow="Services"
              title="Contracting and procurement under one roof"
              description="From complete electrical works to coordinated bulk supply for active projects."
            />
            <ul className="mt-10 space-y-4">
              <li>
                <Link href="/electrical-contracting" className="text-lg font-semibold text-bp-sky hover:underline">
                  Electrical contracting →
                </Link>
                <p className="mt-1 text-sm text-white/70">
                  Installations, project execution and infrastructure support.
                </p>
              </li>
              <li>
                <Link href="/electrical-supply-procurement" className="text-lg font-semibold text-bp-sky hover:underline">
                  Supply &amp; procurement →
                </Link>
                <p className="mt-1 text-sm text-white/70">
                  B2B sourcing, vendor coordination and project-based material supply.
                </p>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <BrandedPhoto
              src={images.teamWork}
              alt="Industrial electrical installation environment"
              overlay="editorial"
              aspectClassName="aspect-[5/4]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
        </Container>
      </section>

      <section className="section-pad">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Industries"
              title="Sectors we support"
              description="Power utilities, commercial infrastructure, industrial plants, construction, real estate and institutional facilities."
            />
            <div className="mt-10">
              <Button href="/industries" variant="primary">
                View Industries
              </Button>
            </div>
          </div>
          <BrandedPhoto
            src={images.construction}
            alt="Infrastructure and construction sectors"
            overlay="soft"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Container>
      </section>

      <section className="section-pad bg-bp-surface">
        <Container>
          <SectionHeading
            eyebrow="Projects"
            title="Work experience"
            description="Recent electrical contracting and execution engagements across utility, commercial, hospitality and infrastructure programmes."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {portfolioProjects.slice(0, 4).map((p, i) => (
              <ProjectPlaceholder
                key={p.title}
                index={i}
                title={p.title}
                note={p.note}
                image={p.image}
                imageAlt={p.imageAlt}
                verified
              />
            ))}
          </div>
          <div className="mt-10">
            <Button href="/projects" variant="outline">
              View All Projects
            </Button>
          </div>
        </Container>
      </section>

      <CtaBand
        image={images.cables}
        imageAlt="Electrical cabling and infrastructure"
      />
    </>
  );
}
