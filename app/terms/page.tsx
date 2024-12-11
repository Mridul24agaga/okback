import Link from "next/link"
import Image from "next/image"

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-4 sm:py-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/getmorepacklinks.png"
              alt="Logo"
              width={532}
              height={132}
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="/blogs" 
              className="text-gray-600 hover:text-black transition-colors text-sm sm:text-base font-bold"
            >
              Blogs
            </Link>
            <Link 
              href="/submit" 
              className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md bg-orange-500 text-white hover:bg-orange-600 transition-colors font-bold"
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
              <h1 className="text-3xl sm:text-4xl font-bold text-black">Terms and Conditions</h1>
              <p className="text-gray-600">Effective Date: December 1, 2024</p>
              <p className="text-gray-600">
                Owned and operated by MarkupX Brands Technologies Private Limited. Contact:{" "}
                <a href="mailto:founder@markupxbrands.com" className="text-orange-500 hover:underline">
                  founder@markupxbrands.com
                </a>
              </p>
            </div>

            {/* 1. Acceptance of Terms */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing or using GetMoreBacklinks.org, you agree to comply with and be bound by these Terms
                and Conditions. If you do not agree, please refrain from using our services.
              </p>
            </section>

            {/* 2. Services Provided */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">2. Services Provided</h2>
              <p className="text-gray-700">
                GetMoreBacklinks.org offers backlink-building services to improve your website's online visibility.
                While we strive for accuracy and reliability, results may vary depending on the nature of your website
                and directories.
              </p>
            </section>

            {/* 3. User Responsibilities */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">3. User Responsibilities</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Ensure that your submissions comply with legal, ethical, and regulatory standards.</li>
                <li>Provide accurate and up-to-date information.</li>
                <li>Do not misuse the service for spam, illegal, or malicious activities.</li>
              </ul>
            </section>

            {/* 4. Payment and Refund Policy */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">4. Payment and Refund Policy</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Payments must be made in advance to access our services.</li>
                <li>
                  Refunds are only provided if we cannot deliver the promised services within 7 days of
                  receiving complete information from you.
                </li>
              </ul>
            </section>

            {/* 5. Data Security */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">5. Data Security</h2>
              <p className="text-gray-700">
                We implement industry-standard security protocols to safeguard your information. However, no
                method is 100% secure. You agree to use our services at your own risk.
              </p>
            </section>

            {/* 6. Third-Party Links */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">6. Third-Party Links</h2>
              <p className="text-gray-700">
                Our website may include links to third-party websites. We are not responsible for their content or
                privacy practices. We encourage you to review their terms and policies before interacting with them.
              </p>
            </section>

            {/* 7. Limitation of Liability */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">7. Limitation of Liability</h2>
              <p className="text-gray-700">
                GetMoreBacklinks.org and MarkupX Brands Technologies Private Limited are not liable for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Any indirect, incidental, or consequential damages arising from service usage.</li>
                <li>Losses due to delays, errors, or omissions in the provided services.</li>
              </ul>
            </section>

            {/* 8. Intellectual Property */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">8. Intellectual Property</h2>
              <p className="text-gray-700">
                All content on GetMoreBacklinks.org, including text, graphics, logos, and software, is owned by
                MarkupX Brands Technologies Private Limited and protected by applicable laws. You may not copy,
                reproduce, or distribute this content without prior permission.
              </p>
            </section>

            {/* 9. Modifications to Terms */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">9. Modifications to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to update these terms at any time. Changes will be posted on this page, and
                continued use of the services constitutes acceptance of the updated terms.
              </p>
            </section>

            {/* 10. Governing Law */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">10. Governing Law</h2>
              <p className="text-gray-700">
                These terms shall be governed by the laws of [Your Country/State]. Any disputes shall be resolved in
                the courts of [Your Jurisdiction].
              </p>
            </section>

            {/* 11. Contact Us */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-black">11. Contact Us</h2>
              <p className="text-gray-700">
                For any questions or concerns regarding these terms, contact us at{" "}
                <a href="mailto:founder@markupxbrands.com" className="text-orange-500 hover:underline">
                  founder@markupxbrands.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

