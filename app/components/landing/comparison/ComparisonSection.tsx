"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const comparisonData = [
  {
    feature: "Project Management",
    jevxo: { text: "Senior Specialist only", check: true },
    others: { text: "Junior Designers, Lose Quality", check: false },
    freelancer: { text: "Skill Varies Widely Always", check: false }
  },
  {
    feature: "Strategic Thinking",
    jevxo: { text: "Problem-solving approach", check: true },
    others: { text: "Focuses Mainly On User Research And Planning", check: false },
    freelancer: { text: "Client Handles Strategy Independently", check: false }
  },
  {
    feature: "Premium UI Design",
    jevxo: { text: "First draft within 48 hours", check: true },
    others: { text: "Usually Requires 2–3 Weeks", check: false },
    freelancer: { text: "Often Limited To One Task At A Time", check: false }
  },
  {
    feature: "Cost efficiency",
    jevxo: { text: "Fixed monthly rate with unlimited requests", check: true },
    others: { text: "Hidden Costs And Scope Creep Are Common", check: false },
    freelancer: { text: "Hourly Billing Becomes Expensive Over Time", check: true }
  },
  {
    feature: "Flexibility",
    jevxo: { text: "High flexibility with scalable support", check: true },
    others: { text: "Moderate Flexibility", check: false },
    freelancer: { text: "Depends On Workload And Availability", check: false }
  },
  {
    feature: "Communication",
    jevxo: { text: "Always on, never ghosting", check: true },
    others: { text: "Overbooked, Long Queue Times", check: false },
    freelancer: { text: "Delays During Vacations Or Busy Periods", check: false }
  },
  {
    feature: "Develop & Launch",
    jevxo: { text: "Fast-moving startup partner", check: true },
    others: { text: "Best For Enterprise Companies With Large Budgets", check: true },
    freelancer: { text: "Suitable Mainly For One-Off Small Projects", check: true }
  }
];

