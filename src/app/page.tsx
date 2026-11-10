import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ProjectPlaceholder } from "@/components/sections/ProjectPlaceholder";
import { images } from "@/lib/images";
import { site, utilityPartners } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[85vh] overflow-hidden bg-bp-navy-deep text-white">
        <Image
          src={images.heroGrid}
          alt="Electrical transmission infrastructure at dusk"
          fill
          className="object-cover opacity-45"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bp-navy-deep via-bp-navy-deep/90 to-bp-navy/40" />
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
              <Button href="/contact">Business enquiry</Button>
              <Button href="/products" variant="outline" className="border-white/25 !text-white hover:!bg-white/10">
                Product catalogue
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

      <section className="py-20 lg:py-28">
        <Container className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Introduction"
              title="A supply partner for demanding electrical programmes"
              description="We support utilities, contractors and corporate facilities with material supply and execution capability — aligned to the standards expected by large power and infrastructure organisations."
            />
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
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

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Products"
            title="Categories built for utility and industry"
            description="Source distribution gear, protection, cabling and industrial electrical lines through a single B2B conversation."
          />
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

      <section className="bg-bp-navy py-20 text-white lg:py-28">
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
            <div className="relative aspect-[5/4] overflow-hidden">
              <Image
                src={images.teamWork}
                alt="Industrial electrical installation environment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Industries"
            title="Sectors we support"
            description="Power utilities, commercial infrastructure, industrial plants, construction, real estate and institutional facilities."
          />
          <div className="mt-10">
            <Button href="/industries" variant="secondary">
              Industries we serve
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-bp-surface py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Projects"
            title="Work experience"
            description="Verified project case studies and photography will be published here. Until then, placeholders indicate where portfolio content will appear."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <ProjectPlaceholder
              index={0}
              title="Utility &amp; distribution programme"
              note="Awaiting client-approved project name, scope summary and photography."
            />
            <ProjectPlaceholder
              index={1}
              title="Industrial electrical installation"
              note="Awaiting client-approved project name, scope summary and photography."
            />
          </div>
          <div className="mt-10">
            <Button href="/projects" variant="outline">
              Projects &amp; work experience
            </Button>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
