"use client"

import { BarChart3, Globe2, Bell, Settings2 } from 'lucide-react'
import Image from "next/image"
import { motion } from "framer-motion"

type MotionDivProps = {
  children: React.ReactNode;
  className?: string;
  initial?: {
    opacity?: number;
    y?: number;
    x?: number;
  };
  whileInView?: {
    opacity?: number;
    y?: number;
    x?: number;
  };
  transition?: {
    duration?: number;
    delay?: number;
  };
  viewport?: {
    once?: boolean;
  };
}

export default function BacklinkFeatures() {
  const MotionDiv = motion.div as React.ComponentType<MotionDivProps>

  return (
    <section className="bg-[#0A0A0A] relative">
      {/* Subtle green tint in the middle */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,206,209,0.03)] to-[#0A0A0A]" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                What Getmorebacklinks does to your Startup?
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 bg-black/40 p-4 rounded-lg border border-gray-800"
                >
                  <div className="bg-[#00CED1]/10 p-2 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-[#00CED1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Web Traffic Booms</h3>
                    <p className="text-sm text-gray-400">Increase your organic traffic</p>
                  </div>
                </MotionDiv>

                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 bg-black/40 p-4 rounded-lg border border-gray-800"
                >
                  <div className="bg-[#00CED1]/10 p-2 rounded-lg">
                    <Globe2 className="h-6 w-6 text-[#00CED1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Google Authority Inc</h3>
                    <p className="text-sm text-gray-400">Boost your domain authority</p>
                  </div>
                </MotionDiv>

                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 bg-black/40 p-4 rounded-lg border border-gray-800"
                >
                  <div className="bg-[#00CED1]/10 p-2 rounded-lg">
                    <Bell className="h-6 w-6 text-[#00CED1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">High Quality Traffic</h3>
                    <p className="text-sm text-gray-400">Target relevant audiences</p>
                  </div>
                </MotionDiv>

                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 bg-black/40 p-4 rounded-lg border border-gray-800"
                >
                  <div className="bg-[#00CED1]/10 p-2 rounded-lg">
                    <Settings2 className="h-6 w-6 text-[#00CED1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Everything automated</h3>
                    <p className="text-sm text-gray-400">Set it and forget it</p>
                  </div>
                </MotionDiv>
              </div>

              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <button 
                  className="bg-[#00CED1] hover:bg-[#00CED1]/90 text-black font-semibold px-8 py-6 text-lg rounded-md transition-colors duration-200 ease-in-out"
                >
                  Submit your Startup Now
                </button>
              </MotionDiv>
            </MotionDiv>
          </div>

          {/* Right Content - Dashboard Images */}
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="space-y-4">
              {/* Placeholder for dashboard images - you can replace these with your actual images */}
              <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-gray-800">
                <div className="h-[150px] rounded-lg bg-gray-800/50" />
              </div>
              <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-gray-800">
                <div className="h-[150px] rounded-lg bg-gray-800/50" />
              </div>
              <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-gray-800">
                <div className="h-[150px] rounded-lg bg-gray-800/50" />
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}

