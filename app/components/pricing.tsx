'use client'

import { Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const plans = [
  {
    name: "Starter",
    price: "87",
    description: "Perfect for small businesses and startups",
    features: [
      "50 Directory Submissions",
      "Basic SEO Analysis",
      "7-Day Delivery",
      "24/7 Priority Support",
    ],
    paypalLink: "https://www.paypal.com/ncp/payment/BHN3ZYZB8QCJJ"
  },
  {
    name: "Growth",
    price: "119",
    description: "Ideal for growing businesses",
    popular: true,
    features: [
      "100 Directory Submissions",
      "Advanced Landing Page and SEO Analysis",
      "7-Day Delivery",
      "24/7 Priority Support",
    ],
    paypalLink: "https://www.paypal.com/ncp/payment/3Z66WQ69TGH6L"
  },
  {
    name: "Enterprise",
    price: "147",
    description: "For businesses requiring maximum impact",
    features: [
      "200 Directory Submissions",
      "Advanced Landing Page and SEO Analysis",
      "7-Day Delivery",
      "24/7 Priority Support",
    ],
    paypalLink: "https://www.paypal.com/ncp/payment/HJSCZPNZRNLEG"
  }
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 text-xl">
            Choose the perfect plan for your business needs
          </p>
        </div>

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
                    / website
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
                <a
                  href={plan.paypalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-sm md:text-base transition-all duration-200 inline-block text-center ${
                    plan.popular
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="max-w-3xl mx-auto flex gap-8 items-start bg-white rounded-2xl p-8 border-2 border-gray-100">
          <div className="w-32 h-32 flex-shrink-0 mt-15">
            <Image
              src="/test1.jpeg"
              alt=""
              width={988}
              height={1228}
              className="rounded-lg"
              unoptimized
            />
          </div>
          <div>
            <div className="text-xl md:text-2xl text-gray-800 mb-4">
              <p className="leading-relaxed">
                I tried various backlink services before but they were all disappointing. Then I found Backlink AI and{' '}
                <span className="bg-yellow-100 px-1">
                  my domain rating increased by 45% in just 3 weeks.
                </span>
              </p>
            </div>
            <div className="text-gray-600">
              — Sam Farbur, Founder of SimplifyAI
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

