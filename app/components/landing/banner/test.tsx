"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const row1 = [
    "/Jevxo/01.png",
    "/Jevxo/02.png",
    "/Jevxo/03.png",
    "/Jevxo/04.png",
    "/Jevxo/05.png",
  ];

  const row2 = [
    "/Jevxo/06.png",
    "/Jevxo/07.png",
    "/Jevxo/08.png",
    "/Jevxo/09.png",
    "/Jevxo/10.png",
  ];

  // Triplicating arrays to ensure a smooth, unbroken infinite marquee animation
  const row1List = [...row1, ...row1, ...row1];
  const row2List = [...row2, ...row2, ...row2];

  return (
    <div className="w-full flex flex-col">
      {/* Hero + Marquee wrapped together so the background gradient and grid pattern
          are ONE continuous layer — this removes the double grid-line "seam" that
          showed up at the old section boundary, and lets the deep blue (#5A87F2)
          sit consistently behind the card row */}
      <div className="relative w-full overflow-hidden bg-[linear-gradient(to_bottom,#ffffff_0%,#dbe3fa_16%,#5A87F2_38%,#5A87F2_66%,#f6f8fc_94%)]">
        {/* Single Grid Background Pattern spanning the whole hero + marquee area */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none z-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0.45) 1px, transparent 2px), linear-gradient(to bottom, rgba(255, 255, 255, 0.45) 1px, transparent 2px)",
            backgroundSize: "140px 130px",
          }}
        />

        {/* Radial glow, only near the top, to keep the headline readable against the grid */}
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0)_60%)] pointer-events-none z-0" />

        {/* Top Hero Section */}
        <section className="relative z-10 w-full">
        <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-20 pb-24 w-full max-w-[95%] lg:max-w-6xl mx-auto">
          {/* Startup Badge */}
          <div className="inline-flex items-center gap-3 bg-white border border-[#2563eb] px-4 py-1.5 sm:py-2 rounded-full shadow-xs mb-8 group hover:scale-[1.02] transition-transform cursor-pointer">
            <Image
              src="/hero1.png"
              alt="Startup logos"
              width={110}
              height={22}
              className="h-5 sm:h-6 w-auto object-contain"
            />
            <span className="text-xs sm:text-sm font-normal text-gray-900 tracking-tight">
              50+ startup &amp; founders
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-[74px] font-medium text-[#0a0c1f] tracking-tight leading-[1.1] max-w-4xl">
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
              href="https://calendly.com/jevxo-info/30min"
              target="_blank"
              rel="noopener noreferrer"
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

        {/* Hero Bottom Showcase Marquee Section */}
        {/* No separate background or grid here anymore — it shares the single
            gradient + grid on the outer wrapper above, so the deep #5A87F2 blue
            behind the card row is the SAME layer as the hero, with no seam */}
        <section className="relative z-10 w-full pt-4 pb-16 md:pb-24">
        {/* Side Fade Gradient Overlays - matched to the deep #5A87F2 blue behind the cards */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#5A87F2] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#5A87F2] to-transparent z-20" />

        {/* Bottom Fade Gradient Overlay */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 sm:h-80 md:h-[420px] bg-gradient-to-b from-transparent via-[#f6f8fc]/60 via-35% via-[#f6f8fc]/95 via-65% to-[#f6f8fc] z-20" />

        <div className="relative z-10 flex flex-col gap-3 sm:gap-4 md:gap-5 w-full">
          {/* Row 1: Right to Left (animate-marquee) */}
          <div className="overflow-hidden w-full flex">
            <div className="flex items-center gap-3 sm:gap-4 md:gap-5 animate-marquee">
              {row1List.map((src, index) => (
                <div
                  key={`row1-${index}`}
                  className="relative flex-shrink-0 w-[320px] sm:w-[440px] md:w-[540px] h-[220px] sm:h-[300px] md:h-[360px] rounded-none overflow-hidden border border-white/80 shadow-[0_12px_30px_rgba(20,30,80,0.18)] bg-white group hover:shadow-[0_16px_36px_rgba(20,30,80,0.24)] transition-all duration-300"
                >
                  <Image
                    src={src}
                    alt={`Portfolio showcase ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 480px, 580px"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Left to Right (animate-marquee-reverse) */}
          <div className="overflow-hidden w-full flex">
            <div className="flex items-center gap-3 sm:gap-4 md:gap-5 animate-marquee-reverse">
              {row2List.map((src, index) => (
                <div
                  key={`row2-${index}`}
                  className="relative flex-shrink-0 w-[320px] sm:w-[440px] md:w-[540px] h-[220px] sm:h-[300px] md:h-[360px] rounded-none overflow-hidden border border-white/80 shadow-[0_12px_30px_rgba(20,30,80,0.18)] bg-white group hover:shadow-[0_16px_36px_rgba(20,30,80,0.24)] transition-all duration-300"
                >
                  <Image
                    src={src}
                    alt={`Portfolio showcase ${index + 6}`}
                    fill
                    sizes="(max-width: 768px) 480px, 580px"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        </section>
      </div>
    </div>
  );
}