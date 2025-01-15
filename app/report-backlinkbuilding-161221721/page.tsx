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
          <p className="mb-6">Your startup has been submitted to 140+ websites. This extensive list covers a wide range of platforms, increasing your chances of visibility and success.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2">Buylinkbuilding</h3>
                  <p className="text-sm text-gray-600 mb-2">Comprehensive SaaS company lead database</p>
                </div>
                <a 
                  href="https://www.buylinkbuilding.com/"
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
              <h3 className="font-bold text-lg mb-4">SEO Analysis</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold">Links & Navigation</h4>
                  <p className="text-sm text-gray-600">Score: 0/100</p>
                  <p className="text-sm font-semibold mt-2">Issue: There was an error checking the sitemap.</p>
                  <p className="text-sm">Suggestion: Please ensure the domain is accessible and try again.</p>
                </div>
                
                <div>
                  <h4 className="font-bold">Indexation & Robots.txt</h4>
                  <p className="text-sm text-gray-600">Score: 0/100</p>
                  <p className="text-sm font-semibold mt-2">Issues:</p>
                  <ul className="list-disc list-inside text-sm ml-4">
                    <li>There was an error checking the robots.txt file.</li>
                    <li>No canonical URL found.</li>
                    <li>No hreflang tags found.</li>
                  </ul>
                  <p className="text-sm">Suggestions:</p>
                  <ul className="list-disc list-inside text-sm ml-4">
                    <li>Ensure your site has a valid robots.txt file to guide search engine crawlers and improve your site's indexing.</li>
                    <li>Add a canonical URL to specify the preferred version of this page.</li>
                    <li>Consider adding hreflang tags if your content is available in multiple languages.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold">Structured Data</h4>
                  <p className="text-sm text-gray-600">Score: 0/100</p>
                  <p className="text-sm font-semibold mt-2">Issue: No structured data found.</p>
                  <p className="text-sm">Suggestion: Consider adding structured data to enhance how your content appears in search results.</p>
                </div>
                
                <div>
                  <h4 className="font-bold">Meta & SEO Tags</h4>
                  <p className="text-sm text-gray-600">Score: 8/100 (Title), 23/100 (Meta Description)</p>
                  <p className="text-sm font-semibold mt-2">Issues:</p>
                  <ul className="list-disc list-inside text-sm ml-4">
                    <li>Title is too short. Current length: Less than 50 characters.</li>
                    <li>Meta description is too short. Current length: Less than 120 characters.</li>
                  </ul>
                  <p className="text-sm">Suggestions:</p>
                  <ul className="list-disc list-inside text-sm ml-4">
                    <li>Aim for a title length of 50-60 characters.</li>
                    <li>Aim for a meta description length of 120-160 characters.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold">Content Structure & Accessibility</h4>
                  <p className="text-sm text-gray-600">Score: 17/100 (Alt Tags), 29/100 (Content Length), 80/100 (Heading Structure)</p>
                  <p className="text-sm font-semibold mt-2">Issues:</p>
                  <ul className="list-disc list-inside text-sm ml-4">
                    <li>Images are missing descriptive alt tags.</li>
                    <li>Content length is less than 300 words.</li>
                    <li>Heading level skipped. "1000+ saas, startup and AI link directories to boost SEO" should be H2 instead of H4.</li>
                  </ul>
                  <p className="text-sm">Suggestions:</p>
                  <ul className="list-disc list-inside text-sm ml-4">
                    <li>Add descriptive alt tags to images that are missing them to improve accessibility and SEO.</li>
                    <li>Consider adding more content to reach a minimum of 300 words for better SEO.</li>
                    <li>Improve your heading structure by addressing the heading level issue.</li>
                  </ul>
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
                  src="/buylinkbuilding1.png" 
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
                  src="/buylinkbuilding2.png" 
                  alt="ProductHunt submission"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

           

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="relative h-[400px]">
                <Image 
                  src="/buylinkbuilding3.png" 
                  alt="HackerNews submission"
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

