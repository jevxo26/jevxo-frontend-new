import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
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
  );
}
