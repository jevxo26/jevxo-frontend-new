"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function AboutUs() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasStartedCount, setHasStartedCount] = useState(false);
  const [countDeliveries, setCountDeliveries] = useState(0);
  const [countExperts, setCountExperts] = useState(0);
  const [countClients, setCountClients] = useState(0);

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

  // Intersection Observer for counting numbers
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStartedCount) {
          setHasStartedCount(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasStartedCount]);

  // Smooth counter animation
  useEffect(() => {
    if (!hasStartedCount) return;

    const duration = 2000;
    const steps = 60;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setCountDeliveries(Math.floor(easeProgress * 700));
      setCountExperts(Math.floor(easeProgress * 20));
      setCountClients(Math.floor(easeProgress * 90));

      if (step >= steps) {
        setCountDeliveries(700);
        setCountExperts(20);
        setCountClients(90);
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [hasStartedCount]);

  return (
    <section className="w-full py-24 flex justify-center border-t border-gray-100 ">
      <div className="max-w-10/12 max-auto w-full px-6 flex flex-col md:flex-row gap-16 lg:gap-32">
        {/* Left Column */}
        <div className="flex flex-col items-start gap-6 md:w-1/2 lg:w-1/3 shrink-0 mt-3">
          {/* About Us Pill */}
          <div className="bg-[#E9F0FF] text-[#1B64FF] px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide inline-flex items-center gap-2 shadow-xs border border-blue-100">
            <span className="w-2 h-2 rounded-full bg-[#1B64FF] animate-pulse" />
            About Us
          </div>

          {/* Customer Satisfaction rating */}
          <div className="flex flex-col gap-3 mt-2 bg-[#f8fafc] p-5 rounded-2xl border border-gray-100 w-full shadow-xs">
            {/* Stars (4 Gold, 1 Gray) */}
            <div className="flex items-center gap-1.5">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-[#FFC107] fill-[#FFC107]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              <svg
                className="w-5 h-5 text-gray-300 fill-gray-300"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>

            {/* Customer Satisfaction text */}
            <div className="flex flex-col">
              <span className="text-gray-900 font-bold text-base">
                Customer Satisfactions
              </span>
              <span className="text-xs text-gray-500 font-medium">
                4.9/5 Rating from 2k+ reviews
              </span>
            </div>

            {/* Avatars */}
            <div className="flex items-center -space-x-2.5 mt-1">
              <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200 relative shadow-xs">
                <Image
                  src="/images/team_1.png"
                  alt="User 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200 relative shadow-xs">
                <Image
                  src="/images/team_2.png"
                  alt="User 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200 relative shadow-xs">
                <Image
                  src="/images/team_3.png"
                  alt="User 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-[#1B64FF] text-white flex items-center justify-center font-bold text-xs relative z-10 shadow-md">
                2k
              </div>
            </div>
          </div>

          {/* Software Agency Core Highlights (Filling the red circled space) */}
          <div className="flex flex-col gap-3 w-full bg-[#f8fafc] p-5 rounded-2xl border border-gray-100">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
              Why Choose Jevxo
            </h4>

            {/* Highlight 1 */}
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-lg bg-blue-100 text-[#1B64FF] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                ✓
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900 leading-tight">
                  User-Centric Design
                </span>
                <span className="text-xs text-gray-500 font-normal mt-0.5 leading-snug">
                  Crafted for maximum engagement & conversion
                </span>
              </div>
            </div>

            {/* Highlight 2 */}
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                ⚡
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900 leading-tight">
                  Agile Development
                </span>
                <span className="text-xs text-gray-500 font-normal mt-0.5 leading-snug">
                  Fast, scalable 2-week sprint cycles
                </span>
              </div>
            </div>

            {/* Highlight 3 */}
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                🛡️
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900 leading-tight">
                  Dedicated Tech Leads
                </span>
                <span className="text-xs text-gray-500 font-normal mt-0.5 leading-snug">
                  Direct communication with senior engineers
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col md:w-3/4">
          <h3 className="text-[#1A6242] text-2xl font-medium tracking-wide mb-6">
            Welcome to Jevxo Team
          </h3>

          {/* Scroll Reveal Paragraph */}
          <p
            ref={textRef}
            className="text-3xl md:text-4xl lg:text-[30px] leading-[1.3] font-normal tracking-tight text-[#1E1E1E] max-w-4xl"
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

          {/* Stats Matching Screenshot */}
          <div
            ref={statsRef}
            className="flex flex-wrap items-center mt-20 gap-x-12 gap-y-10 lg:gap-x-24"
          >
            <div className="flex flex-col">
              <span className="text-5xl lg:text-[76px] font-light text-[#222] tracking-tight leading-none">
                {countDeliveries}+
              </span>
              <span className="text-gray-600 mt-4 font-medium text-xl">
                Project Deliveries
              </span>
            </div>

            <div className="hidden sm:block w-[1px] h-24 bg-gray-200"></div>

            <div className="flex flex-col">
              <span className="text-5xl lg:text-[76px] font-light text-[#222] tracking-tight leading-none">
                {countExperts}+
              </span>
              <span className="text-gray-600 mt-4 font-medium text-xl">
                In-House Experts
              </span>
            </div>

            <div className="hidden sm:block w-[1px] h-24 bg-gray-200"></div>

            <div className="flex flex-col">
              <span className="text-5xl lg:text-[76px] font-light text-[#222] tracking-tight leading-none">
                {countClients}%
              </span>
              <span className="text-gray-600 mt-4 font-medium text-xl">
                Satisfied Clients
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
