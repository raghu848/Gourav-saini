'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AboutAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Professional Grid with enhanced pattern */}
      <div className="absolute inset-0 opacity-8">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.4) 1px, transparent 0),
              radial-gradient(circle at 20px 20px, rgba(16, 185, 129, 0.3) 1px, transparent 0)
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

      {/* Medical Icons Floating */}
      <motion.div
        className="absolute left-8 top-1/4 opacity-20"
        animate={{
          rotate: [0, 15, -15, 0],
          y: [-10, 10, -10]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100" className="text-blue-500">
          <defs>
            <linearGradient id="medicalGrad1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="30" r="15" fill="url(#medicalGrad1)" />
          <path d="M40 50 L60 50 M50 40 L50 60" stroke="white" strokeWidth="3" />
        </svg>
      </motion.div>

      {/* Stethoscope Animation */}
      <motion.div
        className="absolute right-12 top-1/3 opacity-25"
        animate={{
          rotate: [0, 10, -10, 0],
          y: [-5, 5, -5]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <svg width="140" height="180" viewBox="0 0 140 180" className="text-green-500">
          <defs>
            <linearGradient id="stethGradient">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 30 30 Q 30 60 70 90 Q 110 60 110 30"
            stroke="url(#stethGradient)"
            strokeWidth="4"
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
          <motion.circle
            cx="70"
            cy="140"
            r="25"
            stroke="url(#stethGradient)"
            strokeWidth="3"
            fill="none"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.6, 0.9, 0.6]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </svg>
      </motion.div>

      {/* Awards/Certificates Floating with enhanced design */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + (i * 10)}%`,
            top: `${20 + (i * 8)}%`,
          }}
          animate={{
            rotate: [0, 360],
            y: [-15, 15, -15],
            opacity: [0.1, 0.5, 0.1]
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-blue-400">
            <path
              fill="currentColor"
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            />
          </svg>
        </motion.div>
      ))}

      {/* Medical Cross Icons */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`cross-${i}`}
          className="absolute"
          style={{
            right: `${8 + (i * 12)}%`,
            bottom: `${15 + (i * 10)}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
            scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
            opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" className="text-green-400">
            <path
              fill="currentColor"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            />
          </svg>
        </motion.div>
      ))}

      {/* DNA Helix Animation */}
      <motion.div
        className="absolute left-1/4 bottom-1/4 opacity-15"
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <svg width="80" height="120" viewBox="0 0 80 120" className="text-blue-400">
          <defs>
            <linearGradient id="dnaGradient">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <React.Fragment key={i}>
              <circle cx={30} cy={15 + i * 12} r="4" fill="url(#dnaGradient)" />
              <circle cx={50} cy={15 + i * 12 + 6} r="4" fill="url(#dnaGradient)" />
              <line 
                x1={30} 
                y1={15 + i * 12} 
                x2={50} 
                y2={15 + i * 12 + 6} 
                stroke="url(#dnaGradient)" 
                strokeWidth="1" 
              />
            </React.Fragment>
          ))}
        </svg>
      </motion.div>
    </div>
  )
}

export default AboutAnimation