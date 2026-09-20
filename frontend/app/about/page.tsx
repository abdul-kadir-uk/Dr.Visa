import Link from "next/link";
import {
  Target,
  Eye,
  HeartHandshake,
  Globe2,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "Client First",
    description:
      "We take time to understand each client's goals and provide guidance tailored to their individual needs.",
  },
  {
    icon: Globe2,
    title: "Global Opportunities",
    description:
      "We help clients explore international study and work opportunities across multiple destinations.",
  },
  {
    icon: GraduationCap,
    title: "Guidance & Support",
    description:
      "From understanding requirements to preparing documents, we aim to make the application journey clearer.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-20 text-white sm:py-28">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-700/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-bold uppercase tracking-widest text-red-400">
            About Us
          </span>

          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Helping You Take the Next Step Toward Your Global Future
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            We provide guidance for individuals planning to study, work, or
            explore opportunities abroad.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3.5 font-bold text-white transition hover:bg-red-700"
            >
              Talk to Our Team
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-blue-100">
              <img
                src="/images/about-team.jpg"
                alt="Visa consultancy team assisting clients"
                className="h-87.5 w-full object-cover sm:h-112.5"
              />
            </div>

            <div className="absolute -bottom-6 right-4 rounded-xl bg-red-600 p-5 text-white shadow-lg sm:right-8">
              <p className="text-lg font-extrabold">Your Future</p>
              <p className="text-sm font-medium">Our Shared Journey</p>
            </div>
          </div>

          <div className="pt-4 lg:pt-0">
            <span className="text-sm font-bold uppercase tracking-widest text-red-600">
              Who We Are
            </span>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Your Partner in Overseas Education & Visa Guidance
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              At Global Pathways, we understand that planning to move abroad is
              a major decision. Whether your goal is higher education,
              international work experience, or exploring a new destination,
              knowing where to begin can be challenging.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Our aim is to make the process easier to understand by providing
              personalized consultations, documentation assistance, and guidance
              throughout your application journey.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              We believe in clear communication, responsible guidance, and
              helping every client make informed decisions about their
              international plans.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-red-600">
              Our Purpose
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Our Mission & Vision
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Supporting informed decisions and helping people explore
              opportunities beyond borders.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
                <Target size={28} />
              </div>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                Our Mission
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                To provide accessible, personalized, and transparent overseas
                education and visa guidance, helping clients understand their
                options and prepare for their next steps.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-100 text-red-600">
                <Eye size={28} />
              </div>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                Our Vision
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                To become a trusted guidance partner for people pursuing
                international education and career opportunities through
                responsible service and lasting client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-red-600">
              What Matters to Us
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              The Values Behind Our Service
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-slate-100 p-7 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-800">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-16 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to Explore Your Opportunities Abroad?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Tell us about your plans and take the first step toward
            understanding your overseas options.
          </p>

          <Link
            href="/#enquiry"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red-600 px-7 py-3.5 font-bold text-white transition hover:bg-red-700"
          >
            Enquire Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
