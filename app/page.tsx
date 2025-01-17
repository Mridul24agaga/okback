import { Metadata } from 'next'
import Image from "next/image"
import Script from 'next/script'
import Hero from "@/app/components/Hero"
import TestimonialsSection from './components/testimonial'
import ComparisonSection from './components/comparisonsection'
import PricingSection from './components/pricing'
import FAQSection from './components/faq'
import Footer from './components/footer'
import DomainRatingSection from './components/testimonials'
import { Analytics } from "@vercel/analytics/react"
import DirectoryTable from './components/directory-table'
import SampleReportSection from './components/sample-report'

export const metadata: Metadata = {
  title: 'Backlink AI - #1 AI powered directory submission site',
  description: 'Boost your online presence with Backlink AI, the #1 AI-powered directory submission platform. Automate and optimize your websites directory listings for better SEO and increased traffic. Try it today!',
  keywords: ['SEO', 'backlinks', 'directory listings', 'digital marketing', 'website promotion'],
  openGraph: {
    title: 'Backlink AI - #1 AI powered directory submission site',
    description: 'Boost your online presence with Backlink AI, the #1 AI-powered directory submission platform. Automate and optimize your websites directory listings for better SEO and increased traffic. Try it today!',
    url: 'https://backlinkai.tech/',
    siteName: 'Backlinkai',
    images: [
      {
        url: '/ogg.png',
        width: 1200,
        height: 630,
        alt: 'Backlink AI - Directory Listing Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Backlink AI - #1 AI powered directory submission site',
    description: 'Boost your online presence with Backlink AI, the #1 AI-powered directory submission platform. Automate and optimize your websites directory listings for better SEO and increased traffic. Try it today!',
    images: ['/ogg.png'],
  },
  alternates: {
    canonical: 'https://backlinkai.tech/',
    languages: {
      'en-US': 'https://backlinkai.tech/',
    },
  },
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Backlinkai",
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
    "description": "Boost your online presence with Backlink AI, the #1 AI-powered directory submission platform. Automate and optimize your websites directory listings for better SEO and increased traffic. Try it today!",
    "operatingSystem": "Web",
    "url": "https://backlinkai.tech/",
    "author": {
      "@type": "Organization",
      "name": "Backlinkai",
      "url": "https://backlinkai.tech/"
    },
    "sameAs": [
      "https://x.com/peterliwin5",
    ]
  }

  return (
    <html lang="en">
      <body>
        <main>
          <Hero/>
          <DirectoryTable/>
          <SampleReportSection/>
          <DomainRatingSection/>
          <TestimonialsSection/>
          <ComparisonSection/>
          <PricingSection/>
          <FAQSection/>
          <Footer/>
          <Analytics/>
        </main>
        
      </body>
    </html>
  )
}

