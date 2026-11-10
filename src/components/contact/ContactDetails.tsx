import Link from "next/link";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function ContactDetails({ variant = "light" }: { variant?: "light" | "dark" }) {
  const muted =
    variant === "dark" ? "text-white/70" : "text-bp-muted";
  const text = variant === "dark" ? "text-white/90" : "text-bp-charcoal";

  const whatsappHref = site.whatsapp
    ? `https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
        `Hello ${site.name}, I would like to discuss a business enquiry.`,
      )}`
    : null;

  return (
    <div className="space-y-4">
      {site.phone && (
        <p className={text}>
          <span className={`block text-xs uppercase tracking-widest ${muted}`}>
            Phone
          </span>
          <a href={`tel:${site.phone}`} className="font-medium hover:text-bp-sky">
            {site.phone}
          </a>
        </p>
      )}
      {site.email && (
        <p className={text}>
          <span className={`block text-xs uppercase tracking-widest ${muted}`}>
            Email
          </span>
          <a href={`mailto:${site.email}`} className="font-medium hover:text-bp-sky">
            {site.email}
          </a>
        </p>
      )}
      {site.address && (
        <p className={text}>
          <span className={`block text-xs uppercase tracking-widest ${muted}`}>
            Address
          </span>
          <span className="font-medium leading-relaxed">{site.address}</span>
        </p>
      )}
      {!site.phone && !site.email && !site.address && (
        <p className={`text-sm leading-relaxed ${muted}`}>
          Direct phone, email and registered address will appear here once
          verified. Use the enquiry form or WhatsApp (when configured) for
          business contact in the meantime.
        </p>
      )}

      <div className="flex flex-wrap gap-3 pt-2">
        {whatsappHref ? (
          <Button
            href={whatsappHref}
            variant="primary"
            className="!bg-[#25D366] hover:!bg-[#1fb855]"
          >
            WhatsApp Enquiry
          </Button>
        ) : (
          <p className={`text-xs ${muted}`}>
            Configure{" "}
            <code className="rounded bg-white/10 px-1">NEXT_PUBLIC_WHATSAPP</code>{" "}
            for WhatsApp enquiry links.
          </p>
        )}
        <Link
          href="/contact"
          className={`text-sm font-semibold underline-offset-4 hover:underline ${
            variant === "dark" ? "text-bp-sky" : "text-bp-navy"
          }`}
        >
          Contact form
        </Link>
      </div>
    </div>
  );
}
