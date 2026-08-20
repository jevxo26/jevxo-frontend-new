"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, User as UserIcon } from "lucide-react";
import { userApi, User } from "../../../../api/userApi";

const defaultBgClasses = [
  "bg-[#FFE8A3]", // Soft Warm Yellow
  "bg-[#A7F3D0]", // Soft Mint Cyan
  "bg-[#BAE6FD]", // Soft Sky Blue
  "bg-[#D1FAE5]", // Soft Sage Green
  "bg-[#FED7AA]", // Soft Peach Orange
  "bg-[#FBCFE8]", // Soft Rose Pink
  "bg-[#DDD6FE]", // Soft Lavender Purple
  "bg-[#FEF08A]", // Soft Lemon Yellow
  "bg-[#C7D2FE]", // Soft Indigo Tint
];

export default function MeetSpecialistSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  
  const [specialists, setSpecialists] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const data = await userApi.getAllUsers();
        if (Array.isArray(data)) {
          setSpecialists(data);
        } else if (data && data.data && Array.isArray(data.data)) {
          setSpecialists(data.data);
        } else {
          setSpecialists(data);
        }
      } catch (error) {
        console.error("Failed to fetch team:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTeam();
  }, []);

  useEffect(() => {
    if (isLoading || specialists.length === 0) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!sectionRef.current || !trackRef.current) return;

      const getScrollAmount = () => {
        const trackWidth = trackRef.current?.scrollWidth || 0;
        const containerWidth = trackRef.current?.parentElement?.offsetWidth || window.innerWidth;
        return Math.max(0, trackWidth - containerWidth + 60);
      };

      gsap.to(trackRef.current, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [isLoading, specialists.length]);

  const displaySpecialists = specialists.length > 0 ? specialists : [];

  return (
    <section 
      ref={sectionRef}
      id="specialist" 
      className="relative z-10 w-full py-12 md:py-16 bg-[#F8F9FA] flex flex-col justify-center items-center border-t border-gray-100 overflow-hidden"
    >
      <div className="w-full max-w-[95%] sm:max-w-8/12 mx-auto px-2 sm:px-6 lg:px-8 flex flex-col justify-center">
        
        {/* Header Row: Title & Customer Satisfactions */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 md:mb-12 w-full">
          {/* Left Title Area */}
          <div className="flex flex-col items-start gap-3.5">
            {/* Pill Badge */}
            <div className="bg-white border border-[#3b82f6]/40 text-[#3b82f6] px-3.5 py-1 rounded-full text-xs font-normal tracking-wide inline-flex items-center gap-1.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
              Our House Expertize
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-[#0f172a] tracking-tight leading-[1.15]">
              Meet Our Specialist
            </h2>
          </div>

          {/* Right Customer Satisfactions Widget */}
          <div className="flex items-center gap-4 bg-white/60 p-2.5 px-4 rounded-2xl border border-gray-100 shadow-2xs backdrop-blur-xs">
            {/* Avatars Stack */}
            <div className="flex items-center -space-x-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative shadow-xs bg-gray-200 flex items-center justify-center">
                  {specialists[i]?.picture ? (
                    <Image src={specialists[i].picture!} alt="Client" fill className="object-cover" />
                  ) : (
                    <UserIcon className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-[#3b82f6] text-white font-bold text-xs flex items-center justify-center shadow-xs">
                2k
              </div>
            </div>

            {/* Rating Stars & Text */}
            <div className="flex flex-col">
              <span className="text-xs text-[#64748b] font-medium">Customer Satisfactions</span>
              <div className="flex items-center gap-1 text-amber-400 mt-0.5">
                <Star className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                <Star className="w-4 h-4 fill-gray-200 stroke-gray-300" />
              </div>
            </div>
          </div>
        </div>

        {/* GSAP Horizontal Scroll Track clipped within max-w-9/12 bounds */}
        <div className="w-full overflow-hidden">
          <div 
            ref={trackRef} 
            className="flex gap-6 sm:gap-8 w-max will-change-transform pb-4"
          >
            {!isLoading && displaySpecialists.map((member, index) => {
              const bgClass = defaultBgClasses[index % defaultBgClasses.length];
              return (
                <div 
                  key={member.id || index}
                  className={`w-[290px] sm:w-[320px] lg:w-[340px] h-[440px] sm:h-[480px] rounded-[24px] ${bgClass} relative overflow-hidden flex flex-col justify-end group shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-500 cursor-pointer`}
                >
                  {/* Specialist Portrait Image */}
                  {member.picture ? (
                    <Image 
                      src={member.picture} 
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-500/50 pb-20">
                      <UserIcon className="w-24 h-24 mb-4" />
                    </div>
                  )}

                  {/* White Shadow Overlay (Visible by Default, Clears on Hover) */}
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] opacity-100 group-hover:opacity-0 group-hover:backdrop-blur-none transition-all duration-500 pointer-events-none z-10" />

                  {/* Dark Gradient Overlay at Bottom for text readability */}
                  <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#090d16] via-[#090d16]/80 to-transparent pointer-events-none z-20" />

                  {/* Text Info Overlay */}
                  <div className="relative z-30 p-6 sm:p-7 text-white flex flex-col space-y-1.5">
                    <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-gray-200 text-xs sm:text-sm font-normal opacity-90">
                      {member.designation?.title || member.role || "Specialist"}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
