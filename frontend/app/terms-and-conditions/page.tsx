import Link from "next/link";
import {
  FileCheck,
  ShieldCheck,
  Scale,
  Handshake,
  ChevronRight,
} from "lucide-react";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: (
      <p>
        Welcome to our website. These Terms & Conditions govern your access to
        and use of our website and visa consultancy services. By accessing our
        website, submitting an enquiry, or engaging our services, you agree to
        these terms. If you do not agree, please discontinue use of our website
        and services.
      </p>
    ),
  },
  {
    id: "our-services",
    title: "2. Our Services",
    content: (
      <>
        <p>
          We provide visa consultancy, immigration guidance, documentation
          assistance, and related services based on the services offered by our
          business.
        </p>
        <p>
          The scope of assistance will depend on the service you select and the
          information agreed upon during your consultation or service
          engagement.
        </p>
        <p>
          Unless explicitly agreed otherwise, our services do not include legal
          representation, government decision-making, or services outside the
          agreed scope.
        </p>
      </>
    ),
  },
  {
    id: "no-guarantee",
    title: "3. No Guarantee of Visa Approval",
    content: (
      <>
        <p>
          Visa applications are assessed and decided by the relevant embassies,
          consulates, immigration departments, or government authorities.
        </p>
        <p>
          We do not guarantee visa approval, immigration outcomes, interview
          results, or a particular processing time. Any guidance or assessment
          we provide is based on the information available at the time and
          should not be understood as a guarantee of success.
        </p>
        <p>
          The final decision on every visa application rests with the relevant
          authority.
        </p>
      </>
    ),
  },
  {
    id: "client-responsibilities",
    title: "4. Client Responsibilities",
    content: (
      <>
        <p>By using our services, you agree to:</p>
        <ul>
          <li>Provide accurate, complete, and up-to-date information.</li>
          <li>
            Submit genuine documents and disclose relevant information required
            for your application.
          </li>
          <li>
            Review application details and supporting documents before
            submission.
          </li>
          <li>
            Respond to requests for additional information within the required
            time.
          </li>
          <li>Pay agreed consultancy fees and applicable charges on time.</li>
          <li>
            Comply with the applicable immigration laws and requirements of your
            destination country.
          </li>
        </ul>
        <p>
          We are not responsible for adverse outcomes caused by false,
          incomplete, misleading, or delayed information provided by you.
        </p>
      </>
    ),
  },
  {
    id: "fees-payments",
    title: "5. Fees & Payments",
    content: (
      <>
        <p>
          Our consultancy fees will be communicated before or at the time of
          engagement. You agree to pay the fees applicable to the services you
          choose.
        </p>
        <p>
          Government application fees, visa fees, translation charges, courier
          costs, medical examination fees, and other third-party expenses may be
          separate from our consultancy fees unless expressly stated otherwise.
        </p>
        <p>
          Payments must be made using the payment methods communicated by our
          business. Any applicable taxes will be charged as required by law.
        </p>
      </>
    ),
  },
  {
    id: "refunds",
    title: "6. Cancellation & Refund Policy",
    content: (
      <>
        <p>
          Refund eligibility depends on the service purchased, the work already
          completed, and the terms communicated at the time of engagement.
        </p>
        <ul>
          <li>
            Government and third-party fees are subject to the refund policies
            of the relevant authority or service provider.
          </li>
          <li>
            Consultancy fees for services already performed may not be
            refundable, subject to applicable law and the agreed service terms.
          </li>
          <li>
            Any eligible refund will be processed in accordance with the
            applicable refund terms and legal requirements.
          </li>
        </ul>
        <p>
          Please contact our team for the refund terms applicable to your
          specific service before making a payment.
        </p>
      </>
    ),
  },
  {
    id: "processing-times",
    title: "7. Visa Processing Times",
    content: (
      <p>
        Visa processing times are determined by the relevant authorities and may
        vary depending on the destination country, visa category, application
        volume, verification requirements, and individual circumstances. Any
        timelines we communicate are estimates only and are not guaranteed. We
        are not responsible for delays caused by authorities or third-party
        service providers.
      </p>
    ),
  },
  {
    id: "communication",
    title: "8. Communication & Updates",
    content: (
      <p>
        We may communicate with you through email, telephone, messaging
        applications, or other contact details you provide. You are responsible
        for ensuring that your contact information is accurate and that you
        review important communications relating to your service.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "9. Intellectual Property",
    content: (
      <p>
        Unless otherwise stated, the content on this website, including text,
        graphics, branding, design, and other materials, is owned by or licensed
        to our business. You may not reproduce, distribute, modify, or
        commercially use website content without prior authorization, except as
        permitted by applicable law.
      </p>
    ),
  },
  {
    id: "website-use",
    title: "10. Acceptable Use",
    content: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>
            Use our website for unlawful, fraudulent, or misleading purposes.
          </li>
          <li>Submit false information or fraudulent documents.</li>
          <li>
            Attempt to disrupt, damage, or gain unauthorized access to our
            website or systems.
          </li>
          <li>Copy or misuse website content, branding, or materials.</li>
        </ul>
        <p>
          We reserve the right to restrict access to our website where misuse or
          unlawful activity is reasonably suspected, subject to applicable law.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "11. Limitation of Liability",
    content: (
      <p>
        To the extent permitted by applicable law, we are not liable for visa
        refusals, decisions made by immigration authorities, delays outside our
        control, or losses arising from inaccurate information supplied by
        clients or third parties. Nothing in these terms excludes or limits
        liability where such exclusion or limitation is prohibited by law. These
        terms do not affect any rights or remedies you may have under applicable
        consumer protection laws.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "12. Third-Party Services & Links",
    content: (
      <p>
        Our website or services may refer to third-party websites,
        organizations, or service providers. These third parties operate
        independently and may have their own terms and policies. We do not
        control their services, decisions, or website content. You should review
        their applicable terms before engaging with them.
      </p>
    ),
  },
  {
    id: "privacy",
    title: "13. Privacy & Personal Information",
    content: (
      <p>
        Your personal information is handled in accordance with our Privacy
        Policy. By using our services, you acknowledge that relevant personal
        information may be processed as described in that policy and as
        permitted or required by applicable law.
      </p>
    ),
  },
  {
    id: "changes",
    title: "14. Changes to These Terms",
    content: (
      <p>
        We may revise these Terms & Conditions from time to time to reflect
        changes in our services, business practices, or legal requirements.
        Updated terms will be published on this page with a revised date. Your
        continued use of our website after updated terms are published
        constitutes acceptance where permitted by applicable law.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "15. Governing Law & Disputes",
    content: (
      <p>
        These Terms & Conditions are subject to the applicable laws and
        regulations governing our business and services. Any disputes will be
        handled by the competent courts or other dispute-resolution bodies
        having jurisdiction, subject to applicable law and consumer protection
        rights.
      </p>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-white text-slate-700">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#102B46]">
        <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-5 flex items-center gap-2 text-sm text-blue-200">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <ChevronRight size={15} />
            <span className="text-white">Terms & Conditions</span>
          </div>

          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100">
              <FileCheck size={17} />
              Clear & Transparent Terms
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Terms & <span className="text-red-500">Conditions</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Please read these terms carefully before using our website or visa
              consultancy services. They explain our services, your
              responsibilities, and the conditions that apply.
            </p>

            <p className="mt-6 text-sm text-slate-400">
              Last Updated: September 19, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            {
              icon: Handshake,
              title: "Service Agreement",
              desc: "Understand the terms of our consultancy services.",
            },
            {
              icon: Scale,
              title: "Fair & Transparent",
              desc: "Know your responsibilities and applicable conditions.",
            },
            {
              icon: ShieldCheck,
              title: "Clear Expectations",
              desc: "Understand service limitations and visa decisions.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#0756A4]">
                  <Icon size={23} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#102B46]">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Terms Content */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
          {/* Table of Contents */}
          <aside className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <FileCheck size={19} className="text-[#0756A4]" />
                <h2 className="font-bold text-[#102B46]">On This Page</h2>
              </div>

              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block rounded-lg px-3 py-2 text-sm leading-5 text-slate-600 transition hover:bg-blue-50 hover:text-[#0756A4]"
                  >
                    {section.title}
                  </a>
                ))}

                <a
                  href="#contact"
                  className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-[#0756A4]"
                >
                  Contact Us
                </a>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="min-w-0">
            <div className="mb-8 rounded-xl border-l-4 border-[#0756A4] bg-blue-50 p-5 sm:p-6">
              <h2 className="mb-2 font-semibold text-[#102B46]">
                Introduction
              </h2>

              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                These Terms & Conditions establish the general terms governing
                the use of our website and services. Additional terms may apply
                to specific services and will be communicated where relevant.
              </p>
            </div>

            <div className="space-y-10">
              {sections.map((section) => (
                <article
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24 border-b border-slate-100 pb-9 last:border-0"
                >
                  <h2 className="mb-4 text-xl font-bold text-[#102B46] sm:text-2xl">
                    {section.title}
                  </h2>

                  <div className="space-y-4 text-sm leading-7 text-slate-600 sm:text-base [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-slate-700">
                    {section.content}
                  </div>
                </article>
              ))}
            </div>

            {/* Contact */}
            <div
              id="contact"
              className="mt-4 scroll-mt-24 rounded-2xl bg-[#102B46] p-6 text-white sm:p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <Handshake size={24} />
              </div>

              <h2 className="text-2xl font-bold">16. Contact Us</h2>

              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                If you have questions about these Terms & Conditions, our
                services, or any of the conditions described above, please
                contact our team.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Contact Our Team
                <ChevronRight size={17} />
              </Link>
            </div>

            <p className="mt-8 text-xs leading-6 text-slate-400">
              These Terms & Conditions are a general template for a visa
              consultancy website. Customize them to reflect your actual
              services, fee structure, cancellation policy, business
              jurisdiction, and applicable laws before publication.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
