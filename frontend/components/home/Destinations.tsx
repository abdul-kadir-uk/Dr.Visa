import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

const destinations = [
  {
    name: "Canada",
    image: "/images/canada.jpg",
    description: "Discover education and career opportunities in Canada.",
    options: ["Study Visa", "Work Visa"],
    href: "/countries/canada",
  },
  {
    name: "Australia",
    image: "/images/australia.jpg",
    description: "Explore world-class education and professional pathways.",
    options: ["Study Visa", "Work Visa"],
    href: "/countries/australia",
  },
  {
    name: "United Kingdom",
    image: "/images/uk.jpg",
    description: "Explore UK universities and eligible work opportunities.",
    options: ["Study Visa", "Work Visa"],
    href: "/countries/uk",
  },
  {
    name: "United States",
    image: "/images/usa.jpg",
    description: "Explore academic programs and international career paths.",
    options: ["Study Visa", "Work Visa"],
    href: "/countries/usa",
  },
  {
    name: "Germany",
    image: "/images/germany.jpg",
    description: "Discover study programs and career opportunities in Germany.",
    options: ["Study Visa", "Work Visa"],
    href: "/countries/germany",
  },
  {
    name: "New Zealand",
    image: "/images/new-zealand.jpg",
    description: "Plan your international education and career journey.",
    options: ["Study Visa", "Work Visa"],
    href: "/countries/new-zealand",
  },
];

export default function Destinations() {
  return (
    <section className="bg-[#F3F8FE] px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-350">
        {/* Section Heading */}
        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0756A4]">
              YOUR NEXT DESTINATION
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#102B46] sm:text-4xl lg:text-5xl">
              Explore Popular{" "}
              <span className="text-[#0756A4]">Destinations</span>
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
              Find your path to global opportunities with guidance tailored to
              your preferred destination.
            </p>
          </div>

          <Link
            href="/countries"
            className="inline-flex w-fit items-center gap-2 font-semibold text-[#0756A4] hover:text-[#E3262E]"
          >
            View All Countries
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="group relative h-90 overflow-hidden rounded-2xl shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:h-100"
            >
              {/* Destination Image */}
              <img
                src={destination.image}
                alt={`${destination.name} destination`}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#07182B] via-[#07182B]/40 to-transparent" />

              {/* Destination Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-blue-200">
                  <MapPin size={16} />
                  Study & Work Abroad
                </div>

                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  {destination.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-200">
                  {destination.description}
                </p>

                {/* Visa Options */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {destination.options.map((option) => (
                    <span
                      key={option}
                      className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                    >
                      {option}
                    </span>
                  ))}
                </div>

                {/* Explore Link */}
                <Link
                  href={destination.href}
                  className="mt-5 inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-bold text-[#102B46] transition hover:bg-[#E3262E] hover:text-white"
                >
                  Explore Country
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
