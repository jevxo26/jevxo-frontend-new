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

      {/* CTA Section */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-4 pb-24">
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
    </div>
  );
}


