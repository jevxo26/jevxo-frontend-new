"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    tag: "UI/UX DESIGN",
    title: "UI/UX Design",
    description: "We design intuitive interfaces that make websites and apps seamless and delightful to use daily.",
    bg: "bg-gradient-to-b from-white to-[#E9EFFF]",
    img: "/Jevxo/01.png",
  },
  {
    tag: "SAAS PRODUCT",
    title: "SaaS Product Design",
    description: "Architecting scalable web applications & SaaS dashboards built for high retention & growth.",
    bg: "bg-gradient-to-b from-white to-[#FFE3F1]",
    img: "/Jevxo/02.png",
  },
  {
    tag: "BRANDING",
    title: "Logo & Branding Design",
    description: "Creating distinctive visual identities and brand assets that command attention and trust.",
    bg: "bg-gradient-to-b from-white to-[#F9E3FF]",
    img: "/Jevxo/03.png",
  },
  {
    tag: "ENGINEERING",
    title: "Full Stack Development",
    description: "Building fast, secure, scalable modern web platforms engineered for heavy traffic & performance.",
    bg: "bg-gradient-to-b from-white to-[#FFEBE0]",
    img: "/Jevxo/04.png",
  },
  {
    tag: "MOBILE APPS",
    title: "Mobile App Development",
    description: "Developing cross-platform native iOS & Android applications with fluid animations & offline support.",
    bg: "bg-gradient-to-b from-[#F4F4F4] to-[#EBE3FF]",
    img: "/Jevxo/05.png",
  },
  {
    tag: "AI & AUTOMATION",
    title: "AI & Automation Tools",
    description: "Integrating intelligent workflow automations and custom generative AI models into products.",
    bg: "bg-gradient-to-b from-[#F4F4F4] to-[#F7E5EA]",
    img: "/Jevxo/06.png",
  },
  {
    tag: "CLOUD INFRASTRUCTURE",
    title: "Cloud & DevOps Architecture",
    description: "Deploying high-availability infrastructure with 99.9% uptime and enterprise security compliance.",
    bg: "bg-gradient-to-br from-white to-[#fdf2f8]",
    img: "/Jevxo/07.png",
  },
  {
    tag: "GROWTH & MARKETING",
    title: "Digital Marketing & SEO",
    description: "Data-driven organic growth strategies to maximize conversions, revenue, and customer loyalty.",
    bg: "bg-gradient-to-br from-white to-[#eff6ff]",
    img: "/Jevxo/01.png",
  },
];

export default function OurService() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!sectionRef.current || !trackRef.current) return;

      const getScrollAmount = () => {
        const trackWidth = trackRef.current?.scrollWidth || 0;
        const containerWidth = trackRef.current?.parentElement?.offsetWidth || window.innerWidth;
        return trackWidth - containerWidth + 80;
      };

      // Single-direction entrance reveal for Service Cards (plays once on scroll down, no reverse on bottom-up scroll)
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 25, scale: 0.98, filter: "blur(2px)" },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: trackRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

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
  }, []);

  return (
    <section
      ref={sectionRef}
      id="service"
      className="relative z-10 w-full py-6 md:py-8 bg-[#F2F2F2] flex flex-col justify-center items-center border-t border-gray-100 overflow-hidden"
    >
      <div className="w-full max-w-[95%] lg:max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-col justify-center">

        {/* Header Section */}

        <div
          className="flex items-center mb-7 justify-center gap-1.5 bg-transparent border border-[#003FEA4D] text-[#252323] w-[126px] h-[40px] rounded-full text-[14px] leading-none font-normal tracking-normal shadow-2xs"
          style={{ fontFamily: '"Helvetica Now Display", sans-serif' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
          Our Service
        </div>
        <div className="flex flex-col lg:flex-row lg:items-start ite justify-between gap-8 mb-10 md:mb-12">


          {/* Left Title Area */}
          <div className="flex flex-col pt-5 items-start gap-3.5 lg:w-1/2">

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-[#0f172a] tracking-tight leading-[1.15]">
              <span
                className="block text-[#0f172a] text-[40px] font-bold leading-[1.2] tracking-[-0.02em] text-center"
                style={{ fontFamily: '"Helvetica Now Display", sans-serif' }}
              >
                High-Impact Value.
              </span>
              <span className="block mt-1 text-[#0f172a]">
                <span
                  className="font-semibold italic text-[40px] leading-[1.2] tracking-[-0.02em] text-[#0f172a]"
                  style={{ fontFamily: '"DM Serif Text", serif' }}
                >
                  World-Class
                </span> <span className="font-medium text-[#0f172a]">Quality.</span>
              </span>
            </h2>
          </div>

          {/* Right Description Text */}
          <div className="lg:w-[46%] pt-1 lg:pt-6">
            <p
              className="text-[#64748b] font-light text-[18px] leading-[1.5] tracking-normal"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              We're here to create digital experiences that your customers will love from websites and apps to seamless interfaces, our creations drive stronger engagement and foster lasting loyalty.
            </p>
          </div>
        </div>

        {/* Dynamic Horizontal Pinned Track clipped within max-w-9/12 bounds */}
        <div className="w-full pt-8 ">
          <div
            ref={trackRef}
            className="flex flex-nowrap lg:flex-nowrap gap-6 w-max lg:w-max min-w-full"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card w-[321px] shrink-0 rounded-[20px] ${service.bg} pt-8 px-6 pb-6 flex flex-col items-start text-left h-[432px] relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                <h3 className="text-2xl font-medium text-[#000000] tracking-tight pb-4">
                  {service.title}
                </h3>
                <p
                  className="text-[#717171] text-[14px] leading-[1.2] mb-10 tracking-normal  font-normal max-w-[260px] min-h-[40px]"
                  style={{ fontFamily: '"Manrope", sans-serif' }}
                >
                  {service.description}
                </p>

                {/* Pill Action Button */}
                <Link
                  href="#contact"
                  className="self-center inline-flex items-center bg-[#2d3139] hover:bg-[#1a1c21] text-white rounded-full pl-5 pr-1 py-1 text-sm font-normal transition-all shadow-sm mb-6 group"
                >
                  <span className="mr-3 text-xs tracking-tight">View Service</span>
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                  </div>
                </Link>

                <div className="mt-auto w-full flex-1 relative min-h-[150px]">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 321px"
                    className="object-contain object-bottom"
                    unoptimized={true}
                  />
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}