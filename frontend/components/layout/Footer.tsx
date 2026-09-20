import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Study Visa", href: "/study-visa" },
  { name: "Work Visa", href: "/work-visa" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Study Visa Assistance",
  "Work Visa Guidance",
  "University Admissions",
  "Documentation Support",
  "Visitor Visa Assistance",
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-extrabold text-white">
              Global<span className="text-red-500">Pathways</span>
            </Link>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Your trusted partner for exploring international study, work, and
              visa opportunities.
            </p>

            <div className="mt-6 flex gap-3">
              {[
                { Icon: FaFacebookF, href: "#", label: "Facebook" },
                { Icon: FaInstagram, href: "#", label: "Instagram" },
                { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
                { Icon: FaYoutube, href: "#", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white transition hover:bg-red-600"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white">Quick Links</h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm transition hover:text-red-400"
                  >
                    <ArrowRight size={14} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white">Our Services</h3>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm text-slate-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white">Contact Us</h3>

            <div className="mt-5 space-y-4 text-sm">
              <p className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-red-500" />
                <span>
                  Your Office Address
                  <br />
                  Your City, India
                </span>
              </p>

              <p className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-red-500" />
                <span>+91 XXXXX XXXXX</span>
              </p>

              <p className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-red-500" />
                <span>info@yourcompany.com</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-xs text-slate-500 sm:flex sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Global Pathways. All rights reserved.
          </p>

          <div className="mt-3 flex justify-center gap-5 sm:mt-0">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
