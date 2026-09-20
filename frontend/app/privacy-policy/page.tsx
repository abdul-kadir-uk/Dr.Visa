import Link from "next/link";
import {
  ShieldCheck,
  LockKeyhole,
  Eye,
  FileText,
  UserCheck,
  Mail,
  ChevronRight,
} from "lucide-react";

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: (
      <>
        <p>
          When you use our website or enquire about our visa and immigration
          services, we may collect the following information:
        </p>
        <ul>
          <li>
            <strong>Personal information:</strong> Your name, email address,
            phone number, and contact details.
          </li>
          <li>
            <strong>Travel and visa information:</strong> Passport details,
            nationality, travel history, destination, and visa requirements
            relevant to your enquiry.
          </li>
          <li>
            <strong>Documents:</strong> Documents or supporting information that
            you voluntarily provide for visa consultation or application
            assistance.
          </li>
          <li>
            <strong>Technical information:</strong> IP address, browser type,
            device information, and website usage data.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: (
      <>
        <p>
          We use the information we collect for legitimate business and
          service-related purposes, including:
        </p>
        <ul>
          <li>Responding to enquiries and consultation requests.</li>
          <li>Providing visa guidance and immigration-related assistance.</li>
          <li>
            Assessing your service requirements and eligibility information.
          </li>
          <li>
            Communicating updates about your enquiry or requested services.
          </li>
          <li>Improving our website, services, and customer experience.</li>
          <li>Meeting applicable legal and regulatory obligations.</li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing-information",
    title: "3. Sharing of Information",
    content: (
      <>
        <p>
          We do not sell your personal information. We may share relevant
          information only when reasonably necessary, such as:
        </p>
        <ul>
          <li>
            With authorized employees or service providers who help us deliver
            our services.
          </li>
          <li>
            With embassies, consulates, government authorities, or other
            relevant parties when required for a service you have requested or
            when legally required.
          </li>
          <li>
            With technology providers that support our website, communication,
            or business operations.
          </li>
          <li>
            When disclosure is necessary to comply with applicable law or
            protect our legal rights.
          </li>
        </ul>
        <p>
          We aim to limit shared information to what is necessary for the
          relevant purpose.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "4. Cookies & Website Analytics",
    content: (
      <p>
        Our website may use cookies or similar technologies to support essential
        website functions, understand visitor activity, and improve performance.
        You can manage cookies through your browser settings. Disabling certain
        cookies may affect some website features. Where required, we will seek
        consent before using non-essential cookies.
      </p>
    ),
  },
  {
    id: "data-security",
    title: "5. Data Security",
    content: (
      <p>
        We take reasonable technical and organizational measures to protect
        personal information against unauthorized access, loss, misuse, or
        disclosure. However, no method of electronic transmission or storage is
        completely secure, and we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    id: "data-retention",
    title: "6. Data Retention",
    content: (
      <p>
        We retain personal information only for as long as reasonably necessary
        to fulfill the purposes described in this policy, provide requested
        services, resolve disputes, and comply with applicable legal
        obligations. When information is no longer required, we will take
        reasonable steps to securely delete or anonymize it.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "7. Your Privacy Rights",
    content: (
      <>
        <p>Depending on applicable law, you may have the right to:</p>
        <ul>
          <li>Request access to your personal information.</li>
          <li>Request correction of inaccurate or incomplete information.</li>
          <li>
            Request deletion of your personal information, where applicable.
          </li>
          <li>Withdraw consent where processing is based on your consent.</li>
          <li>Raise concerns about how your information is being used.</li>
        </ul>
        <p>
          To exercise these rights, please contact us using the details provided
          below. We may need to verify your identity before processing your
          request.
        </p>
      </>
    ),
  },
  {
    id: "third-party-links",
    title: "8. Third-Party Websites",
    content: (
      <p>
        Our website may contain links to third-party websites or services. These
        websites operate independently and have their own privacy policies. We
        are not responsible for their content, security, or privacy practices.
        We encourage you to review their policies before sharing personal
        information.
      </p>
    ),
  },
  {
    id: "children",
    title: "9. Children's Privacy",
    content: (
      <p>
        Our website is not intended to knowingly collect personal information
        from children without appropriate authorization. If you believe that a
        child has provided personal information to us inappropriately, please
        contact us so that we can review and address the matter.
      </p>
    ),
  },
  {
    id: "changes",
    title: "10. Changes to This Privacy Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our services, business practices, or applicable laws. Any updated
        version will be published on this page along with its revised date. We
        encourage you to review this page periodically.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
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
            <span className="text-white">Privacy Policy</span>
          </div>

          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100">
              <ShieldCheck size={17} />
              Your Privacy Matters
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Privacy <span className="text-red-500">Policy</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Your trust is important to us. Learn how we collect, use, protect,
              and manage your personal information when you visit our website or
              use our visa assistance services.
            </p>

            <p className="mt-6 text-sm text-slate-400">
              Last Updated: September 19, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Privacy highlights */}
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            {
              icon: LockKeyhole,
              title: "Data Protection",
              desc: "We take reasonable steps to safeguard your information.",
            },
            {
              icon: Eye,
              title: "Transparency",
              desc: "Understand how your personal information is used.",
            },
            {
              icon: UserCheck,
              title: "Your Rights",
              desc: "You can contact us about your personal data.",
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

      {/* Policy content */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
          {/* Table of contents */}
          <aside className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <FileText size={19} className="text-[#0756A4]" />
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

          {/* Main content */}
          <div className="min-w-0">
            <div className="mb-8 rounded-xl border-l-4 border-[#0756A4] bg-blue-50 p-5 sm:p-6">
              <h2 className="mb-2 font-semibold text-[#102B46]">
                Introduction
              </h2>
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                This Privacy Policy explains how we handle personal information
                collected through our website, enquiries, and visa assistance
                services. By using our website, you acknowledge this policy.
                Where consent is legally required, we will obtain it separately.
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
                <Mail size={24} />
              </div>

              <h2 className="text-2xl font-bold">11. Contact Us</h2>

              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                If you have questions about this Privacy Policy, how your
                personal information is handled, or wish to make a privacy
                request, please contact us.
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
              This Privacy Policy is a general template and should be reviewed
              and customized to reflect your business practices and applicable
              privacy laws before publication.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
