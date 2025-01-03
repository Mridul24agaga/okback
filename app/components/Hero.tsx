'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'
import { Header } from "./header"
import { SearchIcon, LinkIcon, GraphIcon, GlobeIcon, RocketIcon } from "./icons"

type MotionDivProps = {
  children: React.ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  whileHover?: any;
  transition?: {
    duration?: number;
    delay?: number;
    ease?: string | number[];
  };
}

const MotionDiv: React.FC<MotionDivProps> = ({ 
  children, 
  className, 
  initial, 
  animate,
  whileHover,
  transition,
  ...props 
}) => {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      whileHover={whileHover}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  )
}

const FloatingIcon = ({ Icon, delay, size }: { Icon: React.FC<React.SVGProps<SVGSVGElement>>, delay: number, size: number }) => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay
      }
    })
  }, [controls, delay])

  return (
    <motion.div
      className="absolute text-blue-500 opacity-20 hover:opacity-100 transition-opacity duration-300"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.2 }}
      whileHover={{ scale: 1.2, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div animate={controls}>
        <Icon width={size} height={size} />
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', { email, website })
  }

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Header />
      
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent" />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem',
          }}
        />
        {/* Floating SEO and Backlink related icons */}
        <FloatingIcon Icon={SearchIcon} delay={0} size={32} />
        <FloatingIcon Icon={LinkIcon} delay={0.5} size={40} />
        <FloatingIcon Icon={GraphIcon} delay={1} size={36} />
        <FloatingIcon Icon={GlobeIcon} delay={1.5} size={48} />
        <FloatingIcon Icon={RocketIcon} delay={2} size={44} />
        <FloatingIcon Icon={SearchIcon} delay={2.5} size={28} />
        <FloatingIcon Icon={LinkIcon} delay={3} size={38} />
        <FloatingIcon Icon={GraphIcon} delay={3.5} size={34} />
      </div>

      <div className="flex-grow flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8 mt-16">
        <div className="w-full max-w-3xl mx-auto text-center relative">
          <MotionDiv
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-blue-600 text-sm sm:text-base font-medium mb-6">
              Boost Your Website's Authority with High-Quality Backlinks
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black">
              Skyrocket Your SEO Rankings with{' '}
              <span className="text-blue-600">Backlink AI</span>
            </h1>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
              Backlink AI - Acquire powerful, relevant backlinks to boost your website's 
              authority, improve search engine rankings, and drive organic traffic. Save time 
              and resources while our expert team builds your backlink profile.
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-0 sm:flex sm:gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@me.com"
                className="w-full sm:w-auto flex-1 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-500"
                required
              />
              <input
                type="url"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="mysite.com"
                className="w-full sm:w-auto flex-1 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-500"
                required
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
              >
                Boost My SEO
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <div className="inline-flex items-center gap-4">
              <Image
                src="/peter.jpeg"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Questions about backlinks?</span>
                <ArrowUpRight className="w-4 h-4" />
                <span className="text-gray-500">Contact us on</span>
                <Link href="https://linkedin.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                  LinkedIn
                </Link>
                <span className="text-gray-500">or</span>
                <Link href="https://twitter.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                  Twitter
                </Link>
                <span className="text-gray-500">or by</span>
                <Link href="mailto:example@email.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                  Email
                </Link>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </div>
  )
}

