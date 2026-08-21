"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { statsApi } from "@/api/statsApi";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [countDeliveries, setCountDeliveries] = useState(0);
  const [countExperts, setCountExperts] = useState(0);
  const [countClients, setCountClients] = useState(0);
  const [countPartners, setCountPartners] = useState(0);

  const [targetStats, setTargetStats] = useState({
    projectDeliveries: 250,
    inHouseExperts: 45,
    satisfiedClients: 99,
    businessPartners: 18
  });

  useEffect(() => {
    statsApi.getStats().then((data) => {
      if (data) setTargetStats(data);
    }).catch(console.error);
  }, []);

  const fullText =
    "As a leading UX/UI Design & software Development Agency, we prioritize user-centric design in every project. Our commitment to established design principles and best practices ensures that our solutions are not only intuitive and user-friendly design but also aesthetically pleasing and functionally exceptional. At Jevxo, we blend creativity with cutting-edge technology to craft bespoke digital experiences that truly resonate with users, elevate brand equity, and drive sustainable business growth across global markets. We partner with ambitious brands to transform complex ideas into seamless software products.";

  const words = fullText.split(" ");

  // GSAP Bi-directional Scroll Animation for Cards, Dividers and Stats
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Mission & Vision Cards Bi-directional GSAP Timeline (Ultra-fast 0.2s blur clear)
      gsap.fromTo(
        ".about-card",
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
            trigger: ".about-cards-grid",
            start: "top 92%",
            end: "bottom 8%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Stats Items Bi-directional GSAP Timeline (Ultra-fast 0.2s blur clear)
      gsap.fromTo(
        ".about-stat",
        { opacity: 0, y: 20, filter: "blur(3px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 95%",
            end: "bottom 5%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Divider lines — grow in on the same trigger/timing as the stats,
      // so the whole row (numbers + lines) reveals together
      gsap.fromTo(
        ".about-divider",
        { scaleY: 0, opacity: 0 },
        {
          scaleY: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
          transformOrigin: "center",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 95%",
            end: "bottom 5%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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

            setCountDeliveries(Math.floor(easeProgress * targetStats.projectDeliveries));
            setCountExperts(Math.floor(easeProgress * targetStats.inHouseExperts));
            setCountClients(Math.floor(easeProgress * targetStats.satisfiedClients));
            setCountPartners(Math.floor(easeProgress * targetStats.businessPartners));

            if (step >= steps) {
              if (timer) clearInterval(timer);
              setCountDeliveries(targetStats.projectDeliveries);
              setCountExperts(targetStats.inHouseExperts);
              setCountClients(targetStats.satisfiedClients);
              setCountPartners(targetStats.businessPartners);
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
  }, [targetStats]);

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-16 lg:py-20 bg-[#F2F2F2] flex justify-center border-t border-gray-100">
      {/* Self-contained gradient border animation — doesn't depend on whatever
          "animate-border-spin" is defined as globally, so it renders the same
          smooth blue -> indigo -> pink loop everywhere, every time */}
      <style>{`
        .jevxo-gradient-border {
          background: conic-gradient(from 0deg, #3b82f6, #6366f1, #ec4899, #3b82f6);
          animation: jevxo-border-spin 6s linear infinite;
        }
        @keyframes jevxo-border-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div className="w-full max-w-[95%] lg:max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-col items-start">
        {/* About Us Pill */}
        <div className="bg-[#E9F0FF] text-[#1B64FF] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide inline-flex items-center gap-2 border border-blue-100 mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-[#1B64FF] animate-pulse" />
          About Us
        </div>

        {/* Scroll Reveal Main Paragraph — premium blur + lift reveal per word */}
        <p
          ref={textRef}
          className="text-xl  sm:text-2xl md:text-3xl lg:text-[28px] leading-[1.45] font-normal tracking-tight text-[#1E1E1E] mb-10 sm:mb-12 text-justify hyphens-auto"
        >
          {words.map((word, i) => {
            const targetProgress = (i + 1) / words.length;
            const isRevealed = scrollProgress >= targetProgress;
            return (
              <span
                key={i}
                style={{
                  transitionDelay: `${Math.min(i * 6, 200)}ms`,
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className={`inline-block mr-[0.25em] transition-all duration-500 ${
                  isRevealed
                    ? "text-[#1E1E1E] font-normal opacity-100 blur-none translate-y-0"
                    : "text-gray-400 font-normal opacity-40 blur-[3px] translate-y-1"
                }`}
              >
                {word}
              </span>
            );
          })}
        </p>

        {/* Mission & Vision Cards */}
        <div className="about-cards-grid grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full mb-12 sm:mb-16">
          {/* Our Mission Card with Animated Gradient Border */}
          <div className="about-card relative rounded-xl p-[2px] overflow-hidden shadow-sm">
            <div className="absolute inset-[-200%] jevxo-gradient-border" />
            <div className="relative bg-[#f8f9fa] rounded-xl p-7 sm:p-9 h-full flex flex-col justify-start z-10">
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#252830] mb-4 tracking-tight">
                Our Mission
              </h3>
              <p className="text-[#64748b] text-base sm:text-lg leading-relaxed font-normal">
                We blend strategy, creativity, production, media and AI technology to transform ambition into execution. From breaking silos to building scalable systems, we design growth that is both meaningful and measurable.
              </p>
            </div>
          </div>

          {/* Our Vision Card with Animated Gradient Border */}
          <div className="about-card relative rounded-xl p-[2px] overflow-hidden ">
            <div className="absolute inset-[-200%] jevxo-gradient-border" />
            <div className="relative bg-[#f8f9fa] rounded-xl p-7 sm:p-9 h-full flex flex-col justify-start z-10">
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
          <div className="about-stat flex flex-col items-center text-center relative py-2 px-4">
            <span className="text-5xl sm:text-6xl md:text-7xl font-normal text-[#1E1E1E] tracking-tight leading-none">
              {countDeliveries}+
            </span>
            <span className="text-gray-600 mt-3 font-medium text-sm sm:text-base">
              Project Deliveries
            </span>
            <div className="about-divider hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-16 sm:h-20 bg-[#3b82f6]/40" />
          </div>

          {/* Stat 2 */}
          <div className="about-stat flex flex-col items-center text-center relative py-2 px-4">
            <span className="text-5xl sm:text-6xl md:text-7xl font-normal text-[#1E1E1E] tracking-tight leading-none">
              {countExperts}+
            </span>
            <span className="text-gray-600 mt-3 font-medium text-sm sm:text-base">
              In-House Experts
            </span>
            <div className="about-divider hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-16 sm:h-20 bg-[#3b82f6]/40" />
          </div>

          {/* Stat 3 */}
          <div className="about-stat flex flex-col items-center text-center relative py-2 px-4">
            <span className="text-5xl sm:text-6xl md:text-7xl font-normal text-[#1E1E1E] tracking-tight leading-none">
              {countClients}%
            </span>
            <span className="text-gray-600 mt-3 font-medium text-sm sm:text-base">
              Satisfied Clients
            </span>
            <div className="about-divider hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-16 sm:h-20 bg-[#3b82f6]/40" />
          </div>

          {/* Stat 4 */}
          <div className="about-stat flex flex-col items-center text-center py-2 px-4">
            <span className="text-5xl sm:text-6xl md:text-7xl font-normal text-[#1E1E1E] tracking-tight leading-none">
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