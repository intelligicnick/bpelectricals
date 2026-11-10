"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

type Props = {
  subject?: string;
  className?: string;
};

export function EnquiryForm({ subject = "General enquiry", className = "" }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      company: String(data.get("company") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      subject: String(data.get("subject") ?? subject),
      message: String(data.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Unable to send enquiry");
      }
      setStatus("success");
      setMessage("Thank you. Your enquiry has been received. We will respond shortly.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  }

  const inputClass =
    "w-full rounded-sm border border-bp-border bg-white px-4 py-3 text-sm text-bp-charcoal placeholder:text-bp-muted/70 focus:border-bp-sky focus:outline-none focus:ring-2 focus:ring-bp-sky/20";

  return (
    <form
      onSubmit={onSubmit}
      className={`space-y-5 ${className}`}
      aria-busy={status === "loading"}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="enquiry-name" required>
          <input
            id="enquiry-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
          />
        </Field>
        <Field label="Company" htmlFor="enquiry-company">
          <input
            id="enquiry-company"
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClass}
          />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" htmlFor="enquiry-email" required>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </Field>
        <Field label="Phone" htmlFor="enquiry-phone">
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
          />
        </Field>
      </div>
      <Field label="Subject" htmlFor="enquiry-subject">
        <input
          id="enquiry-subject"
          name="subject"
          type="text"
          defaultValue={subject}
          className={inputClass}
        />
      </Field>
      <Field label="Message" htmlFor="enquiry-message" required>
        <textarea
          id="enquiry-message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-y min-h-[120px]`}
        />
      </Field>

      {message && (
        <p
          role="status"
          className={`text-sm ${
            status === "success" ? "text-emerald-700" : "text-red-700"
          }`}
        >
          {message}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        className="w-full sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Submit enquiry"}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  required,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-bp-navy">
        {label}
        {required && <span className="text-bp-sky"> *</span>}
      </label>
      {children}
    </div>
  );
}
