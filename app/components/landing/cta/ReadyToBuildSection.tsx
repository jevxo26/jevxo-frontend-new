"use client";

import Link from "next/link";
import { ArrowUpRight, Zap } from "lucide-react";
import { ReactNode } from "react";

interface OrbitIconProps {
  ringSize: number;
  duration: number;
  direction?: "normal" | "reverse";
  startAngle: number;
  bg: string;
  children: ReactNode;
}

/* Orbit wrapper: outer div rotates around the shared center,
   inner div counter-rotates so the icon itself always stays upright. */
function OrbitIcon({
  ringSize,
  duration,
  direction = "normal",
  startAngle,
  bg,
  children,
}: OrbitIconProps) {
  return (
    <div
      className="absolute top-1/2 left-1/2"
      style={{
        width: ringSize,
        height: ringSize,
        marginLeft: -ringSize / 2,
        marginTop: -ringSize / 2,
        animation: `orbitSpin ${duration}s linear infinite`,
        animationDirection: direction,
        transform: `rotate(${startAngle}deg)`,
      }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          animation: `orbitCounterSpin ${duration}s linear infinite`,
          animationDirection: direction === "normal" ? "reverse" : "normal",
        }}
      >
        <div
          className={`w-14 h-14 rounded-full shadow-xl border border-white/10 flex items-center justify-center ${bg}`}
          style={{ animation: "iconFloat 3.2s ease-in-out infinite" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ReadyToBuildSection() {
  return (
    <section className="w-full py-32 bg-[#020817] text-white relative overflow-hidden flex justify-center items-center">
      {/* Keyframes */}
      <style>{`
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbitCounterSpin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes iconFloat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        @keyframes ringPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.75; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
        }
        @keyframes capsulePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.25); }
          50% { box-shadow: 0 0 0 10px rgba(255,255,255,0); }
        }
      `}</style>

      {/* Base radial background: bright blue core fading to deep navy edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 900px 700px at 50% 50%, #1a5cff 0%, #0b3ecf 28%, #061e7a 52%, #020a30 75%, #020817 100%)",
        }}
      />

      {/* Radial Center Glow (extra brightness pulse on top of base) */}
      <div
        className="absolute top-1/2 left-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(120,170,255,0.55)_0%,rgba(0,82,255,0)_70%)] pointer-events-none"
        style={{ animation: "glowPulse 6s ease-in-out infinite" }}
      />

      {/* Concentric Dashed Orbit Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[500px] h-[500px] rounded-full border-2 border-dashed border-white/25 absolute"
          style={{ animation: "ringPulse 4s ease-in-out infinite" }}
        />
        <div
          className="w-[800px] h-[800px] rounded-full border-2 border-dashed border-white/20 absolute"
          style={{ animation: "ringPulse 5s ease-in-out infinite" }}
        />
        <div
          className="w-[1150px] h-[1150px] rounded-full border-2 border-dashed border-white/15 absolute"
          style={{ animation: "ringPulse 6s ease-in-out infinite" }}
        />
      </div>

      {/* Floating Orbit Tool Icons - continuously orbiting */}
      <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none z-10 hidden md:block">
        {/* Middle ring icons (500px orbit) */}
        <OrbitIcon ringSize={500} duration={22} startAngle={140} bg="bg-white text-gray-900 font-bold text-xl">
          ◠
        </OrbitIcon>

        <OrbitIcon ringSize={500} duration={22} startAngle={20} bg="bg-[#090d16] text-yellow-400 font-bold text-lg">
          M
        </OrbitIcon>

        {/* 800px orbit icons */}
        <OrbitIcon ringSize={800} duration={32} direction="reverse" startAngle={205} bg="bg-[#090d16] text-white font-bold text-base">
          Fi
        </OrbitIcon>

        <OrbitIcon ringSize={800} duration={32} direction="reverse" startAngle={295} bg="bg-[#090d16] text-white">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.259 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7466-7.0729z" />
          </svg>
        </OrbitIcon>

        {/* 1150px orbit icons */}
        <OrbitIcon ringSize={1150} duration={42} startAngle={160} bg="bg-[#090d16] text-[#d97757] font-serif font-bold text-2xl">
          ✳
        </OrbitIcon>

        <OrbitIcon ringSize={1150} duration={42} startAngle={38} bg="bg-[#090d16] text-emerald-400">
          <Zap className="w-6 h-6 fill-current" />
        </OrbitIcon>

        <OrbitIcon ringSize={1150} duration={42} startAngle={-15} bg="bg-white text-purple-600 font-bold text-lg">
          ❖
        </OrbitIcon>

        <OrbitIcon ringSize={800} duration={32} direction="reverse" startAngle={70} bg="bg-[#090d16] text-white">
          <div className="grid grid-cols-2 gap-0.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-orange-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
          </div>
        </OrbitIcon>
      </div>

      {/* Main Content Center */}
      <div className="max-w-3xl w-full px-6 flex flex-col items-center text-center relative z-20">
        {/* Top Avatar Cluster Capsule */}
        <div
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 flex items-center gap-2 mb-8 shadow-xl"
          style={{ animation: "capsulePulse 2.6s ease-in-out infinite" }}
        >
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
          Stop waiting weeks for design feedback. Get your first draft in 48
          hours and launch your product before your competitors even finish
          planning.
        </p>

        {/* Contact Us Pill Button */}
        <Link
          href="#contact"
          className="inline-flex items-center gap-3 bg-white hover:bg-blue-50 text-[#0052ff] rounded-full pl-7 pr-2 py-2 transition-all shadow-2xl group"
        >
          <span className="text-lg font-medium tracking-tight">
            Request Free Audit
          </span>
          <div className="w-10 h-10 rounded-full bg-[#0052ff] flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
            <ArrowUpRight className="w-5 h-5 text-white" />
          </div>
        </Link>
      </div>
    </section>
  );
}