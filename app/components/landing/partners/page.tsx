"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const partners = [
  {
    id: 1,
    name: "Surfside88",
    logo: (
      <div className="flex items-center justify-center font-serif text-xl sm:text-2xl font-bold">
        <span className="text-[#D4AF37]">Surf</span>
        <span className="text-gray-800">side88</span>
      </div>
    ),
  },
  {
    id: 2,
    name: "Pinnacle Elevator Solutions",
    logo: (
      <div className="flex items-center justify-center gap-2">
        <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border-2 border-green-600 text-green-600 font-bold text-[0.65rem] sm:text-xs">
          A|V
        </div>
        <div className="flex flex-col text-left">
          <span className="text-green-600 font-bold text-xs sm:text-sm leading-tight uppercase">Pinnacle</span>
          <span className="text-green-600 font-semibold text-[0.5rem] sm:text-[0.55rem] leading-tight tracking-wider uppercase">Elevator Solutions</span>
          <span className="text-gray-400 text-[0.35rem] sm:text-[0.38rem] uppercase">An Elevator Escalator Inspection Company</span>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    name: "Movie Shack",
    logo: (
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center text-base sm:text-lg font-black uppercase tracking-wider">
          <span className="text-slate-700">Movie</span>
          <span className="text-red-500 ml-1">Shack</span>
        </div>
        <span className="text-slate-800 font-bold text-[0.42rem] sm:text-[0.45rem] tracking-[0.15em] mt-0.5">4K - UHD - BLU-RAY - DVD - MUSIC</span>
      </div>
    ),
  },
  {
    id: 4,
    name: "Oliab",
    logo: (
      <div className="flex flex-col items-start justify-center">
        <div className="flex items-center text-xl sm:text-2xl font-bold text-gray-800 tracking-tight">
          <div className="mr-1 h-5 w-5 sm:h-5.5 sm:w-5.5 rounded-full bg-gradient-to-tr from-green-700 to-green-400 relative overflow-hidden flex items-center justify-center">
             <div className="w-2.5 h-2.5 bg-white rounded-full absolute bottom-0.5 right-0.5"></div>
          </div>
          liab
        </div>
        <span className="text-gray-500 text-[0.45rem] sm:text-[0.48rem] italic mt-0.5 ml-5 sm:ml-6">Creative Media Solutions</span>
      </div>
    ),
  },
  {
    id: 5,
    name: "Ready Home Offers",
    logo: (
      <div className="flex items-center justify-center gap-2">
        <div className="relative flex h-8 w-8 sm:h-8.5 sm:w-8.5 items-center justify-center border-2 border-red-500 rounded-sm">
          <span className="text-blue-700 font-bold text-base sm:text-lg">H</span>
          <span className="text-red-500 font-bold text-base sm:text-lg absolute">R</span>
          <div className="absolute -top-2.5 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-red-500"></div>
        </div>
        <div className="flex flex-col text-left font-bold">
          <span className="text-blue-800 text-xs sm:text-xs leading-tight">Ready Home</span>
          <span className="text-red-500 text-xs sm:text-xs leading-tight">Offers</span>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    name: "Alerts.com",
    logo: (
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-indigo-900">
        <div className="flex opacity-50">
          <div className="w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full border-[2.5px] border-indigo-900 border-r-transparent rotate-45"></div>
          <div className="w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full border-[2.5px] border-indigo-900 border-l-transparent -rotate-45 -ml-1.5"></div>
        </div>
        <span className="text-lg sm:text-xl font-bold">Alerts.com</span>
      </div>
    ),
  },
  {
    id: 7,
    name: "All State Appliance Repair",
    logo: (
      <div className="flex items-center justify-center gap-2 sm:gap-2.5">
        <div className="relative flex h-8 w-8 sm:h-8.5 sm:w-8.5 items-center justify-center rounded-full border-2 border-gray-600 bg-gray-100">
           <div className="w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full border border-gray-600 flex items-center justify-center">
             <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
           </div>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-gray-700 font-bold text-[0.62rem] sm:text-[0.68rem] leading-tight uppercase">All State</span>
          <span className="text-gray-700 font-bold text-[0.62rem] sm:text-[0.68rem] leading-tight uppercase">Appliance Repair</span>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    name: "edvive",
    logo: (
      <div className="flex items-center justify-center">
        <span className="text-2xl sm:text-2xl font-black text-gray-800 tracking-tighter">edvive</span>
      </div>
    ),
  },
  {
    id: 9,
    name: "Apex Labs",
    logo: (
      <div className="flex items-center justify-center gap-1.5">
        <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold text-xs">A</div>
        <span className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">ApexLabs</span>
      </div>
    ),
  },
  {
    id: 10,
    name: "Nexus Digital",
    logo: (
      <div className="flex items-center justify-center gap-1">
        <span className="text-lg sm:text-xl font-extrabold text-[#0052fe]">NEXUS</span>
        <span className="text-[0.65rem] font-semibold text-gray-500 uppercase tracking-widest">Digital</span>
      </div>
    ),
  }
];

export default function Partners() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
        { opacity: 0, y: 24, filter: "blur(4px)" },
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
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-[#F8F9FA] flex flex-col items-center overflow-hidden">
      <div className="max-w-10/12 mx-auto px-4 sm:px-6 w-full">
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
              {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

