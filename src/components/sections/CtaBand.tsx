import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBand({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-bp-navy py-16 text-white lg:py-20">
      <Container>
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
              <Button href="/contact" variant="primary">
                Contact Us
              </Button>
              <Button
                href="/products"
                variant="outline"
                className="border-white/30 !text-white hover:!bg-white/10"
              >
                View products
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
