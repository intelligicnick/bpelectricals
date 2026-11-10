import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-bp-sky text-white hover:bg-[#3d93d9] shadow-sm shadow-bp-sky/25",
  secondary: "bg-bp-navy text-white hover:bg-bp-navy-deep",
  ghost: "text-bp-navy hover:bg-bp-sky-light/80",
  outline:
    "border border-bp-border text-bp-navy hover:border-bp-sky hover:text-bp-sky bg-white",
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
    "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bp-sky";

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
