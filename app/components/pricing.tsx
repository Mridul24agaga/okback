import { useState, useEffect } from 'react'
import { Check, Gift, Star, Snowflake, Bell } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: "Pro",
    originalPrice: 119,
    discountedPrice: 37,
    features: [
      "50 backlinks",
      "Priority email support",
      "AI + human collaboration",
      "Hand-picked listings",
    ],
    cta: "Get Pro",
    paymentLink: "https://www.paypal.com/ncp/payment/BATGY7ZHHACRL",
    icon: Star,
  },
  {
    name: "Advanced",
    originalPrice: 229,
    discountedPrice: 75,
    popular: true,
    features: [
      "100+ backlinks",
      "Comprehensive SEO report",
      "24/7 priority support",
      "AI + human collaboration",
      "Hand-picked listings",
    ],
    cta: "Get Advanced",
    paymentLink: "https://www.paypal.com/ncp/payment/CMM6QF99TTNEY",
    icon: Snowflake,
  },
  {
    name: "Business",
    originalPrice: 299,
    discountedPrice: 100,
    features: [
      "200+ backlinks",
      "Comprehensive SEO report",
      "Priority email & chat support",
      "AI + human collaboration",
      "Hand-picked premium listings",
    ],
    cta: "Get Business",
    paymentLink: "https://www.paypal.com/ncp/payment/VK6EF5V9RT5V8",
    icon: Bell,
  },
  {
    name: "Growth",
    originalPrice: 997,
    discountedPrice: 499,
    highlighted: true,
    includedValue: [
      { name: "Get your startup listed at 200+ directories", value: 100 },
      { name: "10 articles per month", value: 499 },
      { name: "Landing page and SEO analysis", value: 199 },
      { name: "Keywords and custom strategy", value: 199 }
    ],
    features: [
      "Get your startup listed at 200+ directories",
      "10 articles per month",
      "Landing page and SEO analysis",
      "Keywords and custom strategy",
      "All-in-one package at a special price"
    ],
    cta: "Lock In Special Price Now",
    paymentLink: "https://www.paypal.com/ncp/payment/GRRU84QL2C7QS",
    icon: Gift,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing-section" className="bg-white py-6 sm:py-8 px-4 relative overflow-hidden">
      <div className="max-w-[1480px] mx-auto relative z-10">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Choose Your Growth Plan
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan to accelerate your website's growth
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`flex flex-col rounded-lg overflow-hidden transition-all duration-300 transform relative
                ${plan.highlighted
                  ? 'border-[3px] border-red-500 shadow-xl sm:scale-105 z-10' 
                  : plan.popular
                  ? 'border-2 border-orange-300 shadow-md'
                  : 'border border-gray-200'}
                hover:shadow-lg`}
            >
              {plan.highlighted && (
                <div className="bg-red-500 text-white py-2 px-4 text-center font-semibold">
                  Most Popular
                </div>
              )}
              <div className={`p-6 h-full flex flex-col ${plan.highlighted ? 'bg-red-50' : 'bg-white'}`}>
                <div className="flex flex-col mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                </div>
                
                {plan.highlighted ? (
                  <>
                    <div className="bg-red-100 rounded-lg p-4 mb-4">
                      <div className="text-sm font-semibold text-red-800 mb-3">Included Value:</div>
                      {plan.includedValue?.map((item, i) => (
                        <div key={i} className="flex justify-between items-center mb-2">
                          <span className="text-gray-700">{item.name}</span>
                          <span className="font-semibold">${item.value}</span>
                        </div>
                      ))}
                      <div className="border-t border-red-200 mt-3 pt-3 flex justify-between items-center">
                        <span className="font-semibold text-red-800">Total Value:</span>
                        <span className="font-bold text-red-800">${plan.includedValue?.reduce((acc, item) => acc + item.value, 0)}</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-gray-900">
                          ${plan.discountedPrice}
                        </span>
                        <span className="text-gray-600 ml-2">today</span>
                      </div>
                      <div className="mt-1">
                        <span className="text-base text-gray-500 line-through mr-2">${plan.originalPrice}</span>
                        <span className="text-base font-semibold text-green-600">
                          Save {Math.round((1 - plan.discountedPrice / plan.originalPrice) * 100)}%
                        </span>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <Link href={plan.paymentLink} className="block w-full">
                        <button 
                          className={`w-full py-2 px-4 rounded-lg transition-colors duration-300 text-sm font-medium
                            ${plan.highlighted
                              ? 'bg-red-500 text-white hover:bg-red-600' 
                              : plan.popular
                              ? 'bg-orange-500 text-white hover:bg-orange-600'
                              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                        >
                          {plan.cta}
                        </button>
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900">
                        ${plan.discountedPrice}
                      </span>
                      <span className="text-base text-gray-600 font-normal">
                        /website
                      </span>
                      {plan.originalPrice && (
                        <div className="mt-1">
                          <span className="text-sm text-gray-500 line-through mr-2">${plan.originalPrice}</span>
                          <span className="text-sm font-semibold text-green-600">
                            Save {Math.round((1 - plan.discountedPrice / plan.originalPrice) * 100)}%
                          </span>
                        </div>
                      )}
                    </div>
                    {!plan.highlighted && plan.features && (
                      <ul className="space-y-2 mb-4">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-base text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-auto">
                      <Link href={plan.paymentLink} className="block w-full">
                        <button 
                          className={`w-full py-2 px-4 rounded-lg transition-colors duration-300 text-sm font-medium
                            ${plan.popular
                              ? 'bg-orange-500 text-white hover:bg-orange-600'
                              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                        >
                          {plan.cta}
                        </button>
                      </Link>
                    </div>
                  </>
                )}

              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            <span className="font-semibold text-red-500">
              Need help?{' '}
              <a
                href="https://www.reddit.com/user/Sad-Industry3436/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-red-600"
              >
                Reddit
              </a>{' '}
              or{' '}
              <a
                href="https://x.com/KrissmannGupta"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-red-600"
              >
                X (Twitter)
              </a>
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

