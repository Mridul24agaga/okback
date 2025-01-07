import Link from "next/link"
import Image from "next/image"
import type { Metadata } from 'next'
import Footer from "../components/footer"
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms and Conditions | Backlink AI',
  description: 'Boost your online presence with Backlink AI, the #1 AI-powered directory submission platform. Automate and optimize your websites directory listings for better SEO and increased traffic. Try it today!',
  openGraph: {
    title: 'Terms and Conditions | Backlink AI',
    description: 'Boost your online presence with Backlink AI, the #1 AI-powered directory submission platform. Automate and optimize your websites directory listings for better SEO and increased traffic. Try it today!',
    url: 'https://backlinkai.tech/terms-and-conditions',
    siteName: 'Backlink AI',
    images: [
      {
        url: 'ogg.png',
        width: 1200,
        height: 630,
        alt: 'Backlink AI Terms and Conditions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions | Backlink AI',
    description: 'Boost your online presence with Backlink AI, the #1 AI-powered directory submission platform. Automate and optimize your websites directory listings for better SEO and increased traffic. Try it today!',
    images: ['ogg.png'],
  },
  alternates: {
    canonical: 'https://backlinkai.tech/terms',
  },
}

export default function TermsAndConditions() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms and Conditions | Backlink AI",
    "description": "Boost your online presence with Backlink AI, the #1 AI-powered directory submission platform. Automate and optimize your websites directory listings for better SEO and increased traffic. Try it today!",
    "url": "https://backlinkai.tech/terms-and-conditions",
    "inLanguage": "en-US",
    "publisher": {
      "@type": "Organization",
      "name": "Backlink AI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://backlinkai.tech/logo.png"
      }
    },
    "datePublished": "2024-12-01",
    "dateModified": "2024-12-01"
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-3xl sm:text-4xl font-bold text-black">Terms and Conditions</h1>
              <p className="text-gray-600">Effective Date: January 7, 2025</p>
            </div>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing or using Backlink AI, you agree to comply with and be bound by these Terms
                and Conditions. If you do not agree, please refrain from using our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">2. Services Provided</h2>
              <p className="text-gray-700">
                Backlink AI offers AI-powered directory submission services to improve your website's online visibility.
                While we strive for accuracy and reliability, results may vary depending on the nature of your website
                and directories.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">3. User Responsibilities</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Ensure that your submissions comply with legal, ethical, and regulatory standards.</li>
                <li>Provide accurate and up-to-date information.</li>
                <li>Do not misuse the service for spam, illegal, or malicious activities.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">4. Payment and Refund Policy</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Payments must be made in advance to access our services.</li>
                <li>
                  Backlink AI does not offer refunds for any of its services. All sales are final.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">5. Data Security</h2>
              <p className="text-gray-700">
                We implement industry-standard security protocols to safeguard your information. However, no
                method is 100% secure. You agree to use our services at your own risk.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">6. Third-Party Links</h2>
              <p className="text-gray-700">
                Our website may include links to third-party websites. We are not responsible for their content or
                privacy practices. We encourage you to review their terms and policies before interacting with them.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">7. Limitation of Liability</h2>
              <p className="text-gray-700">
                Backlink AI is not liable for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Any indirect, incidental, or consequential damages arising from service usage.</li>
                <li>Losses due to delays, errors, or omissions in the provided services.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">8. Intellectual Property</h2>
              <p className="text-gray-700">
                All content on Backlink AI, including text, graphics, logos, and software, is owned by
                MarkupX Brands Technologies Private Limited and protected by applicable laws. You may not copy,
                reproduce, or distribute this content without prior permission.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">9. Modifications to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to update these terms at any time. Changes will be posted on this page, and
                continued use of the services constitutes acceptance of the updated terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">10. Governing Law</h2>
              <p className="text-gray-700">
                These terms shall be governed by the laws of [Your Country/State]. Any disputes shall be resolved in
                the courts of [Your Jurisdiction].
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">11. Contact Us</h2>
              <p className="text-gray-700">
                For any questions or concerns regarding these terms, contact us at{" "}
                <a href="mailto:lewinpeter07@gmail.com" className="text-blue-500 hover:underline">
                lewinpeter07@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

