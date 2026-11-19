import Image from "next/image";

export function HeroBackground({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover object-[center_35%] saturate-[0.93] contrast-[1.06] brightness-[0.9]"
      />
      <div className="absolute inset-0 bg-bp-navy-deep/45 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-br from-bp-navy-deep/88 via-bp-navy/68 to-bp-sky/22" />
      <div className="absolute inset-0 bg-gradient-to-r from-bp-navy-deep via-bp-navy-deep/78 to-transparent" />
    </div>
  );
}