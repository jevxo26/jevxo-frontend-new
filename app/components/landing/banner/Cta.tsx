import Link from "next/link";
import { Calendar, MessageCircle } from "lucide-react";

export default function Cta() {
  return (
    <section className="relative z-10 w-full max-w-[95%] lg:max-w-6xl mx-auto px-4 pb-24">
      {/* CTA Card Banner */}
      <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-b from-[#090e1a] via-[#0b132b] to-[#070b16] border border-slate-800 text-white p-8 sm:p-14 text-center flex flex-col items-center shadow-2xl">
        {/* Subtle Glow inside CTA */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-blue-600/15 blur-3xl pointer-events-none rounded-full" />
        
        {/* Badge */}
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-1.5 rounded-full mb-8">
          <div className="flex items-center -space-x-1.5">
            <div className="w-5 h-5 rounded-full bg-[#f24e1e] flex items-center justify-center text-[10px] font-bold text-white">F</div>
            <div className="w-5 h-5 rounded-full bg-[#ffc700] flex items-center justify-center text-[10px] font-bold text-black">◆</div>
            <div className="w-5 h-5 rounded-full bg-[#ff7262] flex items-center justify-center text-[10px] font-bold text-white">*</div>
            <div className="w-5 h-5 rounded-full bg-[#4353ff] flex items-center justify-center text-[10px] font-bold text-white">W</div>
          </div>
          <span className="text-xs font-semibold text-gray-200 tracking-tight">50+ startup & founders</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-3xl leading-[1.15]">
          Have a Project in Mind? <br className="hidden sm:inline" />
          Let’s Build Something <span className="serif-italic font-normal text-blue-200">Great Together</span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-400 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
          We help ambitious SaaS companies and startups turn complex ideas into high-converting, scalable digital products.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto z-10">
          <Link
            href="#book"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#1b64ff] to-[#0047e1] text-white px-7 py-3.5 rounded-full font-semibold text-sm shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Free Consultation</span>
          </Link>

          <Link
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white/10 backdrop-blur-md text-white px-7 py-3.5 rounded-full font-semibold text-sm shadow-xl hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all border border-white/20"
          >
            <div className="w-5 h-5 rounded-full bg-[#25d366] flex items-center justify-center">
              <MessageCircle className="w-3.5 h-3.5 text-white fill-white" />
            </div>
            <span>Chat on Whatsapp</span>
          </Link>
        </div>

        {/* Grid Preview Gallery Container inside CTA */}
        <div className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-4 opacity-80 hover:opacity-100 transition-opacity">
          <div className="bg-slate-900/90 rounded-2xl p-2.5 border border-slate-800 h-32 flex flex-col justify-between">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl h-20 p-2 flex flex-col justify-between">
              <div className="w-12 h-1.5 bg-emerald-400 rounded-full" />
              <div className="text-[10px] text-emerald-400 font-bold">$832,920</div>
            </div>
            <div className="text-[10px] font-semibold text-gray-400 text-left px-1">Fintech Dashboard</div>
          </div>

          <div className="bg-slate-900/90 rounded-2xl p-2.5 border border-slate-800 h-32 flex flex-col justify-between">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl h-20 p-2 flex flex-col justify-between">
              <div className="w-16 h-1.5 bg-blue-400 rounded-full" />
              <div className="text-[10px] text-blue-300 font-semibold">Humanitarian Portal</div>
            </div>
            <div className="text-[10px] font-semibold text-gray-400 text-left px-1">SaaS Web App</div>
          </div>

          <div className="bg-slate-900/90 rounded-2xl p-2.5 border border-slate-800 h-32 flex flex-col justify-between">
            <div className="bg-lime-500/10 border border-lime-500/20 rounded-xl h-20 p-2 flex flex-col justify-between">
              <div className="w-10 h-1.5 bg-lime-400 rounded-full" />
              <div className="text-[10px] text-lime-400 font-bold">1500 kcal</div>
            </div>
            <div className="text-[10px] font-semibold text-gray-400 text-left px-1">Fitness Tracker</div>
          </div>

          <div className="bg-slate-900/90 rounded-2xl p-2.5 border border-slate-800 h-32 flex flex-col justify-between">
            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl h-20 p-2 flex flex-col justify-between">
              <div className="w-14 h-1.5 bg-indigo-400 rounded-full" />
              <div className="text-[9px] text-indigo-300">Medical Care</div>
            </div>
            <div className="text-[10px] font-semibold text-gray-400 text-left px-1">Healthcare Portal</div>
          </div>
        </div>
      </div>
    </section>
  );
}