export default function ComparisonSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ultra-smooth GSAP Timeline for Header & Table Cells with bi-directional scroll support (top-to-bottom and bottom-to-top)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 88%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animate Header Cells first with ultra-fast 0.2s blur clear
      tl.fromTo(
        ".comparison-header-cell",
        { opacity: 0, y: 15, filter: "blur(2px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.35,
          stagger: 0.04,
          ease: "power2.out",
        }
      )
      // Animate Individual Table Cells sequentially across rows & columns
      .fromTo(
        ".comparison-cell",
        { opacity: 0, y: 12, filter: "blur(3px)", scale: 0.99 },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          scale: 1,
          duration: 0.35,
          stagger: {
            amount: 0.4,
            grid: [7, 4],
            from: "start",
            ease: "sine.out",
          },
          ease: "power2.out",
        },
        "-=0.2"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="why-choose-us" className="relative z-10 w-full py-12 md:py-16 bg-[#F8F9FA] flex justify-center border-t border-gray-100 overflow-hidden">
      <div className="w-full max-w-[95%] sm:max-w-8/12 mx-auto px-2 sm:px-6 lg:px-8 flex flex-col">
        
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12 md:mb-16 w-full">
          {/* Left Title & Badge */}
          <div className="flex flex-col items-start gap-4">
            {/* Pill Badge matching AI Powered Design style */}
            <div className="bg-white border border-[#3b82f6]/40 text-[#3b82f6] px-3.5 py-1 rounded-full text-xs font-normal tracking-wide inline-flex items-center gap-1.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
              Why Choose Us
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-[#0f172a] tracking-tight leading-[1.15]">
              <span className="block text-[#0f172a]">Why Choose Us —</span>
              <span className="block mt-1 text-[#0f172a]">
                <span className="font-serif italic font-normal text-[#0f172a]">Jevxo Team</span> <span className="font-medium text-[#0f172a]">Alternative?</span>
              </span>
            </h2>
          </div>

          {/* Right Request Free Audit CTA Button */}
          <div className="lg:pb-2">
            <Link
              href="#contact"
              className="inline-flex items-center gap-3.5 bg-gradient-to-r from-[#1658fe] to-[#004cf6] hover:from-[#004cf6] hover:to-[#1658fe] text-white pl-6 pr-2 py-2 rounded-full font-normal text-[15px] sm:text-base border border-blue-400/30 shadow-[0_8px_25px_rgba(22,88,254,0.35)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] group"
            >
              <span className="tracking-tight">Request Free Audit</span>
              <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shrink-0 shadow-md group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-5 h-5 text-black stroke-[2.2]" />
              </div>
            </Link>
          </div>
        </div>

        {/* Live Animated Gradient Border Table Outer Container */}
        <div className="relative p-[2.5px] rounded-[10px] bg-gradient-to-r from-[#2563eb] via-[#ec4899] via-[#f43f5e] via-[#3b82f6] to-[#2563eb] bg-[length:200%_200%] animate-[gradient_6s_linear_infinite] shadow-[0_12px_45px_rgba(37,99,235,0.12)] transition-all duration-300">
          
          {/* Inner Table Card */}
          <div className="w-full bg-white rounded-[14px] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[760px]">
                {/* Table Header Row */}
                <thead>
                  <tr className="border-b border-gray-200/70 text-[#0f172a]">
                    <th className="comparison-header-cell py-6 px-8 text-lg font-bold w-[25%] text-[#0f172a] border-r border-gray-100/60">Features</th>
                    <th className="comparison-header-cell py-6 px-8 text-lg font-bold w-[25%] text-center text-[#0f172a] border-r border-gray-100/60">Jevxo Team</th>
                    <th className="comparison-header-cell py-6 px-8 text-lg font-bold w-[25%] text-center text-[#0f172a] border-r border-gray-100/60">Others Agency</th>
                    <th className="comparison-header-cell py-6 px-8 text-lg font-bold w-[25%] text-center text-[#0f172a]">Freelancer</th>
                  </tr>
                </thead>

                {/* Table Body Rows */}
                <tbody className="divide-y divide-gray-100/80 text-[14.5px]">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50/60 transition-colors duration-200">
                      {/* Feature Name */}
                      <td className="comparison-cell py-5 px-8 font-bold text-[#0f172a] text-base border-r border-gray-100/60">
                        {row.feature}
                      </td>

                      {/* Jevxo Team Column */}
                      <td className="comparison-cell py-5 px-8 text-[#0f172a] border-r border-gray-100/60">
                        <div className="flex items-center gap-3 justify-start sm:justify-start">
                          <div className="w-6 h-6 rounded-full bg-[#638fff] text-white flex items-center justify-center shrink-0 shadow-xs">
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                          <span className="font-medium text-[#1e293b] text-sm sm:text-[15px]">{row.jevxo.text}</span>
                        </div>
                      </td>

                      {/* Others Agency Column */}
                      <td className="comparison-cell py-5 px-8 text-[#334155] border-r border-gray-100/60">
                        <div className="flex items-center gap-3">
                          {row.others.check ? (
                            <div className="w-6 h-6 rounded-full bg-[#638fff] text-white flex items-center justify-center shrink-0 shadow-xs">
                              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-[#ffd4d8] text-[#f43f5e] flex items-center justify-center shrink-0">
                              <X className="w-3.5 h-3.5 stroke-[2.5]" />
                            </div>
                          )}
                          <span className="text-[#334155] text-sm sm:text-[15px] font-normal">{row.others.text}</span>
                        </div>
                      </td>

                      {/* Freelancer Column */}
                      <td className="comparison-cell py-5 px-8 text-[#334155]">
                        <div className="flex items-center gap-3">
                          {row.freelancer.check ? (
                            <div className="w-6 h-6 rounded-full bg-[#638fff] text-white flex items-center justify-center shrink-0 shadow-xs">
                              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-[#ffd4d8] text-[#f43f5e] flex items-center justify-center shrink-0">
                              <X className="w-3.5 h-3.5 stroke-[2.5]" />
                            </div>
                          )}
                          <span className="text-[#334155] text-sm sm:text-[15px] font-normal">{row.freelancer.text}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
