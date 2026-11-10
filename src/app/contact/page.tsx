import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact Us",
  description: `Contact ${site.name} for business enquiries — products, procurement and electrical contracting.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Business enquiries"
        description="Reach our team for product quotations, procurement discussions, or contracting scope. Consumer retail enquiries are not serviced through this channel."
        align="left"
      />

      <section className="py-20">
        <Container className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              title="Direct contact"
              description="Verified phone, email, WhatsApp and registered address appear when configured in environment variables."
            />
            <div className="mt-8">
              <ContactDetails />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 rounded-sm border border-bp-border bg-bp-surface p-8 lg:p-10">
            <h2 className="text-xl font-bold text-bp-navy">Enquiry form</h2>
            <p className="mt-2 text-sm text-bp-muted">
              Required fields are marked. Submissions are logged server-side;
              connect email delivery in production.
            </p>
            <EnquiryForm className="mt-8" />
          </div>
        </Container>
      </section>
    </>
  );
}
