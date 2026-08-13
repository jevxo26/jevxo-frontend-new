import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogSection() {
  return (
    <section id="blog" className="w-full py-24 bg-[#F8F9FA] flex justify-center border-t border-gray-100">
      <div className="max-w-7xl w-full px-6 flex flex-col">
        
        {/* Title Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 w-full">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-[#111] tracking-tight leading-[1.15]">
              Where Creativity Meets <br />
              <span className="font-serif italic font-medium">Intelligent Design.</span>
            </h2>
          </div>

          <div className="lg:w-[45%] pb-1">
            <p className="text-gray-500 text-base md:text-lg leading-relaxed font-normal">
              Thoughtful perspectives on design, UX, branding, and digital products—written to help founders, teams, and businesses make better decisions.
            </p>
          </div>
        </div>

        {/* Blog Grid (Left Big Card + Right 2 Cards Stack) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Main Big Featured Post */}
          <div className="lg:col-span-6 bg-white rounded-[36px] p-6 md:p-8 border border-gray-200/80 shadow-[0_4px_30px_rgb(0,0,0,0.02)] flex flex-col justify-between group hover:shadow-[0_12px_35px_rgb(0,0,0,0.06)] transition-all duration-300">
            
            {/* Featured Image */}
            <div className="w-full h-[340px] md:h-[380px] rounded-[24px] bg-[#EAEAEA] relative overflow-hidden mb-8 flex items-center justify-center">
              {/* Simulated Tote Bag Graphic matching screenshot */}
              <div className="w-full h-full bg-[#e3e3e3] flex flex-col items-center justify-center p-8 text-center relative">
                <div className="w-[70%] h-[80%] bg-[#F5F2EB] rounded-2xl shadow-xl border border-gray-300 flex flex-col items-center justify-center p-6 relative">
                  <div className="w-full h-4 bg-gray-300/40 rounded mb-auto"></div>
                  <div className="text-3xl md:text-4xl font-extrabold text-[#0052ff] tracking-tight leading-none my-auto">
                    Doing <br /> Things
                  </div>
                  <div className="flex items-center justify-between w-full text-[9px] text-gray-500 font-mono mt-auto pt-4 border-t border-gray-300/60">
                    <span>OutdoorVoices</span>
                    <span>📍 USA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content info */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight leading-snug">
                The Future of Branding Why Design Quality Matters More Than Ever.
              </h3>
              
              <div className="text-gray-400 text-sm font-medium">
                July 31, 2025
              </div>

              <div className="pt-2">
                <Link
                  href="#"
                  className="inline-flex items-center gap-3 bg-[#23262d] hover:bg-black text-white rounded-full pl-5 pr-1.5 py-1.5 transition-all group/btn"
                >
                  <span className="text-sm font-medium">Continue Reading</span>
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform">
                    <ArrowRight className="w-4 h-4 text-[#23262d]" />
                  </div>
                </Link>
              </div>
            </div>

          </div>

          {/* Right Column: 2 Stacked Cards */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            
            {/* Right Card 1 */}
            <div className="bg-white rounded-[36px] p-6 md:p-8 border border-gray-200/80 shadow-[0_4px_30px_rgb(0,0,0,0.02)] flex flex-col sm:flex-row items-center gap-6 group hover:shadow-[0_12px_35px_rgb(0,0,0,0.06)] transition-all duration-300">
              
              {/* Image thumbnail */}
              <div className="w-full sm:w-[220px] h-[190px] rounded-[20px] bg-[#A7F3D0] relative overflow-hidden shrink-0">
                <Image
                  src="/images/team_2.png"
                  alt="Why Great UI/UX Is A Competitive Advantage"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between h-full space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight leading-snug">
                  Why Great UI/UX Is A Competitive Advantage
                </h3>

                <div className="text-gray-400 text-sm font-medium">
                  July 31, 2025
                </div>

                <div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-3 bg-[#23262d] hover:bg-black text-white rounded-full pl-4 pr-1 py-1 transition-all group/btn"
                  >
                    <span className="text-xs font-medium">Continue Reading</span>
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform">
                      <ArrowRight className="w-3.5 h-3.5 text-[#23262d]" />
                    </div>
                  </Link>
                </div>
              </div>

            </div>

            {/* Right Card 2 */}
            <div className="bg-white rounded-[36px] p-6 md:p-8 border border-gray-200/80 shadow-[0_4px_30px_rgb(0,0,0,0.02)] flex flex-col sm:flex-row items-center gap-6 group hover:shadow-[0_12px_35px_rgb(0,0,0,0.06)] transition-all duration-300">
              
              {/* Image thumbnail */}
              <div className="w-full sm:w-[220px] h-[190px] rounded-[20px] bg-[#141824] relative overflow-hidden shrink-0">
                <Image
                  src="/images/case_study_3.png"
                  alt="Building Scalable Products Through Smart Design Systems"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between h-full space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight leading-snug">
                  Building Scalable Products Through Smart Design Systems
                </h3>

                <div className="text-gray-400 text-sm font-medium">
                  July 31, 2025
                </div>

                <div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-3 bg-[#23262d] hover:bg-black text-white rounded-full pl-4 pr-1 py-1 transition-all group/btn"
                  >
                    <span className="text-xs font-medium">Continue Reading</span>
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform">
                      <ArrowRight className="w-3.5 h-3.5 text-[#23262d]" />
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
