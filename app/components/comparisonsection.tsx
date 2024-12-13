import Image from 'next/image'
import { Check, X } from 'lucide-react'
import Link from 'next/link'

export default function ComparisonSection() {
  const handleScrollToPricing = () => {
    const pricingSection = document.getElementById('pricing')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const features = [
    {
      title: "AI and Human Collaboration",
      getmorebacklinks: "AI agents and humans work together to boost your domain rating",
      listingbot: "Limited AI capabilities, mostly automated processes",
    },
    {
      title: "Directory Database",
      getmorebacklinks: "100+ hand-picked listings from a growing database of 10k+ directories",
      listingbot: "Limited directory database",
    },
    {
      title: "Promotion Channels",
      getmorebacklinks: "Finds relevant spaces to share your product (articles, social media, Reddit)",
      listingbot: "Basic promotion, limited to standard directories",
    },
    {
      title: "Additional Opportunities",
      getmorebacklinks: "Curates backlinks exchange and guest post opportunities",
      listingbot: "No additional link-building opportunities",
    },
    {
      title: "Delivery Time",
      getmorebacklinks: "1 week delivery time with full report",
      listingbot: "Longer delivery times, limited reporting",
    },
    {
      title: "Ownership",
      getmorebacklinks: "You own the listings",
      listingbot: "Unclear ownership of listings",
    },
    {
      title: "Results Timeline",
      getmorebacklinks: "Get results in less than 30 days",
      listingbot: "Uncertain timeline for results",
    },
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            ListingBot VS Getmorebacklinks
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the most powerful backlink and directory submission tool for your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden transition-all duration-300 hover:border-gray-300">
            <div className="bg-gray-100 p-6 pl-4 border-b-2 border-gray-200">
              <div className="flex items-center justify-start">
                <div className="relative w-16 h-16 mr-4 flex-shrink-0">
                  <Image
                    src="/john.jpg"
                    alt="ListingBot Logo"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow text-left pr-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">ListingBot</h3>
                  <div className="text-4xl font-bold text-red-500">$500</div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{feature.listingbot}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <button 
                  className="w-full py-2 px-4 bg-gray-200 text-gray-600 rounded-md cursor-not-allowed opacity-50"
                  disabled
                >
                  Limited Features
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border-2 border-orange-500 overflow-hidden transition-all duration-300 hover:border-orange-600">
            <div className="bg-orange-500 p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">GetMoreBacklinks.org</h3>
              <div className="text-4xl font-bold text-white">$75</div>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-800">{feature.getmorebacklinks}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <button 
                  className="w-full py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-300"
                  onClick={handleScrollToPricing}
                >
                  Boost Your Site's Visibility Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl text-gray-600 mb-8">
            Join 100+ satisfied customers who have boosted their site's visibility with GetMoreBacklinks.org
          </p>
        </div>
      </div>
    </section>
  )
}

