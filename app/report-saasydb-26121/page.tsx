'use client'

import Image from 'next/image'
import { websiteList } from './website-list'
import { useState } from 'react'
import { FiClock, FiTrendingUp, FiAlertCircle, FiCheckCircle, FiExternalLink, FiLink, FiTool, FiEdit } from 'react-icons/fi'
import Footer from '../components/footer'

export default function ReportPage() {
  const [visibleWebsites, setVisibleWebsites] = useState(50)

  const loadMore = () => {
    setVisibleWebsites(prev => Math.min(prev + 50, websiteList.length))
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white border-b-2 border-blue-500 py-6 shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Image src="/backlinkai.png" alt="Company Logo" width={70} height={50} />
          <h1 className="text-3xl font-bold">
            <span className="text-blue-600">Submission</span> Report
          </h1>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <section className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-blue-600">Report</span> Overview
            </h2>
            <p className="mb-4">This report provides a comprehensive overview of your startup's submission status across various platforms. It includes submission guidelines, a list of submitted websites, and evidence of submissions.</p>
            <p>Use this report to track your progress and ensure maximum visibility for your startup.</p>
          </section>

          <section className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-blue-600">Submission</span> Guidelines
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="mr-4 mt-1">
                  <FiClock className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Processing Time</h3>
                  <p>Expect results to appear within 30-60 days after submission. Be patient and use this time to refine your product.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1">
                  <FiTrendingUp className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Maximize Visibility</h3>
                  <p>Regularly update your product information and engage with the community to increase your chances of being featured.</p>
                </div>
              </li>
            </ul>
          </section>
        </div>

        <section className="bg-white border border-gray-200 rounded-lg p-6 mb-12 shadow-md">
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-blue-600">Submitted</span> Websites
          </h2>
          <p className="mb-6">Your startup has been submitted to {websiteList.length} websites. This extensive list covers a wide range of platforms, increasing your chances of visibility and success.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2">SaasyDB</h3>
                  <p className="text-sm text-gray-600 mb-2">Comprehensive SaaS company lead database</p>
                </div>
                <a 
                  href="https://saasydb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  <FiExternalLink className="w-5 h-5" />
                </a>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-xs bg-gradient-to-r from-blue-600 to-blue-400 text-white px-2 py-1 rounded">Submitted</span>
              </div>
            </div>
            
            <div className="col-span-full bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Landing Page Analysis</h3>
              <p className="text-sm text-gray-600 mb-2">Overall Score: 68/100</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Messaging</span>
                  <span className="font-bold">60/100</span>
                </div>
                <div className="flex justify-between">
                  <span>Readability</span>
                  <span className="font-bold">65/100</span>
                </div>
                <div className="flex justify-between">
                  <span>Structure</span>
                  <span className="font-bold">75/100</span>
                </div>
                <div className="flex justify-between">
                  <span>Actionability</span>
                  <span className="font-bold">55/100</span>
                </div>
                <div className="flex justify-between">
                  <span>Design</span>
                  <span className="font-bold">50/100</span>
                </div>
                <div className="flex justify-between">
                  <span>Credibility</span>
                  <span className="font-bold">80/100</span>
                </div>
              </div>
              <h4 className="font-bold mt-4 mb-2">Summary</h4>
              <p className="text-sm mb-2">The website aims to capture the attention of marketers seeking a comprehensive SaaS database. The strong offer of "Get the Leads of a Whole Company" is eye-catching and bold. However, the visual hierarchy feels somewhat scattered with inconsistent usage of colors and fonts, which can make navigation a bit cumbersome. The call-to-action buttons, while present, lack urgency and don't stand out enough against the background.</p>
              <h4 className="font-bold mt-4 mb-2">Main Recommendations</h4>
              <ul className="list-disc list-inside text-sm">
                <li>Add more testimonials or customer reviews to build trust.</li>
                <li>Improve CTA visibility by using contrasting colors and more specific action verbs.</li>
                <li>Enhance section breaks with more whitespace and visual cues to guide reading flow.</li>
              </ul>
            </div>

            <div className="col-span-full bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h3 className="font-bold text-lg mb-4">SEO Analysis</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold">Canonical URL</h4>
                  <p className="text-sm text-gray-600">Score: 50/100</p>
                  <p className="text-sm">Canonical URLs help prevent duplicate content issues by specifying the preferred version of a page.</p>
                  <p className="text-sm font-semibold mt-2">Issue: Canonical URL differs from current URL (https://www.saasydb.com/)</p>
                  <p className="text-sm">Suggestion: The canonical URL differs from the current URL. Ensure this is intentional.</p>
                </div>
                
                <div>
                  <h4 className="font-bold">Hreflang Tags</h4>
                  <p className="text-sm text-gray-600">Score: 0/100</p>
                  <p className="text-sm">Hreflang tags tell search engines which language versions of a page are available.</p>
                  <p className="text-sm font-semibold mt-2">Issue: No hreflang tags found</p>
                  <p className="text-sm">Suggestion: Consider adding hreflang tags if your content is available in multiple languages.</p>
                </div>
                
                <div>
                  <h4 className="font-bold">Images Alt Tags</h4>
                  <p className="text-sm text-gray-600">Score: 0/100</p>
                  <p className="text-sm">Image alt tags are important for accessibility and SEO, providing context for images when they cannot be displayed.</p>
                  <p className="text-sm font-semibold mt-2">Issue: Images without alt tags found</p>
                </div>
                
                <div>
                  <h4 className="font-bold">Headings Structure</h4>
                  <p className="text-sm text-gray-600">Score: 0/100</p>
                  <p className="text-sm">A proper heading structure is important for SEO and accessibility, helping both users and search engines understand the content hierarchy.</p>
                  <p className="text-sm font-semibold mt-2">Issues:</p>
                  <ul className="list-disc list-inside text-sm ml-4">
                    <li>Heading level skipped. "(Limited early bird prices - Increases to $497 on January 7th)" should be H4 instead of H6</li>
                    <li>Heading level skipped. "extensive saas database" should be H4 instead of H6</li>
                    <li>Heading level skipped. "precision targeting" should be H5 instead of H6</li>
                    <li>Heading level skipped. "More EMAIL TARGETs" should be H5 instead of H6</li>
                    <li>Heading level skipped. "complete Employee info" should be H5 instead of H6</li>
                    <li>Heading level skipped. "FUNDING ROUNDS AND COMPANY GROWTH" should be H5 instead of H6</li>
                    <li>Heading level skipped. "It's all saas" should be H5 instead of H6</li>
                    <li>Heading level skipped. "UNLIMITED LEADS FOREVER" should be H5 instead of H6</li>
                    <li>Heading level skipped. "SOLOPRENEURS AND FOUNDERS" should be H4 instead of H6</li>
                    <li>Multiple H1 headings found</li>
                  </ul>
                  <p className="text-sm mt-2">Suggestion: Improve your heading structure by addressing the issues listed above.</p>
                </div>
                
                <div>
                  <h4 className="font-bold">Structured Data</h4>
                  <p className="text-sm text-gray-600">Score: 0/100</p>
                  <p className="text-sm">Structured data helps search engines understand your content better and can lead to rich results in search engine results pages.</p>
                  <p className="text-sm font-semibold mt-2">Issue: No structured data found. No JSON-LD structured data detected.</p>
                  <p className="text-sm">Suggestion: Consider adding structured data to enhance how your content appears in search results.</p>
                </div>
              </div>
            </div>

            
            {/* Website list with load more */}
            <div className="col-span-full">
              <div className="h-[400px] overflow-y-auto bg-white border border-gray-200 rounded-md p-4 mb-4 shadow-sm">
                <ul className="space-y-2">
                  {websiteList.slice(0, visibleWebsites).map((website, index) => (
                    <li key={index}>
                      <a 
                        href={website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:underline"
                      >
                        {website}
                      </a>
                    </li>
                  ))}
                </ul>
                {visibleWebsites < websiteList.length && (
                  <button 
                    onClick={loadMore} 
                    className="mt-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded font-bold hover:from-blue-700 hover:to-blue-500 transition duration-300"
                  >
                    Load More
                  </button>
                )}
              </div>
              <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-6 text-center shadow-md">
                <p className="text-2xl font-bold mb-4">⭐ IMPORTANT NOTE ⭐</p>
                <p className="text-xl font-bold">
                  If your startup has not been listed yet, don't worry! It takes 30-60 days for the results to appear.
                </p>
                <p className="text-lg mt-4">
                  After 30 days, if you face any issues, message us on <a className='text-blue-600 hover:underline' href="https://x.com/peterliwin5">Twitter</a>. We will help you out as much as we can!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-lg p-6 mb-12 shadow-md">
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-blue-600">Paid</span> Directories
          </h2>
          <p className="mb-6">To further boost your visibility, consider listing your product on these premium directories:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Opentools</h3>
              <p className="text-sm text-gray-600 mb-2">Launch your product to a community of early adopters and tech enthusiasts.</p>
              <a 
                href="https://www.producthunt.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
              </a>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Killer Startups</h3>
              <p className="text-sm text-gray-600 mb-2">Reach entrepreneurs and small business owners with lifetime deals.</p>
              <a 
                href="https://appsumo.com/partners/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
              </a>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Futurepedia</h3>
              <p className="text-sm text-gray-600 mb-2">Get listed on the world's largest tech marketplace for business software.</p>
              <a 
                href="https://www.g2.com/products/new"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
              </a>
            </div>
          </div>

          <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-6 text-center shadow-md">
            <p className="text-2xl font-bold mb-4">🚀 Coming Soon: Directory Partnerships</p>
            <p className="text-lg">
              We're excited to announce that we'll soon be partnering with top directories to offer you exclusive listing opportunities!
            </p>
            <button className="mt-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2 rounded-lg font-bold hover:from-blue-700 hover:to-blue-500 transition duration-300">
              Get Notified
            </button>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-lg p-6 mb-12 shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-blue-600">Submission</span> Evidence
          </h2>
          <p className="mb-6">Below are the confirmation emails and submission receipts from various platforms:</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Startupanz.com Card */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="relative h-[400px]">
                <Image 
                  src="/rundown.png" 
                  alt="Startupanz.com confirmation"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Additional Evidence Cards */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="relative h-[400px]">
                <Image 
                  src="/microlaunch.png" 
                  alt="ProductHunt submission"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

           

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="relative h-[400px]">
                <Image 
                  src="/betalist.png" 
                  alt="HackerNews submission"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="relative h-[400px]">
                <Image 
                  src="/doneexact.png" 
                  alt="AngelList listing"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  )
}

