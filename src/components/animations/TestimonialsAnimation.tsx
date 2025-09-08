'use client'

import React from 'react'
import { motion } from 'framer-motion'

const TestimonialsAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Happy Patient Pattern */}
      <div className="absolute inset-0 opacity-12">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20px 20px, rgba(16, 185, 129, 0.3) 2px, transparent 0),
              radial-gradient(circle at 60px 60px, rgba(59, 130, 246, 0.2) 1px, transparent 0)
            `,
            backgroundSize: '80px 80px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '80px 80px']
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {/* Success Stars */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0.5, 1.5, 0.5],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" className="text-green-400">
            <path
              fill="currentColor"
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            />
          </svg>
        </motion.div>
      ))}

      {/* Recovery Progress Bars */}
      <motion.div
        className="absolute left-10 bottom-1/4 opacity-25"
        animate={{
          x: [-10, 10, -10],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <svg width="200" height="100" viewBox="0 0 200 100" className="text-blue-400">
          {[...Array(4)].map((_, i) => (
            <g key={i}>
              <rect
                x="10"
                y={10 + i * 20}
                width="180"
                height="8"
                rx="4"
                fill="rgba(59, 130, 246, 0.2)"
              />
              <motion.rect
                x="10"
                y={10 + i * 20}
                width="180"
                height="8"
                rx="4"
                fill="rgba(16, 185, 129, 0.6)"
                animate={{
                  scaleX: [0, 0.8, 1, 0.8]
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                style={{ transformOrigin: 'left' }}
              />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Happy Heart Beat */}
      <motion.div
        className="absolute right-1/4 top-1/3 opacity-30"
        animate={{
          scale: [1, 1.2, 1, 1.1, 1],
          opacity: [0.3, 0.8, 0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <svg width="60" height="60" viewBox="0 0 24 24" className="text-green-500">
          <path
            fill="currentColor"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      </motion.div>

      {/* Patient Smile Waves */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-15"
        animate={{
          scaleX: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <svg width="300" height="50" viewBox="0 0 300 50" className="text-green-300">
          <motion.path
            d="M 0 25 Q 75 10 150 25 Q 225 40 300 25"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            animate={{
              pathLength: [0, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </svg>
      </motion.div>
    </div>
  )
}

export default TestimonialsAnimation