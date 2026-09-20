// app/contact/page.tsx

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import EnquiryForm from "@/components/home/EnquiryForm";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    detail: "+91 XXXXX XXXXX",
    description: "Speak with our consultancy team",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "info@yourcompany.com",
    description: "Send us your questions",
    href: "mailto:info@yourcompany.com",
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    detail: "Your Office Address",
    description: "Your City, India",
    href: "#office-location",
  },
  {
    icon: Clock,
    title: "Office Hours",
    detail: "Monday – Saturday",
    description: "10:00 AM – 6:00 PM",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-slate-900 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-bold uppercase tracking-widest text-red-400">
            Contact Us
          </span>

          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Let&apos;s Talk About Your Overseas Future
          </h1>

          <p className="mt-5 max-w-2xl leading-8 text-slate-300">
            Have questions about study visas, work visas, or overseas
            opportunities? Get in touch with our team.
          </p>

          <Link
            href="#contact-form"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3.5 font-bold text-white transition hover:bg-red-700"
          >
            Send an Enquiry
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              const content = (
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
                    <Icon size={24} />
                  </div>

                  <h2 className="mt-5 text-lg font-bold text-slate-900">
                    {item.title}
                  </h2>

                  <p className="mt-2 wrap-break-word font-semibold text-blue-900">
                    {item.detail}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              );

              return item.href ? (
                <a key={item.title} href={item.href}>
                  {content}
                </a>
              ) : (
                <div key={item.title}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <div id="contact-form">
        <EnquiryForm />
      </div>

      {/* Office Location */}
      <section className="bg-white py-16" id="office-location">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-red-600">
                Find Us
              </span>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Visit Our Office
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                We welcome you to connect with our team for a consultation about
                your overseas study or work plans.
              </p>

              <div className="mt-6 flex items-start gap-3">
                <MapPin className="mt-1 shrink-0 text-red-600" size={22} />

                <div>
                  <h3 className="font-bold text-slate-900">Global Pathways</h3>

                  <p className="mt-1 leading-7 text-slate-600">
                    Your Office Address,
                    <br />
                    Your City, India
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-blue-900 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
              >
                Get Directions
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="flex min-h-80 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 p-8 text-center">
              <div>
                <MapPin size={40} className="mx-auto text-red-600" />

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  Office Location Map
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
                  Add your office&apos;s Google Maps embed here once the exact
                  address is confirmed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-blue-900 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Prefer to Chat With Us?
            </h2>

            <p className="mt-2 text-blue-100">
              Add your official WhatsApp number to let clients contact you
              directly.
            </p>
          </div>

          {/* Replace the # with your official WhatsApp link */}
          <a
            href="#"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-green-600 px-6 py-3.5 font-bold text-white transition hover:bg-green-700"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
