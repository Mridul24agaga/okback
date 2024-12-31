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
    <div className="min-h-screen bg-white text-black">
      <header className="bg-white border-b-2 border-orange-500 py-6">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Image src="/getmorepacklinks.png" alt="Company Logo" width={70} height={50} />
          <h1 className="text-3xl font-bold">
            <span className="text-orange-500 mt-15">Submission</span> Report
          </h1>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        {/* Report Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <section className="bg-gray-50/80 border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-orange-500">Report</span> Overview
            </h2>
            <p className="mb-4">This report provides a comprehensive overview of your startup's submission status across various platforms. It includes submission guidelines, a list of submitted websites, and evidence of submissions.</p>
            <p>Use this report to track your progress and ensure maximum visibility for your startup.</p>
          </section>

          <section className="bg-gray-50/80 border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-orange-500">Submission</span> Guidelines
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="mr-4 mt-1">
                  <FiClock className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Processing Time</h3>
                  <p>Expect results to appear within 30-60 days after submission. Be patient and use this time to refine your product.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1">
                  <FiTrendingUp className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Maximize Visibility</h3>
                  <p>Regularly update your product information and engage with the community to increase your chances of being featured.</p>
                </div>
              </li>
            </ul>
          </section>
        </div>

        {/* Submitted Websites Section */}
        <section className="bg-gray-50/80 border border-gray-200 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-orange-500">Submitted</span> Websites
          </h2>
          <p className="mb-6">Your startup has been submitted to {websiteList.length} websites. This extensive list covers a wide range of platforms, increasing your chances of visibility and success.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="col-span-full bg-gray-50/80 border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2">MyPortrait</h3>
                </div>
                <a 
                  href="https://www.myportrait.studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black"
                >
                  <FiExternalLink className="w-5 h-5" />
                </a>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-xs bg-gradient-to-r from-gray-600 to-orange-500 text-white px-2 py-1 rounded">Submitted</span>
              </div>
            </div>
            
            <div className="col-span-full bg-gray-50/80 border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-4">SEO Analysis</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold">Links & Navigation</h4>
                  <p className="text-sm text-gray-600">Score: 33/100</p>
                </div>
                <div>
                  <h4 className="font-bold">Internal Links</h4>
                  <p className="text-sm text-gray-600">Score: 0/100</p>
                  <p className="text-sm">Internal links are crucial for SEO, helping search engines understand your site structure and distributing page authority.</p>
                  <p className="text-sm font-semibold mt-2">Issue: No internal links found</p>
                  <p className="text-sm">Suggestion: Add more internal links to improve site structure and help search engines understand your content hierarchy.</p>
                </div>
                <div>
                  <h4 className="font-bold">Sitemap</h4>
                  <p className="text-sm text-gray-600">Score: 0/100</p>
                  <p className="text-sm">A sitemap is a file that lists all the pages on a website, making it easier for search engines to crawl and index the site.</p>
                  <p className="text-sm font-semibold mt-2">Error: Failed to check sitemap: Invalid sitemap content type</p>
                  <p className="text-sm">Suggestion: There was an error checking the sitemap. Please ensure the domain is accessible and try again.</p>
                </div>
                <div>
                  <h4 className="font-bold">Canonical URL</h4>
                  <p className="text-sm text-gray-600">Score: 0/100</p>
                  <p className="text-sm">Canonical URLs help prevent duplicate content issues by specifying the preferred version of a page.</p>
                  <p className="text-sm font-semibold mt-2">Issue: No canonical URL found</p>
                  <p className="text-sm">Suggestion: Add a canonical URL to specify the preferred version of this page.</p>
                </div>
                <div>
                  <h4 className="font-bold">Hreflang Tags</h4>
                  <p className="text-sm text-gray-600">Score: 0/100</p>
                  <p className="text-sm">Hreflang tags tell search engines which language versions of a page are available.</p>
                  <p className="text-sm font-semibold mt-2">Issue: No hreflang tags found</p>
                  <p className="text-sm">Suggestion: Consider adding hreflang tags if your content is available in multiple languages.</p>
                </div>
                <div>
                  <h4 className="font-bold">Title</h4>
                  <p className="text-sm text-gray-600">Score: 0/100</p>
                  <p className="text-sm">The title tag is one of the most important elements for SEO and appears in search results.</p>
                  <p className="text-sm font-semibold mt-2">Issue: No title found</p>
                  <p className="text-sm">Suggestion: Add a title tag to improve your page visibility in search results.</p>
                </div>
                <div>
                  <h4 className="font-bold">Meta Description</h4>
                  <p className="text-sm text-gray-600">Score: 0/100</p>
                  <p className="text-sm">The meta description provides a brief summary of the page content for search results.</p>
                  <p className="text-sm font-semibold mt-2">Issue: No meta description found</p>
                  <p className="text-sm">Suggestion: Add a meta description to improve your search result appearance.</p>
                </div>
                <div>
                  <h4 className="font-bold">Open Graph</h4>
                  <p className="text-sm text-gray-600">Score: 0/100</p>
                  <p className="text-sm">The og:title, og:description and og:image tags are used to define the title, description and image of your content when shared on social media platforms.</p>
                  <p className="text-sm font-semibold mt-2">Issues:</p>
                  <ul className="list-disc list-inside text-sm">
                    <li>No Open Graph title found</li>
                    <li>No Open Graph description found</li>
                    <li>No Open Graph image found</li>
                  </ul>
                  <p className="text-sm">Suggestion: Add Open Graph tags to optimize how your content appears when shared on social media.</p>
                </div>
                <div>
                  <h4 className="font-bold">Word Count</h4>
                  <p className="text-sm text-gray-600">Score: 0/100</p>
                  <p className="text-sm">The word count is used to determine the number of words on the page, which can impact SEO and user engagement.</p>
                  <p className="text-sm font-semibold mt-2">Issue: Word count is below optimal level</p>
                  <p className="text-sm">Suggestion: Consider adding more content to reach a minimum of 300 words for better SEO.</p>
                </div>
                <div>
                  <h4 className="font-bold">Images Alt Tags</h4>
                  <p className="text-sm text-gray-600">Score: 0/100</p>
                  <p className="text-sm">Image alt tags are important for accessibility and SEO, providing context for images when they cannot be displayed.</p>
                  <p className="text-sm">Suggestion: Add descriptive alt tags to images that are missing them to improve accessibility and SEO.</p>
                </div>
                <div>
                  <h4 className="font-bold">Structured Data</h4>
                  <p className="text-sm text-gray-600">Score: 0/100</p>
                  <p className="text-sm">Structured data helps search engines understand your content better and can lead to rich results in search engine results pages.</p>
                  <p className="text-sm font-semibold mt-2">Issue: No structured data found. No JSON-LD structured data detected</p>
                  <p className="text-sm">Suggestion: Consider adding structured data to enhance how your content appears in search results.</p>
                </div>
                <div>
                  <h4 className="font-bold">Keywords</h4>
                  <p className="text-sm text-gray-600">Score: 0/100</p>
                  <p className="text-sm">Keywords are crucial for SEO, ensuring a smooth user experience and proper page indexing.</p>
                  <p className="text-sm font-semibold mt-2">Issue: No keywords found</p>
                  <p className="text-sm">Suggestion: Add keywords to ensure a smooth user experience and proper page indexing.</p>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-orange-100 border-2 border-orange-500 rounded-lg p-6">
              <h4 className="font-bold text-xl mb-4 text-orange-600">SEO Improvement Suggestions</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Add Internal Links:</strong> Create a clear site structure with internal linking to improve navigation and SEO.</li>
                <li><strong>Create a Sitemap:</strong> Generate and submit a sitemap to help search engines crawl and index your site more effectively.</li>
                <li><strong>Implement Canonical URLs:</strong> Add canonical tags to prevent duplicate content issues.</li>
                <li><strong>Add Title and Meta Description:</strong> Create compelling and relevant title tags and meta descriptions for better search result appearance.</li>
                <li><strong>Implement Open Graph Tags:</strong> Add og:title, og:description, and og:image tags for better social media sharing.</li>
                <li><strong>Increase Content:</strong> Add more high-quality, relevant content to reach at least 300 words per page.</li>
                <li><strong>Optimize Images:</strong> Add descriptive alt tags to all images for better accessibility and SEO.</li>
                <li><strong>Add Structured Data:</strong> Implement JSON-LD structured data to provide more context to search engines.</li>
                <li><strong>Keyword Optimization:</strong> Research and incorporate relevant keywords throughout your content.</li>
              </ul>
            </div>

            <div className="col-span-full mt-6 bg-orange-100 border-2 border-orange-500 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <FiEdit className="text-orange-500 w-8 h-8" />
                <h4 className="font-bold text-2xl text-orange-600">Boost Your SEO with Our Indexation and Landing Page Strategy Service</h4>
              </div>
              <p className="text-lg mb-4">
                <strong>Improve your SEO score and online visibility with our expert service:</strong>
              </p>
              <ul className="list-disc list-inside text-lg space-y-2 mb-6">
                <li>Comprehensive site audit and indexation strategy</li>
                <li>Custom landing page optimization plan</li>
                <li>Keyword research and implementation</li>
                <li>Technical SEO improvements</li>
                <li>Content strategy recommendations</li>
              </ul>
              <p className="text-xl font-bold mb-4">Get a tailored SEO strategy to boost your online presence:</p>
              <ul className="list-none text-lg space-y-3 mb-6">
                <li className="flex items-center"><span className="text-green-500 mr-2 text-2xl">✅</span> In-depth SEO analysis and recommendations</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-2xl">✅</span> Customized indexation and landing page strategy</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-2xl">✅</span> Expert SEO consultants with proven track record</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-2xl">✅</span> Only $200 for a comprehensive strategy</li>
              </ul>
              <p className="text-xl font-bold">
                Ready to improve your SEO and boost your online visibility? 
                <a className='text-orange-600 hover:underline ml-2' href="https://x.com/KrissmannGupta" target="_blank" rel="noopener noreferrer">
                  DM us on Reddit to get started! </a>
                or
                <a className='text-orange-600 hover:underline ml-2' href="https://www.paypal.com/ncp/payment/Z48JAMBWTYQCW" target="_blank" rel="noopener noreferrer">
                   Pay us Directly Here and we will get in touch with you
                </a>

              </p>
            </div>

            {/* Website list with load more */}
            <div className="col-span-full">
              <div className="h-[400px] overflow-y-auto bg-gray-50/80 border border-gray-200 rounded-md p-4 mb-4">
                <ul className="space-y-2">
                  {websiteList.slice(0, visibleWebsites).map((website, index) => (
                    <li key={index}>
                      <a 
                        href={website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-black"
                      >
                        {website}
                      </a>
                    </li>
                  ))}
                </ul>
                {visibleWebsites < websiteList.length && (
                  <button 
                    onClick={loadMore} 
                    className="mt-4 bg-gradient-to-r from-gray-600 to-orange-500 text-white px-4 py-2 rounded font-bold"
                  >
                    Load More
                  </button>
                )}
              </div>
              <div className="bg-orange-100 border-2 border-orange-500 rounded-lg p-6 text-center">
                <p className="text-2xl font-bold mb-4">⭐ IMPORTANT NOTE ⭐</p>
                <p className="text-xl font-bold">
                  If your startup has not been listed yet, don't worry! It takes 30-60 days for the results to appear.
                </p>
                <p className="text-lg mt-4">
                  After 30 days, if you face any issues, message us on <a className='text-orange-600' href="https://x.com/KrissmannGupta">Twitter</a>. We will help you out as much as we can!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50/80 border border-gray-200 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-orange-500">Paid</span> Directories
          </h2>
          <p className="mb-6">To further boost your visibility, consider listing your product on these premium directories:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Opentools</h3>
              <p className="text-sm text-gray-600 mb-2">Launch your product to a community of early adopters and tech enthusiasts.</p>
              <a 
                href="https://www.producthunt.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline"
              >
              </a>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Killer Startups</h3>
              <p className="text-sm text-gray-600 mb-2">Reach entrepreneurs and small business owners with lifetime deals.</p>
              <a 
                href="https://appsumo.com/partners/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline"
              >
              </a>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Futurepedia</h3>
              <p className="text-sm text-gray-600 mb-2">Get listed on the world's largest tech marketplace for business software.</p>
              <a 
                href="https://www.g2.com/products/new"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline"
              >
              </a>
            </div>
          </div>

          <div className="bg-orange-100 border-2 border-orange-500 rounded-lg p-6 text-center">
            <p className="text-2xl font-bold mb-4">🚀 Coming Soon: Directory Partnerships</p>
            <p className="text-lg">
              We're excited to announce that we'll soon be partnering with top directories to offer you exclusive listing opportunities!
            </p>
            <button className="mt-4 bg-gradient-to-r from-gray-600 to-orange-500 text-white px-6 py-2 rounded-lg font-bold">
              Get Notified
            </button>
          </div>
        </section>

        <section className="bg-gray-50/80 border border-gray-200 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-orange-500">Submission</span> Evidence
          </h2>
          <p className="mb-6">Below are the confirmation emails and submission receipts from various platforms:</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Startupanz.com Card */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="relative h-[400px]">
                <Image 
                  src="/mypotrait1.png" 
                  alt="Startupanz.com confirmation"
                  fill
                  className="object-contain"
                />
              </div>
              
            </div>

            {/* Additional Evidence Cards */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="relative h-[400px]">
                <Image 
                  src="/mypotrait2.png" 
                  alt="ProductHunt submission"
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

