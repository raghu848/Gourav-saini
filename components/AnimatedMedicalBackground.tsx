'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AnimatedMedicalBackground = () => {
  // Predefined positions and sizes to avoid random values that cause hydration issues
  const particlePositions = [
    { left: 5, top: 10, size: 4 },
    { left: 15, top: 85, size: 6 },
    { left: 25, top: 30, size: 5 },
    { left: 35, top: 70, size: 4 },
    { left: 45, top: 15, size: 7 },
    { left: 55, top: 60, size: 5 },
    { left: 65, top: 25, size: 6 },
    { left: 75, top: 80, size: 4 },
    { left: 85, top: 40, size: 5 },
    { left: 95, top: 20, size: 6 },
    { left: 10, top: 50, size: 4 },
    { left: 20, top: 90, size: 5 },
    { left: 30, top: 35, size: 6 },
    { left: 40, top: 75, size: 4 },
    { left: 50, top: 5, size: 7 },
    { left: 60, top: 65, size: 5 },
    { left: 70, top: 30, size: 4 },
    { left: 80, top: 85, size: 6 },
    { left: 90, top: 45, size: 5 },
    { left: 5, top: 95, size: 4 },
    { left: 15, top: 55, size: 6 },
    { left: 25, top: 15, size: 5 },
    { left: 35, top: 75, size: 4 },
    { left: 45, top: 35, size: 7 },
    { left: 55, top: 90, size: 5 }
  ];

  const orbPositions = [
    { left: 10, top: 20, size: 15 },
    { left: 22, top: 54, size: 18 },
    { left: 34, top: 56, size: 16 },
    { left: 46, top: 26, size: 20 },
    { left: 58, top: -10, size: 17 },
    { left: 70, top: -18, size: 22 },
    { left: 82, top: 9, size: 22 },
    { left: 94, top: 46, size: 24 }
  ];

  // Add keys to all motion components to ensure consistent rendering
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          key="grid-background"
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
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

      {/* Enhanced Floating Medical Particles */}
      {particlePositions.map((pos, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${pos.left}%`,
            top: `${pos.top}%`,
            width: `${pos.size}px`,
            height: `${pos.size}px`,
            background: i % 3 === 0 
              ? 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0.2) 100%)'
              : i % 3 === 1
              ? 'radial-gradient(circle, rgba(16, 185, 129, 0.8) 0%, rgba(16, 185, 129, 0.2) 100%)'
              : 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.1) 100%)',
            boxShadow: i % 2 === 0 
              ? '0 0 10px rgba(59, 130, 246, 0.5)' 
              : '0 0 10px rgba(16, 185, 129, 0.5)'
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-20, 20, -20],
            opacity: [0.4, 1, 0.4],
            scale: [0.5, 1.5, 0.5]
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            delay: i % 3,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Enhanced Animated DNA Helix */}
      <motion.div
        key="dna-helix"
        className="absolute right-10 top-20 opacity-40"
        animate={{
          rotate: 360,
          y: [-15, 15, -15]
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        <svg width="150" height="350" viewBox="0 0 150 350" className="text-blue-300">
          <defs>
            <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
              <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {[...Array(10)].map((_, i) => (
            <g key={`dna-group-${i}`}>
              <motion.path
                key={`dna-path-1-${i}`}
                d={`M 25 ${i * 32 + 25} Q 75 ${i * 32 + 15} 125 ${i * 32 + 25}`}
                stroke="url(#dnaGradient)"
                strokeWidth="4"
                fill="none"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }}
              />
              <motion.path
                key={`dna-path-2-${i}`}
                d={`M 125 ${i * 32 + 45} Q 75 ${i * 32 + 55} 25 ${i * 32 + 45}`}
                stroke="url(#dnaGradient)"
                strokeWidth="4"
                fill="none"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.2 + 0.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }}
              />
              {/* DNA base pairs */}
              <motion.line
                key={`dna-line-${i}`}
                x1="25"
                y1={i * 32 + 25}
                x2="125"
                y2={i * 32 + 25}
                stroke="url(#dnaGradient)"
                strokeWidth="2"
                opacity="0.6"
                animate={{
                  opacity: [0.3, 0.9, 0.3]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Enhanced Animated Spine */}
      <motion.div
        key="spine"
        className="absolute left-10 top-1/4 opacity-30"
        animate={{
          y: [-8, 8, -8],
          rotateY: [0, 15, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <svg width="100" height="450" viewBox="0 0 100 450" className="text-blue-400">
          <defs>
            <linearGradient id="spineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.9" />
            </linearGradient>
            <filter id="spineGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {/* Enhanced Vertebrae */}
          {[...Array(15)].map((_, i) => (
            <motion.g key={`spine-group-${i}`}>
              <motion.ellipse
                key={`spine-ellipse-${i}`}
                cx="50"
                cy={25 + i * 28}
                rx="18"
                ry="10"
                fill="url(#spineGradient)"
                filter="url(#spineGlow)"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.1,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              <motion.line
                key={`spine-line-1-${i}`}
                x1="50"
                y1={25 + i * 28}
                x2="50"
                y2={25 + (i + 1) * 28}
                stroke="url(#spineGradient)"
                strokeWidth="4"
                filter="url(#spineGlow)"
                animate={{
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.1,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              {/* Spine processes */}
              <motion.line
                key={`spine-line-2-${i}`}
                x1="32"
                y1={25 + i * 28}
                x2="68"
                y2={25 + i * 28}
                stroke="url(#spineGradient)"
                strokeWidth="2"
                opacity="0.6"
                animate={{
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.05,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            </motion.g>
          ))}
        </svg>
      </motion.div>

      {/* Floating Joint Icons */}
      <motion.div
        key="joint-icons"
        className="absolute right-1/4 top-1/3 opacity-20"
        animate={{
          rotate: [0, 360],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
          scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100" className="text-green-400">
          <defs>
            <radialGradient id="jointGradient">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
            </radialGradient>
          </defs>
          {/* Knee joint representation */}
          <motion.circle
            key="joint-circle-1"
            cx="30"
            cy="30"
            r="12"
            fill="url(#jointGradient)"
            animate={{
              r: [12, 15, 12],
              opacity: [0.6, 0.9, 0.6]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.circle
            key="joint-circle-2"
            cx="70"
            cy="70"
            r="12"
            fill="url(#jointGradient)"
            animate={{
              r: [12, 15, 12],
              opacity: [0.6, 0.9, 0.6]
            }}
            transition={{
              duration: 3,
              delay: 0.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.line
            key="joint-line"
            x1="30"
            y1="30"
            x2="70"
            y2="70"
            stroke="url(#jointGradient)"
            strokeWidth="4"
            animate={{
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </svg>
      </motion.div>

      {/* Holographic Scanning Lines */}
      <motion.div
        key="scanning-lines"
        className="absolute inset-0 pointer-events-none"
        animate={{
          backgroundImage: [
            'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
            'linear-gradient(90deg, transparent 20%, rgba(16, 185, 129, 0.1) 70%, transparent 100%)',
            'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)'
          ],
          backgroundPosition: ['-100% 0%', '100% 0%', '200% 0%']
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{
          backgroundSize: '100% 100%'
        }}
      />

      {/* Robotic Surgery Icons */}
      <motion.div
        key="robotic-icons"
        className="absolute left-1/4 bottom-1/4 opacity-15"
        animate={{
          y: [-10, 10, -10],
          rotateZ: [-5, 5, -5]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" className="text-blue-300">
          <defs>
            <linearGradient id="robotGradient">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {/* Robotic arm representation */}
          <motion.rect
            key="robot-rect"
            x="20"
            y="30"
            width="40"
            height="8"
            rx="4"
            fill="url(#robotGradient)"
            animate={{
              scaleX: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.circle
            key="robot-circle"
            cx="60"
            cy="34"
            r="6"
            fill="url(#robotGradient)"
            animate={{
              r: [6, 8, 6],
              opacity: [0.5, 0.9, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.rect
            key="robot-rect-2"
            x="30"
            y="45"
            width="20"
            height="6"
            rx="3"
            fill="url(#robotGradient)"
            animate={{
              scaleY: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </svg>
      </motion.div>

      {/* Glowing Orbs */}
      {orbPositions.map((pos, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${pos.left}%`,
            top: `${pos.top}%`,
            width: `${pos.size}px`,
            height: `${pos.size}px`,
            background: `radial-gradient(circle, ${
              i % 2 === 0 ? 'rgba(59, 130, 246, 0.3)' : 'rgba(16, 185, 129, 0.3)'
            } 0%, transparent 70%)`,
            filter: 'blur(1px)'
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.7, 0.3],
            y: [-10, 10, -10]
          }}
          transition={{
            duration: 3 + (i % 2),
            repeat: Infinity,
            delay: i % 2,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Medical Cross Pattern */}
      <motion.div
        key="cross-pattern"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5"
        animate={{
          rotate: [0, 360],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{
          rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
          scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        <svg width="200" height="200" viewBox="0 0 200 200" className="text-blue-200">
          <defs>
            <radialGradient id="crossGradient">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          <rect x="80" y="40" width="40" height="120" fill="url(#crossGradient)" rx="20" />
          <rect x="40" y="80" width="120" height="40" fill="url(#crossGradient)" rx="20" />
        </svg>
      </motion.div>

      {/* Large Floating Pulse Rings */}
      <motion.div
        key="pulse-rings"
        className="absolute top-1/3 left-1/3 w-96 h-96 opacity-15"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-blue-400/30 relative">
          <motion.div
            key="pulse-ring-1"
            className="absolute inset-4 rounded-full border border-green-400/30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.div
            key="pulse-ring-2"
            className="absolute inset-8 rounded-full border border-blue-300/30"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.2, 0.6]
            }}
            transition={{
              duration: 4,
              delay: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </div>
      </motion.div>

      {/* Scanning Beam Effect */}
      <motion.div
        key="scanning-beam"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.2) 1%, rgba(16, 185, 129, 0.2) 2%, transparent 3%)'
        }}
        animate={{
          x: ['-100%', '100vw']
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
          repeatDelay: 3
        }}
      />

      {/* Heartbeat Monitor Line */}
      <motion.div
        key="heartbeat-line"
        className="absolute bottom-20 left-10 right-10 h-1 opacity-20"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #10B981 50%, transparent 100%)'
        }}
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 0.6, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatDelay: 1
        }}
      />
    </div>
  )
}

export default AnimatedMedicalBackground