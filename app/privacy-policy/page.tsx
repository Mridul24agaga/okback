import Link from "next/link"
import Image from "next/image"
import type { Metadata } from 'next'
import Footer from "../components/footer"
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Backlink AI',
  description: 'Boost your online presence with Backlink AI, the #1 AI-powered directory submission platform. Automate and optimize your websites directory listings for better SEO and increased traffic. Try it today!',
  openGraph: {
    title: 'Privacy Policy | Backlink AI',
    description: 'Boost your online presence with Backlink AI, the #1 AI-powered directory submission platform. Automate and optimize your websites directory listings for better SEO and increased traffic. Try it today!',
    url: 'https://backlinkai.tech/privacy-policy',
    siteName: 'Backlink AI',
    images: [
      {
        url: '/ogg.png',
        width: 1200,
        height: 630,
        alt: 'Backlink AI Privacy Policy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Backlink AI',
    description: 'Boost your online presence with Backlink AI, the #1 AI-powered directory submission platform. Automate and optimize your websites directory listings for better SEO and increased traffic. Try it today!',
    images: ['ogg.png'],
  },
  alternates: {
    canonical: 'https://backlinkai.tech/privacy-policy',
  },
}

export default function PrivacyPolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy | Backlink AI",
    "description": "Boost your online presence with Backlink AI, the #1 AI-powered directory submission platform. Automate and optimize your websites directory listings for better SEO and increased traffic. Try it today!",
    "url": "https://backlinkai.tech/privacy-policy",
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
              <h1 className="text-3xl sm:text-4xl font-bold text-black">Privacy Policy</h1>
              <p className="text-gray-600">Effective Date: January 7, 2025</p>
            </div>

            <section className="prose max-w-none">
              <h2 className="text-xl font-semibold text-black">Introduction</h2>
              <p className="text-gray-700">
                At Backlink AI, we value your trust. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information. By using our services, you agree to the terms outlined
                herein.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-black">Information We Collect</h2>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-black">1. Personal Information</h3>
                <p className="text-gray-700">We may collect information such as:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Billing and shipping addresses</li>
                  <li>Payment details (processed securely through third-party providers)</li>
                  <li>Account credentials</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-black">2. Non-Personal Information</h3>
                <p className="text-gray-700">This includes:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>IP addresses</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Usage statistics (e.g., page views, clicks)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-black">3. Cookies and Tracking Technologies</h3>
                <p className="text-gray-700">
                  We use cookies, web beacons, and similar technologies to enhance your user experience and gather
                  analytics.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">How We Use Your Information</h2>
              <p className="text-gray-700">We use your data for:</p>
              <ul className="list-decimal list-inside text-gray-700 space-y-2">
                <li>Providing and managing our services.</li>
                <li>Personalizing your user experience.</li>
                <li>Sending account updates, newsletters, and promotional materials.</li>
                <li>Improving our website's functionality.</li>
                <li>Complying with legal requirements.</li>
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-black">How We Share Your Information</h2>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-black">1. With Third-Party Service Providers</h3>
                <p className="text-gray-700">We may share your data with trusted providers for:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Payment processing</li>
                  <li>Email communications</li>
                  <li>Analytics and marketing tools</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-black">2. For Legal Compliance</h3>
                <p className="text-gray-700">
                  We may disclose information when required by law or in response to valid legal requests.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-black">3. Corporate Transactions</h3>
                <p className="text-gray-700">
                  In case of a merger, acquisition, or sale, your data may be transferred to involved parties.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">Data Security</h2>
              <p className="text-gray-700">
                We employ industry-standard encryption, firewalls, and secure servers to protect your data. While
                we strive for maximum security, no method is 100% foolproof.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-black">Your Rights</h2>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-black">1. Access and Correction</h3>
                <p className="text-gray-700">You can request access to your data or ask for corrections.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-black">2. Opt-Out Options</h3>
                <p className="text-gray-700">
                  You can unsubscribe from marketing emails or manage cookies via browser settings.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-black">3. Data Deletion</h3>
                <p className="text-gray-700">
                  You may request account deletion by contacting{" "}
                  <a href="mailto:lewinpeter07@gmail.com" className="text-blue-500 hover:underline">
                  lewinpeter07@gmail.com
                  </a>
                  .
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">Cookies and Tracking</h2>
              <p className="text-gray-700">We use cookies to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Remember user preferences.</li>
                <li>Collect analytics for service improvement.</li>
                <li>Offer targeted advertisements.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                You can adjust your browser settings to refuse cookies. However, some features may not function
                properly without them.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">Data Retention</h2>
              <p className="text-gray-700">
                We retain your information for as long as needed to provide services or comply with legal
                obligations. Once the data is no longer necessary, it is securely deleted or anonymized.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy periodically. Changes will be posted on this page, and the
                "Effective Date" will reflect the update. Continued use of our services constitutes acceptance of any
                changes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">Refund Policy</h2>
              <p className="text-gray-700">
                Please note that Backlink AI does not offer refunds for any of its services. All sales are final.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out to us
                at{" "}
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

