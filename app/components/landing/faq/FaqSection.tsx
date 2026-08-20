"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Most projects are completed within 5–10 business days, depending on the scope and complexity. Larger or custom requests may take a bit longer. A clear timeline is always shared before we get started."
  },
  {
    question: "What services do you offer?",
    answer: "We offer end-to-end digital product design including UI/UX design, Web App development, Mobile App development, Branding & Design Systems, and custom AI integration."
  },
  {
    question: "Can you work with existing branding?",
    answer: "Yes, absolutely! We can work seamlessly within your existing brand guidelines, color palettes, and typography while elevating the overall digital experience."
  },
  {
    question: "What if I need changes after the project is delivered?",
    answer: "We offer continuous post-delivery support and revision rounds to ensure everything functions perfectly and meets your expectations."
  },
  {
    question: "How does the monthly retainer work?",
    answer: "Our monthly retainer gives you dedicated design & development bandwidth with predictable costs, priority turnarounds, and zero long-term commitments."
  }
];

export default function FaqSection() {
  // Initially null so all FAQs are closed by default (opens only on click)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative z-10 w-full py-16 md:py-24 bg-[#F8F9FA] flex justify-center border-t border-gray-100 overflow-hidden">
      <div className="max-w-10/12 mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Title & CTA Button */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6">
            {/* Pill Badge */}
            <div className="bg-white border border-[#3b82f6]/40 text-[#3b82f6] px-3.5 py-1 rounded-full text-xs font-normal tracking-wide inline-flex items-center gap-1.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
              Ask Anything
            </div>

            {/* Headline Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#0f172a] tracking-tight leading-[1.12]">
              <span className="font-medium block text-[#0f172a]">Frequently</span>
              <span className="block mt-1 text-[#0f172a]">
                <span className="font-serif italic font-medium text-[#0f172a]">Asked Question</span>
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-[#64748b] text-base md:text-lg font-normal">
              Before You Ask — Here's the Answer
            </p>

            {/* Request Free Audit CTA Button */}
            <div className="pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1658fe] to-[#004cf6] hover:from-[#1148d4] hover:to-[#003ec8] text-white rounded-full pl-6 pr-2 py-2 transition-all duration-300 shadow-[0_8px_25px_rgba(22,88,254,0.35)] hover:shadow-[0_12px_30px_rgba(22,88,254,0.5)] hover:scale-[1.02] group/btn"
              >
                <span className="text-sm font-medium tracking-tight">Request Free Audit</span>
                <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shrink-0 group-hover/btn:rotate-45 transition-transform duration-300 shadow-sm">
                  <ArrowUpRight className="w-4 h-4 text-black stroke-[2.2]" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column: FAQ Accordion List */}
          <div className="lg:col-span-7 flex flex-col space-y-4 w-full">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-[16px] border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? "border-blue-200/80 shadow-[0_8px_30px_rgba(22,88,254,0.06)]" 
                      : "border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-6 focus:outline-none cursor-pointer group"
                  >
                    <span className="text-lg sm:text-xl font-medium text-[#0f172a] tracking-tight leading-snug">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#1658fe]/10 text-[#1658fe]" : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"}`}>
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.2]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.2]" />
                      )}
                    </div>
                  </button>

                  {/* Smooth Animated Collapsible Container */}
                  <div 
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 text-[#64748b] text-sm sm:text-base leading-relaxed border-t border-gray-100/80 pt-4">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
