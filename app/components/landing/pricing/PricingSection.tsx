"use client";

import { useEffect, useState } from "react";
import { Check, X } from "lucide-react";
import { packageCategoryApi, PackageCategory } from "../../../../api/packageCategoryApi";
import { packageApi } from "../../../../api/packageApi";
import { packageBookingApi } from "../../../../api/packageBookingApi";

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  isPopular: boolean;
  badgeText: string | null;
  features: string[];
  buttonText: string;
  category: { id: string; name: string };
}

const DEFAULT_CATEGORIES: PackageCategory[] = [
  { id: "cat-1", name: "Monthly Retainer", description: "Ongoing design & development team" },
  { id: "cat-2", name: "Project Build", description: "Fixed scope product development" },
];

const DEFAULT_PACKAGES: PricingPlan[] = [
  {
    id: "pkg-1",
    name: "Starter Plan",
    description: "Ideal for early-stage startups needing rapid MVP design & core development.",
    price: "$1,499",
    period: "/ month",
    isPopular: false,
    badgeText: null,
    features: [
      "1 Dedicated Full-Stack Engineer",
      "UI/UX Design & Prototyping",
      "Weekly Progress Demo Calls",
      "48-Hour Task Delivery Turnaround",
      "Slack & Notion Direct Access",
      "Source Code Ownership",
    ],
    buttonText: "Select This Plan",
    category: { id: "cat-1", name: "Monthly Retainer" },
  },
  {
    id: "pkg-2",
    name: "Growth Pro Plan",
    description: "Full-stack engineering squad for scaling products & accelerating roadmaps.",
    price: "$2,999",
    period: "/ month",
    isPopular: true,
    badgeText: "Most Popular",
    features: [
      "2 Senior Engineers + 1 Lead UI/UX Designer",
      "Unlimited Design & Code Requests",
      "Daily Async Updates & Standups",
      "24-48 Hour Sprint Delivery",
      "Dedicated Project Manager",
      "Architectural Code Reviews & QA",
    ],
    buttonText: "Select This Plan",
    category: { id: "cat-1", name: "Monthly Retainer" },
  },
  {
    id: "pkg-3",
    name: "Enterprise Dedicated",
    description: "Complete offshore software studio for high-growth tech companies.",
    price: "$4,999",
    period: "/ month",
    isPopular: false,
    badgeText: "Enterprise Tier",
    features: [
      "Custom Squad (Frontend, Backend, DevOps, QA)",
      "Dedicated Solution Architect",
      "SOC-2 Compliant Security & Architecture",
      "24/7 Priority SLA & Emergency Hotlines",
      "Custom CI/CD & Cloud Infrastructure",
      "Executive Weekly Strategy Sessions",
    ],
    buttonText: "Select This Plan",
    category: { id: "cat-1", name: "Monthly Retainer" },
  },
  {
    id: "pkg-4",
    name: "MVP Project Build",
    description: "End-to-end MVP design and full-stack development in 4 weeks.",
    price: "$3,500",
    period: "/ project",
    isPopular: false,
    badgeText: null,
    features: [
      "Full Product Scope & Wireframing",
      "Custom Figma UI/UX Design System",
      "Next.js & Node.js Production Build",
      "Database & Auth Integration",
      "Post-Launch 30-Day Support",
    ],
    buttonText: "Select This Plan",
    category: { id: "cat-2", name: "Project Build" },
  },
  {
    id: "pkg-5",
    name: "Scaleup Project Build",
    description: "Complete web or mobile app transformation with enterprise grade scalability.",
    price: "$7,500",
    period: "/ project",
    isPopular: true,
    badgeText: "Most Popular",
    features: [
      "Full Enterprise Architecture",
      "Web & Cross-Platform Mobile Apps",
      "AI & Payment API Integrations",
      "Automated Testing & DevOps Pipeline",
      "Post-Launch 60-Day Dedicated Support",
    ],
    buttonText: "Select This Plan",
    category: { id: "cat-2", name: "Project Build" },
  },
];

