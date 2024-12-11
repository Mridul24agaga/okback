import React from 'react'

interface DirectoryCardProps {
  name: string
  domainRating: number
  traffic: string
  category: string
  isBlurred: boolean
}

export const DirectoryCard: React.FC<DirectoryCardProps> = ({
  name,
  domainRating,
  traffic,
  category,
  isBlurred
}) => {
  return (
    <div className={`bg-gray-100 border border-gray-300 rounded-xl p-4 transition-all duration-300 hover:shadow-lg ${isBlurred ? 'filter blur-sm' : ''}`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-black">{name}</h3>
        <div className="flex items-center space-x-2">
          <button className="text-sm font-medium text-white bg-black px-3 py-1 rounded-full hover:bg-gray-800 transition-colors">
            Visit
          </button>
          <span className="text-sm font-medium text-orange-500 bg-orange-100 px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-gray-600">
          <span className="font-medium text-black">Domain Rating:</span> {domainRating}
        </p>
        <p className="text-gray-600">
          <span className="font-medium text-black">Traffic:</span> {traffic}
        </p>
      </div>
      {isBlurred && (
        <div className="mt-4">
          <button className="w-full py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
            Unlock
          </button>
        </div>
      )}
    </div>
  )
}

