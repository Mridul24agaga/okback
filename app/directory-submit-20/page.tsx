'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { directories } from '../data/directories'
import { Search, Shuffle } from 'lucide-react'
import { saveSelections } from '../actions/saveSelectionsss'
import { Header } from '../components/header'

export default function DirectoryListing() {
  const router = useRouter()
  const [selectedDirectories, setSelectedDirectories] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredDirectories, setFilteredDirectories] = useState(directories)
  const [isSaving, setIsSaving] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [userName, setUserName] = useState('')
  const [websiteUrl, setWebsiteUrl] = useState('')

  useEffect(() => {
    const filtered = directories.filter(dir => 
      dir.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dir.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredDirectories(filtered)
  }, [searchTerm])

  const handleCheckboxChange = (id: number) => {
    setSelectedDirectories(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id)
      } else if (prev.length < 25) {
        return [...prev, id]
      } else {
        alert("You can't select more than 25 directories.")
        return prev
      }
    })
  }

  const handleSaveClick = () => {
    setShowModal(true)
  }

  const handleSaveSelections = async () => {
    if (!userName || !websiteUrl) {
      alert("Please enter both your name and website URL.")
      return
    }
    setIsSaving(true)
    setShowModal(false)
    try {
      const result = await saveSelections(selectedDirectories, userName, websiteUrl)
      if (result.success) {
        router.push('/thank-you')
      } else {
        alert(result.message)
      }
    } catch (error) {
      console.error('Error saving selections:', error)
      alert('Failed to save selections. Please try again.')
    } finally {
      setIsSaving(false)
      setUserName('')
      setWebsiteUrl('')
    }
  }

  const selectRandomDirectories = () => {
    const shuffled = [...directories].sort(() => 0.5 - Math.random())
    const randomSelected = shuffled.slice(0, 25).map(dir => dir.id)
    setSelectedDirectories(randomSelected)
  }

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div className="relative flex-grow mr-4">
            <input
              type="text"
              placeholder="Search directories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-4 pr-12 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Search className="w-5 h-5 text-orange-500" />
            </div>
          </div>
          <button
            onClick={selectRandomDirectories}
            className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 flex items-center"
          >
            <Shuffle className="w-5 h-5 mr-2" />
            Random Selection
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDirectories.map(dir => (
            <div key={dir.id} className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105">
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`dir-${dir.id}`}
                  checked={selectedDirectories.includes(dir.id)}
                  onChange={() => handleCheckboxChange(dir.id)}
                  className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500"
                />
                <label htmlFor={`dir-${dir.id}`} className="ml-2 text-sm font-medium text-gray-900 cursor-pointer flex-grow">
                  {dir.name}
                </label>
              </div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200">
                {dir.category}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Selected Directories ({selectedDirectories.length}/25):</h2>
          <div className="max-h-60 overflow-y-auto">
            <ul className="list-disc pl-5 space-y-2">
              {selectedDirectories.map(id => {
                const dir = directories.find(d => d.id === id)
                return dir ? (
                  <li key={id} className="text-sm text-gray-700">
                    {dir.name} <span className="text-xs text-gray-500">({dir.category})</span>
                  </li>
                ) : null
              })}
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center space-y-4">
          <button
            onClick={handleSaveClick}
            disabled={isSaving || selectedDirectories.length === 0}
            className={`px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 ${
              (isSaving || selectedDirectories.length === 0) ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSaving ? 'Saving...' : 'Save Selections'}
          </button>
        </div>
        {showModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-xl font-bold mb-4">Enter Your Details</h2>
              <input
                type="text"
                placeholder="Your Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
              />
              <input
                type="url"
                placeholder="Your Website URL"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
              />
              <div className="flex justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg mr-2"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveSelections}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

