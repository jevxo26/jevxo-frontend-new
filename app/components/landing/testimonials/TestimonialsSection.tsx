"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Play, Pause } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
  video: string;
}

const row1: Testimonial[] = [
  {
    id: "r1-1",
    name: "Bonnie M. Pattison",
    role: "Founder, ModernSaaS",
    quote: "Thanks to the personalized attention and guidance provided by Jevxo. I highly recommend them to any team wanting fast turnaround...",
    image: "/images/team_1.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: "r1-2",
    name: "Alexander Wright",
    role: "CEO, TechSphere",
    quote: "Working with Jevxo was a breeze. They delivered a world-class UI/UX design in under 48 hours for our startup launch.",
    image: "/images/team_2.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: "r1-3",
    name: "Sophia Martinez",
    role: "Head of Marketing",
    quote: "The conversion rate on our new landing page went up by 180%. Exceptional quality and incredible design talent.",
    image: "/images/team_3.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    id: "r1-4",
    name: "Daniel Vance",
    role: "Product Lead, Elevate",
    quote: "Jevxo's team is fast, reliable, and super intuitive. They transformed our product brand into an enterprise asset.",
    image: "/images/team_4.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoylikes.mp4",
  },
];

const row2: Testimonial[] = [
  {
    id: "r2-1",
    name: "Elena Rostova",
    role: "VP of Product, FinTech",
    quote: "Outstanding attention to detail and clean design system handoff. Best agency experience we've had in 5 years.",
    image: "/images/team_4.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  },
  {
    id: "r2-2",
    name: "Marcus Sterling",
    role: "Co-Founder, AppWorks",
    quote: "They took our complex SaaS requirements and turned them into an ultra-smooth, easy to use dashboard UI.",
    image: "/images/team_1.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  },
  {
    id: "r2-3",
    name: "Sarah Jenkins",
    role: "Design Director, Apex",
    quote: "I highly recommend Jevxo to anyone looking for high impact digital design with world-class execution speed.",
    image: "/images/team_2.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnTheLakeside.mp4",
  },
  {
    id: "r2-4",
    name: "Liam O'Connor",
    role: "CTO, CloudScale",
    quote: "The Next.js implementation was fast and pixel-perfect. We went from design kickoff to launch seamlessly.",
    image: "/images/team_3.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  },
];

const row3: Testimonial[] = [
  {
    id: "r3-1",
    name: "Nadia Al-Mansoor",
    role: "Founder, GrowthKit",
    quote: "Thanks to the Jevxo team, our product retention increased dramatically. They truly understand modern UX.",
    image: "/images/team_3.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
  },
  {
    id: "r3-2",
    name: "David Miller",
    role: "CMO, BrightMedia",
    quote: "First class service from day one. Super responsive team and top tier design execution on all deliverables.",
    image: "/images/team_1.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
  },
  {
    id: "r3-3",
    name: "Aria Takahashi",
    role: "Lead Designer, AI Labs",
    quote: "Sleek aesthetics, high performance animations, and seamless user flows. We couldn't be happier!",
    image: "/images/team_2.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: "r3-4",
    name: "Julian Thorne",
    role: "Head of Operations",
    quote: "Fast turnarounds without sacrificing quality. Jevxo is our go-to partner for all digital product builds.",
    image: "/images/team_4.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
];

export default function TestimonialsSection() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const togglePlay = (id: string) => {
    setPlayingId(playingId === id ? null : id);
  };

  const renderCard = (item: Testimonial, keySuffix: string) => {
    const isPlaying = playingId === `${item.id}-${keySuffix}`;
    const cardKey = `${item.id}-${keySuffix}`;

    return (
      <div
        key={cardKey}
        className="w-[460px] md:w-[500px] shrink-0 bg-white rounded-[24px] p-4 sm:p-5 border border-gray-100/90 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] flex items-center gap-5 transition-all duration-300 group"
      >
        {/* Left Side: Video / Image Thumbnail */}
        <div className="w-[170px] sm:w-[190px] h-[170px] sm:h-[185px] rounded-[18px] relative overflow-hidden bg-gray-900 shrink-0">
          {isPlaying ? (
            <video
              src={item.video}
              autoPlay
              loop
              controls
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          )}

          {/* Play / Pause Floating Pill Button */}
          <button
            onClick={() => togglePlay(cardKey)}
            className="absolute bottom-3 left-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#1658fe] backdrop-blur-md flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-110 cursor-pointer z-10"
            title={isPlaying ? "Pause Video" : "Play Video Testimonial"}
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5 fill-current" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            )}
          </button>
        </div>

        {/* Right Side: Rating, Quote, Client Info */}
        <div className="flex flex-col justify-between h-full py-1 pr-2 w-full">
          <div>
            {/* 5 Yellow Stars */}
            <div className="flex items-center gap-1 mb-2 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="text-gray-500 text-xs sm:text-sm font-normal leading-relaxed mb-3 line-clamp-3">
              {item.quote}
            </p>
          </div>

          {/* Author Name & Subtitle */}
          <div>
            <h4 className="font-medium text-[#0f172a] text-base sm:text-lg tracking-tight">
              {item.name}
            </h4>
            <p className="text-xs text-gray-400 font-normal mt-0.5">
              {item.role}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="testimonials"
      className="w-full py-16 md:py-24 bg-[#F8F9FA] text-gray-900 relative overflow-hidden flex flex-col items-center justify-center border-t border-gray-100"
    >
      {/* Side Fade Gradient Overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-[#F8F9FA] to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-[#F8F9FA] to-transparent z-20" />

      {/* Header Container */}
      <div className="max-w-3xl w-full px-6 flex flex-col items-center text-center mb-12 md:mb-16 relative z-10">
        <div className="bg-white border border-[#3b82f6]/40 text-[#3b82f6] px-3.5 py-1 rounded-full text-xs font-normal tracking-wide inline-flex items-center gap-1.5 shadow-2xs mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
          What Our Clients Say
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-[#0f172a] tracking-tight leading-tight mb-3">
          Real Stories. Real Impact.
        </h2>
        <p className="text-gray-500 text-sm md:text-base font-normal max-w-lg leading-relaxed">
          Don't just take our word for it. Hear directly from founders and team leaders who transformed their digital products with Jevxo.
        </p>
      </div>

      {/* 3 Infinite Marquee Rows (Top: Left, Mid: Right, Bottom: Left) */}
      <div className="w-full space-y-6 relative z-10 overflow-hidden py-2">
        {/* Row 1: Marquee Left */}
        <div className="flex animate-marquee gap-6">
          {[...row1, ...row1, ...row1].map((item, idx) =>
            renderCard(item, `r1-${idx}`)
          )}
        </div>

        {/* Row 2: Marquee Right */}
        <div className="flex animate-marquee-reverse gap-6">
          {[...row2, ...row2, ...row2].map((item, idx) =>
            renderCard(item, `r2-${idx}`)
          )}
        </div>

        {/* Row 3: Marquee Left */}
        <div className="flex animate-marquee gap-6">
          {[...row3, ...row3, ...row3].map((item, idx) =>
            renderCard(item, `r3-${idx}`)
          )}
        </div>
      </div>
    </section>
  );
}
