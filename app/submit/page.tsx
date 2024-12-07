'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { submitDirectory } from '../actions/submit-directory'

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
    <div className="min-h-screen bg-[#0A0A0A] bg-[radial-gradient(circle_at_center,rgba(0,206,209,0.15),rgba(0,0,0,0)_50%)]">
      {/* Header */}
      <header className="container mx-auto px-4 py-4 sm:py-6 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/getmorebacklinks.png"
                alt="Logo"
                width={532}
                height={132}
                className="h-8 sm:h-10 md:h-12 w-auto"
              />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base font-bold"
            >
              Pricing
            </Link>
            <button className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md bg-[#00CED1] text-black hover:bg-[#00CED1]/90 transition-colors font-bold">
              Try Now
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">
            Submit Your Tool
          </h1>
          <p className="text-gray-400 text-center mb-8 font-bold">
            Have a suggestion for a tool we should add? Fill out the form below.
          </p>
       


          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="toolName" className="block text-white mb-2 font-bold">
                Tool Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="toolName"
                name="toolName"
                required
                className="w-full px-4 py-2 bg-black/40 border border-gray-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00CED1] hover:bg-black/60 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="toolWebsite" className="block text-white mb-2 font-bold">
                Tool Website <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                id="toolWebsite"
                name="toolWebsite"
                required
                className="w-full px-4 py-2 bg-black/40 border border-gray-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00CED1] hover:bg-black/60 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="toolDescription" className="block text-white mb-2 font-bold">
                Tool Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="toolDescription"
                name="toolDescription"
                required
                rows={4}
                className="w-full px-4 py-2 bg-black/40 border border-gray-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00CED1] hover:bg-black/60 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="fullName" className="block text-white mb-2 font-bold">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                className="w-full px-4 py-2 bg-black/40 border border-gray-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00CED1] hover:bg-black/60 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-2 font-bold">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-black/40 border border-gray-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00CED1] hover:bg-black/60 transition-colors"
              />
            </div>

            {message && (
              <div className={`p-4 rounded-md ${
                message.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
              }`}>
                {message.text}
              </div>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-[#00CED1] text-black font-medium rounded-md hover:bg-[#00CED1]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
                {!isSubmitting && <ArrowRight className="h-4 w-4" />}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

