"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

const budgetOptions = [
  "Less than $500",
  "$3K - $5K",
  "$5K - $10K",
];

export default function ContactSection() {
  const [selectedBudget, setSelectedBudget] = useState("Less than $500");
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
      className="w-full py-16 md:py-24 bg-[#0d0e12] text-white flex justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-gray-900"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 relative z-10">
        
        {/* Left Column: Headline, Photo, Profile Info */}
        <div className="w-full lg:w-5/12 flex flex-col items-start">
          {/* Colorful Headline Matching Screenshot */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.18] mb-8 sm:mb-10">
            <span className="text-[#3b82f6]">Enhance </span>
            <span className="text-[#ef4444]">Your </span>
            <span className="text-white">Brand </span>
            <br className="hidden sm:inline" />
            <span className="text-[#3b82f6]">Potential </span>
            <span className="font-serif italic font-normal text-[#f43f5e]">At No </span>
            <span className="font-serif italic font-normal text-[#60a5fa]">Cost!</span>
          </h2>

          {/* Hakim Photo Container */}
          <div className="w-full max-w-[360px] aspect-[4/4.3] rounded-[24px] overflow-hidden relative mb-6 shadow-2xl bg-gray-900 border border-gray-800/80">
            <Image
              src="/hakim.png"
              alt="Md Abdul Hakim"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Profile Name & Title */}
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1">
            Md Abdul Hakim
          </h3>
          <p className="text-sm sm:text-base text-gray-400 font-normal leading-relaxed mb-6">
            CEO at Jevxo - Global UI UX <br /> Design &amp; Development Agency
          </p>

          {/* WhatsApp Direct Direct Booking Link */}
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2 text-sm sm:text-base font-normal text-white">
              <span className="w-5 h-5 rounded-full bg-emerald-500 text-black flex items-center justify-center font-bold text-xs">
                💬
              </span>
              <span>+1 2345 6578 145</span>
            </div>
            <Link
              href="https://wa.me/123456578145"
              target="_blank"
              className="text-white font-bold text-base sm:text-lg hover:text-[#3b82f6] transition-colors mt-1"
            >
              Book a Call Directly
            </Link>
          </div>
        </div>

        {/* Right Column: Rainbow Animated Gradient Bordered Form Container */}
        <div className="w-full lg:w-7/12 relative rounded-[28px] p-[2px] overflow-hidden shadow-2xl">
          {/* Animated Rainbow Border */}
          <div className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,#3b82f6,#ec4899,#ef4444,#10b981,#3b82f6)] animate-border-spin" />

          {/* Inner Form Card */}
          <div className="relative bg-[#0d0e12] rounded-[26px] p-6 sm:p-9 md:p-10 z-10 w-full">
            {submitted ? (
              <div className="py-20 text-center flex flex-col items-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-400 max-w-md font-medium text-sm">
                  Thank you for reaching out. Md Abdul Hakim and our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-sm font-normal text-gray-300 block">
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
                    className="w-full bg-[#12141c] border border-gray-800/90 focus:border-blue-500 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm font-normal transition-all outline-none"
                  />
                </div>

                {/* Email & WhatsApp Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-normal text-gray-300 block">
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
                      className="w-full bg-[#12141c] border border-gray-800/90 focus:border-blue-500 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm font-normal transition-all outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-normal text-gray-300 block">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+1254 21578 7845"
                      value={formData.whatsapp}
                      onChange={(e) =>
                        setFormData({ ...formData, whatsapp: e.target.value })
                      }
                      className="w-full bg-[#12141c] border border-gray-800/90 focus:border-blue-500 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm font-normal transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Budget Setup Pills */}
                <div className="space-y-3">
                  <label className="text-sm font-normal text-gray-300 block">
                    Budget Setup
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {budgetOptions.map((option) => {
                      const isSelected = selectedBudget === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setSelectedBudget(option)}
                          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-normal transition-all cursor-pointer border ${
                            isSelected
                              ? "bg-[#161a26] text-white border-gray-700 shadow-md"
                              : "bg-[#12141c] text-gray-400 border-gray-800/90 hover:text-white hover:border-gray-700"
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
                  <label className="text-sm font-normal text-gray-300 block">
                    Product Details
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder=""
                    value={formData.productDetails}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        productDetails: e.target.value,
                      })
                    }
                    className="w-full bg-[#12141c] border border-gray-800/90 focus:border-blue-500 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm font-normal transition-all outline-none resize-none"
                  />
                </div>

                {/* Let Connect Button with Solid Blue Circle Arrow */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 bg-[#1e2230] hover:bg-[#252a3b] text-white rounded-full pl-6 pr-2 py-2 text-sm sm:text-base font-normal transition-all cursor-pointer border border-gray-700/60 group"
                  >
                    <span>Let Connect</span>
                    <div className="w-8 h-8 rounded-full bg-[#1658fe] text-white flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform">
                      <ArrowUpRight className="w-4 h-4" />
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
