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
    <section id="service" className="w-full py-12 md:py-16 lg:py-20 bg-[#F8F9FA] flex justify-center border-t border-gray-100 overflow-hidden">
      <div className="max-w-10/12 mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 md:mb-10">
          <div className="flex flex-col items-start gap-3.5 lg:w-1/2">
            <div className="bg-[#E9F0FF] text-[#1B64FF] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-blue-100 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1B64FF] animate-pulse" />
              Our Services
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#0F172A] tracking-tight leading-[1.2]">
              <span className="font-bold block">High-Impact Value.</span>
              <span className="block mt-1">
                <span className="font-serif italic font-medium text-blue-600">World-Class</span> <span className="font-bold">Quality.</span>
              </span>
            </h2>
          </div>
          
          <div className="lg:w-[45%] flex flex-col md:flex-row md:items-end justify-between gap-4">
            <p className="text-xs sm:text-sm md:text-base text-gray-500 font-normal leading-relaxed">
              We engineer digital products that elevate your brand. From web platforms to seamless UI/UX design, our solutions drive measurable impact.
            </p>

            {/* Slider Controls */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                onClick={scrollLeft}
                className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-slate-700 hover:bg-[#0F172A] hover:text-white hover:border-[#0F172A] transition-all shadow-sm active:scale-95"
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollRight}
                className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-slate-700 hover:bg-[#0F172A] hover:text-white hover:border-[#0F172A] transition-all shadow-sm active:scale-95"
                aria-label="Next slide"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Slider Cards Track */}
        <div 
          ref={scrollContainerRef}
          className="flex items-center gap-5 sm:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`min-w-[290px] sm:min-w-[320px] md:min-w-[340px] snap-start rounded-[28px] sm:rounded-[32px] pt-7 px-6 pb-4 ${service.bgGradient} flex flex-col items-center text-center h-[440px] sm:h-[460px] relative overflow-hidden group shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_12px_35px_rgb(0,0,0,0.08)] shrink-0 hover:-translate-y-1`}
            >
              {/* Category Tag */}
              <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border mb-3 ${service.tagColor}`}>
                {service.tag}
              </span>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight mb-2 leading-snug">
                {service.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 font-normal max-w-[270px]">
                {service.description}
              </p>
              
              {/* View Service Action Button */}
              <div className="flex items-center justify-center z-10 mb-5">
                <Link 
                  href="#contact"
                  className="inline-flex items-center bg-[#0F172A] hover:bg-blue-600 text-white rounded-full p-1 pl-4 shadow-md transition-all duration-300 group/btn"
                >
                  <span className="text-xs sm:text-sm font-medium tracking-tight mr-2">Explore Service</span>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-blue-600 transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover/btn:text-blue-600" />
                  </div>
                </Link>
              </div>

              {/* MacBook Laptop UI Mockup Container */}
              <div className="mt-auto w-[110%] h-[200px] sm:h-[210px] relative transition-transform duration-500 ease-out group-hover:scale-[1.03] flex flex-col items-center">
                
                {/* Laptop Display Bezel */}
                <div className={`w-[92%] h-[160px] sm:h-[170px] ${service.screenBg} rounded-t-[16px] border-[5px] border-[#1E293B] border-b-0 shadow-2xl flex flex-col overflow-hidden relative`}>
                  {/* Laptop Top Camera Bar */}
                  <div className="w-full h-3.5 bg-black/70 flex items-center justify-between px-3">
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500/80"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500/60"></div>
                  </div>

                  {/* Screen Content Render */}
                  <div className="flex-1 p-3 flex flex-col justify-center items-center text-center relative overflow-hidden">
                    {service.isBrandLogo ? (
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="flex items-center gap-2 text-emerald-400 font-black text-2xl tracking-tighter">
                          <div className="w-7 h-7 bg-emerald-400 text-black flex items-center justify-center rounded-lg font-bold text-base shadow-md">↗</div>
                          <span>startio</span>
                        </div>
                        <div className="text-[10px] text-emerald-300/80 font-mono tracking-widest uppercase">Design System v2.0</div>
                      </div>
                    ) : service.isCodeScreen ? (
                      <div className="w-full text-left font-mono text-[9.5px] sm:text-[10.5px] space-y-1 text-gray-300 opacity-95 pl-1">
                        <div className="text-blue-400">import <span className="text-white">NextApp</span> from <span className="text-emerald-400">'next'</span></div>
                        <div className="text-purple-400">export default function <span className="text-yellow-300">App</span>() &#123;</div>
                        <div className="pl-3 text-emerald-400">// High availability & 99.9% uptime</div>
                        <div className="pl-3 text-pink-400">return &lt;<span className="text-blue-300">Platform</span> live=&#123;true&#125;&gt;</div>
                        <div className="pl-6 text-gray-300">&lt;<span className="text-yellow-300">Dashboard</span> /&gt;</div>
                        <div className="text-purple-400">&#125;</div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center space-y-2 w-full px-2">
                        <div className={`text-xs sm:text-sm font-bold ${service.isLightScreen ? 'text-slate-800' : 'text-white'} tracking-tight`}>
                          {service.screenHeading}
                        </div>
                        <div className="flex items-center gap-2 w-full justify-center">
                          <div className={`w-16 h-4 rounded-md bg-gradient-to-r ${service.screenAccent} opacity-90 shadow-sm`}></div>
                          <div className="w-8 h-4 rounded-md bg-gray-500/30"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Laptop Base Stand */}
                <div className="w-[100%] h-3 bg-gradient-to-b from-[#334155] to-[#1E293B] rounded-b-md shadow-lg relative border-t border-gray-600/50 flex justify-center">
                  <div className="w-14 h-1 bg-gray-400/30 rounded-b-sm"></div>
                </div>
                {/* Ambient Soft Shadow */}
                <div className="w-[85%] h-3 bg-black/30 blur-md rounded-full mt-0.5"></div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}