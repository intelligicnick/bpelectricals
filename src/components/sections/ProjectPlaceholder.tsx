import { Reveal } from "@/components/ui/Reveal";

export function ProjectPlaceholder({
  title,
  note,
  index = 0,
}: {
  title: string;
  note: string;
  index?: number;
}) {
  return (
    <Reveal delay={index * 100}>
      <article className="border border-dashed border-bp-border bg-bp-surface p-8 lg:p-10">
        <span className="inline-block bg-bp-sky-light px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-bp-navy">
          Placeholder — awaiting verified project data
        </span>
        <h3 className="mt-4 text-xl font-bold text-bp-navy">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-bp-muted">{note}</p>
        <div
          className="mt-8 flex aspect-video items-center justify-center bg-bp-border/40 text-xs text-bp-muted"
          role="img"
          aria-label="Project photography placeholder"
        >
          Project photograph to be added
        </div>
      </article>
    </Reveal>
  );
}
