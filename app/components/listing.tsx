'use client'

import React, { useState, useEffect } from 'react'

interface StatItem {
  value: string
  label: string
}

export default function ListingSection() {
  const [isVisible, setIsVisible] = useState(false)
  const stats: StatItem[] = [
    { value: "20", label: "Hours grunt work" },
    { value: "$500", label: "Opportunity Cost" },
    { value: "0", label: "new learning" }
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-12 sm:mb-16 md:mb-20 leading-tight transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            If you list your Startup manually to 100+ sites
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((item, index) => (
              <div 
                key={index}
                className={`bg-gray-100 border border-gray-300 rounded-xl p-6 transition-all duration-300 hover:shadow-lg ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div 
                  className={`text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500 mb-2 transition-all duration-300 ${
                    isVisible ? 'scale-100' : 'scale-80'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  {item.value}
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

