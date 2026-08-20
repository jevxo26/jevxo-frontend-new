"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { blogApi, Blog } from "../../../../api/blogApi";

gsap.registerPlugin(ScrollTrigger);

export default function BlogSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await blogApi.getAllBlogs();
        // data could be paginated or an array
        const blogList = Array.isArray(data) ? data : data?.data || [];
        setBlogs(blogList);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (isLoading || blogs.length === 0) return;

    const ctx = gsap.context(() => {
      // Bi-directional GSAP Entrance Reveal for Blog & Insight Cards (Ultra-fast 0.2s blur clear)
      gsap.fromTo(
        ".blog-card",
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
            trigger: sectionRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isLoading, blogs.length]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const mainBlog = blogs[0];
  const sideBlogs = blogs.slice(1, 3);

  return (
    <section ref={sectionRef} id="blog" className="relative z-10 w-full py-12 md:py-16 bg-[#F8F9FA] flex justify-center border-t border-gray-100 overflow-hidden">
      <div className="w-full max-w-[95%] sm:max-w-10/12 mx-auto px-2 sm:px-6 lg:px-8 flex flex-col">
        
        {/* Title & Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-10 md:mb-12 w-full">
          {/* Left Title Area */}
          <div className="flex flex-col items-start gap-3.5 lg:w-1/2">
            {/* Pill Badge */}
            <div className="bg-white border border-[#3b82f6]/40 text-[#3b82f6] px-3.5 py-1 rounded-full text-xs font-normal tracking-wide inline-flex items-center gap-1.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
              Blog &amp; Insight
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-[#0f172a] tracking-tight leading-[1.15]">
              <span className="block text-[#0f172a]">Where Creativity Meets</span>
              <span className="block mt-1 text-[#0f172a]">
                <span className="font-serif italic font-normal text-[#0f172a]">Intelligent Design.</span>
              </span>
            </h2>
          </div>

          {/* Right Description */}
          <div className="lg:w-[42%] pt-1 lg:pt-8">
            <p className="text-[#475569] text-base md:text-lg leading-relaxed font-normal">
              Thoughtful perspectives on design, UX, branding, and digital products—written to help founders, teams, and businesses make better decisions.
            </p>
          </div>
        </div>

        {/* Blog Grid (Left Main Card + Right 2 Cards Stack) */}
        {!isLoading && blogs.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Column: Featured Main Blog Post Card */}
            {mainBlog && (
              <div className="blog-card lg:col-span-6 bg-white rounded-[16px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100/80 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                {/* Main Featured Banner Image */}
                <div className="w-full h-[280px] sm:h-[340px] md:h-[360px] rounded-[12px] relative overflow-hidden mb-6 bg-gray-100 flex items-center justify-center">
                  {mainBlog.coverImage ? (
                    <Image
                      src={mainBlog.coverImage}
                      alt={mainBlog.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <span className="text-gray-400 font-medium">No Image</span>
                  )}
                </div>

                {/* Content Details */}
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[#94a3b8] text-xs sm:text-sm font-normal block mb-1.5">
                      {formatDate(mainBlog.createdAt)}
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-[22px] font-medium text-[#0a0c16] tracking-tight leading-snug mb-2 line-clamp-2">
                      {mainBlog.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                      {mainBlog.excerpt || mainBlog.content?.replace(/<[^>]+>/g, '')}
                    </p>
                  </div>

                  <div>
                    <Link
                      href={`/blog/${mainBlog.slug || mainBlog.id}`}
                      className="inline-flex items-center gap-2.5 bg-black hover:bg-gray-800 text-white rounded-full pl-4 pr-1 py-1 transition-all duration-300 hover:scale-[1.03] group/btn"
                    >
                      <span className="text-xs sm:text-sm font-medium">Open Blog</span>
                      <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center shrink-0 group-hover/btn:rotate-45 transition-transform duration-300">
                        <ArrowUpRight className="w-3.5 h-3.5 text-black stroke-[2.2]" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Right Column: 2 Stacked Cards */}
            <div className="lg:col-span-6 flex flex-col space-y-6 justify-between">
              {sideBlogs.map((blog) => (
                <div key={blog.id} className="blog-card bg-white rounded-[16px] p-6 sm:p-7 flex flex-col sm:flex-row items-center gap-6 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100/80 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 h-full">
                  {/* Image thumbnail */}
                  <div className="w-full sm:w-[220px] md:w-[250px] h-[185px] sm:h-[195px] md:h-[210px] rounded-[12px] relative overflow-hidden shrink-0 bg-gray-100 flex items-center justify-center">
                    {blog.coverImage ? (
                      <Image
                        src={blog.coverImage}
                        alt={blog.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 hover:scale-105"
                      />
                    ) : (
                      <span className="text-gray-400 font-medium text-sm">No Image</span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center h-full w-full py-1">
                    <span className="text-[#94a3b8] text-xs sm:text-sm font-normal block mb-1.5">
                      {formatDate(blog.createdAt)}
                    </span>
                    <h3 className="text-base sm:text-lg md:text-[19px] font-medium text-[#0a0c16] tracking-tight leading-snug mb-2 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-4">
                      {blog.excerpt || blog.content?.replace(/<[^>]+>/g, '')}
                    </p>

                    <div>
                      <Link
                        href={`/blog/${blog.slug || blog.id}`}
                        className="inline-flex items-center gap-2.5 bg-black hover:bg-gray-800 text-white rounded-full pl-4 pr-1 py-1 transition-all duration-300 hover:scale-[1.03] group/btn"
                      >
                        <span className="text-xs sm:text-sm font-medium">Open Blog</span>
                        <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center shrink-0 group-hover/btn:rotate-45 transition-transform duration-300">
                          <ArrowUpRight className="w-3.5 h-3.5 text-black stroke-[2.2]" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
