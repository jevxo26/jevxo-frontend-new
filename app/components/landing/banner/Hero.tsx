"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const GRID_COLS = 24;
const GRID_ROWS = 16;
const gridCells = Array.from({ length: GRID_COLS * GRID_ROWS });

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
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
      <div className="relative w-full overflow-hidden bg-[linear-gradient(to_bottom,#F3F3F3_0%,#dbe3fa_25%,#5A87F2_45%,#5A87F2_66%,#F3F3F3_94%)]">

        {/* Decorative Shadow Boxes (Grid Blocks) - Placed before grid lines so lines stay visible */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Top White Area Shadow Boxes (Left) */}
          <div className="absolute top-[75px] sm:top-[120px] left-0 sm:left-[120px]">
            <div className="absolute top-[2px] left-[2px] w-[73px] h-[73px] sm:w-[118px] sm:h-[118px] bg-[#DEDEDE4D]" />
            <div className="absolute top-[77px] sm:top-[122px] left-[77px] sm:left-[122px] w-[73px] h-[73px] sm:w-[118px] sm:h-[118px] bg-[#DEDEDE4D]" />
          </div>

          {/* Top White Area Shadow Boxes (Right) */}
          <div className="absolute top-[75px] sm:top-[120px] left-[225px] sm:left-[720px] md:left-[840px] lg:left-[960px] xl:left-[1080px]">
            <div className="absolute top-[2px] left-[77px] sm:left-[122px] w-[73px] h-[73px] sm:w-[118px] sm:h-[118px] bg-[#DEDEDE4D]" />
            <div className="absolute top-[77px] sm:top-[122px] left-[2px] w-[73px] h-[73px] sm:w-[118px] sm:h-[118px] bg-[#DEDEDE4D]" />
          </div>

          {/* Lower Blue Transition Area Shadow Boxes */}
          {/* Left Side Shadow Boxes */}
          <div className="absolute top-[300px] sm:top-[480px] left-[75px] sm:left-[240px]">
            <div className="absolute top-[2px] left-[2px] w-[73px] h-[73px] sm:w-[118px] sm:h-[118px] bg-[#DEDEDE4D]" />
            <div className="absolute top-[77px] sm:top-[122px] left-[77px] sm:left-[122px] w-[73px] h-[73px] sm:w-[118px] sm:h-[118px] bg-[#DEDEDE4D]" />
          </div>

          {/* Right Side Shadow Boxes */}
          <div className="absolute top-[300px] sm:top-[480px] left-[225px] sm:left-[720px] md:left-[840px] lg:left-[960px] xl:left-[1080px]">
            <div className="absolute top-[2px] left-[77px] sm:left-[122px] w-[73px] h-[73px] sm:w-[118px] sm:h-[118px] bg-[#DEDEDE4D]" />
            <div className="absolute top-[77px] sm:top-[122px] left-[2px] w-[73px] h-[73px] sm:w-[118px] sm:h-[118px] bg-[#DEDEDE4D]" />
          </div>
        </div>

        {/* Single Grid Background Pattern spanning the whole hero + marquee area */}
        <div
          className="absolute inset-0 opacity-60 pointer-events-none z-[1] bg-[length:75px_75px] sm:bg-[length:120px_120px]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #B3B3B34D 2px, transparent 2px), linear-gradient(to bottom, #B3B3B34D 2px, transparent 2px)",
          }}
        />

        {/* Interactive grid — hovering a cell blooms a soft white glow, matching the grid above */}
        <div
          className="absolute inset-0 z-[2] grid pointer-events-none grid-cols-[repeat(24,75px)] auto-rows-[75px] sm:grid-cols-[repeat(24,120px)] sm:auto-rows-[120px]"
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
        <div className="absolute inset-x-0 top-0 h-[750px] bg-[radial-gradient(ellipse_950px_480px_at_50%_25%,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0)_75%)] pointer-events-none z-0" />

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
              className="text-4xl md:text-[80px] font-medium font-helvetica text-[#000] text-center leading-[1.2] tracking-[-2.4px] capitalize max-w-4xl"
            >
              We Design &amp; Dev Agency <br className="hidden sm:inline" />
              For B2B{" "}
              <span className="font-dm italic font-normal text-[#000] capitalize">
                SaaS Companies
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mt-7 text-[#08080C] text-center font-manrope text-[20px] font-normal leading-[30px] max-w-3xl"
            >
              A full-service UI/UX and development agency helping startups and businesses create fast, scalable, and user-focused digital products.
            </motion.p>

            {/* Action Button */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="mt-16 flex justify-center w-full sm:w-auto"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="w-auto"
              >
                <Link
                  href="https://calendly.com/jevxo-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group w-[325px] h-[60px] flex items-center justify-center gap-3.5 rounded-full text-white backdrop-blur-xl bg-[radial-gradient(68.28%_92.86%_at_50.28%_92.86%,#727272_0%,#282828_49.68%,#111_100%)] shadow-[inset_0_8px_18px_-2px_rgba(255,255,255,0.50)] transition-all duration-300 overflow-hidden"
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
                  <span className="font-normal font-helvetica text-white text-[20px] leading-[1.2] relative z-10">
                    Book Free Consultation
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </main>
        </section>

        {/* Hero Bottom Showcase Marquee Section */}
        <section className="relative z-10 w-full  pb-16 md:pb-24">
          {/* Side Fade Gradient Overlays - reduced intensity and width as requested */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#5A87F2]/30 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#5A87F2]/30 to-transparent z-20" />

          {/* Bottom Fade Gradient Overlay */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 sm:h-48 md:h-[280px] bg-gradient-to-b from-transparent via-[#F2F2F2]/30 via-50% via-[#F2F2F2]/80 via-80% to-[#F2F2F2] z-20" />

          <div className="relative z-10 flex flex-col gap-3 sm:gap-4 md:gap-5 w-full">
            {/* Row 1: Right to Left (animate-marquee) */}
            <div className="overflow-hidden w-full flex">
              <div className="flex items-center gap-4 sm:gap-6 animate-marquee">
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
              <div className="flex items-center gap-4 sm:gap-6 animate-marquee-reverse">
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