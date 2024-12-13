import { Metadata } from 'next'
import Image from "next/image"
import Hero from "@/app/components/Hero"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: 'GetMoreBacklinks - Boost Your SEO with 500+ Directory Listings',
  description: 'List your website on 500+ directories to improve SEO, backlinks, ratings, and sales. Join our exclusive waitlist for early access to our curated database of launch platforms, directories, marketplaces, newsletters, and communities.',
  openGraph: {
    title: 'GetMoreBacklinks - Boost Your SEO with 500+ Directory Listings',
    description: 'List your website on 500+ directories to improve SEO, backlinks, ratings, and sales. Join our exclusive waitlist for early access.',
    url: 'https://www.getmorebacklinks.org',
    siteName: 'GetMoreBacklinks',
    images: [
      {
        url: '/og.jpg', // Make sure to create and add this image
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
    images: ['/og.jpg'], // Same as OG image
  },
}

export default function Home() {
  return (
    <main>
      <Hero/>
      <Analytics/>
    </main>
  )
}

