'use client'

import React from 'react'
import { motion } from 'framer-motion'

const BookAppointmentAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Tech-inspired grid pattern with blue/white theme */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {/* Floating tech particles with blue/white theme */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-blue-400"
          style={{
            left: `${10 + i * 10}%`,
            top: `${15 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 4 + (i * 0.5),
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Central appointment ring with pulse effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-green-400"></div>
      </motion.div>

      {/* Tech-inspired crosshair elements */}
      <motion.div
        className="absolute top-1/3 left-1/4"
        animate={{
          rotate: [0, 360]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        <div className="relative w-16 h-16">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-300 transform -translate-y-1/2"></div>
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-300 transform -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-3 h-3 border-2 border-green-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/4"
        animate={{
          rotate: [360, 0]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        <div className="relative w-12 h-12">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-green-300 transform -translate-y-1/2"></div>
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-green-300 transform -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-2 border-2 border-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </motion.div>

      {/* Minimalist calendar icon with tech styling */}
      <motion.div
        className="absolute right-20 top-1/4 opacity-20"
        animate={{
          y: [-10, 10, -10],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <svg width="80" height="80" viewBox="0 0 24 24" className="text-blue-300">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
          <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="1" />
          <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="1" />
          <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="1" />
          <circle cx="12" cy="16" r="1" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Minimalist clock with tech styling */}
      <motion.div
        className="absolute left-20 bottom-1/4 opacity-20"
        animate={{
          rotate: [0, 360]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        <svg width="70" height="70" viewBox="0 0 24 24" className="text-green-300">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1" fill="none" />
          <line x1="12" y1="12" x2="12" y2="7" stroke="currentColor" strokeWidth="1" />
          <line x1="12" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="1" />
        </svg>
      </motion.div>
    </div>
  )
}

export default BookAppointmentAnimation