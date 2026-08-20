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

  return (
    <section ref={sectionRef} id="case-study" className="relative z-30 w-full py-12 md:py-16 bg-[#F8F9FA] flex justify-center border-t border-gray-200/80">
      <div className="w-full max-w-[95%] sm:max-w-10/12 mx-auto px-2 sm:px-6 lg:px-8 flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-10 md:mb-12 w-full">
          {/* Left Title Area */}
          <div className="flex flex-col items-start gap-3.5">
            <div className="bg-white border border-gray-300 text-[#3b82f6] px-3.5 py-1 rounded-full text-xs font-medium tracking-wide inline-flex items-center gap-1.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
              Case Studies
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-[#0f172a] tracking-tight leading-[1.15]">
              <span className="block text-[#0f172a]">Our Latest Work &amp;</span>
              <span className="block mt-1 text-[#0f172a]">
                <span className="font-serif italic font-normal text-[#0f172a]">Featured</span> <span className="font-medium text-[#0f172a]">Case Studies</span>
              </span>
            </h2>
          </div>
          
          {/* Right View All Capsule Button */}
          <div className="pt-2 md:pt-8">
            <Link
              href="#contact"
              className="inline-flex items-center bg-black hover:bg-neutral-900 text-white rounded-full pl-6 pr-1.5 py-1.5 text-sm font-medium transition-all shadow-md group"
            >
              <span className="mr-3 text-xs tracking-tight font-normal">View All</span>
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold">
                <ArrowUpRight className="w-4 h-4 text-black stroke-[2.5]" />
              </div>
            </Link>
          </div>
        </div>

        {/* 4 Cards Grid matching 100% first screenshot styling */}
        <div className="case-studies-grid grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {!isLoading && caseStudies.map((study) => (
            <div 
              key={study.id} 
              className="case-study-card bg-white rounded-[20px] p-6 sm:p-5 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-gray-200/60 flex flex-col group hover:shadow-[0_12px_45px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              
              {/* Image Banner */}
              <div className={`w-full h-[320px] sm:h-[380px] rounded-[20px] bg-[#0a0a0a] mb-7 overflow-hidden relative flex items-center justify-center shadow-md`}>
                {study.photoUrl ? (
                  <Image 
                    src={study.photoUrl} 
                    alt={study.title}
                    fill
                    className="object-cover object-center rounded-[28px]"
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
          ))}
        </div>
      </div>
    </section>
  );
}
