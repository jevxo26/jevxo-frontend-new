"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Lightbulb, Target, GitCommit, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    step: "Step 01",
    title: "Understand",
    description: "Business goals and strategies, persona and pinpoints, competitors analysis.",
    icon: Lightbulb,
  },
  {
    step: "Step 02",
    title: "Define",
    description: "UX Strategy, information architecture, userflows, moodboard, visual direction.",
    icon: Target,
  },
  {
    step: "Step 03",
    title: "Ideate",
    description: "Brainstorming, problem solution propose, sketching, wireframing.",
    icon: GitCommit,
  },
  {
    step: "Step 04",
    title: "Design",
    description: "Brand Style guide, UI design, design system, user interface design.",
    icon: PenTool,
  },
  {
    step: "Step 05",
    title: "Testing",
    description: "Interactive Prototyping, usability testing, feedback collection, and implementation.",
    icon: Code,
  },
  {
    step: "Step 06",
    title: "Approval",
    description: "Submission for approval, Asset preparation, and final exports.",
    icon: Rocket,
  }
];

export default function ProcessSection() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const cardWidth = 300;
      const newIndex = Math.min(
        steps.length,
        Math.max(1, Math.round(scrollLeft / cardWidth) + 1)
      );
      setCurrentIndex(newIndex);
    }
  };

  const scrollPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section id="process" className="relative z-10 w-full py-16 md:py-24 bg-[#F8F9FA] flex justify-center border-t border-gray-100 overflow-hidden">
      <div className="max-w-10/12 mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-12 md:mb-16 w-full">
          {/* Left Title Area */}
          <div className="flex flex-col items-start gap-4 lg:w-1/2">
            <div className="bg-white border border-[#3b82f6]/40 text-[#3b82f6] px-3.5 py-1 rounded-full text-xs font-normal tracking-wide inline-flex items-center gap-1.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
              Design Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-[#0f172a] tracking-tight leading-[1.15]">
              <span className="font-bold block text-[#0f172a]">A Faster Way To Design</span>
              <span className="block mt-1 text-[#0f172a]">
                And Build <span className="font-serif italic font-medium text-[#0f172a]">SaaS Products.</span>
              </span>
            </h2>
          </div>
          
          {/* Right Description */}
          <div className="lg:w-[46%] pt-1 lg:pt-8">
            <p className="text-sm sm:text-base md:text-lg text-[#64748b] font-normal leading-relaxed">
              We simplify the product creation process for SaaS companies by combining strategy, design, and development into one efficient workflow focused on faster launches.
            </p>
          </div>
        </div>

        {/* Horizontal Cards Row */}
        <div 
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex items-center gap-5 sm:gap-6 overflow-x-auto scrollbar-none pb-6 pt-4 -mx-4 px-4 sm:-mx-6 sm:px-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {steps.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="w-[280px] sm:w-[310px] lg:w-[320px] shrink-0 bg-white rounded-[32px] p-7 flex flex-col justify-between h-[360px] border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:scale-[1.04] hover:-translate-y-2 hover:shadow-[0_16px_36px_rgba(59,130,246,0.12)] hover:border-[#3b82f6]/50 group"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 text-[#0f172a] border border-gray-100 group-hover:bg-[#3b82f6]/10 group-hover:text-[#3b82f6] group-hover:border-[#3b82f6]/30 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  {/* Step Badge */}
                  <span className="bg-gray-100/80 text-[#64748b] px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide inline-block mb-4 group-hover:bg-[#3b82f6]/10 group-hover:text-[#3b82f6] transition-colors duration-300">
                    {item.step}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-[#0f172a] tracking-tight mb-3 group-hover:text-[#3b82f6] transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[#64748b] text-sm leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Pagination Controls */}
        <div className="flex justify-center mt-6">
          <div className="bg-white border border-gray-200/80 rounded-full px-4 py-1.5 flex items-center gap-4 text-xs font-medium text-[#64748b] shadow-sm">
            <button 
              onClick={scrollPrev}
              className="hover:text-black transition-colors p-1"
              aria-label="Previous step"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="tracking-widest font-semibold text-[#0f172a]">{currentIndex} / {steps.length}</span>
            <button 
              onClick={scrollNext}
              className="hover:text-black transition-colors p-1"
              aria-label="Next step"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
