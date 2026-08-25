"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check, X, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const comparisonData = [
  {
    feature: "Design talent",
    jevxo: { text: "Senior specialists only", check: true },
    others: { text: "Junior designers, inconsistent quality.", check: false },
    freelancer: { text: "Skill varies widely always", check: true }
  },
  {
    feature: "Project management",
    jevxo: { text: "Dedicated PM plus Slack", check: true },
    others: { text: "Email only, slow responses", check: false },
    freelancer: { text: "You manage everything yourself", check: false }
  },
  {
    feature: "Speed & flexibility",
    jevxo: { text: "48-hour first drafts guaranteed", check: true },
    others: { text: "2-3 weeks minimum wait", check: false },
    freelancer: { text: "One task only, limited", check: false }
  },
  {
    feature: "Cost efficiency",
    jevxo: { text: "Fixed rate, unlimited requests", check: true },
    others: { text: "Hidden fees, scope creep", check: false },
    freelancer: { text: "Hourly rates add up", check: true }
  },
  {
    feature: "Total cost",
    jevxo: { text: "$-$$", check: true },
    others: { text: "$$$+", check: false },
    freelancer: { text: "$-$$$", check: false }
  },
  {
    feature: "Availability",
    jevxo: { text: "Always on, never ghosting", check: true },
    others: { text: "Overbooked, long queue times", check: false },
    freelancer: { text: "Vacations cause project delays", check: false }
  },
  {
    feature: "Ideal for",
    jevxo: { text: "Fast-moving ambitious startups", check: true },
    others: { text: "Enterprise with big budgets", check: true },
    freelancer: { text: "One-off small projects only", check: true }
  }
];

export default function ComparisonSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeMobileTab, setActiveMobileTab] = useState<"jevxo" | "others" | "freelancer">("jevxo");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".comparison-animate",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="why-choose-us" 
      className="relative z-10 w-full py-14 sm:py-20 bg-[#f8fafc] flex justify-center border-t border-gray-100 overflow-hidden"
    >
      <div className="w-full max-w-[95%] lg:max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14 w-full">
          <div className="flex flex-col items-start gap-3.5 max-w-2xl">
            <div className="bg-blue-50 border border-blue-200/80 text-[#2563eb] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide inline-flex items-center gap-2 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
              Why Choose Us
            </div>
            
            <h2 className="text-2xl sm:text-4xl md:text-[40px] font-bold text-[#0f172a] tracking-tight leading-[1.2]">
              Why Leading Brands <br className="hidden sm:block" />
              <span className="font-serif italic font-normal text-[#1e293b]">Choose Us Over</span> <span className="font-bold text-[#2563eb]">Others.</span>
            </h2>
          </div>

          <div className="shrink-0">
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#1d4ed8] hover:bg-[#1e40af] text-white pl-6 pr-2.5 py-2.5 rounded-full font-medium text-sm sm:text-base shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
            >
              <span>Request Free Audit</span>
              <div className="w-8 h-8 rounded-full bg-white text-[#1d4ed8] flex items-center justify-center shrink-0 group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile View Toggle Switch (visible on mobile screens < 640px) */}
        <div className="sm:hidden mb-6 w-full flex bg-gray-200/70 p-1 rounded-xl gap-1">
          <button
            onClick={() => setActiveMobileTab("jevxo")}
            className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeMobileTab === "jevxo"
                ? "bg-[#1d4ed8] text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Jevxo Team
          </button>
          <button
            onClick={() => setActiveMobileTab("others")}
            className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeMobileTab === "others"
                ? "bg-[#1d4ed8] text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Other Agencies
          </button>
          <button
            onClick={() => setActiveMobileTab("freelancer")}
            className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeMobileTab === "freelancer"
                ? "bg-[#1d4ed8] text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Freelancers
          </button>
        </div>

        {/* Mobile Stacked Card View (< 640px) */}
        <div className="block sm:hidden space-y-3.5 mb-4">
          {comparisonData.map((row, index) => {
            const data = activeMobileTab === "jevxo" 
              ? row.jevxo 
              : activeMobileTab === "others" 
              ? row.others 
              : row.freelancer;

            return (
              <div 
                key={index} 
                className={`comparison-animate p-4 rounded-2xl border transition-all ${
                  activeMobileTab === "jevxo" 
                    ? "bg-white border-blue-200 shadow-md shadow-blue-500/5 ring-1 ring-blue-500/10" 
                    : "bg-white border-gray-200/80 shadow-xs"
                }`}
              >
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  {row.feature}
                </div>
                <div className="flex items-start gap-3">
                  {data.check ? (
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  )}
                  <span className={`text-sm leading-snug ${activeMobileTab === "jevxo" ? "font-semibold text-gray-900" : "font-medium text-gray-700"}`}>
                    {data.text}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop & Tablet Table View (hidden on mobile < 640px, or scrollable on tablet) */}
        <div className="hidden sm:block relative rounded-2xl bg-white border border-gray-200/90 shadow-[0_10px_40px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="overflow-x-auto scrollbar-thin">
            <table className="w-full text-left border-collapse min-w-[700px]">
              
              {/* Table Header */}
              <thead>
                <tr className="border-b border-gray-100 text-[#0f172a] text-sm sm:text-base">
                  <th className="py-5 px-6 sm:px-8 font-bold w-[28%] text-gray-900 border-r border-gray-100">
                    Overview
                  </th>
                  
                  {/* Jevxo Column Header - Highlighted */}
                  <th className="py-5 px-6 sm:px-8 font-bold w-[26%] bg-[#f8fafc] border-r border-gray-100 relative">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#1d4ed8] text-white flex items-center justify-center text-xs font-bold shadow-xs">
                        J
                      </div>
                      <span className="text-[#0f172a] font-bold text-base sm:text-lg">Jevxo Team</span>
                    </div>
                  </th>

                  <th className="py-5 px-6 sm:px-8 font-semibold w-[23%] text-gray-700 text-center sm:text-left border-r border-gray-100">
                    Other Agencies
                  </th>

                  <th className="py-5 px-6 sm:px-8 font-semibold w-[23%] text-gray-700 text-center sm:text-left">
                    Freelancers
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                {comparisonData.map((row, index) => (
                  <tr key={index} className="comparison-animate hover:bg-gray-50/50 transition-colors">
                    
                    {/* Feature Title */}
                    <td className="py-4 sm:py-5 px-6 sm:px-8 font-semibold text-gray-900 border-r border-gray-100">
                      {row.feature}
                    </td>

                    {/* Jevxo Column Data - Highlighted */}
                    <td className="py-4 sm:py-5 px-6 sm:px-8 bg-[#f8fafc] border-r border-gray-100">
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="font-semibold text-gray-900 leading-snug">
                          {row.jevxo.text}
                        </span>
                      </div>
                    </td>

                    {/* Other Agencies Data */}
                    <td className="py-4 sm:py-5 px-6 sm:px-8 border-r border-gray-100 text-gray-600">
                      <div className="flex items-start gap-2.5">
                        {row.others.check ? (
                          <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                            <X className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        )}
                        <span className="font-normal text-gray-600 leading-snug">
                          {row.others.text}
                        </span>
                      </div>
                    </td>

                    {/* Freelancers Data */}
                    <td className="py-4 sm:py-5 px-6 sm:px-8 text-gray-600">
                      <div className="flex items-start gap-2.5">
                        {row.freelancer.check ? (
                          <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                            <X className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        )}
                        <span className="font-normal text-gray-600 leading-snug">
                          {row.freelancer.text}
                        </span>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
