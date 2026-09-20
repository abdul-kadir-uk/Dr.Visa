import Link from "next/link";
import {
  BriefcaseBusiness,
  FileCheck,
  Globe2,
  ClipboardCheck,
  UserCheck,
  Plane,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const countries = [
  {
    name: "Canada",
    description:
      "Explore Canadian work permit pathways and employment-related requirements.",
    image: "/images/canada.jpg",
  },
  {
    name: "Australia",
    description:
      "Learn about Australian work visa options and employer-sponsored pathways.",
    image: "/images/australia.jpg",
  },
  {
    name: "United Kingdom",
    description:
      "Explore UK work visa routes and understand sponsorship requirements.",
    image: "/images/uk.jpg",
  },
  {
    name: "United States",
    description:
      "Learn about employment-based visa categories and their requirements.",
    image: "/images/usa.jpg",
  },
  {
    name: "Germany",
    description:
      "Explore German employment and skilled-worker immigration pathways.",
    image: "/images/germany.jpg",
  },
  {
    name: "New Zealand",
    description:
      "Discover New Zealand work visa options and relevant eligibility criteria.",
    image: "/images/new-zealand.jpg",
  },
];

const services = [
  {
    icon: BriefcaseBusiness,
    title: "Work Visa Pathway Guidance",
    description:
      "Understand potential work visa routes based on your background and intended destination.",
  },
  {
    icon: ClipboardCheck,
    title: "Profile Assessment",
    description:
      "Review your education, experience, and goals to help identify options worth exploring.",
  },
  {
    icon: FileCheck,
    title: "Documentation Assistance",
    description:
      "Get help organizing supporting documents relevant to your application.",
  },
  {
    icon: Globe2,
    title: "Country-Specific Information",
    description:
      "Understand the general requirements and processes for your preferred destination.",
  },
  {
    icon: UserCheck,
    title: "Application Guidance",
    description:
      "Receive support in understanding forms, supporting evidence, and application steps.",
  },
  {
    icon: Plane,
    title: "Pre-Departure Guidance",
    description:
      "Prepare for your move with practical information about your destination.",
  },
];

const process = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "Discuss your work experience, qualifications, career goals, and preferred country.",
  },
  {
    number: "02",
    title: "Explore Visa Pathways",
    description:
      "Review potentially relevant visa categories and their published requirements.",
  },
  {
    number: "03",
    title: "Document Preparation",
    description:
      "Organize the documents and evidence required for the relevant application route.",
  },
  {
    number: "04",
    title: "Application Guidance",
    description:
      "Understand the next steps for submitting your application and preparing for departure.",
  },
];

const faqs = [
  {
    question: "What is a work visa?",
    answer:
      "A work visa or work permit is an authorization that may allow a foreign national to work in a particular country under specified conditions. Rules vary by destination and visa category.",
  },
  {
    question: "Do I need a job offer to apply for a work visa?",
    answer:
      "It depends on the country and visa category. Some routes require a qualifying job offer or employer sponsorship, while others may have different eligibility criteria.",
  },
  {
    question: "What documents are generally required?",
    answer:
      "Depending on the visa route, documents may include a valid passport, employment offer, qualifications, work experience evidence, financial documents, and other supporting materials.",
  },
  {
    question: "How long does work visa processing take?",
    answer:
      "Processing times differ by country, visa category, application volume, and individual circumstances. Check the destination's official immigration website for current information.",
  },
  {
    question: "Does getting a job offer guarantee a work visa?",
    answer:
      "No. A job offer does not automatically guarantee visa approval. Applicants must meet the applicable immigration requirements, and the relevant authority makes the final decision.",
  },
  {
    question: "Can your consultancy guarantee a work visa?",
    answer:
      "No responsible consultancy can guarantee a visa decision. Approval depends on the applicant's circumstances and the requirements and decisions of the relevant immigration authority.",
  },
];

export default function WorkVisaPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-20 text-white sm:py-28">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-700/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-red-400">
              Work Visa Guidance
            </span>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              Explore Global Career Opportunities
            </h1>

            <p className="mt-6 leading-8 text-slate-300">
              Planning to work abroad? Explore international employment pathways
              with guidance on visa categories, eligibility requirements, and
              application documentation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#enquiry"
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3.5 font-bold text-white transition hover:bg-red-700"
              >
                Get Work Visa Guidance
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg border border-white/30 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-red-400" />
                Personalized Guidance
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-red-400" />
                Application Support
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/hero-student.jpg"
              alt="Professional planning an international career"
              className="h-80 w-full object-cover sm:h-110"
            />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-red-600">
              Work Abroad
            </span>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Take Your Career Beyond Borders
            </h2>
          </div>

          <div>
            <p className="leading-7 text-slate-600">
              Working abroad can offer opportunities to develop your skills,
              gain international experience, and explore new professional
              environments. The right pathway depends on your qualifications,
              experience, and destination.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Our consultancy helps you understand potential visa pathways and
              prepare for the application process. Eligibility, employer
              sponsorship, and work authorization requirements vary by country
              and visa category.
            </p>
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-red-600">
              Work Destinations
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Explore Work Visa Destinations
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Learn about work-related immigration pathways in popular
              international destinations.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((country) => (
              <div
                key={country.name}
                className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={country.image}
                  alt={`${country.name} work visa destination`}
                  className="h-52 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    {country.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {country.description}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-900 hover:text-red-600"
                  >
                    Enquire Now
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-red-600">
              How We Can Help
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Our Work Visa Services
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Practical guidance to help you understand your options and prepare
              for the next steps.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-slate-100 p-7 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-red-600">
              Our Process
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Your Work Visa Journey
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-100 bg-white p-6"
              >
                <span className="text-3xl font-extrabold text-red-600">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-red-600">
              FAQs
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Work Visa Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 p-5"
              >
                <summary className="cursor-pointer list-none font-bold text-slate-900">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-xl text-red-600 transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <p className="mt-6 text-xs leading-5 text-slate-500">
            Work visa requirements can change. Confirm current rules with the
            official immigration authority for your destination.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-16 text-center text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to Explore Working Abroad?
          </h2>

          <p className="mt-4 leading-7 text-blue-100">
            Tell us about your career goals and preferred destination to begin
            exploring your options.
          </p>

          <Link
            href="/#enquiry"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red-600 px-7 py-3.5 font-bold text-white transition hover:bg-red-700"
          >
            Start Your Enquiry
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
