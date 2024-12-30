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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50/80 border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2">BanSearch</h3>
                  <p className="text-sm text-gray-600 mb-2">Enter a Steam account below to check a players ban status and history.</p>
                </div>
                <a 
                  href="https://bansearch.com/"
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
              <h3 className="font-bold text-lg mb-2">Landing Page Analysis</h3>
              <p className="text-sm text-gray-600 mb-2">Overall Score: 46/100</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Messaging</span>
                  <span className="font-bold">80/100</span>
                </div>
                <div className="flex justify-between">
                  <span>Readability</span>
                  <span className="font-bold">40/100</span>
                </div>
                <div className="flex justify-between">
                  <span>Structure</span>
                  <span className="font-bold">40/100</span>
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
                  <span className="font-bold">10/100</span>
                </div>
              </div>
              <h4 className="font-bold mt-4 mb-2">Summary</h4>
              <p className="text-sm mb-2">The landing page has a sleek and modern design with a dark background that makes the essential elements pop. The use of purple for the main heading and search box draws immediate attention. However, it's too minimal and leaves out crucial information, such as a more detailed explanation of what BanSearch does and why users should care. The call to action is clear but feels somewhat lost on the page due to the lack of supporting content. Not having enough context or information might leave users wondering if this is trustworthy or worth their time.</p>
              <h4 className="font-bold mt-4 mb-2">Main Recommendations</h4>
              <ul className="list-disc list-inside text-sm">
                <li>Add a clearer explanation of what BanSearch offers, beyond a one-liner.</li>
                <li>Include social proof or trust indicators to enhance credibility.</li>
                <li>Improve the Open Graph data with a relevant and engaging title and description.</li>
              </ul>
            </div>

            <div className="col-span-full bg-gray-50/80 border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-4">SEO Analysis</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold">Links & Navigation</h4>
                  <p className="text-sm text-gray-600">Score: 67/100</p>
                </div>
                <div>
                  <h4 className="font-bold">Internal Links</h4>
                  <p className="text-sm text-gray-600">Score: 0/100</p>
                  <p className="text-sm">Internal links are crucial for SEO, helping search engines understand your site structure and distributing page authority.</p>
                  <p className="text-sm font-semibold mt-2">Issue: No internal links found</p>
                  <p className="text-sm">Suggestion: Add more internal links to improve site structure and help search engines understand your content hierarchy.</p>
                </div>
                <div>
                  <h4 className="font-bold">Robots.txt</h4>
                  <p className="text-sm text-gray-600">Score: 50/100</p>
                  <p className="text-sm">A robots.txt file is used to tell search engine crawlers which pages they can or cannot access on your site.</p>
                  <p className="text-sm font-semibold mt-2">Issue: Current page is blocked by robots.txt</p>
                  <p className="text-sm">Suggestion: The current page is blocked by robots.txt. If this is unintentional, update your robots.txt file.</p>
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
                  <p className="text-sm text-gray-600">Score: 50/100</p>
                  <p className="text-sm">The title tag is one of the most important elements for SEO and appears in search results.</p>
                  <p className="text-sm font-semibold mt-2">Issue: Title length not optimal</p>
                  <p className="text-sm">Current title: BanSearch - Player Ban Checker</p>
                  <p className="text-sm">Suggestion: Title is too short. Aim for 50-60 characters.</p>
                </div>
                <div>
                  <h4 className="font-bold">Meta Description</h4>
                  <p className="text-sm text-gray-600">Score: 74/100</p>
                  <p className="text-sm">The meta description provides a brief summary of the page content for search results.</p>
                  <p className="text-sm font-semibold mt-2">Issue: Meta description length not optimal</p>
                  <p className="text-sm">Current description: Easily check Steam accounts for their complete ban history across multiple games, anti-cheat providers and communities.</p>
                  <p className="text-sm">Suggestion: Meta description is too short. Aim for 120-160 characters.</p>
                </div>
                <div>
                  <h4 className="font-bold">Open Graph</h4>
                  <p className="text-sm text-gray-600">Score: 33/100</p>
                  <p className="text-sm">The og:title, og:description and og:image tags are used to define the title, description and image of your content when shared on social media platforms.</p>
                  <p className="text-sm font-semibold mt-2">Issues:</p>
                  <ul className="list-disc list-inside text-sm">
                    <li>No Open Graph title found</li>
                    <li>No Open Graph description found</li>
                  </ul>
                  <p className="text-sm">Suggestion: Add an og:title tag to optimize how your content appears when shared on social media.</p>
                </div>
                <div>
                  <h4 className="font-bold">Word Count</h4>
                  <p className="text-sm text-gray-600">Score: 6/100</p>
                  <p className="text-sm">The word count is used to determine the number of words on the page, which can impact SEO and user engagement.</p>
                  <p className="text-sm font-semibold mt-2">Issue: Word count is below optimal level</p>
                  <p className="text-sm">Current word count: 19</p>
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
              </div>
            </div>

            <div className="col-span-full mt-6 bg-orange-100 border-2 border-orange-500 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <FiEdit className="text-orange-500 w-8 h-8" />
                <h4 className="font-bold text-2xl text-orange-600">Boost Your SEO with Our Blog Service</h4>
              </div>
              <p className="text-lg mb-4">
                <strong>Blogs are crucial for SEO success.</strong> They help you:
              </p>
              <ul className="list-disc list-inside text-lg space-y-2 mb-6">
                <li>Increase organic traffic</li>
                <li>Improve search engine rankings</li>
                <li>Establish your brand as an industry authority</li>
                <li>Create opportunities for backlinks</li>
                <li>Engage your audience and increase time on site</li>
              </ul>
              <p className="text-xl font-bold mb-4">We offer a premium blog service to supercharge your SEO efforts:</p>
              <ul className="list-none text-lg space-y-3 mb-6">
                <li className="flex items-center"><span className="text-green-500 mr-2 text-2xl">✅</span> 20 high-quality, SEO-optimized blog posts per month</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-2xl">✅</span> Tailored content strategy aligned with your business goals</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-2xl">✅</span> Expert writers with industry knowledge</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-2xl">✅</span> Only $499/month</li>
              </ul>
              <p className="text-xl font-bold">
                Ready to elevate your SEO game? 
                <a className='text-orange-600 hover:underline ml-2' href="https://x.com/KrissmannGupta" target="_blank" rel="noopener noreferrer">
                  DM us on Twitter to get started! </a>
                or  
                <a className='text-orange-600 hover:underline ml-2' href="https://www.paypal.com/ncp/payment/GRRU84QL2C7QS" target="_blank" rel="noopener noreferrer">
                   Pay us Here Directly. We will get in touch with you!
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
                  src="/bansearch1.png" 
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
                  src="/bansearch2.png" 
                  alt="ProductHunt submission"
                  fill
                  className="object-contain"
                />
              </div>
             
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="relative h-[400px]">
                <Image 
                  src="/bansearch3.png" 
                  alt="BetaList confirmation"
                  fill
                  className="object-contain"
                />
              </div>
              
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="relative h-[400px]">
                <Image 
                  src="/bansearch4.png" 
                  alt="HackerNews submission"
                  fill
                  className="object-contain"
                />
              </div>
            
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="relative h-[400px]">
                <Image 
                  src="/bansearch5.png" 
                  alt="TechCrunch pitch"
                  fill
                  className="object-contain"
                />
              </div>
              
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="relative h-[400px]">
                <Image 
                  src="/bansearch6.png" 
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

