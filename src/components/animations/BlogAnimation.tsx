'use client'

import React from 'react'
import { motion } from 'framer-motion'

const BlogAnimation = () => {
  // Predefined positions to avoid random values that cause hydration issues
  const articlePositions = [
    { left: 10, top: 15, duration: 4, delay: 0 },
    { left: 22, top: 35, duration: 5, delay: 0.5 },
    { left: 34, top: 20, duration: 4.5, delay: 1 },
    { left: 46, top: 40, duration: 5.5, delay: 0.2 },
    { left: 58, top: 25, duration: 4.2, delay: 0.8 },
    { left: 70, top: 30, duration: 4.8, delay: 0.3 },
    { left: 82, top: 15, duration: 5.2, delay: 0.6 },
    { left: 94, top: 35, duration: 4.6, delay: 0.9 }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Knowledge Grid */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px)
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

      {/* Article Icons */}
      {articlePositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${pos.left}%`,
            top: `${pos.top}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 10, -10, 0],
            opacity: [0.2, 0.7, 0.2]
          }}
          transition={{
            duration: pos.duration,
            repeat: Infinity,
            delay: pos.delay,
            ease: 'easeInOut'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" className="text-blue-400">
            <path
              fill="currentColor"
              d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
            />
          </svg>
        </motion.div>
      ))}

      {/* Medical Book */}
      <motion.div
        className="absolute right-10 top-1/4 opacity-20"
        animate={{
          rotate: [0, 5, -5, 0],
          y: [-5, 5, -5]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <svg width="120" height="150" viewBox="0 0 120 150" className="text-green-400">
          <defs>
            <linearGradient id="bookGrad">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <motion.rect
            x="20"
            y="20"
            width="80"
            height="110"
            rx="5"
            fill="url(#bookGrad)"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.6, 0.9, 0.6]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.path
            d="M 20 20 L 20 130"
            stroke="white"
            strokeWidth="2"
            animate={{
              pathLength: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          {[...Array(5)].map((_, i) => (
            <motion.line
              key={i}
              x1="30"
              y1={35 + i * 15}
              x2="90"
              y2={35 + i * 15}
              stroke="white"
              strokeWidth="1"
              opacity="0.7"
              animate={{
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Thought Bubbles */}
      <motion.div
        className="absolute left-1/4 bottom-1/3 opacity-25"
        animate={{
          scale: [0.9, 1.1, 0.9],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <svg width="80" height="60" viewBox="0 0 80 60" className="text-blue-300">
          <motion.path
            d="M 20 20 Q 40 5 60 20 Q 75 30 60 40 Q 40 55 20 40 Q 5 30 20 20"
            fill="currentColor"
            animate={{
              pathLength: [0, 1, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </svg>
      </motion.div>
    </div>
  )
}

export default BlogAnimation