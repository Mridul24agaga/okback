'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { directories } from '../data/directories'
import { Search, Shuffle, CheckSquare, Square, Smartphone } from 'lucide-react'
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

  const selectAllDirectories = () => {
    const allSelected = directories.slice(0, 25).map(dir => dir.id)
    setSelectedDirectories(allSelected)
  }

  const deselectAllDirectories = () => {
    setSelectedDirectories([])
  }

  const renderDirectoryItem = (dir: typeof directories[0]) => (
    <div key={dir.id} className="bg-white rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105">
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
  )

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:hidden bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-6 rounded">
          <p className="font-bold flex items-center">
            <Smartphone className="w-5 h-5 mr-2" />
            For the best experience, please view on a computer/laptop
          </p>
        </div>
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative flex-grow w-full md:w-auto">
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
          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            <button
              onClick={selectRandomDirectories}
              className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 flex items-center"
            >
              <Shuffle className="w-5 h-5 mr-2" />
              Random Selection
            </button>
            <button
              onClick={selectAllDirectories}
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 flex items-center"
            >
              <CheckSquare className="w-5 h-5 mr-2" />
              Select All
            </button>
            <button
              onClick={deselectAllDirectories}
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 flex items-center"
            >
              <Square className="w-5 h-5 mr-2" />
              Deselect All
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDirectories
                .filter(dir => !selectedDirectories.includes(dir.id))
                .map(renderDirectoryItem)}
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-bold mb-4">Selected Directories ({selectedDirectories.length}/25):</h2>
              <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
                <div className="grid grid-cols-1 gap-4">
                  {selectedDirectories.map(id => {
                    const dir = directories.find(d => d.id === id)
                    return dir ? renderDirectoryItem(dir) : null
                  })}
                </div>
              </div>
              <div className="mt-6">
                <button
                  onClick={handleSaveClick}
                  disabled={isSaving || selectedDirectories.length === 0}
                  className={`w-full px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 ${
                    (isSaving || selectedDirectories.length === 0) ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSaving ? 'Saving...' : 'Save Selections'}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center p-8 bg-[#FFF4E8] rounded-3xl shadow-sm max-w-4xl w-full mx-auto">
          <div className="flex justify-between items-start">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">
                Having trouble <span className="border-b-2 border-orange-500">shortlisting</span> directories?
              </h3>
              <p className="text-gray-600 mb-4">Let us shortlist the best directories for your website.</p>
              <div className="flex items-center text-orange-600">
                <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Quick Process</span>
              </div>
            </div>
            <button
              onClick={handleSaveClick}
              className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
            >
              Let Us Submit
            </button>
          </div>
        </div>
        {showModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
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

