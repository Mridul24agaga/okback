'use client'

import { useState, useEffect, useRef } from 'react'
import { User } from 'lucide-react'

export const ScrollingMan = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const animationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentScroll = window.scrollY
      const progress = (currentScroll / totalScroll) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      ref={animationRef}
      className="fixed left-4 transition-all duration-300 ease-in-out z-50"
      style={{ bottom: `${scrollProgress}%` }}
    >
      <User className="w-8 h-8 text-[#F97316] animate-bounce" />
    </div>
  )
}
