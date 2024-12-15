import { Check } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: "Basic",
    originalPrice: 59,
    discountedPrice: 20,
    features: [
      "25 backlinks",
      "Basic SEO report",
      "Email support",
      "AI + human collaboration",
      "Hand-picked listings",
      "1 week delivery time",
      "Full report provided",
      "You own the listings",
      "Results in less than 30 days",
    ],
    cta: "Get Started",
    paymentLink: "https://www.paypal.com/ncp/payment/YMCLCF3YXAPJ8",
  },
  {
    name: "Pro",
    originalPrice: 119,
    discountedPrice: 37,
    popular: true,
    features: [
      "50 backlinks",
      "Priority email support",
      "AI + human collaboration",
      "Hand-picked listings",
      "Social media promotion",
      "Backlink monitoring",
      "1 week delivery time",
      "Full report provided",
      "You own the listings",
      "Results in less than 30 days",
    ],
    cta: "Get Pro",
    paymentLink: "https://www.paypal.com/ncp/payment/L45V8DSQVT3N6",
  },
  {
    name: "Advanced",
    originalPrice: 229,
    discountedPrice: 75,
    economical: true,
    features: [
      "100+ backlinks",
      "Comprehensive SEO report",
      "24/7 priority support",
      "AI + human collaboration",
      "Hand-picked listings",
      "Social media & forum promotion",
      "Advanced backlink monitoring",
      "Custom integrations",
      "1 week delivery time",
      "Full report provided",
      "You own the listings",
      "Results in less than 30 days",
    ],
    cta: "Get Advanced",
    paymentLink: "https://www.paypal.com/ncp/payment/CMM6QF99TTNEY",
  },
]

export default function PricingSection() {
  return (
    <section id="pricing-section" className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that best fits your needs and start boosting your site's visibility today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`bg-white rounded-2xl overflow-hidden transition-all duration-300
                ${plan.popular 
                  ? 'border-4 border-orange-500 md:-mt-8 md:mb-8' 
                  : 'border-2 border-gray-200'}
                ${plan.popular ? 'md:scale-110' : 'hover:border-gray-300'}`}
            >
              <div className={`p-8 ${plan.popular ? 'bg-orange-50' : ''}`}>
                {plan.popular && (
                  <span className="bg-orange-500 text-white text-sm font-bold py-1 px-3 rounded-full mb-4 inline-block">
                    Most Popular
                  </span>
                )}
                {plan.economical && (
                  <span className="bg-green-500 text-white text-sm font-bold py-1 px-3 rounded-full mb-4 inline-block ml-2">
                    Most Economical
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${plan.discountedPrice}
                  </span>
                  <span className="text-xl text-gray-600 font-normal">/website</span>
                  <div className="mt-2">
                    <span className="text-lg text-gray-500 line-through mr-2">${plan.originalPrice}</span>
                    <span className="text-lg font-semibold text-green-600">Save 67%</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={plan.paymentLink} className="block w-full">
                  <button 
                    className={`w-full py-3 px-4 rounded-md transition-colors duration-300
                      ${plan.popular 
                        ? 'bg-orange-500 text-white hover:bg-orange-600' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                  >
                    {plan.cta}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

