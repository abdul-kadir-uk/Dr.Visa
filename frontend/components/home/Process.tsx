import Link from "next/link";

import {
  MessageCircle,
  Files,
  FileCheck,
  Plane,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "Share your study or work goals with our team. We'll discuss your preferred country and possible pathways.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Application & Documentation",
    description:
      "Get guidance on preparing your application and organizing the documents required for your chosen pathway.",
    icon: Files,
  },
  {
    number: "03",
    title: "Visa Processing",
    description:
      "Receive assistance with application preparation, submission guidance, and understanding the next steps.",
    icon: FileCheck,
  },
  {
    number: "04",
    title: "Begin Your Journey",
    description:
      "Prepare for departure with practical pre-travel guidance as you plan your next chapter abroad.",
    icon: Plane,
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-350">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0756A4]">
            <CheckCircle2 size={16} />
            HOW IT WORKS
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#102B46] sm:text-4xl lg:text-5xl">
            Your Journey,
            <span className="text-[#0756A4]"> Made Simple</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Planning to study or work abroad doesn't have to feel overwhelming.
            Our team guides you through each step of your application journey.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting Line - Desktop */}
          <div className="absolute left-[12%] right-[12%] top-10 hidden border-t-2 border-dashed border-blue-200 lg:block" />

          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-white bg-[#0756A4] text-white shadow-lg shadow-blue-100 transition duration-300 group-hover:-translate-y-2 group-hover:bg-[#E3262E]">
                  <Icon size={32} strokeWidth={1.8} />
                </div>

                {/* Step Number */}
                <span className="mt-5 rounded-full bg-red-50 px-4 py-1 text-xs font-bold tracking-widest text-[#E3262E]">
                  STEP {step.number}
                </span>

                {/* Content */}
                <h3 className="mt-4 text-xl font-bold text-[#102B46]">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-xs text-sm leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-2xl bg-[#102B46] px-6 py-8 text-center sm:px-10 sm:py-10">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to Take the First Step?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
            Connect with our team to discuss your international education or
            career goals.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#E3262E] px-7 py-3.5 font-semibold text-white transition hover:bg-red-700"
          >
            Book a Consultation
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
