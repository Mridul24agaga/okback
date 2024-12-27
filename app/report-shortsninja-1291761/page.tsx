'use client'

import Image from 'next/image'
import { websiteList } from './website-list'
import { useState } from 'react'
import { FiClock, FiTrendingUp, FiAlertCircle, FiCheckCircle, FiExternalLink, FiLink, FiTool, FiEdit, FiDownload, FiLoader } from 'react-icons/fi'
import Footer from '../components/footer'

export default function ReportPage() {
  const [visibleWebsites, setVisibleWebsites] = useState(50)
  const [marketingPlan, setMarketingPlan] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isReportGenerated, setIsReportGenerated] = useState(false);

  const loadMore = () => {
    setVisibleWebsites(prev => Math.min(prev + 50, websiteList.length))
  }

  const handleDownloadDetailedReport = () => {
    const link = document.createElement('a');
    link.href = '/keyword-gap.pdf';
    link.download = 'keyword-gap.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleDownloadSEOReport = () => {
    const link = document.createElement('a');
    link.href = '/domain-overview.pdf';
    link.download = 'domain-overview.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleSEOIssuesReport = () => {
    const link = document.createElement('a');
    link.href = '/seo-issues.pdf';
    link.download = 'seo-issues.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleSiteAudit = () => {
    const link = document.createElement('a');
    link.href = '/site-audit.pdf'; // Placeholder URL
    link.download = 'site-audit.pdf'; // Placeholder filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleContentOpportunitiesReport = () => {
    const link = document.createElement('a');
    link.href = '/content-opportunities.pdf';
    link.download = 'content-opportunities.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePageStatus = () => {
    const link = document.createElement('a');
    link.href = '/page-status.pdf';
    link.download = 'page-status.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGenerateMarketingPlan = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsGenerating(true)
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 3000))
    setIsGenerating(false)
    setIsGenerated(true)
  }

  const handleDownloadMarketingPlan = () => {
    const blob = new Blob([marketingPlan], { type: 'application/pdf' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'marketing-plan.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleGenerateMarketingReport = async () => {
    setIsAnalyzing(true);
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsAnalyzing(false);
    setIsReportGenerated(true);
  };

  const handleDownloadMarketingReport = () => {
    const link = document.createElement('a');
    link.href = '/shorts-ninja.pdf';
    link.download = 'shorts-ninja.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="bg-gradient-to-r from-orange-100 to-orange-200 border-b-2 border-orange-500 py-6">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Image src="/getmorepacklinks.png" alt="Company Logo" width={70} height={50} />
          <h1 className="text-4xl font-bold text-gray-800">
            <span className="text-orange-500 mt-15">Submission</span> Report
          </h1>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <section className="bg-white border border-orange-200 rounded-lg p-6">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              <span className="text-orange-500">Report</span> Overview
            </h2>
            <p className="text-lg mb-4">This report provides a comprehensive overview of your startup's submission status across various platforms. It includes submission guidelines, a list of submitted websites, and evidence of submissions.</p>
            <p className="text-lg mb-4">Use this report to track your progress and ensure maximum visibility for your startup.</p>
          </section>

          <section className="bg-white border border-orange-200 rounded-lg p-6">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              <span className="text-orange-500">Submission</span> Guidelines
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="mr-4 mt-1">
                  <FiClock className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Processing Time</h3>
                  <p className="text-lg mb-4">Expect results to appear within 30-60 days after submission. Be patient and use this time to refine your product.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1">
                  <FiTrendingUp className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Maximize Visibility</h3>
                  <p className="text-lg mb-4">Regularly update your product information and engage with the community to increase your chances of being featured.</p>
                </div>
              </li>
            </ul>
          </section>
        </div>

        <section className="bg-white border border-orange-200 rounded-lg p-6 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            <span className="text-orange-500">Submitted</span> Websites
          </h2>
          <p className="text-lg mb-6">Your startup has been submitted to {websiteList.length} websites. This extensive list covers a wide range of platforms, increasing your chances of visibility and success.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50/80 border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2">ShortsNinja</h3>
                  <p className="text-lg mb-2 text-gray-600">Effortlessly automate your short video creation with our AI-powered platform</p>
                </div>
                <a 
                  href="https://shortsninja.com/"
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
            
            <div className="col-span-full bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-4">Domain Overview</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-md mb-2">Organic Search Overview</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Total Backlinks</span>
                        <span className="font-bold">1.3K</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Referring Domains</span>
                        <span className="font-bold">40</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Referring IPs</span>
                        <span className="font-bold">43</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-md mb-2">Top Keywords</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">viral ninja ai</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs">Pos: 29</span>
                          <span className="text-xs">Vol: 110</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">ninja automation</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs">Pos: 44</span>
                          <span className="text-xs">Vol: 30</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">boost ninja seo facebook</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs">Pos: 70</span>
                          <span className="text-xs">Vol: 1,600</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-md mb-2">Keywords by Intent</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Informational</span>
                        <span className="font-bold">55.6%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Navigational</span>
                        <span className="font-bold">22.2%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Commercial</span>
                        <span className="font-bold">0.0%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Transactional</span>
                        <span className="font-bold">22.2%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-md mb-2">Geographic Distribution</h4>
                    <p className="text-lg mb-4 text-gray-600">Primary traffic from US (53.85%), with significant presence in EU regions</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-4">
                <button
                  onClick={handleDownloadSEOReport}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded font-bold hover:opacity-90 transition-opacity flex items-center"
                >
                  <FiDownload className="mr-2" />
                  Download Detailed Report for this
                </button>
                
              </div>
            </div>

            <div className="col-span-full bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-4">Keyword Gap Analysis</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-md mb-2">Domain Comparison</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Root Domain:</span>
                      <span>https://shortninja.com/ (you)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Competitors:</span>
                      <span>copycopter.ai, autoshorts.ai, storyshot.ai</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-md mb-2">Missing Keywords</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">Keyword</th>
                          <th className="text-right py-2">Volume</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 text-lg">faceless video</td>
                          <td className="text-right py-3 px-4 text-lg">1,600</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 text-lg">story shorts ai</td>
                          <td className="text-right py-3 px-4 text-lg">590</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 text-lg">faceless video ai</td>
                          <td className="text-right py-3 px-4 text-lg">320</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 text-lg">faceless ai</td>
                          <td className="text-right py-3 px-4 text-lg">210</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 text-lg">faceless video ai</td>
                          <td className="text-right py-3 px-4 text-lg">170</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-md mb-2">Keyword Distribution</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium mb-1">Organic Keywords</p>
                      <ul className="text-sm space-y-1">
                        <li>shortninja.com: 6 keywords</li>
                        <li>copycopter.ai: 301 keywords</li>
                        <li>autoshorts.ai: 824 keywords</li>
                        <li>storyshot.ai: 144 keywords</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Intent Types</p>
                      <ul className="text-sm space-y-1">
                        <li>Informational: 55.6%</li>
                        <li>Navigational: 22.2%</li>
                        <li>Commercial: 22.2%</li>
                        <li>Transactional: 0.0%</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  onClick={handleDownloadDetailedReport}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded font-bold hover:opacity-90 transition-opacity flex items-center"
                >
                  <FiDownload className="mr-2" />
                  Download Detailed Report
                </button>
              </div>
            </div>

            <div className="col-span-full bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
              <h3 className="font-bold text-lg mb-4">Relevant Keywords for Faceless Video Generator</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "autoshorts ai", "auto shorts ai", "shorts pilot ai", "faceless videos",
                  "auto shorts", "smartshort", "faceless video", "shorts ai",
                  "short ai", "faceless ai video generator", "shorts.ai", "faceless ai",
                  "smart short ai", "smartshort ai", "faceless videos ai",
                  "faceless video ai generator free", "ai shorts", "ai faceless video generator",
                  "faceless video ai", "nullface ai", "faceless ai videos", "short videos ai",
                  "shorts ai video", "faceless ai video", "short ai video generator",
                  "faceless video free", "faceless video alternative", "short video ai generator",
                  "ai shorts generator", "ai video short generator", "ai short video generator",
                  "ai generated short", "faceless youtube channel ideas with ai",
                  "best ai short video generator", "ai video generator for tiktok",
                  "short ai generator", "tiktok video ai", "faceless youtube shorts",
                  "ai video generator tiktok", "ai video shorts", "short video generator ai",
                  "ai shorts video", "create ai videos for tiktok", "videos to shorts ai",
                  "ai short video generator free", "free ai video generator for tiktok",
                  "ai short shorts", "ai short generator free", "youtube shorts generator ai",
                  "create shorts with ai", "ai video generator youtube",
                  "ai generated video for youtube", "ai video on youtube",
                  "youtube faceless channel ideas", "faceless youtube automation channel ideas",
                  "faceless automation youtube channel", "faceless video content",
                  "faceless content creation ideas", "free faceless content",
                  "free faceless videos", "faceless content videos",
                  "faceless youtube channel ideas 2024", "faceless video generator",
                  "faceless youtube channel ideas", "faceless ai video generator free",
                  "viral video generator", "faceless automation", "youtube auto video",
                  "youtube link to video generator", "create ai videos for youtube",
                  "create a free ai video", "ai youtube short maker",
                  "free ai short video generator", "free ai shorts generator",
                  "youtube to shorts ai", "ai youtube shorts", "free ai generated videos",
                  "youtube clip ai", "tiktok shorts on youtube"
                ].map((keyword, index) => (
                  <div key={index} className="bg-white p-2 rounded shadow text-sm">
                    {keyword}
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-full bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
              <h3 className="font-bold text-lg mb-4">Technical SEO Analysis</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold">63</div>
                  <div className="text-sm text-gray-600">Domain Score</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold">24</div>
                  <div className="text-sm text-gray-600">Pages Discovered</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold">44</div>
                  <div className="text-sm text-gray-600">SEO Issues</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold">59</div>
                  <div className="text-sm text-gray-600">Backlinks</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold mb-2">Site Performance</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Load Time</span>
                      <span className="font-bold">6.07s</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Interactivity</span>
                      <span className="font-bold">18.00s</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Visual Stability</span>
                      <span className="font-bold">0.01</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <button
                  onClick={handleSiteAudit}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  <FiDownload className="w-5 h-5" />
                  Download Full Technical SEO Report
                </button>
              </div>
            </div>

            <div className="col-span-full bg-teal-50 border border-teal-200 rounded-lg p-4 mt-4">
              <h3 className="font-bold text-lg mb-4">SEO Issues Discovered</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gradient-to-r from-gray-100 to-gray-200">
                    <tr>
                      <th className="text-left py-2 px-4">SEO Issues</th>
                      <th className="text-center py-2 px-4">Difficulty</th>
                      <th className="text-center py-2 px-4">SEO Impact</th>
                      <th className="text-right py-2 px-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 text-lg">
                        <span className="text-orange-500">7 pages</span> have a low word count
                      </td>
                      <td className="text-center py-3 px-4 text-lg">Moderate</td>
                      <td className="text-center py-3 px-4 text-lg">High</td>
                      <td className="text-right py-3 px-4 text-lg">
                        <a href="#" className="text-orange-500 hover:underline inline-flex items-center">
                          View Details
                          <FiExternalLink className="ml-1 w-4 h-4" />
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 text-lg">
                        <span className="text-orange-500">8 pages</span> with duplicate meta descriptions
                      </td>
                      <td className="text-center py-3 px-4 text-lg">Moderate</td>
                      <td className="text-center py-3 px-4 text-lg">High</td>
                      <td className="text-right py-3 px-4 text-lg">
                        <a href="#" className="text-orange-500 hover:underline inline-flex items-center">
                          View Details
                          <FiExternalLink className="ml-1 w-4 h-4" />
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 text-lg">
                        <span className="text-orange-500">6 pages</span> with duplicate title tags
                      </td>
                      <td className="text-center py-3 px-4 text-lg">Moderate</td>
                      <td className="text-center py-3 px-4 text-lg">High</td>
                      <td className="text-right py-3 px-4 text-lg">
                        <a href="#" className="text-orange-500 hover:underline inline-flex items-center">
                          View Details
                          <FiExternalLink className="ml-1 w-4 h-4" />
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 text-lg">
                        <span className="text-orange-500">3 pages</span> are blocked from appearing in search engines
                      </td>
                      <td className="text-center py-3 px-4 text-lg">Moderate</td>
                      <td className="text-center py-3 px-4 text-lg">High</td>
                      <td className="text-right py-3 px-4 text-lg">
                        <a href="#" className="text-orange-500 hover:underline inline-flex items-center">
                          View Details
                          <FiExternalLink className="ml-1 w-4 h-4" />
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 text-lg">
                        <span className="text-orange-500">6 pages</span> without a H1 heading
                      </td>
                      <td className="text-center py-3 px-4 text-lg">Easy</td>
                      <td className="text-center py-3 px-4 text-lg">Medium</td>
                      <td className="text-right py-3 px-4 text-lg">
                        <a href="#" className="text-orange-500 hover:underline inline-flex items-center">
                          View Details
                          <FiExternalLink className="ml-1 w-4 h-4" />
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 text-lg">
                        <span className="text-orange-500">1 page</span> with a title tag that is too long
                      </td>
                      <td className="text-center py-3 px-4 text-lg">Easy</td>
                      <td className="text-center py-3 px-4 text-lg">Medium</td>
                      <td className="text-right py-3 px-4 text-lg">
                        <a href="#" className="text-orange-500 hover:underline inline-flex items-center">
                          View Details
                          <FiExternalLink className="ml-1 w-4 h-4" />
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 text-lg">
                        <span className="text-orange-500">7 pages</span> with a title tag that is too short
                      </td>
                      <td className="text-center py-3 px-4 text-lg">Easy</td>
                      <td className="text-center py-3 px-4 text-lg">Medium</td>
                      <td className="text-right py-3 px-4 text-lg">
                        <a href="#" className="text-orange-500 hover:underline inline-flex items-center">
                          View Details
                          <FiExternalLink className="ml-1 w-4 h-4" />
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 text-lg">
                        <span className="text-orange-500">6 pages</span> with a poorly formatted URL for SEO
                      </td>
                      <td className="text-center py-3 px-4 text-lg">Easy</td>
                      <td className="text-center py-3 px-4 text-lg">Medium</td>
                      <td className="text-right py-3 px-4 text-lg">
                        <a href="#" className="text-orange-500 hover:underline inline-flex items-center">
                          View Details
                          <FiExternalLink className="ml-1 w-4 h-4" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 flex justify-center">
                <button
                  onClick={handleSEOIssuesReport}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  <FiDownload className="w-5 h-5" />
                  Download Full SEO Issues Report
                </button>
              </div>
            </div>

            <div className="col-span-full bg-pink-50 border border-pink-200 rounded-lg p-4 mt-4">
              <h3 className="font-bold text-lg mb-4">Content Opportunities</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gradient-to-r from-gray-100 to-gray-200">
                    <tr>
                      <th className="text-left py-2 px-4">Priority</th>
                      <th className="text-left py-2 px-4">Type</th>
                      <th className="text-left py-2 px-4">Opportunity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {[
                      { priority: 1, type: "SEO Issue", opportunity: "3 pages are blocked from appearing in search engines" },
                      { priority: 2, type: "New Content", opportunity: "Create content for the keyword \"what is a faceless youtube channel\"" },
                      { priority: 3, type: "New Content", opportunity: "Create content for the keyword \"top faceless youtube channel\"" },
                      { priority: 4, type: "New Content", opportunity: "Create content for the keyword \"how to post a youtube video on tiktok\"" },
                      { priority: 5, type: "New Content", opportunity: "Create content for the keyword \"how many videos a day should I post on tiktok\"" },
                      { priority: 6, type: "New Content", opportunity: "Create content for the keyword \"top faceless youtube channels\"" },
                      { priority: 7, type: "New Content", opportunity: "Create content for the keyword \"how long of a video can you send on discord\"" },
                      { priority: 8, type: "New Content", opportunity: "Create content for the keyword \"how to create a website like youtube\"" },
                      { priority: 9, type: "New Content", opportunity: "Create content for the keyword \"are faceless youtube channels worth it\"" },
                      { priority: 10, type: "New Content", opportunity: "Create content for the keyword \"how many videos should I post on tiktok\"" },
                      { priority: 11, type: "New Content", opportunity: "Create content for the keyword \"faceless youtube channels that make money\"" },
                      { priority: 12, type: "New Content", opportunity: "Create content for the keyword \"how to be a mod on tiktok\"" },
                      { priority: 13, type: "New Content", opportunity: "Create content for the keyword \"how to change your background on youtube\"" },
                      { priority: 14, type: "New Content", opportunity: "Create content for the keyword \"how to share a video from youtube to tiktok\"" },
                      { priority: 15, type: "New Content", opportunity: "Create content for the keyword \"how to post video on tiktok\"" },
                      { priority: 16, type: "New Content", opportunity: "Create content for the keyword \"what is a post on youtube\"" },
                      { priority: 17, type: "New Content", opportunity: "Create content for the keyword \"do faceless youtube channels work\"" },
                      { priority: 18, type: "New Content", opportunity: "Create content for the keyword \"how to make money with faceless youtube channel\"" },
                      { priority: 19, type: "New Content", opportunity: "Create content for the keyword \"faceless channelideas\"" },
                      { priority: 20, type: "New Content", opportunity: "Create content for the keyword \"how to post youtube video on tiktok\"" },
                      { priority: 21, type: "New Content", opportunity: "Create content for the keyword \"how long a video can you text\"" },
                      { priority: 22, type: "New Content", opportunity: "Create content for the keyword \"how to get a refund on youtube movie\"" },
                      { priority: 23, type: "New Content", opportunity: "Create content for the keyword \"most popular faceless youtube channels\"" },
                      { priority: 24, type: "New Content", opportunity: "Create content for the keyword \"what aspect ratio is youtube shorts\"" },
                      { priority: 25, type: "New Content", opportunity: "Create content for the keyword \"what ratio is youtube shorts\"" },
                      { priority: 26, type: "New Content", opportunity: "Create content for the keyword \"best day to post youtube video\"" },
                      { priority: 27, type: "New Content", opportunity: "Create content for the keyword \"can youtube play in the background\"" },
                      { priority: 28, type: "New Content", opportunity: "Create content for the keyword \"how do you make a series on tiktok\"" },
                      { priority: 29, type: "New Content", opportunity: "Create content for the keyword \"how to add credit card to youtube\"" },
                      { priority: 30, type: "New Content", opportunity: "Create content for the keyword \"add card to youtube video\"" },
                      { priority: 31, type: "New Content", opportunity: "Create content for the keyword \"why does youtube automatically open shorts\"" },
                      { priority: 32, type: "New Content", opportunity: "Create content for the keyword \"ideas for faceless youtube channel\"" },
                      { priority: 33, type: "New Content", opportunity: "Create content for the keyword \"how to link tiktok to youtube\"" },
                      { priority: 34, type: "New Content", opportunity: "Create content for the keyword \"what is youtube shorts resolution\"" },
                      { priority: 35, type: "New Content", opportunity: "Create content for the keyword \"how long video can you text\"" },
                      { priority: 36, type: "New Content", opportunity: "Create content for the keyword \"how to create a series on tiktok\"" },
                      { priority: 37, type: "New Content", opportunity: "Create content for the keyword \"making a faceless youtube channel\"" },
                      { priority: 38, type: "New Content", opportunity: "Create content for the keyword \"what is the length of youtube shorts\"" },
                      { priority: 39, type: "New Content", opportunity: "Create content for the keyword \"how to upload a video to tiktok\"" },
                      { priority: 40, type: "New Content", opportunity: "Create content for the keyword \"can I upload a video to tiktok\"" },
                      { priority: 41, type: "New Content", opportunity: "Create content for the keyword \"how to start a series on tiktok\"" },
                      { priority: 42, type: "New Content", opportunity: "Create content for the keyword \"best aspect ratio for youtube\"" },
                      { priority: 43, type: "New Content", opportunity: "Create content for the keyword \"how to do a series on tiktok\"" },
                      { priority: 44, type: "New Content", opportunity: "Create content for the keyword \"how to do video on tiktok\"" },
                      { priority: 45, type: "New Content", opportunity: "Create content for the keyword \"can I post youtube videos on tiktok\"" },
                      { priority: 46, type: "New Content", opportunity: "Create content for the keyword \"wow the hidden niche\"" },
                      { priority: 47, type: "New Content", opportunity: "Create content for the keyword \"the hidden niche wow\"" },
                      { priority: 48, type: "New Content", opportunity: "Create content for the keyword \"how to share videos from youtube to tiktok\"" },
                      { priority: 49, type: "New Content", opportunity: "Create content for the keyword \"youtube will it start\"" },
                      { priority: 50, type: "New Content", opportunity: "Create content for the keyword \"faceless youtube channel ideas with ai\"" },
                      { priority: 51, type: "New Content", opportunity: "Create content for the keyword \"how to make ai generated tiktok videos\"" },
                      { priority: 52, type: "New Content", opportunity: "Create content for the keyword \"why is all for one faceless\"" },
                      { priority: 53, type: "New Content", opportunity: "Create content for the keyword \"does tiktok pay for short videos\"" },
                      { priority: 54, type: "New Content", opportunity: "Create content for the keyword \"successful faceless youtube channels\"" },
                      { priority: 55, type: "New Content", opportunity: "Create content for the keyword \"popular faceless youtube channels\"" },
                      { priority: 56, type: "New Content", opportunity: "Create content for the keyword \"how to upload youtube shorts to tiktok\"" },
                      { priority: 57, type: "New Content", opportunity: "Create content for the keyword \"how to create ai videos for tiktok\"" },
                      { priority: 58, type: "New Content", opportunity: "Create content for the keyword \"how to text a long video\"" },
                      { priority: 59, type: "New Content", opportunity: "Create content for the keyword \"how to make a faceless tiktok account\"" },
                      { priority: 60, type: "New Content", opportunity: "Create content for the keyword \"youtube tutorials on card making\"" },
                      { priority: 61, type: "New Content", opportunity: "Create content for the keyword \"how to get a refund on tiktok\"" },
                      { priority: 62, type: "New Content", opportunity: "Create content for the keyword \"how to upload youtube video to tiktok\"" },
                      { priority: 63, type: "New Content", opportunity: "Create content for the keyword \"how to create ai video for youtube\"" },
                      { priority: 64, type: "New Content", opportunity: "Create content for the keyword \"faceless youtube channel ideas 2024\"" },
                      { priority: 65, type: "New Content", opportunity: "Create content for the keyword \"how to create series on tiktok\"" },
                      { priority: 66, type: "New Content", opportunity: "Create content for the keyword \"how to copy text from youtube video\"" },
                      { priority: 67, type: "New Content", opportunity: "Create content for the keyword \"what are faceless youtube channels\"" },
                      { priority: 68, type: "New Content", opportunity: "Create content for the keyword \"how to make series on tiktok\"" },
                      { priority: 69, type: "New Content", opportunity: "Create content for the keyword \"how to create a faceless tiktok account\"" },
                      { priority: 70, type: "New Content", opportunity: "Create content for the keyword \"how many video upload on youtube per day\"" },
                      { priority: 71, type: "New Content", opportunity: "Create content for the keyword \"youtube faceless channel ideas\"" },
                      { priority: 72, type: "New Content", opportunity: "Create content for the keyword \"youtube opening to shorts\"" },
                      { priority: 73, type: "New Content", opportunity: "Create content for the keyword \"what is a faceless instagram page\"" },
                      { priority: 74, type: "New Content", opportunity: "Create content for the keyword \"youtube app opens to shorts\"" },
                      { priority: 75, type: "New Content", opportunity: "Create content for the keyword \"how to create a website youtube\"" },
                      { priority: 76, type: "New Content", opportunity: "Create content for the keyword \"top 10 faceless youtube channel\" (optimization)" },
                      { priority: 77, type: "New Content", opportunity: "Create content for the keyword \"youtube link to video generator\"" },
                      { priority: 78, type: "New Content", opportunity: "Create content for the keyword \"tiktok how to edit posted video\"" },
                      { priority: 79, type: "New Content", opportunity: "Create content for the keyword \"how to make tiktok series\"" },
                      { priority: 80, type: "New Content", opportunity: "Create content for the keyword \"how to make faceless youtube videos\"" },
                      { priority: 81, type: "New Content", opportunity: "Create content for the keyword \"longest text message ever copy and paste\"" },
                      { priority: 82, type: "New Content", opportunity: "Create content for the keyword \"no face content creator\"" },
                      { priority: 83, type: "New Content", opportunity: "Create content for the keyword \"automated youtube channel\"" },
                      { priority: 84, type: "New Content", opportunity: "Create content for the keyword \"free short movies on youtube\"" },
                      { priority: 85, type: "New Content", opportunity: "Create content for the keyword \"youtube opens to shorts\"" },
                      { priority: 86, type: "New Content", opportunity: "Create content for the keyword \"best ai tiktok video generator\"" },
                      { priority: 87, type: "New Content", opportunity: "Create content for the keyword \"how to upload videos to tiktok\"" },
                      { priority: 88, type: "New Content", opportunity: "Create content for the keyword \"fully automated youtube channel\"" },
                      { priority: 89, type: "New Content", opportunity: "Create content for the keyword \"free background for youtube\"" },
                      { priority: 90, type: "New Content", opportunity: "Create content for the keyword \"faceless youtube channel ideas\"" },
                      { priority: 91, type: "New Content", opportunity: "Create content for the keyword \"youtube short film channel\"" },
                      { priority: 92, type: "New Content", opportunity: "Create content for the keyword \"how to preview tiktok before posting\"" },
                      { priority: 93, type: "New Content", opportunity: "Create content for the keyword \"how much is crayo.ai\"" },
                      { priority: 94, type: "New Content", opportunity: "Create content for the keyword \"video to short\"" },
                      { priority: 95, type: "New Content", opportunity: "Create content for the keyword \"make ai video for youtube\"" },
                      { priority: 96, type: "New Content", opportunity: "Create content for the keyword \"the faceless one wow\"" },
                      { priority: 97, type: "New Content", opportunity: "Create content for the keyword \"what is veed.io\"" },
                      { priority: 98, type: "New Content", opportunity: "Create content for the keyword \"change youtube background\"" },
                      { priority: 99, type: "New Content", opportunity: "Create content for the keyword \"card making tutorials youtube\"" },
                      { priority: 100, type: "New Content", opportunity: "Create content for the keyword \"how to make a faceless youtube channel\"" }
                    ].map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="py-3 px-4 text-lg text-orange-500 font-medium">#{item.priority}</td>
                        <td className="py-3 px-4 text-lg">{item.type}</td>
                        <td className="py-3 px-4 text-lg">{item.opportunity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
            </div>

            <div className="col-span-full bg-cyan-50 border border-cyan-200 rounded-lg p-4 mt-4">
              <h3 className="font-bold text-lg mb-4">Page Status Report</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gradient-to-r from-gray-100 to-gray-200">
                    <tr>
                      <th className="text-left py-2 px-4">Page</th>
                      <th className="text-right py-2 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 text-lg">
                        <div>
                          <div className="font-medium">Home - ShortNinja | AI-Powered Short Video Automation</div>
                          <div className="text-sm text-gray-500">shortsninja.com/</div>
                        </div>
                      </td>
                      <td className="text-right py-3 px-4 text-lg">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Successful (200)
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 text-lg">
                        <div>
                          <div className="font-medium">Blog - ShortNinja | AI-Powered Short Video Automation</div>
                          <div className="text-sm text-gray-500">shortsninja.com/blog/</div>
                        </div>
                      </td>
                      <td className="text-right py-3 px-4 text-lg">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Successful (200)
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 text-lg">
                        <div>
                          <div className="font-medium">How to Create Free Faceless Videos</div>
                          <div className="text-sm text-gray-500">shortsninja.com/blog/how-to-create-free-faceless-videos-effortlessly/</div>
                        </div>
                      </td>
                      <td className="text-right py-3 px-4 text-lg">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Successful (200)
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 text-lg">
                        <div>
                          <div className="font-medium">AI TikTok Video Generator: Create Viral Videos Effortlessly</div>
                          <div className="text-sm text-gray-500">shortsninja.com/blog/ai-tiktok-video-generator-create-viral-videos-effortlessly/</div>
                        </div>
                      </td>
                      <td className="text-right py-3 px-4 text-lg">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Successful (200)
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 text-lg">
                        <div>
                          <div className="font-medium">Privacy Policy - ShortNinja | AI-Powered Short Video Automation</div>
                          <div className="text-sm text-gray-500">shortsninja.com/privacy-policy/</div>
                        </div>
                      </td>
                      <td className="text-right py-3 px-4 text-lg">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Successful (200)
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 flex justify-center">
                <button
                  onClick={handlePageStatus}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  <FiDownload className="w-5 h-5" />
                  Download Full Page Status Report
                </button>
              </div>
            </div>

            <div className="col-span-full bg-orange-50 border border-orange-200 rounded-lg p-6 mt-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Generate Marketing Report for Shorts Ninja</h3>
              <p className="text-lg mb-4">Want to generate your Marketing report for Shorts Ninja? Click here:</p>
              {!isReportGenerated ? (
                <button
                  onClick={handleGenerateMarketingReport}
                  disabled={isAnalyzing}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity flex items-center gap-2 disabled:opacity-50"
                >
                  {isAnalyzing ? (
                    <>
                      <FiLoader className="animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    'Generate Marketing Report'
                  )}
                </button>
              ) : (
                <button
                  onClick={handleDownloadMarketingReport}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  <FiDownload className="mr-2" />
                  Download Marketing Report
                </button>
              )}
            </div>
            

            <div className="col-span-full">
              <div className="h-[400px] overflow-y-auto bg-gray-50/80 border border-gray-200 rounded-md p-4 mb-4">
                <ul className="space-y-2">
                  {websiteList.slice(0, visibleWebsites).map((website, index) => (
                    <li key={index}>
                      <a 
                        href={website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-black text-lg"
                      >
                        {website}
                      </a>
                    </li>
                  ))}
                </ul>
                {visibleWebsites < websiteList.length && (
                  <button 
                    onClick={loadMore} 
                    className="mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded font-bold"
                  >
                    Load More
                  </button>
                )}
              </div>
              <div className="bg-orange-100 border-2 border-orange-500 rounded-lg p-6 text-center">
                <p className="text-2xl font-bold mb-4 text-gray-800">⭐ IMPORTANT NOTE ⭐</p>
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

        <section className="bg-white border border-orange-200 rounded-lg p-6 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            <span className="text-orange-500">Paid</span> Directories
          </h2>
          <p className="text-lg mb-6">To further boost your visibility, consider listing your product on these premium directories:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-white border border-orange-200 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Opentools</h3>
              <p className="text-lg mb-2 text-gray-600">Launch your product to a community of early adopters and tech enthusiasts.</p>
              <a 
                href="https://www.producthunt.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline"
              >
              </a>
            </div>
            <div className="bg-white border border-orange-200 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Killer Startups</h3>
              <p className="text-lg mb-2 text-gray-600">Reach entrepreneurs and small business owners with lifetime deals.</p>
              <a 
                href="https://appsumo.com/partners/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline"
              >
              </a>
            </div>
            <div className="bg-white border border-orange-200 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Futurepedia</h3>
              <p className="text-lg mb-2 text-gray-600">Get listed on the world's largest tech marketplace for business software.</p>
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
            <p className="text-2xl font-bold mb-4 text-gray-800">🚀 Coming Soon: Directory Partnerships</p>
            <p className="text-lg">
              We're excited to announce that we'll soon be partnering with top directories to offer you exclusive listing opportunities!
            </p>
            <button className="mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-bold">
              Get Notified
            </button>
          </div>
        </section>

        <section className="bg-white border border-orange-200 rounded-lg p-6 mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            <span className="text-orange-500">Submission</span> Evidence
          </h2>
          <p className="text-lg mb-6">Below are the confirmation emails and submission receipts from various platforms:</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Startupanz.com Card */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="relative h-[400px]">
                <Image 
                  src="/shortsninja1.png" 
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
                  src="/shortsninja2.png" 
                  alt="ProductHunt submission"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="relative h-[400px]">
                <Image 
                  src="/shortsninja3.png" 
                  alt="BetaList confirmation"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="relative h-[400px]">
                <Image 
                  src="/shortsninja4.png" 
                  alt="HackerNews submission"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="relative h-[400px]">
                <Image 
                  src="/shortsninja5.png" 
                  alt="TechCrunch pitch"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="relative h-[400px]">
                <Image 
                  src="/shortsninja6.png" 
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

