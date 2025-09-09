'use client'

import React from 'react'
import { motion } from 'framer-motion'

const ServicesAnimation = () => {
  // Predefined positions to avoid random values that cause hydration issues
  const iconPositions = [
    { left: 15, bottom: 10 },
    { left: 30, bottom: 25 },
    { left: 45, bottom: 15 },
    { left: 60, bottom: 30 },
    { left: 75, bottom: 20 }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Medical Tools Grid */}
      <div className="absolute inset-0 opacity-15">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {/* Robotic Surgery Arms */}
      <motion.div
        className="absolute right-10 top-1/3 opacity-25"
        animate={{
          rotate: [0, 15, -15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <svg width="150" height="200" viewBox="0 0 150 200" className="text-blue-400">
          <defs>
            <linearGradient id="robotArm">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          {/* Robot arm segments */}
          <motion.rect
            x="20"
            y="40"
            width="60"
            height="8"
            rx="4"
            fill="url(#robotArm)"
            animate={{
              scaleX: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.rect
            x="40"
            y="60"
            width="8"
            height="40"
            rx="4"
            fill="url(#robotArm)"
            animate={{
              scaleY: [1, 1.1, 1],
              opacity: [0.8, 0.6, 0.8]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.circle
            cx="44"
            cy="100"
            r="8"
            fill="url(#robotArm)"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </svg>
      </motion.div>

      {/* Medical Procedure Icons */}
      {iconPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${pos.left}%`,
            bottom: `${pos.bottom}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut'
          }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" className="text-green-400">
            <path
              fill="currentColor"
              d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3V8zM4 8h2V6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-2h-2v2H4V8z"
            />
          </svg>
        </motion.div>
      ))}

      {/* Joint Replacement Animation */}
      <motion.div
        className="absolute left-1/4 top-1/4 opacity-20"
        animate={{
          rotate: [0, 360],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{
          rotate: { duration: 12, repeat: Infinity, ease: 'linear' },
          scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100" className="text-blue-300">
          <defs>
            <radialGradient id="jointGrad">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
            </radialGradient>
          </defs>
          <motion.circle
            cx="30"
            cy="30"
            r="15"
            fill="url(#jointGrad)"
            animate={{
              r: [15, 18, 15],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.circle
            cx="70"
            cy="70"
            r="15"
            fill="url(#jointGrad)"
            animate={{
              r: [15, 18, 15],
              opacity: [1, 0.6, 1]
            }}
            transition={{
              duration: 3,
              delay: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </svg>
      </motion.div>
    </div>
  )
}

export default ServicesAnimation