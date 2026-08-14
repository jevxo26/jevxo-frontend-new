import Link from "next/link";
import { ArrowRight, Check, Heart, Zap, Sparkles, ArrowUpRight } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter Plan",
    badge: "Ultimate Plan",
    icon: Heart,
    iconBg: "bg-blue-50 text-[#0052FF]",
    description: "Best For: Campaigns, product launches, MVP validation",
    price: "$500",
    isPopular: false,
    cardBg: "bg-white text-gray-900 border border-gray-200/80 shadow-[0_4px_30px_rgb(0,0,0,0.03)] hover:shadow-xl",
    dividerColor: "border-gray-100",
    checkBg: "bg-blue-500 text-white",
    descColor: "text-gray-500",
    priceColor: "text-[#111]",
    titleColor: "text-[#111]",
    features: [
      "All Growth Facilities",
      "Persona & journey mapping",
      "Component-based design",
      "Starter design system",
      "Developer walkthrough",
      "8–15 working Days",
      "3–4 Weeks",
      "4 revision rounds",
    ],
    buttonText: "Get Started",
    buttonStyle:
      "bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 shadow-sm",
    hasArrow: false,
  },
  {
    name: "Growth Plan",
    badge: "Ultimate Plan",
    icon: Sparkles,
    iconBg: "bg-white/20 text-white",
    description: "Best For: Campaigns, product launches, MVP validation",
    price: "$1200",
    isPopular: true,
    cardBg:
      "bg-[#0052FF] text-white border-2 border-blue-400/30 shadow-2xl shadow-blue-500/25 relative z-10 lg:-translate-y-2",
    dividerColor: "border-white/20",
    checkBg: "bg-white/20 text-white",
    descColor: "text-white/80",
    priceColor: "text-white",
    titleColor: "text-white",
    features: [
      "UX discovery workshop",
      "Sitemap & navigation flow",
      "Wireframes for all pages",
      "High-fidelity UI (with responsive)",
      "Interaction states",
      "Create style guide",
      "Dev-handoff support",
      "4–7 pages",
      "10–15 working days",
      "3 revision rounds",
    ],
    buttonText: "Get Started",
    buttonStyle:
      "bg-white text-[#0052FF] hover:bg-blue-50 border border-white/40 shadow-lg font-bold",
    hasArrow: true,
  },
  {
    name: "Business Plan",
    badge: "Ultimate Plan",
    icon: Zap,
    iconBg: "bg-blue-50 text-[#0052FF]",
    description: "Best For: Campaigns, product launches, MVP validation",
    price: "$2500",
    isPopular: false,
    cardBg:
      "bg-white text-gray-900 border border-gray-200/80 shadow-[0_4px_30px_rgb(0,0,0,0.03)] hover:shadow-xl",
    dividerColor: "border-gray-100",
    checkBg: "bg-blue-500 text-white",
    descColor: "text-gray-500",
    priceColor: "text-[#111]",
    titleColor: "text-[#111]",
    features: [
      "All Growth Facilities",
      "Persona & journey mapping",
      "Component-based design",
      "Starter design system",
      "Developer walkthrough",
      "8–15 working Days",
      "3–4 Weeks",
      "4 revision rounds",
    ],
    buttonText: "Get Started",
    buttonStyle:
      "bg-[#0052FF] hover:bg-blue-600 text-white shadow-md shadow-blue-500/20",
    hasArrow: true,
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="w-full py-24 bg-[#F8F9FA] flex justify-center border-t border-gray-100 relative overflow-hidden"
    >
      <div className="max-w-7xl w-full px-6 flex flex-col items-center">
        {/* Top Tag */}
        <div className="bg-[#E9F0FF] text-[#1B64FF] px-5 py-2 rounded-full text-xs font-semibold tracking-wide mb-4">
          Pricing Plan
        </div>

        {/* Main Section Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-[#111] text-center tracking-tight leading-[1.15] max-w-4xl mb-16">
          Customize your plan to{" "}
          <span className="font-serif italic font-medium">match your goals</span>,
          scale, and business needs.
        </h2>

        {/* Pricing Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <div key={idx} className="flex flex-col">
                {/* Subtitle Label above Card */}
                <div className="text-center text-gray-400 text-xs md:text-sm font-medium tracking-wider mb-3 uppercase">
                  {plan.badge}
                </div>

                {/* Card Container */}
                <div
                  className={`w-full rounded-[32px] p-8 md:p-9 flex flex-col justify-between transition-all duration-300 ${plan.cardBg}`}
                >
                  <div>
                    {/* Header: Icon & Title */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${plan.iconBg}`}
                      >
                        <Icon className="w-5 h-5 fill-current stroke-[2.5]" />
                      </div>
                      <h3
                        className={`text-2xl md:text-3xl font-extrabold tracking-tight ${plan.titleColor}`}
                      >
                        {plan.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className={`text-sm font-medium mt-3 ${plan.descColor}`}>
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div
                      className={`text-5xl md:text-6xl font-extrabold tracking-tight my-6 ${plan.priceColor}`}
                    >
                      {plan.price}
                    </div>

                    {/* Top Divider */}
                    <div className={`border-b ${plan.dividerColor} mb-6`} />

                    {/* Feature List */}
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${plan.checkBg}`}
                          >
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span className="text-sm md:text-[15px] font-medium leading-snug">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Divider & CTA Button */}
                  <div>
                    <div className={`border-b ${plan.dividerColor} mb-6`} />
                    <Link
                      href="#contact"
                      className={`w-full py-3.5 px-6 rounded-full font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2 group ${plan.buttonStyle}`}
                    >
                      <span>{plan.buttonText}</span>
                      {plan.hasArrow && (
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
