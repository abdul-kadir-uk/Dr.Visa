"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe2, Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Study Visa", href: "/study-visa" },
  { name: "Work Visa", href: "/work-visa" },
  { name: "Countries", href: "/countries" },
  { name: "Services", href: "/services" },
  { name: "Success Stories", href: "/success-stories" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-350 items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0756A4] text-white">
            <Globe2 size={30} />
          </div>

          <div>
            <h1 className="text-lg font-bold leading-tight text-[#102B46] sm:text-xl">
              Global Pathways
            </h1>

            <p className="text-[10px] tracking-wider text-gray-600">
              Study · Work · Settle
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-gray-700 transition hover:text-[#0756A4]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Enquire Button */}
        <a
          href="/#enquiry"
          className="hidden items-center gap-2 rounded-md bg-[#E3262E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700 lg:flex"
        >
          Enquire Now
          <ArrowRight size={16} />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-md p-2 text-[#102B46] hover:bg-gray-100 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-[#0756A4]"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="/#enquiry"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-md bg-[#E3262E] px-4 py-3 font-semibold text-white"
            >
              Enquire Now
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
