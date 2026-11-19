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
        className="object-cover saturate-[0.9] contrast-[1.05] brightness-[0.88]"
      />
      <div className="absolute inset-0 bg-bp-navy-deep/50 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-br from-bp-navy-deep/92 via-bp-navy/75 to-bp-sky/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-bp-navy-deep via-bp-navy-deep/85 to-transparent" />
    </div>
  );
}