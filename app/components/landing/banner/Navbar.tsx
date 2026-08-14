"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Service", href: "#service" },
    { name: "Case Study", href: "#case-study" },
    { name: "Process", href: "#process" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] border-b border-gray-100/80 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-10/12 mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-105 group-hover:shadow-blue-500/40 transition-all duration-300 bg-gradient-to-br from-[#2b7bff] via-[#0066FF] to-[#0047b3] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/30" />
            <svg
              className="relative w-5 h-5 text-white fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 3H12V13.5C12 16.538 9.538 19 6.5 19C5.67 19 4.88 18.82 4.17 18.49L3 21.08C4.08 21.67 5.29 22 6.5 22C11.19 22 15 18.19 15 13.5V6H19V3Z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-[#0a0c16] leading-none">
              JEVXO
            </span>
            <span className="text-[8.5px] tracking-[0.28em] text-gray-400 font-bold uppercase mt-1.5">
              Design · Develop · Transform
            </span>
          </div>
        </Link>

        {/* Center Nav Links - Desktop */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-base sm:text-[17px] font-semibold text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[#0a0c16] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:rounded-full after:bg-gradient-to-r after:from-[#0066FF] after:to-[#2b9dff] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Contact Us Premium Capsule Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden sm:flex items-center gap-3 bg-gradient-to-r from-[#1e2025] to-[#0a0c16] hover:from-black hover:to-black text-white pl-6 pr-2 py-2 rounded-full font-semibold text-sm shadow-xl shadow-black/20 hover:shadow-black/30 hover:-translate-y-0.5 transition-all duration-300 group border border-white/10"
          >
            <span className="text-[14px] font-medium tracking-tight">
              Contact Us
            </span>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-105 group-hover:rotate-45 transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 text-black stroke-[2.5]" />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 px-6 py-6 mt-3 flex flex-col gap-1 shadow-xl animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-semibold text-gray-800 hover:text-[#0066FF] hover:pl-2 transition-all py-3 border-b border-gray-50"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 bg-gradient-to-r from-[#1e2025] to-black text-white py-3 rounded-full font-semibold text-sm shadow-lg"
          >
            Contact Us
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}