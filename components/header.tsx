"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import M1Logo from "../public/fav.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Services", href: "#services" },
    { label: "Values", href: "#values" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Approach", href: "#approach" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/95 backdrop-blur-md border-b border-cyan-500/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#overview"
            className="flex items-center gap-3 flex-shrink-0 group"
          >
            <Image
              src={M1Logo}
              alt="M1 Media Logo"
              width={32}
              height={32}
              className="w-12 h-12"
            />
            {/* <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-400 transition-all">
              M1 Media
            </span> */}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-500/10"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          {/* <div className="hidden lg:flex gap-3">
            <a href="#contact">
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-semibold rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/20">
                Get Started
              </button>
            </a>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-cyan-400 hover:bg-cyan-500/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-cyan-500/10 bg-slate-950/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="block px-4 py-2 pt-4">
              <button className="w-full px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-semibold rounded-full transition-all">
                Get Started
              </button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// function M1Logo() {
//   return (
//     <div className="relative w-8 h-8">
//       <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//         <defs>
//           <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
//             <stop offset="100%" style={{ stopColor: '#0ea5e9', stopOpacity: 1 }} />
//           </linearGradient>
//         </defs>
//         <rect x="2" y="2" width="8" height="8" fill="url(#grad)" rx="1.5" />
//         <rect x="14" y="2" width="8" height="8" fill="url(#grad)" opacity="0.6" rx="1.5" />
//         <rect x="2" y="14" width="8" height="8" fill="url(#grad)" opacity="0.4" rx="1.5" />
//         <rect x="14" y="14" width="8" height="8" fill="url(#grad)" opacity="0.2" rx="1.5" />
//       </svg>
//     </div>
//   )
// }
