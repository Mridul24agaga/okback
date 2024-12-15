'use client'

import { BarChart3, Globe2, Bell, Settings2 } from 'lucide-react'
import Image from "next/image"
import { useRef } from 'react'

export default function BacklinkFeatures() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-white relative">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative">
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black tracking-tight">
                What Getmorebacklinks does to your Startup?
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-4 bg-gray-100 p-4 rounded-xl border border-gray-300">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Web Traffic Booms</h3>
                    <p className="text-sm text-gray-600">Increase your organic traffic</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-gray-100 p-4 rounded-xl border border-gray-300">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Globe2 className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Google Authority Inc</h3>
                    <p className="text-sm text-gray-600">Boost your domain authority</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-gray-100 p-4 rounded-xl border border-gray-300">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Bell className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">High Quality Traffic</h3>
                    <p className="text-sm text-gray-600">Target relevant audiences</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-gray-100 p-4 rounded-xl border border-gray-300">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Settings2 className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Everything automated</h3>
                    <p className="text-sm text-gray-600">Set it and forget it</p>
                  </div>
                </div>
              </div>

              <div>
                <button 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 text-base rounded-md transition-colors duration-200 ease-in-out"
                  onClick={scrollToPricing}
                >
                  Submit your Startup Now
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Image */}
          <div className="relative">
            <Image
              src="/Untitled design - 2024-12-11T190833.140.png"
              alt="Dashboard Preview"
              width={800}
              height={600}
              className="rounded-xl border border-gray-300 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

