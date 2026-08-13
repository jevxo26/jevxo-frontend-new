"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How fast will I receive my first design draft?",
    answer: "You will receive your first complete design draft within 48 hours after our kickoff call and requirements briefing."
  },
  {
    question: "What is included in the unlimited design requests?",
    answer: "You can submit unlimited UI/UX design tasks, landing page revisions, mobile app screens, design system components, and marketing assets one at a time."
  },
  {
    question: "How does the subscription payment work?",
    answer: "We offer flat monthly rates with zero hidden fees. You can pause or cancel your subscription at any time with no long-term contracts."
  },
  {
    question: "What tech stack do you use for development?",
    answer: "We specialize in modern frontend stacks including Next.js, React, Tailwind CSS, TypeScript, Flutter for mobile, and Node.js for backend APIs."
  },
  {
    question: "What if I don't like the design results?",
    answer: "We offer unlimited revisions until you are 100% satisfied with the final look and feel of your product."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-24 bg-[#F8F9FA] flex justify-center border-t border-gray-100">
      <div className="max-w-7xl w-full px-6 flex flex-col">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 w-full">
          <div className="flex flex-col items-start gap-4">
            <div className="bg-[#E9F0FF] text-[#1B64FF] px-5 py-2 rounded-full text-xs font-semibold tracking-wide inline-flex items-center gap-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-[#111] tracking-tight leading-tight">
              Frequently Asked <br />
              <span className="font-serif italic font-medium">Questions</span>
            </h2>
          </div>

          <div className="lg:w-[45%] pb-1">
            <p className="text-gray-500 text-base md:text-lg leading-relaxed font-normal">
              Everything you need to know about our process, design deliverables, turnarounds, and subscription model.
            </p>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto w-full flex flex-col space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_4px_25px_rgb(0,0,0,0.02)] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 md:p-8 text-left flex items-center justify-between gap-6 focus:outline-none"
                >
                  <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-[#0052ff] text-white' : 'bg-gray-100 text-gray-700'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8 text-gray-600 text-base md:text-lg leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
