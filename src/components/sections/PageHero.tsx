import Image from "next/image";
import { type ReactNode } from "react";
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
  return (
    <section
      className={`relative overflow-hidden ${
        dark ? "bg-bp-navy text-white" : "bg-bp-surface"
      }`}
    >
      <Container
        className={`grid gap-10 py-16 lg:py-24 ${
          align === "split" && image ? "lg:grid-cols-12 lg:items-center" : ""
        }`}
      >
        <div
          className={`${
            align === "split" && image ? "lg:col-span-5" : "max-w-3xl"
          } ${align === "split" ? "" : ""}`}
        >
          {eyebrow && (
            <p
              className={`mb-4 text-xs font-semibold uppercase tracking-[0.2em] ${
                dark ? "text-bp-sky" : "text-bp-sky"
              }`}
            >
              {eyebrow}
            </p>
          )}
          <h1
            className={`text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-[3.25rem] ${
              dark ? "text-white" : "text-bp-navy"
            }`}
          >
            {title}
          </h1>
          <p
            className={`mt-6 max-w-xl text-lg leading-relaxed ${
              dark ? "text-white/75" : "text-bp-muted"
            }`}
          >
            {description}
          </p>
          {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
        </div>

        {image && align === "split" && (
          <div className="relative lg:col-span-7 lg:col-start-7">
            <div className="relative aspect-[4/3] overflow-hidden bg-bp-navy-deep lg:-mr-12 lg:ml-8">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-bp-navy/40 via-transparent to-transparent" />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
