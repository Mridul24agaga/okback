'use client'

import { useState } from "react"
import { DirectoryCard } from "./directory-card"
import Link from "next/link"

const directories = [
  { name: "Capterra", domainRating: 93, traffic: "4.2M", category: "SaaS", isBlurred: false },
  { name: "Product Hunt", domainRating: 90, traffic: "32.1M", category: "SaaS", isBlurred: false },
  { name: "SaaSworthy", domainRating: 72, traffic: "256K", category: "SaaS", isBlurred: true },
  { name: "GetApp", domainRating: 88, traffic: "3.1M", category: "SaaS", isBlurred: true },
  { name: "Software Advice", domainRating: 86, traffic: "2.8M", category: "SaaS", isBlurred: false },
  { name: "Futurepedia", domainRating: 78, traffic: "890K", category: "AI", isBlurred: true },
]

export function DirectoriesSection() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDirectories = directories.filter(dir => 
    dir.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <span className="text-[#4ADE80] text-sm font-medium mb-2 block">
            # Where We List You
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            We handpick 100 most relevant directories for you
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            10,000+ quality sites, directories, and forums across niches—updated daily.
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto">
            After you fill out an onboarding form and state your main objective, we pick relevant
            directories and websites for you. Either focusing on domain rating boost, or potential click
            traffic or both.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="search"
              placeholder="Search among 10,352 directories"
              className="w-full px-4 py-2 bg-black/40 border border-gray-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00CED1] hover:bg-black/60 transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredDirectories.map((dir) => (
            <DirectoryCard key={dir.name} {...dir} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-[#00CED1] hover:bg-[#00FFFF] text-black font-medium rounded-md transition-colors">
            Submit Your Directory
          </button>
          <p className="text-gray-500 text-sm mt-4">
            Want to list your directory? Submit it for review.
          </p>
        </div>
      </div>
    </section>
  )
}

