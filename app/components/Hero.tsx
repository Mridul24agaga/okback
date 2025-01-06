'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, X } from 'lucide-react'
import { Header } from './header'
import DomainRatingSection from './testimonials'
import PricingSection from '@/app/components/pricing2'

// Popup component
const Popup = ({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-6xl overflow-hidden">
        <div className="flex justify-end p-2">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="max-h-[calc(100vh-6rem)] overflow-y-auto md:max-h-none md:overflow-y-visible">
          {children}
        </div>
      </div>
    </div>
  )
}

// Main Hero component
export default function Hero() {
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', { email, website })
    setIsPopupOpen(true)
  }

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Header />
      
      <div className="relative flex-grow flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8 mt-16">
        <div className="w-full max-w-5xl mx-auto text-center relative">
          <div className="mb-6">
            <p className="text-[#0047AB] text-sm sm:text-base font-medium">
              Boost Your Website's Authority with High-Quality Backlinks
            </p>
          </div>

          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black">
              Skyrocket Your SEO Rankings with{' '}
              <span className="text-[#0047AB]">Backlink AI</span>
            </h1>
          </div>

          <div className="mb-12">
            <p className="text-gray-600 text-lg sm:text-xl max-w-4xl mx-auto">
              Backlink AI - Acquire powerful, relevant backlinks to boost your website's 
              authority, improve search engine rankings, and drive organic traffic. Save time 
              and resources while our expert team builds your backlink profile.
            </p>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-0 sm:flex sm:gap-4 max-w-4xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@me.com"
                className="w-full sm:w-auto flex-1 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0047AB] focus:border-transparent text-black placeholder-gray-500"
                required
              />
              <input
                type="url"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="mysite.com"
                className="w-full sm:w-auto flex-1 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0047AB] focus:border-transparent text-black placeholder-gray-500"
                required
              />
              <Link
                href="/#pricing"
                className="w-full sm:w-auto px-6 py-3 bg-[#0047AB] text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-[#003380] transition-colors"
              >
                Boost My SEO
                <ArrowRight className="w-4 h-4" />
              </Link>
            </form>
          </div>

          <div className="mt-12">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Image
                  src="/peter.jpeg"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span>Questions about backlinks?</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <div className="flex flex-wrap justify-center items-center gap-2">
                <span className="text-gray-500">Contact us on</span>
                <span className="text-gray-500">or</span>
                <Link href="https://x.com/peterliwin5" className="text-[#0047AB] hover:text-[#003380] transition-colors">
                  Twitter
                </Link>
                <span className="text-gray-500">or by</span>
                <Link href="mailto:lewinpeter07@gmail.com" className="text-[#0047AB] hover:text-[#003380] transition-colors">
                  Email
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <PricingSection />
      </Popup>
    </div>
  )
}

