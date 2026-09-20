import Link from "next/link";
import {
  ArrowRight,
  Quote,
  GraduationCap,
  BriefcaseBusiness,
  Globe,
  Heart,
  Star,
} from "lucide-react";

const stories = [
  {
    name: "Aarav Sharma",
    country: "Canada",
    visaType: "Study Visa",
    image: "/images/story-1.jpg",
    title: "A New Chapter in Canada",
    story:
      "The consultancy team helped me understand my study application process and organize my documents. Their guidance made each step easier to follow.",
    icon: GraduationCap,
  },
  {
    name: "Priya Patel",
    country: "Australia",
    visaType: "Study Visa",
    image: "/images/story-2.jpg",
    title: "Pursuing My Education in Australia",
    story:
      "I received support with understanding the application steps and preparing my documents. The process was easier to navigate with a clear checklist.",
    icon: GraduationCap,
  },
  {
    name: "Rahul Verma",
    country: "United Kingdom",
    visaType: "Work Visa",
    image: "/images/story-3.jpg",
    title: "Taking the Next Step in My Career",
    story:
      "The team guided me through the documentation process and helped me understand the steps involved in my work visa application.",
    icon: BriefcaseBusiness,
  },
  {
    name: "Simran Kaur",
    country: "Germany",
    visaType: "Study Visa",
    image: "/images/story-4.jpg",
    title: "Moving Forward with My Study Goals",
    story:
      "The guidance I received helped me understand the application requirements and prepare for the next steps toward studying abroad.",
    icon: GraduationCap,
  },
  {
    name: "Aditya Singh",
    country: "New Zealand",
    visaType: "Work Visa",
    image: "/images/story-5.jpg",
    title: "Exploring New Career Opportunities",
    story:
      "I appreciated having support to understand the process, organize my documents, and work through each application stage.",
    icon: BriefcaseBusiness,
  },
  {
    name: "Neha Gupta",
    country: "United States",
    visaType: "Study Visa",
    image: "/images/story-6.jpg",
    title: "Working Toward My Dream University",
    story:
      "The consultancy team helped me understand the steps involved in my student visa application and prepare the required paperwork.",
    icon: GraduationCap,
  },
];

export default function SuccessStoriesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#071B3A] px-5 py-20 text-white md:py-28">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-blue-100">
            <Heart size={16} />
            Every Journey Matters
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Stories of Dreams,
            <span className="text-red-400"> Growth & New Beginnings</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-100 md:text-lg">
            Every international journey begins with a goal. Explore client
            experiences and learn how professional guidance can help applicants
            navigate their visa journey.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-lg bg-red-500 px-6 py-3.5 font-semibold text-white transition hover:bg-red-600"
          >
            Start Your Journey
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white px-5 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-red-500">
            Our Client Experiences
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#071B3A] md:text-4xl">
            Every Dream Has a Story
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            From exploring international education to pursuing career
            opportunities abroad, every applicant has a unique journey. Our aim
            is to provide clear guidance, organized support, and a better
            understanding of the application process.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="bg-gray-50 px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-red-500">
              Client Stories
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#071B3A] md:text-4xl">
              Journeys That Inspire Us
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Discover experiences across study and work visa application
              journeys.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => {
              const Icon = story.icon;

              return (
                <article
                  key={story.name}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Client Image */}
                  <div className="relative h-60 overflow-hidden bg-blue-100">
                    <img
                      src={story.image}
                      alt={`${story.name} story`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-[#071B3A]/70 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-5 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#071B3A]">
                      <Globe size={14} />
                      {story.country}
                    </div>
                  </div>

                  {/* Story Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm font-semibold text-red-500">
                      <Icon size={17} />
                      {story.visaType}
                    </div>

                    <h3 className="mt-3 text-xl font-bold text-[#071B3A]">
                      {story.title}
                    </h3>

                    <div className="mt-4 flex gap-1 text-amber-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={15} fill="currentColor" />
                      ))}
                    </div>

                    <div className="relative mt-4">
                      <Quote size={25} className="mb-2 text-blue-100" />

                      <p className="text-sm leading-7 text-gray-600">
                        {story.story}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-gray-100 pt-4">
                      <p className="font-bold text-[#071B3A]">{story.name}</p>

                      <p className="mt-1 text-xs text-gray-500">
                        {story.country} · {story.visaType}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process CTA */}
      <section className="bg-white px-5 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-2xl bg-[#071B3A] px-6 py-12 text-white md:grid-cols-2 md:px-12">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-red-400">
              Your Story Starts Here
            </span>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Ready to Take Your Next Step?
            </h2>

            <p className="mt-5 leading-7 text-blue-100">
              Whether your goal is international education or exploring career
              opportunities abroad, our team can help you understand the
              application process.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red-500 px-6 py-3.5 font-semibold text-white transition hover:bg-red-600"
            >
              Book a Consultation
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Personalized Guidance",
              "Study Visa Support",
              "Work Visa Guidance",
              "Document Preparation",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <GraduationCap size={20} className="shrink-0 text-red-400" />
                <span className="text-sm font-medium text-blue-50">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-gray-50 px-5 py-6">
        <p className="mx-auto max-w-5xl text-center text-xs leading-6 text-gray-500">
          Client experiences may vary. Visa eligibility, processing times, and
          outcomes depend on individual circumstances and the relevant
          immigration authorities. No visa outcome is guaranteed.
        </p>
      </section>
    </main>
  );
}
