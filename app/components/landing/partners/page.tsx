"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { partnerApi, Partner } from "../../../../api/partnerApi";

gsap.registerPlugin(ScrollTrigger);

export default function Partners() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const data = await partnerApi.getAllPartners();
        // Assume API returns an array, or data.data
        if (Array.isArray(data)) {
          setPartners(data);
        } else if (data && data.data && Array.isArray(data.data)) {
          setPartners(data.data);
        } else {
          setPartners(data); // fallback
        }
      } catch (error) {
        console.error("Failed to fetch partners", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPartners();
  }, []);

  useEffect(() => {
    if (isLoading || partners.length === 0) return;

    const ctx = gsap.context(() => {
      // Ultra-smooth professional GSAP timeline for title & cards with bi-directional scroll support (top-to-bottom and bottom-to-top)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.fromTo(
        ".partner-title",
        { opacity: 0, y: 24, filter: "blur(1px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power4.out",
        }
      ).fromTo(
        ".partner-card",
        { opacity: 0, y: 30, scale: 0.96, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.85,
          stagger: {
            amount: 0.6,
            grid: [2, 5],
            from: "start",
            ease: "sine.out",
          },
          ease: "power3.out",
        },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isLoading, partners.length]);

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-[#F8F9FA] flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-[95%] sm:max-w-10/12 mx-auto px-2 sm:px-6">
        <h2 className="partner-title text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-center mb-8 md:mb-10 text-[#0f172a] tracking-tight leading-[1.15]">
          <span className="block text-[#0f172a]">Top Partners That</span>
          <span className="block mt-1 text-[#0f172a]">
            <span className="font-serif italic font-normal text-[#0f172a]">We Worked</span> <span className="font-medium text-[#0f172a]">With.</span>
          </span>
        </h2>
        
        {/* 5 columns per row layout across 2 rows */}
        <div className="partner-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 md:gap-4 lg:gap-5">
          {!isLoading && partners.map((partner) => (
            <div 
              key={partner.id}
              className="partner-card bg-white rounded-xl sm:rounded-2xl h-20 sm:h-24 flex items-center justify-center p-3 sm:p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_6px_25px_rgb(0,0,0,0.06)] transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {partner.logo ? (
                  <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain" />
                ) : (
                  <span className="font-bold text-gray-800 text-sm">{partner.name}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

