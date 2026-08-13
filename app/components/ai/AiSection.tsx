import Image from "next/image";
import { Sparkles, Bot, Layers, Zap, Activity, Box, Compass, HeartHandshake } from "lucide-react";

export default function AiSection() {
  return (
    <section className="w-full py-24 bg-[#F8F9FA] flex justify-center border-t border-gray-100">
      <div className="max-w-7xl w-full px-6 flex flex-col">
        
        {/* Top Badge */}
        <div className="mb-6">
          <span className="bg-[#E9F0FF] text-[#1B64FF] px-5 py-2 rounded-full text-xs font-semibold tracking-wide inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#1B64FF]" />
            <span>AI Powered Design</span>
          </span>
        </div>

        {/* Title Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-[#111] tracking-tight leading-[1.15]">
            Smarter Design, <br />
            <span className="font-serif italic font-medium">Supercharged by</span> <span className="font-bold">AI</span>
          </h2>
        </div>

        {/* Top 2 Big Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Card 1: Peach / Warm Tinted Card */}
          <div className="bg-gradient-to-b from-[#FFF0E5] to-[#FDF4EE] rounded-[40px] p-8 md:p-12 flex flex-col justify-between shadow-[0_4px_30px_rgb(0,0,0,0.02)] border border-orange-100/50 min-h-[460px]">
            {/* Top Grid of Dark Tool Icons */}
            <div className="grid grid-cols-4 gap-4 max-w-sm mb-12">
              <div className="w-16 h-16 rounded-2xl bg-[#090d16] flex items-center justify-center text-white shadow-lg border border-gray-800/60 hover:scale-105 transition-transform">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.259 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7466-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7944.7944 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5355-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829l2.02-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.3927-.6859zm2.0107-3.0231l-.1419-.0852-4.7735-2.7582a.7712.7712 0 0 0-.7854 0L8.9072 9.2534V6.921a.0757.0757 0 0 1 .0332-.0615l4.8303-2.7866a4.504 4.504 0 0 1 6.681 4.6622zM12 13.9819l-2.8123-1.624 2.8123-1.624 2.8124 1.624-2.8124 1.624z"/>
                </svg>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-[#090d16] flex items-center justify-center text-[#d97757] shadow-lg border border-gray-800/60 font-serif font-bold text-2xl">
                ✳
              </div>
              <div className="w-16 h-16 rounded-2xl bg-[#090d16] flex items-center justify-center text-white shadow-lg border border-gray-800/60">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                </div>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-[#090d16] flex items-center justify-center text-yellow-400 shadow-lg border border-gray-800/60 font-extrabold text-xl">
                M
              </div>
              <div className="w-16 h-16 rounded-2xl bg-[#090d16] flex items-center justify-center text-white shadow-lg border border-gray-800/60">
                <Bot className="w-7 h-7 text-blue-400" />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-[#090d16] flex items-center justify-center text-white shadow-lg border border-gray-800/60 font-bold text-xl">
                Fı
              </div>
              <div className="w-16 h-16 rounded-2xl bg-[#090d16] flex items-center justify-center text-emerald-400 shadow-lg border border-gray-800/60">
                <Zap className="w-7 h-7 fill-current" />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-[#090d16] flex items-center justify-center text-orange-500 shadow-lg border border-gray-800/60">
                <Layers className="w-7 h-7" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
                UX Copy That Converts
              </h3>
              <p className="text-gray-600 text-base leading-relaxed max-w-md font-normal">
                Generate strategic UX copy, CTAs, and messaging designed to improve clarity and engagement.
              </p>
            </div>
          </div>

          {/* Card 2: Pink / Lavender Tinted Card */}
          <div className="bg-gradient-to-b from-[#FDF0FB] to-[#FAF2FD] rounded-[40px] p-8 md:p-12 flex flex-col justify-between shadow-[0_4px_30px_rgb(0,0,0,0.02)] border border-pink-100/50 min-h-[460px]">
            <div className="flex flex-col space-y-4 max-w-md mb-12">
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold">
                  ❖
                </div>
                <div className="flex-1 space-y-1">
                  <div className="text-gray-900 font-bold text-base">Figma Make - Wireframe</div>
                  <div className="w-48 h-2 bg-gray-100 rounded-full"></div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#d97757] flex items-center justify-center text-white font-bold text-xl">
                  ✳
                </div>
                <div className="flex-1 space-y-1">
                  <div className="text-gray-900 font-bold text-base">Claude - Research</div>
                  <div className="w-56 h-2 bg-gray-100 rounded-full"></div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 via-pink-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  ♥
                </div>
                <div className="flex-1 space-y-1">
                  <div className="text-gray-900 font-bold text-base">Loveable - Ideation</div>
                  <div className="w-52 h-2 bg-gray-100 rounded-full"></div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
                AI Visual Direction
              </h3>
              <p className="text-gray-600 text-base leading-relaxed max-w-md font-normal">
                Create faster visual concepts, UI inspirations, & brand-ready creative assets with AI workflows.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom 3 Cards Row matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Bottom Card 1: Smarter UX Insights */}
          <div className="bg-gradient-to-b from-[#EBEBFE] to-[#F4F4FE] rounded-[40px] p-8 flex flex-col justify-between h-[480px] shadow-[0_4px_30px_rgb(0,0,0,0.02)] border border-indigo-100/50">
            <div className="flex flex-col space-y-3 pt-2">
              <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="text-gray-900 font-bold text-sm">Data Insights</div>
                  <div className="w-32 h-1.5 bg-gray-100 rounded-full"></div>
                </div>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
                  <Box className="w-5 h-5" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="text-gray-900 font-bold text-sm">Sketch & Wireframe</div>
                  <div className="w-28 h-1.5 bg-gray-100 rounded-full"></div>
                </div>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="text-gray-900 font-bold text-sm">Journey Analysis</div>
                  <div className="w-36 h-1.5 bg-gray-100 rounded-full"></div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl md:text-[28px] font-bold text-gray-900 tracking-tight mb-3">
                Smarter UX Insights
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed font-normal">
                Use AI-powered analytics and heatmaps to understand user behavior before launch.
              </p>
            </div>
          </div>

          {/* Bottom Card 2: Faster Wireframing */}
          <div className="bg-gradient-to-b from-[#FFF4E8] to-[#FFF9F3] rounded-[40px] p-8 flex flex-col justify-between h-[480px] shadow-[0_4px_30px_rgb(0,0,0,0.02)] border border-amber-100/50 relative overflow-hidden">
            {/* Top Wireframe Screens Mockup Layer */}
            <div className="relative w-full h-[220px] flex items-center justify-center pt-2">
              <div className="absolute top-2 w-[160px] h-[210px] bg-white rounded-2xl shadow-xl border border-gray-200/80 p-3 flex flex-col items-center z-20">
                <div className="w-12 h-1.5 bg-gray-200 rounded-full mb-3"></div>
                <div className="w-8 h-8 rounded-full bg-gray-100 mb-3 flex items-center justify-center">
                  <Compass className="w-4 h-4 text-gray-400" />
                </div>
                <div className="w-full h-3 bg-gray-100 rounded mb-2"></div>
                <div className="grid grid-cols-4 gap-1.5 w-full mb-3">
                  <div className="h-5 bg-gray-100 rounded-lg"></div>
                  <div className="h-5 bg-gray-100 rounded-lg"></div>
                  <div className="h-5 bg-gray-100 rounded-lg"></div>
                  <div className="h-5 bg-gray-100 rounded-lg"></div>
                </div>
                <div className="w-full h-16 bg-gray-50 rounded-xl border border-dashed border-gray-200"></div>
              </div>
              
              {/* Left fanned screen */}
              <div className="absolute top-5 left-4 w-[130px] h-[180px] bg-white/80 rounded-2xl shadow-md border border-gray-200/60 p-2 transform -rotate-12 z-10 blur-[0.3px]">
                <div className="w-full h-2 bg-gray-200 rounded mb-2"></div>
                <div className="w-full h-20 bg-gray-100 rounded-lg"></div>
              </div>

              {/* Right fanned screen */}
              <div className="absolute top-5 right-4 w-[130px] h-[180px] bg-white/80 rounded-2xl shadow-md border border-gray-200/60 p-2 transform rotate-12 z-10 blur-[0.3px]">
                <div className="w-full h-2 bg-gray-200 rounded mb-2"></div>
                <div className="w-full h-20 bg-gray-100 rounded-lg"></div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl md:text-[28px] font-bold text-gray-900 tracking-tight mb-3">
                Faster Wireframing
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed font-normal">
                Rapidly transform ideas into wireframes and structured product flows with AI-assisted systems.
              </p>
            </div>
          </div>

          {/* Bottom Card 3: AI-Assisted Launches */}
          <div className="bg-gradient-to-b from-[#FFEAEA] to-[#FFF4F4] rounded-[40px] p-8 flex flex-col justify-between h-[480px] shadow-[0_4px_30px_rgb(0,0,0,0.02)] border border-rose-100/50">
            {/* Top Triple Circle Graphic */}
            <div className="w-full h-[220px] flex items-center justify-center">
              <div className="flex items-center justify-center relative">
                {/* Center Circle */}
                <div className="w-28 h-28 rounded-full bg-white shadow-xl flex items-center justify-center z-20 border border-rose-100">
                  <div className="text-amber-600 text-5xl font-serif">✳</div>
                </div>
                {/* Left Circle */}
                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center -mr-5 z-10 border border-gray-100">
                  <Box className="w-8 h-8 text-purple-600" />
                </div>
                {/* Right Circle */}
                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center -ml-5 z-10 border border-gray-100">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-pink-500 via-orange-400 to-purple-600"></div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl md:text-[28px] font-bold text-gray-900 tracking-tight mb-3">
                AI-Assisted Launches
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed font-normal">
                Reduce repetitive tasks and launch digital products more efficiently with faster execution workflows.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
