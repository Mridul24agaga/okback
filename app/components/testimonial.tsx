'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    name: "Chris M",
    company: "SAAS Owner",
    image: "/buyer1.jpg",
    rating: 5,
    text: "I run a small business and can't afford high-end SEO tools. This service was affordable and incredibly effective. Being listed on over 500 directories gave my website the visibility it desperately needed."
  },
  {
    id: 2,
    name: "Trix M",
    company: "Founder, Creator Hero",
    image: "/49.jpg",
    rating: 5,
    text: "Backlink-building can feel like a black box, but GetMoreBacklinks.org made it transparent. Their detailed report gave me confidence, and the early results speak for themselves—better rankings, more traffic, and more leads!"
  }
]

export default function TestimonialsSection() {
  const [isScreenshotAttempted, setIsScreenshotAttempted] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && (e.key === '3' || e.key === '4' || e.key === '5')) {
        setIsScreenshotAttempted(true)
        setTimeout(() => setIsScreenshotAttempted(false), 500)
      }
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsScreenshotAttempted(true)
        setTimeout(() => setIsScreenshotAttempted(false), 500)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return (
    <section 
      className="py-16 bg-white relative"
      onContextMenu={(e) => e.preventDefault()}
      style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}
    >
      {isScreenshotAttempted && (
        <div className="fixed inset-0 bg-black z-50" />
      )}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gray-900 p-8 rounded-lg shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F97316] to-yellow-500"></div>
              <div className="flex flex-col h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name}'s profile picture`}
                    width={64}
                    height={64}
                    className="rounded-full border-2 border-[#F97316]"
                    unoptimized
                  />
                  <div>
                    <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#F97316] text-[#F97316]"
                    />
                  ))}
                </div>
                <blockquote className="text-white text-lg mb-6 flex-grow">
                  "{testimonial.text}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

