"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowUpRight, MessageSquare, PhoneCall, Calendar } from "lucide-react";

const budgetOptions = [
  "Less than $500",
  "$500 - $3K",
  "$3K - $5K",
  "$5K - $10K",
  "$10K - $30K",
];

const trustPoints = [
  "Expect a response from us within 24 hours.",
  "We're happy to sign an NDA upon request.",
  "Get access to a team of dedicated specialists.",
];

export default function ContactSection() {
  const [selectedBudget, setSelectedBudget] = useState("$500 - $3K");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    productDetails: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        whatsapp: "",
        productDetails: "",
      });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="w-full py-12 md:py-16 bg-[#F8F9FA] border-t border-gray-100 flex justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full flex flex-col items-center relative z-10">
        
        {/* Top Tag & Main Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mb-10 md:mb-12">
          <div className="bg-white border border-[#3b82f6]/40 text-[#3b82f6] px-3.5 py-1 rounded-full text-xs font-normal tracking-wide inline-flex items-center gap-1.5 shadow-2xs mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-[#0f172a] tracking-tight leading-[1.15]">
            Scale Smarter With{" "}
            <span className="font-serif italic font-normal text-[#0f172a]">
              Custom Digital Solutions
            </span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-3 font-normal max-w-xl">
            Have a project in mind? Fill in the details below and our team will craft a tailored strategy for your business.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Founder Card & Trust Guarantees */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            
            {/* Founder Card */}
            <div className="bg-white rounded-[32px] p-7 md:p-8 border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row lg:flex-col gap-6 items-center sm:items-start">
              <div className="relative w-36 h-36 sm:w-40 sm:h-40 shrink-0 rounded-2xl overflow-hidden shadow-md border-2 border-blue-500/10">
                <Image
                  src="/images/shahid_hasan.png"
                  alt="Shahid Hasan"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="flex flex-col justify-between space-y-3 text-center sm:text-left">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Available for new projects
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#111] tracking-tight">
                    Shahid Hasan
                  </h3>
                  <p className="text-sm font-semibold text-[#0052FF] mt-0.5">
                    Founder & Managing Director
                  </p>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <div className="flex items-center justify-center sm:justify-start gap-2.5 text-sm font-medium text-gray-700">
                    <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <PhoneCall className="w-3.5 h-3.5" />
                    </div>
                    <span>+12345 6578 145</span>
                  </div>

                  <Link
                    href="https://wa.me/123456578145"
                    target="_blank"
                    className="inline-flex items-center justify-center sm:justify-start gap-2 bg-[#E9F0FF] hover:bg-blue-100 text-[#0052FF] px-4 py-2 rounded-full text-xs font-bold transition-colors w-fit"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book a 15-min Call Directly</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Trust Badges Card */}
            <div className="bg-white rounded-[32px] p-7 md:p-8 border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] space-y-4">
              <h4 className="text-lg font-bold text-[#111] tracking-tight">
                Why Work With JEVXO?
              </h4>
              <ul className="space-y-4">
                {trustPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#E9F0FF] text-[#0052FF] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm md:text-base font-medium text-gray-700 leading-snug">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Unique Light Form Card */}
          <div className="lg:col-span-7 bg-white rounded-[32px] p-8 md:p-10 border border-gray-200/80 shadow-[0_10px_40px_rgb(0,0,0,0.04)] relative">
            
            {submitted ? (
              <div className="py-20 text-center flex flex-col items-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-bold text-[#111]">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-500 max-w-md font-medium">
                  Thank you for reaching out. Shahid and our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#111] tracking-tight">
                    Start Your Project
                  </h3>
                  <p className="text-sm text-gray-500 font-normal mt-1">
                    Fill out the form below and we'll respond with a free proposal.
                  </p>
                </div>

                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-800 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full bg-[#F8F9FA] focus:bg-white border border-gray-200/80 focus:border-[#0052FF] focus:ring-4 focus:ring-blue-500/10 rounded-2xl px-5 py-4 text-gray-900 placeholder-gray-400 font-medium transition-all outline-none"
                  />
                </div>

                {/* Email & WhatsApp Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-800 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Info@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-[#F8F9FA] focus:bg-white border border-gray-200/80 focus:border-[#0052FF] focus:ring-4 focus:ring-blue-500/10 rounded-2xl px-5 py-4 text-gray-900 placeholder-gray-400 font-medium transition-all outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-800 block">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+12345 6578 145"
                      value={formData.whatsapp}
                      onChange={(e) =>
                        setFormData({ ...formData, whatsapp: e.target.value })
                      }
                      className="w-full bg-[#F8F9FA] focus:bg-white border border-gray-200/80 focus:border-[#0052FF] focus:ring-4 focus:ring-blue-500/10 rounded-2xl px-5 py-4 text-gray-900 placeholder-gray-400 font-medium transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Project Budget Pills */}
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-800 block">
                    Project Budget
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {budgetOptions.map((option) => {
                      const isSelected = selectedBudget === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setSelectedBudget(option)}
                          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                            isSelected
                              ? "bg-[#0052FF] text-white border-[#0052FF] shadow-lg shadow-blue-500/25 scale-[1.02]"
                              : "bg-[#F8F9FA] border-gray-200/80 text-gray-700 hover:bg-gray-100 hover:text-black"
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Product Details */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-800 block">
                    Product Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="I want to redesign & develop my website..."
                    value={formData.productDetails}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        productDetails: e.target.value,
                      })
                    }
                    className="w-full bg-[#F8F9FA] focus:bg-white border border-gray-200/80 focus:border-[#0052FF] focus:ring-4 focus:ring-blue-500/10 rounded-2xl px-5 py-4 text-gray-900 placeholder-gray-400 font-medium transition-all outline-none resize-none"
                  />
                </div>

                {/* Submit Pill Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-3 bg-[#0052FF] hover:bg-blue-600 text-white rounded-full px-8 py-4 transition-all shadow-xl shadow-blue-500/25 group font-bold text-base cursor-pointer w-full sm:w-auto"
                  >
                    <span>Request Free Call.</span>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      <ArrowUpRight className="w-4.5 h-4.5 text-[#0052FF]" />
                    </div>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
