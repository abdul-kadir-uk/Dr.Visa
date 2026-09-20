import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  BriefcaseBusiness,
  Globe,
} from "lucide-react";

const countries = [
  {
    name: "Canada",
    slug: "canada",
    image: "/images/canada.jpg",
    description:
      "Explore study and work visa pathways in Canada, with guidance throughout your application journey.",
    highlights: ["Study Visa", "Work Visa", "Visa Guidance"],
  },
  {
    name: "Australia",
    slug: "australia",
    image: "/images/australia.jpg",
    description:
      "Discover education and employment-related visa options for Australia with personalized support.",
    highlights: ["Study Visa", "Work Visa", "Visa Guidance"],
  },
  {
    name: "United Kingdom",
    slug: "uk",
    image: "/images/uk.jpg",
    description:
      "Get assistance understanding UK study and work visa routes and the documents involved.",
    highlights: ["Study Visa", "Work Visa", "Visa Guidance"],
  },
  {
    name: "United States",
    slug: "usa",
    image: "/images/usa.jpg",
    description:
      "Explore US study and employment-related visa options with guidance tailored to your goals.",
    highlights: ["Study Visa", "Work Visa", "Visa Guidance"],
  },
  {
    name: "Germany",
    slug: "germany",
    image: "/images/germany.jpg",
    description:
      "Learn about study and work opportunities in Germany and get help preparing your application.",
    highlights: ["Study Visa", "Work Visa", "Visa Guidance"],
  },
  {
    name: "New Zealand",
    slug: "new-zealand",
    image: "/images/new-zealand.jpg",
    description:
      "Explore study and work visa pathways in New Zealand with step-by-step application support.",
    highlights: ["Study Visa", "Work Visa", "Visa Guidance"],
  },
];

export default function CountriesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#071B3A] px-5 py-20 text-white md:py-28">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-blue-100">
            <Globe size={16} />
            Explore Your Global Opportunities
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Explore Your Future
            <span className="text-red-400"> Around the World</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-100 md:text-lg">
            Discover popular destinations for international education and career
            opportunities. Our team can help you understand visa pathways and
            prepare your application.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-red-500 px-6 py-3.5 font-semibold text-white transition hover:bg-red-600"
            >
              Get Free Consultation
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/study-visa"
              className="rounded-lg border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Explore Study Visa
            </Link>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="bg-gray-50 px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-red-500">
              Our Destinations
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#071B3A] md:text-4xl">
              Choose Your Destination
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Explore destination-specific guidance for your study or career
              plans abroad.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((country) => (
              <article
                key={country.slug}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Country Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={country.image}
                    alt={`${country.name} destination`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#071B3A]/80 via-transparent to-transparent" />

                  <h3 className="absolute bottom-5 left-5 text-2xl font-bold text-white">
                    {country.name}
                  </h3>
                </div>

                {/* Country Information */}
                <div className="p-6">
                  <p className="min-h-21 text-sm leading-7 text-gray-600">
                    {country.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {country.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-[#164A8A]"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Study and Work Visa Buttons */}
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <Link
                      href="/study-visa"
                      className="inline-flex items-center justify-center gap-1 rounded-lg bg-[#071B3A] px-3 py-3 text-sm font-semibold text-white transition hover:bg-blue-900"
                    >
                      <GraduationCap size={16} />
                      Study Visa
                    </Link>

                    <Link
                      href="/work-visa"
                      className="inline-flex items-center justify-center gap-1 rounded-lg border border-[#071B3A] px-3 py-3 text-sm font-semibold text-[#071B3A] transition hover:bg-blue-50"
                    >
                      <BriefcaseBusiness size={16} />
                      Work Visa
                    </Link>
                  </div>

                  {/* NEW: Individual Country Detail Page Link */}
                  <Link
                    href={`/countries/${country.slug}`}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition hover:border-red-500 hover:bg-red-500 hover:text-white"
                  >
                    Explore {country.name}
                    <ArrowRight size={16} />
                  </Link>

                  {/* Enquiry Link */}
                  <Link
                    href="/contact"
                    className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-red-600"
                  >
                    Enquire About {country.name}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white px-5 py-16 md:py-20">
        <div className="mx-auto max-w-5xl rounded-2xl bg-[#071B3A] px-6 py-12 text-center text-white md:px-12">
          <h2 className="text-3xl font-bold md:text-4xl">
            Not Sure Which Country Is Right for You?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            Discuss your education, career goals, and visa-related questions
            with our consultancy team to explore available pathways.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red-500 px-7 py-3.5 font-semibold text-white transition hover:bg-red-600"
          >
            Talk to Our Team
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
