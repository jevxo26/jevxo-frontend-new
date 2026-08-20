"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight, Code2, Sparkles, Layout, Smartphone, TrendingUp, ShieldCheck } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    tag: "UI/UX DESIGN",
    title: "UI/UX Design",
    description: "We design intuitive interfaces that make websites and apps seamless and delightful to use daily.",
    bgGradient: "bg-gradient-to-b from-[#FFF0F6] to-[#FCE7F3] border border-pink-200/60",
    tagColor: "bg-pink-100 text-pink-700 border-pink-200",
    screenBg: "bg-[#0f172a]",
    screenTitle: "Taskly : Goal Dashboard",
    screenHeading: "Client & Task Management",
    screenAccent: "from-[#8B5CF6] to-[#EC4899]"
  },
  {
    tag: "SAAS PRODUCT",
    title: "SaaS Product Design",
    description: "Architecting scalable web applications & SaaS dashboards built for high retention & growth.",
    bgGradient: "bg-gradient-to-b from-[#FFF7ED] to-[#FFEDD5] border border-amber-200/60",
    tagColor: "bg-amber-100 text-amber-800 border-amber-200",
    screenBg: "bg-[#ffffff]",
    screenTitle: "HR Dashboard & Analytics",
    screenHeading: "Streamline Operations",
    screenAccent: "from-[#F97316] to-[#FB923C]",
    isLightScreen: true
  },
  {
    tag: "BRANDING",
    title: "Logo & Branding",
    description: "Creating distinctive visual identities and brand assets that command attention and trust.",
    bgGradient: "bg-gradient-to-b from-[#ECFDF5] to-[#D1FAE5] border border-emerald-200/60",
    tagColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    screenBg: "bg-[#022c22]",
    screenTitle: "Brand Identity Guidelines",
    screenHeading: "startio",
    screenAccent: "from-[#10B981] to-[#059669]",
    isBrandLogo: true
  },
  {
    tag: "ENGINEERING",
    title: "Full Stack Dev",
    description: "Building fast, secure, scalable modern web platforms engineered for heavy traffic & performance.",
    bgGradient: "bg-gradient-to-b from-[#EFF6FF] to-[#DBEAFE] border border-blue-200/60",
    tagColor: "bg-blue-100 text-blue-800 border-blue-200",
    screenBg: "bg-[#0b1329]",
    screenTitle: "App Architecture",
    screenHeading: "Scalable Cloud Architecture",
    screenAccent: "from-[#3B82F6] to-[#06B6D4]",
    isCodeScreen: true
  },
  {
    tag: "MOBILE APPS",
    title: "Mobile App Dev",
    description: "Developing cross-platform native iOS & Android applications with fluid animations & offline support.",
    bgGradient: "bg-gradient-to-b from-[#FAF5FF] to-[#F3E8FF] border border-purple-200/60",
    tagColor: "bg-purple-100 text-purple-800 border-purple-200",
    screenBg: "bg-[#18181b]",
    screenTitle: "Mobile Experience",
    screenHeading: "Native iOS & Android",
    screenAccent: "from-[#EC4899] to-[#8B5CF6]"
  },
  {
    tag: "GROWTH & SEO",
    title: "Digital Marketing",
    description: "Data-driven organic growth and performance optimization to turn visitors into loyal customers.",
    bgGradient: "bg-gradient-to-b from-[#FEFCE8] to-[#FEF08A]/50 border border-yellow-200/60",
    tagColor: "bg-yellow-100 text-yellow-800 border-yellow-200",
    screenBg: "bg-[#111827]",
    screenTitle: "Growth Metrics",
    screenHeading: "Scale Organic Revenue",
    screenAccent: "from-[#F59E0B] to-[#EF4444]"
  }
];

