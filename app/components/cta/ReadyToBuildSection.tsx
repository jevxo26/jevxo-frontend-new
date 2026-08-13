import Link from "next/link";
import { ArrowUpRight, Zap, Bot } from "lucide-react";

export default function ReadyToBuildSection() {
  return (
    <section className="w-full py-32 bg-[#0052ff] text-white relative overflow-hidden flex justify-center items-center">
      
      {/* Concentric Dashed Orbit Rings Overlay matching screenshot */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Ring 1 (Smallest Inner Orbit) */}
        <div className="w-[500px] h-[500px] rounded-full border border-dashed border-white/20 absolute"></div>
        {/* Ring 2 (Middle Orbit) */}
        <div className="w-[800px] h-[800px] rounded-full border border-dashed border-white/20 absolute"></div>
        {/* Ring 3 (Outer Orbit) */}
        <div className="w-[1150px] h-[1150px] rounded-full border border-dashed border-white/15 absolute"></div>
      </div>

      {/* Floating Orbit Tool Icons matching screenshot positions */}
      <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none z-10 hidden md:block">
        
        {/* Left Far - Arc / White Circle */}
        <div className="absolute left-[8%] top-[45%] w-14 h-14 rounded-full bg-white text-gray-900 shadow-xl flex items-center justify-center font-bold text-xl">
          ◠
        </div>

        {/* Top Left - Framer (Fi) */}
        <div className="absolute left-[20%] top-[12%] w-14 h-14 rounded-full bg-[#090d16] text-white shadow-xl border border-white/10 flex items-center justify-center font-bold text-base">
          Fi
        </div>

        {/* Middle Left - Miro */}
        <div className="absolute left-[23%] top-[40%] w-14 h-14 rounded-full bg-[#090d16] text-yellow-400 shadow-xl border border-white/10 flex items-center justify-center font-bold text-lg">
          M
        </div>

        {/* Bottom Left - Claude */}
        <div className="absolute left-[20%] top-[72%] w-14 h-14 rounded-full bg-[#090d16] text-[#d97757] shadow-xl border border-white/10 flex items-center justify-center font-serif font-bold text-2xl">
          ✳
        </div>

        {/* Top Right - ChatGPT / OpenAI */}
        <div className="absolute right-[24%] top-[14%] w-14 h-14 rounded-full bg-[#090d16] text-white shadow-xl border border-white/10 flex items-center justify-center">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.259 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7466-7.0729z"/>
          </svg>
        </div>

        {/* Middle Right - Bolt */}
        <div className="absolute right-[23%] top-[42%] w-14 h-14 rounded-full bg-[#090d16] text-emerald-400 shadow-xl border border-white/10 flex items-center justify-center">
          <Zap className="w-6 h-6 fill-current" />
        </div>

        {/* Bottom Right - Figma */}
        <div className="absolute right-[22%] top-[68%] w-16 h-16 rounded-full bg-[#090d16] text-white shadow-xl border border-white/10 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-0.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-orange-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
          </div>
        </div>

        {/* Far Right - White Circle */}
        <div className="absolute right-[11%] top-[43%] w-14 h-14 rounded-full bg-white text-purple-600 shadow-xl flex items-center justify-center font-bold text-lg">
          ❖
        </div>

      </div>

      {/* Main Content Center */}
      <div className="max-w-3xl w-full px-6 flex flex-col items-center text-center relative z-20">
        
        {/* Top Avatar Cluster Capsule */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 flex items-center gap-2 mb-8 shadow-xl">
          <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center text-xs font-bold shadow">
            ❖
          </div>
          <div className="w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold shadow">
            S
          </div>
          <div className="w-7 h-7 rounded-full bg-[#d97757] text-white flex items-center justify-center text-xs font-bold shadow">
            ✳
          </div>
          <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow">
            W
          </div>
          <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold shadow">
            F
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.15] mb-6">
          Ready to build something <br />
          that actually converts?
        </h2>

        {/* Subtext */}
        <p className="text-blue-100 text-base md:text-lg max-w-xl leading-relaxed mb-10 font-normal opacity-90">
          Stop waiting weeks for design feedback. Get your first draft in 48 hours and launch your product before your competitors even finish planning.
        </p>

        {/* Contact Us Pill Button */}
        <Link
          href="#contact"
          className="inline-flex items-center gap-3 bg-[#23262d] hover:bg-black text-white rounded-full pl-7 pr-2 py-2 transition-all shadow-2xl group"
        >
          <span className="text-lg font-medium tracking-tight">Contact Us</span>
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
            <ArrowUpRight className="w-5 h-5 text-[#23262d]" />
          </div>
        </Link>

      </div>
    </section>
  );
}
