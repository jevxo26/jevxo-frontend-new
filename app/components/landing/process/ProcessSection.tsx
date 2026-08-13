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
    title: "Develop",
    description: "Frontend & backend development, API integration, performance optimization.",
    icon: Code,
  },
  {
    step: "Step 06",
    title: "Launch",
    description: "Final QA testing, deployment, analytics setup, continuous iteration.",
    icon: Rocket,
  }
];

export default function ProcessSection() {
  const [currentIndex, setCurrentIndex] = useState(1); // 1-indexed to show 2/6 like screenshot
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const cardWidth = 320; // approximate card width + gap
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
    <section id="process" className="w-full py-28 bg-[#090214] text-white relative overflow-hidden flex justify-center">
      {/* Background Gradient matching screenshot: dark blue-purple at top left fading to rich purple bottom left */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 90% 80% at 0% 100%, rgba(138, 43, 226, 0.75) 0%, rgba(93, 23, 172, 0.5) 45%, transparent 85%),
            radial-gradient(ellipse 70% 60% at 100% 0%, rgba(15, 23, 42, 0.9) 0%, transparent 70%),
            #0a0319
          `
        }}
      />

      {/* Grid Overlay Lines */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '110px 110px'
        }} 
      />

      <div className="max-w-7xl w-full px-6 flex flex-col relative z-10">
        
        {/* Top Tag */}
        <div className="mb-6">
          <span className="bg-white/10 text-gray-300 px-5 py-2 rounded-full text-xs font-medium tracking-wide backdrop-blur-md border border-white/10">
            Design Process
          </span>
        </div>

        {/* Title & Description Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-semibold tracking-tight text-white leading-[1.15]">
              A Faster Way To Design <br />
              And Build <span className="font-serif italic font-normal text-gray-200">SaaS Products.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 pt-2">
            <p className="text-gray-300 text-lg leading-relaxed font-normal">
              We simplify the product creation process for SaaS companies by combining strategy, design, and development into one efficient workflow focused on faster launches.
            </p>
          </div>
        </div>

        {/* Horizontal Cards Slider */}
        <div 
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex items-center gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-8 pt-2 -mx-6 px-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {steps.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="min-w-[290px] md:min-w-[320px] snap-start bg-white text-[#0f172a] rounded-[32px] p-8 flex flex-col justify-between h-[340px] shadow-2xl shrink-0 transition-transform duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-gray-100/80 flex items-center justify-center mb-6 text-gray-900 border border-gray-200/60">
                    <IconComponent className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  {/* Step Badge */}
                  <span className="bg-gray-100 text-gray-600 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide inline-block mb-4">
                    {item.step}
                  </span>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-gray-900 tracking-tight mb-3">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-[14.5px] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Page Indicator / Controls pill matching screenshot */}
        <div className="flex justify-center mt-6">
          <div className="bg-[#1c122e]/90 border border-white/10 rounded-full px-4 py-2 flex items-center gap-4 text-xs font-mono text-gray-300 shadow-2xl backdrop-blur-md">
            <button 
              onClick={scrollPrev}
              className="hover:text-white transition-colors p-1"
              aria-label="Previous step"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="tracking-widest font-semibold">{currentIndex} / {steps.length}</span>
            <button 
              onClick={scrollNext}
              className="hover:text-white transition-colors p-1"
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
