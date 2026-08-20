"use client";

import { useEffect, useState } from "react";
import { Star, Play, Pause, User as UserIcon } from "lucide-react";
import { reviewApi, Review } from "../../../../api/reviewApi";

export default function TestimonialsSection() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await reviewApi.getAllReviews();
        const reviewList = Array.isArray(data) ? data : data?.data || [];
        setReviews(reviewList);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchReviews();
  }, []);

  const togglePlay = (id: string) => {
    setPlayingId(playingId === id ? null : id);
  };

  const renderCard = (item: Review, keySuffix: string) => {
    const isPlaying = playingId === `${item.id}-${keySuffix}`;
    const cardKey = `${item.id}-${keySuffix}`;
    
    // Extract video ID from YouTube URL if it's a YouTube link, or use standard video URL
    const getEmbedUrl = (url: string) => {
      if (!url) return "";
      // Handle standard youtube links
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      if (match && match[2].length === 11) {
        return `https://www.youtube.com/embed/${match[2]}?autoplay=1&rel=0`;
      }
      return url; // fallback to the raw URL for raw .mp4 links
    };

    const rating = Math.min(Math.max(item.rating || 5, 1), 5); // Ensure 1-5

    return (
      <div
        key={cardKey}
        className="w-[440px] md:w-[480px] shrink-0 bg-white rounded-[20px] p-4 sm:p-5 border border-gray-100/90 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] flex items-center gap-5 transition-all duration-300 group"
      >
        {/* Left Side: Video / Image Thumbnail Container */}
        <div className="w-[160px] sm:w-[180px] md:w-[195px] h-[160px] sm:h-[180px] md:h-[195px] rounded-[16px] relative overflow-hidden bg-gray-900 shrink-0">
          {isPlaying && item.videoUrl ? (
            <iframe
              src={getEmbedUrl(item.videoUrl)}
              title="Client Testimonial Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full object-cover border-0"
            />
          ) : (
            <div className="w-full h-full relative flex items-center justify-center bg-gray-200">
              {item.thumbUrl ? (
                <img src={item.thumbUrl} alt="Thumbnail" className="w-full h-full object-cover opacity-80" />
              ) : (
                <UserIcon className="w-16 h-16 text-gray-400" />
              )}
            </div>
          )}

          {/* Play / Pause Floating Pill Button */}
          {item.videoUrl && (
            <button
              onClick={() => togglePlay(cardKey)}
              className={`absolute bottom-3 left-3 w-7 h-7 rounded-full backdrop-blur-md flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 cursor-pointer z-20 ${
                isPlaying 
                  ? "bg-black/70 text-white hover:bg-black" 
                  : "bg-[#c084fc]/85 hover:bg-[#a855f7] text-white"
              }`}
              title={isPlaying ? "Close Video" : "Play Video Testimonial"}
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 fill-current" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              )}
            </button>
          )}
        </div>

        {/* Right Side: Rating, Quote, Client Info */}
        <div className="flex flex-col justify-between h-full py-0.5 pr-1 w-full">
          <div>
            {/* Rating Stars */}
            <div className="flex items-center gap-1 mb-2 text-[#fbbf24]">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#fbbf24] stroke-none" />
              ))}
              {[...Array(5 - rating)].map((_, i) => (
                <Star key={`empty-${i}`} className="w-3.5 h-3.5 text-gray-300" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="text-[#64748b] text-xs sm:text-[13px] leading-relaxed mb-3 line-clamp-4 font-normal">
              {item.reviewText}
            </p>
          </div>

          {/* Author Name & Subtitle */}
          <div>
            <h4 className="font-medium text-[#1e293b] text-base sm:text-[17px] tracking-tight">
              {item.client?.name || "Anonymous Client"}
            </h4>
            <p className="text-xs text-[#94a3b8] font-normal mt-0.5">
              {item.client?.role || "Client"}
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Divide reviews into 3 rows for the marquee
  // If there are very few reviews, we duplicate them so the marquee still looks full.
  const getRowData = (rowNumber: number) => {
    if (reviews.length === 0) return [];
    
    // Split into chunks roughly equal
    const perRow = Math.ceil(reviews.length / 3);
    const startIdx = (rowNumber - 1) * perRow;
    const endIdx = startIdx + perRow;
    
    let rowReviews = reviews.slice(startIdx, endIdx);
    
    // Fallback: If one row is empty (because we have less than 3 reviews total), just use all of them
    if (rowReviews.length === 0) {
      rowReviews = [...reviews];
    }
    
    // Duplicate enough times to make the marquee loop smoothly
    const duplicated = [...rowReviews, ...rowReviews, ...rowReviews];
    return duplicated;
  };

  const row1 = getRowData(1);
  const row2 = getRowData(2);
  const row3 = getRowData(3);

  return (
    <section
      id="testimonials"
      className="w-full py-12 md:py-16 bg-[#F8F9FA] text-gray-900 relative overflow-hidden flex flex-col items-center justify-center border-t border-gray-100"
    >
      {/* Side Fade Gradient Overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-[#F8F9FA] to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-[#F8F9FA] to-transparent z-20" />

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
      {!isLoading && reviews.length > 0 && (
        <div className="w-full space-y-6 relative z-10 overflow-hidden py-2">
          {/* Row 1: Marquee Left */}
          <div className="flex animate-marquee gap-6">
            {row1.map((item, idx) => renderCard(item, `r1-${idx}`))}
          </div>

          {/* Row 2: Marquee Right */}
          <div className="flex animate-marquee-reverse gap-6">
            {row2.map((item, idx) => renderCard(item, `r2-${idx}`))}
          </div>

          {/* Row 3: Marquee Left */}
          <div className="flex animate-marquee gap-6">
            {row3.map((item, idx) => renderCard(item, `r3-${idx}`))}
          </div>
        </div>
      )}

      {!isLoading && reviews.length === 0 && (
        <div className="text-center text-gray-500 pb-12">
          No reviews yet. Check back later!
        </div>
      )}
    </section>
  );
}
