'use client'

import React from 'react'
import { motion } from 'framer-motion'

const ContactAnimation = () => {
  // Predefined positions to avoid random values that cause hydration issues
  const messagePositions = [
    { right: 10, top: 20, duration: 3, delay: 0 },
    { right: 22, top: 35, duration: 4, delay: 0.5 },
    { right: 34, top: 20, duration: 3.5, delay: 1 },
    { right: 46, top: 45, duration: 4.5, delay: 0.2 },
    { right: 58, top: 30, duration: 3.8, delay: 0.8 },
    { right: 70, top: 40, duration: 4.2, delay: 0.3 }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Communication Grid */}
      <div className="absolute inset-0 opacity-12">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0),
              radial-gradient(circle at 30px 30px, rgba(16, 185, 129, 0.2) 1px, transparent 0)
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

      {/* Messaging Icons */}
      {messagePositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            right: `${pos.right}%`,
            top: `${pos.top}%`,
          }}
          animate={{
            x: [-15, 15, -15],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: pos.duration,
            repeat: Infinity,
            delay: pos.delay,
            ease: 'easeInOut'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-green-400">
            <path
              fill="currentColor"
              d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"
            />
          </svg>
        </motion.div>
      ))}

      {/* Phone & Email Animation */}
      <motion.div
        className="absolute left-10 top-1/3 opacity-25"
        animate={{
          rotate: [0, 10, -10, 0],
          y: [-8, 8, -8]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <svg width="100" height="120" viewBox="0 0 100 120" className="text-blue-400">
          <defs>
            <linearGradient id="contactGrad">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          {/* Phone */}
          <motion.rect
            x="30"
            y="20"
            width="40"
            height="70"
            rx="5"
            fill="url(#contactGrad)"
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
          <motion.rect
            x="35"
            y="25"
            width="30"
            height="50"
            rx="3"
            fill="white"
            opacity="0.8"
          />
          {/* Email */}
          <motion.path
            d="M 20 100 L 80 100 L 80 115 L 50 105 L 20 115 Z"
            fill="url(#contactGrad)"
            animate={{
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </svg>
      </motion.div>

      {/* Connection Lines */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)'
        }}
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Network Nodes */}
      <motion.div
        className="absolute right-1/4 bottom-1/4 opacity-30"
        animate={{
          scale: [0.9, 1.2, 0.9],
          opacity: [0.2, 0.7, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100" className="text-green-300">
          <defs>
            <radialGradient id="nodeGrad">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
            </radialGradient>
          </defs>
          {[...Array(5)].map((_, i) => (
            <g key={i}>
              <motion.circle
                cx={30 + (i * 15)}
                cy={30 + (i * 10)}
                r="6"
                fill="url(#nodeGrad)"
                animate={{
                  r: [6, 8, 6],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              {i > 0 && (
                <motion.line
                  x1={15 + (i * 15)}
                  y1={20 + (i * 10)}
                  x2={30 + ((i-1) * 15)}
                  y2={30 + ((i-1) * 10)}
                  stroke="url(#nodeGrad)"
                  strokeWidth="2"
                  animate={{
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              )}
            </g>
          ))}
        </svg>
      </motion.div>
    </div>
  )
}

export default ContactAnimation