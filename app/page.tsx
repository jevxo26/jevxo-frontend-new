import Link from "next/link";
import { ArrowUpRight, Calendar, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#f6f8fc] text-[#0a0c16] flex flex-col justify-between overflow-hidden">
      {/* Background Grid & Soft Radial Glow */}
      <div className="absolute inset-0 hero-grid pointer-events-none z-0" />
      <div className="absolute inset-0 hero-radial-glow pointer-events-none z-0" />

      {/* Navigation Header */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#0052ff] rounded-xl flex items-center justify-center shadow-md shadow-blue-500/20">
            <span className="text-white font-bold text-2xl tracking-tighter italic">J</span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-wider text-[#0a0c16] leading-none">JEVXO</span>
            <span className="text-[9px] tracking-widest text-gray-500 uppercase font-semibold mt-0.5">
              DESIGN. DEVELOP. TRANSFORM.
            </span>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-700">
          <Link href="#service" className="hover:text-black transition-colors">
            Service
          </Link>
          <Link href="#case-study" className="hover:text-black transition-colors">
            Case Study
          </Link>
          <Link href="#process" className="hover:text-black transition-colors">
            Process
          </Link>
          <Link href="#pricing" className="hover:text-black transition-colors">
            Pricing
          </Link>
          <Link href="#faq" className="hover:text-black transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Contact Us Button */}
        <div className="flex items-center">
          <Link
            href="#contact"
            className="flex items-center gap-2 bg-[#23262d] text-white px-5 py-2.5 rounded-full font-medium text-sm shadow-lg shadow-black/10 hover:bg-black transition-all group"
          >
            <span>Contact Us</span>
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </header>

      {/* Hero Content Section */}
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

      {/* Portfolio Showcase Grid Section */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 - Analytics Dashboard */}
          <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100/80 hover:shadow-md transition-shadow group flex flex-col justify-between">
            <div className="bg-[#f8fafc] rounded-2xl p-3 overflow-hidden border border-gray-100 mb-4 h-48 flex items-center justify-center relative">
              <div className="w-full h-full bg-white rounded-xl shadow-xs p-2.5 flex flex-col gap-2">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <div className="h-3 w-16 bg-emerald-100 rounded-full" />
                  <div className="h-3 w-10 bg-gray-100 rounded-full" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-emerald-50/60 p-2 rounded-lg border border-emerald-100/50">
                    <span className="text-[10px] text-emerald-600 font-bold block">$832,920</span>
                    <span className="text-[8px] text-gray-400">Active Campaign</span>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg">
                    <span className="text-[10px] text-gray-800 font-bold block">$264,846</span>
                    <span className="text-[8px] text-gray-400">Raised (Active)</span>
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-t from-emerald-100/40 to-transparent rounded-lg flex items-end justify-between px-2 pb-1">
                  <div className="w-2.5 h-6 bg-emerald-400 rounded-t-xs" />
                  <div className="w-2.5 h-10 bg-emerald-500 rounded-t-xs" />
                  <div className="w-2.5 h-4 bg-emerald-300 rounded-t-xs" />
                  <div className="w-2.5 h-8 bg-emerald-500 rounded-t-xs" />
                  <div className="w-2.5 h-12 bg-emerald-600 rounded-t-xs" />
                </div>
              </div>
            </div>
            <div className="px-1">
              <span className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider">B2B SaaS</span>
              <h3 className="text-base font-bold text-gray-900 mt-0.5">Fintech & Analytics Platform</h3>
            </div>
          </div>

          {/* Card 2 - Desktop Display Mockup */}
          <div className="bg-[#111318] text-white rounded-3xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="bg-[#1a1d24] rounded-2xl p-3 overflow-hidden border border-gray-800 mb-4 h-48 flex flex-col items-center justify-center relative">
              {/* Monitor frame representation */}
              <div className="w-11/12 h-36 bg-black rounded-lg border border-gray-700 p-1 flex flex-col shadow-2xl">
                <div className="bg-[#0f172a] flex-1 rounded p-2 text-left">
                  <div className="w-20 h-2 bg-emerald-500 rounded-full mb-2" />
                  <div className="text-[9px] text-white font-bold leading-tight mb-1">
                    Empowering Organizations With One Platform.
                  </div>
                  <div className="w-full h-10 bg-slate-800/80 rounded mt-2 border border-slate-700/50 p-1 flex items-center justify-between">
                    <div className="w-6 h-6 rounded bg-emerald-500/20" />
                    <div className="w-12 h-3 bg-emerald-500 rounded-full" />
                  </div>
                </div>
              </div>
              <div className="w-12 h-2 bg-gray-700 rounded-b-md mt-1" />
            </div>
            <div className="px-1">
              <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">Web Platform</span>
              <h3 className="text-base font-bold text-white mt-0.5">Humanitarian Smart Portal</h3>
            </div>
          </div>

          {/* Card 3 - Mobile App Workouts */}
          <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100/80 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="bg-[#17181c] rounded-2xl p-3 overflow-hidden border border-gray-800 mb-4 h-48 flex items-center justify-center gap-2 relative">
              {/* Phone 1 */}
              <div className="w-20 h-36 bg-black rounded-2xl border-2 border-gray-700 p-1 flex flex-col justify-between shadow-xl">
                <div className="w-8 h-1 bg-gray-800 rounded-full mx-auto" />
                <div className="bg-[#1f2026] flex-1 rounded-xl p-1.5 flex flex-col justify-between my-1">
                  <div className="text-[7px] text-gray-300 font-bold">Full Body Burn</div>
                  <div className="w-full h-12 bg-lime-400/20 rounded-lg border border-lime-400/30 flex items-center justify-center text-[8px] text-lime-400 font-bold">
                    1500 kcal
                  </div>
                  <div className="w-full py-1 bg-lime-400 rounded-md text-[7px] text-black font-extrabold text-center">
                    Start Workout
                  </div>
                </div>
              </div>
            </div>
            <div className="px-1">
              <span className="text-[11px] font-semibold text-lime-600 uppercase tracking-wider">Mobile App</span>
              <h3 className="text-base font-bold text-gray-900 mt-0.5">Fitness & Workout Tracker</h3>
            </div>
          </div>

          {/* Card 4 - Healthcare Website Laptop */}
          <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100/80 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="bg-[#eef2ff] rounded-2xl p-3 overflow-hidden border border-indigo-100/50 mb-4 h-48 flex items-center justify-center relative">
              <div className="w-full bg-white rounded-xl shadow-xs border border-indigo-50 p-2.5 flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-2.5 bg-emerald-500 rounded" />
                  <div className="flex gap-1">
                    <div className="w-3 h-1 bg-gray-300 rounded" />
                    <div className="w-3 h-1 bg-gray-300 rounded" />
                  </div>
                </div>
                <div className="text-[9px] font-extrabold text-gray-800 leading-tight">
                  Dignity Health Trusted Care For Every Stage Of Life
                </div>
                <div className="w-16 h-3 bg-emerald-600 rounded-full text-[6px] text-white flex items-center justify-center font-bold">
                  Book Appointment
                </div>
              </div>
            </div>
            <div className="px-1">
              <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider">Healthcare</span>
              <h3 className="text-base font-bold text-gray-900 mt-0.5">Medical Care Portal</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

