import Link from "next/link";
import { Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#030712] text-white pt-20 pb-16 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-14 border-b border-gray-800/60">
          {/* Brand Column */}
          <div className="flex flex-col space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0052ff] rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                <span className="text-white font-extrabold text-2xl tracking-tighter italic">J</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-wider text-white leading-none">JEVXO</span>
                <span className="text-[9px] tracking-widest text-gray-400 uppercase font-semibold mt-1">
                  DESIGN. DEVELOP. TRANSFORM.
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-normal">
              A UI UX design agency that helps startup launch confidently and scale sustainably.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook Icon SVG */}
              <Link href="#" className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 hover:border-gray-700 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              {/* LinkedIn Icon SVG */}
              <Link href="#" className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 hover:border-gray-700 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
              {/* Instagram Icon SVG */}
              <Link href="#" className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 hover:border-gray-700 transition-all">
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              {/* Twitter / X Icon SVG */}
              <Link href="#" className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 hover:border-gray-700 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Link */}
          <div>
            <h4 className="text-base font-semibold text-white mb-6">Quick Link</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#service" className="hover:text-white transition-colors">Service</Link></li>
              <li><Link href="#case-study" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="#blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#contract" className="hover:text-white transition-colors">Contract</Link></li>
              <li><Link href="#careers" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="text-base font-semibold text-white mb-6">Service</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#service" className="hover:text-white transition-colors">Product Design</Link></li>
              <li><Link href="#service" className="hover:text-white transition-colors">Web & App Design</Link></li>
              <li><Link href="#service" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="#service" className="hover:text-white transition-colors">App Development</Link></li>
              <li><Link href="#service" className="hover:text-white transition-colors">Product Development</Link></li>
              <li><Link href="#service" className="hover:text-white transition-colors">Branding Design</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-base font-semibold text-white mb-6">Contact Us</h4>
            <div className="space-y-5 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-gray-300 font-medium">WhatsApp</div>
                  <div className="text-gray-400 text-xs mt-0.5">+1 (305) 902-3242</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-gray-300 font-medium">Email Address</div>
                  <div className="text-gray-400 text-xs mt-0.5">contact@nexiby.com</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-gray-300 font-medium">Working Hour :</div>
                  <div className="text-gray-400 text-xs mt-0.5">Mon - Fri 10.00 AM - 08.00 PM (GMT+6)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>Copyright © 2026 JEVXO | All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies Policy</Link>
          </div>
        </div>
      </div>

      {/* Massive Background Watermark / Glow Effect matching screenshot */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 pointer-events-none select-none w-full text-center opacity-25 overflow-hidden">
        <div className="text-[18vw] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-t from-blue-600 via-blue-500 to-transparent leading-none filter blur-[2px]">
          JEVXO
        </div>
      </div>
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[85%] h-64 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
}
