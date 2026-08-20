"use client";

import { motion } from "framer-motion";

export default function ReadyToBuildSection() {
  return (
    <section className="w-full bg-[#F8F9FA] text-[#0f172a] py-10 md:py-14 border-t border-gray-100 overflow-hidden">
      {/* Keyframe styles for SVG line dash flow and glowing pulse */}
      <style>{`
        @keyframes strokeDashFlow {
          from { stroke-dashoffset: 24; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; filter: drop-shadow(0 0 3px rgba(59,130,246,0.5)); }
          50% { opacity: 1; filter: drop-shadow(0 0 8px rgba(59,130,246,0.9)); }
        }
        .animated-flow-line {
          animation: strokeDashFlow 1.2s linear infinite;
        }
      `}</style>

      <div className="max-w-10/12 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* ========================================================= */}
        {/* PART 1: TOP HERO - AUTOMATE WORK & NODE WORKFLOW DIAGRAM */}
        {/* ========================================================= */}
        <div className="w-full flex flex-col items-center text-center mb-10 md:mb-14">
          
          {/* Pill Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-[#3b82f6]/40 text-[#3b82f6] px-3.5 py-1 rounded-full text-xs font-normal tracking-wide inline-flex items-center gap-1.5 shadow-2xs mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
            AI &amp; Workflow Automation
          </motion.div>

          {/* Main Headline */}
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-[#0f172a] tracking-tight leading-[1.15] mb-3 max-w-3xl"
          >
            <span className="block text-[#0f172a]">Automate Work.</span>
            <span className="block mt-1 text-[#0f172a]">
              <span className="font-serif italic font-normal text-[#0f172a]">Accelerate</span> <span className="font-medium text-[#0f172a]">Growth.</span>
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
            className="text-[#475569] text-base md:text-lg max-w-2xl font-normal leading-relaxed mb-5"
          >
            Jevxo Helps Teams Streamline UX Workflows, Eliminate Manual Tasks, And Boost Productivity with Modern AI &amp; High-Converting Web Architecture.
          </motion.p>

          {/* Get Started Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-2"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-gray-900 border border-gray-300 rounded-lg font-medium text-sm shadow-xs hover:border-blue-500 hover:text-blue-600 hover:shadow-md transition-all cursor-pointer"
            >
              Get Started
            </a>
          </motion.div>

          {/* NODE WORKFLOW DIAGRAM CONTAINER WITH ANIMATED SVG PATH FLOWS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative w-full max-w-4xl min-h-[260px] sm:min-h-[290px] flex items-center justify-center py-2"
          >
            {/* SVG Connecting Curved Lines with Animated Flowing Dashes & Pulsing Glowing Dots */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block overflow-visible" 
              viewBox="0 0 800 290" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="blueGlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#2563eb" stopOpacity="1" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Path 1: Creative Writer (Top-Left) -> Center Hub */}
              <path 
                d="M 230 75 C 310 75, 310 145, 380 145" 
                stroke="url(#blueGlowGrad)" 
                strokeWidth="2.5" 
                strokeDasharray="6 6" 
                className="animated-flow-line" 
              />
              {/* Path 2: Follow Up Mail (Bottom-Left) -> Center Hub */}
              <path 
                d="M 270 215 C 330 215, 330 145, 380 145" 
                stroke="url(#blueGlowGrad)" 
                strokeWidth="2.5" 
                strokeDasharray="6 6" 
                className="animated-flow-line" 
              />
              {/* Path 3: Center Hub -> Payment Info (Top-Right) */}
              <path 
                d="M 420 145 C 470 145, 480 85, 560 85" 
                stroke="url(#blueGlowGrad)" 
                strokeWidth="2.5" 
                strokeDasharray="6 6" 
                className="animated-flow-line" 
              />
              {/* Path 4: Center Hub -> Order Listed (Bottom-Right) */}
              <path 
                d="M 420 145 C 470 145, 480 205, 540 205" 
                stroke="url(#blueGlowGrad)" 
                strokeWidth="2.5" 
                strokeDasharray="6 6" 
                className="animated-flow-line" 
              />

              {/* Glowing Particle Dots moving along paths */}
              <circle r="4" fill="#2563eb" className="shadow-md">
                <animateMotion path="M 230 75 C 310 75, 310 145, 380 145" dur="2.2s" repeatCount="indefinite" />
              </circle>
              <circle r="4" fill="#10b981" className="shadow-md">
                <animateMotion path="M 270 215 C 330 215, 330 145, 380 145" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle r="4" fill="#3b82f6" className="shadow-md">
                <animateMotion path="M 420 145 C 470 145, 480 85, 560 85" dur="2.0s" repeatCount="indefinite" />
              </circle>
              <circle r="4" fill="#8b5cf6" className="shadow-md">
                <animateMotion path="M 420 145 C 470 145, 480 205, 540 205" dur="2.4s" repeatCount="indefinite" />
              </circle>

              {/* Small '+' Node Badges on Connecting Paths with soft shadow */}
              <g transform="translate(305, 110)">
                <rect x="-11" y="-11" width="22" height="22" rx="7" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" className="shadow-sm" />
                <text x="0" y="4" textAnchor="middle" fill="#2563eb" fontSize="12" fontWeight="bold">+</text>
              </g>
              <g transform="translate(485, 175)">
                <rect x="-11" y="-11" width="22" height="22" rx="7" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" className="shadow-sm" />
                <text x="0" y="4" textAnchor="middle" fill="#2563eb" fontSize="12" fontWeight="bold">+</text>
              </g>
            </svg>

            {/* Layout Grid / Relative Positioning of 4 Node Cards & Center Hub */}
            <div className="relative w-full h-full flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 px-4">
              
              {/* Left Column Nodes (Top & Bottom) */}
              <div className="flex flex-col gap-6 sm:gap-14 items-center sm:items-start w-full sm:w-auto">
                {/* Node 1: Creative Writer */}
                <motion.div 
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="bg-[#c8b6ff] border border-[#a78bfa] text-[#1e1b4b] rounded-xl p-3 px-4.5 shadow-[3px_5px_0px_#000] flex items-center gap-3 w-56 sm:w-60 transition-transform"
                >
                  <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm leading-tight">UX Copy &amp; Brand</div>
                    <div className="text-[11px] opacity-75 font-normal">Strategy</div>
                  </div>
                </motion.div>

                {/* Node 2: Follow up mail */}
                <motion.div 
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="bg-[#b9fbc0] border border-[#86efac] text-[#064e3b] rounded-xl p-3 px-4.5 shadow-[3px_5px_0px_#000] flex items-center gap-3 w-56 sm:w-60 transition-transform"
                >
                  <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9"/>
                      <path d="M12 7v10M7 12h10"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm leading-tight">AI Wireframing</div>
                    <div className="text-[11px] opacity-75 font-normal">Prototyping</div>
                  </div>
                </motion.div>
              </div>

              {/* Center Hub Node */}
              <motion.div 
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border-2 border-gray-900 shadow-[3px_5px_0px_#000] flex items-center justify-center z-10 my-2 sm:my-0"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#0f172a] rounded-xl text-white flex items-center justify-center font-bold text-lg sm:text-xl shadow-inner">
                  ⚙
                </div>
              </motion.div>

              {/* Right Column Nodes (Top & Bottom) */}
              <div className="flex flex-col gap-6 sm:gap-14 items-center sm:items-end w-full sm:w-auto">
                {/* Node 3: Payment info */}
                <motion.div 
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="bg-[#b9fbc0] border border-[#86efac] text-[#064e3b] rounded-xl p-3 px-4.5 shadow-[3px_5px_0px_#000] flex items-center gap-3 w-56 sm:w-60 transition-transform"
                >
                  <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                      <rect x="3" y="5" width="18" height="14" rx="2"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm leading-tight">Next.js Code</div>
                    <div className="text-[11px] opacity-75 font-normal">Engineering</div>
                  </div>
                </motion.div>

                {/* Node 4: Order listed */}
                <motion.div 
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="bg-[#c8b6ff] border border-[#a78bfa] text-[#1e1b4b] rounded-xl p-3 px-4.5 shadow-[3px_5px_0px_#000] flex items-center gap-3 w-56 sm:w-60 transition-transform"
                >
                  <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center shrink-0 font-mono text-xs font-bold">
                    48h
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm leading-tight">Fast Launch</div>
                    <div className="text-[11px] opacity-75 font-normal">48h Delivery</div>
                  </div>
                </motion.div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-gray-200 mb-8 sm:mb-10" />

        {/* ========================================================= */}
        {/* PART 2: MIDDLE NARRATIVE - ABOUT JEVXO */}
        {/* ========================================================= */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-10 sm:mb-14">
          {/* Left Title */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#3b82f6] mb-3 block">
              | ABOUT JEVXO |
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#0a0c16] tracking-tight leading-[1.18] max-w-2xl">
              At Jevxo, We Believe Digital Work Should Flow — Not Slow You Down
            </h2>
          </div>

          {/* Right Mission Text */}
          <div className="lg:col-span-4 lg:pt-8">
            <p className="text-[#475569] font-medium text-sm sm:text-base leading-relaxed max-w-sm">
              Our Mission Is Simple: Make Premium UI/UX &amp; Software Development Accessible, Scalable, And Effortless.
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* PART 3: BOTTOM STATS BAR GRID (10x, 50+, 99.9%, 24/7) */}
        {/* ========================================================= */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 border border-gray-200 rounded-2xl bg-white p-6 sm:p-8 md:p-10 shadow-xs">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-start lg:pr-8 lg:border-r border-gray-200/80">
            <span className="text-4xl sm:text-5xl font-bold text-[#0a0c16] tracking-tight mb-2">
              10x
            </span>
            <span className="font-semibold text-gray-900 text-sm mb-1">
              Faster Delivery
            </span>
            <p className="text-gray-500 text-xs leading-relaxed font-normal">
              First Draft Delivery Within 48 Hours, Not Weeks.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-start lg:px-8 lg:border-r border-gray-200/80">
            <span className="text-4xl sm:text-5xl font-bold text-[#0a0c16] tracking-tight mb-2">
              50+
            </span>
            <span className="font-semibold text-gray-900 text-sm mb-1">
              Happy Clients
            </span>
            <p className="text-gray-500 text-xs leading-relaxed font-normal">
              High-Growth Startups &amp; Enterprise Brands.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-start lg:px-8 lg:border-r border-gray-200/80">
            <span className="text-4xl sm:text-5xl font-bold text-[#0a0c16] tracking-tight mb-2">
              99.9%
            </span>
            <span className="font-semibold text-gray-900 text-sm mb-1">
              Precision
            </span>
            <p className="text-gray-500 text-xs leading-relaxed font-normal">
              Pixel-Perfect UI &amp; Clean Frontend Guarantee.
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-start lg:pl-8">
            <span className="text-4xl sm:text-5xl font-bold text-[#0a0c16] tracking-tight mb-2">
              24/7
            </span>
            <span className="font-semibold text-gray-900 text-sm mb-1">
              Senior Support
            </span>
            <p className="text-gray-500 text-xs leading-relaxed font-normal">
              Direct Senior Specialist Communication, Never Ghosting.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}