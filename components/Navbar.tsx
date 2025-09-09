'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, MessageCircle, Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [showScrollButtons, setShowScrollButtons] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Sample data for the simple charts
  const serviceData = [
    { name: 'Knee', value: 45, color: '#3b82f6' },
    { name: 'Hip', value: 30, color: '#60a5fa' }, 
    { name: 'Shoulder', value: 15, color: '#93c5fd' },
    { name: 'Spine', value: 10, color: '#bfdbfe' },
  ]

  const recoveryData = [
    { name: 'Week 1', recovery: 20 },
    { name: 'Week 2', recovery: 45 },
    { name: 'Week 3', recovery: 65 },
    { name: 'Week 4', recovery: 85 },
    { name: 'Week 5', recovery: 95 },
  ]

  // Check if nav needs scroll buttons
  useEffect(() => {
    const checkScroll = () => {
      if (navRef.current) {
        const { scrollWidth, clientWidth } = navRef.current;
        setShowScrollButtons(scrollWidth > clientWidth);
      }
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  // Scroll functions
  const scrollLeft = () => {
    if (navRef.current) {
      navRef.current.scrollBy({ left: -100, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (navRef.current) {
      navRef.current.scrollBy({ left: 100, behavior: 'smooth' });
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/services', label: 'SERVICES' },
    { href: '/testimonials', label: 'TESTIMONIALS' },
    { href: '/blog', label: 'BLOG' },
    { href: '/contact', label: 'CONTACT' },
    { href: '/book-appointment', label: 'BOOK APPOINMENT' },
  ]

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
                  console.log('Logo failed to load')
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent && !parent.querySelector('.fallback-text')) {
                    const fallback = document.createElement('div')
                    fallback.className =
                      'fallback-text text-blue-900 font-bold text-lg flex items-center justify-center w-full h-full'
                    fallback.textContent = 'DG'
                    parent.appendChild(fallback)
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
          <div className="hidden lg:flex items-center flex-1 max-w-4xl mx-4">
            {/* Scroll Left Button */}
            {showScrollButtons && (
              <button 
                onClick={scrollLeft}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors duration-200 z-10 mr-2"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} className="text-gray-700" />
              </button>
            )}
            
            <div 
              ref={navRef}
              className="flex items-center space-x-6 overflow-x-auto scrollbar-hide max-w-full"
            >
              {navLinks.map((link) => (
                <motion.div 
                  key={link.href} 
                  className="relative group z-10 flex-shrink-0"
                  ref={link.href === '/services' ? servicesRef : null}
                  onMouseEnter={link.href === '/services' ? () => setIsServicesDropdownOpen(true) : undefined}
                  onMouseLeave={link.href === '/services' ? () => setIsServicesDropdownOpen(false) : undefined}
                >
                  <Link
                    href={link.href}
                    className={`px-3 py-2 text-lg font-extrabold whitespace-nowrap transition-colors duration-200 ${
                      pathname === link.href
                        ? 'text-blue-900'
                        : 'text-gray-700 hover:text-blue-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-blue-900 transition-all duration-300 ${
                      pathname === link.href
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                  
                  {/* Services Dropdown with Simple CSS Charts */}
                  {link.href === '/services' && (
                    <div className="fixed w-96" style={{ zIndex: 100 }}>
                      <AnimatePresence>
                        {isServicesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-xl shadow-xl border border-gray-100 p-5"
                            style={{ zIndex: 100 }}
                          >
                            <div className="grid grid-cols-2 gap-6">
                              {/* Simple Pie Chart with CSS */}
                              <div className="bg-blue-50 rounded-lg p-3">
                                <h3 className="text-sm font-bold text-blue-900 mb-3 text-center">Service Distribution</h3>
                                <div className="flex flex-col space-y-2">
                                  {serviceData.map((service, index) => (
                                    <div key={service.name} className="flex items-center space-x-2">
                                      <div 
                                        className="h-3 rounded-full transition-all duration-300 hover:scale-105"
                                        style={{ 
                                          width: `${service.value * 2}px`, 
                                          backgroundColor: service.color,
                                          minWidth: '20px'
                                        }}
                                      ></div>
                                      <span className="text-xs text-gray-700 font-medium">
                                        {service.name}: {service.value}%
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Simple Bar Chart with CSS */}
                              <div className="bg-blue-50 rounded-lg p-3">
                                <h3 className="text-sm font-bold text-blue-900 mb-3 text-center">Avg. Recovery Progress</h3>
                                <div className="h-32 flex items-end justify-between space-x-1">
                                  {recoveryData.map((data, index) => (
                                    <div key={data.name} className="flex flex-col items-center flex-1">
                                      <div className="w-full bg-blue-200 rounded-t relative group/bar">
                                        <div 
                                          className="bg-gradient-to-t from-blue-600 to-blue-500 rounded-t transition-all duration-300 hover:from-blue-700 hover:to-blue-600"
                                          style={{ height: `${data.recovery}%`, maxHeight: '80px' }}
                                        ></div>
                                        {/* Tooltip on hover */}
                                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-1 py-0.5 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">
                                          {data.recovery}%
                                        </div>
                                      </div>
                                      <span className="text-xs text-gray-600 mt-1">{data.name}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Services List */}
                            <div className="mt-4 grid grid-cols-2 gap-2">
                              {[
                                { name: 'Knee Surgery', icon: '🦴' },
                                { name: 'Hip Replacement', icon: '🏥' },
                                { name: 'Shoulder Care', icon: '💪' },
                                { name: 'Spine Treatment', icon: '🧘‍♂️' }
                              ].map((service, index) => (
                                <Link 
                                  key={index}
                                  href="/services"
                                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors group"
                                >
                                  <span className="text-sm">{service.icon}</span>
                                  <span className="text-xs font-medium text-gray-700 group-hover:text-blue-900">
                                    {service.name}
                                  </span>
                                </Link>
                              ))}
                            </div>

                            <div className="mt-4 text-xs text-gray-600 text-center">
                              <p className="font-medium">Real-time data from our patient care system</p>
                              <p className="font-medium">Updated weekly based on patient outcomes</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Scroll Right Button */}
            {showScrollButtons && (
              <button 
                onClick={scrollRight}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors duration-200 z-10 ml-2"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} className="text-gray-700" />
              </button>
            )}
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
              {navLinks.map((link) => (
                <motion.div key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-3 py-3 text-lg font-extrabold rounded-md transition-colors duration-200 ${
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