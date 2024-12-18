import type { Metadata } from 'next'
import Link from 'next/link'
import { Construction } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'SEO Score Card | Coming Soon | GetMoreBacklinks.org',
  description: 'Our comprehensive SEO Score Card tool is under development. Stay tuned for a powerful solution to evaluate and improve your website\'s SEO performance.',
  openGraph: {
    title: 'SEO Score Card | Coming Soon | GetMoreBacklinks.org',
    description: 'Powerful SEO Score Card coming soon. Evaluate and improve your website\'s SEO performance with our comprehensive tool.',
    url: 'https://www.getmorebacklinks.org/seo-score-card',
    siteName: 'GetMoreBacklinks.org',
    images: [
      {
        url: 'https://www.getmorebacklinks.org/coming-soon.png',
        width: 1200,
        height: 630,
        alt: 'SEO Score Card Coming Soon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Score Card | Coming Soon | GetMoreBacklinks.org',
    description: 'Powerful SEO Score Card coming soon. Evaluate and improve your website\'s SEO performance with our comprehensive tool.',
    images: ['https://www.getmorebacklinks.org/coming-soon.png'],
  },
  alternates: {
    canonical: 'https://www.getmorebacklinks.org/seo-score-card',
  },
}

export default function SEOScoreCard() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SEO Score Card | Coming Soon | GetMoreBacklinks.org",
    "description": "Our comprehensive SEO Score Card tool is under development. Stay tuned for a powerful solution to evaluate and improve your website's SEO performance.",
    "url": "https://www.getmorebacklinks.org/seo-score-card",
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
        id="seo-score-card-jsonld"
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
            SEO Score Card
          </h2>
          
          {/* Description */}
          <p className="text-gray-600 text-lg max-w-lg mx-auto">
            We're working hard to bring you an amazing SEO Score Card tool. This comprehensive solution will help you evaluate and improve your website's SEO performance. Stay tuned!
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