export default function OurService() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="service" className="w-full py-16 md:py-24 bg-[#F8F9FA] flex justify-center border-t border-gray-100 overflow-hidden">
      <div className="max-w-10/12 mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-10 md:mb-14">
          {/* Left Title Area */}
          <div className="flex flex-col items-start gap-3.5 lg:w-1/2">
            <div className="bg-white border border-[#3b82f6]/40 text-[#3b82f6] px-3.5 py-1 rounded-full text-xs font-normal tracking-wide inline-flex items-center gap-1.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
              Our Service
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-black tracking-tight leading-[1.15]">
              <span className="font-bold block ">High-Impact Value.</span>
              <span className="block mt-1 ">
                <span className="font-serif italic font-medium text-[#000000]">World-Class</span> <span className="font-bold text-[#000000]">Quality.</span>
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

        {/* Service Cards Grid */}
        <div 
          ref={scrollContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {/* Card 1: UI/UX Design */}
          <div className="rounded-[36px] bg-[#f0f3ff] pt-8 px-6 pb-6 flex flex-col items-center text-center h-[510px] relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-2xl font-medium text-[#111827] tracking-tight mb-2">
              UI/UX Design
            </h3>
            <p className="text-[#6b7280] text-sm leading-relaxed mb-6 font-normal max-w-[260px] min-h-[40px]">
              We design intuitive interfaces that make websites and apps easy to use daily.
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
                  src="/Jevxo/01.png"
                  alt="UI/UX Design Mockup"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="w-full h-3 bg-gradient-to-b from-[#334155] to-[#1e293b] rounded-b-md shadow-md" />
              <div className="w-[85%] h-3 bg-black/20 blur-md rounded-full mt-0.5" />
            </div>
          </div>

          {/* Card 2: SaaS Product Design */}
          <div className="rounded-[36px] bg-[#fff0f4] pt-8 px-6 pb-6 flex flex-col items-center text-center h-[510px] relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-2xl font-medium text-[#111827] tracking-tight mb-2">
              SaaS Product Design
            </h3>
            <p className="text-[#6b7280] text-sm leading-relaxed mb-6 font-normal max-w-[260px] min-h-[40px]">
              We design intuitive SaaS product that make websites and apps easy to use daily.
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
                  src="/Jevxo/02.png"
                  alt="SaaS Product Design Mockup"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="w-full h-3 bg-gradient-to-b from-[#334155] to-[#1e293b] rounded-b-md shadow-md" />
              <div className="w-[85%] h-3 bg-black/20 blur-md rounded-full mt-0.5" />
            </div>
          </div>

          {/* Card 3: Logo & Branding Design */}
          <div className="rounded-[36px] bg-[#eef8f4] pt-8 px-6 pb-6 flex flex-col items-center text-center h-[510px] relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-2xl font-medium text-[#111827] tracking-tight mb-2">
              Logo &amp; Branding Design
            </h3>
            <p className="text-[#6b7280] text-sm leading-relaxed mb-6 font-normal max-w-[260px] min-h-[40px]">
              We create memorable brand visuals that express your values with clear impact.
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
                  src="/Jevxo/03.png"
                  alt="Branding Design Mockup"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="w-full h-3 bg-gradient-to-b from-[#334155] to-[#1e293b] rounded-b-md shadow-md" />
              <div className="w-[85%] h-3 bg-black/20 blur-md rounded-full mt-0.5" />
            </div>
          </div>

          {/* Card 4: Full Stack Development */}
          <div className="rounded-[36px] bg-[#f1edfb] pt-8 px-6 pb-6 flex flex-col items-center text-center h-[510px] relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-2xl font-medium text-[#111827] tracking-tight mb-2">
              Full Stack Development
            </h3>
            <p className="text-[#6b7280] text-sm leading-relaxed mb-6 font-normal max-w-[260px] min-h-[40px]">
              We build fast, secure websites that support business goals and future growth.
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
                  src="/Jevxo/04.png"
                  alt="Full Stack Development Mockup"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="w-full h-3 bg-gradient-to-b from-[#334155] to-[#1e293b] rounded-b-md shadow-md" />
              <div className="w-[85%] h-3 bg-black/20 blur-md rounded-full mt-0.5" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}