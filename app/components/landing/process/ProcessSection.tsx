"use client";

import Image from "next/image";

const steps = [
  {
    step: "Step 01",
    title: "Discovery & Strategy",
    description: "Aligning business objectives, user research, wireframing, and tech stack blueprinting.",
    icon: "/DesignProcess/Understand.png",
    bg: "bg-[#f0f3ff]",
  },
  {
    step: "Step 02",
    title: "UX/UI Design System",
    description: "Crafting intuitive user interfaces, scalable design tokens, interactive prototypes, and modern branding.",
    icon: "/DesignProcess/Define.png",
    bg: "bg-[#fff0f4]",
  },
  {
    step: "Step 03",
    title: "Architecture & Sprint",
    description: "Setting up secure database schemas, cloud microservices, API integrations, and agile development sprints.",
    icon: "/DesignProcess/Ideate.png",
    bg: "bg-[#eef8f4]",
  },
  {
    step: "Step 04",
    title: "Full-Stack Development",
    description: "Engineering fast, SEO-optimized web and mobile applications backed by robust infrastructure.",
    icon: "/DesignProcess/Design.png",
    bg: "bg-[#f1edfb]",
  },
  {
    step: "Step 05",
    title: "QA & Security Audit",
    description: "Comprehensive automated unit testing, end-to-end security audits, and cross-browser optimization.",
    icon: "/DesignProcess/Testing.png",
    bg: "bg-[#fefce8]",
  },
  {
    step: "Step 06",
    title: "Deployment & Scaling",
    description: "Seamless CI/CD production releases, 24/7 cloud server monitoring, and continuous product iteration.",
    icon: "/DesignProcess/Approval.png",
    bg: "bg-[#f0fdf4]",
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative z-10 w-full py-12 md:py-16 bg-[#F8F9FA] flex justify-center border-t border-gray-100 overflow-hidden">
      <div className="max-w-10/12 mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-10 md:mb-12 w-full">
          {/* Left Title Area */}
          <div className="flex flex-col items-start gap-3.5 lg:w-1/2">
            <div className="bg-white border border-[#3b82f6]/40 text-[#3b82f6] px-3.5 py-1 rounded-full text-xs font-normal tracking-wide inline-flex items-center gap-1.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
              Design Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-[#0f172a] tracking-tight leading-[1.15]">
              <span className="block text-[#0f172a]">Step-By-Step Way</span>
              <span className="block mt-1 text-[#0f172a]">
                <span className="font-serif italic font-normal text-[#0f172a]">To Build Product</span> <span className="font-medium text-[#0f172a]">Design.</span>
              </span>
            </h2>
          </div>
          
          {/* Right Description */}
          <div className="lg:w-[46%] pt-1 lg:pt-8">
            <p className="text-sm sm:text-base md:text-lg text-[#64748b] font-normal leading-relaxed">
              We simplify the product creation process for SaaS companies by combining strategy, design, and development into one efficient workflow focused on faster launches.
            </p>
          </div>
        </div>

        {/* Overlapping Horizontal Cards Row matching exact reference screenshot */}
        <div className="flex items-center justify-between overflow-visible pb-10 pt-4 relative w-full">
          {steps.map((item, index) => (
            <div 
              key={index}
              className={`w-[190px] sm:w-[220px] md:w-[235px] lg:w-[250px] shrink-0 ${item.bg} rounded-[32px] p-5 flex flex-col justify-between h-[310px] sm:h-[330px] border border-white/60 shadow-[0_4px_25px_rgba(0,0,0,0.04)] transition-all duration-500 ease-out -mr-10 sm:-mr-12 md:-mr-14 last:mr-0 relative z-10 hover:z-30 hover:scale-[1.06] hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(0,0,0,0.12)] group`}
            >
              <div>
                {/* Header Row: Image Icon & Step Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-2xs border border-gray-100/80 group-hover:scale-105 transition-transform duration-300 relative overflow-hidden p-2">
                    <Image
                      src={item.icon}
                      alt={`${item.title} icon`}
                      width={22}
                      height={22}
                      className="object-contain"
                    />
                  </div>
                  <span className="bg-white/80 text-gray-600 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-wide border border-gray-100">
                    {item.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-[#0a0c16] tracking-tight mb-2 leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-[#64748b] text-xs leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
