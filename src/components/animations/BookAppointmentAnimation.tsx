'use client'

import React from 'react'
import { motion } from 'framer-motion'

const BookAppointmentAnimation = () => {
  // Predefined positions to avoid random values that cause hydration issues
  const calendarPositions = [
    { left: 15, top: 20 },
    { left: 27, top: 35 },
    { left: 39, top: 25 },
    { left: 51, top: 40 },
    { left: 63, top: 30 },
    { left: 75, top: 35 }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Calendar Grid */}
      <div className="absolute inset-0 opacity-15">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px']
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {/* Calendar Icons */}
      {calendarPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${pos.left}%`,
            top: `${pos.top}%`,
          }}
          animate={{
            rotate: [0, 360],
            y: [-10, 10, -10],
            opacity: [0.2, 0.7, 0.2]
          }}
          transition={{
            rotate: { duration: 12 + i, repeat: Infinity, ease: 'linear' },
            y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
            opacity: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" className="text-blue-400">
            <path
              fill="currentColor"
              d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"
            />
          </svg>
        </motion.div>
      ))}

      {/* Appointment Calendar */}
      <motion.div
        className="absolute right-10 top-1/4 opacity-25"
        animate={{
          scale: [0.95, 1.05, 0.95],
          y: [-5, 5, -5]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <svg width="130" height="150" viewBox="0 0 130 150" className="text-green-400">
          <defs>
            <linearGradient id="calendarGrad">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          {/* Calendar base */}
          <motion.rect
            x="15"
            y="20"
            width="100"
            height="110"
            rx="8"
            fill="url(#calendarGrad)"
            animate={{
              opacity: [0.6, 0.9, 0.6]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          {/* Calendar header */}
          <motion.rect
            x="15"
            y="20"
            width="100"
            height="25"
            rx="8"
            fill="rgba(255, 255, 255, 0.2)"
          />
          {/* Calendar days */}
          {[...Array(5)].map((_, row) => (
            [...Array(7)].map((_, col) => (
              <motion.rect
                key={`${row}-${col}`}
                x={20 + col * 13}
                y={55 + row * 15}
                width="10"
                height="10"
                rx="2"
                fill="rgba(255, 255, 255, 0.3)"
                animate={{
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{
                  duration: 2,
                  delay: (row + col) * 0.1,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            ))
          ))}
          {/* Appointment marker */}
          <motion.circle
            cx="65"
            cy="85"
            r="8"
            fill="white"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </svg>
      </motion.div>

      {/* Clock Animation */}
      <motion.div
        className="absolute left-1/4 bottom-1/3 opacity-30"
        animate={{
          rotate: [0, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" className="text-blue-300">
          <defs>
            <radialGradient id="clockGrad">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.4" />
            </radialGradient>
          </defs>
          <circle
            cx="40"
            cy="40"
            r="35"
            fill="url(#clockGrad)"
          />
          <motion.line
            x1="40"
            y1="40"
            x2="40"
            y2="20"
            stroke="white"
            strokeWidth="3"
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: 'linear'
            }}
            style={{ transformOrigin: '40px 40px' }}
          />
          <motion.line
            x1="40"
            y1="40"
            x2="40"
            y2="25"
            stroke="white"
            strokeWidth="2"
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear'
            }}
            style={{ transformOrigin: '40px 40px' }}
          />
        </svg>
      </motion.div>

      {/* Check Mark Confirmation */}
      <motion.div
        className="absolute right-1/3 top-1/3 opacity-25"
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.2, 0.8, 0.2]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <svg width="50" height="50" viewBox="0 0 24 24" className="text-green-500">
          <motion.path
            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
            fill="currentColor"
            animate={{
              pathLength: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </svg>
      </motion.div>
    </div>
  )
}

export default BookAppointmentAnimation