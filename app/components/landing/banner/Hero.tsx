import Link from "next/link";
import { Calendar, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-12 pb-20 max-w-5xl mx-auto">
      {/* Startup Badge */}
      <div className="inline-flex items-center gap-3 bg-white border border-gray-200/80 px-4 py-1.5 rounded-full shadow-sm mb-8">
        <div className="flex items-center -space-x-1.5">
          {/* Tech / Design Tool Badges */}
          <div className="w-5 h-5 rounded-full bg-[#f24e1e] flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
            F
          </div>
          <div className="w-5 h-5 rounded-full bg-[#ffc700] flex items-center justify-center text-[10px] font-bold text-black shadow-xs">
            ◆
          </div>
          <div className="w-5 h-5 rounded-full bg-[#ff7262] flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
            *
          </div>
          <div className="w-5 h-5 rounded-full bg-[#4353ff] flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
            W
          </div>
          <div className="w-5 h-5 rounded-full bg-[#00c8ff] flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
            ⚡
          </div>
        </div>
        <span className="text-xs font-semibold text-gray-700 tracking-tight">
          50+ startup & founders
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#090b15] tracking-tight leading-[1.1] max-w-4xl">
        We Design & Dev Agency <br className="hidden sm:inline" />
        For B2B <span className="serif-italic font-normal">SaaS Companies</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
        A full-service UI/UX and development agency helping startups and businesses
        create fast, scalable, and user-focused digital products.
      </p>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
        {/* Consultation Button */}
        <Link
          href="#book"
          className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#1b64ff] to-[#0047e1] text-white px-7 py-3.5 rounded-full font-semibold text-sm shadow-xl shadow-blue-500/30 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Free Consultation</span>
        </Link>

        {/* Whatsapp Button */}
        <Link
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#1f2421] text-white px-7 py-3.5 rounded-full font-semibold text-sm shadow-xl shadow-black/20 hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all border border-gray-800"
        >
          <div className="w-5 h-5 rounded-full bg-[#25d366] flex items-center justify-center">
            <MessageCircle className="w-3.5 h-3.5 text-white fill-white" />
          </div>
          <span>Chat on Whatsapp</span>
        </Link>
      </div>
    </main>
  );
}
