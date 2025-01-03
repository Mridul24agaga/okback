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
                href="/blog-service" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Blog Service
              </Link>
              <Link 
                href="/faqs" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                FAQs
              </Link>
              <Link 
                href="/blogs" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Blogs
              </Link>
            </nav>
            <Link
              href="/get-started"
              className="bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border border-gray-800 mt-3 rounded-lg p-4">
          <nav className="flex flex-col gap-4">
            <Link 
              href="/blog-service" 
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Blog Service
            </Link>
            <Link 
              href="/faqs" 
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              FAQs
            </Link>
            <Link 
              href="/blogs" 
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Blogs
            </Link>
            <Link
              href="/get-started"
              className="bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-gray-100 transition-colors inline-block text-center"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

