'use client'

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence, MotionProps } from "framer-motion"
import { DirectoriesSection } from "@/app/components/directories-section"

const words = ["Startups", "Founders", "Innovators", "Entrepreneurs"]

const fadeInUpVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

type MotionDivProps = MotionProps & React.HTMLAttributes<HTMLDivElement>

const MotionDiv: React.FC<MotionDivProps> = motion.div

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <MotionDiv 
      initial="initial"
      animate="animate"
      variants={containerVariants}
      className="min-h-screen bg-[#0A0A0A] bg-[radial-gradient(circle_at_center,rgba(0,206,209,0.15),rgba(0,0,0,0)_50%)]"
    >
      {/* Header */}
      <MotionDiv 
        variants={fadeInUpVariants}
        className="container mx-auto px-4 py-4 sm:py-6 border-b border-gray-800"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/getmorebacklinks.png"
              alt="Logo"
              width={532}
              height={132}
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base font-bold"
            >
              Blogs
            </Link>
            <Link 
              href="/submit"
              className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md bg-[#00CED1] text-black hover:bg-[#00CED1]/90 transition-colors font-bold inline-block"
            >
              Submit Tool
            </Link>
          </div>
        </div>
      </MotionDiv>

      {/* Hero Section */}
      <MotionDiv 
        variants={fadeInUpVariants}
        className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center pt-4 sm:pt-8 pb-8 sm:pb-16 md:pb-32"
      >
        <MotionDiv 
          variants={fadeInUpVariants}
          className="w-full flex justify-center mb-6 sm:mb-8"
        >
          <Link
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-black/40 hover:bg-black/60 border border-gray-800 px-3 py-1 sm:px-4 sm:py-2 transition-colors"
          >
            <span className="inline-flex items-center justify-center rounded-full bg-[#00CED1] px-2 py-0.5 text-xs font-semibold text-black">
              NEW
            </span>
            <span className="text-xs sm:text-sm text-gray-200">
              Exclusive early access coming soon
            </span>
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 group-hover:text-white transition-colors" />
          </Link>
        </MotionDiv>
        <MotionDiv 
          variants={fadeInUpVariants}
          className="space-y-6 sm:space-y-8 max-w-4xl mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-white letter-spacing">
            <span className="tracking-wide leading-tight">Marketing Database for</span>{" "}
            <span className="text-[#00CED1] relative inline-block">
              <div className="relative overflow-hidden inline-block">
                <AnimatePresence mode="wait">
                  <MotionDiv
                    key={currentWord}
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-100%" }}
                    transition={{ duration: 0.5, ease: [0.41, 0.01, 0.56, 1] }}
                    className="inline-block"
                  >
                    {words[currentWord]}
                  </MotionDiv>
                </AnimatePresence>
                <MotionDiv
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.5, ease: [0.41, 0.01, 0.56, 1] }}
                  className="absolute inset-0 origin-bottom bg-[#00CED1] opacity-20"
                  style={{ zIndex: -1 }}
                />
              </div>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-[#00CED1] opacity-50 rounded"></span>
            </span>
          </h1>
          <MotionDiv 
            variants={fadeInUpVariants}
            className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto"
          >
            Join our exclusive waitlist for early access to our curated database of launch platforms, directories, marketplaces, newsletters, and communities - all in one place.
          </MotionDiv>
        </MotionDiv>

        {/* Form Section */}
        <MotionDiv 
          variants={fadeInUpVariants}
          className="mt-4 sm:mt-6 md:mt-8 w-full max-w-md space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full sm:w-auto flex-grow px-4 py-2 bg-gray-800 border border-gray-700 rounded-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-[#00CED1] text-white text-sm sm:text-base"
            />
            <button className="w-full sm:w-auto px-4 py-2 bg-[#00CED1] hover:bg-[#00CED1]/90 text-black font-medium rounded-md sm:rounded-l-none transition-colors flex items-center justify-center sm:justify-start text-sm sm:text-base">
              Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          <p className="text-xs sm:text-sm text-gray-500">
            Join 809 founders already on the waitlist for early access!
          </p>
        </MotionDiv>
      </MotionDiv>

      {/* Separator for mobile */}
      <div className="container mx-auto px-4 sm:hidden">
        <div className="border-t border-gray-800 my-8"></div>
      </div>

      {/* Directory Section */}
      <MotionDiv
        variants={fadeInUpVariants}
      >
        <DirectoriesSection />
      </MotionDiv>

      {/* Footer */}
      <MotionDiv 
        variants={fadeInUpVariants}
        className="container mx-auto px-4 py-8 text-center"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm text-gray-400">
          <span className="mb-2 sm:mb-0">Got a question?</span>
          <div className="flex gap-2">
            <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
            <span>•</span>
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
            <span>•</span>
            <Link href="#" className="hover:text-white transition-colors">Email</Link>
          </div>
        </div>
      </MotionDiv>
    </MotionDiv>
  )
}

