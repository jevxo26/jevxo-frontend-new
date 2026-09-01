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
  {
    step: "Step 07",
    title: "Final Delivery",
    description: "Dev handoff, documentation, organize Figma file.",
    icon: "/DesignProcess/Final Delivery.png",
    img: "/Jevxo/07.png",
    bg: "bg-[#eef9ff]",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!sectionRef.current || !trackRef.current) return;

      const cards = gsap.utils.toArray<HTMLElement>(".process-card");
      if (cards.length === 0) return;

      const cardWidth = cards[0].offsetWidth;
      const gap = 24; // gap-6 in Tailwind = 24px
      // Exposed width of each card when stacked under the next card
      const visibleWidth = Math.max(85, Math.round(cardWidth * 0.33));
      const stepDistance = cardWidth + gap - visibleWidth;

      // Smooth Timeline for card sliding & stacking on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          pinSpacing: true,
          scrub: 2.5, // Increased scrub for smoother, floatier momentum
          start: "top top",
          end: () => `+=${(cards.length - 1) * 700}`, // Increased scroll distance to make the animation slower
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // Slide each card smoothly over the previous card one by one
      for (let i = 1; i < cards.length; i++) {
        const targetX = -i * stepDistance;
        tl.to(
          cards[i],
          {
            x: targetX,
            ease: "power2.inOut", 
            duration: 1, 
          },
          (i - 1) * 0.4 // Reduced this value so the next card starts moving much sooner, closing the visual gap
        );
      }
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
    <section
      ref={sectionRef}
      id="process"
      className="relative z-10 w-full py-12 md:py-16 flex justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(76.69% 76.69% at 48.99% 95.89%, #000921 0%, #156FFF 54.67%, #000B27 99.85%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
      }}
    >
      {/* Local keyframes for the ambient animated background + stacked-card hover priority */}
      <style>{`
        @keyframes floatBlobOne {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(50px, 35px) scale(1.18); }
        }
        @keyframes floatBlobTwo {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-45px, -35px) scale(1.12); }
        }
        @keyframes floatBlobThree {
          0%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0.22; }
          50% { transform: translate(20px, -25px) scale(1.08); opacity: 0.32; }
        }
        @keyframes gridDrift {
          0% { background-position: 0px 0px, 0px 0px; }
          100% { background-position: 60px 60px, 60px 60px; }
        }
        .process-card:hover {
          z-index: 50 !important;
        }
      `}</style>

      {/* Ambient animated glow blobs */}
      <div
        className="absolute -top-32 -left-16 w-[440px] h-[440px] rounded-full bg-[#2563eb] opacity-30 blur-[110px] pointer-events-none z-0"
        style={{ animation: "floatBlobOne 14s ease-in-out infinite" }}
      />
      <div
        className="absolute top-1/4 -right-20 w-[380px] h-[380px] rounded-full bg-[#4f46e5] opacity-25 blur-[100px] pointer-events-none z-0"
        style={{ animation: "floatBlobTwo 18s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[320px] h-[320px] rounded-full bg-[#3b82f6] opacity-20 blur-[100px] pointer-events-none z-0"
        style={{ animation: "floatBlobThree 16s ease-in-out infinite" }}
      />

      {/* Grid pattern overlay (slow drift) */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none z-0 bg-[length:60px_60px]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 1px, transparent 1px)",
          animation: "gridDrift 20s linear infinite",
        }}
      />

      <div className="relative z-10 w-full max-w-[95%] lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">

        {/* Header Area */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12 md:mb-16 w-full">
          {/* Left Title Area */}
          <div className="flex flex-col items-start gap-4 lg:w-1/2">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-medium tracking-wide inline-flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#3b82f6]" />
              Design Process
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.12]">
              A Faster Way To Design <br className="hidden sm:block" />
              And Build <span className="font-serif italic font-normal text-white">SaaS Products.</span>
            </h2>
          </div>

          {/* Right Description Text */}
          <div className="lg:w-[40%] pt-1">
            <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
              We simplify the product creation process for SaaS companies by combining strategy, design, and development into one efficient workflow focused on faster launches.
            </p>
          </div>
        </div>

        {/* Dynamic Horizontal Pinned Track — smooth 1/3 card stacking on scroll */}
        <div className="w-full py-4 ">
          <div
            ref={trackRef}
            className="flex flex-nowrap gap-6 w-max min-w-full"
          >
            {steps.map((item, index) => (
              <div
                key={index}
                style={{ zIndex: index + 1 }}
                className="process-card relative w-[270px] sm:w-[290px] lg:w-[310px] shrink-0 rounded-[28px] bg-white p-6 sm:p-7 flex flex-col items-start text-left h-[370px] sm:h-[390px] overflow-hidden will-change-transform shadow-[-12px_0_30px_rgba(0,0,0,0.15),0_20px_45px_rgba(0,0,0,0.25)] hover:-translate-y-2.5 hover:shadow-[0_30px_60px_rgba(0,0,0,0.35)] transition-shadow duration-300"
              >
                {/* Icon Box */}
                <div className="mb-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-transparent">
                    <Image
                      src={item.icon}
                      alt={`${item.title} icon`}
                      width={44}
                      height={44}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Step Badge */}
                <span 
                  className="bg-[#E1E0E24D] text-[#475569] w-[77px] h-[28px] rounded-[25px] flex items-center justify-center text-[14px] font-normal leading-[1.4] tracking-[0px] mb-3"
                  style={{ fontFamily: '"Helvetica Now Display", sans-serif' }}
                >
                  {item.step}
                </span>

                {/* Title */}
                <h3 
                  className="text-[#0f172a] text-[36px] font-medium leading-[1.2] tracking-[-1px] mb-2.5"
                  style={{ fontFamily: '"Helvetica Now Display", sans-serif' }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-[#64748b] text-[20px] font-normal leading-[1.4] tracking-[0px]"
                  style={{ fontFamily: '"Helvetica Now Display", sans-serif' }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}