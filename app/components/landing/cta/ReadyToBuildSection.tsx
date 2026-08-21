"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  PenTool,
  LayoutTemplate,
  Cloud,
  GitBranch,
  Flame,
  Rocket,
  Zap,
  Clock3,
  Activity,
} from "lucide-react";

/* ---------------------------------------------------------- */
/* Animated count-up number, triggers once when scrolled into  */
/* view. Handles integers and one-decimal values (e.g. 99.9).  */
/* ---------------------------------------------------------- */
function AnimatedCounter({
  value,
  suffix = "",
  decimals = 0,
  duration = 1.6,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate(v) {
        setDisplay(Number(v.toFixed(decimals)));
      },
    });
    return () => controls.stop();
  }, [isInView, value, duration, decimals]);

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const NODES = [
  {
    key: "brand",
    label: "UX Copy & Brand",
    sub: "Strategy",
    icon: PenTool,
    bg: "#dbeafe",
    border: "#3b82f6",
    text: "#1e3a8a",
  },
  {
    key: "wireframe",
    label: "AI Wireframing",
    sub: "Prototyping",
    icon: LayoutTemplate,
    bg: "#2563eb",
    border: "#1d4ed8",
    text: "#ffffff",
    iconBg: "bg-white text-[#2563eb]",
  },
  {
    key: "aws",
    label: "Clean Next.js Code",
    sub: "Engineering",
    icon: Cloud,
    bg: "#e0f2fe",
    border: "#38bdf8",
    text: "#0369a1",
  },
  {
    key: "cicd",
    label: "CI/CD Automation",
    sub: "Build & Deploy",
    icon: GitBranch,
    bg: "#0f172a",
    border: "#334155",
    text: "#ffffff",
    iconBg: "bg-[#2563eb] text-white",
  },
  {
    key: "firebase",
    label: "Scalable Backend",
    sub: "Realtime & Cloud",
    icon: Flame,
    bg: "#eff6ff",
    border: "#60a5fa",
    text: "#1e40af",
  },
  {
    key: "launch",
    label: "Fast Launch",
    sub: "48h Delivery",
    icon: Rocket,
    bg: "#1d4ed8",
    border: "#1e3a8a",
    text: "#ffffff",
    iconBg: "bg-white text-[#1d4ed8]",
  },
];

const leftNodes = NODES.slice(0, 3);
const rightNodes = NODES.slice(3);

function NodeCard({
  node,
  index,
  side,
}: {
  node: (typeof NODES)[number];
  index: number;
  side: "left" | "right";
}) {
  const Icon = node.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -22 : 22 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.32 + index * 0.14 }}
      whileHover={{ y: -4, scale: 1.03 }}
      className={`${
        index % 2 === 0 ? "node-float" : "node-float-delay"
      } relative rounded-xl p-3 px-4.5 shadow-[3px_5px_0px_#000] flex items-center gap-3 w-56 sm:w-64 transition-transform`}
      style={{ backgroundColor: node.bg, borderWidth: 1, borderStyle: "solid", borderColor: node.border, color: node.text }}
    >
      <div className={`w-8 h-8 rounded-lg ${node.iconBg || "bg-[#0f172a] text-white"} flex items-center justify-center shrink-0 shadow-xs`}>
        <Icon className="w-4 h-4" strokeWidth={2.2} />
      </div>
      <div className="text-left">
        <div className="font-semibold text-sm leading-tight">{node.label}</div>
        <div className="text-[11px] opacity-75 font-normal">{node.sub}</div>
      </div>
    </motion.div>
  );
}

const METRICS = [
  {
    icon: Zap,
    value: 42,
    suffix: "+",
    decimals: 0,
    label: "Automations Shipped",
    body: "Custom AI Workflows Built And Running In Production.",
  },
  {
    icon: Clock3,
    value: 140,
    suffix: "h",
    decimals: 0,
    label: "Saved Every Month",
    body: "Manual Ops Work Removed From Client Teams Each Month.",
  },
  {
    icon: Rocket,
    value: 3.2,
    suffix: "x",
    decimals: 1,
    label: "Faster Releases",
    body: "Deploy Frequency After Automating The CI/CD Pipeline.",
  },
  {
    icon: Activity,
    value: 99.9,
    suffix: "%",
    decimals: 1,
    label: "Pipeline Uptime",
    body: "Monitored, Self-Healing Automation Running 24/7.",
  },
];

