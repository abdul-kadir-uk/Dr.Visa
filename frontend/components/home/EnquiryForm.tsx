"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-white py-20" id="enquiry">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="grid gap-12 overflow-hidden rounded-3xl bg-slate-900 p-4 text-white md:p-10 lg:grid-cols-2 lg:p-14">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <span className="text-sm font-bold uppercase tracking-widest text-red-400">
              Get Started Today
            </span>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              Let&apos;s Discuss Your Overseas Plans
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Tell us about your goals. Our team can help you explore suitable
              study or work visa options and understand the application process.
            </p>

            <div className="mt-8 space-y-3 text-sm text-slate-300">
              <p>✓ Personalized consultation</p>
              <p>✓ Guidance on documentation</p>
              <p>✓ Support throughout your application journey</p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl bg-white p-2 text-slate-900 sm:p-8">
            {submitted ? (
              <div className="py-10 text-center">
                <h3 className="text-2xl font-bold text-green-700">
                  Thank You!
                </h3>

                <p className="mt-3 text-slate-600">
                  Your form has been submitted on this page. Please note that no
                  enquiry has been sent or saved yet.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-lg bg-blue-900 px-6 py-3 font-semibold text-white hover:bg-blue-800"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold">Enquire Now</h3>

                <p className="mt-2 text-sm text-slate-500">
                  Fill in your details and tell us what you&apos;re looking for.
                </p>

                <form
                  className="mt-6 space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                      className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-700"
                    />

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      required
                      pattern="[0-9+\-\s()]{7,20}"
                      title="Enter a valid phone number"
                      className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-700"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-700"
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <select
                      name="country"
                      required
                      defaultValue=""
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none focus:border-blue-700"
                    >
                      <option value="" disabled>
                        Interested Country
                      </option>
                      <option>Canada</option>
                      <option>Australia</option>
                      <option>United Kingdom</option>
                      <option>United States</option>
                      <option>Germany</option>
                      <option>New Zealand</option>
                      <option>Other</option>
                    </select>

                    <select
                      name="visaType"
                      required
                      defaultValue=""
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none focus:border-blue-700"
                    >
                      <option value="" disabled>
                        Visa Type
                      </option>
                      <option>Study Visa</option>
                      <option>Work Visa</option>
                      <option>Visitor Visa</option>
                      <option>Permanent Residency</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your plans..."
                    required
                    className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-700"
                  />

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3.5 font-bold text-white transition hover:bg-red-700"
                  >
                    Submit Enquiry
                    <Send size={18} />
                  </button>

                  <p className="text-xs leading-5 text-slate-500">
                    By submitting, you agree to be contacted regarding your
                    enquiry.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
