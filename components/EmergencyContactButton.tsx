'use client'

import { Phone } from 'lucide-react'
import { useState, useEffect } from 'react'

const EmergencyContactButton = () => {
  const [isVisible, setIsVisible] = useState(true)

  // Handle scroll visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

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