"use client";

import { useState } from "react";
import { Check } from "lucide-react";

type TabName = "Website Design" | "Web App" | "Mobile App";

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  isPopular: boolean;
  badgeText: string | null;
  features: string[];
  buttonText: string;
}

const tabs: TabName[] = ["Website Design", "Web App", "Mobile App"];

const pricingData: Record<TabName, PricingPlan[]> = {
  "Website Design": [
    {
      name: "Starter Plan",
      description: "Perfect for small businesses launching their first site",
      price: "$700",
      period: "/ per month",
      isPopular: false,
      badgeText: null,
      features: [
        "5-page responsive website",
        "Basic SEO setup",
        "Contact form integration",
        "1 round of revisions",
        "Standard hosting support",
      ],
      buttonText: "Select This Plan",
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
        "Up to 15 pages",
        "Custom UI/UX design",
        "Advanced SEO & analytics",
        "CMS integration",
        "3 rounds of revisions",
      ],
      buttonText: "Select This Plan",
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
        "Unlimited pages",
        "E-commerce integration",
        "24/7 VIP support",
        "Premium security & backups",
      ],
      buttonText: "Select This Plan",
    },
  ],
  "Web App": [
    {
      name: "Starter Plan",
      description: "Great for MVPs and early-stage product validation",
      price: "$1200",
      period: "/ per month",
      isPopular: false,
      badgeText: null,
      features: [
        "Single-page web app",
        "Core feature development",
        "Basic authentication",
        "Cloud hosting setup",
        "Bug fixes for 30 days",
      ],
      buttonText: "Select This Plan",
    },
    {
      name: "Growth Plan",
      description: "Built for scaling products with growing user bases",
      price: "$2800",
      period: "/ per month",
      isPopular: true,
      badgeText: "Most Popular",
      features: [
        "Everything in Starter Plan",
        "Custom dashboards",
        "Third-party API integrations",
        "Role-based access control",
        "Performance optimization",
        "Priority support",
      ],
      buttonText: "Select This Plan",
    },
    {
      name: "Business Plan",
      description: "For enterprise-grade web applications at scale",
      price: "$6000",
      period: "/ per month",
      isPopular: false,
      badgeText: null,
      features: [
        "Everything in Growth Plan",
        "Microservices architecture",
        "Advanced analytics suite",
        "24/7 VIP support",
        "Enterprise-grade security",
      ],
      buttonText: "Select This Plan",
    },
  ],
  "Mobile App": [
    {
      name: "Starter Plan",
      description: "Perfect for launching a simple mobile app quickly",
      price: "$1500",
      period: "/ per month",
      isPopular: false,
      badgeText: null,
      features: [
        "iOS or Android (single platform)",
        "Up to 5 screens",
        "Basic push notifications",
        "App store submission",
        "Bug fixes for 30 days",
      ],
      buttonText: "Select This Plan",
    },
    {
      name: "Growth Plan",
      description: "Ideal for startups scaling across both platforms",
      price: "$3200",
      period: "/ per month",
      isPopular: true,
      badgeText: "Most Popular",
      features: [
        "Everything in Starter Plan",
        "iOS & Android (cross-platform)",
        "In-app purchases setup",
        "Analytics integration",
        "Custom UI/UX design",
        "Priority support",
      ],
      buttonText: "Select This Plan",
    },
    {
      name: "Business Plan",
      description: "For larger organizations with complex app needs",
      price: "$7000",
      period: "/ per month",
      isPopular: false,
      badgeText: null,
      features: [
        "Everything in Growth Plan",
        "Offline mode support",
        "Advanced backend integration",
        "24/7 VIP support",
        "Premium security & compliance",
      ],
      buttonText: "Select This Plan",
    },
  ],
};

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<TabName>("Website Design");
  const plans = pricingData[activeTab];

  return (
    <section
      id="pricing"
      className="relative z-10 w-full py-20 md:py-28 bg-[#060913] text-white flex justify-center overflow-hidden border-t border-gray-900"
    >
      {/* Keyframes for ambient background animation */}
      <style>{`
        @keyframes gridDrift {
          0% { background-position: 0px 0px, 0px 0px; }
          100% { background-position: 4rem 4rem, 4rem 4rem; }
        }
        @keyframes glowPulseA {
          0%, 100% { opacity: 0.55; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.85; transform: translate(-50%, -50%) scale(1.12); }
        }
        @keyframes glowPulseB {
          0%, 100% { opacity: 0.35; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.15); }
        }
        @keyframes glowDriftX {
          0%, 100% { transform: translate(-60%, -50%) scale(1); }
          50% { transform: translate(-40%, -50%) scale(1.08); }
        }
      `}</style>

      {/* Background Base Gradient Wash */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#060913] via-[#080c1a] to-[#060913]" />

      {/* Background Subtle Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#1f293d_1px,transparent_1px),linear-gradient(to_bottom,#1f293d_1px,transparent_1px)] bg-[size:4rem_4rem]"
        style={{ animation: "gridDrift 14s linear infinite" }}
      />

      {/* Radial Blue/Purple Ambient Glow - primary, pulsing */}
      <div
        className="absolute top-1/3 left-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-900/30 via-indigo-900/25 to-purple-900/15 blur-[130px] pointer-events-none"
        style={{ animation: "glowPulseA 8s ease-in-out infinite" }}
      />

      {/* Secondary Pink/Blue Ambient Glow - slow horizontal drift */}
      <div
        className="absolute top-1/4 left-1/2 w-[500px] h-[400px] bg-gradient-to-bl from-pink-900/20 via-blue-800/15 to-transparent blur-[110px] pointer-events-none"
        style={{ animation: "glowDriftX 12s ease-in-out infinite" }}
      />

      {/* Lower Ambient Glow - subtle counter pulse */}
      <div
        className="absolute bottom-0 left-1/2 w-[600px] h-[350px] bg-gradient-to-t from-blue-950/40 via-indigo-950/20 to-transparent blur-[120px] pointer-events-none"
        style={{ animation: "glowPulseB 10s ease-in-out infinite" }}
      />

      <div className="max-w-10/12 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center relative z-10">
        {/* Top Pill Badge */}
        <div className="bg-[#111827] border border-blue-500/30 text-blue-400 px-4 py-1 rounded-full text-xs font-normal tracking-wide inline-flex items-center gap-2 mb-6 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          Pricing Plan
        </div>

        {/* Headline Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white text-center tracking-tight leading-[1.18] max-w-4xl mb-10">
          Customize your plan to{" "}
          <span className="font-serif italic font-medium text-slate-100">
            match your goals
          </span>
          , <br className="hidden sm:inline" /> scale, and business needs.
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
          {plans.map((plan, idx) => {
            const isHighlighted = plan.isPopular;
            const buttonStyle = isHighlighted
              ? "bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] hover:from-[#2563eb] hover:to-[#3b82f6] text-white shadow-lg shadow-blue-500/30"
              : "bg-[#252b3b] hover:bg-[#32394c] text-white";

            return (
              <div
                key={`${activeTab}-${idx}`}
                className={`relative rounded-[24px] transition-all duration-300 flex flex-col justify-between ${
                  isHighlighted
                    ? "p-[2.5px] bg-gradient-to-b from-[#60a5fa] via-[#3b82f6] via-[#ec4899] to-[#3b82f6] bg-[length:200%_200%] animate-[gradient_6s_linear_infinite] shadow-[0_15px_50px_rgba(59,130,246,0.25)]"
                    : "bg-[#111622] border border-gray-800/80 shadow-xl hover:border-gray-700 p-7 md:p-8"
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
                  <a
                    href="#contact"
                    className={`w-full py-3.5 px-6 rounded-full font-medium text-center text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${buttonStyle}`}
                  >
                    {plan.buttonText}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}