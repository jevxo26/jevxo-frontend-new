"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Sparkles } from "lucide-react";

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

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Service", href: "#service", desc: "Our core agency services" },
    { name: "Case Study", href: "#case-study", desc: "Selected client work" },
    { name: "Process", href: "#process", desc: "How we deliver fast" },
    { name: "Pricing", href: "#pricing", desc: "Transparent retainer plans" },
    { name: "FAQ", href: "#faq", desc: "Common questions answered" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-gray-100/80 py-3"
          : "bg-transparent py-5 md:py-6"
      }`}
    >
      <div className="w-full max-w-[95%] sm:max-w-10/12 mx-auto px-3 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo1.jpeg"
            alt="JEVXO Logo"
            width={140}
            height={40}
            className="h-9 sm:h-10 w-auto object-contain rounded-sm"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#0a0c1f] hover:text-[#0052FF] transition-colors font-medium text-[15px] tracking-tight relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0052FF] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Contact Us Premium Capsule Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden sm:flex items-center gap-3 bg-[#0a0c1f] hover:bg-black text-white pl-5 pr-1.5 py-1.5 rounded-full font-medium text-base shadow-md hover:shadow-xl transition-all duration-300 group"
          >
            <span className="text-[14px] font-medium tracking-tight">
              Contact Us
            </span>
            <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden shrink-0 border border-white/20">
              <Image
                src="/whatsapp.png"
                alt="WhatsApp"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-2xl bg-white border border-gray-200/80 shadow-xs flex items-center justify-center text-gray-900 active:scale-95 transition-all"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-900" />
            ) : (
              <Menu className="w-5 h-5 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Premium Glassmorphic Mobile Navigation Modal Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-40 md:hidden"
            />

            {/* Mobile Drawer Container */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-3 inset-x-3 z-50 md:hidden bg-white/95 backdrop-blur-2xl border border-gray-200/80 rounded-3xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.2)] flex flex-col gap-4 max-h-[92vh] overflow-y-auto"
            >
              {/* Header inside Menu Drawer */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <Image
                    src="/logo1.jpeg"
                    alt="JEVXO Logo"
                    width={130}
                    height={36}
                    className="h-8 w-auto object-contain"
                  />
                </Link>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-1.5 py-1">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-center justify-between p-3.5 rounded-2xl bg-gray-50/60 hover:bg-blue-50/60 border border-transparent hover:border-blue-100 transition-all duration-200"
                    >
                      <div className="flex flex-col">
                        <span className="text-base font-semibold text-[#0a0c1f] group-hover:text-[#0052FF] transition-colors">
                          {link.name}
                        </span>
                        <span className="text-xs text-gray-400 font-normal">
                          {link.desc}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 group-hover:text-[#0052FF] group-hover:translate-x-1 transition-all shadow-2xs">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Premium Contact Us CTA Button at bottom of Mobile Drawer */}
              <div className="pt-2 border-t border-gray-100 flex flex-col gap-3">
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-between bg-[#0a0c1f] active:bg-black text-white p-2.5 pl-5 rounded-2xl shadow-lg transition-all duration-200 group"
                >
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span className="font-semibold text-sm tracking-wide">
                      Contact Us
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
                    <span className="text-xs font-medium text-white/90">WhatsApp</span>
                    <div className="w-6 h-6 rounded-full overflow-hidden shrink-0">
                      <Image
                        src="/whatsapp.png"
                        alt="WhatsApp"
                        width={24}
                        height={24}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </Link>

                <div className="flex items-center justify-between px-2 text-[11px] text-gray-400 font-normal">
                  <span>⚡ Quick 15-min Scope Call</span>
                  <span className="text-emerald-500 font-medium">● Available Now</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}