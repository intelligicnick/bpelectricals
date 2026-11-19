"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, type NavEntry } from "@/lib/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors ${
        active
          ? "text-bp-sky"
          : "text-bp-charcoal hover:text-bp-sky"
      }`}
    >
      {label}
    </Link>
  );
}

function DesktopDropdown({
  item,
  pathname,
}: {
  item: Extract<NavEntry, { type: "dropdown" }>;
  pathname: string;
}) {
  const isActive = item.items.some((i) => pathname.startsWith(i.href) && i.href !== "/")
    || (item.label === "Products" && pathname.startsWith("/products"))
    || (item.label === "Services" && (pathname.includes("contracting") || pathname.includes("procurement")));

  return (
    <div className="group relative">
      <button
        type="button"
        className={`flex items-center gap-1 text-sm font-medium transition-colors ${
          isActive ? "text-bp-sky" : "text-bp-charcoal group-hover:text-bp-sky"
        }`}
        aria-haspopup="true"
      >
        {item.label}
        <svg
          className="h-3.5 w-3.5 opacity-60"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <div className="invisible absolute left-0 top-full z-50 min-w-[260px] pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <ul className="border border-bp-border bg-white py-2 shadow-xl shadow-bp-navy/10">
          {item.items.map((sub) => (
            <li key={sub.href}>
              <Link
                href={sub.href}
                className="block px-5 py-2.5 text-sm text-bp-charcoal hover:bg-bp-sky-light hover:text-bp-navy"
              >
                {sub.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-bp-border/80 bg-white/95 shadow-sm shadow-bp-navy/5 backdrop-blur-md">
      <Container className="flex min-h-[5rem] items-center justify-between gap-4 py-2 sm:min-h-[5.5rem] lg:min-h-[6.25rem] lg:gap-6">
        <Link href="/" className="relative flex shrink-0 items-center">
          <Logo variant="header" priority />
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {mainNav.map((entry) =>
            entry.type === "link" ? (
              <NavLink
                key={entry.href}
                href={entry.href}
                label={entry.label}
                active={
                  entry.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(entry.href)
                }
              />
            ) : (
              <DesktopDropdown key={entry.label} item={entry} pathname={pathname} />
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact">Request a Quote</Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-bp-border lg:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 bg-bp-navy transition-transform ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 bg-bp-navy transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 bg-bp-navy transition-transform ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </Container>

      {mobileOpen && (
        <div className="border-t border-bp-border bg-white lg:hidden">
          <Container className="space-y-1 py-6">
            {mainNav.map((entry) =>
              entry.type === "link" ? (
                <Link
                  key={entry.href}
                  href={entry.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-base font-medium text-bp-navy"
                >
                  {entry.label}
                </Link>
              ) : (
                <div key={entry.label} className="pt-2">
                  <p className="pb-1 text-xs font-semibold uppercase tracking-widest text-bp-muted">
                    {entry.label}
                  </p>
                  {entry.items.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 pl-3 text-sm text-bp-charcoal"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              ),
            )}
            <div className="pt-4">
              <Button href="/contact" className="w-full">
                Request a Quote
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
