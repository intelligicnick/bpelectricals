import Link from "next/link";
import { primaryPages } from "@/lib/navigation";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = 2026;

  return (
    <footer className="mt-auto border-t border-white/10 bg-bp-navy-deep text-white">
      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <div className="inline-block rounded-sm border border-white/10 bg-white px-5 py-4 shadow-lg shadow-black/20">
            <Logo variant="footer" />
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/85">
            {site.tagline}
          </p>
          <p className="mt-4 text-xs text-white/50">{site.legalName}</p>
        </div>

        <div className="lg:col-span-3">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-bp-sky">
            Explore
          </h2>
          <ul className="space-y-2">
            {primaryPages.map((page) => (
              <li key={page.path}>
                <Link
                  href={page.path}
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-bp-sky">
            Contact
          </h2>
          <ContactDetails variant="dark" />
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>Electrical products · Procurement · Contracting</p>
        </Container>
      </div>
    </footer>
  );
}
