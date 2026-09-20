import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  BriefcaseBusiness,
  FileCheck,
  Globe,
  ClipboardCheck,
  MessageCircle,
  Plane,
  BookOpen,
  UserCheck,
  CheckCircle2,
  ShieldCheck,
  Headset,
  Search,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Study Visa Consultancy",
    description:
      "Explore international education opportunities and understand the student visa application process for your preferred destination.",
    points: [
      "Study visa process guidance",
      "Application documentation support",
      "Education pathway guidance",
    ],
    link: "/study-visa",
    linkText: "Explore Study Visa",
  },
  {
    icon: BriefcaseBusiness,
    title: "Work Visa Consultancy",
    description:
      "Understand employment-related visa pathways and the requirements that may apply to your career plans abroad.",
    points: [
      "Work visa route information",
      "Eligibility requirement guidance",
      "Application document assistance",
    ],
    link: "/work-visa",
    linkText: "Explore Work Visa",
  },
  {
    icon: Globe,
    title: "Country Selection Guidance",
    description:
      "Explore destinations based on your education, career goals, and individual circumstances.",
    points: [
      "Destination information",
      "Study and work pathway overview",
      "Personalized consultation",
    ],
    link: "/countries",
    linkText: "Explore Countries",
  },
  {
    icon: ClipboardCheck,
    title: "Visa Application Assistance",
    description:
      "Get organized support to understand application steps, prepare forms, and keep track of required documents.",
    points: [
      "Application process overview",
      "Form preparation guidance",
      "Document checklist assistance",
    ],
    link: "/contact",
    linkText: "Enquire Now",
  },
  {
    icon: FileCheck,
    title: "Document Preparation",
    description:
      "Understand the supporting documents relevant to your visa category and organize them for your application.",
    points: [
      "Document checklist guidance",
      "Supporting document organization",
      "Application readiness review",
    ],
    link: "/contact",
    linkText: "Get Document Guidance",
  },
  {
    icon: MessageCircle,
    title: "Visa Consultation",
    description:
      "Discuss your goals and questions with our consultancy team to better understand the process and possible next steps.",
    points: [
      "One-to-one consultation",
      "Visa process information",
      "Guidance based on your goals",
    ],
    link: "/contact",
    linkText: "Book Consultation",
  },
];

const processSteps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Initial Consultation",
    description:
      "Discuss your goals, preferred country, background, and visa-related questions.",
  },
  {
    number: "02",
    icon: Search,
    title: "Explore Your Options",
    description:
      "Review relevant visa pathways and understand the requirements that may apply.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Prepare Your Documents",
    description:
      "Organize the relevant documents and work through the application checklist.",
  },
  {
    number: "04",
    icon: Plane,
    title: "Application Guidance",
    description:
      "Receive guidance on the next steps for submitting and tracking your application.",
  },
];

const faqs = [
  {
    question: "What services does your visa consultancy provide?",
    answer:
      "We provide study and work visa consultancy, country selection guidance, application assistance, document preparation guidance, and consultation services.",
  },
  {
    question: "Can you help me choose a country?",
    answer:
      "Our team can discuss your education, career goals, and preferences to help you explore destination options and relevant visa pathways.",
  },
  {
    question: "Do you guarantee visa approval?",
    answer:
      "No. Visa approval is determined by the relevant immigration authorities. We can provide consultancy and application preparation support, but outcomes are not guaranteed.",
  },
  {
    question: "What documents do I need for a visa application?",
    answer:
      "Documents depend on the destination, visa category, and your individual circumstances. We can help you understand the relevant checklist for your application.",
  },
  {
    question: "How can I get started?",
    answer:
      "You can contact us through our enquiry form to discuss your goals and arrange a consultation with our team.",
  },
  {
    question: "Can I enquire about more than one country?",
    answer:
      "Yes. You can discuss multiple destinations with our team and explore the visa pathways relevant to your plans.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#071B3A] px-5 py-20 text-white md:py-28">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-blue-100">
            <Globe size={16} />
            Professional Visa Consultancy
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Our Services,
            <span className="text-red-400"> Your Global Journey</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-100 md:text-lg">
            From exploring international study and work opportunities to
            preparing your visa application, discover consultancy services
            designed to guide you through each step.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-red-500 px-6 py-3.5 font-semibold text-white transition hover:bg-red-600"
            >
              Book a Consultation
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/countries"
              className="rounded-lg border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-red-500">
              What We Offer
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#071B3A] md:text-4xl">
              Consultancy Services
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Explore our services and find the guidance that matches your
              international education or career goals.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-[#164A8A] transition group-hover:bg-[#071B3A] group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#071B3A]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-green-600"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-7">
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-red-500 transition hover:text-red-700"
                    >
                      {service.linkText}
                      <ArrowRight
                        size={17}
                        className="transition group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-red-500">
              Our Process
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#071B3A] md:text-4xl">
              How We Guide You
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              A clear, step-by-step approach to help you understand your visa
              application journey.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#071B3A] text-white">
                    <Icon size={27} />
                  </div>

                  <span className="text-sm font-bold tracking-widest text-red-500">
                    STEP {step.number}
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-[#071B3A]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-red-500">
              Why Choose Us
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#071B3A] md:text-4xl">
              Guidance That Keeps You Informed
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Planning an international journey can involve many questions. Our
              consultancy focuses on helping you understand the process, prepare
              documents, and navigate the steps relevant to your application.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#071B3A] px-6 py-3.5 font-semibold text-white transition hover:bg-blue-900"
            >
              About Our Consultancy
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                icon: UserCheck,
                title: "Personalized Guidance",
                text: "Discuss your goals and questions based on your circumstances.",
              },
              {
                icon: ShieldCheck,
                title: "Clear Information",
                text: "Understand the process and requirements relevant to your pathway.",
              },
              {
                icon: BookOpen,
                title: "Organized Support",
                text: "Get help understanding application steps and document checklists.",
              },
              {
                icon: Headset,
                title: "Consultation Support",
                text: "Get in touch with our team when you need guidance.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-gray-100 bg-white p-6"
                >
                  <Icon size={27} className="text-red-500" />

                  <h3 className="mt-4 font-bold text-[#071B3A]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-red-500">
              FAQs
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#071B3A] md:text-4xl">
              Questions About Our Services
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-gray-200 bg-white p-5"
              >
                <summary className="cursor-pointer list-none pr-4 font-semibold text-[#071B3A]">
                  {faq.question}
                  <span className="float-right text-red-500 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#071B3A] px-5 py-16 text-white md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-red-400">
            Let's Get Started
          </span>

          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Your Global Journey Begins with a Conversation
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            Tell us about your plans, explore your options, and discuss the next
            steps with our consultancy team.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red-500 px-7 py-3.5 font-semibold text-white transition hover:bg-red-600"
          >
            Enquire Now
            <ArrowRight size={18} />
          </Link>

          <p className="mt-5 text-xs leading-6 text-blue-200">
            Visa requirements and decisions are determined by the relevant
            authorities. Consultancy services do not guarantee visa approval.
          </p>
        </div>
      </section>
    </main>
  );
}
