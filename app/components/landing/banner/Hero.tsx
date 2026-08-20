"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#eef1fb] to-[#c9d6f7]">
      {/* Grid Background Pattern */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e2e6f5 1px, transparent 1px), linear-gradient(to bottom, #e2e6f5 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      {/* Radial glow to fade grid at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0)_60%)]" />

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-20 pb-24 w-full max-w-7xl mx-auto">
        {/* Startup Badge */}
        <div className="inline-flex items-center gap-3 bg-white border border-gray-200/70 px-5 py-2.5 rounded-full shadow-md shadow-gray-200/60 mb-10 group hover:scale-[1.02] transition-transform cursor-pointer">
          <Image
            src="/hero1.png"
            alt="Startup logos"
            width={124}
            height={24}
            className="h-8 w-auto object-contain"
          />
          <span className="text-sm font-semibold text-gray-800 tracking-tight">
            50+ startup & founders
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-[74px] font-medium text-[#0a0c1f] tracking-tight leading-[1.1] max-w-7xl">
          We Design &amp; Dev Agency <br className="hidden sm:inline" />
          For B2B{" "}
          <span className="italic font-serif font-medium">
            SaaS Companies
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-7 text-gray-600 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
          A full-service UI/UX and development agency helping startups and
          businesses create fast, scalable, and user-focused digital
          products.
        </p>

        {/* Action Button */}
        <div className="mt-10 flex justify-center w-full sm:w-auto">
          <Link
            href="#book"
            className="w-full sm:w-auto flex items-center justify-center gap-3.5 bg-gradient-to-b from-[#2a2c30] to-[#121316] hover:from-[#32353a] hover:to-[#1a1b1f] text-white px-8 py-4 rounded-full font-medium text-lg sm:text-xl shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-white/10"
          >
            <Image
              src="/meet.png"
              alt="Google Meet"
              width={26}
              height={26}
              className="w-6 h-6 object-contain"
            />
            <span className="tracking-tight font-normal">Book Free Consultation</span>
          </Link>
        </div>
      </main>
    </section>
  );
}