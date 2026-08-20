"use client";

import Image from "next/image";

export default function HeroBottom() {
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

  const row3 = [
    "/Jevxo/11.png",
    "/Jevxo/12.png",
    "/Jevxo/13.png",
    "/Jevxo/14.png",
    "/Jevxo/15.png",
  ];

  // Triplicating arrays to ensure a smooth, unbroken infinite marquee animation
  const row1List = [...row1, ...row1, ...row1];
  const row3List = [...row3, ...row3, ...row3];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#c9d6f7] via-[#e2eafc] to-[#f6f8fc] pt-4 pb-16 md:pb-24 z-10">
      {/* Exact Grid Background Pattern matching Hero */}
      <div
        className="absolute inset-0 opacity-60 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e2e6f5 1px, transparent 1px), linear-gradient(to bottom, #e2e6f5 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      {/* Soft Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0)_70%)] pointer-events-none z-0" />

      {/* Side Fade Gradient Overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#d3def9] to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#d3def9] to-transparent z-20" />

      {/* Bottom Fade Gradient Overlay - Fading bottom of section/row 3 to white */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 sm:h-80 md:h-[420px] bg-gradient-to-b from-transparent via-[#f6f8fc]/60 via-35% via-[#f6f8fc]/95 via-65% to-[#f6f8fc] z-20" />

      <div className="relative z-10 flex flex-col gap-3 sm:gap-4 md:gap-5 w-full">
        {/* Row 1: Right to Left */}
        <div className="overflow-hidden w-full flex">
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5 animate-marquee">
            {row1List.map((src, index) => (
              <div
                key={`row1-${index}`}
                className="relative flex-shrink-0 w-[320px] sm:w-[440px] md:w-[540px] h-[220px] sm:h-[300px] md:h-[360px] rounded-none overflow-hidden border border-gray-200/90 shadow-md bg-white group hover:shadow-lg transition-all duration-300"
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

        {/* Row 3: Right to Left */}
        <div className="overflow-hidden w-full flex">
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5 animate-marquee">
            {row3List.map((src, index) => (
              <div
                key={`row3-${index}`}
                className="relative flex-shrink-0 w-[320px] sm:w-[440px] md:w-[540px] h-[220px] sm:h-[300px] md:h-[360px] rounded-none overflow-hidden border border-gray-200/90 shadow-md bg-white group hover:shadow-lg transition-all duration-300"
              >
                <Image
                  src={src}
                  alt={`Portfolio showcase ${index + 11}`}
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
  );
}
