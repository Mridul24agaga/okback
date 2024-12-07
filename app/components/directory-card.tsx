interface DirectoryCardProps {
    name: string
    domainRating: number
    traffic: string
    category: string
    isBlurred?: boolean
  }
  
  export function DirectoryCard({
    name,
    domainRating,
    traffic,
    category,
    isBlurred = false,
  }: DirectoryCardProps) {
    return (
      <div className={`relative rounded-lg bg-black/40 p-6 border border-gray-800 hover:bg-black/60 transition-all duration-300 ${
        isBlurred ? 'blur-sm hover:blur-none transition-all duration-500' : ''
      }`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <button className="px-3 py-1 text-xs font-medium rounded-md bg-[#4ADE80] text-black hover:bg-[#4ADE80]/90 transition-colors">
            Submit
          </button>
        </div>
        <div className="text-sm text-gray-400">
          <span>DR: {domainRating}</span>
          <span className="mx-2">•</span>
          <span>Traffic: {traffic}</span>
          <span className="mx-2">•</span>
          <span>{category}</span>
        </div>
      </div>
    )
  }
  
  