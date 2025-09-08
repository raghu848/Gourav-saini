'use client'

import React from 'react'
import { motion } from 'framer-motion'

const HomeAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Medical Grid Pattern */}
      <div className="absolute inset-0 opacity-15">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px']
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {/* Floating Heart Icons */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + (i * 12)}%`,
            top: `${20 + Math.sin(i) * 30}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.7, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-blue-400">
            <path
              fill="currentColor"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </motion.div>
      ))}

      {/* Central Pulse Ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-green-400"></div>
      </motion.div>
    </div>
  )
}

export default HomeAnimation