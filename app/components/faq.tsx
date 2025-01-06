'use client'

import { useState } from 'react'
import { ChevronDown, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'

const faqs = [
  {
    question: "What is Backlink AI?",
    answer: "Backlink AI is a service that helps website owners and digital marketers acquire high-quality backlinks to improve their site's search engine rankings. We use advanced AI-driven strategies to secure relevant, authoritative links that boost your website's domain authority and organic traffic."
  },
  {
    question: "Why Backlink AI and not other similar services?",
    answer: "Backlink AI stands out due to our commitment to quality, transparency, and results. We focus on acquiring natural, contextual backlinks from reputable sources, ensuring long-term SEO benefits. Our proprietary AI technology and experienced team allow us to deliver superior results compared to other services, often at a more competitive price point."
  },
  {
    question: "Will I receive any kind of report?",
    answer: "Yes, absolutely. We provide detailed monthly reports that include information about each backlink acquired, such as the linking domain's authority, the specific page where the link is placed, and the anchor text used. These reports give you full visibility into our work and allow you to track the progress of your backlink profile."
  },
  {
    question: "How long does it take to see results?",
    answer: "The timeline for seeing results can vary depending on factors such as your website's current authority, the competitiveness of your industry, and the scope of our backlink campaign. However, most clients start noticing improvements in their search engine rankings within 2-3 months. For newer websites or those in highly competitive niches, it may take 4-6 months to see significant changes."
  },
  {
    question: "What if I don't want to submit to a specific directory?",
    answer: "We understand that you may have preferences about where your website is listed. If there's a specific directory or type of website you'd prefer not to be associated with, simply let us know. We'll exclude those from our link-building efforts and focus on alternatives that align with your preferences and goals."
  },
  {
    question: "I have another question. How can I contact you?",
    answer: "We're always happy to answer any questions you might have. You can reach out to us via email at lewinpeter07@gmail.com, or use the contact form on our website. For quicker responses, you can also connect with us on Twitter. Our customer support team typically responds within 24 hours on business days."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <span className="text-blue-600 font-medium">FAQ</span>
            <h2 className="text-4xl font-bold mt-2 mb-6">Got any questions?</h2>
            <p className="text-gray-600 mb-4">
              Reach out to me on{' '}
              ,{' '}
              <Link 
                href="https://x.com/peterliwin5" 
                className="text-blue-600 hover:underline inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
                <Twitter className="w-4 h-4 ml-1" />
              </Link>
              , or by{' '}
              <Link 
                href="mailto:lewinpeter07@gmail.com" 
                className="text-blue-600 hover:underline inline-flex items-center"
              >
                Email
                <Mail className="w-4 h-4 ml-1" />
              </Link>
              .
            </p>
            <p className="text-gray-600 flex items-center">
              Or find an answer in the FAQ below 👇
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border-2 border-gray-100 rounded-2xl px-6 py-4"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-start text-left"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold pr-4">
                    {index + 1}. {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 flex-shrink-0 mt-1 transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div 
                  id={`faq-answer-${index}`}
                  className={`grid transition-all duration-200 ease-in-out ${
                    openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

