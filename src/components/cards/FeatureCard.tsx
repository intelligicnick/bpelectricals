import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function FeatureCard({
  title,
  description,
  href,
  index = 0,
}: {
  title: string;
  description: string;
  href: string;
  index?: number;
}) {
  return (
    <Reveal delay={index * 80}>
      <Link
        href={href}
        className="card-surface group block p-8 transition-all duration-300 hover:border-bp-sky hover:shadow-lg hover:shadow-bp-sky/10"
      >
        <h3 className="text-xl font-bold text-bp-navy group-hover:text-bp-sky">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-bp-muted">{description}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-bp-sky">
          Learn more
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </Link>
    </Reveal>
  );
}
