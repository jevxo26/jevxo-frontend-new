"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#030712] text-white pt-16 md:pt-20 pb-8 relative overflow-hidden z-10 border-t border-gray-900">
      <div className="w-full max-w-[95%] sm:max-w-10/12 mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          
          {/* Column 1: Brand Info & Social Icons (Col Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-5">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <Image 
                src="/logo1.jpeg" 
                alt="JEVXO Logo" 
                width={150} 
                height={42} 
                className="h-10 w-auto object-contain rounded-md"
              />
            </Link>

            {/* Tagline */}
            <p className="text-[#94a3b8] text-sm leading-relaxed max-w-xs font-normal">
              A UI UX design agency that helps startup launch confidently and scale sustainably.
            </p>

            {/* Social Media Rounded Buttons with Inline SVGs */}
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook */}
              <Link 
                href="#" 
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-[#111827] border border-gray-800/80 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>

              {/* LinkedIn */}
              <Link 
                href="#" 
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-[#111827] border border-gray-800/80 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>

              {/* Instagram */}
              <Link 
                href="#" 
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-[#111827] border border-gray-800/80 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-xs"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>

              {/* Twitter / X */}
              <Link 
                href="#" 
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg bg-[#111827] border border-gray-800/80 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Link (Col Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-semibold text-white mb-5 tracking-tight">Quick Link</h4>
            <ul className="space-y-3 text-sm text-[#94a3b8] font-normal">
              <li><Link href="#about" className="hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link href="#ourservice" className="hover:text-white transition-colors duration-200">Service</Link></li>
              <li><Link href="#case-studies" className="hover:text-white transition-colors duration-200">Case Studies</Link></li>
              <li><Link href="#blog" className="hover:text-white transition-colors duration-200">Blog</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors duration-200">Contract</Link></li>
              <li><Link href="#careers" className="hover:text-white transition-colors duration-200">Careers</Link></li>
            </ul>
          </div>

          {/* Column 3: Service (Col Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-semibold text-white mb-5 tracking-tight">Service</h4>
            <ul className="space-y-3 text-sm text-[#94a3b8] font-normal">
              <li><Link href="#ourservice" className="hover:text-white transition-colors duration-200">Product Design</Link></li>
              <li><Link href="#ourservice" className="hover:text-white transition-colors duration-200">Web &amp; App Design</Link></li>
              <li><Link href="#ourservice" className="hover:text-white transition-colors duration-200">Web Development</Link></li>
              <li><Link href="#ourservice" className="hover:text-white transition-colors duration-200">App Development</Link></li>
              <li><Link href="#ourservice" className="hover:text-white transition-colors duration-200">Product Development</Link></li>
              <li><Link href="#ourservice" className="hover:text-white transition-colors duration-200">Branding Design</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us (Col Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-semibold text-white mb-5 tracking-tight">Contact Us</h4>
            <div className="space-y-4 text-sm text-[#94a3b8]">
              
              {/* WhatsApp */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gray-300 mt-1 shrink-0" />
                <div>
                  <div className="text-white font-medium text-sm">WhatsApp</div>
                  <div className="text-[#94a3b8] text-xs sm:text-sm mt-0.5">+1 (305) 902-3242</div>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gray-300 mt-1 shrink-0" />
                <div>
                  <div className="text-white font-medium text-sm">Email Address</div>
                  <div className="text-[#94a3b8] text-xs sm:text-sm mt-0.5">contact@nexiby.com</div>
                </div>
              </div>

              {/* Working Hour */}
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gray-300 mt-1 shrink-0" />
                <div>
                  <div className="text-white font-medium text-sm">Working Hour :</div>
                  <div className="text-[#94a3b8] text-xs sm:text-sm mt-0.5 leading-relaxed">
                    Mon - Fri 10.00 AM - 08.00 PM (GMT+6)
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-gray-800/80 my-6" />

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94a3b8] font-normal pb-6">
          <p>Copyright © 2026 JEVXO | All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors duration-200">Terms &amp; Conditions</Link>
            <Link href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors duration-200">Cookies Policy</Link>
          </div>
        </div>

      </div>

      {/* Giant Glowing Watermark "JEVXO" Background Overlay behind the 4 main columns */}
      <div className="absolute inset-x-0 bottom-0 top-10 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <h1 className="text-[140px] sm:text-[220px] md:text-[280px] lg:text-[340px] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#2563eb]/30 via-[#1d4ed8]/12 to-transparent filter blur-[1px]">
          JEVXO
        </h1>
        {/* Subtle Horizontal Blue Light Glow Line */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#1d4ed8]/20 via-[#1d4ed8]/10 to-transparent blur-3xl pointer-events-none" />
      </div>

    </footer>
  );
}
