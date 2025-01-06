'use client'

import { Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const plans = [
  {
    name: "Starter",
    price: "75",
    description: "Perfect for small businesses and startups",
    features: [
      "50 Directory Submissions",
      "Basic AI-Powered Analysis",
      "7-Day Delivery",
      "Standard Support",
      "Monthly Report"
    ]
  },
  {
    name: "Growth",
    price: "149",
    description: "Ideal for growing businesses",
    popular: true,
    features: [
      "150 Directory Submissions",
      "Advanced AI Analysis",
      "5-Day Delivery",
      "Priority Support",
      "Weekly Reports",
      "Social Media Submissions",
      "Guest Post Opportunities"
    ]
  },
  {
    name: "Enterprise",
    price: "299",
    description: "For businesses requiring maximum impact",
    features: [
      "500+ Directory Submissions",
      "Premium AI Analysis",
      "3-Day Delivery",
      "24/7 Priority Support",
      "Real-time Reports",
      "Social Media & Guest Posts",
      "Custom Link Building Strategy",
      "Dedicated Account Manager"
    ]
  }
]

export default function PricingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`rounded-3xl transition-transform duration-300 hover:-translate-y-1 relative ${
                plan.popular 
                  ? 'bg-gradient-to-br from-blue-600 to-blue-800 text-white border-2 border-blue-400' 
                  : 'bg-white border-2 border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-800'}`}>
                  {plan.name}
                </h3>
                <p className={`${plan.popular ? 'text-blue-100' : 'text-gray-600'} mb-6`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-800'}`}>
                    ${plan.price}
                  </span>
                  <span className={`${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    /month
                  </span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`p-1 rounded-full ${
                        plan.popular ? 'bg-blue-400/30 border border-blue-300' : 'bg-blue-100 border border-blue-200'
                      }`}>
                        <Check className={`w-4 h-4 ${plan.popular ? 'text-white' : 'text-blue-600'}`} />
                      </div>
                      <span className={`leading-tight ${plan.popular ? 'text-white' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-sm md:text-base transition-all duration-200 ${
                    plan.popular
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        

      </div>
    </section>
  )
}

