'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { submitDirectory } from '../actions/submit-directory'
import { Footer } from "@/app/components/footer"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Submit Your Tool | GetMoreBacklinks.org',
  description: 'Submit your directory submission tool to be featured on GetMoreBacklinks.org. Help others discover your valuable SEO resource.',
  openGraph: {
    title: 'Submit Your Tool | GetMoreBacklinks.org',
    description: 'Submit your directory submission tool and join our curated list of SEO resources.',
    url: 'https://www.getmorebacklinks.org/submit',
    siteName: 'GetMoreBacklinks.org',
    images: [
      {
        url: '/127.png',
        width: 1200,
        height: 630,
        alt: 'Submit Your Tool to GetMoreBacklinks.org',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Submit Your Tool | GetMoreBacklinks.org',
    description: 'Submit your directory submission tool and join our curated list of SEO resources.',
    images: ['/127.png'],
  },
}

export default function SubmitDirectory() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const formData = new FormData(event.currentTarget)

    const result = await submitDirectory(formData)

    if (result.error) {
      setMessage({ type: 'error', text: result.error })
    } else {
      setMessage({ type: 'success', text: 'Directory submitted successfully!' })
      event.currentTarget.reset()
      // Add a slight delay before reloading to allow the success message to be seen
      setTimeout(() => {
        window.location.reload()
      }, 1500)
    }

    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="container mx-auto px-4 py-4 sm:py-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/getmorepacklinks.png"
                alt="GetMoreBacklinks.org Logo"
                width={532}
                height={132}
                className="h-8 sm:h-10 md:h-12 w-auto"
                priority
              />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md bg-black text-white hover:bg-orange-600 transition-colors font-bold">
              Join Waitlist
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-black mb-4 text-center">
            Submit Your Tool
          </h1>
          <p className="text-gray-600 text-center mb-8 font-bold">
            Have a suggestion for a tool we should add? Fill out the form below.
          </p>
       
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="toolName" className="block text-black mb-2 font-bold">
                Tool Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="toolName"
                name="toolName"
                required
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 hover:bg-gray-50 transition-colors"
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="toolWebsite" className="block text-black mb-2 font-bold">
                Tool Website <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                id="toolWebsite"
                name="toolWebsite"
                required
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 hover:bg-gray-50 transition-colors"
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="toolDescription" className="block text-black mb-2 font-bold">
                Tool Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="toolDescription"
                name="toolDescription"
                required
                rows={4}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 hover:bg-gray-50 transition-colors"
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="fullName" className="block text-black mb-2 font-bold">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 hover:bg-gray-50 transition-colors"
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-black mb-2 font-bold">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 hover:bg-gray-50 transition-colors"
                aria-required="true"
              />
            </div>

            {message && (
              <div 
                className={`p-4 rounded-md ${
                  message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
                role="alert"
                aria-live="assertive"
              >
                {message.text}
              </div>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                aria-disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
                {!isSubmitting && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}

