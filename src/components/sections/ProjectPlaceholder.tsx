import { BrandedPhoto } from "@/components/media/BrandedPhoto";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectPlaceholder({
  title,
  note,
  index = 0,
  image,
  imageAlt = "Representative electrical infrastructure photography",
  verified = false,
}: {
  title: string;
  note: string;
  index?: number;
  image: string;
  imageAlt?: string;
  /** When true, content is from the company profile — not a placeholder. */
  verified?: boolean;
}) {
  return (
    <Reveal delay={index * 100}>
      <article className="card-surface group overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-bp-navy/8">
        <div className="relative">
          <BrandedPhoto
            src={image}
            alt={imageAlt}
            overlay="soft"
            native={verified}
            aspectClassName="aspect-[16/10]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {!verified && (
            <span className="absolute left-4 top-4 z-10 rounded-md bg-bp-sky-light/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-bp-navy shadow-sm">
              Placeholder — awaiting verified project data
            </span>
          )}
        </div>
        <div className="p-8 lg:p-9">
          <h3 className="text-xl font-bold text-bp-navy">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-bp-muted">{note}</p>
        </div>
      </article>
    </Reveal>
  );
}