import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "UI/UX Design",
    description: "We design intuitive interfaces that make websites and apps easy to use daily.",
    bgClass: "bg-gradient-to-b from-[#f8f9fa] to-[#fce4f3]", // pink
    imagePlaceholder: "bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]", // dark dashboard
  },
  {
    title: "SaaS Product Design",
    description: "We design intuitive SaaS product that make websites and apps easy to use daily.",
    bgClass: "bg-gradient-to-b from-[#f8f9fa] to-[#fae6db]", // peach
    imagePlaceholder: "bg-white border-t border-gray-100", // white dashboard
  },
  {
    title: "Logo & Branding Design",
    description: "We create memorable brand visuals that express your values with clear impact.",
    bgClass: "bg-gradient-to-b from-[#f8f9fa] to-[#dcfce7]", // green
    imagePlaceholder: "bg-[#0A7B44]", // green startio
  },
  {
    title: "Full Stack Development",
    description: "We build fast, secure websites that support business goals and future growth.",
    bgClass: "bg-gradient-to-b from-[#f8f9fa] to-[#e0e7ff]", // indigo
    imagePlaceholder: "bg-[#1E1E1E]", // code editor
  }
];

export default function OurService() {
  return (
    <section className="w-full py-24 bg-[#F8F9FA] flex justify-center border-t border-gray-100">
      <div className="max-w-[1400px] w-full px-6 flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="flex flex-col items-start gap-6 lg:w-1/2">
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
          
          <div className="lg:w-[45%] pb-2">
            <p className="text-lg md:text-xl text-gray-500 font-normal leading-[1.6]">
              We're here to create digital experiences that your customers will love. from websites and apps to seamless interfaces, our creations drive stronger engagement and foster lasting loyalty.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`rounded-[40px] pt-12 px-8 ${service.bgClass} flex flex-col h-[480px] relative overflow-hidden group`}
            >
              <h3 className="text-2xl font-medium text-[#111] tracking-tight mb-4">{service.title}</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-8 pr-2">
                {service.description}
              </p>
              
              <div className="flex items-start z-10 relative">
                <button className="flex items-center bg-[#2A2A2A] rounded-full pl-5 pr-1.5 py-1.5 hover:bg-black transition-colors">
                  <span className="text-white text-sm font-medium mr-3">View Service</span>
                  <div className="w-8 h-8 rounded-full bg-[#444] flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </button>
              </div>

              {/* Mockup Placeholder */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] h-[200px] rounded-t-[16px] overflow-hidden shadow-2xl border-[6px] border-[#333] border-b-0 flex flex-col justify-end bg-[#333] group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                  <div className={`w-full h-full rounded-t-[10px] ${service.imagePlaceholder}`}>
                    {/* Inner screen details simulated */}
                    <div className="w-full h-4 bg-black/10 border-b border-black/5 flex items-center px-3 gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
