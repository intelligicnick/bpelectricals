import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ProjectPlaceholder } from "@/components/sections/ProjectPlaceholder";
import { CtaBand } from "@/components/sections/CtaBand";
import { portfolioProjects } from "@/lib/portfolio";
import { site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Projects & Work Experience",
  description: `Electrical contracting and execution projects delivered by ${site.name} across Mumbai and western Maharashtra.`,
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Projects & work experience"
        description="Selected engagements from our company profile — utility DSS works, commercial campuses, hospitality, customer service centres, and quality support programmes."
        image="/images/portfolio/page1-img1.png"
        imageAlt="BP Electrical project portfolio"
        align="left"
      />

      <section className="py-20">
        <Container>
          <SectionHeading
            title="Published work"
            description="Photography and project names are taken from the approved company profile. Detailed scope summaries are available on enquiry."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {portfolioProjects.map((p, i) => (
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
        </Container>
      </section>

      <CtaBand
        title="Discuss similar scope"
        description="Share tender documents, drawings or a scope note and we will respond with capability and availability."
        image="/images/portfolio/page3-img1.png"
        imageAlt="Electrical infrastructure works"
      />
    </>
  );
}