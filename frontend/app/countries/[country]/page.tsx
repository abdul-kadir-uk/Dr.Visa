import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  GraduationCap,
  BriefcaseBusiness,
  FileCheck,
  Globe,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

const countryData: Record<
  string,
  {
    name: string;
    image: string;
    intro: string;
    studyInfo: string;
    workInfo: string;
    studyPoints: string[];
    workPoints: string[];
    faqs: { question: string; answer: string }[];
  }
> = {
  canada: {
    name: "Canada",
    image: "/images/canada.jpg",
    intro:
      "Explore education and career-related visa pathways in Canada. Our consultancy can help you understand application requirements and prepare your documents.",
    studyInfo:
      "Planning to study in Canada? Understand the study permit process, admission requirements, and documentation involved before applying.",
    workInfo:
      "Explore Canadian work permit pathways and learn about employer-related requirements, eligibility conditions, and application documentation.",
    studyPoints: [
      "Study permit application guidance",
      "College and university admission guidance",
      "Document preparation support",
      "Application process guidance",
    ],
    workPoints: [
      "Work permit pathway guidance",
      "Employer-specific permit information",
      "Document checklist assistance",
      "Application preparation support",
    ],
    faqs: [
      {
        question: "Can international students apply to study in Canada?",
        answer:
          "International students may apply for a Canadian study permit if they meet the applicable requirements. Admission and permit approval are subject to the relevant authorities.",
      },
      {
        question: "Can I work in Canada on a work permit?",
        answer:
          "Work authorization depends on the permit type and its conditions. Review the current requirements for your specific pathway.",
      },
      {
        question: "Can your consultancy help with my application?",
        answer:
          "Our team can provide consultancy and document-preparation guidance. Immigration decisions are made by the relevant government authorities.",
      },
    ],
  },

  australia: {
    name: "Australia",
    image: "/images/australia.jpg",
    intro:
      "Discover study and work visa options for Australia and get guidance on understanding application requirements and preparing your documents.",
    studyInfo:
      "Learn about Australia's student visa process, education-provider requirements, and the documentation commonly involved in an application.",
    workInfo:
      "Explore Australian work visa pathways, including routes that may require employer sponsorship or other eligibility criteria.",
    studyPoints: [
      "Student visa application guidance",
      "Education-provider admission support",
      "Document preparation assistance",
      "Application process guidance",
    ],
    workPoints: [
      "Work visa pathway information",
      "Employer-sponsored visa guidance",
      "Eligibility and document checklist",
      "Application preparation support",
    ],
    faqs: [
      {
        question: "How do I apply for an Australian student visa?",
        answer:
          "The process generally involves meeting the applicable student visa requirements and submitting supporting documents. Requirements depend on your circumstances and the current rules.",
      },
      {
        question: "Does every Australian work visa require sponsorship?",
        answer:
          "Not every pathway has the same sponsorship requirements. The conditions depend on the specific visa category.",
      },
      {
        question: "Can you guide me through the process?",
        answer:
          "We can help you understand the process and prepare your application documents. Visa decisions remain with the relevant authorities.",
      },
    ],
  },

  uk: {
    name: "United Kingdom",
    image: "/images/uk.jpg",
    intro:
      "Explore UK study and work visa pathways with support understanding the application process, requirements, and documentation.",
    studyInfo:
      "Understand the UK Student visa process, including education-provider requirements and the supporting documents relevant to your application.",
    workInfo:
      "Explore UK work routes and learn about sponsorship, eligibility, and other requirements that may apply to your circumstances.",
    studyPoints: [
      "Student visa process guidance",
      "University application assistance",
      "Document checklist support",
      "Application preparation guidance",
    ],
    workPoints: [
      "Work visa route information",
      "Sponsorship requirement guidance",
      "Document preparation support",
      "Application process assistance",
    ],
    faqs: [
      {
        question: "What do I need to study in the UK?",
        answer:
          "Applicants generally need to meet the requirements of the relevant UK Student visa route, including applicable education-provider and documentation requirements.",
      },
      {
        question: "Do UK work visas require a sponsor?",
        answer:
          "Some UK work routes require sponsorship, while others may have different criteria. Requirements depend on the visa route.",
      },
      {
        question: "Can you help me prepare my documents?",
        answer:
          "Yes, our consultancy can guide you through document preparation and the application process.",
      },
    ],
  },

  usa: {
    name: "United States",
    image: "/images/usa.jpg",
    intro:
      "Explore US education and employment-related visa options with guidance on understanding visa categories and preparing your application.",
    studyInfo:
      "Learn about the US student visa process, including school-related documentation and the steps involved in applying for the appropriate visa.",
    workInfo:
      "Explore US employment-related visa categories and understand how eligibility and petition requirements can differ between routes.",
    studyPoints: [
      "Student visa process guidance",
      "School documentation assistance",
      "Application document checklist",
      "Interview preparation guidance",
    ],
    workPoints: [
      "Employment visa route information",
      "Petition-related process guidance",
      "Document preparation assistance",
      "Application process support",
    ],
    faqs: [
      {
        question: "What is a US student visa?",
        answer:
          "The United States has student visa categories such as F-1 and M-1. The appropriate category depends on the course and type of study.",
      },
      {
        question: "Are all US work visas the same?",
        answer:
          "No. US employment-related visa categories have different requirements, and some involve an employer petition.",
      },
      {
        question: "Can you help me prepare for my visa application?",
        answer:
          "We can provide guidance on application steps and document preparation. Visa issuance is determined by the relevant US authorities.",
      },
    ],
  },

  germany: {
    name: "Germany",
    image: "/images/germany.jpg",
    intro:
      "Discover education and career-related visa pathways in Germany and receive guidance on understanding requirements and preparing documents.",
    studyInfo:
      "Explore Germany's student visa process, including admission, financial documentation, and other requirements relevant to your circumstances.",
    workInfo:
      "Learn about German work-related residence and visa pathways, which may depend on qualifications, employment, and other criteria.",
    studyPoints: [
      "Student visa process guidance",
      "University admission support",
      "Document preparation assistance",
      "Application checklist guidance",
    ],
    workPoints: [
      "Work visa pathway information",
      "Qualification-related guidance",
      "Employment document checklist",
      "Application preparation support",
    ],
    faqs: [
      {
        question: "Can international students study in Germany?",
        answer:
          "International students may apply if they meet the applicable admission and visa requirements. Requirements vary by applicant and course.",
      },
      {
        question: "Can skilled professionals apply to work in Germany?",
        answer:
          "Germany has several work-related pathways. Eligibility may depend on qualifications, employment, and the relevant residence rules.",
      },
      {
        question: "Can you help with the German visa process?",
        answer:
          "Our consultancy can help you understand the process and organize your application documents.",
      },
    ],
  },

  "new-zealand": {
    name: "New Zealand",
    image: "/images/new-zealand.jpg",
    intro:
      "Explore study and work visa pathways in New Zealand with consultancy support to understand requirements and prepare your application.",
    studyInfo:
      "Understand New Zealand's student visa process, including education-provider requirements and supporting documentation.",
    workInfo:
      "Explore New Zealand work visa categories and learn about employment, employer accreditation, and other conditions that may apply.",
    studyPoints: [
      "Student visa application guidance",
      "Education-provider support",
      "Document preparation assistance",
      "Application process guidance",
    ],
    workPoints: [
      "Work visa pathway information",
      "Employer requirement guidance",
      "Document checklist assistance",
      "Application preparation support",
    ],
    faqs: [
      {
        question: "Can I apply for a student visa in New Zealand?",
        answer:
          "Applicants may apply if they meet the requirements of the relevant student visa category and provide the required supporting documents.",
      },
      {
        question: "Are there employer requirements for New Zealand work visas?",
        answer:
          "Some work visa categories have specific employer-related requirements. These depend on the visa route.",
      },
      {
        question: "Can you help me understand my options?",
        answer:
          "Our consultancy can help you explore relevant pathways and prepare documents for your application.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(countryData).map((country) => ({
    country,
  }));
}

