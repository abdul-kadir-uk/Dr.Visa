import Link from "next/link";
import {
  GraduationCap,
  BriefcaseBusiness,
  FileCheck,
  School,
  Files,
  Plane,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Study Visa",
    description:
      "Turn your dream of studying abroad into reality with personalized guidance for international education.",
    icon: GraduationCap,
    href: "/study-visa",
    number: "01",
  },
  {
    title: "Work Visa",
    description:
      "Explore international career opportunities and get guidance through your work visa application process.",
    icon: BriefcaseBusiness,
    href: "/work-visa",
    number: "02",
  },
  {
    title: "Visa Assistance",
    description:
      "Get step-by-step support with visa applications, eligibility requirements, and submission preparation.",
    icon: FileCheck,
    href: "/services",
    number: "03",
  },
  {
    title: "University Admission",
    description:
      "Find suitable universities and courses based on your academic background and future goals.",
    icon: School,
    href: "/services",
    number: "04",
  },
  {
    title: "Documentation",
    description:
      "Get help organizing and preparing the documents required for your visa application.",
    icon: Files,
    href: "/services",
    number: "05",
  },
  {
    title: "Travel Assistance",
    description:
      "Prepare for your international journey with practical pre-departure and travel guidance.",
    icon: Plane,
    href: "/services",
    number: "06",
  },
];

export default function Services() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-350">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0756A4]">
            WHAT WE DO
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-[#102B46] sm:text-4xl lg:text-5xl">
            Our Professional <span className="text-[#0756A4]">Services</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            From your first consultation to your international journey, we're
            here to guide you through every step of the process.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl sm:p-8"
              >
                {/* Background Number */}
                <span className="absolute right-5 top-4 text-5xl font-extrabold text-gray-50 transition group-hover:text-blue-50">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-50 text-[#0756A4] transition duration-300 group-hover:bg-[#0756A4] group-hover:text-white">
                  <Icon size={30} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-[#102B46]">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-21 text-sm leading-7 text-gray-600">
                  {service.description}
                </p>

                {/* Learn More */}
                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0756A4] transition group-hover:gap-3"
                >
                  Learn More
                  <ArrowUpRight size={17} />
                </Link>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#E3262E] transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-[#E3262E] px-7 py-4 font-semibold text-white transition hover:bg-red-700"
          >
            Get a Free Consultation
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