export default function PricingSection() {
  const [categories, setCategories] = useState<PackageCategory[]>(DEFAULT_CATEGORIES);
  const [packages, setPackages] = useState<PricingPlan[]>(DEFAULT_PACKAGES);
  const [activeTabId, setActiveTabId] = useState<string>("cat-1");
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Booking Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    userEmail: "",
    companyName: "",
    companyEmail: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catsRes, pkgsRes] = await Promise.all([
          packageCategoryApi.getAll(),
          packageApi.getAllPackages()
        ]);

        // Extract array if wrapped in standard response format
        const cats = Array.isArray(catsRes) ? catsRes : catsRes?.data || [];
        const pkgs = Array.isArray(pkgsRes) ? pkgsRes : pkgsRes?.data || [];

        if (cats && cats.length > 0) {
          setCategories(cats);
          setActiveTabId(cats[0].id);
        } else {
          setCategories(DEFAULT_CATEGORIES);
          setActiveTabId(DEFAULT_CATEGORIES[0].id);
        }

        if (pkgs && pkgs.length > 0) {
          const defaultCatForFallback = cats && cats.length > 0 ? cats[0] : DEFAULT_CATEGORIES[0];
          
          const formattedPackages = pkgs.map((pkg: any) => ({
            id: pkg.id,
            name: pkg.name,
            description: pkg.description,
            price: `$${pkg.price}`,
            period: pkg.duration ? `/ ${pkg.duration}` : "",
            isPopular: pkg.name.toLowerCase().includes("growth") || pkg.name.toLowerCase().includes("pro"),
            badgeText: pkg.name.toLowerCase().includes("growth") || pkg.name.toLowerCase().includes("pro") ? "Most Popular" : null,
            features: Array.isArray(pkg.features) ? pkg.features : (pkg.features ? JSON.parse(pkg.features) : []),
            buttonText: "Select This Plan",
            category: pkg.category || defaultCatForFallback
          }));
          setPackages(formattedPackages);
        } else {
          setPackages(DEFAULT_PACKAGES);
        }
      } catch (error) {
        console.error("Failed to fetch pricing data, using fallback data:", error);
        setCategories(DEFAULT_CATEGORIES);
        setPackages(DEFAULT_PACKAGES);
        setActiveTabId(DEFAULT_CATEGORIES[0].id);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const activePlans = packages.filter(pkg => pkg.category?.id === activeTabId);

  return (
    <section
      id="pricing"
      className="relative z-10 w-full py-8 md:py-12  text-gray-900 flex justify-center overflow-hidden border-t border-gray-200"
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

      <div className="w-full max-w-[95%] lg:max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-col items-center relative z-10">
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
        {categories.length > 0 && (
          <div className="bg-[#0b101d]/90 border border-gray-800 p-1.5 rounded-full flex items-center gap-1 mb-16 shadow-xl backdrop-blur-md">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTabId === tab.id
                  ? "bg-[#3b82f6] text-white shadow-md shadow-blue-500/30"
                  : "text-gray-400 hover:text-white"
                  }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        )}

        {/* Pricing Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {activePlans.map((plan, idx) => {
            const isHighlighted = plan.isPopular;
            const isActive = activeCardId === plan.id;
            const buttonStyle = isHighlighted
              ? "bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] hover:from-[#2563eb] hover:to-[#3b82f6] text-white shadow-lg shadow-blue-500/30"
              : "bg-[#252b3b] hover:bg-[#32394c] text-white";

            return (
              <div
                key={plan.id}
                onClick={() => setActiveCardId(plan.id)}
                className={`relative cursor-pointer rounded-[24px] transition-all duration-300 flex flex-col justify-between ${isActive
                  ? "border-[1.5px] border-transparent p-7 md:p-8 shadow-[0_15px_50px_rgba(238,72,85,0.15)] scale-[1.02] z-20"
                  : isHighlighted
                    ? "p-[2.5px] bg-gradient-to-b from-[#60a5fa] via-[#3b82f6] via-[#ec4899] to-[#3b82f6] bg-[length:200%_200%] animate-[gradient_6s_linear_infinite] shadow-[0_15px_50px_rgba(59,130,246,0.25)] hover:scale-[1.01] z-10"
                    : "bg-[#111622] border border-gray-800/80 shadow-xl hover:border-gray-700 p-7 md:p-8 hover:scale-[1.01] z-0"
                  }`}
                style={
                  isActive
                    ? {
                      background: 'linear-gradient(#111622, #111622) padding-box, linear-gradient(344.14deg, #2746F7 0%, #EE4855 49.69%, #FFFFFF 74.54%, #FA6537 99.39%) border-box'
                    }
                    : {}
                }
              >
                {/* Inner Card Background for Highlighted Plan */}
                <div
                  className={`w-full h-full flex flex-col justify-between ${isHighlighted && !isActive
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
                              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isHighlighted
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
                  <button
                    onClick={() => {
                      setSelectedPlan(plan);
                      setIsModalOpen(true);
                    }}
                    className={`w-full py-3.5 px-6 rounded-full font-medium text-center text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${buttonStyle}`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Booking Modal */}
      {isModalOpen && selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#111622] border border-gray-800 rounded-2xl p-6 md:p-8 w-full max-w-lg shadow-2xl relative text-left">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-bold text-white mb-2">Book {selectedPlan.name}</h3>
            <p className="text-gray-400 text-sm mb-6">Fill out the form below and we'll get in touch with you shortly.</p>

            <form onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmitting(true);
              try {
                await packageBookingApi.createBooking({
                  ...formData,
                  billingCycle: selectedPlan.period.replace("/", "").trim() || "monthly",
                  packageId: selectedPlan.id
                });
                alert("Booking successful! We will contact you soon.");
                setIsModalOpen(false);
                setFormData({ name: "", userEmail: "", companyName: "", companyEmail: "" });
              } catch (error) {
                console.error("Booking failed:", error);
                alert("Booking failed. Please try again.");
              } finally {
                setIsSubmitting(false);
              }
            }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-[#0b101d] border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Your Email</label>
                <input
                  required
                  type="email"
                  value={formData.userEmail}
                  onChange={e => setFormData(prev => ({ ...prev, userEmail: e.target.value }))}
                  className="w-full bg-[#0b101d] border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Company Name</label>
                <input
                  required
                  type="text"
                  value={formData.companyName}
                  onChange={e => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                  className="w-full bg-[#0b101d] border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Acme Corp"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Company Email</label>
                <input
                  required
                  type="email"
                  value={formData.companyEmail}
                  onChange={e => setFormData(prev => ({ ...prev, companyEmail: e.target.value }))}
                  className="w-full bg-[#0b101d] border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="contact@acme.com"
                />
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-lg font-medium transition-colors mt-6"
              >
                {isSubmitting ? "Booking..." : "Confirm Booking"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}