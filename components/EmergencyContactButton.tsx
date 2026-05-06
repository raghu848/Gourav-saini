'use client'

import { Phone } from 'lucide-react'
import { useState, useEffect } from 'react'

const EmergencyContactButton = () => {
  const [isVisible, setIsVisible] = useState(false) // Start with false to avoid hydration mismatch
  const [isClient, setIsClient] = useState(false) // Track if we're on client

  // Set isClient to true on mount (client-side only)
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Handle scroll visibility (client-side only)
  useEffect(() => {
    if (!isClient) return; // Don't run on server
    
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    // Set initial state
    toggleVisibility()
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [isClient])

  // Don't render on server to prevent hydration mismatch
  if (!isClient) {
    return null
  }

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-50">
          <a
            href="tel:+919876777393"
            className="
              flex items-center justify-center w-16 h-16 rounded-full
              bg-gradient-to-br from-red-500 to-red-700
              shadow-2xl hover:shadow-3xl
              transform hover:scale-110 transition-all duration-300
              border-4 border-white
            "
            style={{
              boxShadow: '0 10px 25px rgba(239, 68, 68, 0.4)'
            }}
          >
            <div className="relative">
              <Phone className="text-white w-6 h-6 rotate-90" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"></div>
            </div>
          </a>
        </div>
      )}
    </>
  )
}

export default EmergencyContactButton