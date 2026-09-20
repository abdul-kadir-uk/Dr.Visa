import Link from "next/link";
import {
  GraduationCap,
  FileCheck,
  Globe2,
  BookOpen,
  ClipboardCheck,
  Plane,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const countries = [
  {
    name: "Canada",
    description:
      "Explore colleges, universities, and study pathways in Canada.",
    image: "/images/canada.jpg",
  },
  {
    name: "Australia",
    description:
      "Discover education opportunities across Australia's institutions.",
    image: "/images/australia.jpg",
  },
  {
    name: "United Kingdom",
    description:
      "Explore undergraduate and postgraduate study options in the UK.",
    image: "/images/uk.jpg",
  },
  {
    name: "United States",
    description: "Learn about universities and academic programs in the USA.",
    image: "/images/usa.jpg",
  },
  {
    name: "Germany",
    description: "Explore higher education options at German institutions.",
    image: "/images/germany.jpg",
  },
  {
    name: "New Zealand",
    description: "Discover study opportunities in New Zealand.",
    image: "/images/new-zealand.jpg",
  },
];

const services = [
  {
    icon: GraduationCap,
    title: "Course & Institution Guidance",
    description:
      "Explore courses and institutions that align with your academic background and goals.",
  },
  {
    icon: ClipboardCheck,
    title: "Application Assistance",
    description:
      "Get help understanding admission requirements and preparing your application.",
  },
  {
    icon: FileCheck,
    title: "Documentation Support",
    description:
      "Organize required documents and review application materials before submission.",
  },
  {
    icon: BookOpen,
    title: "Visa Application Guidance",
    description:
      "Understand the relevant visa application steps and documentation requirements.",
  },
  {
    icon: Globe2,
    title: "Country-Specific Guidance",
    description:
      "Learn about destination-specific processes, subject to current official requirements.",
  },
  {
    icon: Plane,
    title: "Pre-Departure Guidance",
    description:
      "Prepare for your journey with practical information about your destination.",
  },
];

const process = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "Discuss your academic background, preferred destination, and future plans.",
  },
  {
    number: "02",
    title: "Course & Institution",
    description:
      "Explore suitable courses and institutions based on your profile and preferences.",
  },
  {
    number: "03",
    title: "Application Preparation",
    description:
      "Prepare admission and visa documents according to the relevant requirements.",
  },
  {
    number: "04",
    title: "Visa Process & Preparation",
    description:
      "Receive guidance through the application process and pre-departure preparation.",
  },
];

const faqs = [
  {
    question: "What is a study visa?",
    answer:
      "A study visa or study permit is an authorization that may allow an eligible international student to study in a destination country. The exact name and requirements vary by country.",
  },
  {
    question: "Which country should I choose for studying abroad?",
    answer:
      "Your choice depends on your academic goals, preferred course, budget, admission options, and the destination's current visa requirements. A consultation can help you compare available options.",
  },
  {
    question: "What documents are generally required?",
    answer:
      "Requirements vary by country and applicant. Common documents may include a passport, admission documents, academic records, financial evidence, and other country-specific forms or supporting documents.",
  },
  {
    question: "How long does the study visa process take?",
    answer:
      "Processing times vary by country, visa category, application volume, and individual circumstances. Check the relevant official immigration website for current processing information.",
  },
  {
    question: "Does admission guarantee a study visa?",
    answer:
      "No. Admission to an educational institution does not guarantee visa approval. The immigration authority makes the visa decision based on its applicable requirements.",
  },
];

export default function StudyVisaPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-20 text-white sm:py-28">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-700/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-red-400">
              Study Visa Guidance
            </span>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              Turn Your Study Abroad Goals Into a Plan
            </h1>

            <p className="mt-6 leading-8 text-slate-300">
              Explore international education opportunities with guidance on
              course selection, admission applications, documentation, and study
              visa processes.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#enquiry"
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3.5 font-bold text-white transition hover:bg-red-700"
              >
                Get Study Visa Guidance
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
              alt="Student preparing for international education"
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
              Study Abroad
            </span>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Your International Education Journey Starts Here
            </h2>
          </div>

          <div>
            <p className="leading-7 text-slate-600">
              Studying abroad can open doors to new academic and cultural
              experiences. But choosing a destination, understanding admission
              requirements, and preparing visa documents can take careful
              planning.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Our consultancy helps you understand the process, organize your
              next steps, and explore options based on your individual goals.
              Visa decisions remain with the relevant immigration authorities.
            </p>
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-red-600">
              Study Destinations
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Explore Where You Could Study
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Discover popular destinations for international students.
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
                  alt={`${country.name} study destination`}
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
              Our Study Visa Services
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Guidance and assistance through different stages of your study
              abroad planning.
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
              Your Study Visa Journey
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
              Study Visa Frequently Asked Questions
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
            Visa requirements and processing times can change. Always confirm
            current requirements with the official immigration authority for
            your destination.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-16 text-center text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to Plan Your Study Abroad Journey?
          </h2>

          <p className="mt-4 leading-7 text-blue-100">
            Connect with our team to discuss your academic goals and explore
            your next steps.
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
