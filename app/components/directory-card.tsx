interface DirectoryCardProps {
  name: string
  domainRating: number
  traffic: string
  category: string
  isBlurred: boolean
}

export function DirectoryCard({ name, domainRating, traffic, category, isBlurred }: DirectoryCardProps) {
  return (
    <div className={`relative rounded-lg border border-[#091C1C] bg-black/10 p-6 ${isBlurred ? 'select-none' : ''}`}>
      <div className={`flex items-start justify-between mb-4 ${isBlurred ? 'blur-md' : ''}`}>
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
          <span className="inline-block px-2 py-1 text-xs font-medium text-[#00CED1] bg-[#00CED1]/5 rounded">
            {category}
          </span>
        </div>
        <div className="text-right">
          <div className="text-white font-bold">{domainRating}</div>
          <div className="text-xs text-gray-500">Domain Rating</div>
        </div>
      </div>
      <div className={`flex items-center justify-between ${isBlurred ? 'blur-md' : ''}`}>
        <div>
          <div className="text-gray-400 text-sm">Monthly Traffic</div>
          <div className="text-white font-semibold">{traffic}</div>
        </div>
        <button className="px-4 py-2 bg-[#00CED1]/5 text-[#00CED1] text-sm font-medium rounded-full hover:bg-[#00CED1]/10 transition-colors">
          Visit
        </button>
      </div>
      {isBlurred && (
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] rounded-lg pointer-events-none" />
      )}
    </div>
  )
}

