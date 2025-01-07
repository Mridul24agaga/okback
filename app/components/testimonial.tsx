'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function TestimonialSection() {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-[300px] flex-shrink-0">
          <Image
            src="/test2.jpeg"
            alt="Client testimonial"
            width={100}
            height={200}
            className="rounded-lg object-cover w-full aspect-[1/]"
            unoptimized
          />
        </div>
        <div className="flex-1 pt-4">
          <div className="text-2xl font-medium space-y-2">
            <span className="inline-block text-[40px] text-gray-800 leading-none mb-4">"</span>
            <span className="bg-yellow-100 px-1">Backlinks grew from 50 to over 500,</span>
            <span className="block mt-2">
              and our organic traffic increased by 300% in just 3 months. The ROI has been incredible @BacklinkAI
            </span>
          </div>
          <div className="mt-4 text-gray-600">— Ayush, SAAS Owner</div>
          <div className="mt-12 flex items-center gap-2 text-sm text-gray-600">
            <span>Results from</span>
            <Link 
              href="/" 
              className="text-blue-600 hover:underline"
            >
              Backlink AI
            </Link>
            <span>directory submission service</span>
          </div>
        </div>
      </div>
    </section>
  )
}

