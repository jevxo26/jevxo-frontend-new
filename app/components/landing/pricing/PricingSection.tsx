"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

const tabs = ["Website Design", "Web App", "Mobile App"];

const pricingPlans = [
  {
    name: "Starter Plan",
    description: "Perfect for larger organizations with advanced needs",
    price: "$700",
    period: "/ per month",
    isPopular: false,
    badgeText: null,
    features: [
      "Everything in Growth Plan",
      "Investment Tracking",
      "Integration Services",
      "24/7 VIP Support",
      "Premium Security",
      "Premium Security",
      "Premium Security",
      "Premium Security",
    ],
    buttonText: "Select This Plan",
    buttonStyle: "bg-[#252b3b] hover:bg-[#32394c] text-white",
  },
  {
    name: "Growth Plan",
    description: "Ideal for growing startups and mid-sized companies",
    price: "$1500",
    period: "/ per month",
    isPopular: true,
    badgeText: "Most Popular",
    features: [
      "Everything in Starter Plan",
      "Advanced Budgeting Tools",
      "Customizable Dashboards",
      "Transaction Insights",
      "Enhanced Security",
      "Customizable Dashboards",
      "Customizable Dashboards",
      "Customizable Dashboards",
    ],
    buttonText: "Select This Plan",
    buttonStyle: "bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] hover:from-[#2563eb] hover:to-[#3b82f6] text-white shadow-lg shadow-blue-500/30",
  },
  {
    name: "Business Plan",
    description: "Perfect for larger organizations with advanced needs",
    price: "$4000",
    period: "/ per month",
    isPopular: false,
    badgeText: null,
    features: [
      "Everything in Growth Plan",
      "Investment Tracking",
      "Integration Services",
      "24/7 VIP Support",
      "Premium Security",
      "Premium Security",
      "Premium Security",
      "Premium Security",
    ],
    buttonText: "Select This Plan",
    buttonStyle: "bg-[#252b3b] hover:bg-[#32394c] text-white",
  },
];

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState("Website Design");

  return (
    <section
      id="pricing"
      className="relative z-10 w-full py-20 md:py-28 bg-[#060913] text-white flex justify-center overflow-hidden border-t border-gray-900"
    >
      {/* Background Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#1f293d_1px,transparent_1px),linear-gradient(to_bottom,#1f293d_1px,transparent_1px)] bg-[size:4rem_4rem]"
      />
      
      {/* Radial Blue/Purple Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-900/25 via-indigo-900/20 to-purple-900/10 blur-[130px] pointer-events-none" />

      <div className="max-w-10/12 mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center relative z-10">
        
        {/* Top Pill Badge */}
        <div className="bg-[#111827] border border-blue-500/30 text-blue-400 px-4 py-1 rounded-full text-xs font-normal tracking-wide inline-flex items-center gap-2 mb-6 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          Pricing Plan
        </div>

        {/* Headline Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white text-center tracking-tight leading-[1.18] max-w-4xl mb-10">
          Customize your plan to{" "}
          <span className="font-serif italic font-medium text-slate-100">match your goals</span>,
          <br className="hidden sm:inline" /> scale, and business needs.
        </h2>

        {/* Category Tabs Toggle Bar */}
        <div className="bg-[#0b101d]/90 border border-gray-800 p-1.5 rounded-full flex items-center gap-1 mb-16 shadow-xl backdrop-blur-md">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#3b82f6] text-white shadow-md shadow-blue-500/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, idx) => {
            const isHighlighted = plan.isPopular;

            return (
              <div
                key={idx}
                className={`relative rounded-[24px] transition-all duration-300 flex flex-col justify-between p-7 md:p-8 ${
                  isHighlighted
                    ? "p-[2.5px] bg-gradient-to-b from-[#60a5fa] via-[#3b82f6] via-[#ec4899] to-[#3b82f6] bg-[length:200%_200%] animate-[gradient_6s_linear_infinite] shadow-[0_15px_50px_rgba(59,130,246,0.25)]"
                    : "bg-[#111622] border border-gray-800/80 shadow-xl hover:border-gray-700"
                }`}
              >
                {/* Inner Card Background for Highlighted Plan */}
                <div
                  className={`w-full h-full flex flex-col justify-between ${
                    isHighlighted
                      ? "bg-gradient-to-b from-[#162547] via-[#11192e] to-[#0d1322] rounded-[22.5px] p-7 md:p-8"
                      : ""
                  }`}
                >
                  <div>
                    {/* Header: Title & Optional Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-semibold text-white tracking-tight">
                        {plan.name}
                      </h3>
                      {plan.badgeText && (
                        <span className="bg-[#3b82f6]/30 border border-blue-400/40 text-blue-300 text-[11px] font-medium px-3 py-1 rounded-full">
                          {plan.badgeText}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm font-normal mb-6 min-h-[40px] leading-relaxed">
                      {plan.description}
                    </p>

                    {/* Price Display */}
                    <div className="flex items-baseline gap-2 mb-8">
                      <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 text-sm font-normal">
                        {plan.period}
                      </span>
                    </div>

                    {/* Feature Items List Wrapper Box */}
                    <div className="bg-[#0b101c]/80 border border-gray-800/90 rounded-[20px] p-5 mb-8">
                      <ul className="space-y-3.5">
                        {plan.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-3">
                            <div
                              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                                isHighlighted
                                  ? "bg-[#3b82f6] text-white"
                                  : "bg-[#252b3b] text-gray-400"
                              }`}
                            >
                              <Check className="w-3 h-3 stroke-[2.5]" />
                            </div>
                            <span className="text-sm text-gray-300 font-normal">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Select Plan Button */}
                  <Link
                    href="#contact"
                    className={`w-full py-3.5 px-6 rounded-full font-medium text-center text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${plan.buttonStyle}`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
