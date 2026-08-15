"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";

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

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-20 pb-24 max-w-10/12 mx-auto">
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
        <h1 className="text-4xl  md:text-[74px] font-medium text-[#0a0c1f] tracking-tight leading-[1.1] max-w-7xl">
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

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
          {/* Consultation Button */}
          <Link
            href="#book"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#0052ff] hover:bg-[#0044d6] text-white px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <Calendar className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            <span>Book Free Consultation</span>
          </Link>

          {/* Whatsapp Button */}
          <Link
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#15171a] text-white px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base shadow-lg shadow-black/25 hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-white/10"
          >
            <Image
              src="/whatsapp.png"
              alt="WhatsApp"
              width={14}
              height={14}
              className="w-15 h-10 object-contain"
            />
            <span>Chat on Whatsapp</span>
          </Link>
        </div>
      </main>
    </section>
  );
}