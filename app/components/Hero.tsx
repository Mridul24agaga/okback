"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { DirectoriesSection } from "@/app/components/directories-section"
import { Footer } from "@/app/components/footer"
import CuratorsSection from "./curators-section"
import ManualListingSection from "./listing"
import BacklinkFeatures from "./backlinkfeatures"
import WhyChooseSection from "./whychooseus"
import FAQSection from "./faq"

const words = ["Startups", "Founders", "Innovators", "Entrepreneurs"]

const containerVariants = {
  initial: {
    opacity: 0,
    y: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.41, 0.01, 0.56, 1],
    },
  },
};

const fadeInUpVariants = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.41, 0.01, 0.56, 1],
      delay: 0.2,
    },
  },
};

interface AnimatedWordProps {
  word: string;
}

const AnimatedWord = ({ word }: AnimatedWordProps) => (
  <motion.div
    initial={{ opacity: 0, y: "100%" }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: "-100%" }}
    transition={{ duration: 0.5, ease: [0.41, 0.01, 0.56, 1] }}
    style={{ display: 'inline-block', minWidth: '140px', padding: '0 4px' }}
  >
    {word}
  </motion.div>
);

const BackgroundGlow = () => (
  <motion.div
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 1 }}
    transition={{ duration: 0.5, ease: [0.41, 0.01, 0.56, 1] }}
    style={{
      position: 'absolute',
      inset: 0,
      originY: 'bottom',
      backgroundColor: 'rgba(255, 165, 0, 0.2)',
      zIndex: -1
    }}
  />
);

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0)
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')
    setError('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setMessage(data.message)
      setEmail('')
    } catch (err) {
      console.error('Subscription error:', err)
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={containerVariants}
      style={{ minHeight: '100vh', backgroundColor: 'white' }}
    >
      {/* Header */}
      <header className="container mx-auto px-4 py-4 sm:py-6 border-b border-gray-200/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/getmorepacklinks.png"
              alt="Logo"
              width={532}
              height={132}
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="/blogs" 
              className="text-black hover:text-gray-600 transition-colors text-sm sm:text-base font-bold"
            >
              Blogs
            </Link>
            <Link href="/submit" className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md bg-black text-white hover:bg-orange-600 transition-colors font-bold">
              Submit Your Directory
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center pt-4 sm:pt-8 pb-8 sm:pb-16 md:pb-32">
          <div className="w-full flex justify-center mb-6 sm:mb-8">
            <Link
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-gray-100 hover:bg-gray-200 px-3 py-1 sm:px-4 sm:py-2 transition-colors border border-gray-200"
            >
              <span className="inline-flex items-center justify-center rounded-full bg-[#F97316] px-2 py-0.5 text-xs font-semibold text-black">
                NEW
              </span>
              <span className="text-xs sm:text-sm text-black">
                Exclusive early access coming soon
              </span>
              <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-black group-hover:text-gray-600 transition-colors" />
            </Link>
          </div>
          <div className="space-y-6 sm:space-y-8 max-w-4xl mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-black animate-fade-in-up animation-delay-150 letter-spacing">
              <span className="tracking-wide leading-tight">Marketing Database for</span>{" "}
              <span className="text-orange-500 relative inline-block">
                <div className="relative overflow-hidden inline-block">
                  <AnimatePresence mode="wait">
                    <AnimatedWord key={words[currentWord]} word={words[currentWord]} />
                  </AnimatePresence>
                  <BackgroundGlow />
                </div>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-orange-500 opacity-50 rounded"></span>
              </span>
            </h1>
            <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
              Join our exclusive waitlist for early access to our curated database of launch platforms, directories, marketplaces, newsletters, and communities - all in one place.
            </p>
          </div>

          {/* Form Section */}
          <div className="mt-4 sm:mt-6 md:mt-8 w-full max-w-md space-y-4 animate-fade-in-up animation-delay-450">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-auto flex-grow px-4 py-2 bg-gray-800 border border-gray-700 rounded-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-[#00CED1] text-white text-sm sm:text-base"
                required
              />
              <button 
                type="submit"
                className="w-full sm:w-auto px-4 py-2 bg-[#F97316] hover:bg-[#F97316] text-black font-medium rounded-md sm:rounded-l-none transition-colors flex items-center justify-center sm:justify-start text-sm sm:text-base"
                disabled={isLoading}
              >
                {isLoading ? 'Joining...' : 'Join Waitlist'} <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>
            
            {message && <p className="text-sm text-green-400">{message}</p>}
            {error && <p className="text-sm text-red-400">{error}</p>}

            {/* Avatar Group Section */}
            <div className="mt-6 flex items-center justify-center">
              <div className="flex -space-x-2">
                <Image
                  src="/48.jpg"
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/49.jpg"
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/50.jpg"
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
               
              </div>
              <p className="ml-4 text-sm font-medium text-black">Join 100+ founders</p>
            </div>

          
        </div>
      </div>

        {/* Directory Section */}
        <DirectoriesSection />
        <ManualListingSection/>
        <BacklinkFeatures/>
        <WhyChooseSection/>
        <FAQSection/>

       
        <motion.div variants={fadeInUpVariants}>
          <Footer />
        </motion.div>
      </main>
    </motion.div>
  )
}

