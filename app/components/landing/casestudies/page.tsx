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
        let fetched: any[] = [];
        if (Array.isArray(data)) {
          fetched = data;
        } else if (data && data.data && Array.isArray(data.data)) {
          fetched = data.data;
        }

        if (fetched && fetched.length > 0) {
          const mapped = fetched.map((c: any) => ({
            ...c,
            id: c.id || c._id,
            photoUrl: c.photoUrl || c.image || c.imageUrl,
          }));
          const active = mapped.filter(c => c.isActive !== false).sort((a, b) => (a.order || 0) - (b.order || 0));
          setCaseStudies(active.length > 0 ? active : DEFAULT_CASE_STUDIES);
        } else {
          setCaseStudies(DEFAULT_CASE_STUDIES);
        }
      } catch (error) {
        console.error("Error fetching case studies:", error);
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
      // Smooth entrance stagger reveal for cards
      gsap.fromTo(
        ".case-study-card",
        { opacity: 0, y: 50, scale: 0.96, filter: "blur(4px)" },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.2, // Fast responsive sequence
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".case-studies-grid",
            start: "top 82%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      // Staggered text animation inside cards
      gsap.fromTo(
        ".case-study-card h3, .case-study-card p",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".case-studies-grid",
            start: "top 80%",
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

        <div
          className="bg-transparent border mb-10 border-[#003FEA4D] text-[#252323] w-[134px] h-[40px] rounded-full text-[14px] font-normal leading-none tracking-normal inline-flex justify-center items-center gap-1.5 shadow-2xs"
          style={{ fontFamily: '"Helvetica Now Display", sans-serif' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
          Case Studies
        </div>
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-10 md:mb-12 w-full">
          {/* Left Title Area */}
          <div className="flex flex-col items-start gap-3.5">

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-medium text-[#0f172a] tracking-tight leading-[1.15]">
              <span className="block text-[#0f172a]">Where Vision Meets</span>
              <span className="block mt-1 text-[#0f172a]">
                <span className="font-serif italic font-normal text-[#0f172a]">Flawless</span> <span className="font-medium text-[#0f172a]">Execution.</span>
              </span>
            </h2>
          </div>

          {/* Right Action Button */}
          <div className="md:w-[42%] flex items-center md:justify-end pt-1 md:pt-6">
            <Link
              href="/casestudies"
              className="relative inline-flex items-center justify-between bg-[#0a0a0a] text-white rounded-full w-[150px] h-[50px] pl-6 pr-1.5 py-1.5 text-base font-medium transition-all duration-300 hover:shadow-lg group/btn"
            >
              <span>View All</span>
              <div className="w-[38px] h-[38px] rounded-full bg-white text-black flex items-center justify-center transition-all duration-300 group-hover/btn:rotate-45 shadow-sm">
                <ArrowUpRight className="w-5 h-5 stroke-[2]" />
              </div>
            </Link>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="case-studies-grid py-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseStudies.map((study) => {
            const photoSrc = getValidImageSrc(study.photoUrl);
            const detailUrl = `/casestudies/${study.slug || study.id}`;
            return (
              <div
                key={study.id}
                className="case-card case-study-card bg-white rounded-[24px] p-5 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100/80 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 group"
              >
                {/* Image Banner */}
                <Link href={detailUrl} className="w-full h-[320px] sm:h-[380px] rounded-[20px] bg-[#0a0a0a] mb-7 overflow-hidden relative flex items-center justify-center shadow-md block">
                  {photoSrc ? (
                    <img
                      src={photoSrc}
                      alt={study.title}
                      className="w-full h-full object-cover object-center rounded-[20px] transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="text-white">No Image</div>
                  )}
                </Link>

                {/* Card Body */}
                <div className="px-2 flex flex-col flex-1">
                  <Link href={detailUrl}>
                    <h3
                      className="text-[#090028] text-[28px] font-medium leading-[40px] tracking-normal mb-3 transition-colors duration-300 group-hover:text-[#3b82f6]"
                      style={{ fontFamily: '"Helvetica Now Display", sans-serif' }}
                    >
                      {study.title}
                    </h3>
                  </Link>
                  <p className="text-[#64748b] text-sm sm:text-base leading-relaxed mb-7 font-normal transition-opacity duration-300 group-hover:opacity-90">
                    {study.shortDescription || study.fullDescription}
                  </p>

                  {/* Action Capsule Button */}
                  <div className="mt-auto pb-1">
                    <Link
                      href={detailUrl}
                      className="relative inline-flex items-center bg-[#0f172a] hover:bg-[#3b82f6] text-white rounded-full pl-6 pr-1.5 py-1.5 text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-500/25 group/btn hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
                    >
                      <span className="mr-3 text-xs tracking-wide transition-transform duration-300 group-hover/btn:translate-x-0.5">
                        Open Project
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/10 group-hover/btn:bg-white text-white group-hover/btn:text-[#3b82f6] flex items-center justify-center font-bold transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:rotate-45 shadow-sm">
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
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
