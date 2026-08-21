"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Sparkles, Code2, Layers, Cpu, CreditCard, HelpCircle } from "lucide-react";

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
    { 
      name: "Service", 
      href: "#service", 
      desc: "UI/UX, Next.js & Full-Stack Development",
      icon: Code2 
    },
    { 
      name: "Case Study", 
      href: "#case-study", 
      desc: "50+ Shipped Web & Mobile Apps",
      icon: Layers 
    },
    { 
      name: "Process", 
      href: "#process", 
      desc: "Agile 6-Step Engineering Workflow",
      icon: Cpu 
    },
    { 
      name: "Pricing", 
      href: "#pricing", 
      desc: "Flexible Retainer & Build Plans",
      icon: CreditCard 
    },
    { 
      name: "FAQ", 
      href: "#faq", 
      desc: "Timelines, Tech Stack & Support",
      icon: HelpCircle 
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-3"
          : "bg-transparent py-5 md:py-6"
      }`}
    >
      <div className="w-full max-w-[95%] lg:max-w-6xl mx-auto px-3 sm:px-6 flex items-center justify-between">
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
            href="https://wa.me/8801613410880?text=Hello%20Jevxo%20Team!%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
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
            className="md:hidden w-10 h-10 rounded-2xl bg-white border border-gray-200/90 shadow-xs flex items-center justify-center text-gray-900 active:scale-95 transition-all"
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
              className="fixed inset-0 bg-black/45 backdrop-blur-md z-40 md:hidden"
            />

            {/* Mobile Drawer Container */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-3 inset-x-3 z-50 md:hidden bg-white/98 backdrop-blur-2xl border border-gray-200/90 rounded-3xl p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] flex flex-col gap-4 max-h-[92vh] overflow-y-auto"
            >
              {/* Header inside Menu Drawer with Software Studio Pill */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                    <Image
                      src="/logo1.jpeg"
                      alt="JEVXO Logo"
                      width={120}
                      height={34}
                      className="h-7.5 w-auto object-contain"
                    />
                  </Link>
                  <span className="text-[10px] font-semibold tracking-wider text-[#0052FF] bg-[#0052FF]/10 px-2.5 py-0.5 rounded-full uppercase border border-[#0052FF]/20">
                    Software Studio
                  </span>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Navigation Links with Software Icons & Subtexts */}
              <div className="flex flex-col gap-2 py-1">
                {navLinks.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * idx }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="group flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-gray-50/70 hover:bg-blue-50/70 border border-gray-100 hover:border-blue-200 transition-all duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-white border border-gray-100 shadow-2xs flex items-center justify-center text-gray-700 group-hover:text-[#0052FF] group-hover:border-blue-200 transition-colors shrink-0">
                            <Icon className="w-4.5 h-4.5" strokeWidth={2} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[15px] font-semibold text-[#0a0c1f] group-hover:text-[#0052FF] transition-colors leading-tight">
                              {link.name}
                            </span>
                            <span className="text-[11px] text-gray-500 font-normal mt-0.5">
                              {link.desc}
                            </span>
                          </div>
                        </div>

                        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-gray-400 group-hover:text-[#0052FF] group-hover:translate-x-1 transition-all shadow-2xs shrink-0">
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Software Studio WhatsApp Contact CTA */}
              <div className="pt-2 border-t border-gray-100 flex flex-col gap-2.5">
                <Link
                  href="https://wa.me/8801613410880?text=Hello%20Jevxo%20Team!%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-between bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] active:scale-[0.99] text-white p-2.5 pl-4 rounded-2xl shadow-xl transition-all duration-200 border border-gray-800 group"
                >
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span className="font-semibold text-sm tracking-wide">
                      Talk To Engineers
                    </span>
                  </div>

                  <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-xl border border-white/15">
                    <span className="text-xs font-medium text-white/95">WhatsApp</span>
                    <div className="w-5.5 h-5.5 rounded-full overflow-hidden shrink-0">
                      <Image
                        src="/whatsapp.png"
                        alt="WhatsApp"
                        width={22}
                        height={22}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </Link>

                <div className="flex items-center justify-between px-2 text-[11px] text-gray-500 font-normal">
                  <span>⚡ 20-Min Build Scope Call</span>
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                    Engineers Online
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}