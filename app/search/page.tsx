'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { Search, X } from 'lucide-react'

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isClient, setIsClient] = useState(false) // Track if we're on client

  // Set isClient to true on mount (client-side only)
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Mock search data - in a real implementation, this would come from an API
  const mockSearchData = [
    {
      id: 1,
      title: 'Knee Replacement Surgery',
      url: '/services/knee-replacement-surgery',
      description: 'Advanced robotic knee replacement surgery using CORI technology for precise joint replacement.',
      type: 'Service'
    },
    {
      id: 2,
      title: 'Hip Replacement Surgery',
      url: '/services/hip-replacement-surgery',
      description: 'Total hip replacement surgery with minimally invasive techniques for faster recovery.',
      type: 'Service'
    },
    {
      id: 3,
      title: 'Sports Injury Treatment',
      url: '/services/sports-injury-treatment',
      description: 'Expert treatment for ACL injuries, meniscus tears and other sports-related injuries.',
      type: 'Service'
    },
    {
      id: 4,
      title: 'Robotic Surgery',
      url: '/services/robotic-surgery',
      description: 'Cutting-edge robotic surgery using CORI technology for precise joint replacement.',
      type: 'Service'
    },
    {
      id: 5,
      title: 'About Dr. Gaurav Saini',
      url: '/about',
      description: 'Learn about our senior consultant orthopaedic surgeon and his expertise.',
      type: 'Page'
    },
    {
      id: 6,
      title: 'Fracture & Trauma Care',
      url: '/services/fracture-trauma-care',
      description: 'Emergency trauma care and fracture treatment with 24/7 orthopedic services.',
      type: 'Service'
    },
    {
      id: 7,
      title: 'Spine Surgery',
      url: '/services/spine-surgery',
      description: 'Advanced spine surgery treatment for back pain and spinal conditions.',
      type: 'Service'
    },

  ]

  const handleSearch = useCallback((term: string) => {
    setIsLoading(true)
    
    // Simulate API delay
    setTimeout(() => {
      const results = mockSearchData.filter(item =>
        item.title.toLowerCase().includes(term.toLowerCase()) ||
        item.description.toLowerCase().includes(term.toLowerCase())
      )
      setSearchResults(results)
      setIsLoading(false)
    }, 500)
  }, [mockSearchData])
  
  useEffect(() => {
    // Only run this on client-side
    if (isClient && typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const query = urlParams.get('q') || ''
      setSearchTerm(query)
      
      if (query) {
        handleSearch(query)
      }
    }
  }, [handleSearch, isClient])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm) {
      handleSearch(searchTerm)
      
      // Only update URL on client-side
      if (isClient && typeof window !== 'undefined') {
        const newUrl = `${window.location.pathname}?q=${encodeURIComponent(searchTerm)}`
        window.history.replaceState({}, '', newUrl)
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Search Results</h1>
          
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for services, treatments, or information..."
                className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 px-6 flex items-center bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-r-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300"
              >
                Search
              </button>
            </div>
          </form>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mb-4"></div>
              <p className="text-gray-600">Searching...</p>
            </div>
          ) : searchTerm ? (
            <div>
              <p className="text-gray-600 mb-6">
                Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for &quot;{searchTerm}&quot;
              </p>
              
              {searchResults.length > 0 ? (
                <div className="space-y-4">
                  {searchResults.map((result) => (
                    <Link
                      key={result.id}
                      href={result.url}
                      className="block bg-gray-50 rounded-lg p-6 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 transition-all duration-200"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{result.title}</h3>
                          <p className="text-gray-600 mb-3">{result.description}</p>
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                            {result.type}
                          </span>
                        </div>
                        <div className="flex-shrink-0">
                          <X className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="mx-auto h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-500">
                    We couldn&#39;t find anything matching &quot;{searchTerm}&quot;. Try different keywords.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="mx-auto h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Start a search</h3>
              <p className="text-gray-500">
                Enter a keyword above to search for services, treatments, or information.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}