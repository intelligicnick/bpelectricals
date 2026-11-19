import Image from "next/image";

export type BrandedOverlay = "hero" | "editorial" | "soft" | "contrast";

const overlayStyles: Record<BrandedOverlay, string> = {
  hero: "from-bp-navy-deep/85 via-bp-navy/55 to-bp-sky/25",
  editorial: "from-bp-navy-deep/70 via-bp-navy/35 to-bp-sky/20",
  soft: "from-bp-navy/45 via-bp-navy/15 to-transparent",
  contrast: "from-bp-navy-deep/65 via-transparent to-bp-sky/25",
};

type Props = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  overlay?: BrandedOverlay;
  fill?: boolean;
  aspectClassName?: string;
  objectPosition?: string;
  /** Show project / document photos without brand treatment */
  native?: boolean;
};

export function BrandedPhoto({
  src,
  alt,
  className = "",
  imageClassName = "",
  sizes = "100vw",
  priority = false,
  overlay = "editorial",
  fill = true,
  aspectClassName = "aspect-[4/3]",
  objectPosition = "center",
  native = false,
}: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-sm bg-bp-navy-deep ${aspectClassName} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        priority={priority}
        style={{ objectPosition }}
        className={`object-cover ${
          native
            ? ""
            : "saturate-[0.95] contrast-[1.04] brightness-[0.96]"
        } ${imageClassName}`}
      />
      {!native && (
        <>
          <div
            className="pointer-events-none absolute inset-0 bg-bp-navy/20 mix-blend-multiply"
            aria-hidden
          />
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${overlayStyles[overlay]}`}
            aria-hidden
          />
        </>
      )}
    </div>
  );
}