"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ConcentricCtaSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#00011C] py-24 sm:py-32 flex items-center justify-center min-h-[500px] sm:min-h-[600px]">
      
      {/* Background Radial Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: "radial-gradient(circle at 50% 50%, #003FEA 0%, #00011C 65%)"
        }}
      />
      
      {/* Scaled Container for Rings & Icons (Ensures perfect mobile responsiveness) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-[0.6] sm:scale-[0.8] lg:scale-100">
        
        {/* Concentric Dashed Rings */}
        <div className="absolute w-[400px] h-[400px] rounded-full border-[3px] border-dashed border-[#003FEA]/60 animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-[650px] h-[650px] rounded-full border-[3px] border-dashed border-[#003FEA]/50 animate-[spin_80s_linear_infinite_reverse]" />
        <div className="absolute w-[950px] h-[950px] rounded-full border-[3px] border-dashed border-[#003FEA]/30 animate-[spin_100s_linear_infinite]" />
        <div className="absolute w-[1300px] h-[1300px] rounded-full border-[3px] border-dashed border-[#003FEA]/20 animate-[spin_120s_linear_infinite_reverse]" />

        {/* Floating Brand Icons */}
        {/* Ring 1 (Inner) */}
        <div className="absolute w-[400px] h-[400px] animate-[spin_60s_linear_infinite]">
          {/* Yellow Sketch-like Icon */}
          <div className="absolute right-10 bottom-16 w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center shadow-lg border border-white/10 animate-[spin_60s_linear_infinite_reverse]">
             <div className="w-5 h-5 bg-[#FFC700] rounded-sm transform rotate-45" />
          </div>
          {/* Red framer like */}
          <div className="absolute left-0 top-1/3 w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center shadow-lg border border-white/10 animate-[spin_60s_linear_infinite_reverse]">
             <span className="text-[#00AEFF] font-black text-lg">F</span>
          </div>
        </div>

        {/* Ring 2 */}
        <div className="absolute w-[650px] h-[650px] animate-[spin_80s_linear_infinite_reverse]">
          {/* Webflow-like Icon */}
          <div className="absolute right-20 top-32 w-14 h-14 rounded-full bg-[#1a202c] flex items-center justify-center shadow-lg border border-white/10 animate-[spin_80s_linear_infinite]">
             <span className="text-[#4353FF] font-bold text-2xl font-serif">W</span>
          </div>
          {/* Abstract asterisk */}
          <div className="absolute bottom-24 left-24 w-14 h-14 rounded-full bg-[#1a202c] flex items-center justify-center shadow-lg border border-white/10 animate-[spin_80s_linear_infinite]">
             <span className="text-[#FF7262] text-2xl">✺</span>
          </div>
        </div>
        
        {/* Ring 3 */}
        <div className="absolute w-[950px] h-[950px] animate-[spin_100s_linear_infinite]">
          <div className="absolute left-32 top-1/3 w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg border border-white/10 animate-[spin_100s_linear_infinite_reverse]">
            <span className="text-white font-bold text-lg">Fi</span>
          </div>
          <div className="absolute right-32 bottom-1/3 w-14 h-14 rounded-full bg-emerald-500/20 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/10 animate-[spin_100s_linear_infinite_reverse]">
            <span className="text-emerald-400 font-bold text-2xl">⚡</span>
          </div>
        </div>

      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-[56px] font-bold text-white tracking-tight mb-6 leading-tight"
        >
          Ready to build something<br className="hidden sm:block" /> that actually converts?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-blue-100/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Stop waiting weeks for design feedback. Get your first draft in 48 hours and 
          launch your product before your competitors even finish planning.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 bg-white text-[#003FEA] pl-6 pr-2 py-2 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-50 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-[#003FEA]/50"
          >
            <span>Request Free Audit</span>
            <div className="bg-[#003FEA] text-white p-2 rounded-full">
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </Link>
        </motion.div>
      </div>

    </section>
  );
}
