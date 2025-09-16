'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const DoctorImagesSection = () => {
  // Images from the dr images folder
  const images = [
    {
      id: 1,
      url: '/images/dr images/IMG-20250908-WA0010.jpg',
      alt: 'Medical Procedure 1',
      title: 'Advanced Surgical Technique'
    },
    {
      id: 2,
      url: '/images/dr images/IMG-20250908-WA0022.jpg',
      alt: 'Medical Procedure 2',
      title: 'Precision Orthopedic Care'
    },
    {
      id: 3,
      url: '/images/dr images/IMG-20250908-WA0025.jpg',
      alt: 'Medical Procedure 3',
      title: 'Robotic Knee Replacement'
    },
    {
      id: 4,
      url: '/images/dr images/IMG-20250908-WA0028.jpg',
      alt: 'Medical Procedure 4',
      title: 'Minimally Invasive Surgery'
    },
    {
      id: 5,
      url: '/images/dr images/IMG-20250908-WA0029.jpg',
      alt: 'Medical Procedure 5',
      title: 'Orthopedic Excellence'
    },
    {
      id: 6,
      url: '/images/dr images/patient-1 (3).jpg',
      alt: 'Medical Procedure 6',
      title: 'Patient Recovery'
    },
    {
      id: 7,
      url: '/images/dr images/patient-1 (13).jpg',
      alt: 'Medical Procedure 7',
      title: 'Advanced Treatment'
    },
    {
      id: 8,
      url: '/images/dr images/patient-1 (17).jpg',
      alt: 'Medical Procedure 8',
      title: 'Surgical Precision'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-serif">
            Our Medical Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced orthopedic procedures with cutting-edge technology and compassionate care
          </p>
        </div>

        {/* Main featured image without animation */}
        <div className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-green-50 p-6">
          <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden border-4 border-blue-200 shadow-lg">
            <div className="absolute inset-0">
              <div className="relative w-full h-full bg-white rounded-lg flex items-center justify-center p-4">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={images[currentIndex].url}
                    alt={images[currentIndex].alt}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
              
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-lg"></div>
              
              {/* Image title */}
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white font-serif">
                  {images[currentIndex].title}
                </h3>
              </div>
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-600 w-8' : 'bg-blue-300'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail grid with animation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                index === currentIndex ? 'ring-4 ring-blue-600' : 'hover:shadow-xl'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="relative w-full h-48 bg-white border-2 border-blue-200 rounded-lg flex items-center justify-center p-2">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="rounded"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white text-sm font-medium truncate">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DoctorImagesSection