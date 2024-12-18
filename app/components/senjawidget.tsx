'use client'

import Script from 'next/script'

export default function SenjaWidget() {
  return (
    <section className="bg-white py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <Script
          src="https://widget.senja.io/widget/bf22a9bc-9c5b-4267-9125-006d3700196b/platform.js"
          strategy="afterInteractive"
        />
        <div 
          className="senja-embed" 
          data-id="bf22a9bc-9c5b-4267-9125-006d3700196b" 
          data-mode="shadow" 
          data-lazyload="false" 
          style={{ display: 'block' }}
        />
      </div>
      <Script
          src="https://widget.senja.io/widget/7bf7ed8c-e190-427e-b4db-74c1a2958766/platform.js"
          strategy="afterInteractive"
        />
    </section>
  )
}

