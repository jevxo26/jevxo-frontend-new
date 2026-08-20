"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutUs() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [countDeliveries, setCountDeliveries] = useState(0);
  const [countExperts, setCountExperts] = useState(0);
  const [countClients, setCountClients] = useState(0);
  const [countPartners, setCountPartners] = useState(0);

  const fullText =
    "As a leading UX/UI Design & software Development Agency, we prioritize user-centric design in every project. Our commitment to established design principles and best practices ensures that our solutions are not only intuitive and user-friendly design but also aesthetically pleasing and functionally exceptional. at Jevxo, we blend creativity with technology to craft digital experiences that truly resonate with users and drive business success.";

  const words = fullText.split(" ");

  // Scroll reveal progress calculation
  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;
      const rect = textRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.85;
      const end = windowHeight * 0.25;
      const progress = Math.min(
        1,
        Math.max(0, (start - rect.top) / (start - end))
      );

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Re-trigger counter animation whenever stats element enters viewport (top or bottom)
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (timer) clearInterval(timer);

          setCountDeliveries(0);
          setCountExperts(0);
          setCountClients(0);
          setCountPartners(0);

          const duration = 1800;
          const steps = 50;
          const intervalTime = duration / steps;
          let step = 0;

          timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setCountDeliveries(Math.floor(easeProgress * 700));
            setCountExperts(Math.floor(easeProgress * 10));
            setCountClients(Math.floor(easeProgress * 90));
            setCountPartners(Math.floor(easeProgress * 50));

            if (step >= steps) {
              setCountDeliveries(700);
              setCountExperts(10);
              setCountClients(90);
              setCountPartners(50);
              if (timer) clearInterval(timer);
            }
          }, intervalTime);
        } else {
          if (timer) clearInterval(timer);
          setCountDeliveries(0);
          setCountExperts(0);
          setCountClients(0);
          setCountPartners(0);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (timer) clearInterval(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-[#F8F9FA] flex justify-center border-t border-gray-100">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start">
        {/* About Us Pill */}
        <div className="bg-[#E9F0FF] text-[#1B64FF] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide inline-flex items-center gap-2 border border-blue-100 mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-[#1B64FF] animate-pulse" />
          About Us
        </div>

        {/* Scroll Reveal Main Paragraph */}
        <p
          ref={textRef}
          className="text-xl sm:text-2xl md:text-3xl lg:text-[28px] leading-[1.4] font-normal tracking-tight text-[#1E1E1E] mb-10 sm:mb-12"
        >
          {words.map((word, i) => {
            const targetProgress = (i + 1) / words.length;
            const isRevealed = scrollProgress >= targetProgress;
            return (
              <span
                key={i}
                className={`inline-block mr-[0.25em] transition-colors duration-300 ${
                  isRevealed
                    ? "text-[#1E1E1E] font-normal opacity-100"
                    : "text-gray-400 font-normal opacity-40"
                }`}
              >
                {word}
              </span>
            );
          })}
        </p>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full mb-12 sm:mb-16">
          {/* Our Mission Card with Animated Gradient Border */}
          <div className="relative rounded-3xl p-[2px] overflow-hidden shadow-sm">
            <div className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,#3b82f6,#6366f1,#ef4444,#3b82f6)] animate-border-spin" />
            <div className="relative bg-[#f8f9fa] rounded-[22px] p-7 sm:p-9 h-full flex flex-col justify-start z-10">
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#252830] mb-4 tracking-tight">
                Our Mission
              </h3>
              <p className="text-[#64748b] text-base sm:text-lg leading-relaxed font-normal">
                We blend strategy, creativity, production, media and AI technology to transform ambition into execution. From breaking silos to building scalable systems, we design growth that is both meaningful and measurable.
              </p>
            </div>
          </div>

          {/* Our Vision Card with Animated Gradient Border */}
          <div className="relative rounded-3xl p-[2px] overflow-hidden shadow-sm">
            <div className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,#3b82f6,#6366f1,#ef4444,#3b82f6)] animate-border-spin" />
            <div className="relative bg-[#f8f9fa] rounded-[22px] p-7 sm:p-9 h-full flex flex-col justify-start z-10">
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#252830] mb-4 tracking-tight">
                Our Vision
              </h3>
              <p className="text-[#64748b] text-base sm:text-lg leading-relaxed font-normal">
                We believe the future belongs to brands that move first, think differently, and build beyond conventions. Our vision: to shape that future by transforming how brands compete, connect, and endure, across every sectors.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 items-center justify-between w-full pt-4"
        >
          {/* Stat 1 */}
          <div className="flex flex-col items-center text-center relative py-2 px-4">
            <span className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#1E1E1E] tracking-tight leading-none">
              {countDeliveries}+
            </span>
            <span className="text-gray-600 mt-3 font-medium text-sm sm:text-base">
              Project Deliveries
            </span>
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-16 sm:h-20 bg-[#3b82f6]/40" />
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center text-center relative py-2 px-4">
            <span className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#1E1E1E] tracking-tight leading-none">
              {countExperts}+
            </span>
            <span className="text-gray-600 mt-3 font-medium text-sm sm:text-base">
              In-House Experts
            </span>
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-16 sm:h-20 bg-[#3b82f6]/40" />
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center text-center relative py-2 px-4">
            <span className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#1E1E1E] tracking-tight leading-none">
              {countClients}%
            </span>
            <span className="text-gray-600 mt-3 font-medium text-sm sm:text-base">
              Satisfied Clients
            </span>
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-16 sm:h-20 bg-[#3b82f6]/40" />
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center text-center py-2 px-4">
            <span className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#1E1E1E] tracking-tight leading-none">
              {countPartners}+
            </span>
            <span className="text-gray-600 mt-3 font-medium text-sm sm:text-base">
              Business Partner
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
