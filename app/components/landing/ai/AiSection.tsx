import Image from "next/image";

export default function AiSection() {
  return (
    <section id="ai-section" className="relative z-10 w-full py-16 md:py-24 bg-[#F8F9FA] flex justify-center border-t border-gray-100 overflow-hidden">
      <div className="max-w-10/12 mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-12 md:mb-16 w-full">
          {/* Left Title Area */}
          <div className="flex flex-col items-start gap-4 lg:w-1/2">
            <div className="bg-white border border-[#3b82f6]/40 text-[#3b82f6] px-3.5 py-1 rounded-full text-xs font-normal tracking-wide inline-flex items-center gap-1.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
              AI Powered Design
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#0f172a] tracking-tight leading-[1.15]">
              <span className="font-bold block text-[#0f172a]">Smarter Design,</span>
              <span className="block mt-1 text-[#0f172a]">
                <span className="font-serif italic font-medium text-[#0f172a]">Supercharged by</span> <span className="font-bold text-[#0f172a]">AI.</span>
              </span>
            </h2>
          </div>
          
          {/* Right Description */}
          <div className="lg:w-[42%] pt-1 lg:pt-8">
            <p className="text-sm sm:text-base md:text-lg text-[#64748b] font-normal leading-relaxed">
              From wireframes to launch, we blend AI tools with strategy to deliver faster, sharper, and data-led design results.
            </p>
          </div>
        </div>

        {/* Top 2 Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 w-full">
          
          {/* Card 1: UX Copy That Converts */}
          <div className="bg-gradient-to-b from-[#FFD8C2] via-[#FFEADB] to-[#FFF6F0] rounded-[36px] p-8 md:p-10 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-orange-200/50 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(249,115,22,0.08)] hover:-translate-y-1 min-h-[470px]">
            {/* Top 8 Dark AI Tool Icons Grid - Extra Large Tiles */}
            <div className="w-full flex justify-center pt-2 pb-6 my-auto">
              <div className="grid grid-cols-4 gap-4 sm:gap-5 max-w-[420px]">
                <div className="w-[82px] h-[82px] sm:w-[92px] sm:h-[92px] rounded-[26px] bg-[#080d1a] flex items-center justify-center p-3.5 shadow-[0_10px_25px_rgba(0,0,0,0.22)] border border-gray-800/80 hover:scale-105 transition-transform duration-300">
                  <Image src="/AIPoweredDesign/chgpt.png" alt="ChatGPT" width={52} height={52} className="object-contain" />
                </div>
                <div className="w-[82px] h-[82px] sm:w-[92px] sm:h-[92px] rounded-[26px] bg-[#080d1a] flex items-center justify-center p-3.5 shadow-[0_10px_25px_rgba(0,0,0,0.22)] border border-gray-800/80 hover:scale-105 transition-transform duration-300">
                  <Image src="/AIPoweredDesign/junery.png" alt="Midjourney" width={52} height={52} className="object-contain" />
                </div>
                <div className="w-[82px] h-[82px] sm:w-[92px] sm:h-[92px] rounded-[26px] bg-[#080d1a] flex items-center justify-center p-3.5 shadow-[0_10px_25px_rgba(0,0,0,0.22)] border border-gray-800/80 hover:scale-105 transition-transform duration-300">
                  <Image src="/AIPoweredDesign/figma.png" alt="Figma" width={52} height={52} className="object-contain" />
                </div>
                <div className="w-[82px] h-[82px] sm:w-[92px] sm:h-[92px] rounded-[26px] bg-[#080d1a] flex items-center justify-center p-3.5 shadow-[0_10px_25px_rgba(0,0,0,0.22)] border border-gray-800/80 hover:scale-105 transition-transform duration-300">
                  <Image src="/AIPoweredDesign/figma 2.png" alt="Miro" width={52} height={52} className="object-contain" />
                </div>
                <div className="w-[82px] h-[82px] sm:w-[92px] sm:h-[92px] rounded-[26px] bg-[#080d1a] flex items-center justify-center p-3.5 shadow-[0_10px_25px_rgba(0,0,0,0.22)] border border-gray-800/80 hover:scale-105 transition-transform duration-300">
                  <Image src="/AIPoweredDesign/cloud.png" alt="Claude" width={52} height={52} className="object-contain" />
                </div>
                <div className="w-[82px] h-[82px] sm:w-[92px] sm:h-[92px] rounded-[26px] bg-[#080d1a] flex items-center justify-center p-3.5 shadow-[0_10px_25px_rgba(0,0,0,0.22)] border border-gray-800/80 hover:scale-105 transition-transform duration-300">
                  <Image src="/AIPoweredDesign/loveable 2.png" alt="Framer" width={52} height={52} className="object-contain" />
                </div>
                <div className="w-[82px] h-[82px] sm:w-[92px] sm:h-[92px] rounded-[26px] bg-[#080d1a] flex items-center justify-center p-3.5 shadow-[0_10px_25px_rgba(0,0,0,0.22)] border border-gray-800/80 hover:scale-105 transition-transform duration-300">
                  <Image src="/AIPoweredDesign/cloud2.png" alt="Bolt" width={52} height={52} className="object-contain" />
                </div>
                <div className="w-[82px] h-[82px] sm:w-[92px] sm:h-[92px] rounded-[26px] bg-[#080d1a] flex items-center justify-center p-3.5 shadow-[0_10px_25px_rgba(0,0,0,0.22)] border border-gray-800/80 hover:scale-105 transition-transform duration-300">
                  <Image src="/AIPoweredDesign/yellow.png" alt="Firefly" width={52} height={52} className="object-contain" />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <h3 className="text-2xl sm:text-[32px] font-medium text-[#0a0c16] tracking-tight mb-2.5 leading-tight">
                UX Copy That Converts
              </h3>
              <p className="text-[#475569] text-base leading-relaxed max-w-md font-normal">
                Generate strategic UX copy, CTAs, and messaging designed to improve clarity and engagement.
              </p>
            </div>
          </div>

          {/* Card 2: AI Visual Direction */}
          <div className="bg-gradient-to-b from-[#FBE0FC] via-[#FBF0FE] to-[#FCF8FE] rounded-[36px] p-8 md:p-10 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-purple-200/50 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(236,72,153,0.08)] hover:-translate-y-1">
            <div className="flex flex-col space-y-3.5 max-w-md mb-12 pt-2">
              {/* Row 1 */}
              <div className="bg-white p-4 rounded-2xl border border-gray-100/80 shadow-xs flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center p-1.5 border border-gray-100 shrink-0">
                  <Image src="/AIPoweredDesign/figma.png" alt="Figma" width={28} height={28} className="object-contain" />
                </div>
                <div className="flex-1 space-y-1.5">
                  <div className="text-[#0f172a] font-semibold text-sm">Figma Make - Wireframe</div>
                  <div className="w-48 h-1.5 bg-gray-100 rounded-full" />
                </div>
              </div>

              {/* Row 2 */}
              <div className="bg-white p-4 rounded-2xl border border-gray-100/80 shadow-xs flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center p-1.5 border border-gray-100 shrink-0">
                  <Image src="/AIPoweredDesign/junery.png" alt="Claude" width={28} height={28} className="object-contain" />
                </div>
                <div className="flex-1 space-y-1.5">
                  <div className="text-[#0f172a] font-semibold text-sm">Claude - Research</div>
                  <div className="w-56 h-1.5 bg-gray-100 rounded-full" />
                </div>
              </div>

              {/* Row 3 */}
              <div className="bg-white p-4 rounded-2xl border border-gray-100/80 shadow-xs flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center p-1.5 border border-gray-100 shrink-0">
                  <Image src="/AIPoweredDesign/loveable 2.png" alt="Loveable" width={28} height={28} className="object-contain" />
                </div>
                <div className="flex-1 space-y-1.5">
                  <div className="text-[#0f172a] font-semibold text-sm">Loveable - Ideation</div>
                  <div className="w-52 h-1.5 bg-gray-100 rounded-full" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] tracking-tight mb-3">
                AI Visual Direction
              </h3>
              <p className="text-[#64748b] text-base leading-relaxed max-w-md font-normal">
                Create faster visual concepts, UI inspirations, &amp; brand-ready creative assets with AI workflows.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom 3 Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          
          {/* Bottom Card 1: Smarter UX Insights */}
          <div className="bg-gradient-to-b from-[#EBEBFE] via-[#F2F2FE] to-[#F7F7FF] rounded-[36px] p-7 flex flex-col justify-between h-[460px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-indigo-100/60 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(99,102,241,0.08)] hover:-translate-y-1">
            <div className="flex flex-col space-y-3 pt-2">
              <div className="bg-white p-3.5 rounded-2xl border border-gray-100/80 shadow-xs flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center p-1.5 border border-gray-100 shrink-0">
                  <Image src="/AIPoweredDesign/data.png" alt="Data Insights" width={22} height={22} className="object-contain" />
                </div>
                <div className="flex-1 space-y-1.5">
                  <div className="text-[#0f172a] font-semibold text-xs sm:text-sm">Data Insights</div>
                  <div className="w-32 h-1.5 bg-gray-100 rounded-full" />
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-gray-100/80 shadow-xs flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center p-1.5 border border-gray-100 shrink-0">
                  <Image src="/AIPoweredDesign/sketh.png" alt="Sketch & Wireframe" width={22} height={22} className="object-contain" />
                </div>
                <div className="flex-1 space-y-1.5">
                  <div className="text-[#0f172a] font-semibold text-xs sm:text-sm">Sketch &amp; Wireframe</div>
                  <div className="w-28 h-1.5 bg-gray-100 rounded-full" />
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-gray-100/80 shadow-xs flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center p-1.5 border border-gray-100 shrink-0">
                  <Image src="/AIPoweredDesign/cloud2.png" alt="Journey Analysis" width={22} height={22} className="object-contain" />
                </div>
                <div className="flex-1 space-y-1.5">
                  <div className="text-[#0f172a] font-semibold text-xs sm:text-sm">Journey Analysis</div>
                  <div className="w-36 h-1.5 bg-gray-100 rounded-full" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0f172a] tracking-tight mb-2.5">
                Smarter UX Insights
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed font-normal">
                Use AI-powered analytics and heatmaps to understand user behavior before launch.
              </p>
            </div>
          </div>

          {/* Bottom Card 2: Faster Wireframing */}
          <div className="bg-gradient-to-b from-[#FFF5EA] via-[#FAF6F2] to-[#FFFBF7] rounded-[36px] p-7 flex flex-col justify-between h-[460px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-amber-100/60 relative overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(245,158,11,0.08)] hover:-translate-y-1">
            <div className="relative w-full h-[220px] flex items-center justify-center pt-2">
              <Image 
                src="/AIPoweredDesign/faster.png" 
                alt="Faster Wireframing Mockups" 
                width={280} 
                height={200} 
                className="object-contain drop-shadow-md"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0f172a] tracking-tight mb-2.5">
                Faster Wireframing
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed font-normal">
                Rapidly transform ideas into wireframes and structured product flows with AI-assisted systems.
              </p>
            </div>
          </div>

          {/* Bottom Card 3: AI-Assisted Launches */}
          <div className="bg-gradient-to-b from-[#FFEEEE] via-[#FFF5F5] to-[#FFFAFA] rounded-[36px] p-7 flex flex-col justify-between h-[460px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-rose-100/60 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(244,63,94,0.08)] hover:-translate-y-1">
            <div className="w-full h-[220px] flex flex-col items-center justify-center relative">
              <Image 
                src="/AIPoweredDesign/Group 1707480850.png" 
                alt="AI-Assisted Launches Graphic" 
                width={220} 
                height={130} 
                className="object-contain mb-4"
              />
              <div className="bg-[#3b82f6] text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide inline-flex items-center gap-1.5 shadow-md">
                <span>346</span>
                <span>⚡</span>
                <span>165</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0f172a] tracking-tight mb-2.5">
                AI-Assisted Launches
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed font-normal">
                Reduce repetitive tasks and launch digital products more efficiently with faster execution workflows.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
