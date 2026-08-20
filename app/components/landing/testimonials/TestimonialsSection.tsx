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
    quote: "Thanks to the personalized attention and guidance provided by Jevxo, our SaaS platform conversion rates skyrocketed within weeks. I highly recommend them to any growth team looking for exceptional quality, fast turnaround, and world-class digital product design execution.",
    image: "/images/team_1.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: "r1-2",
    name: "Alexander Wright",
    role: "CEO, TechSphere",
    quote: "Working with Jevxo was a breeze. They delivered a complete, world-class UI/UX design system in under 48 hours for our startup launch. Their attention to detail, motion design, and developer-ready handoffs made our launch seamless and effortless.",
    image: "/images/team_2.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: "r1-3",
    name: "Sophia Martinez",
    role: "Head of Marketing",
    quote: "The conversion rate on our new landing page went up by 180% right after launch. Exceptional quality, incredible design talent, and proactive communication. Jevxo truly elevated our brand presence far beyond our expectations.",
    image: "/images/team_3.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    id: "r1-4",
    name: "Daniel Vance",
    role: "Product Lead, Elevate",
    quote: "Jevxo's team is fast, reliable, and super intuitive. They transformed our raw product ideas into an enterprise-grade web application asset with fluid animations that our active users absolutely love daily.",
    image: "/images/team_4.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoylikes.mp4",
  },
];

const row2: Testimonial[] = [
  {
    id: "r2-1",
    name: "Elena Rostova",
    role: "VP of Product, FinTech",
    quote: "Outstanding attention to detail and clean design system handoff. Best agency partner experience we've had in 5 years. They solved our complex fintech dashboard UX challenges with elegance, precision, and speed.",
    image: "/images/team_4.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  },
  {
    id: "r2-2",
    name: "Marcus Sterling",
    role: "Co-Founder, AppWorks",
    quote: "They took our heavy SaaS requirements and turned them into an ultra-smooth, easy to use dashboard UI. Our user onboarding drop-off decreased by 45% almost immediately after deploying the new interface.",
    image: "/images/team_1.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  },
  {
    id: "r2-3",
    name: "Sarah Jenkins",
    role: "Design Director, Apex",
    quote: "I highly recommend Jevxo to anyone looking for high impact digital design with world-class execution speed. Their design team seamlessly integrated with our engineering workflow, saving us months of dev time.",
    image: "/images/team_2.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnTheLakeside.mp4",
  },
  {
    id: "r2-4",
    name: "Liam O'Connor",
    role: "CTO, CloudScale",
    quote: "The Next.js implementation was fast, secure, and pixel-perfect. We went from initial design kickoff to production deployment without a single hitch. Their code quality and component modularity are top tier.",
    image: "/images/team_3.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  },
];

const row3: Testimonial[] = [
  {
    id: "r3-1",
    name: "Nadia Al-Mansoor",
    role: "Founder, GrowthKit",
    quote: "Thanks to the Jevxo team, our product retention increased dramatically. They truly understand modern UX psychology, clean aesthetics, and conversion architecture. We will definitely collaborate on future builds.",
    image: "/images/team_3.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
  },
  {
    id: "r3-2",
    name: "David Miller",
    role: "CMO, BrightMedia",
    quote: "First class service from day one. Super responsive team, clear weekly syncs, and top tier design execution on all deliverables. They exceeded all our benchmarks and delivered ahead of deadline.",
    image: "/images/team_1.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
  },
  {
    id: "r3-3",
    name: "Aria Takahashi",
    role: "Lead Designer, AI Labs",
    quote: "Sleek aesthetics, high performance micro-animations, and seamless user flows. We couldn't be happier with the results! Jevxo brought our artificial intelligence platform vision to life beautifully.",
    image: "/images/team_2.png",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: "r3-4",
    name: "Julian Thorne",
    role: "Head of Operations",
    quote: "Fast turnarounds without sacrificing quality. Jevxo is our go-to digital product design agency for all web and mobile application releases. Their design system approach saves us time on every update.",
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
        className="w-[440px] md:w-[480px] shrink-0 bg-white rounded-[20px] p-4 sm:p-5 border border-gray-100/90 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] flex items-center gap-5 transition-all duration-300 group"
      >
        {/* Left Side: Video / Image Thumbnail Container */}
        <div className="w-[160px] sm:w-[180px] md:w-[195px] h-[160px] sm:h-[180px] md:h-[195px] rounded-[16px] relative overflow-hidden bg-gray-900 shrink-0">
          {isPlaying ? (
            <iframe
              src="https://www.youtube.com/embed/SJKr7BPOXY0?autoplay=1&rel=0"
              title="Client Testimonial Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full object-cover border-0"
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
            className={`absolute bottom-3 left-3 w-7 h-7 rounded-full backdrop-blur-md flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 cursor-pointer z-20 ${
              isPlaying 
                ? "bg-black/70 text-white hover:bg-black" 
                : "bg-[#c084fc]/85 hover:bg-[#a855f7] text-white"
            }`}
            title={isPlaying ? "Close Video" : "Play YouTube Video Testimonial"}
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5 fill-current" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            )}
          </button>
        </div>

        {/* Right Side: Rating, Quote, Client Info */}
        <div className="flex flex-col justify-between h-full py-0.5 pr-1 w-full">
          <div>
            {/* 5 Warm Gold Stars */}
            <div className="flex items-center gap-1 mb-2 text-[#fbbf24]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#fbbf24] stroke-none" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="text-[#64748b] text-xs sm:text-[13px] leading-relaxed mb-3 line-clamp-4 font-normal">
              {item.quote}
            </p>
          </div>

          {/* Author Name & Subtitle */}
          <div>
            <h4 className="font-medium text-[#1e293b] text-base sm:text-[17px] tracking-tight">
              {item.name}
            </h4>
            <p className="text-xs text-[#94a3b8] font-normal mt-0.5">
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
      className="w-full py-12 md:py-16 bg-transparent text-gray-900 relative overflow-hidden flex flex-col items-center justify-center border-t border-gray-100"
    >
      {/* Side Fade Gradient Overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-[#f6f8fc] to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-[#f6f8fc] to-transparent z-20" />

      {/* Header Container */}
      <div className="max-w-3xl w-full px-6 flex flex-col items-center text-center mb-10 md:mb-12 relative z-10">
        <div className="bg-white border border-[#3b82f6]/40 text-[#3b82f6] px-3.5 py-1 rounded-full text-xs font-normal tracking-wide inline-flex items-center gap-1.5 shadow-2xs mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
          What Our Clients Say
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-[#0f172a] tracking-tight leading-tight mb-3">
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
