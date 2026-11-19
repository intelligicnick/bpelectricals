import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "inverse";

const variants: Record<Variant, string> = {
  primary:
    "bg-bp-sky text-white hover:bg-[var(--bp-sky-hover)] shadow-md shadow-bp-sky/20 active:scale-[0.98]",
  secondary:
    "bg-bp-navy text-white hover:bg-bp-navy-deep shadow-md shadow-bp-navy/15 active:scale-[0.98]",
  ghost: "text-bp-navy hover:bg-bp-sky-light",
  outline:
    "border-2 border-bp-border bg-white text-bp-navy hover:border-bp-sky hover:text-bp-sky",
  inverse:
    "border-2 border-white/35 bg-white/10 text-white backdrop-blur-sm hover:border-white/60 hover:bg-white/15",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bp-sky disabled:pointer-events-none disabled:opacity-60";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}