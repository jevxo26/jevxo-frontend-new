"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    title: "UI/UX Design",
    description: "We design intuitive interfaces that make websites and apps easy to use daily.",
    bgClass: "bg-[#FCE8F3]", // Pink pastel
    screenBg: "bg-[#0d0f17]",
    screenTitle: "Taskly : Goal Dashboard",
    screenHeading: "Manage Clients and Tasks in One Simple Place",
    screenAccent: "from-[#8B5CF6] to-[#EC4899]"
  },
  {
    title: "SaaS Product Design",
    description: "We design intuitive SaaS product that make websites and apps easy to use daily.",
    bgClass: "bg-[#FDF0E6]", // Soft Peach
    screenBg: "bg-[#ffffff]",
    screenTitle: "HR Dashboard & Analytics",
    screenHeading: "Streamline Team Growth & Operations",
    screenAccent: "from-[#F97316] to-[#FB923C]",
    isLightScreen: true
  },
  {
    title: "Logo & Branding Design",
    description: "We create memorable brand visuals that express your values with clear impact.",
    bgClass: "bg-[#E6F4EA]", // Soft Mint Green
    screenBg: "bg-[#054026]",
    screenTitle: "Brand Identity Guidelines",
    screenHeading: "startio",
    screenAccent: "from-[#10B981] to-[#059669]",
    isBrandLogo: true
  },
  {
    title: "Full Stack Development",
    description: "We build fast, secure websites that support business goals and future growth.",
    bgClass: "bg-[#E8F0FE]", // Soft Blue / Lavender
    screenBg: "bg-[#0f172a]",
    screenTitle: "App Architecture & Codebase",
    screenHeading: "High Performance Scalable Systems",
    screenAccent: "from-[#3B82F6] to-[#06B6D4]",
    isCodeScreen: true
  },
  {
    title: "Mobile App Development",
    description: "We build native and cross-platform mobile apps for iOS and Android devices.",
    bgClass: "bg-[#FDF0F6]",
    screenBg: "bg-[#18181b]",
    screenTitle: "Mobile Experience",
    screenHeading: "Seamless iOS & Android App",
    screenAccent: "from-[#EC4899] to-[#F43F5E]"
  },
  {
    title: "Digital Marketing & SEO",
    description: "Data-driven marketing campaigns to increase traffic, lead conversion and revenue.",
    bgClass: "bg-[#FFF4ED]",
    screenBg: "bg-[#111827]",
    screenTitle: "Growth Dashboard",
    screenHeading: "Scale Organic Traffic & Sales",
    screenAccent: "from-[#F59E0B] to-[#EF4444]"
  }
];

