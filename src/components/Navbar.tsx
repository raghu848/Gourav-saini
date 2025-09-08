'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, MessageCircle, Calendar } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Dr. Saini' },
    { href: '/services', label: 'Services' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    { href: '/book-appointment', label: 'Book Appointment' },
  ]

  // Animation variants for each nav item
  const getAnimationVariants = (index: number) => {
    const animations = [
      // Home - Heart beat
      {
        whileHover: { scale: 1.1 },
        whileTap: { scale: 0.95 },
        animate: { 
          y: [0, -5, 0],
          transition: { duration: 2, repeat: Infinity }
        }
      },
      // About - Certificate flip
      {
        whileHover: { scale: 1.1 },
        whileTap: { scale: 0.95 },
        animate: { 
          rotateY: [0, 360],
          transition: { duration: 4, repeat: Infinity }
        }
      },
      // Services - Gear rotation
      {
        whileHover: { scale: 1.1 },
        whileTap: { scale: 0.95 },
        animate: { 
          rotate: [0, 360],
          transition: { duration: 5, repeat: Infinity, ease: "linear" as const }
        }
      },
      // Testimonials - Star twinkle
      {
        whileHover: { scale: 1.1 },
        whileTap: { scale: 0.95 },
        animate: { 
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
          transition: { duration: 1.5, repeat: Infinity }
        }
      },
      // Blog - Book flip
      {
        whileHover: { scale: 1.1 },
        whileTap: { scale: 0.95 },
        animate: { 
          rotateX: [0, 20, 0],
          transition: { duration: 3, repeat: Infinity }
        }
      },
      // Contact - Message pulse
      {
        whileHover: { scale: 1.1 },
        whileTap: { scale: 0.95 },
        animate: { 
          scale: [1, 1.1, 1],
          transition: { duration: 2, repeat: Infinity }
        }
      },
      // Book Appointment - Calendar wave
      {
        whileHover: { scale: 1.1 },
        whileTap: { scale: 0.95 },
        animate: { 
          y: [0, -3, 0],
          transition: { duration: 1.5, repeat: Infinity }
        }
      }
    ]
    return animations[index] || {}
  }

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-lg border-b border-blue-100">
      <div className="max-w-8xl mx-auto px-0 sm:px-2 lg:px-4">
        <div className="flex justify-between items-center h-20 overflow-hidden">
          {/* Logo + Branding */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-200 bg-white shadow-md flex items-center justify-center p-1 ml-[40px]">
              <Image
                src="/images/dr-saini-logo.jpg?v=3"
                alt="Dr. Gaurav Saini Logo"
                width={60}
                height={60}
                className="object-contain w-full h-full hover:scale-105 transition-transform duration-300"
                priority
                unoptimized
                onError={(e) => {
                  console.log('Logo failed to load');
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.fallback-text')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'fallback-text text-blue-900 font-bold text-lg flex items-center justify-center w-full h-full';
                    fallback.textContent = 'DG';
                    parent.appendChild(fallback);
                  }
                }}
                onLoad={() => console.log('Logo loaded successfully')}
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg sm:text-xl font-bold text-blue-900 font-serif">
                Dr. Gaurav Saini
              </span>
              <span className="text-[11px] sm:text-xs text-gray-600">
                Orthopaedics & Robotic Surgery Specialist
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center space-x-6 overflow-x-auto scrollbar-hide max-w-2xl">
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  className="relative"
                >
                  <Link
                    href={link.href}
                    className={`px-3 py-2 text-sm font-bold whitespace-nowrap transition-colors duration-200 ${
                      pathname === link.href
                        ? 'text-blue-900'
                        : 'text-gray-700 hover:text-blue-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-blue-900 transition-all duration-300 ${
                      pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Contact Buttons */}
          <div className="hidden lg:flex items-center space-x-3 ml-4">
            <Link
              href="/book-appointment"
              className="flex items-center space-x-2 bg-blue-900 text-white px-5 py-2.5 rounded-lg hover:bg-blue-800 transition-colors duration-200 shadow-md font-bold text-sm whitespace-nowrap"
            >
              <Calendar size={16} />
              <span>Book Now</span>
            </Link>
            <a
              href="tel:+919878777393"
              className="flex items-center space-x-2 bg-gray-700 text-white px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-md font-bold text-sm whitespace-nowrap"
            >
              <Phone size={16} />
              <span>Call</span>
            </a>
            <a
              href="https://wa.me/919878777393"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2.5 rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md font-bold text-sm whitespace-nowrap"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-md"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  {...getAnimationVariants(index)}
                >
                  <Link
                    href={link.href}
                    className={`block px-3 py-3 text-base font-bold rounded-md transition-colors duration-200 ${
                      pathname === link.href
                        ? 'bg-blue-50 text-blue-900'
                        : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Contact Buttons */}
              <div className="pt-4 space-y-3">
                <Link
                  href="/book-appointment"
                  className="flex items-center justify-center space-x-2 bg-blue-900 text-white px-4 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-200 shadow-md font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  <Calendar size={18} />
                  <span>Book Appointment</span>
                </Link>
                <a
                  href="tel:+919878777393"
                  className="flex items-center justify-center space-x-2 bg-gray-700 text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-md font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/919878777393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar