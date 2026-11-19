import { type ReactNode } from "react";
import { BrandedPhoto } from "@/components/media/BrandedPhoto";
import { HeroBackground } from "@/components/media/HeroBackground";
import { Container } from "@/components/ui/Container";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
  dark?: boolean;
  align?: "left" | "split";
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  children,
  dark = false,
  align = "split",
}: Props) {
  const hasBackgroundImage = Boolean(image && align === "left");
  const onDark = dark || hasBackgroundImage;

  return (
    <section
      className={`relative overflow-hidden ${
        hasBackgroundImage
          ? "bg-bp-navy-deep text-white"
          : dark
            ? "bg-bp-navy text-white"
            : "bg-bp-surface"
      }`}
    >
      {hasBackgroundImage && image && (
        <HeroBackground src={image} alt={imageAlt} priority />
      )}

      <Container
        className={`relative z-10 grid gap-10 py-16 lg:py-24 ${
          align === "split" && image ? "lg:grid-cols-12 lg:items-center" : ""
        }`}
      >
        <div
          className={
            align === "split" && image ? "lg:col-span-5" : "max-w-3xl"
          }
        >
          {eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-bp-sky">
              {eyebrow}
            </p>
          )}
          <h1
            className={`text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-[3.25rem] ${
              onDark ? "hero-text-shadow text-white" : "text-bp-navy"
            }`}
          >
            {title}
          </h1>
          <p
            className={`mt-6 max-w-xl text-lg leading-relaxed ${
              onDark ? "text-white/85" : "text-bp-muted"
            }`}
          >
            {description}
          </p>
          {children && (
            <div className="mt-8 flex flex-wrap gap-4">{children}</div>
          )}
        </div>

        {image && align === "split" && (
          <div className="relative lg:col-span-7 lg:col-start-7">
            <BrandedPhoto
              src={image}
              alt={imageAlt}
              overlay="contrast"
              aspectClassName="aspect-[4/3]"
              className="lg:-mr-12 lg:ml-8"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
            />
          </div>
        )}
      </Container>
    </section>
  );
}
