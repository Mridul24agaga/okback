'use client'

import { Rocket } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function EarlyBirdFooter() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-orange-400 to-orange-200 rounded-2xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-300 to-orange-400"></div>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <Rocket className="h-6 w-6 text-black" />
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              GetMoreBacklinks Special Offer
            </h2>
          </div>
          
          <p className="text-black text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Lock in these special prices now! Limited to first 100 customers only.
            Regular pricing will be activated after 100 spots are filled.
          </p>

          <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl sm:text-4xl font-bold text-black mb-1">63</div>
              <div className="text-black text-sm">Spots Left</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl sm:text-4xl font-bold text-black mb-1">67%</div>
              <div className="text-black text-sm">Savings</div>
            </div>
          </div>

          {/* Enhanced Glowing CTA Button */}
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 rounded-lg blur opacity-75 group-hover:opacity-100 animate-pulse transition duration-1000 group-hover:duration-200"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 animate-pulse transition duration-1000 group-hover:duration-200 animation-delay-500"></div>
            {isClient ? (
              <button 
                onClick={scrollToPricing}
                className="relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg leading-none flex items-center divide-x divide-gray-600 transition-transform duration-200 ease-in-out transform group-hover:scale-105"
              >
                <span className="flex items-center space-x-3">
                  <span className="text-white text-lg font-semibold pr-6">Get 67% OFF Now</span>
                </span>
                <span className="pl-6 text-orange-200 group-hover:text-white transition duration-200 text-base">See Pricing &rarr;</span>
              </button>
            ) : (
              <div className="relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg leading-none flex items-center divide-x divide-gray-600">
                <span className="flex items-center space-x-3">
                  <span className="text-white text-lg font-semibold pr-6">Get 67% OFF Now</span>
                </span>
                <span className="pl-6 text-orange-200 transition duration-200 text-base">See Pricing &rarr;</span>
              </div>
            )}
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/2 left-0 w-32 h-32 bg-orange-400/20 rounded-full -translate-y-1/2 -translate-x-16 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-orange-400/20 rounded-full translate-y-16 translate-x-16 blur-2xl"></div>
        </div>
      </div>
    </div>
  )
}

