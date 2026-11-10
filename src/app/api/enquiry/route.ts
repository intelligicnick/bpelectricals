import { NextResponse } from "next/server";

type EnquiryBody = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: EnquiryBody;

  try {
    body = (await request.json()) as EnquiryBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email and message are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  // Extend with email/CRM integration when credentials are available.
  console.info("[enquiry]", {
    name,
    company: body.company?.trim(),
    email,
    phone: body.phone?.trim(),
    subject: body.subject?.trim(),
    messageLength: message.length,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
