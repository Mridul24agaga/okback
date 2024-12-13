import { Metadata } from 'next'
import Image from "next/image"
import Hero from "@/app/components/Hero"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: 'GetMoreBacklinks - Boost Your SEO with 500+ Directory Listings',
  description: 'List your website on 500+ directories to improve SEO, backlinks, ratings, and sales. Join our exclusive waitlist for early access to our curated database of launch platforms, directories, marketplaces, newsletters, and communities.',
  keywords: ['SEO', 'backlinks', 'directory listings', 'digital marketing', 'website promotion'],
  openGraph: {
    title: 'GetMoreBacklinks - Boost Your SEO with 500+ Directory Listings',
    description: 'List your website on 500+ directories to improve SEO, backlinks, ratings, and sales. Join our exclusive waitlist for early access.',
    url: 'https://www.getmorebacklinks.org',
    siteName: 'GetMoreBacklinks',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'GetMoreBacklinks - Directory Listing Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GetMoreBacklinks - Boost Your SEO with 500+ Directory Listings',
    description: 'List your website on 500+ directories to improve SEO, backlinks, ratings, and sales. Join our exclusive waitlist for early access.',
    images: ['/og.jpg'],
  },
  alternates: {
    canonical: 'https://www.getmorebacklinks.org',
    languages: {
      'en-US': 'https://www.getmorebacklinks.org',
    },
  },
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "GetMoreBacklinks",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1000"
    },
    "description": "List your website on 500+ directories to improve SEO, backlinks, ratings, and sales.",
    "operatingSystem": "Web",
    "url": "https://www.getmorebacklinks.org",
    "author": {
      "@type": "Organization",
      "name": "GetMoreBacklinks",
      "url": "https://www.getmorebacklinks.org"
    },
    "sameAs": [
      "https://x.com/Innvisionagency",
      "https://www.linkedin.com/in/mridulthareja/"
    ]
  }

  return (
    <html lang="en">
      <body>
        <main>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Hero/>
          <Analytics/>
        </main>
      </body>
    </html>
  )
}