export default function OurService() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  return (
    <section id="service" className="w-full py-24 bg-[#F8F9FA] flex justify-center border-t border-gray-100 overflow-hidden">
      <div className="max-w-10/12 max-auto w-full px-6 flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col items-start gap-5 lg:w-1/2">
            <div className="bg-[#E9F0FF] text-[#1B64FF] px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide">
              Our Service
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] text-[#111] tracking-tight leading-[1.15]">
              <span className="font-bold block">High-Impact Value.</span>
              <span className="block mt-2">
                <span className="font-serif italic font-medium">World-Class</span> <span className="font-bold">Quality.</span>
              </span>
            </h2>
          </div>
          
          <div className="lg:w-[45%] flex flex-col md:flex-row md:items-end justify-between gap-6">
            <p className="text-lg text-gray-500 font-normal leading-[1.6]">
              We're here to create digital experiences that your customers will love. From websites and apps to seamless interfaces, our creations drive stronger engagement.
            </p>

            {/* Slider Navigation Controls */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={scrollLeft}
                className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all shadow-sm active:scale-95"
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollRight}
                className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all shadow-sm active:scale-95"
                aria-label="Next slide"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Slider Track */}
        <div 
          ref={scrollContainerRef}
          className="flex items-center gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 -mx-6 px-6 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`min-w-[320px] md:min-w-[350px] lg:min-w-[370px] snap-start rounded-[40px] pt-12 px-7 pb-6 ${service.bgClass} flex flex-col items-center text-center h-[540px] relative overflow-hidden group shadow-[0_4px_25px_rgb(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_12px_35px_rgb(0,0,0,0.06)] shrink-0`}
            >
              {/* Title & Description */}
              <h3 className="text-[26px] font-semibold text-[#111] tracking-tight mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-gray-600 text-[14px] leading-relaxed mb-8 font-normal max-w-[280px]">
                {service.description}
              </p>
              
              {/* Joined Dual-Circle Action Button matching screenshot */}
              <div className="flex items-center justify-center z-10 mb-8">
                <Link 
                  href="#contact"
                  className="inline-flex items-center bg-[#282828] hover:bg-black text-white rounded-full p-1 pl-6 shadow-md transition-all group/btn"
                >
                  <span className="text-[14px] font-medium tracking-tight mr-3">View Service</span>
                  <div className="w-9 h-9 rounded-full bg-[#3a3a3a] flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all">
                    <ArrowUpRight className="w-4 h-4 text-white group-hover/btn:text-[#282828]" />
                  </div>
                </Link>
              </div>

              {/* Precise MacBook Device Container matching screenshot */}
              <div className="mt-auto w-[112%] h-[240px] relative transition-transform duration-500 ease-out group-hover:scale-[1.03] flex flex-col items-center">
                
                {/* Laptop Lid / Bezel Frame */}
                <div className={`w-[90%] h-[190px] ${service.screenBg} rounded-t-[18px] border-[5px] border-[#222327] border-b-0 shadow-2xl flex flex-col overflow-hidden relative`}>
                  {/* Laptop Web Camera dot */}
                  <div className="w-full h-3.5 bg-black/60 flex items-center justify-center px-3 gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600/60"></div>
                  </div>

                  {/* Screen Content Render */}
                  <div className="flex-1 p-4 flex flex-col justify-center items-center text-center relative overflow-hidden">
                    {service.isBrandLogo ? (
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-2xl tracking-tighter">
                          <div className="w-7 h-7 bg-emerald-400 text-black flex items-center justify-center rounded-lg font-bold text-lg">↗</div>
                          <span>startio</span>
                        </div>
                      </div>
                    ) : service.isCodeScreen ? (
                      <div className="w-full text-left font-mono text-[10px] space-y-1 text-gray-300 opacity-90">
                        <div className="text-blue-400">import <span className="text-white">React</span> from <span className="text-emerald-400">'react'</span></div>
                        <div className="text-purple-400">export default function <span className="text-yellow-300">App</span>() &#123;</div>
                        <div className="pl-3 text-gray-400">// High performance code</div>
                        <div className="pl-3 text-pink-400">return &lt;<span className="text-blue-300">Provider</span> store=&#123;store&#125;&gt;</div>
                        <div className="pl-6 text-gray-300">&lt;<span className="text-yellow-300">Dashboard</span> /&gt;</div>
                        <div className="text-purple-400">&#125;</div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <div className={`text-xs font-bold ${service.isLightScreen ? 'text-gray-800' : 'text-white'} tracking-tight`}>
                          {service.screenHeading}
                        </div>
                        <div className={`w-20 h-6 rounded-full bg-gradient-to-r ${service.screenAccent} opacity-80 shadow-md`}></div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Laptop Base / Hinge & Lip */}
                <div className="w-[100%] h-3 bg-gradient-to-b from-[#2a2b30] to-[#1a1b1e] rounded-b-lg shadow-xl relative border-t border-gray-700/50 flex justify-center">
                  <div className="w-16 h-1 bg-gray-500/40 rounded-b-md"></div>
                </div>
                {/* Soft Bottom Shadow */}
                <div className="w-[85%] h-4 bg-black/20 blur-md rounded-full mt-0.5"></div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
