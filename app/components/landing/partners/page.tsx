"use client";

import { useEffect, useState } from "react";

export interface PartnerItem {
  id: string;
  name: string;
  logo: string;
}

// Real, recognizable software / SaaS company logos.
// Sourced from Simple Icons (https://simpleicons.org) — a free, CC0-licensed
// set of brand icons made exactly for this kind of "trusted by" logo wall,
// so there's no copyright issue using them directly by URL.
// NOTE: if this section will claim these companies as actual customers,
// only include ones that really use your product (and are fine being shown).
const BRAND_IMAGES: PartnerItem[] = [
  { id: "1", name: "Slack", logo: "https://cdn.simpleicons.org/slack/4A154B" },
  { id: "2", name: "Notion", logo: "https://cdn.simpleicons.org/notion/000000" },
  { id: "3", name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
  { id: "4", name: "Stripe", logo: "https://cdn.simpleicons.org/stripe/635BFF" },
  { id: "5", name: "Zoom", logo: "https://cdn.simpleicons.org/zoom/2D8CFF" },
  { id: "6", name: "Dropbox", logo: "https://cdn.simpleicons.org/dropbox/0061FF" },
  { id: "7", name: "Asana", logo: "https://cdn.simpleicons.org/asana/F06A6A" },
  { id: "8", name: "Linear", logo: "https://cdn.simpleicons.org/linear/5E6AD2" },
  { id: "9", name: "Airtable", logo: "https://cdn.simpleicons.org/airtable/18BFFF" },
  { id: "10", name: "HubSpot", logo: "https://cdn.simpleicons.org/hubspot/FF7A59" },
  { id: "11", name: "Zendesk", logo: "https://cdn.simpleicons.org/zendesk/03363D" },
  { id: "12", name: "Intercom", logo: "https://cdn.simpleicons.org/intercom/1F8DED" },
  { id: "13", name: "GitHub", logo: "https://cdn.simpleicons.org/github/181717" },
  { id: "14", name: "GitLab", logo: "https://cdn.simpleicons.org/gitlab/FC6D26" },
  { id: "15", name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/000000" },
];

// 5 columns x 2 rows on desktop = matches the reference design exactly
const VISIBLE_SLOTS = 10;
// Delay between each card STARTING its flip within one wave (fast, one-after-another)
const STAGGER_MS = 150;
// Time to rotate to the edge, and back — total flip time per card = 2x this
const HALF_FLIP_MS = 300;
// After the whole wave (all 10 cards) finishes, wait this long, then restart from card 1
const PAUSE_AFTER_WAVE_MS = 3000;

export default function Partners() {
  // Which logo (index into BRAND_IMAGES) each visible card slot is showing right now
  const [slots, setSlots] = useState<number[]>(() =>
    Array.from({ length: VISIBLE_SLOTS }, (_, i) => i % BRAND_IMAGES.length)
  );
  // Independent rotation state per slot, so multiple cards can be mid-flip at once
  const [rotated, setRotated] = useState<boolean[]>(() =>
    Array(VISIBLE_SLOTS).fill(false)
  );

  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    let nextLogoCursor = VISIBLE_SLOTS % BRAND_IMAGES.length;

    const runWave = () => {
      // Card 1, then card 2, then card 3 ... each starting shortly after the last
      for (let slot = 0; slot < VISIBLE_SLOTS; slot++) {
        const startDelay = slot * STAGGER_MS;

        // Rotate this card to 90deg (edge-on / invisible)
        timers.push(
          setTimeout(() => {
            if (cancelled) return;
            setRotated((prev) => {
              const next = [...prev];
              next[slot] = true;
              return next;
            });
          }, startDelay)
        );

        // At the edge-on midpoint: swap its logo, then rotate back to 0deg
        timers.push(
          setTimeout(() => {
            if (cancelled) return;
            setSlots((prev) => {
              const next = [...prev];
              next[slot] = nextLogoCursor;
              return next;
            });
            nextLogoCursor = (nextLogoCursor + 1) % BRAND_IMAGES.length;
            setRotated((prev) => {
              const next = [...prev];
              next[slot] = false;
              return next;
            });
          }, startDelay + HALF_FLIP_MS)
        );
      }

      // Once the last card in the wave has finished flipping, pause, then loop
      const waveDuration = (VISIBLE_SLOTS - 1) * STAGGER_MS + HALF_FLIP_MS * 2;
      timers.push(
        setTimeout(() => {
          if (!cancelled) runWave();
        }, waveDuration + PAUSE_AFTER_WAVE_MS)
      );
    };

    runWave();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <section className="py-6 md:-mt-9 md:py-8 bg-[#F2F2F2] flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-[22px] font-normal text-center mb-8 sm:mb-10 text-[#333333] tracking-normal">
          Top partners that we worked with.
        </h2>

        {/* 5-column x 2-row grid, matches the reference design */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-5"
          style={{ perspective: "1000px" }}
        >
          {slots.map((logoIdx, slot) => {
            const partner = BRAND_IMAGES[logoIdx];
            const rotate = rotated[slot] ? 90 : 0;

            return (
              <div
                key={slot}
                className="bg-white rounded-xl h-28 sm:h-32 md:h-36 flex items-center justify-center p-4 sm:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                style={{
                  transform: `rotateY(${rotate}deg)`,
                  transition: `transform ${HALF_FLIP_MS}ms ease-in-out`,
                }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-[80%] max-h-[70%] object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}