'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AnimatedMedicalBackground = () => {
  const [isMobile, setIsMobile] = React.useState(true);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Return null on server and initial client render to avoid hydration mismatch
  if (!isClient) return null;

  // Predefined positions and sizes - reduced for mobile performance
  const particlePositions = isMobile 
    ? [
        { left: 10, top: 20, size: 4 },
        { left: 70, top: 15, size: 5 },
        { left: 20, top: 60, size: 4 },
        { left: 80, top: 50, size: 5 }
      ]
    : [
        { left: 5, top: 10, size: 4 },
        { left: 25, top: 30, size: 5 },
        { left: 45, top: 15, size: 7 },
        { left: 65, top: 25, size: 6 },
        { left: 85, top: 40, size: 5 },
        { left: 10, top: 50, size: 4 },
        { left: 30, top: 35, size: 6 },
        { left: 50, top: 5, size: 7 },
        { left: 70, top: 30, size: 4 },
        { left: 90, top: 45, size: 5 },
        { left: 15, top: 55, size: 6 },
        { left: 35, top: 75, size: 4 }
      ];
 
  // Add keys to all motion components to ensure consistent rendering
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Simplified Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          key="grid-background"
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            willChange: 'background-position'
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
 
      {/* Simplified Floating Medical Particles */}
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
              ? '0 0 8px rgba(59, 130, 246, 0.3)' 
              : '0 0 8px rgba(16, 185, 129, 0.3)',
            willChange: 'transform, opacity'
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 8 + (i % 3),
            repeat: Infinity,
            delay: i % 3,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Simplified Animated DNA Helix - Only on desktop */}
      {!isMobile && (
        <motion.div
          key="dna-helix"
          className="absolute right-10 top-20 opacity-20"
          animate={{
            rotate: 360,
            y: [-8, 8, -8]
          }}
          transition={{
            rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
            y: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          <svg width="100" height="250" viewBox="0 0 100 250" className="text-blue-300">
            <defs>
              <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#10B981" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            {[...Array(5)].map((_, i) => (
              <g key={`dna-group-${i}`}>
                <motion.path
                  key={`dna-path-1-${i}`}
                  d={`M 20 ${i * 45 + 20} Q 50 ${i * 45 + 12} 80 ${i * 45 + 20}`}
                  stroke="url(#dnaGradient)"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 3,
                    delay: i * 0.3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut'
                  }}
                />
                <motion.path
                  key={`dna-path-2-${i}`}
                  d={`M 80 ${i * 45 + 35} Q 50 ${i * 45 + 45} 20 ${i * 45 + 35}`}
                  stroke="url(#dnaGradient)"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 3,
                    delay: i * 0.3 + 0.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut'
                  }}
                />
                <motion.line
                  key={`dna-line-${i}`}
                  x1="20"
                  y1={i * 45 + 20}
                  x2="80"
                  y2={i * 45 + 20}
                  stroke="url(#dnaGradient)"
                  strokeWidth="1.5"
                  opacity="0.4"
                  animate={{
                    opacity: [0.2, 0.7, 0.2]
                  }}
                  transition={{
                    duration: 2.5,
                    delay: i * 0.15,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              </g>
            ))}
          </svg>
        </motion.div>
      )}

      {/* Simplified Animated Spine - Only on desktop */}
      {!isMobile && (
        <motion.div
          key="spine"
          className="absolute left-10 top-1/4 opacity-15"
          animate={{
            y: [-5, 5, -5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <svg width="60" height="300" viewBox="0 0 60 300" className="text-blue-400">
            <defs>
              <linearGradient id="spineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#10B981" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            {[...Array(10)].map((_, i) => (
              <motion.g key={`spine-group-${i}`}>
                <motion.ellipse
                  key={`spine-ellipse-${i}`}
                  cx="30"
                  cy={20 + i * 25}
                  rx="12"
                  ry="7"
                  fill="url(#spineGradient)"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.1,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              </motion.g>
            ))}
          </svg>
        </motion.div>
      )}

      {/* Simplified Joint Icons */}
      <motion.div
        key="joint-icons"
        className="absolute right-1/4 top-1/3 opacity-10"
        animate={{
          rotate: [0, 360],
          scale: [0.7, 1.0, 0.7]
        }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
          scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" className="text-green-400">
          <defs>
            <radialGradient id="jointGradient">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
            </radialGradient>
          </defs>
          {/* Knee joint representation */}
          <motion.circle
            key="joint-circle-1"
            cx="25"
            cy="25"
            r="8"
            fill="url(#jointGradient)"
            animate={{
              r: [8, 10, 8],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.circle
            key="joint-circle-2"
            cx="55"
            cy="55"
            r="8"
            fill="url(#jointGradient)"
            animate={{
              r: [8, 10, 8],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 4,
              delay: 0.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </svg>
      </motion.div>

      {/* Simplified Glowing Orbs */}
      {[
        { left: 10, top: 20, size: 15 },
        { left: 34, top: 56, size: 16 },
        { left: 58, top: -10, size: 17 },
        { left: 82, top: 9, size: 22 }
      ].map((pos, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${pos.left}%`,
            top: `${pos.top}%`,
            width: `${pos.size}px`,
            height: `${pos.size}px`,
            background: `radial-gradient(circle, ${
              i % 2 === 0 ? 'rgba(59, 130, 246, 0.2)' : 'rgba(16, 185, 129, 0.2)'
            } 0%, transparent 70%)`,
          }}
          animate={{
            scale: [0.7, 1.0, 0.7],
            opacity: [0.2, 0.5, 0.2],
            y: [-8, 8, -8]
          }}
          transition={{
            duration: 4 + (i % 2),
            repeat: Infinity,
            delay: i % 2,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Simplified Large Floating Pulse Rings */}
      <motion.div
        key="pulse-rings"
        className="absolute top-1/3 left-1/3 w-64 h-64 opacity-10"
        animate={{
          scale: [0.8, 1.2, 0.8],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <div className="w-full h-full rounded-full border border-blue-400/20 relative">
          <motion.div
            key="pulse-ring-1"
            className="absolute inset-4 rounded-full border border-green-400/20"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}

export default AnimatedMedicalBackground