export default function ReadyToBuildSection() {
  return (
    <section className="relative w-full bg-[#F2F2F2] text-[#0f172a] py-6 md:py-8 border-t border-gray-100 overflow-hidden">
      {/* Keyframe styles: line flow, glow pulse, ambient float, shimmer */}
      <style>{`
        @keyframes strokeDashFlow {
          from { stroke-dashoffset: 24; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes ambientFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes ringExpand {
          0% { transform: scale(1); opacity: 0.55; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes shimmerSweep {
          0% { transform: translateX(-120%) skewX(-15deg); }
          100% { transform: translateX(220%) skewX(-15deg); }
        }
        @keyframes metricGlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animated-flow-line { animation: strokeDashFlow 1.2s linear infinite; }
        .node-float { animation: ambientFloat 4.5s ease-in-out infinite; }
        .node-float-delay { animation: ambientFloat 4.5s ease-in-out infinite; animation-delay: 1.1s; }
        .hub-ring { animation: ringExpand 2.6s cubic-bezier(0.2,0.6,0.4,1) infinite; }
        .cta-shimmer { animation: shimmerSweep 2.8s ease-in-out infinite; }
        .metric-icon-glow { animation: metricGlow 2.4s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .animated-flow-line, .node-float, .node-float-delay, .hub-ring, .cta-shimmer, .metric-icon-glow {
            animation: none !important;
          }
        }
      `}</style>

      {/* Soft ambient background grid for depth */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 20%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 20%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative w-full max-w-[95%] lg:max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-col items-center">

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
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#3b82f6]" />
            </span>
            AI-Native Software Studio
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-[#0f172a] tracking-tight leading-[1.15] mb-3 max-w-3xl"
          >
            <span className="block text-[#0f172a]">Ship Software.</span>
            <span className="block mt-1 text-[#0f172a]">
              <span className="font-serif italic font-normal text-[#0f172a]">Accelerate</span>{" "}
              <span className="font-medium text-[#0f172a]">Growth.</span>
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
            className="text-[#475569] text-base md:text-lg max-w-2xl font-normal leading-relaxed mb-6"
          >
            Jevxo Builds Production-Grade Products For Software Teams — From AI Prototyping To
            Cloud-Native Deployment, Without The Agency Overhead.
          </motion.p>

          {/* Premium CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-2 flex flex-col items-center gap-2.5"
          >
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#0f172a] text-white rounded-xl font-semibold text-sm tracking-wide shadow-[0_8px_24px_-8px_rgba(15,23,42,0.55)] hover:shadow-[0_12px_32px_-8px_rgba(37,99,235,0.55)] transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <span
                aria-hidden
                className="cta-shimmer absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent"
              />
              <Sparkles className="w-4 h-4 text-[#93c5fd] relative z-10" strokeWidth={2.2} />
              <span className="relative z-10">Book a Free Build Consult</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
            <span className="text-[11px] text-[#94a3b8] font-normal">
              No Sales Deck — Just A 20-Min Scoping Call With A Senior Engineer.
            </span>
          </motion.div>

          {/* NODE WORKFLOW DIAGRAM — 6 nodes flanking a center hub */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative w-full max-w-4xl min-h-[420px] sm:min-h-[400px] flex items-center justify-center py-2"
          >
            {/* SVG Connecting Curved Lines with Animated Flowing Dashes & Pulsing Glowing Dots */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block overflow-visible"
              viewBox="0 0 800 400"
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

              {/* Left column (3 nodes) -> Center Hub */}
              <path d="M 230 55 C 320 55, 320 200, 380 200" stroke="url(#blueGlowGrad)" strokeWidth="2.5" strokeDasharray="6 6" className="animated-flow-line" />
              <path d="M 250 200 C 320 200, 320 200, 380 200" stroke="url(#blueGlowGrad)" strokeWidth="2.5" strokeDasharray="6 6" className="animated-flow-line" />
              <path d="M 230 345 C 320 345, 320 200, 380 200" stroke="url(#blueGlowGrad)" strokeWidth="2.5" strokeDasharray="6 6" className="animated-flow-line" />

              {/* Center Hub -> Right column (3 nodes) */}
              <path d="M 420 200 C 480 200, 480 55, 560 55" stroke="url(#blueGlowGrad)" strokeWidth="2.5" strokeDasharray="6 6" className="animated-flow-line" />
              <path d="M 420 200 C 480 200, 480 200, 550 200" stroke="url(#blueGlowGrad)" strokeWidth="2.5" strokeDasharray="6 6" className="animated-flow-line" />
              <path d="M 420 200 C 480 200, 480 345, 560 345" stroke="url(#blueGlowGrad)" strokeWidth="2.5" strokeDasharray="6 6" className="animated-flow-line" />

              {/* Glowing Particle Dots moving along paths */}
              <circle r="4" fill="#2563eb"><animateMotion path="M 230 55 C 320 55, 320 200, 380 200" dur="2.2s" repeatCount="indefinite" /></circle>
              <circle r="4" fill="#10b981"><animateMotion path="M 250 200 C 320 200, 320 200, 380 200" dur="2.4s" repeatCount="indefinite" /></circle>
              <circle r="4" fill="#f97316"><animateMotion path="M 230 345 C 320 345, 320 200, 380 200" dur="2.6s" repeatCount="indefinite" /></circle>
              <circle r="4" fill="#3b82f6"><animateMotion path="M 420 200 C 480 200, 480 55, 560 55" dur="2.0s" repeatCount="indefinite" /></circle>
              <circle r="4" fill="#eab308"><animateMotion path="M 420 200 C 480 200, 480 200, 550 200" dur="2.3s" repeatCount="indefinite" /></circle>
              <circle r="4" fill="#8b5cf6"><animateMotion path="M 420 200 C 480 200, 480 345, 560 345" dur="2.5s" repeatCount="indefinite" /></circle>

              {/* Small '+' Node Badges on Connecting Paths */}
              <g transform="translate(310, 130)">
                <rect x="-11" y="-11" width="22" height="22" rx="7" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" className="shadow-sm" />
                <text x="0" y="4" textAnchor="middle" fill="#2563eb" fontSize="12" fontWeight="bold">+</text>
              </g>
              <g transform="translate(490, 270)">
                <rect x="-11" y="-11" width="22" height="22" rx="7" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" className="shadow-sm" />
                <text x="0" y="4" textAnchor="middle" fill="#2563eb" fontSize="12" fontWeight="bold">+</text>
              </g>
            </svg>

            {/* Layout Grid / Relative Positioning of 6 Node Cards & Center Hub */}
            <div className="relative w-full h-full flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 px-4">

              {/* Left Column Nodes (3) */}
              <div className="flex flex-col gap-5 sm:gap-8 items-center sm:items-start w-full sm:w-auto">
                {leftNodes.map((node, i) => (
                  <NodeCard key={node.key} node={node} index={i} side="left" />
                ))}
              </div>

              {/* Center Hub Node */}
              <div className="relative flex items-center justify-center my-2 sm:my-0">
                <span className="hub-ring absolute w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border-2 border-[#3b82f6] pointer-events-none" />
                <span
                  className="hub-ring absolute w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border-2 border-[#3b82f6] pointer-events-none"
                  style={{ animationDelay: "1.3s" }}
                />
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border-2 border-gray-900 shadow-[3px_5px_0px_#000] flex items-center justify-center z-10"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#0f172a] rounded-xl text-white flex items-center justify-center font-bold text-lg sm:text-xl shadow-inner">
                    ⚙
                  </div>
                </motion.div>
              </div>

              {/* Right Column Nodes (3) */}
              <div className="flex flex-col gap-5 sm:gap-8 items-center sm:items-end w-full sm:w-auto">
                {rightNodes.map((node, i) => (
                  <NodeCard key={node.key} node={node} index={i} side="right" />
                ))}
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}