import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    title: "SaaS Product Website Design and Development",
    description: "Turn your SaaS idea into a reality. We specialize in full-stack SaaS product development — from user onboarding and subscriptions to scalable backend architecture.",
    image: "/images/case_study_1.png",
    bgClass: "bg-[#0d0f17]",
  },
  {
    title: "Mobile App Design and App Development",
    description: "High-performance Android and iOS apps built for seamless cross-platform experiences. We specialize in mobile app design, intuitive user onboarding, and scalable infrastructure.",
    image: "/images/case_study_2.png",
    bgClass: "bg-[#16171b]",
  },
  {
    title: "Fintech AI Analytics & Trading Platform",
    description: "Empowering financial teams with real-time predictive analytics, AI insights, and high-frequency trading dashboards engineered for speed and security.",
    image: "/images/case_study_3.png",
    bgClass: "bg-[#141824]",
  },
  {
    title: "E-Commerce Experience & Mobile Shopping App",
    description: "A luxury mobile shopping app designed to increase conversion rates with fluid micro-interactions, instant checkout, and personalized AI product recommendations.",
    image: "/images/case_study_4.png",
    bgClass: "bg-[#18122B]",
  },
  {
    title: "AI Healthcare Portal & Telehealth App",
    description: "Transforming patient care with an intelligent medical dashboard. Features real-time vital monitoring, automated patient scheduling, and AI diagnostic assistance.",
    image: "/images/case_study_5.png",
    bgClass: "bg-[#0f1923]",
  },
  {
    title: "Brand Identity & Design System Transformation",
    description: "Crafting iconic global brand identities. Comprehensive design systems, typography guidelines, and digital brand collateral for fast-scaling enterprises.",
    image: "/images/case_study_6.png",
    bgClass: "bg-[#1c1a17]",
  }
];

export default function CaseStudies() {
  return (
    <section className="w-full py-24 bg-[#F8F9FA] flex justify-center border-t border-gray-100">
      <div className="max-w-7xl w-full px-6 flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 w-full">
          <div className="flex flex-col items-start gap-5">
            <div className="bg-[#E9F0FF] text-[#1B64FF] px-5 py-2 rounded-full text-[13px] font-semibold tracking-wide">
              Case Studies
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[52px] text-[#111] tracking-tight leading-[1.15]">
              <span className="font-bold block">Our Latest Work &</span>
              <span className="block mt-1">
                <span className="font-serif italic font-medium">Featured</span> <span className="font-bold">Case Studies</span>
              </span>
            </h2>
          </div>
          
          <div className="pb-3">
            <button className="bg-gradient-to-b from-[#444] to-[#111] text-white px-7 py-3 rounded-full text-[15px] font-medium shadow-[0_8px_20px_rgb(0,0,0,0.15)] hover:scale-[1.02] active:scale-[0.98] transition-all border border-gray-700/50 flex items-center justify-center min-w-[130px]">
              View All
            </button>
          </div>
        </div>

        {/* Cards Grid matching screenshot styling with 6 unique items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 w-full">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-[36px] p-6 shadow-[0_4px_30px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col group hover:shadow-[0_12px_45px_rgb(0,0,0,0.07)] transition-all duration-300">
              
              {/* Image Container with rounded dark frame */}
              <div className={`w-full h-[380px] rounded-[28px] ${study.bgClass} mb-8 overflow-hidden relative flex items-center justify-center group-hover:scale-[0.99] transition-transform duration-300`}>
                <Image 
                  src={study.image} 
                  alt={study.title}
                  fill
                  className="object-cover object-center rounded-[28px]"
                />
              </div>
              
              {/* Content Body */}
              <div className="px-2 flex flex-col flex-1">
                <h3 className="text-[#0e121b] text-[28px] font-bold leading-[1.25] mb-4 tracking-tight">
                  {study.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-[1.65] mb-8 font-normal">
                  {study.description}
                </p>
                
                {/* Button linking to details page */}
                <div className="mt-auto pb-1">
                  <Link 
                    href={`/casestudies/${index + 1}`}
                    className="inline-flex items-center gap-3 bg-[#23262d] hover:bg-black text-white rounded-full pl-5 pr-1.5 py-1.5 transition-all group/btn"
                  >
                    <span className="text-[14px] font-medium tracking-tight">Open Project</span>
                    <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">
                      <ArrowUpRight className="w-4 h-4 text-[#23262d]" />
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
