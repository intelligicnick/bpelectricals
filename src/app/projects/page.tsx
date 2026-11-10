import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ProjectPlaceholder } from "@/components/sections/ProjectPlaceholder";
import { CtaBand } from "@/components/sections/CtaBand";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Projects & Work Experience",
  description: `Project portfolio and work experience from ${site.name}. Verified case studies published when approved.`,
  path: "/projects",
});

const placeholders = [
  {
    title: "Utility distribution upgrade",
    note: "Placeholder for a utility-linked distribution project. Replace with verified client name, scope, location and photography.",
  },
  {
    title: "Commercial infrastructure electrical works",
    note: "Placeholder for a commercial campus or tower electrical scope. Awaiting approved public case study content.",
  },
  {
    title: "Industrial plant electrical package",
    note: "Placeholder for industrial MCC / power distribution engagement. Photography must be client-approved before publication.",
  },
  {
    title: "Corporate procurement programme",
    note: "Placeholder for long-term material supply relationship. Statistics and logos require written client consent.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Projects & work experience"
        description="We publish only verified projects with approved descriptions and photography. The cards below are clearly marked placeholders until your team supplies real portfolio content."
        image={images.teamWork}
        imageAlt="Electrical works on an industrial site"
        align="left"
      />

      <section className="py-20">
        <Container>
          <SectionHeading
            title="Portfolio status"
            description="No fabricated project names, client logos or completion statistics appear on this website. When you share approved assets, we replace placeholders one-to-one."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {placeholders.map((p, i) => (
              <ProjectPlaceholder
                key={p.title}
                index={i}
                title={p.title}
                note={p.note}
              />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Share approved portfolio material"
        description="Contact us with photography, scope summaries and publication approvals. We will update this page accordingly."
      />
    </>
  );
}
