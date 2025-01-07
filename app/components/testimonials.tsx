'use client'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

interface DomainCardProps {
  url: string
  rating: number
  backlinks: string
  dofollow: number
  increase: number
}

const DomainCard = ({ url, rating, backlinks, dofollow, increase }: DomainCardProps) => {
  return (
    <div className="relative bg-white rounded-xl p-4 shadow-lg transform hover:-translate-y-1 transition-transform duration-300 border border-blue-200 w-full max-w-[280px] mx-auto">
      {/* Increase Badge */}
      <div className="absolute -top-3 -right-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs sm:text-sm font-medium z-10">
        +{increase}
      </div>
      
      <div className="text-xs sm:text-sm text-gray-800 mb-3 truncate">{url}</div>
      
      <div className="flex items-center justify-between gap-4 sm:gap-6">
        <div className="w-14 sm:w-16">
          <CircularProgressbar
            value={rating}
            maxValue={100}
            text={`${rating}`}
            styles={buildStyles({
              textSize: '28px',
              pathColor: `rgba(59, 130, 246, ${rating / 100})`, // Blue
              textColor: '#1a1a1a',
              trailColor: '#e6f0ff', // Light blue
            })}
          />
          <div className="text-[10px] sm:text-xs text-gray-600 text-center mt-1">Domain Rating</div>
        </div>
        
        <div className="flex flex-col items-end">
          <div className="text-lg sm:text-xl font-bold text-blue-600">{backlinks}</div>
          <div className="text-[10px] sm:text-xs text-gray-600">Backlinks</div>
          <div className="text-[10px] sm:text-xs text-blue-500 mt-1">{dofollow}% dofollow</div>
        </div>
      </div>
    </div>
  )
}

export default function DomainRatingSection() {
  const domains = [
    { url: 'Skillop', rating: 48, backlinks: '2.8K', dofollow: 85, increase: 28 },
    { url: 'Cattle Guru', rating: 56, backlinks: '4.7K', dofollow: 84, increase: 46 },
    { url: 'Kraya', rating: 30, backlinks: '138', dofollow: 56, increase: 30 },
    { url: 'workhq', rating: 35, backlinks: '577', dofollow: 49, increase: 29 },
    { url: 'mvpwizards', rating: 42, backlinks: '993', dofollow: 97, increase: 42 },
  ]

  return (
    <section id="boost" className="bg-white py-12 sm:py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-blue-600 text-sm font-medium mb-4">
             Boost Domain Rating
          </p>
          <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Successful founders been using it for years
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            No spammy links. I treat your product as my own.
          </p>
        </div>

        <div className="relative">
          {/* Mobile Layout */}
          <div className="sm:hidden space-y-6">
            {domains.map((domain, index) => (
              <DomainCard key={index} {...domain} />
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden sm:block">
            {/* First Row */}
            <div className="flex justify-center gap-6 mb-6">
              <div className="w-full max-w-xs transform -rotate-6">
                <DomainCard {...domains[0]} />
              </div>
              <div className="w-full max-w-xs transform rotate-3">
                <DomainCard {...domains[1]} />
              </div>
              <div className="w-full max-w-xs transform -rotate-3">
                <DomainCard {...domains[2]} />
              </div>
            </div>
            
            {/* Second Row */}
            <div className="flex justify-center gap-6 -mt-4">
              <div className="w-full max-w-xs transform rotate-6">
                <DomainCard {...domains[3]} />
              </div>
              <div className="w-full max-w-xs transform -rotate-6">
                <DomainCard {...domains[4]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

