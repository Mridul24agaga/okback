import type { Metadata } from 'next'
import Link from 'next/link'
import { Construction } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Keyword Rank Tracker | Coming Soon | GetMoreBacklinks.org',
  description: 'Our advanced Keyword Rank Tracker is under development. Stay tuned for a powerful tool to monitor and improve your search engine rankings.',
  openGraph: {
    title: 'Keyword Rank Tracker | Coming Soon | GetMoreBacklinks.org',
    description: 'Powerful Keyword Rank Tracker coming soon. Monitor and improve your search engine rankings with our advanced tool.',
    url: 'https://www.getmorebacklinks.org/keyword-rank-tracker',
    siteName: 'GetMoreBacklinks.org',
    images: [
      {
        url: 'https://www.getmorebacklinks.org/coming-soon.png',
        width: 1200,
        height: 630,
        alt: 'Keyword Rank Tracker Coming Soon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keyword Rank Tracker | Coming Soon | GetMoreBacklinks.org',
    description: 'Powerful Keyword Rank Tracker coming soon. Monitor and improve your search engine rankings with our advanced tool.',
    images: ['https://www.getmorebacklinks.org/coming-soon.png'],
  },
  alternates: {
    canonical: 'https://www.getmorebacklinks.org/keyword-rank-tracker',
  },
}

export default function KeywordRankTracker() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Keyword Rank Tracker | Coming Soon | GetMoreBacklinks.org",
    "description": "Our advanced Keyword Rank Tracker is under development. Stay tuned for a powerful tool to monitor and improve your search engine rankings.",
    "url": "https://www.getmorebacklinks.org/keyword-rank-tracker",
    "inLanguage": "en-US",
    "publisher": {
      "@type": "Organization",
      "name": "GetMoreBacklinks.org",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.getmorebacklinks.org/logo.png"
      }
    },
    "datePublished": "2024-12-17",
    "dateModified": "2024-12-17"
  };

  return (
    <>
      <Script
        id="keyword-rank-tracker-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
        <div className="space-y-6 max-w-2xl mx-auto">
          {/* Icon */}
          <div className="flex justify-center">
            <Construction className="h-24 w-24 text-orange-500 animate-pulse" />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-7xl font-mono font-bold text-black tracking-tight">
            Coming Soon
          </h1>
          
          {/* Subheading */}
          <h2 className="text-3xl font-medium text-gray-900 mt-4">
            Keyword Rank Tracker
          </h2>
          
          {/* Description */}
          <p className="text-gray-600 text-lg max-w-lg mx-auto">
            We're working hard to bring you an amazing Keyword Rank Tracker. This powerful tool will help you monitor and improve your search engine rankings. Stay tuned!
          </p>
          
          {/* CTA Button */}
          <div className="mt-8">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors duration-200"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

