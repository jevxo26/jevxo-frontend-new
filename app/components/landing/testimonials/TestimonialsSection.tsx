import React from "react";
import { Star } from "lucide-react";

const testimonialsRow1 = [
  {
    name: "Miah rasel bd",
    role: "Marketing Director",
    quote:
      "Their SEO strategies are top-notch. We ranked on the first page of Google within 3 months.",
  },
  {
    name: "Fenian Umrah",
    role: "CEO, TechFlow",
    quote:
      "Neon Code transformed our brand entirely. The team is incredibly talented and easy to work with.",
  },
  {
    name: "M-Martly",
    role: "Founder, StartUp X",
    quote:
      "The website they built for us increased our conversion rate by 200%. Highly recommended!",
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Product, SaaSify",
    quote:
      "Incredible attention to detail and lightning-fast turnaround times. Best partner we've ever hired.",
  },
];

const testimonialsRow2 = [
  {
    name: "Konok Shrabon",
    role: "Owner, FashionHub",
    quote:
      "Professional, creative, and timely delivery. The best agency I have worked with so far.",
  },
  {
    name: "Mavoza",
    role: "CTO, DataCorp",
    quote:
      "Great code quality and performance. The Next.js implementation was flawless.",
  },
  {
    name: "Sk Lincoln",
    role: "Product Manager",
    quote:
      "Amazing UI/UX design skills. They understood our vision perfectly and delivered beyond expectations.",
  },
  {
    name: "David Miller",
    role: "VP Marketing, Elevate",
    quote:
      "Working with JEVXO was seamless from discovery to final dev handoff. Exceptional quality.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="w-full py-24 bg-[#F8F9FA] text-gray-900 relative overflow-hidden flex flex-col items-center justify-center border-t border-gray-100"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-3xl w-full px-6 flex flex-col items-center text-center mb-16 relative z-10">
        <div className="bg-[#E9F0FF] text-[#1B64FF] px-5 py-2 rounded-full text-xs font-semibold tracking-wide mb-4 uppercase">
          TESTIMONIALS
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-[#111] tracking-tight leading-tight mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-500 text-sm md:text-base font-normal max-w-lg leading-relaxed">
          Don't just take our word for it. Check out what our satisfied clients
          have to say about our work.
        </p>
      </div>

      {/* Marquee Rows Container */}
      <div className="w-full space-y-6 relative z-10 overflow-hidden py-4">
        {/* Left & Right Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-28 bg-gradient-to-r from-[#F8F9FA] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-28 bg-gradient-to-l from-[#F8F9FA] to-transparent z-20 pointer-events-none" />

        {/* Row 1: Marquee Left */}
        <div className="flex animate-marquee gap-6">
          {[...testimonialsRow1, ...testimonialsRow1, ...testimonialsRow1].map(
            (item, index) => (
              <div
                key={index}
                className="w-[360px] md:w-[400px] shrink-0 bg-white border border-gray-200/80 hover:border-blue-500/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_25px_rgb(0,0,0,0.03)] hover:shadow-xl group cursor-default"
              >
                <div>
                  {/* 5 Yellow/Gold Stars */}
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-current stroke-none"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 text-sm sm:text-base font-normal italic leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                </div>

                {/* Client Details */}
                <div>
                  <h4 className="font-bold text-[#111] text-base tracking-tight group-hover:text-[#0052FF] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#0052FF] mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            )
          )}
        </div>

        {/* Row 2: Marquee Right */}
        <div className="flex animate-marquee-reverse gap-6">
          {[...testimonialsRow2, ...testimonialsRow2, ...testimonialsRow2].map(
            (item, index) => (
              <div
                key={index}
                className="w-[360px] md:w-[400px] shrink-0 bg-white border border-gray-200/80 hover:border-blue-500/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_25px_rgb(0,0,0,0.03)] hover:shadow-xl group cursor-default"
              >
                <div>
                  {/* 5 Yellow/Gold Stars */}
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-current stroke-none"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 text-sm sm:text-base font-normal italic leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                </div>

                {/* Client Details */}
                <div>
                  <h4 className="font-bold text-[#111] text-base tracking-tight group-hover:text-[#0052FF] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#0052FF] mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
