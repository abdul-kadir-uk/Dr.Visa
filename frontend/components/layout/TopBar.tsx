import { Phone, Mail } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

export default function TopBar() {
  return (
    <div className="bg-[#102B46] text-white">
      <div className="mx-auto flex max-w-350 flex-col items-center justify-between gap-2 px-4 py-2 text-xs sm:flex-row sm:px-6">
        {/* Left Side */}
        <p className="font-medium tracking-wide">
          Your Global Future Starts Here
        </p>

        {/* Right Side */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Phone */}
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 hover:text-red-300"
          >
            <Phone size={14} />
            +91 98765 43210
          </a>

          {/* Email */}
          <a
            href="mailto:info@globalpathways.in"
            className="flex items-center gap-2 hover:text-red-300"
          >
            <Mail size={14} />
            info@globalpathways.in
          </a>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="hover:text-red-300">
              <FaFacebookF size={14} />
            </a>

            <a href="#" aria-label="Instagram" className="hover:text-red-300">
              <FaInstagram size={14} />
            </a>

            <a href="#" aria-label="LinkedIn" className="hover:text-red-300">
              <FaLinkedinIn size={14} />
            </a>

            <a href="#" aria-label="YouTube" className="hover:text-red-300">
              <FaYoutube size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
