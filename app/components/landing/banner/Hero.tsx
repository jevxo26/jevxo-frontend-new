"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const GRID_COLS = 24;
const GRID_ROWS = 16;
const gridCells = Array.from({ length: GRID_COLS * GRID_ROWS });

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

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
          are ONE continuous layer — no seam at the old section boundary. */}
      <div className="relative w-full overflow-hidden bg-[linear-gradient(to_bottom,#ffffff_0%,#dbe3fa_16%,#5A87F2_38%,#5A87F2_66%,#F2F2F2_94%)]">
        {/* Single Grid Background Pattern spanning the whole hero + marquee area */}
        <div
          className="absolute inset-0 opacity-60 pointer-events-none z-0 bg-[length:75px_75px] sm:bg-[length:120px_120px]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #eef0f8ff 1px, transparent 2px), linear-gradient(to bottom, #eef0f8ff 1px, transparent 2px)",
          }}
        />

        {/* Interactive grid — hovering a cell blooms a soft white glow, matching the grid above */}
        <div
          className="absolute inset-0 z-[1] grid pointer-events-none grid-cols-[repeat(24,75px)] auto-rows-[75px] sm:grid-cols-[repeat(24,120px)] sm:auto-rows-[120px]"
        >
          {gridCells.map((_, i) => (
            <div
              key={i}
              className="pointer-events-auto transition-[background-size] duration-500 ease-out [background-repeat:no-repeat] [background-position:center] [background-size:0%_0%] hover:[background-size:170%_170%]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at center, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 70%)",
              }}
            />
          ))}
        </div>

        {/* Radial glow, only near the top, to keep the headline readable against the grid */}
        <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(ellipse_900px_420px_at_50%_26%,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0)_75%)] pointer-events-none z-0" />

        {/* Top Hero Section */}
        <section className="relative z-10 w-full">
        <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-20 pb-24 w-full max-w-[95%] lg:max-w-6xl mx-auto">
          {/* Startup Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-3 bg-white border border-[#2563eb] px-4 py-1.5 sm:py-2 rounded-full shadow-xs mb-8 group hover:scale-[1.02] transition-transform cursor-pointer"
          >
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
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl md:text-[74px] font-medium text-[#0a0c1f] tracking-tight leading-[1.1] max-w-4xl"
          >
            We Design &amp; Dev Agency <br className="hidden sm:inline" />
            For B2B{" "}
            <span className="font-serif italic font-normal">
              SaaS Companies
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-7 text-gray-600 text-base sm:text-lg max-w-2xl leading-relaxed font-normal"
          >
            A full-service UI/UX and development agency helping startups and
            businesses create fast, scalable, and user-focused digital
            products.
          </motion.p>

          {/* Action Button */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-10 flex justify-center w-full sm:w-auto"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="https://calendly.com/jevxo-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-full sm:w-auto flex items-center justify-center gap-3.5 px-8 py-3.5 sm:py-4 rounded-full font-medium text-lg sm:text-xl text-white backdrop-blur-xl bg-gradient-to-b from-[#3a3c42]/85 via-[#1a1b20]/90 to-[#0b0c0e]/95 border border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.5)] transition-all duration-300 overflow-hidden"
              >
                {/* Curved top glass glare / sheen reflection line */}
                <div className="absolute inset-x-3 top-0 h-[45%] bg-gradient-to-b from-white/25 via-white/5 to-transparent rounded-t-full pointer-events-none" />

                <Image
                  src="/meet.png"
                  alt="Google Meet"
                  width={28}
                  height={28}
                  className="w-6 sm:w-7 h-6 sm:h-7 object-contain relative z-10 drop-shadow-md"
                />
                <span className="tracking-tight font-normal text-white text-base sm:text-lg relative z-10">
                  Book Free Consultation
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </main>
        </section>

        {/* Hero Bottom Showcase Marquee Section */}
        <section className="relative z-10 w-full pt-4 pb-16 md:pb-24">
        {/* Side Fade Gradient Overlays - matched to the deep #5A87F2 blue behind the cards */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#5A87F2] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#5A87F2] to-transparent z-20" />

        {/* Bottom Fade Gradient Overlay */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 sm:h-80 md:h-[420px] bg-gradient-to-b from-transparent via-[#F2F2F2]/60 via-35% via-[#F2F2F2]/95 via-65% to-[#F2F2F2] z-20" />

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