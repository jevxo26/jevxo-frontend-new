"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AiSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Bi-directional GSAP Entrance Reveal for AI Powered Design Cards (Ultra-fast 0.2s blur clear)
      gsap.fromTo(
        ".ai-card",
        { opacity: 0, y: 25, scale: 0.98, filter: "blur(2px)" },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="ai-section" className="relative z-10 w-full py-6 md:py-8 bg-[#F2F2F2] flex justify-center border-t border-gray-100 overflow-hidden">
      <div className="w-full max-w-[95%] lg:max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-col">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-10 md:mb-12 w-full">
          {/* Left Title Area */}
          <div className="flex flex-col items-start gap-3.5 lg:w-1/2">
            <div className="bg-white border border-[#3b82f6]/40 text-[#3b82f6] px-3.5 py-1 rounded-full text-xs font-normal tracking-wide inline-flex items-center gap-1.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
              AI Powered Design
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-medium text-[#0f172a] tracking-tight leading-[1.15]">
              <span className="block text-[#0f172a]">Supercharge Workflows With</span>
              <span className="block mt-1 text-[#0f172a]">
                <span className="font-serif italic font-normal text-[#0f172a]">Next-Gen</span> <span className="font-medium text-[#0f172a]">AI Solutions.</span>
              </span>
            </h2>
          </div>
          
          {/* Right Description Text */}
          <div className="md:w-[42%] pt-1 md:pt-6">
            <p className="text-xs sm:text-sm md:text-base text-[#64748b] font-normal leading-relaxed">
              From wireframes to launch, we blend AI tools with strategy to deliver faster, sharper, and data-led design results.
            </p>
          </div>
        </div>

        {/* Top 2 Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-15  mb-8 md:mb-10 w-full">
          
          {/* Card 1: UX Copy That Converts */}
          <div className="ai-card bg-gradient-to-b from-[#FFD8C2] via-[#FFEADB] to-[#FFF6F0] rounded-[22px] p-6 md:p-7 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-orange-200/50 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(249,115,22,0.08)] hover:-translate-y-1 min-h-[380px]">
            {/* Top 8 Dark AI Tool Icons Grid - Balanced Tiles */}
            <div className="w-full flex justify-center pt-1 pb-4 my-auto">
              <div className="grid grid-cols-4 gap-2.5 sm:gap-3 max-w-[320px]">
                <div className="w-[62px] h-[62px] sm:w-[68px] sm:h-[68px] rounded-[16px] bg-[#080d1a] flex items-center justify-center p-2.5 shadow-[0_6px_18px_rgba(0,0,0,0.18)] border border-gray-800/80 hover:scale-105 transition-transform duration-300">
                  <Image src="/AIPoweredDesign/chgpt.png" alt="ChatGPT" width={38} height={38} className="object-contain" />
                </div>
                <div className="w-[62px] h-[62px] sm:w-[68px] sm:h-[68px] rounded-[16px] bg-[#080d1a] flex items-center justify-center p-2.5 shadow-[0_6px_18px_rgba(0,0,0,0.18)] border border-gray-800/80 hover:scale-105 transition-transform duration-300">
                  <Image src="/AIPoweredDesign/junery.png" alt="Midjourney" width={38} height={38} className="object-contain" />
                </div>
                <div className="w-[62px] h-[62px] sm:w-[68px] sm:h-[68px] rounded-[16px] bg-[#080d1a] flex items-center justify-center p-2.5 shadow-[0_6px_18px_rgba(0,0,0,0.18)] border border-gray-800/80 hover:scale-105 transition-transform duration-300">
                  <Image src="/AIPoweredDesign/figma.png" alt="Figma" width={38} height={38} className="object-contain" />
                </div>
                <div className="w-[62px] h-[62px] sm:w-[68px] sm:h-[68px] rounded-[16px] bg-[#080d1a] flex items-center justify-center p-2.5 shadow-[0_6px_18px_rgba(0,0,0,0.18)] border border-gray-800/80 hover:scale-105 transition-transform duration-300">
                  <Image src="/AIPoweredDesign/figma 2.png" alt="Miro" width={38} height={38} className="object-contain" />
                </div>
                <div className="w-[62px] h-[62px] sm:w-[68px] sm:h-[68px] rounded-[16px] bg-[#080d1a] flex items-center justify-center p-2.5 shadow-[0_6px_18px_rgba(0,0,0,0.18)] border border-gray-800/80 hover:scale-105 transition-transform duration-300">
                  <Image src="/AIPoweredDesign/cloud.png" alt="Claude" width={38} height={38} className="object-contain" />
                </div>
                <div className="w-[62px] h-[62px] sm:w-[68px] sm:h-[68px] rounded-[16px] bg-[#080d1a] flex items-center justify-center p-2.5 shadow-[0_6px_18px_rgba(0,0,0,0.18)] border border-gray-800/80 hover:scale-105 transition-transform duration-300">
                  <Image src="/AIPoweredDesign/loveable 2.png" alt="Framer" width={38} height={38} className="object-contain" />
                </div>
                <div className="w-[62px] h-[62px] sm:w-[68px] sm:h-[68px] rounded-[16px] bg-[#080d1a] flex items-center justify-center p-2.5 shadow-[0_6px_18px_rgba(0,0,0,0.18)] border border-gray-800/80 hover:scale-105 transition-transform duration-300">
                  <Image src="/AIPoweredDesign/cloud2.png" alt="Bolt" width={38} height={38} className="object-contain" />
                </div>
                <div className="w-[62px] h-[62px] sm:w-[68px] sm:h-[68px] rounded-[16px] bg-[#080d1a] flex items-center justify-center p-2.5 shadow-[0_6px_18px_rgba(0,0,0,0.18)] border border-gray-800/80 hover:scale-105 transition-transform duration-300">
                  <Image src="/AIPoweredDesign/yellow.png" alt="Firefly" width={38} height={38} className="object-contain" />
                </div>
              </div>
            </div>

            <div className="pt-1">
              <h3 className="text-xl sm:text-2xl font-medium text-[#0a0c16] tracking-tight mb-2 leading-tight">
                UX Copy That Converts
              </h3>
              <p className="text-[#475569] text-xs sm:text-sm leading-relaxed max-w-md font-normal">
                Generate strategic UX copy, CTAs, and messaging designed to improve clarity and engagement.
              </p>
            </div>
          </div>

          {/* Card 2: AI Visual Direction */}
          <div className="ai-card bg-gradient-to-b from-[#FCD6FE] via-[#FAEEFF] to-[#FFF8FE] rounded-[22px] p-6 md:p-7 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-purple-200/50 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(236,72,153,0.08)] hover:-translate-y-1 min-h-[380px]">
            {/* Centered Rows Container */}
            <div className="w-full flex justify-center items-center my-auto pt-2 pb-4">
              <div className="flex flex-col space-y-2.5 w-full max-w-[340px]">
                {/* Row 1 */}
                <div className="bg-white p-3 rounded-[16px] border border-gray-100/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex items-center gap-3 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center p-2 border border-gray-100 shrink-0">
                    <Image src="/AIPoweredDesign/figma.png" alt="Figma" width={28} height={28} className="object-contain" />
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <div className="text-[#0a0c16] font-medium text-xs sm:text-sm tracking-tight">Figma Make - Wireframe</div>
                    <div className="w-36 sm:w-44 h-1.5 bg-gray-100 rounded-full" />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="bg-white p-3 rounded-[16px] border border-gray-100/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex items-center gap-3 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center p-2 border border-gray-100 shrink-0">
                    <Image src="/AIPoweredDesign/junery.png" alt="Claude" width={28} height={28} className="object-contain" />
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <div className="text-[#0a0c16] font-medium text-xs sm:text-sm tracking-tight">Claude - Research</div>
                    <div className="w-40 sm:w-48 h-1.5 bg-gray-100 rounded-full" />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="bg-white p-3 rounded-[16px] border border-gray-100/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex items-center gap-3 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center p-2 border border-gray-100 shrink-0">
                    <Image src="/AIPoweredDesign/loveable 2.png" alt="Loveable" width={28} height={28} className="object-contain" />
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <div className="text-[#0a0c16] font-medium text-xs sm:text-sm tracking-tight">Loveable - Ideation</div>
                    <div className="w-36 sm:w-44 h-1.5 bg-gray-100 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-1">
              <h3 className="text-xl sm:text-2xl font-medium text-[#0a0c16] tracking-tight mb-2 leading-tight">
                AI Visual Direction
              </h3>
              <p className="text-[#475569] text-xs sm:text-sm leading-relaxed max-w-md font-normal">
                Create faster visual concepts, UI inspirations, &amp; brand-ready creative assets with AI workflows.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom 3 Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-13 w-full">
          
          {/* Bottom Card 1: Smarter UX Insights */}
          <div className="ai-card bg-gradient-to-b from-[#DCDCFE] via-[#ECECFF] to-white rounded-[22px] p-6 md:p-7 flex flex-col justify-between h-[380px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-indigo-100/80 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(99,102,241,0.08)] hover:-translate-y-1">
            {/* Centered White Row Badges */}
            <div className="w-full flex justify-center items-center my-auto pt-1 pb-3">
              <div className="flex flex-col space-y-2.5 w-full">
                {/* Row 1 */}
                <div className="bg-white p-3 rounded-[16px] border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex items-center gap-3 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#f0f4ff] to-[#e6edff] flex items-center justify-center p-1.5 border border-blue-100/60 shrink-0">
                    <Image src="/AIPoweredDesign/data.png" alt="Data Insights" width={24} height={24} className="object-contain" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="text-[#0a0c16] font-medium text-xs sm:text-sm tracking-tight">Data Insights</div>
                    <div className="w-24 sm:w-32 h-1 bg-gray-100/90 rounded-full" />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="bg-white p-3 rounded-[16px] border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex items-center gap-3 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#fdf0f5] to-[#fce4ee] flex items-center justify-center p-1.5 border border-pink-100/60 shrink-0">
                    <Image src="/AIPoweredDesign/sketh.png" alt="Sketch & Wireframe" width={24} height={24} className="object-contain" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="text-[#0a0c16] font-medium text-xs sm:text-sm tracking-tight">Sketch &amp; Wireframe</div>
                    <div className="w-20 sm:w-28 h-1 bg-gray-100/90 rounded-full" />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="bg-white p-3 rounded-[16px] border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex items-center gap-3 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#eefbf6] to-[#dcf6ec] flex items-center justify-center p-1.5 border border-emerald-100/60 shrink-0">
                    <Image src="/AIPoweredDesign/cloud2.png" alt="Journey Analysis" width={24} height={24} className="object-contain" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="text-[#0a0c16] font-medium text-xs sm:text-sm tracking-tight">Journey Analysis</div>
                    <div className="w-28 sm:w-36 h-1 bg-gray-100/90 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-medium text-[#0a0c16] tracking-tight mb-2 leading-tight">
                Smarter UX Insights
              </h3>
              <p className="text-[#475569] text-xs sm:text-sm leading-relaxed font-normal">
                Use AI-powered analytics and heatmaps to understand user behavior before launch.
              </p>
            </div>
          </div>

          {/* Bottom Card 2: Faster Wireframing */}
          <div className="ai-card bg-gradient-to-b from-[#FFEBD9] via-[#FFF3E8] to-[#FFF9F2] rounded-[22px] p-6 md:p-7 flex flex-col justify-between h-[380px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-amber-200/50 relative overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(245,158,11,0.08)] hover:-translate-y-1">
            {/* Centered Mockup Image */}
            <div className="w-full flex justify-center items-center my-auto pt-1 pb-3">
              <Image 
                src="/AIPoweredDesign/faster.png" 
                alt="Faster Wireframing Mockups" 
                width={280} 
                height={180} 
                className="object-contain"
              />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-medium text-[#0a0c16] tracking-tight mb-2 leading-tight">
                Faster Wireframing
              </h3>
              <p className="text-[#475569] text-xs sm:text-sm leading-relaxed font-normal">
                Rapidly transform ideas into wireframes and structured product flows with AI-assisted systems.
              </p>
            </div>
          </div>

          {/* Bottom Card 3: AI-Assisted Launches */}
          <div className="ai-card bg-gradient-to-b from-[#FFD5DC] via-[#FFEBEF] to-[#FFF5F7] rounded-[22px] p-6 md:p-7 flex flex-col justify-between h-[380px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-rose-200/50 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(244,63,94,0.08)] hover:-translate-y-1">
            {/* Centered Graphic */}
            <div className="w-full flex justify-center items-center my-auto pt-1 pb-3">
              <Image 
                src="/AIPoweredDesign/Group 1707480850.png" 
                alt="AI-Assisted Launches Graphic" 
                width={300} 
                height={130} 
                className="object-contain"
              />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-medium text-[#0a0c16] tracking-tight mb-2 leading-tight">
                AI-Assisted Launches
              </h3>
              <p className="text-[#475569] text-xs sm:text-sm leading-relaxed font-normal">
                Reduce repetitive tasks and launch digital products more efficiently with faster execution workflows.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
