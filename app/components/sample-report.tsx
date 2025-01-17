import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ReportCTA() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-blue-600 rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Confused? Dont worry, See one of our Sample Report
              </h2>
              <p className="text-lg mb-6 text-blue-100">
                Get a comprehensive overview of your startup's submission status across 200+ platforms. Boost your visibility and track your progress.
              </p>
              <Link href="/sample-report" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition duration-300">
                View Sample Report
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

