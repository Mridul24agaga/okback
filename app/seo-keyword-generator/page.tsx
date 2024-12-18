import type { Metadata } from 'next'
import Link from 'next/link'
import { Construction } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'SEO Keyword Generator | Coming Soon | GetMoreBacklinks.org',
  description: 'Our advanced SEO Keyword Generator is under development. Stay tuned for a powerful tool to boost your content strategy and organic traffic.',
  openGraph: {
    title: 'SEO Keyword Generator | Coming Soon | GetMoreBacklinks.org',
    description: 'Powerful SEO Keyword Generator coming soon. Boost your content strategy and organic traffic with our advanced tool.',
    url: 'https://www.getmorebacklinks.org/seo-keyword-generator',
    siteName: 'GetMoreBacklinks.org',
    images: [
      {
        url: 'https://www.getmorebacklinks.org/coming-soon.png',
        width: 1200,
        height: 630,
        alt: 'SEO Keyword Generator Coming Soon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Keyword Generator | Coming Soon | GetMoreBacklinks.org',
    description: 'Powerful SEO Keyword Generator coming soon. Boost your content strategy and organic traffic with our advanced tool.',
    images: ['https://www.getmorebacklinks.org/coming-soon.png'],
  },
  alternates: {
    canonical: 'https://www.getmorebacklinks.org/seo-keyword-generator',
  },
}

export default function SEOKeywordGenerator() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SEO Keyword Generator | Coming Soon | GetMoreBacklinks.org",
    "description": "Our advanced SEO Keyword Generator is under development. Stay tuned for a powerful tool to boost your content strategy and organic traffic.",
    "url": "https://www.getmorebacklinks.org/seo-keyword-generator",
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
        id="seo-keyword-generator-jsonld"
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
            SEO Keyword Generator
          </h2>
          
          {/* Description */}
          <p className="text-gray-600 text-lg max-w-lg mx-auto">
            We're developing a powerful SEO Keyword Generator to help you boost your content strategy and organic traffic. Stay tuned for this game-changing tool!
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

