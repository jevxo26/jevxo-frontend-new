"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    step: "Step 01",
    title: "Understand",
    description: "Business goals and strategy, user persona and pinpoints, competitors analysis.",
    icon: "/DesignProcess/Understand.png",
    img: "/Jevxo/01.png",
    bg: "bg-[#eef2ff]",
  },
  {
    step: "Step 02",
    title: "Define",
    description: "UX Strategy, information architecture, userflows, moodboard, visual direction.",
    icon: "/DesignProcess/Define.png",
    img: "/Jevxo/02.png",
    bg: "bg-[#fff1f2]",
  },
  {
    step: "Step 03",
    title: "Ideate",
    description: "Brainstorming, problem solution propose, sketches, wireframing.",
    icon: "/DesignProcess/Ideate.png",
    img: "/Jevxo/03.png",
    bg: "bg-[#ecfdf5]",
  },
  {
    step: "Step 04",
    title: "Design",
    description: "Brand Style guide, Final design, design system, interface design.",
    icon: "/DesignProcess/Design.png",
    img: "/Jevxo/04.png",
    bg: "bg-[#f5f3ff]",
  },
  {
    step: "Step 05",
    title: "Testing",
    description: "Interactive Prototyping, testing, feedback collection and implementation.",
    icon: "/DesignProcess/Testing.png",
    img: "/Jevxo/05.png",
    bg: "bg-[#fefce8]",
  },
  {
    step: "Step 06",
    title: "Approval",
    description: "Submission, Asset preparation, exports.",
    icon: "/DesignProcess/Approval.png",
    img: "/Jevxo/06.png",
    bg: "bg-[#f0fdf4]",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!sectionRef.current || !trackRef.current) return;

      const getScrollAmount = () => {
        const trackWidth = trackRef.current?.scrollWidth || 0;
        const containerWidth = trackRef.current?.parentElement?.offsetWidth || window.innerWidth;
        return trackWidth - containerWidth + 80;
      };

      // Entrance reveal for Process Cards from right to left
      gsap.fromTo(
        ".process-card",
        { opacity: 0, x: 45, scale: 0.96, filter: "blur(2px)" },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.45,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: trackRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      // Horizontal Scroll Pinning Animation (Same as OurService)
      gsap.to(trackRef.current, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} id="process" className="relative z-10 w-full py-6 md:py-8 bg-[#F2F2F2] flex justify-center border-t border-gray-100 overflow-hidden">
      <div className="w-full max-w-[95%] lg:max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-col">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-10 md:mb-12 w-full">
          {/* Left Title Area */}
          <div className="flex flex-col items-start gap-3.5 lg:w-1/2">
            <div className="bg-white border border-[#3b82f6]/40 text-[#3b82f6] px-3.5 py-1 rounded-full text-xs font-normal tracking-wide inline-flex items-center gap-1.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
              Design Process
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-medium text-[#0f172a] tracking-tight leading-[1.15]">
              <span className="block text-[#0f172a]">How We Turn Your</span>
              <span className="block mt-1 text-[#0f172a]">
                <span className="font-serif italic font-normal text-[#0f172a]">Vision Into</span> <span className="font-medium text-[#0f172a]">Reality.</span>
              </span>
            </h2>
          </div>
          
          {/* Right Description Text */}
          <div className="md:w-[42%] pt-1 md:pt-6">
            <p className="text-xs sm:text-sm md:text-base text-[#64748b] font-normal leading-relaxed">
              We simplify the product creation process for SaaS companies by combining strategy, design, and development into one efficient workflow focused on faster launches.
            </p>
          </div>
        </div>

        {/* Dynamic Horizontal Pinned Track matching OurService style */}
        <div className="w-full overflow-hidden">
          <div 
            ref={trackRef}
            className="flex flex-nowrap gap-6 w-max min-w-full"
          >
            {steps.map((item, index) => (
              <div 
                key={index}
                className={`process-card w-[300px] sm:w-[340px] lg:w-[360px] shrink-0 rounded-[36px] ${item.bg} pt-8 px-6 pb-6 flex flex-col items-center text-center h-[510px] relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                {/* Header Row: Icon & Step Badge */}
                <div className="flex items-center justify-between w-full mb-3 px-2">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-2xs border border-gray-200/80 p-2">
                    <Image
                      src={item.icon}
                      alt={`${item.title} icon`}
                      width={22}
                      height={22}
                      className="object-contain"
                    />
                  </div>
                  <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-gray-200/80">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-2xl font-medium text-[#111827] tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-5 font-normal max-w-[270px] min-h-[44px]">
                  {item.description}
                </p>
                
                {/* Pill Action Button */}
                <Link 
                  href="#contact"
                  className="inline-flex items-center bg-[#2d3139] hover:bg-[#1a1c21] text-white rounded-full pl-5 pr-1 py-1 text-sm font-normal transition-all shadow-sm mb-5 group"
                >
                  <span className="mr-3 text-xs tracking-tight">Explore Step</span>
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:text-black" />
                  </div>
                </Link>

                {/* Laptop Showcase Image Mockup */}
                <div className="mt-auto w-full relative flex flex-col items-center">
                  <div className="w-[94%] h-[190px] relative rounded-t-xl overflow-hidden shadow-2xl">
                    <Image
                      src={item.img}
                      alt={`${item.title} Mockup`}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="w-full h-3 bg-gradient-to-b from-[#334155] to-[#1e293b] rounded-b-md shadow-md" />
                  <div className="w-[85%] h-3 bg-black/20 blur-md rounded-full mt-0.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
