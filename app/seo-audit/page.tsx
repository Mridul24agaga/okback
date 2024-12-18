import type { Metadata } from 'next'
import Link from 'next/link'
import { Construction } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'SEO Audit Tool | Coming Soon | GetMoreBacklinks.org',
  description: 'Our comprehensive SEO Audit Tool is under development. Stay tuned for a powerful solution to analyze and improve your website\'s search engine optimization.',
  openGraph: {
    title: 'SEO Audit Tool | Coming Soon | GetMoreBacklinks.org',
    description: 'Powerful SEO Audit Tool coming soon. Analyze and improve your website\'s search engine optimization with our comprehensive solution.',
    url: 'https://www.getmorebacklinks.org/seo-audit-tool',
    siteName: 'GetMoreBacklinks.org',
    images: [
      {
        url: 'https://www.getmorebacklinks.org/coming-soon.png',
        width: 1200,
        height: 630,
        alt: 'SEO Audit Tool Coming Soon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Audit Tool | Coming Soon | GetMoreBacklinks.org',
    description: 'Powerful SEO Audit Tool coming soon. Analyze and improve your website\'s search engine optimization with our comprehensive solution.',
    images: ['https://www.getmorebacklinks.org/coming-soon.png'],
  },
  alternates: {
    canonical: 'https://www.getmorebacklinks.org/seo-audit-tool',
  },
}

export default function SEOAuditTool() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SEO Audit Tool | Coming Soon | GetMoreBacklinks.org",
    "description": "Our comprehensive SEO Audit Tool is under development. Stay tuned for a powerful solution to analyze and improve your website's search engine optimization.",
    "url": "https://www.getmorebacklinks.org/seo-audit-tool",
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
        id="seo-audit-tool-jsonld"
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
            SEO Audit Tool
          </h2>
          
          {/* Description */}
          <p className="text-gray-600 text-lg max-w-lg mx-auto">
            We're developing a comprehensive SEO Audit Tool to help you analyze and improve your website's search engine optimization. Stay tuned for this powerful solution!
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

