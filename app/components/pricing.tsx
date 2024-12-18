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
    ],
    cta: "Get Pro",
    paymentLink: "https://www.paypal.com/ncp/payment/L45V8DSQVT3N6",
  },
  {
    name: "Advanced",
    originalPrice: 229,
    discountedPrice: 75,
    features: [
      "100+ backlinks",
      "Comprehensive SEO report",
      "24/7 priority support",
      "AI + human collaboration",
      "Hand-picked listings",
    ],
    cta: "Get Advanced",
    paymentLink: "https://www.paypal.com/ncp/payment/CMM6QF99TTNEY",
  },
  {
    name: "Business",
    originalPrice: 299,
    discountedPrice: 100,
    highlighted: true,
    features: [
      "200+ backlinks",
      "Comprehensive SEO report",
      "Priority email & chat support",
      "AI + human collaboration",
      "Hand-picked premium listings",
    ],
    cta: "Get Business",
    paymentLink: "https://www.paypal.com/ncp/payment/VDGB9RWFAP36U",
  },
]

export default function PricingSection() {
  return (
    <section id="pricing-section" className="bg-white py-16 px-4">
      <div className="max-w-[1480px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your needs and start boosting your site's visibility today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-4 lg:px-6">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`flex flex-col bg-white rounded-lg overflow-hidden transition-all duration-300 transform transition-all duration-300
                ${plan.highlighted
                  ? 'border-2 border-orange-500 shadow-lg scale-105 z-10' 
                  : plan.popular
                  ? 'border-2 border-gray-300 shadow-md'
                  : 'border border-gray-200'}
                hover:shadow-lg`}
            >
              <div className={`p-6 md:p-8 flex-grow flex flex-col ${plan.highlighted ? 'bg-orange-50' : 'bg-white'}`}>
                {plan.popular && (
                  <span className="bg-white text-orange-500 text-xs font-bold py-1 px-2 rounded-full mb-2 inline-block w-20 border border-orange-500">
                    Popular
                  </span>
                )}
                {plan.highlighted && (
                  <span className="bg-white text-orange-500 text-xs font-bold py-1 px-2 rounded-full mb-2 inline-block w-24 border border-orange-500">
                    Best Value
                  </span>
                )}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{plan.name}</h3>
                <div className="mb-5">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900">
                    ${plan.discountedPrice}
                  </span>
                  <span className="text-base md:text-lg text-gray-600 font-normal">/website</span>
                  <div className="mt-2">
                    <span className="text-base md:text-lg text-gray-500 line-through mr-2">${plan.originalPrice}</span>
                    <span className="text-base md:text-lg font-semibold text-green-600">
                      Save {Math.round((1 - plan.discountedPrice / plan.originalPrice) * 100)}%
                    </span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={plan.paymentLink} className="block w-full mt-auto">
                  <button 
                    className={`w-full py-3 px-4 rounded transition-colors duration-300 text-base font-medium
                      ${plan.highlighted
                        ? 'bg-orange-500 text-white hover:bg-orange-600' 
                        : plan.popular
                        ? 'bg-black text-white hover:bg-orange-500'
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

