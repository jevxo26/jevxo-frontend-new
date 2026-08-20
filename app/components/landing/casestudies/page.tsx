"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { casestudiesApi, Casestudy } from "../../../../api/casestudiesApi";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudies() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [caseStudies, setCaseStudies] = useState<Casestudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const data = await casestudiesApi.getAllCasestudies();
        if (Array.isArray(data)) {
          setCaseStudies(data);
        } else if (data && data.data && Array.isArray(data.data)) {
          setCaseStudies(data.data);
        } else {
          setCaseStudies(data);
        }
      } catch (error) {
        console.error("Failed to fetch case studies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  useEffect(() => {
    if (isLoading || caseStudies.length === 0) return;

    const ctx = gsap.context(() => {
      // Bi-directional GSAP Entrance Reveal for Case Study Cards (Ultra-fast 0.2s blur clear)
      gsap.fromTo(
        ".case-study-card",
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
            trigger: ".case-studies-grid",
            start: "top 88%",
            end: "bottom 12%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isLoading, caseStudies.length]);

  const getValidImageSrc = (src?: string | null): string | null => {
    if (!src || typeof src !== "string") return null;
    const trimmed = src.trim();
    if (!trimmed || trimmed === "null" || trimmed === "undefined") return null;

    if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
      try {
        new URL(trimmed);
        return trimmed;
      } catch {
        return null;
      }
    }

    if (trimmed.startsWith("/")) {
      return trimmed;
    }

    return `/${trimmed}`;
  };

  return (
    <section ref={sectionRef} id="case-study" className="relative z-30 w-full py-12 md:py-16 bg-[#F8F9FA] flex justify-center border-t border-gray-200/80">
      <div className="w-full max-w-[95%] sm:max-w-8/12 mx-auto px-2 sm:px-6 lg:px-8 flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-10 md:mb-12 w-full">
          {/* Left Title Area */}
          <div className="flex flex-col items-start gap-3.5">
            <div className="bg-white border border-gray-300 text-[#3b82f6] px-3.5 py-1 rounded-full text-xs font-medium tracking-wide inline-flex items-center gap-1.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
              Case Studies
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-[#0f172a] tracking-tight leading-[1.15]">
              <span className="block text-[#0f172a]">Where Vision Meets</span>
              <span className="block mt-1 text-[#0f172a]">
                <span className="font-serif italic font-normal text-[#0f172a]">Flawless</span> <span className="font-medium text-[#0f172a]">Execution.</span>
              </span>
            </h2>
          </div>
          
          {/* Right Description Text */}
          <div className="md:w-[42%] pt-1 md:pt-6">
            <p className="text-sm sm:text-base md:text-lg text-[#000000] font-normal leading-relaxed">
              Explore how we've empowered innovative startups and established brands to achieve remarkable digital transformation and market success.
            </p>
          </div>
        </div>

        {/* Case Studies Grid */}
        {!isLoading && caseStudies.length > 0 && (
          <div className="case-studies-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => {
              const photoSrc = getValidImageSrc(study.photoUrl);
              return (
                <div 
                  key={study.id}
                  className="case-card case-study-card bg-white rounded-[24px] p-5 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100/80 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 group"
                >
                  {/* Image Banner */}
                  <div className={`w-full h-[320px] sm:h-[380px] rounded-[20px] bg-[#0a0a0a] mb-7 overflow-hidden relative flex items-center justify-center shadow-md`}>
                    {photoSrc ? (
                      <img 
                        src={photoSrc} 
                        alt={study.title}
                        className="w-full h-full object-cover object-center rounded-[20px] transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="text-white">No Image</div>
                    )}
                  </div>
              
              {/* Card Body */}
              <div className="px-2 flex flex-col flex-1">
                <h3 className="text-[#0f172a] text-2xl sm:text-3xl font-semibold tracking-tight mb-3 leading-snug">
                  {study.title}
                </h3>
                <p className="text-[#64748b] text-sm sm:text-base leading-relaxed mb-7 font-normal">
                  {study.shortDescription || study.fullDescription}
                </p>
                
                {/* Action Capsule Button */}
                <div className="mt-auto pb-1">
                  <Link 
                    href={study.projectLink || `/casestudies/${study.slug || study.id}`}
                    className="inline-flex items-center bg-black hover:bg-neutral-900 text-white rounded-full pl-5 pr-1 py-1 text-sm font-normal transition-all shadow-sm group/btn"
                  >
                    <span className="mr-3 text-xs tracking-tight">Open Project</span>
                    <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center font-bold">
                      <ArrowUpRight className="w-3.5 h-3.5 text-black stroke-[2.5]" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      )}
    </div>
  </section>
  );
}
