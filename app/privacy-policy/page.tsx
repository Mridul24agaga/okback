"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export default function PrivacyPolicy() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={containerVariants}
      className="min-h-screen bg-[#0A0A0A]"
    >
      {/* Header */}
      <header className="container mx-auto px-4 py-4 sm:py-6 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/getmorebacklinks.png"
              alt="Logo"
              width={532}
              height={132}
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="/blogs" 
              className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base font-bold"
            >
              Blogs
            </Link>
            <Link 
              href="/submit" 
              className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors font-bold"
            >
              Submit Your Directory
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {/* Title Section */}
            <div className="text-center space-y-4">
              <h1 className="text-3xl sm:text-4xl font-bold text-white">Privacy Policy</h1>
              <p className="text-gray-400">Effective Date: December 1, 2024</p>
              <p className="text-gray-400">
                Owned and operated by MarkupX Brands Technologies Private Limited. Contact:{" "}
                <a href="mailto:founder@markupxbrands.com" className="text-[#00CED1] hover:underline">
                  founder@markupxbrands.com
                </a>
              </p>
            </div>

            {/* Introduction */}
            <section className="prose prose-invert max-w-none">
              <h2 className="text-xl font-semibold text-white">Introduction</h2>
              <p className="text-gray-300">
                At GetMoreBacklinks.org, we value your trust. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information. By using our services, you agree to the terms outlined
                herein.
              </p>
            </section>

            {/* Information Collection */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-white">Information We Collect</h2>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">1. Personal Information</h3>
                <p className="text-gray-300">We may collect information such as:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Billing and shipping addresses</li>
                  <li>Payment details (processed securely through third-party providers)</li>
                  <li>Account credentials</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">2. Non-Personal Information</h3>
                <p className="text-gray-300">This includes:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>IP addresses</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Usage statistics (e.g., page views, clicks)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">3. Cookies and Tracking Technologies</h3>
                <p className="text-gray-300">
                  We use cookies, web beacons, and similar technologies to enhance your user experience and gather
                  analytics.
                </p>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">How We Use Your Information</h2>
              <p className="text-gray-300">We use your data for:</p>
              <ul className="list-decimal list-inside text-gray-300 space-y-2">
                <li>Providing and managing our services.</li>
                <li>Personalizing your user experience.</li>
                <li>Sending account updates, newsletters, and promotional materials.</li>
                <li>Improving our website's functionality.</li>
                <li>Complying with legal requirements.</li>
              </ul>
            </section>

            {/* How We Share Your Information */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-white">How We Share Your Information</h2>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">1. With Third-Party Service Providers</h3>
                <p className="text-gray-300">We may share your data with trusted providers for:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Payment processing</li>
                  <li>Email communications</li>
                  <li>Analytics and marketing tools</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">2. For Legal Compliance</h3>
                <p className="text-gray-300">
                  We may disclose information when required by law or in response to valid legal requests.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">3. Corporate Transactions</h3>
                <p className="text-gray-300">
                  In case of a merger, acquisition, or sale, your data may be transferred to involved parties.
                </p>
              </div>
            </section>

            {/* Data Security */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Data Security</h2>
              <p className="text-gray-300">
                We employ industry-standard encryption, firewalls, and secure servers to protect your data. While
                we strive for maximum security, no method is 100% foolproof.
              </p>
            </section>

            {/* Your Rights */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-white">Your Rights</h2>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">1. Access and Correction</h3>
                <p className="text-gray-300">You can request access to your data or ask for corrections.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">2. Opt-Out Options</h3>
                <p className="text-gray-300">
                  You can unsubscribe from marketing emails or manage cookies via browser settings.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">3. Data Deletion</h3>
                <p className="text-gray-300">
                  You may request account deletion by contacting{" "}
                  <a href="mailto:founder@markupxbrands.com" className="text-[#00CED1] hover:underline">
                    founder@markupxbrands.com
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* Cookies and Tracking */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Cookies and Tracking</h2>
              <p className="text-gray-300">We use cookies to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Remember user preferences.</li>
                <li>Collect analytics for service improvement.</li>
                <li>Offer targeted advertisements.</li>
              </ul>
              <p className="text-gray-300 mt-4">
                You can adjust your browser settings to refuse cookies. However, some features may not function
                properly without them.
              </p>
            </section>

            {/* Data Retention */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Data Retention</h2>
              <p className="text-gray-300">
                We retain your information for as long as needed to provide services or comply with legal
                obligations. Once the data is no longer necessary, it is securely deleted or anonymized.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Changes to This Privacy Policy</h2>
              <p className="text-gray-300">
                We may update this Privacy Policy periodically. Changes will be posted on this page, and the
                "Effective Date" will reflect the update. Continued use of our services constitutes acceptance of any
                changes.
              </p>
            </section>

            {/* Contact Information */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out to us
                at{" "}
                <a href="mailto:founder@markupxbrands.com" className="text-[#00CED1] hover:underline">
                  founder@markupxbrands.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
    </motion.div>
  )
}

