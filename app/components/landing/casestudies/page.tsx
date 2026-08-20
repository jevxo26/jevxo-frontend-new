import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    title: "SaaS Product Website Design and Development",
    description: "Turn your SaaS idea into a reality. We specialize in full-stack SaaS product development — from user onboarding and subscriptions to scalable backend architecture.",
    image: "/images/case_study_1.png",
    bgClass: "bg-[#0a0a0a]",
  },
  {
    title: "Mobile App Design and App Development",
    description: "High-performance Android and iOS apps built with Flutter for seamless cross-platform experiences. We specialize in full-stack app development — from user onboarding and subscriptions.",
    image: "/images/case_study_2.png",
    bgClass: "bg-[#18181b]",
  },
  {
    title: "Fintech AI Analytics & Trading Platform",
    description: "Empowering financial teams with real-time predictive analytics, AI Insights, and high-frequency trading dashboards engineered for speed and security.",
    image: "/images/case_study_3.png",
    bgClass: "bg-[#0f172a]",
  },
  {
    title: "E-Commerce Experience & Mobile Shopping App",
    description: "A luxury mobile shopping app designed to increase conversion rates with fluid micro-interactions, instant checkout, and personalized AI product recommendations.",
    image: "/images/case_study_4.png",
    bgClass: "bg-[#18122B]",
  },
];

export default function CaseStudies() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#F8F9FA] flex justify-center border-t border-gray-100">
      <div className="max-w-10/12 mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12 md:mb-16 w-full">
          {/* Left Title Area */}
          <div className="flex flex-col items-start gap-4">
            <div className="bg-white border border-[#3b82f6]/40 text-[#3b82f6] px-3.5 py-1 rounded-full text-xs font-normal tracking-wide inline-flex items-center gap-1.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
              Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-black tracking-tight leading-[1.15]">
              <span className="font-bold block text-black">Our Latest Work &amp;</span>
              <span className="block mt-1 text-black">
                <span className="font-serif italic font-medium text-black">Featured</span> <span className="font-bold text-black">Case Studies</span>
              </span>
            </h2>
          </div>
          
          {/* Right View All Capsule Button */}
          <div className="pt-2 md:pt-8">
            <Link
              href="#case-study"
              className="inline-flex items-center bg-black hover:bg-neutral-900 text-white rounded-full pl-6 pr-1.5 py-1.5 text-sm font-medium transition-all shadow-md group"
            >
              <span className="mr-3">View All</span>
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold">
                <ArrowUpRight className="w-4 h-4 text-black stroke-[2.5]" />
              </div>
            </Link>
          </div>
        </div>

        {/* 4 Cards Grid matching 100% screenshot styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[40px] p-7 shadow-[0_4px_30px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col group hover:shadow-[0_12px_45px_rgb(0,0,0,0.07)] transition-all duration-300"
            >
              
              {/* Image Banner */}
              <div className={`w-full h-[360px] sm:h-[400px] rounded-[32px] ${study.bgClass} mb-8 overflow-hidden relative flex items-center justify-center shadow-md`}>
                <Image 
                  src={study.image} 
                  alt={study.title}
                  fill
                  className="object-cover object-center rounded-[32px]"
                />
              </div>
              
              {/* Card Body */}
              <div className="px-3 flex flex-col flex-1">
                <h3 className="text-[#0a0c16] text-2xl sm:text-3xl font-medium tracking-tight mb-4 leading-tight">
                  {study.title}
                </h3>
                <p className="text-[#64748b] text-base leading-relaxed mb-8 font-normal">
                  {study.description}
                </p>
                
                {/* Action Capsule Button */}
                <div className="mt-auto pb-1">
                  <Link 
                    href={`/casestudies/${index + 1}`}
                    className="inline-flex items-center bg-[#111318] hover:bg-black text-white rounded-full pl-5 pr-1 py-1 text-sm font-normal transition-all shadow-sm group/btn"
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
