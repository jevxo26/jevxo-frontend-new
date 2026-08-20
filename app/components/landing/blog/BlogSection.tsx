import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function BlogSection() {
  return (
    <section id="blog" className="relative z-10 w-full py-16 md:py-24 bg-[#F8F9FA] flex justify-center border-t border-gray-100 overflow-hidden">
      <div className="max-w-10/12 mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col">
        
        {/* Title & Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-12 md:mb-16 w-full">
          {/* Left Title Area */}
          <div className="flex flex-col items-start gap-4 lg:w-1/2">
            {/* Pill Badge */}
            <div className="bg-white border border-[#3b82f6]/40 text-[#3b82f6] px-3.5 py-1 rounded-full text-xs font-normal tracking-wide inline-flex items-center gap-1.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
              Blog &amp; Insight
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#0f172a] tracking-tight leading-[1.15]">
              <span className="font-bold block text-[#0f172a]">Where Creativity Meets</span>
              <span className="block mt-1 text-[#0f172a]">
                <span className="font-serif italic font-medium text-[#0f172a]">Intelligent Design.</span>
              </span>
            </h2>
          </div>

          {/* Right Description */}
          <div className="lg:w-[42%] pt-1 lg:pt-8">
            <p className="text-[#475569] text-base md:text-lg leading-relaxed font-normal">
              Thoughtful perspectives on design, UX, branding, and digital products—written to help founders, teams, and businesses make better decisions.
            </p>
          </div>
        </div>

        {/* Blog Grid (Left Main Card + Right 2 Cards Stack) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Featured Main Blog Post Card */}
          <div className="lg:col-span-6 bg-white rounded-[16px] p-5 sm:p-6 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100/80 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1">
            {/* Main Featured Banner Image */}
            <div className="w-full h-[240px] sm:h-[290px] md:h-[310px] rounded-[12px] relative overflow-hidden mb-5 bg-gray-100">
              <Image
                src="/BlogInsight/first.png"
                alt="The Future of Branding Why Design Quality Matters More Than Ever."
                fill
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content Details */}
            <div className="flex flex-col justify-between flex-1">
              <div>
                <span className="text-[#94a3b8] text-xs sm:text-sm font-normal block mb-1.5">
                  July 31, 2025
                </span>
                <h3 className="text-lg sm:text-xl md:text-[22px] font-medium text-[#0a0c16] tracking-tight leading-snug mb-4">
                  The Future of Branding Why Design Quality Matters More Than Ever.
                </h3>
              </div>

              <div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2.5 bg-black hover:bg-gray-800 text-white rounded-full pl-4 pr-1 py-1 transition-all duration-300 hover:scale-[1.03] group/btn"
                >
                  <span className="text-xs sm:text-sm font-medium">Open Blog</span>
                  <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center shrink-0 group-hover/btn:rotate-45 transition-transform duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5 text-black stroke-[2.2]" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: 2 Stacked Cards */}
          <div className="lg:col-span-6 flex flex-col space-y-5 justify-between">
            
            {/* Right Card 1 */}
            <div className="bg-white rounded-[16px] p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-5 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100/80 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 h-full">
              {/* Image thumbnail */}
              <div className="w-full sm:w-[190px] md:w-[210px] h-[150px] rounded-[12px] relative overflow-hidden shrink-0 bg-gray-100">
                <Image
                  src="/BlogInsight/second.png"
                  alt="Why Great UI/UX Is A Competitive Advantage"
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center h-full w-full py-1">
                <span className="text-[#94a3b8] text-xs sm:text-sm font-normal block mb-1.5">
                  July 31, 2025
                </span>
                <h3 className="text-base sm:text-lg md:text-[19px] font-medium text-[#0a0c16] tracking-tight leading-snug mb-3">
                  Why Great UI/UX Is A Competitive Advantage
                </h3>

                <div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2.5 bg-black hover:bg-gray-800 text-white rounded-full pl-4 pr-1 py-1 transition-all duration-300 hover:scale-[1.03] group/btn"
                  >
                    <span className="text-xs sm:text-sm font-medium">Open Blog</span>
                    <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center shrink-0 group-hover/btn:rotate-45 transition-transform duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5 text-black stroke-[2.2]" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Card 2 */}
            <div className="bg-white rounded-[16px] p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-5 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100/80 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 h-full">
              {/* Image thumbnail */}
              <div className="w-full sm:w-[190px] md:w-[210px] h-[150px] rounded-[12px] relative overflow-hidden shrink-0 bg-gray-100">
                <Image
                  src="/BlogInsight/thired.png"
                  alt="Building Scalable Products Through Smart Design Systems"
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center h-full w-full py-1">
                <span className="text-[#94a3b8] text-xs sm:text-sm font-normal block mb-1.5">
                  July 31, 2025
                </span>
                <h3 className="text-base sm:text-lg md:text-[19px] font-medium text-[#0a0c16] tracking-tight leading-snug mb-3">
                  Building Scalable Products Through Smart Design Systems
                </h3>

                <div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2.5 bg-black hover:bg-gray-800 text-white rounded-full pl-4 pr-1 py-1 transition-all duration-300 hover:scale-[1.03] group/btn"
                  >
                    <span className="text-xs sm:text-sm font-medium">Open Blog</span>
                    <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center shrink-0 group-hover/btn:rotate-45 transition-transform duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5 text-black stroke-[2.2]" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
