'use client'

import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import Link from 'next/link'

export default function ThankYouPage() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', updateWindowSize)
    updateWindowSize()

    return () => window.removeEventListener('resize', updateWindowSize)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Confetti width={windowSize.width} height={windowSize.height} />
      <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-100 to-white pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 animate-fade-in-up">Thank You for your selections!</h1>
        <p className="text-2xl text-gray-700 mb-8 animate-fade-in-up delay-200">
        Your website will be listed in 7 days and you can see results coming in 30 days
        </p>
        
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-pink-500 text-white text-lg font-semibold rounded-full shadow-md hover:from-blue-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out animate-fade-in-up delay-800"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}

