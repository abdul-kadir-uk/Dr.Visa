import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Globe2,
  Plane,
  CheckCircle2,
  Users,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F3F8FE]">
      {/* Background Decoration */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-red-100/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-350 items-center gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        {/* LEFT CONTENT */}
        <div className="z-10">
          {/* Trust Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-[#0756A4] shadow-sm">
            <Globe2 size={17} />
            Your Trusted Global Visa Partner
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#102B46] sm:text-5xl lg:text-6xl">
            Your Global
            <br />
            Journey Starts
            <br />
            <span className="text-[#0756A4]">With Us.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
            Turn your international dreams into reality. Get expert guidance for
            study visas, work permits, and global opportunities with
            personalized support at every step.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#E3262E] px-7 py-4 font-semibold text-white shadow-lg shadow-red-200 transition hover:-translate-y-0.5 hover:bg-red-700"
            >
              Start Your Journey
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[#0756A4]/20 bg-white px-7 py-4 font-semibold text-[#102B46] transition hover:border-[#0756A4] hover:bg-blue-50"
            >
              <GraduationCap size={19} />
              Explore Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-5 border-t border-blue-100 pt-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-[#0756A4]">
                <Users size={20} />
              </div>
              <div>
                <p className="font-bold text-[#102B46]">Expert Guidance</p>
                <p className="text-xs text-gray-500">Personalized Support</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-[#E3262E]">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="font-bold text-[#102B46]">End-to-End</p>
                <p className="text-xs text-gray-500">Application Assistance</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mx-auto w-full max-w-140">
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-4xl rounded-br-[7rem] border-8 border-white shadow-2xl shadow-blue-900/10">
            <img
              src="/images/hero-student.jpg"
              alt="Student planning an international education journey"
              className="h-100 w-full object-cover sm:h-125 lg:h-145"
            />
          </div>

          {/* Floating Card - Visa Assistance */}
          <div className="absolute -left-3 top-10 flex items-center gap-3 rounded-xl bg-white p-4 shadow-xl sm:-left-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-[#0756A4]">
              <GraduationCap size={26} />
            </div>
            <div>
              <p className="text-sm font-bold text-[#102B46]">
                Study & Work Visas
              </p>
              <p className="text-xs text-gray-500">
                Explore Global Opportunities
              </p>
            </div>
          </div>

          {/* Floating Card - Global Reach */}
          <div className="absolute -bottom-5 right-2 flex items-center gap-3 rounded-xl bg-white p-4 shadow-xl sm:-right-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-[#E3262E]">
              <Plane size={24} />
            </div>
            <div>
              <p className="text-sm font-bold text-[#102B46]">
                Your Future Abroad
              </p>
              <p className="text-xs text-gray-500">Starts With a Plan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
