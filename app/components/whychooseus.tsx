"use client"

import { motion } from "framer-motion"
import { Sparkles, Bug, Users, Bell, Check } from 'lucide-react'

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

export default function WhyChooseSection() {
  const features = [
    {
      icon: Sparkles,
      title: "Identifies relevant directories",
      description: "Bot has database of 500+ sites, it finds upto top 100 relevant sites to list your product"
    },
    {
      icon: Bug,
      title: "No repeated listing",
      description: "Bot verifies existing backlinks using ahrefs, chooses the best directories where you aren't listed yet"
    },
    {
      icon: Users,
      title: "Get your first 10 customers",
      description: "We have seen few startups get their first 10 customers within few days of submitting their startup"
    },
    {
      icon: Bell,
      title: "Automated Status Updates",
      description: "Bot share the report with you with list of directories it listed your product within 24 hours."
    }
  ]

  const benefits = [
    "Rank Fast on Google",
    "High Authority Backlinks",
    "collection of 500+ directories",
    "Instant Traffic to your website"
  ]

  const MotionDiv = motion.div as React.ComponentType<MotionDivProps>

  return (
    <section id="howitworks" className="bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-start">
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 order-2 lg:order-1">
            {features.map((feature, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-100 rounded-xl p-6 border border-gray-300"
              >
                <div className="bg-orange-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </MotionDiv>
            ))}
          </div>

          {/* Content */}
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:pl-8 order-1 lg:order-2"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Why choose Getmorebacklinks?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Experience unparalleled productivity with tailored features, AI insights, and seamless team collaboration.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-orange-500" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}

