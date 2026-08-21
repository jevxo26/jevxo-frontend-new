"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { partnerApi, Partner } from "../../../../api/partnerApi";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_PARTNERS: Partner[] = [
  { id: "1", name: "Figma", logo: "/Jevxo/01.png", order: 1, isActive: true, createdAt: "", updatedAt: "" },
  { id: "2", name: "Next.js", logo: "/Jevxo/02.png", order: 2, isActive: true, createdAt: "", updatedAt: "" },
  { id: "3", name: "Vercel", logo: "/Jevxo/03.png", order: 3, isActive: true, createdAt: "", updatedAt: "" },
  { id: "4", name: "Stripe", logo: "/Jevxo/04.png", order: 4, isActive: true, createdAt: "", updatedAt: "" },
  { id: "5", name: "Supabase", logo: "/Jevxo/05.png", order: 5, isActive: true, createdAt: "", updatedAt: "" },
  { id: "6", name: "Tailwind CSS", logo: "/Jevxo/06.png", order: 6, isActive: true, createdAt: "", updatedAt: "" },
  { id: "7", name: "AWS", logo: "/Jevxo/07.png", order: 7, isActive: true, createdAt: "", updatedAt: "" },
  { id: "8", name: "OpenAI", logo: "/Jevxo/08.png", order: 8, isActive: true, createdAt: "", updatedAt: "" },
  { id: "9", name: "Framer", logo: "/Jevxo/09.png", order: 9, isActive: true, createdAt: "", updatedAt: "" },
  { id: "10", name: "React", logo: "/Jevxo/10.png", order: 10, isActive: true, createdAt: "", updatedAt: "" },
];

export default function Partners() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [partners, setPartners] = useState<Partner[]>(DEFAULT_PARTNERS);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const data = await partnerApi.getAllPartners();
        let fetched: Partner[] = [];
        if (Array.isArray(data)) {
          fetched = data;
        } else if (data && data.data && Array.isArray(data.data)) {
          fetched = data.data;
        }

        if (fetched && fetched.length > 0) {
          setPartners(fetched);
        } else {
          setPartners(DEFAULT_PARTNERS);
        }
      } catch (error) {
        console.error("Failed to fetch partners, using fallback data:", error);
        setPartners(DEFAULT_PARTNERS);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPartners();
  }, []);

  useEffect(() => {
    if (isLoading || partners.length === 0) return;

    const ctx = gsap.context(() => {
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
      <div className="w-full max-w-[95%] lg:max-w-6xl mx-auto px-2 sm:px-6">
        <h2 className="partner-title text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-center mb-8 md:mb-10 text-[#0f172a] tracking-tight leading-[1.15]">
          <span className="block text-[#0f172a]">Top Partners That</span>
          <span className="block mt-1 text-[#0f172a]">
            <span className="font-serif italic font-normal text-[#0f172a]">We Worked</span> <span className="font-medium text-[#0f172a]">With.</span>
          </span>
        </h2>
        
        {/* 5 columns per row layout across 2 rows */}
        <div className="partner-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 md:gap-4 lg:gap-5">
          {partners.map((partner) => (
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
