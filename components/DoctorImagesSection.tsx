'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const DoctorImagesSection = () => {
  // Images from the dr images folder
  const images = [
    {
      id: 1,
      url: '/images/dr images/IMG-20250908-WA0010.webp',
      alt: 'Dr. Gaurav Saini conducting advanced joint replacement surgery consultation in Mohali',
      title: 'Advanced Joint Replacement',
      width: 1200,
      height: 800
    },
    {
      id: 2,
      url: '/images/dr images/IMG-20250908-WA0022.webp',
      alt: 'Dr. Gaurav Saini performing robotic-assisted knee replacement surgery using CORI technology',
      title: 'Precision Orthopedic Care',
      width: 1200,
      height: 800
    },
    {
      id: 3,
      url: '/images/dr images/IMG-20250908-WA0025.webp',
      alt: 'CORI robotic knee replacement navigation screen showing real-time 3D joint mapping',
      title: 'Robotic Knee Replacement',
      width: 1200,
      height: 800
    },
    {
      id: 4,
      url: '/images/dr images/IMG-20250908-WA0028.webp',
      alt: 'Minimally invasive keyhole arthroscopic knee surgery instrument setup',
      title: 'Minimally Invasive Surgery',
      width: 1200,
      height: 800
    },
    {
      id: 5,
      url: '/images/dr images/IMG-20250908-WA0029.webp',
      alt: 'Dr. Gaurav Saini presenting clinical research on knee arthroplasty outcomes',
      title: 'Orthopedic Excellence',
      width: 1200,
      height: 800
    },
    {
      id: 6,
      url: '/images/dr images/patient-1 (3).webp',
      alt: 'Successful postoperative recovery patient walking after robotic knee replacement',
      title: 'Patient Recovery',
      width: 1200,
      height: 800
    },
    {
      id: 7,
      url: '/images/dr images/patient-1 (13).webp',
      alt: 'Physiotherapist assisting patient with exercises after orthopedic hip replacement surgery',
      title: 'Advanced Treatment',
      width: 1200,
      height: 800
    },
    {
      id: 8,
      url: '/images/dr images/patient-1 (17).webp',
      alt: 'Dr. Gaurav Saini analyzing patient X-ray during orthopaedic trauma care consultation',
      title: 'Surgical Precision',
      width: 1200,
      height: 800
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false) 
  const [isMobile, setIsMobile] = useState(false)

  // Set isClient to true on mount (client-side only)
  useEffect(() => {
    setIsClient(true)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-rotate images every 4 seconds (client-side only)
  useEffect(() => {
    if (!isClient) return; // Don't run on server
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length, isClient])

  // Don't render animations on server to prevent hydration mismatch
  if (!isClient) {
    return (
      <section className="py-6 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-serif">
              Our Medical Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced orthopedic procedures with cutting-edge technology and compassionate care
            </p>
          </div>
          
          {/* Static grid of images for server-side */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                <div className="relative w-full h-48 bg-gradient-to-br from-white to-blue-50 border-2 border-white rounded-xl flex items-center justify-center p-3 shadow-inner">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={image.url}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      style={{ objectFit: 'contain' }}
                      className="rounded-lg"
                      sizes="(max-width: 768px) 50vw, 25vw"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-sm font-medium truncate drop-shadow-md">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-6 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-serif">
            Our Medical Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced orthopedic procedures with cutting-edge technology and compassionate care
          </p>
        </div>

        {/* 3D Round Scroller - Only on desktop */}
        {!isMobile && (
          <div className="relative h-[420px] flex items-center justify-center my-2">
            <div 
              ref={carouselRef}
              className="relative w-full max-w-4xl h-full"
              style={{
                perspective: '1500px',
                transformStyle: 'preserve-3d'
              }}
            >
              {images.map((image, index) => {
                const angle = (index / images.length) * 2 * Math.PI
                const radius = 220 
                const x = Math.sin(angle) * radius
                const z = Math.cos(angle) * radius
                const rotation = (index - currentIndex) * (360 / images.length)
                
                return (
                  <motion.div
                    key={image.id}
                    className="absolute top-1/2 left-1/2 w-96 h-96 rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
                    style={{
                      x: '-50%',
                      y: '-50%',
                      transform: `translate3d(${x}px, 0px, ${z}px) rotateY(${rotation}deg)`,
                      zIndex: index === currentIndex ? 10 : Math.abs(index - currentIndex) < 3 ? 5 : 1
                    }}
                    animate={{
                      opacity: index === currentIndex ? 1 : 0.7,
                      scale: index === currentIndex ? 1 : 0.8
                    }}
                    transition={{ duration: 0.8 }}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <div className="relative w-full h-full bg-gradient-to-br from-white to-blue-50 border-4 border-white rounded-3xl shadow-inner flex items-center justify-center p-6">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={image.url}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          style={{ objectFit: 'contain' }}
                          className="rounded-2xl"
                          sizes="400px"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                    {index === currentIndex && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl flex items-end">
                        <div className="p-6">
                          <h3 className="text-white text-xl font-bold font-serif drop-shadow-md">{image.title}</h3>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>
            
            <button 
              className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg hover:bg-white transition-all duration-300 z-20"
              onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg hover:bg-white transition-all duration-300 z-20"
              onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* Thumbnail grid with animation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                index === currentIndex ? 'ring-4 ring-blue-600 shadow-2xl' : 'hover:shadow-xl'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="relative w-full h-48 bg-gradient-to-br from-white to-blue-50 border-2 border-white rounded-xl flex items-center justify-center p-3 shadow-inner">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    style={{ objectFit: 'contain' }}
                    className="rounded-lg"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white text-sm font-medium truncate drop-shadow-md">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DoctorImagesSection