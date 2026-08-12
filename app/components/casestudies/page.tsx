import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    title: "SaaS Product Website Design and Development",
    description: "Turn your SaaS idea into a reality. We specialize in full-stack SaaS product development — from user onboarding and subscriptions to scalable backend architecture.",
    imagePlaceholder: "bg-[#161616]", // Dark desktop mockup
  },
  {
    title: "Mobile App Design and App Development",
    description: "High-performance Android and iOS apps built with Flutter for seamless cross-platform experiences. We specialize in full-stack app development — from user onboarding and subscriptions.",
    imagePlaceholder: "bg-[#E65F1D]", // Orange phone mockup
  },
  {
    title: "Mobile App Design and App Development",
    description: "High-performance Android and iOS apps built with Flutter for seamless cross-platform experiences. We specialize in full-stack app development — from user onboarding and subscriptions.",
    imagePlaceholder: "bg-[#DDDDDD]", // Silver/Gray device mockup
  },
  {
    title: "SaaS Product Website Design and Development",
    description: "Turn your SaaS idea into a reality. We specialize in full-stack SaaS product development — from user onboarding and subscriptions to scalable backend architecture.",
    imagePlaceholder: "bg-[#1F1F1F]", // Dark desktop mockup
  }
];

export default function CaseStudies() {
  return (
    <section className="w-full py-24 bg-[#F8F9FA] flex justify-center border-t border-gray-100">
      <div className="max-w-[1400px] w-full px-6 flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 max-w-5xl mx-auto w-full">
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 max-w-5xl mx-auto w-full">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-[32px] p-5 shadow-[0_4px_30px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col group hover:shadow-[0_8px_40px_rgb(0,0,0,0.06)] transition-all duration-300">
              
              {/* Image Placeholder */}
              <div className={`w-full h-[360px] rounded-[24px] ${study.imagePlaceholder} mb-8 overflow-hidden relative flex items-center justify-center`}>
                 <div className="w-[70%] h-[70%] bg-white/10 rounded-xl border border-white/20 shadow-2xl backdrop-blur-sm flex flex-col overflow-hidden">
                    <div className="w-full h-8 bg-black/10 border-b border-white/10 flex items-center px-4 gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                    </div>
                    <div className="flex-1 w-full bg-white/5"></div>
                 </div>
              </div>
              
              <div className="px-3 flex flex-col flex-1">
                <h3 className="text-[#1A1A1A] text-[26px] font-semibold leading-snug mb-3 tracking-tight pr-4">
                  {study.title}
                </h3>
                <p className="text-gray-500 text-[15px] leading-[1.6] mb-8 pr-4">
                  {study.description}
                </p>
                
                <div className="mt-auto pb-2">
                  <button className="flex items-center bg-[#282828] rounded-full pl-5 pr-1.5 py-1.5 hover:bg-black transition-colors">
                    <span className="text-white text-[13px] font-medium mr-3">Open Project</span>
                    <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4 text-[#282828]" />
                    </div>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
