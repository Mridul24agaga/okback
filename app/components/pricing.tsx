import { useState, useEffect } from 'react'
import { Check, Gift, Star, Snowflake, Bell, Clock } from 'lucide-react'
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
    name: "Christmas Special",
    price: 499,
    highlighted: true,
    features: [
      "Get your startup listed at 200+ directories",
      "10 articles per month",
      "Landing page and SEO analysis",
      "Keywords and custom strategy",
      "All-in-one package at a special price",
    ],
    cta: "Get Christmas Special",
    paymentLink: "https://www.paypal.com/ncp/payment/GRRU84QL2C7QS",
    icon: Gift,
  },
]

export default function PricingSection() {
  // const [daysLeft, setDaysLeft] = useState(0)

  // useEffect(() => {
  //   const calculateDaysLeft = () => {
  //     const now = new Date()
  //     const christmas = new Date(now.getFullYear(), 11, 25) // Month is 0-indexed
  //     if (now > christmas) {
  //       christmas.setFullYear(christmas.getFullYear() + 1)
  //     }
  //     const timeDiff = christmas.getTime() - now.getTime()
  //     const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24))
  //     setDaysLeft(daysRemaining)
  //   }

  //   calculateDaysLeft()
  //   const timer = setInterval(calculateDaysLeft, 1000 * 60 * 60) // Update every hour

  //   return () => clearInterval(timer)
  // }, [])

  return (
    <section id="pricing-section" className="bg-white py-8 sm:py-12 md:py-16 px-4 relative overflow-hidden">
      <div className="max-w-[1480px] mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unwrap Our Christmas Special Offer
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your needs and start boosting your site's visibility today.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-4 lg:px-6">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`flex flex-col bg-white rounded-lg overflow-hidden transition-all duration-300 transform relative
                ${plan.highlighted
                  ? 'border-4 border-red-500 shadow-xl sm:scale-105 z-10' 
                  : plan.popular
                  ? 'border-2 border-orange-300 shadow-md'
                  : 'border border-gray-200'}
                hover:shadow-lg`}
            >
              <div className={`p-4 sm:p-6 md:p-8 flex-grow flex flex-col ${plan.highlighted ? 'bg-red-50' : 'bg-white'}`}>
                {plan.popular && (
                  <span className="bg-orange-100 text-orange-800 text-xs font-bold py-1 px-2 rounded-full mb-2 inline-block w-20 border border-orange-300">
                    Popular
                  </span>
                )}
                {plan.highlighted && (
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 w-full">
                      <span className="bg-red-100 text-red-800 text-xs font-bold py-1 px-2 rounded-full border border-red-300">
                        Christmas Special
                      </span>
                      <span className="animate-pulse-glow flex items-center text-red-600 font-bold text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        Only 1 day left!
                      </span>
                    </div>
                  </div>
                )}
                <div className="flex items-center mb-4">
                  {plan.icon && <plan.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${plan.highlighted ? 'text-red-500' : 'text-orange-500'} mr-2`} />}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{plan.name}</h3>
                </div>
                <div className="mb-5">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    ${plan.discountedPrice || plan.price}
                  </span>
                  <span className="text-sm sm:text-base md:text-lg text-gray-600 font-normal">
                    {plan.highlighted ? '/month' : '/website'}
                  </span>
                  {plan.originalPrice && (
                    <div className="mt-2">
                      <span className="text-sm sm:text-base md:text-lg text-gray-500 line-through mr-2">${plan.originalPrice}</span>
                      <span className="text-sm sm:text-base md:text-lg font-semibold text-green-600">
                        Save {Math.round((1 - plan.discountedPrice / plan.originalPrice) * 100)}%
                      </span>
                    </div>
                  )}
                  {plan.highlighted && (
                    <div className="mt-2 text-red-600 font-semibold text-sm sm:text-base">
                      Cancel anytime
                    </div>
                  )}
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className={`h-5 w-5 ${plan.highlighted ? 'text-red-500' : 'text-green-500'} flex-shrink-0 mt-0.5`} />
                      <span className="text-xs sm:text-sm md:text-base text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={plan.paymentLink} className="block w-full mt-auto">
                  <button 
                    className={`w-full py-2 sm:py-3 px-4 rounded transition-colors duration-300 text-sm sm:text-base font-medium
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
              {plan.highlighted && (
                <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-red-500 transform rotate-45 translate-x-6 -translate-y-6 sm:translate-x-8 sm:-translate-y-8"></div>
                  <Gift className="absolute top-1 right-1 w-4 h-4 sm:w-6 sm:h-6 text-white transform rotate-45" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-4">
            If you are facing any issue with the payment, We've got you covered
          </p>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            <strong className="font-bold text-red-500">
              Contact us on{' '}
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
            </strong>
          </p>
        </div>
      </div>
    </section>
  )
}

