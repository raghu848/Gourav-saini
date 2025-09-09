'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const ImageSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Orthopedic images with descriptive overlay text
  const slides = [
    {
      id: 1,
      url: '/images/Minimally-invasive-knee-replacement.webp',
      alt: 'Minimally invasive knee replacement surgery',
      overlayText: 'Minimally Invasive Knee Replacement'
    },
    {
      id: 2,
      url: '/images/Total-hip-replacement.webp',
      alt: 'Total hip replacement procedure',
      overlayText: 'Advanced Total Hip Replacement'
    },
    {
      id: 3,
      url: '/images/Knee-Arthroscopy-key-hole-surgery.webp',
      alt: 'Knee arthroscopy keyhole surgery',
      overlayText: 'Precision Knee Arthroscopy'
    },
    {
      id: 4,
      url: '/images/Partial-Knee-Replacement.webp',
      alt: 'Partial knee replacement surgery',
      overlayText: 'Partial Knee Replacement Solutions'
    },
    {
      id: 5,
      url: '/images/Knee-presentation-surgeries-HTODFO.webp',
      alt: 'Knee presentation surgeries',
      overlayText: 'Advanced Surgical Techniques'
    }
  ]

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-50 p-2 slideshow-container">
          {/* Slideshow container with rounded corners and soft shadows */}
          <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                {/* Using Next.js Image component with object-contain to show full image without cropping */}
                <div className="relative w-full h-full bg-gray-100">
                  <Image
                    src={slides[currentIndex].url}
                    alt={slides[currentIndex].alt}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="p-4"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 slideshow-overlay"></div>
                
                {/* Overlay text with hospital-like theme */}
                <div className="absolute bottom-8 left-8 right-8">
                  <motion.h3 
                    className="text-2xl md:text-3xl font-bold text-white font-serif slideshow-text"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {slides[currentIndex].overlayText}
                  </motion.h3>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 slideshow-indicator ${
                    index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageSlideshow