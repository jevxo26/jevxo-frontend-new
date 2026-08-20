"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    tag: "UI/UX DESIGN",
    title: "UI/UX Design",
    description: "We design intuitive interfaces that make websites and apps seamless and delightful to use daily.",
    bg: "bg-[#f0f3ff]",
    img: "/Jevxo/01.png",
  },
  {
    tag: "SAAS PRODUCT",
    title: "SaaS Product Design",
    description: "Architecting scalable web applications & SaaS dashboards built for high retention & growth.",
    bg: "bg-[#fff0f4]",
    img: "/Jevxo/02.png",
  },
  {
    tag: "BRANDING",
    title: "Logo & Branding Design",
    description: "Creating distinctive visual identities and brand assets that command attention and trust.",
    bg: "bg-[#eef8f4]",
    img: "/Jevxo/03.png",
  },
  {
    tag: "ENGINEERING",
    title: "Full Stack Development",
    description: "Building fast, secure, scalable modern web platforms engineered for heavy traffic & performance.",
    bg: "bg-[#f1edfb]",
    img: "/Jevxo/04.png",
  },
  {
    tag: "MOBILE APPS",
    title: "Mobile App Development",
    description: "Developing cross-platform native iOS & Android applications with fluid animations & offline support.",
    bg: "bg-[#fefce8]",
    img: "/Jevxo/05.png",
  },
  {
    tag: "AI & AUTOMATION",
    title: "AI & Automation Tools",
    description: "Integrating intelligent workflow automations and custom generative AI models into products.",
    bg: "bg-[#f0fdf4]",
    img: "/Jevxo/06.png",
  },
  {
    tag: "CLOUD INFRASTRUCTURE",
    title: "Cloud & DevOps Architecture",
    description: "Deploying high-availability infrastructure with 99.9% uptime and enterprise security compliance.",
    bg: "bg-[#fdf2f8]",
    img: "/Jevxo/07.png",
  },
  {
    tag: "GROWTH & MARKETING",
    title: "Digital Marketing & SEO",
    description: "Data-driven organic growth strategies to maximize conversions, revenue, and customer loyalty.",
    bg: "bg-[#eff6ff]",
    img: "/Jevxo/08.png",
  },
];

export default function OurService() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!sectionRef.current || !trackRef.current) return;

      const getScrollAmount = () => {
        const trackWidth = trackRef.current?.scrollWidth || 0;
        const containerWidth = trackRef.current?.parentElement?.offsetWidth || window.innerWidth;
        return trackWidth - containerWidth + 80;
      };

      gsap.to(trackRef.current, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
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
      id="service" 
      className="relative z-10 w-full py-12 md:py-16 bg-[#F8F9FA] flex flex-col justify-center items-center border-t border-gray-100 overflow-hidden"
    >
      <div className="max-w-10/12 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-10 md:mb-12">
          {/* Left Title Area */}
          <div className="flex flex-col items-start gap-3.5 lg:w-1/2">
            <div className="bg-white border border-[#3b82f6]/40 text-[#3b82f6] px-3.5 py-1 rounded-full text-xs font-normal tracking-wide inline-flex items-center gap-1.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
              Our Service
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-[#0f172a] tracking-tight leading-[1.15]">
              <span className="block text-[#0f172a]">High-Impact Value.</span>
              <span className="block mt-1 text-[#0f172a]">
                <span className="font-serif italic font-normal text-[#0f172a]">World-Class</span> <span className="font-medium text-[#0f172a]">Quality.</span>
              </span>
            </h2>
          </div>
          
          {/* Right Description Text */}
          <div className="lg:w-[46%] pt-1 lg:pt-6">
            <p className="text-sm sm:text-base md:text-lg text-[#000000] font-normal leading-relaxed">
              We're here to create digital experiences that your customers will love. from websites and apps to seamless interfaces, our creations drive stronger engagement and foster lasting loyalty.
            </p>
          </div>
        </div>

        {/* Dynamic Horizontal Pinned Track clipped within max-w-9/12 bounds */}
        <div className="w-full overflow-hidden">
          <div 
            ref={trackRef}
            className="flex flex-nowrap lg:flex-nowrap gap-6 w-max lg:w-max min-w-full"
          >
            {services.map((service, index) => (
              <div 
                key={index}
                className={`w-[300px] sm:w-[340px] lg:w-[360px] shrink-0 rounded-[36px] ${service.bg} pt-8 px-6 pb-6 flex flex-col items-center text-center h-[510px] relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                <h3 className="text-2xl font-medium text-[#111827] tracking-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-6 font-normal max-w-[260px] min-h-[40px]">
                  {service.description}
                </p>
                
                {/* Pill Action Button */}
                <Link 
                  href="#contact"
                  className="inline-flex items-center bg-[#2d3139] hover:bg-[#1a1c21] text-white rounded-full pl-5 pr-1 py-1 text-sm font-normal transition-all shadow-sm mb-6 group"
                >
                  <span className="mr-3 text-xs tracking-tight">View Service</span>
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:text-black" />
                  </div>
                </Link>

                {/* Laptop Mockup */}
                <div className="mt-auto w-full relative flex flex-col items-center">
                  <div className="w-[94%] h-[200px] relative rounded-t-xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.img}
                      alt={`${service.title} Mockup`}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="w-full h-3 bg-gradient-to-b from-[#334155] to-[#1e293b] rounded-b-md shadow-md" />
                  <div className="w-[85%] h-3 bg-black/20 blur-md rounded-full mt-0.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}