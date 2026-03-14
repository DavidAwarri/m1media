'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from "lucide-react"
import Image from 'next/image'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Services', href: '#services' },
    { label: 'Values', href: '#values' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Approach', href: '#approach' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' 
        : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#overview" className="flex items-center gap-3 flex-shrink-0 group">
            <Image src="/fav.png" alt="M1 Media Logo" width={32} height={32} className='w-12 h-12'/>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50"
              >
                {link.label}
              </a>
            ))}
          </nav>        

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
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
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="block px-4 py-2 pt-4">
              <button className="w-full px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all">
                Get Started
              </button>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function M1Logo() {
  return (
    <div className="relative w-8 h-8">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="2" y="2" width="8" height="8" fill="#2563eb" rx="1.5" />
        <rect x="14" y="2" width="8" height="8" fill="#2563eb" opacity="0.6" rx="1.5" />
        <rect x="2" y="14" width="8" height="8" fill="#2563eb" opacity="0.4" rx="1.5" />
        <rect x="14" y="14" width="8" height="8" fill="#2563eb" opacity="0.2" rx="1.5" />
      </svg>
    </div>
  )
}
