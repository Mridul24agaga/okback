'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToLearnMore = () => {
    const learnMoreSection = document.getElementById('learn')
    if (learnMoreSection) {
      learnMoreSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="bg-white min-h-screen font-sans flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 transition-all duration-300 bg-white bg-opacity-90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Logo */}
            <div className="flex items-center justify-between">
              <Image
                src="/getmorepacklinks.png"
                alt="Logo"
                width={180}
                height={40}
                className="h-8 md:h-10 w-auto"
              />
              <button 
                className="md:hidden text-gray-500 hover:text-gray-600" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            {/* Navigation links */}
            <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-8 mt-4 md:mt-0`}>
            <Link href="/blogs" className="block py-2 text-gray-900 hover:text-[#F97316] transition-colors">
                Blogs
              </Link>
              <Link href="/submit" className="block py-2 text-gray-900 hover:text-[#F97316] transition-colors">
                Submit my Directory
              </Link>
              <button
                onClick={scrollToPricing}
                className="block w-full md:w-auto py-2 px-4 mt-2 md:mt-0 bg-[#F97316] text-white rounded-md hover:bg-[#EA580C] transition-colors text-center"
              >
                Submit my product
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <section className="container mx-auto px-4 flex-grow flex items-center justify-center">
        <div className={`text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div 
            className="inline-flex items-center justify-center bg-gray-50 rounded-full px-4 py-2 mb-12 hover:bg-gray-100 transition-colors cursor-pointer group relative animate-fadeIn"
          >
            <div className="absolute inset-0 rounded-full border border-gray-200"></div>
            <div className="absolute inset-[1px] rounded-full bg-gradient-to-r from-gray-50 via-white to-gray-50"></div>
            <div className="relative flex items-center">
              <span className="bg-[#F97316] text-white text-xs font-semibold px-2 py-0.5 rounded-full mr-2">HOT</span>
              <span className="text-gray-900 text-sm">One Click to SEO Success and Authority.</span>
              <ChevronRight className="h-4 w-4 text-gray-400 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          <h1
            className="text-gray-900 text-5xl md:text-6xl font-extrabold leading-tight mb-8 animate-slideUp"
          >
            BOOST YOUR <span className="text-[#F97316]">SEO</span>
            <br />
            & GET MORE <span className="text-[#F97316]">SALES</span>
          </h1>

          <p
            className="text-gray-600 text-xl max-w-2xl mx-auto mb-12 animate-slideUp animation-delay-200"
          >
            Get instant traffic on your site, save days of manual work with just one click. Submit Your AI Startup To 100+ Platforms In 7 Days
          </p>

          <div
            className="flex items-center justify-center space-x-4 animate-slideUp animation-delay-400"
          >
            <button
              onClick={scrollToPricing}
              className="bg-[#F97316] text-white px-8 py-3 rounded-md hover:bg-[#EA580C] transition-colors font-medium text-lg"
            >
              Submit my Product
            </button>
            <button
              onClick={scrollToLearnMore}
              className="border border-gray-300 text-gray-900 px-8 py-3 rounded-md hover:bg-gray-50 transition-colors font-medium text-lg"
            >
              Learn more
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

