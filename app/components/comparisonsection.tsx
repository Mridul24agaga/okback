'use client'

import { Check, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
export default function ComparisonSection() {
  return (
    <section id="whyus?" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-black bg-clip-text text-transparent">
          Other Listing Tools VS Backlink AI
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Choose the most powerful backlink and directory submission tool for your business
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Other Tools Box */}
          <div className="rounded-3xl bg-white border-2 border-gray-200 overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Other Listing Tools</h3>
                  <p className="text-gray-500 mt-2 text-sm">
                    ListingBot, GetMoreBacklinks, Effortless Backlinks, BacklinkBot, etc.
                  </p>
                  <div className="text-4xl font-bold text-red-500 mt-4">$300-500</div>
                </div>
              </div>
              <ul className="space-y-5">
                <ListingItem isNegative>
                  Limited AI capabilities, mostly automated processes
                </ListingItem>
                <ListingItem isNegative>
                  Limited directory database
                </ListingItem>
                <ListingItem isNegative>
                  Basic promotion, limited to standard directories
                </ListingItem>
                <ListingItem isNegative>
                  No additional link-building opportunities
                </ListingItem>
                <ListingItem isNegative>
                  Longer delivery times, limited reporting
                </ListingItem>
                <ListingItem isNegative>
                  Unclear ownership of listings
                </ListingItem>
                <ListingItem isNegative>
                  Uncertain timeline for results
                </ListingItem>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 text-center text-gray-500 font-medium border-t-2 border-gray-200">
              Limited Features
            </div>
          </div>

          {/* Backlink AI Box */}
          <div className="rounded-3xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 relative group border-2 border-blue-400">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500 to-blue-700"></div>
            <div className="relative p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white">Backlink AI</h3>
                  <p className="text-blue-200 mt-2 text-sm">
                    Next-Generation AI-Powered Backlink Solution
                  </p>
                </div>
                <div>
                  <div className="text-sm text-blue-200 line-through mb-1">$500</div>
                  <div className="text-4xl font-bold text-white">$87</div>
                </div>
              </div>
              <ul className="space-y-5">
                <ListingItem>
                  AI agents and humans work together to boost your domain rating
                </ListingItem>
                <ListingItem>
                  100+ hand-picked listings from a growing database of 10k+ directories
                </ListingItem>
                <ListingItem>
                  Finds relevant spaces to share your product (articles, social media, Reddit)
                </ListingItem>
                <ListingItem>
                  Curates backlinks exchange and guest post opportunities
                </ListingItem>
                <ListingItem>
                  1 week delivery time with full report
                </ListingItem>
                <ListingItem>
                  You own the listings
                </ListingItem>
                <ListingItem>
                  Get results in less than 30 days
                </ListingItem>
              </ul>
            </div>
            <button className="relative w-full bg-white/10 hover:bg-white/20 transition-colors p-6 text-center font-bold text-white text-lg backdrop-blur-sm border-t-2 border-blue-400">
              Boost Your Site's Visibility Now
            </button>
          </div>
        </div>

        
      </div>
    </section>
  )
}

interface ListingItemProps {
  children: React.ReactNode
  isNegative?: boolean
}

function ListingItem({ children, isNegative }: ListingItemProps) {
  return (
    <li className="flex items-start gap-3">
      {isNegative ? (
        <div className="p-1 rounded-full bg-red-100 border border-red-200">
          <X className="w-4 h-4 text-red-500 flex-shrink-0" />
        </div>
      ) : (
        <div className="p-1 rounded-full bg-blue-400/30 border border-blue-300">
          <Check className="w-4 h-4 text-white flex-shrink-0" />
        </div>
      )}
      <span className={`${isNegative ? 'text-gray-600' : 'text-white'} leading-tight`}>
        {children}
      </span>
    </li>
  )
}

