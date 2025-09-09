'use client'

import React from 'react'
import { motion } from 'framer-motion'

const ServicesAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle Medical Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Floating Medical Icons in Boxes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-16 h-16 rounded-lg border border-blue-200 bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" className="text-blue-400">
          <path
            fill="currentColor"
            d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3V8zM4 8h2V6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-2h-2v2H4V8z"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4 w-16 h-16 rounded-lg border border-green-200 bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center"
        animate={{
          y: [0, 10, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" className="text-green-400">
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/3 w-16 h-16 rounded-lg border border-blue-200 bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 3, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" className="text-blue-300">
          <path
            fill="currentColor"
            d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
          />
        </svg>
      </motion.div>

      {/* Central Robotic Surgery Element in Box */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-xl border border-blue-300 bg-gradient-to-br from-blue-500 to-green-500 bg-opacity-20 backdrop-blur-sm flex items-center justify-center"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <div className="relative">
          <svg width="48" height="48" viewBox="0 0 24 24" className="text-white">
            <path
              fill="currentColor"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm3 0h-2v-6h2v6zm3 0h-2v-6h2v6z"
            />
          </svg>
          <motion.div 
            className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </div>
      </motion.div>

      {/* Corner Decorative Elements */}
      <motion.div
        className="absolute top-4 left-4 w-8 h-8 rounded-md border border-blue-100 bg-white bg-opacity-5"
        animate={{
          rotate: [0, 90, 180, 270, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      <motion.div
        className="absolute top-4 right-4 w-8 h-8 rounded-md border border-green-100 bg-white bg-opacity-5"
        animate={{
          rotate: [0, -90, -180, -270, -360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      <motion.div
        className="absolute bottom-4 left-4 w-8 h-8 rounded-md border border-green-100 bg-white bg-opacity-5"
        animate={{
          rotate: [0, 90, 180, 270, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
          delay: 5
        }}
      />

      <motion.div
        className="absolute bottom-4 right-4 w-8 h-8 rounded-md border border-blue-100 bg-white bg-opacity-5"
        animate={{
          rotate: [0, -90, -180, -270, -360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
          delay: 5
        }}
      />
    </div>
  )
}

export default ServicesAnimation