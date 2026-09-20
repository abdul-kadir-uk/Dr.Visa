import {
  ShieldCheck,
  Users,
  Globe2,
  Headset,
  FileCheck,
  Award,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Visa Guidance",
    description:
      "Get clear guidance and support throughout your visa application journey.",
  },
  {
    icon: Users,
    title: "Experienced Consultants",
    description:
      "Our consultants help you understand your options and prepare your application.",
  },
  {
    icon: Globe2,
    title: "Multiple Destinations",
    description:
      "Explore study and work opportunities across popular international destinations.",
  },
  {
    icon: FileCheck,
    title: "Documentation Support",
    description:
      "Get assistance with organizing and reviewing your visa application documents.",
  },
  {
    icon: Headset,
    title: "Personalized Assistance",
    description:
      "Receive guidance based on your goals, profile, and preferred destination.",
  },
  {
    icon: Award,
    title: "Client-Focused Service",
    description:
      "We focus on transparent communication and a supportive client experience.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-red-600">
              Why Choose Us
            </span>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Your Journey Abroad Starts With the Right Guidance
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Planning to study or work overseas? We help you understand your
              options, prepare your documents, and navigate the application
              process with confidence.
            </p>

            <div className="mt-8 rounded-2xl bg-slate-900 p-6 text-white">
              <h3 className="text-xl font-bold">Let&apos;s Plan Your Future</h3>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                Speak with our team to discuss your overseas study or work
                goals.
              </p>

              <a
                href="/contact"
                className="mt-5 inline-flex rounded-lg bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700"
              >
                Talk to a Consultant
              </a>
            </div>
          </div>

          {/* Right Feature Grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-100 bg-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-800">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
