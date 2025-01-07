'use client'

import { Twitter, Linkedin, Send } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsClient(true)
  }, [])

  const scrollTo = (id: string) => {
    if (pathname === '/') {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      } else {
        console.warn(`Element with id "${id}" not found`)
      }
    }
  }

  return (
    <footer className="bg-white text-gray-600 pt-16 pb-0 px-4 sm:px-6 lg:px-8 relative">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-200"></div>
      
      {/* Orange to white gradient at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-200 to-white" style={{ bottom: '-32px' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Logo and Description Section */}
          <div className="lg:col-span-4">
            <div className="space-y-8">
              {/* Logo */}
              <div className="h-10 w-auto">
                <Image
                  src="/backlinkai.png"
                  alt="Company Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              
              <p className="text-gray-600 leading-relaxed">
              Drive instant traffic to your site and save days of effort with a single click. Get your AI startup listed on 100+ platforms within just 7 days!
              </p>

              <div className="flex space-x-4">
                <Link href="https://x.com/peterliwin5" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Product Section */}
              <div>
                <h3 className="text-gray-900 font-semibold mb-4">Product</h3>
                <ul className="space-y-3">
                  {isClient ? (
                    <>
                      <li>
                        {pathname === '/' ? (
                          <button onClick={() => scrollTo('boost')} className="hover:text-gray-900 transition-colors">Boost</button>
                        ) : (
                          <Link href="/#boost" className="hover:text-gray-900 transition-colors">Boost</Link>
                        )}
                      </li>
                      <li>
                        {pathname === '/' ? (
                          <button onClick={() => scrollTo('pricing')} className="hover:text-gray-900 transition-colors">Pricing</button>
                        ) : (
                          <Link href="/#pricing" className="hover:text-gray-900 transition-colors">Pricing</Link>
                        )}
                      </li>
                      <li>
                        {pathname === '/' ? (
                          <button onClick={() => scrollTo('whyus?')} className="hover:text-gray-900 transition-colors">Why Us?</button>
                        ) : (
                          <Link href="/#whyus" className="hover:text-gray-900 transition-colors">Why Us?</Link>
                        )}
                      </li>
                    </>
                  ) : (
                    <>
                      <li><Link href="/#boost" className="hover:text-gray-900 transition-colors">Boost</Link></li>
                      <li><Link href="/#whyus?" className="hover:text-gray-900 transition-colors">Why Us?</Link></li>
                      <li><Link href="/#pricing" className="hover:text-gray-900 transition-colors">Pricing</Link></li>
                    </>
                  )}
                </ul>
              </div>

              

              {/* Company Section */}
              <div>
              <div className="mt-6">
                  <h4 className="text-gray-900 font-semibold mb-2">Company</h4>
                  <ul className="space-y-2">
                    <li><a href="/privacy-policy" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                    <li><a href="/terms" className="hover:text-gray-900 transition-colors">Terms and Conditions</a></li>

                  </ul>
                </div>

                {/* Contact Email Addresses */}
                <div className="mt-6">
                  <h4 className="text-gray-900 font-semibold mb-2">Contact Us</h4>
                  <ul className="space-y-2">
                    <li><a href="mailto:lewinpeter07@gmail.com" className="hover:text-gray-900 transition-colors">lewinpeter07@gmail.com</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-sm text-gray-500">
            © 2025 BacklinkAI. All rights reserved.
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-green-600">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

