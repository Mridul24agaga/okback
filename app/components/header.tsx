'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto px-3 py-3 bg-[#0a0a0a] border border-gray-800 max-w-[1000px] my-3 rounded-full">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/backlinkai.png"
              alt="Backlink Bot Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-5">
            <nav className="flex items-center gap-5">
              <Link 
                href="/#whyus?" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Why Us?
              </Link>
              <Link 
                href="/#pricing" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Pricing
              </Link>
            </nav>
            <Link
              href="/#pricing"
              className="bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
          </div>

          <button 
            className="md:hidden text-white relative z-50 w-6 h-6"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
            <span className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
  className={`md:hidden absolute top-full left-3 right-3 bg-[#0a0a0a] border border-gray-800 transition-all duration-300 ease-in-out rounded-2xl ${
    isMenuOpen 
      ? 'opacity-100 translate-y-3 pointer-events-auto' 
      : 'opacity-0 -translate-y-4 pointer-events-none'
  }`}
>
  <nav className="flex flex-col p-6 gap-6">
    <Link 
      href="/#whyus?" 
      className="text-gray-400 hover:text-white transition-colors text-base"
      onClick={() => setIsMenuOpen(false)}
    >
     Why Us?
    </Link>
    <Link 
      href="/#pricing" 
      className="text-gray-400 hover:text-white transition-colors text-base"
      onClick={() => setIsMenuOpen(false)}
    >
      Pricing
    </Link>
    
    <Link
      href="/#pricing"
      className="bg-white text-black px-4 py-2 rounded-full text-base hover:bg-gray-100 transition-colors inline-block text-center"
      onClick={() => setIsMenuOpen(false)}
    >
      Get Started
    </Link>
  </nav>
</div>
    </header>
  )
}

