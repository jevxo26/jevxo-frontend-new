"use client";

import { useEffect, useState } from "react";
import { Star, Play, User as UserIcon, X } from "lucide-react";
import { reviewApi, Review } from "../../../../api/reviewApi";

const DEFAULT_REVIEWS: Review[] = [
  {
    id: "rev-1",
    reviewText: "Jevxo delivered our entire SaaS MVP in less than 4 weeks. Their code quality and design aesthetic wowed our investors from day one!",
    rating: 5,
    thumbUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    clientId: "c1",
    createdAt: "",
    updatedAt: "",
    client: { id: "c1", name: "David Miller", email: "david@example.com", role: "Founder & CEO, TechVentures" },
  },
  {
    id: "rev-2",
    reviewText: "The team at Jevxo is fast, highly responsive, and exceptionally talented in Next.js and UI/UX design. Highly recommended!",
    rating: 5,
    thumbUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    clientId: "c2",
    createdAt: "",
    updatedAt: "",
    client: { id: "c2", name: "Sarah Jenkins", email: "sarah@example.com", role: "VP of Product, FinScale" },
  },
  {
    id: "rev-3",
    reviewText: "Working with Jevxo felt like having a senior engineering squad in-house. They transformed our legacy app into a modern product.",
    rating: 5,
    thumbUrl: "https://randomuser.me/api/portraits/men/45.jpg",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    clientId: "c3",
    createdAt: "",
    updatedAt: "",
    client: { id: "c3", name: "Marcus Vance", email: "marcus@example.com", role: "CTO, CloudMatrix" },
  },
  {
    id: "rev-4",
    reviewText: "Outstanding design system and pixel-perfect implementation. Our conversion rates increased by 40% after the redesign!",
    rating: 5,
    thumbUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    clientId: "c4",
    createdAt: "",
    updatedAt: "",
    client: { id: "c4", name: "Elena Rostova", email: "elena@example.com", role: "Head of Growth, LuxLife" },
  },
  {
    id: "rev-5",
    reviewText: "Their attention to detail and performance optimization is unmatched. Our page load speeds dropped under 1 second.",
    rating: 5,
    thumbUrl: "https://randomuser.me/api/portraits/men/75.jpg",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    clientId: "c5",
    createdAt: "",
    updatedAt: "",
    client: { id: "c5", name: "Alex Chen", email: "alex@example.com", role: "Co-Founder, CommercePulse" },
  },
  {
    id: "rev-6",
    reviewText: "Jevxo is our go-to partner for all full-stack web and mobile development. Professional, reliable, and super fast.",
    rating: 5,
    thumbUrl: "https://randomuser.me/api/portraits/men/86.jpg",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    clientId: "c6",
    createdAt: "",
    updatedAt: "",
    client: { id: "c6", name: "Robert Taylor", email: "robert@example.com", role: "Product Manager, Enterprise AI" },
  },
];

export default function TestimonialsSection() {
  const [playingVideoUrl, setPlayingVideoUrl] = useState<string | null>(null);
  const [reviews, setReviews] = useState<Review[]>(DEFAULT_REVIEWS);
  const [isLoading, setIsLoading] = useState(true);

  const getEmbedUrl = (url: string | undefined | null) => {
    if (!url) return "";
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}?autoplay=1&rel=0`;
    }
    return url;
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await reviewApi.getAllReviews();
        const reviewList = Array.isArray(data) ? data : data?.data || [];
        if (reviewList && reviewList.length > 0) {
          setReviews(reviewList);
        } else {
          setReviews(DEFAULT_REVIEWS);
        }
      } catch (error) {
        console.error("Failed to fetch reviews, using fallback data:", error);
        setReviews(DEFAULT_REVIEWS);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const renderCard = (item: Review, keySuffix: string) => {
    const cardKey = `${item.id}-${keySuffix}`;
    const rating = Math.min(Math.max(item.rating || 5, 1), 5);

    return (
      <div
        key={cardKey}
        className="w-[440px] md:w-[480px] shrink-0 bg-white rounded-[20px] p-4 sm:p-5 border border-gray-100/90 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] flex items-center gap-5 transition-all duration-300 group"
      >
        {/* Left Side: Image Thumbnail Container with Play Overlay */}
        <div 
          className={`w-[160px] sm:w-[180px] md:w-[195px] h-[160px] sm:h-[180px] md:h-[195px] rounded-[16px] relative overflow-hidden bg-gray-900 shrink-0 ${item.videoUrl ? 'cursor-pointer' : ''}`}
          onClick={() => item.videoUrl ? setPlayingVideoUrl(item.videoUrl) : undefined}
        >
          <div className="w-full h-full relative flex items-center justify-center bg-gray-200 group-hover:scale-105 transition-transform duration-500">
            {item.thumbUrl ? (
              <img src={item.thumbUrl} alt="Thumbnail" className="w-full h-full object-cover opacity-80" />
            ) : (
              <UserIcon className="w-16 h-16 text-gray-400" />
            )}
          </div>

          {/* Corner Play Button Overlay */}
          {item.videoUrl && (
            <div className="absolute bottom-3 left-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 z-20 border border-white/20">
              <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
            </div>
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
  const getRowData = (rowNumber: number) => {
    if (reviews.length === 0) return [];

    const perRow = Math.ceil(reviews.length / 3);
    const startIdx = (rowNumber - 1) * perRow;
    const endIdx = startIdx + perRow;

    let rowReviews = reviews.slice(startIdx, endIdx);

    if (rowReviews.length === 0) {
      rowReviews = [...reviews];
    }

    const duplicated = [...rowReviews, ...rowReviews, ...rowReviews];
    return duplicated;
  };

  const row1 = getRowData(1);
  const row2 = getRowData(2);
  const row3 = getRowData(3);

  return (
    <section
      id="testimonials"
      className="w-full py-6 md:py-8  text-gray-900 relative overflow-hidden flex flex-col items-center justify-center border-t border-gray-100"
    >
      {/* Side Fade Gradient Overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-[#F2F2F2] to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-[#F2F2F2] to-transparent z-20" />

      {/* Header Container */}
      <div className="max-w-3xl w-full px-6 flex flex-col items-center text-center mb-10 md:mb-12 relative z-10">
        <div
          className="bg-transparent border border-[#003FEA4D] text-[#252323] px-5 h-[40px] rounded-full text-[13px] font-normal leading-none tracking-normal inline-flex justify-center items-center gap-1.5 whitespace-nowrap shadow-2xs mb-4"
          style={{ fontFamily: '"Helvetica Now Display", sans-serif' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
          What Our Clients Say
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-[#0f172a] tracking-tight leading-tight mb-3">
          Real Stories. Real Impact.
        </h2>
        <p className="text-gray-500 text-sm md:text-base font-normal max-w-lg leading-relaxed">
          Don't just take our word for it. Hear directly from founders and team leaders who transformed their digital products with Jevxo.
        </p>
      </div>

      {/* 3 Infinite Marquee Rows */}
      {reviews.length > 0 && (
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

      {/* Video Modal */}
      {playingVideoUrl && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => setPlayingVideoUrl(null)}
        >
          <div 
            className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-white/80 hover:text-white z-10 bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all cursor-pointer"
              onClick={() => setPlayingVideoUrl(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              src={getEmbedUrl(playingVideoUrl)}
              title="Client Testimonial Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full object-cover border-0"
            />
          </div>
        </div>
      )}
    </section>
  );
}
