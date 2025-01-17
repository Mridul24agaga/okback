'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Globe, ExternalLink, ChevronDown, ChevronUp, CheckCircle, Camera } from 'lucide-react'

const sampleWebsites = [
  'example1.com', 'example2.com', 'example3.com', 'example4.com', 'example5.com',
  'example6.com', 'example7.com', 'example8.com', 'example9.com', 'example10.com',
  'example11.com', 'example12.com', 'example13.com', 'example14.com', 'example15.com'
]

export default function SampleReportPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Sample Submission Report</h1>
          <p className="text-xl opacity-90">Overview of your website's submission status</p>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        <section className="bg-white rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
            <Globe className="w-8 h-8 mr-3 text-blue-600" />
            Submission Overview
          </h2>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            This report provides a demonstration of how your website has been submitted to multiple online platforms. 
            The actual report would contain real data about your specific submissions.
          </p>
          <div className="flex items-center text-blue-700 font-semibold text-lg">
            <ArrowRight className="mr-2" />
            <span>Your website has been submitted to 200+ platforms</span>
          </div>
        </section>

        <section className="bg-white rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
            <CheckCircle className="w-8 h-8 mr-3 text-blue-600" />
            Sample Submission List
          </h2>
          <p className="text-gray-600 mb-6">
            Below is a sample list of websites where your site could be submitted. In an actual report, 
            this would show the real platforms where your site has been submitted.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sampleWebsites.map((website, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">{website}</span>
                  <ExternalLink className="w-4 h-4 text-blue-600" />
                </div>
                <div className="mt-2">
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Sample Submission</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Sample Analysis Sections</h2>
          <p className="text-gray-600 mb-6">
            In a real report, you would find detailed analyses here. This is a demonstration of how that information might be structured.
          </p>
          <div className="space-y-4">
            {['Submission Status', 'Platform Categories', 'Geographical Distribution', 'Submission Timeline'].map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  className="flex justify-between items-center w-full text-left py-2"
                  onClick={() => toggleSection(item)}
                >
                  <span className="font-semibold text-lg text-gray-800">{item}</span>
                  {expandedSection === item ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5 text-blue-600" />}
                </button>
                {expandedSection === item && (
                  <div className="mt-4 pl-4 text-gray-600">
                    <p className="mb-2">Sample content for {item}:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>This would contain specific information about your submissions</li>
                      <li>Actual data and insights would be provided here</li>
                      <li>Recommendations based on the analysis would be included</li>
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
            <Camera className="w-8 h-8 mr-3 text-blue-600" />
            Submission Screenshots
          </h2>
          <p className="text-gray-600 mb-6">
            In the actual report, this section would display screenshots of your successful submissions to various platforms. 
            These serve as evidence of the submissions and can be useful for your records.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="relative h-48 bg-gray-200 flex justify-center items-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="w-12 h-12 text-gray-400" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white p-2 text-center">
                    Sample Screenshot {num}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2 text-gray-800">Platform {num} Submission</h3>
                  <p className="text-sm text-gray-600">Evidence of successful submission to Platform {num}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

