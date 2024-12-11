import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Linkedin, X } from 'lucide-react'
import { BsTiktok } from "react-icons/bs"

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white relative">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="space-y-6">
            <Image
              src="/getmorepacklinks.png"
              alt="Logo"
              width={250}
              height={62}
              className="h-10 w-auto"
            />
            <p className="text-gray-600 text-base leading-relaxed max-w-sm font-semibold">
              Our directory lists the best marketing tools that help entrepreneurs and marketers work smarter and faster.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.linkedin.com/in/krissmann/"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">Linkedin</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-black font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/submit" className="text-gray-600 hover:text-orange-500 transition-colors text-base font-semibold">
                  Submit Your Directory
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Tools */}
          <div>
            <h3 className="text-black font-bold text-lg mb-4">Our Tools</h3>
            <ul className="space-y-3">
              <li>
                <Link href="https://indiehackerop.com/" className="text-gray-600 hover:text-orange-500 transition-colors text-base font-semibold">
                  IndiehackerOp
                </Link>
              </li>
              <li>
                <Link href="https://nextboilerplate.com/" className="text-gray-600 hover:text-orange-500 transition-colors text-base font-semibold">
                  NextBoilerPlate
                </Link>
              </li>
              <li>
                <Link href="https://anonymousmail.fun/" className="text-gray-600 hover:text-orange-500 transition-colors text-base font-semibold">
                  AnonymousMail
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact and Legal */}
          <div>
            <h3 className="text-black font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-2 mb-6">
              <Link
                href="mailto:founder@markupxbrands.com"
                className="text-gray-600 hover:text-orange-500 transition-colors text-base font-semibold block"
              >
                founder@markupxbrands.com
              </Link>
              <Link
                href="mailto:hi@mridulthareja.com"
                className="text-gray-600 hover:text-orange-500 transition-colors text-base font-semibold block"
              >
                hi@mridulthareja.com
              </Link>
            </div>
            <h3 className="text-black font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-orange-500 transition-colors text-base font-semibold">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-orange-500 transition-colors text-base font-semibold">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8">
          <p className="text-gray-600 text-base text-center font-semibold">
            © 2024 AI Marketing Directory. All rights reserved. Licensed under MarkupX Technologies.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-orange-100/50 to-transparent pointer-events-none" />
    </footer>
  )
}

