import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sample Client One",
    country: "Canada",
    service: "Study Visa",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    review:
      "The team guided me through the application process and helped me understand the documents I needed to prepare.",
  },
  {
    name: "Sample Client Two",
    country: "Australia",
    service: "Study Visa",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    review:
      "I appreciated the clear communication and support I received while preparing my application.",
  },
  {
    name: "Sample Client Three",
    country: "United Kingdom",
    service: "Work Visa Guidance",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    review:
      "The consultation helped me better understand the available options and the next steps for my plans.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-red-600">
            Client Experiences
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Stories From Our Clients
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Every international journey is different. Our goal is to provide
            helpful guidance and support at every step.
          </p>

          <p className="mt-2 text-xs font-medium text-slate-500">
            Demo testimonials and illustrative profile photos. Replace with
            verified client reviews and approved photos before publishing.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Quote Icon */}
              <Quote
                size={34}
                className="absolute right-6 top-6 text-blue-100 transition group-hover:text-blue-200"
              />

              {/* Star Rating */}
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Review */}
              <p className="mt-5 min-h-24 text-sm leading-7 text-slate-600">
                &quot;{testimonial.review}&quot;
              </p>

              {/* Client Info */}
              <div className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-5">
                <img
                  src={testimonial.image}
                  alt="Illustrative client profile"
                  className="h-14 w-14 rounded-full border-2 border-blue-100 object-cover"
                />

                <div>
                  <h3 className="font-bold text-slate-900">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {testimonial.service}
                  </p>

                  <p className="mt-1 text-xs font-semibold text-blue-700">
                    {testimonial.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