export default async function CountryDetailPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const data = countryData[country];

  if (!data) {
    notFound();
  }

  return (
    <main>
      {/* Country Hero */}
      <section className="relative overflow-hidden bg-[#071B3A] text-white">
        <div className="absolute inset-0">
          <img
            src={data.image}
            alt={data.name}
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#071B3A] via-[#071B3A]/90 to-[#071B3A]/50" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-28">
          <div className="mb-5 flex items-center gap-2 text-sm text-blue-200">
            <Globe size={16} />
            <Link href="/countries" className="hover:text-white">
              Countries
            </Link>
            <span>/</span>
            <span>{data.name}</span>
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Your Journey to <span className="text-red-400">{data.name}</span>{" "}
            Starts Here
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 md:text-lg">
            {data.intro}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-red-500 px-6 py-3.5 font-semibold text-white hover:bg-red-600"
            >
              Get Consultation <ArrowRight size={18} />
            </Link>

            <Link
              href="/countries"
              className="rounded-lg border border-white/30 px-6 py-3.5 font-semibold hover:bg-white/10"
            >
              Explore Other Countries
            </Link>
          </div>
        </div>
      </section>

      {/* Study and Work Visa */}
      <section className="bg-gray-50 px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-red-500">
              Visa Pathways
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#071B3A] md:text-4xl">
              Explore Your Opportunities in {data.name}
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Understand the available pathways and get guidance tailored to
              your goals.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm md:p-9">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-[#164A8A]">
                <GraduationCap size={30} />
              </div>

              <h3 className="text-2xl font-bold text-[#071B3A]">Study Visa</h3>

              <p className="mt-4 leading-7 text-gray-600">{data.studyInfo}</p>

              <ul className="mt-6 space-y-3">
                {data.studyPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-gray-700">
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-green-600"
                      size={18}
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <Link
                href="/study-visa"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-red-500 hover:text-red-700"
              >
                Explore Study Visa Services <ArrowRight size={18} />
              </Link>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm md:p-9">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-red-50 text-red-500">
                <BriefcaseBusiness size={28} />
              </div>

              <h3 className="text-2xl font-bold text-[#071B3A]">Work Visa</h3>

              <p className="mt-4 leading-7 text-gray-600">{data.workInfo}</p>

              <ul className="mt-6 space-y-3">
                {data.workPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-gray-700">
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-green-600"
                      size={18}
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <Link
                href="/work-visa"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-red-500 hover:text-red-700"
              >
                Explore Work Visa Services <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Consultancy Support */}
      <section className="bg-white px-5 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-red-500">
                How We Help
              </span>

              <h2 className="mt-3 text-3xl font-bold text-[#071B3A] md:text-4xl">
                Guidance at Every Step
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Every applicant's situation is different. We help you understand
                the process, organize documents, and prepare for the next steps
                in your journey to {data.name}.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#071B3A] px-6 py-3.5 font-semibold text-white hover:bg-blue-900"
              >
                Speak to a Consultant <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  icon: MessageCircle,
                  title: "Personalized Guidance",
                  text: "Discuss your goals and questions with our team.",
                },
                {
                  icon: FileCheck,
                  title: "Document Support",
                  text: "Understand the documents relevant to your application.",
                },
                {
                  icon: GraduationCap,
                  title: "Study Pathways",
                  text: "Explore education-related visa processes.",
                },
                {
                  icon: BriefcaseBusiness,
                  title: "Work Pathways",
                  text: "Understand employment-related visa routes.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-gray-100 bg-gray-50 p-5"
                  >
                    <Icon className="text-red-500" size={26} />
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
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-gray-50 px-5 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-red-500">
              FAQs
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#071B3A] md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-gray-200 bg-white p-5"
              >
                <summary className="cursor-pointer list-none pr-4 font-semibold text-[#071B3A] marker:hidden">
                  {faq.question}
                  <span className="float-right text-red-500 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 leading-7 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-5xl rounded-2xl bg-[#071B3A] px-6 py-12 text-center text-white md:px-12">
          <h2 className="text-3xl font-bold md:text-4xl">
            Planning Your Journey to {data.name}?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            Connect with our consultancy team to discuss your study or work visa
            questions and the next steps.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red-500 px-7 py-3.5 font-semibold hover:bg-red-600"
          >
            Enquire Now <ArrowRight size={18} />
          </Link>

          <p className="mt-5 text-xs leading-5 text-blue-200">
            Visa requirements may change. Eligibility and visa decisions are
            determined by the relevant authorities. Our consultancy does not
            guarantee visa approval.
          </p>
        </div>
      </section>
    </main>
  );
}
