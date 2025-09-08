'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AboutAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Professional Grid */}
      <div className="absolute inset-0 opacity-12">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.3) 1px, transparent 0)
            `,
            backgroundSize: '40px 40px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px']
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {/* Medical Stethoscope Animation */}
      <motion.div
        className="absolute left-10 top-1/4 opacity-20"
        animate={{
          rotate: [0, 10, -10, 0],
          y: [-5, 5, -5]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <svg width="120" height="200" viewBox="0 0 120 200" className="text-green-500">
          <defs>
            <linearGradient id="stethGradient">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 30 30 Q 30 60 60 80 Q 90 60 90 30"
            stroke="url(#stethGradient)"
            strokeWidth="4"
            fill="none"
            animate={{
              pathLength: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.circle
            cx="60"
            cy="150"
            r="20"
            stroke="url(#stethGradient)"
            strokeWidth="3"
            fill="none"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.6, 0.9, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </svg>
      </motion.div>

      {/* Awards/Certificates Floating */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            right: `${5 + (i * 8)}%`,
            top: `${15 + (i * 12)}%`,
          }}
          animate={{
            rotate: [0, 360],
            y: [-10, 10, -10],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
            y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
            opacity: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" className="text-blue-300">
            <path
              fill="currentColor"
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

export default AboutAnimation