import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { HeroBackground } from "@/components/media/HeroBackground";

export function CtaBand({
  title,
  description,
  image,
  imageAlt = "Electrical infrastructure",
}: {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-bp-navy py-16 text-white lg:py-24">
      {image && <HeroBackground src={image} alt={imageAlt} />}
      <Container className="relative z-10">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold sm:text-4xl">
                {title ?? "Discuss your electrical requirements"}
              </h2>
              <p className="mt-4 text-white/75">
                {description ??
                  "Share project scope, material lists or contracting needs. Our team responds to verified business enquiries."}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact">Request a Quote</Button>
              <Button href="/products" variant="inverse">
                Explore Products
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
