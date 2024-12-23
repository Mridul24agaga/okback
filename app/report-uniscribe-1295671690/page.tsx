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

        <section className="bg-gray-50/80 border border-gray-200 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-orange-500">Submitted</span> Websites
          </h2>
          <p className="mb-6">Your startup has been submitted to {websiteList.length} websites. This extensive list covers a wide range of platforms, increasing your chances of visibility and success.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50/80 border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2">UniScribe</h3>
                  <p className="text-sm text-gray-600 mb-2">AI-powered audio and video transcription service</p>
                </div>
                <a 
                  href="https://uniscribe.co/"
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
              <p className="text-sm text-gray-600 mb-2">Overall Score: 68/100</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Messaging</span>
                  <span className="font-bold">70/100</span>
                </div>
                <div className="flex justify-between">
                  <span>Readability</span>
                  <span className="font-bold">75/100</span>
                </div>
                <div className="flex justify-between">
                  <span>Structure</span>
                  <span className="font-bold">60/100</span>
                </div>
                <div className="flex justify-between">
                  <span>Actionability</span>
                  <span className="font-bold">65/100</span>
                </div>
                <div className="flex justify-between">
                  <span>Design</span>
                  <span className="font-bold">50/100</span>
                </div>
                <div className="flex justify-between">
                  <span>Credibility</span>
                  <span className="font-bold">50/100</span>
                </div>
              </div>
              <h4 className="font-bold mt-4 mb-2">Summary</h4>
              <p className="text-sm mb-2">The landing page demonstrates a strong value proposition by emphasizing AI-driven transcription and summarization capabilities. The headline "Turn .mp4 into text to get info easily" is direct and effective. However, the page lacks visual hierarchy, prominent CTAs, and trust markers like reviews or customer logos.</p>
              <h4 className="font-bold mt-4 mb-2">Main Recommendations</h4>
              <ul className="list-disc list-inside text-sm">
                <li>Add more testimonials or customer reviews to build trust.</li>
                <li>Improve CTA visibility by using contrasting colors and more specific action verbs.</li>
                <li>Enhance section breaks with more whitespace and visual cues to guide reading flow.</li>
              </ul>
            </div>

            <div className="col-span-full bg-gray-50/80 border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-4">SEO Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <FiLink className="text-orange-500" />
                      <h4 className="font-bold">Links & Navigation</h4>
                    </div>
                    <p className="text-sm text-gray-600">Score: 0/100</p>
                    <p className="text-sm">Fix the broken links to ensure a smooth user experience and proper page indexing.</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <FiAlertCircle className="text-orange-500" />
                      <h4 className="font-bold">Indexation & Robots.txt</h4>
                    </div>
                    <p className="text-sm text-gray-600">Score: 0/100</p>
                    <p className="text-sm">Consider adding hreflang tags if your content is available in multiple languages.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <FiCheckCircle className="text-orange-500" />
                      <h4 className="font-bold">Structured Data</h4>
                    </div>
                    <p className="text-sm text-gray-600">Score: 0/100</p>
                    <p className="text-sm">Consider adding structured data to enhance how your content appears in search results.</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <FiCheckCircle className="text-orange-500" />
                      <h4 className="font-bold">Meta & SEO Tags</h4>
                    </div>
                    <p className="text-sm text-gray-600">Score: 63/100</p>
                    <p className="text-sm">Meta tags are present but could be optimized further for better search visibility.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-2 mb-3">
                  <FiTool className="text-orange-500" />
                  <h4 className="font-bold text-lg">Things to Improve in SEO</h4>
                </div>
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li>Fix all broken links to improve user experience and search engine crawling.</li>
                  <li>Implement proper hreflang tags if you have multi-language content.</li>
                  <li>Add relevant structured data (Schema.org) to enhance search result appearance.</li>
                  <li>Optimize meta titles and descriptions for better click-through rates.</li>
                  <li>Improve internal linking structure to distribute page authority.</li>
                  <li>Ensure all images have descriptive alt text for better accessibility and SEO.</li>
                  <li>Optimize page load speed, especially for mobile devices.</li>
                  <li>Create a comprehensive XML sitemap and submit it to search engines.</li>
                  <li><strong>Implement a consistent blogging strategy to improve SEO performance.</strong></li>
                </ul>
              </div>
              <div className="mt-6 bg-orange-100 border border-orange-300 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <FiEdit className="text-orange-500" />
                  <h4 className="font-bold text-lg">Boost Your SEO with Our Blog Service</h4>
                </div>
                <p className="text-sm mb-2">
                  <strong>Blogs are crucial for SEO success.</strong> They help you:
                </p>
                <ul className="list-disc list-inside text-sm space-y-1 mb-4">
                  <li>Increase organic traffic</li>
                  <li>Improve search engine rankings</li>
                  <li>Establish your brand as an industry authority</li>
                  <li>Create opportunities for backlinks</li>
                  <li>Engage your audience and increase time on site</li>
                </ul>
                <p className="text-sm font-bold mb-2">We offer a premium blog service to supercharge your SEO efforts:</p>
                <ul className="list-none text-sm space-y-1 mb-4">
                  <li>✅ 10 high-quality, SEO-optimized blog posts per month</li>
                  <li>✅ Tailored content strategy aligned with your business goals</li>
                  <li>✅ Expert writers with industry knowledge</li>
                  <li>✅ Only $399/month</li>
                </ul>
                <p className="text-sm font-bold">
                  Ready to elevate your SEO game? DM us on Twitter to get started!
                </p>
              </div>
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
                  After 30 days, if you face any issues, message us on Twitter. We will help you out as much as we can!
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
                Learn More
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
                Learn More
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
                Learn More
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
                  src="/123456.png" 
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
                  src="/chris.png" 
                  alt="ProductHunt submission"
                  fill
                  className="object-contain"
                />
              </div>
             
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="relative h-[400px]">
                <Image 
                  src="/micro.png" 
                  alt="BetaList confirmation"
                  fill
                  className="object-contain"
                />
              </div>
              
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="relative h-[400px]">
                <Image 
                  src="/somuch.png" 
                  alt="HackerNews submission"
                  fill
                  className="object-contain"
                />
              </div>
            
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="relative h-[400px]">
                <Image 
                  src="/tiny.png" 
                  alt="TechCrunch pitch"
                  fill
                  className="object-contain"
                />
              </div>
              
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="relative h-[400px]">
                <Image 
                  src="/uniscribe.png" 
                  alt="AngelList listing"
                  fill
                  className="object-contain"
                />
              </div>
              
            </div>

           

            
          </div>
        </section>

        <div className="text-center">
          <button className="bg-gradient-to-r from-gray-600 to-orange-500 text-white px-8 py-3 rounded-lg font-bold">
            Download Full Report
          </button>
        </div>
      </main>

      <Footer/>

     
    </div>
  )
}

