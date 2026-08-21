"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { casestudiesApi, Casestudy } from "../../../../api/casestudiesApi";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_CASE_STUDIES: Casestudy[] = [
  {
    id: "1",
    title: "AI Workflow Automation Platform",
    shortDescription: "A next-gen SaaS workflow builder powered by LLM orchestration for enterprise teams.",
    fullDescription: "A next-gen SaaS workflow builder powered by LLM orchestration for enterprise teams.",
    photoUrl: "/Jevxo/01.png",
    slug: "ai-workflow-automation",
    projectLink: "#contact",
    order: 1,
    isActive: true,
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "2",
    title: "Fintech Banking & Analytics App",
    shortDescription: "Seamless neo-banking interface with real-time portfolio tracking & instant payment gateway.",
    fullDescription: "Seamless neo-banking interface with real-time portfolio tracking & instant payment gateway.",
    photoUrl: "/Jevxo/02.png",
    slug: "fintech-banking-analytics",
    projectLink: "#contact",
    order: 2,
    isActive: true,
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "3",
    title: "Luxury E-Commerce Storefront",
    shortDescription: "High-converting headless Next.js design system and storefront for global retail brand.",
    fullDescription: "High-converting headless Next.js design system and storefront for global retail brand.",
    photoUrl: "/Jevxo/03.png",
    slug: "luxury-ecommerce-storefront",
    projectLink: "#contact",
    order: 3,
    isActive: true,
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "4",
    title: "Healthcare Diagnostics Portal",
    shortDescription: "HIPAA-compliant telemedicine portal for online appointments and instant patient diagnostics.",
    fullDescription: "HIPAA-compliant telemedicine portal for online appointments and instant patient diagnostics.",
    photoUrl: "/Jevxo/04.png",
    slug: "healthcare-diagnostics-portal",
    projectLink: "#contact",
    order: 4,
    isActive: true,
    createdAt: "",
    updatedAt: "",
  },
];

export default function CaseStudies() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [caseStudies, setCaseStudies] = useState<Casestudy[]>(DEFAULT_CASE_STUDIES);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const data = await casestudiesApi.getAllCasestudies();
        let fetched: Casestudy[] = [];
        if (Array.isArray(data)) {
          fetched = data;
        } else if (data && data.data && Array.isArray(data.data)) {
          fetched = data.data;
        }

        if (fetched && fetched.length > 0) {
          setCaseStudies(fetched);
        } else {
          setCaseStudies(DEFAULT_CASE_STUDIES);
        }
      } catch (error) {
        console.error("Failed to fetch case studies, using fallback data:", error);
        setCaseStudies(DEFAULT_CASE_STUDIES);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  useEffect(() => {
    if (isLoading || caseStudies.length === 0) return;

    const ctx = gsap.context(() => {
      // Ultra-smooth Staggered Fade Up 1 by 1 animation (card 1, 2, 3, 4 with 1s gap)
      gsap.fromTo(
        ".case-study-card",
        { opacity: 0, y: 40, scale: 0.97, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.1,
          stagger: 1.0, // 1-second interval sequence
          ease: "power3.out", // Extra silky smooth deceleration
          scrollTrigger: {
            trigger: ".case-studies-grid",
            start: "top 82%",
            toggleActions: "play none none none",
            once: true,
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
    <section ref={sectionRef} id="case-study" className="relative z-30 w-full py-6 md:py-8 bg-[#F2F2F2] flex justify-center border-t border-gray-200/80">
      <div className="w-full max-w-[95%] lg:max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-10 md:mb-12 w-full">
          {/* Left Title Area */}
          <div className="flex flex-col items-start gap-3.5">
            <div className="bg-white border border-gray-300 text-[#3b82f6] px-3.5 py-1 rounded-full text-xs font-medium tracking-wide inline-flex items-center gap-1.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
              Case Studies
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-medium text-[#0f172a] tracking-tight leading-[1.15]">
              <span className="block text-[#0f172a]">Where Vision Meets</span>
              <span className="block mt-1 text-[#0f172a]">
                <span className="font-serif italic font-normal text-[#0f172a]">Flawless</span> <span className="font-medium text-[#0f172a]">Execution.</span>
              </span>
            </h2>
          </div>
          
          {/* Right Description Text */}
          <div className="md:w-[42%] pt-1 md:pt-6">
            <p className="text-xs sm:text-sm md:text-base text-[#64748b] font-normal leading-relaxed">
              Explore how we've empowered innovative startups and established brands to achieve remarkable digital transformation and market success.
            </p>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="case-studies-grid grid grid-cols-1 md:grid-cols-2 gap-8">
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
      </div>
    </section>
  );
}
