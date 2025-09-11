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

  // Sample data for the enhanced medical-themed charts
  const serviceData = [
    { name: 'Knee', value: 99, color: 'from-blue-400 to-cyan-300' },
    { name: 'Hip', value: 98, color: 'from-blue-500 to-cyan-400' }, 
    { name: 'Shoulder', value: 97, color: 'from-blue-600 to-cyan-500' },
    { name: 'Sports injury', value: 99, color: 'from-blue-700 to-cyan-600' },
  ]

  const recoveryData = [
    { name: 'Week 1', recovery: 20, color: 'from-green-400 to-emerald-300' },
    { name: 'Week 2', recovery: 45, color: 'from-green-500 to-emerald-400' },
    { name: 'Week 3', recovery: 65, color: 'from-green-600 to-emerald-500' },
    { name: 'Week 4', recovery: 85, color: 'from-green-700 to-emerald-600' },
    { name: 'Week 5', recovery: 95, color: 'from-green-800 to-emerald-700' },
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
        <div className="flex justify-between items-center h-24 overflow-hidden">
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
              <span className="text-xl sm:text-2xl font-extrabold text-blue-900 font-serif">
                Dr. Gaurav Saini
              </span>
              <span className="text-xs sm:text-sm text-gray-600 font-medium">
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
                              {/* Enhanced Medical-Themed Pie Chart */}
                              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100 backdrop-blur-sm">
                                <h3 className="text-sm font-bold text-blue-900 mb-3 text-center">Patient Distribution</h3>
                                <div className="relative w-32 h-32 mx-auto">
                                  <div className="absolute inset-0 rounded-full border-4 border-blue-100"></div>
                                  {serviceData.map((service, index) => {
                                    const cumulativePercentage = serviceData
                                      .slice(0, index)
                                      .reduce((sum, s) => sum + s.value, 0);
                                    const percentage = service.value;
                                    const strokeDasharray = `${percentage} ${100 - percentage}`;
                                    const strokeDashoffset = -cumulativePercentage;
                                    
                                    // Extract colors safely
                                    const colorParts = service.color.split(' ');
                                    const startColor = colorParts[0]?.replace('from-', '') || 'blue-400';
                                    const endColor = colorParts[2]?.replace('to-', '') || 'cyan-300';
                                    
                                    // Map Tailwind color names to actual hex values
                                    const colorMap: Record<string, string> = {
                                      'blue-400': '#60a5fa',
                                      'blue-500': '#3b82f6',
                                      'blue-600': '#2563eb',
                                      'blue-700': '#1d4ed8',
                                      'cyan-300': '#67e8f9',
                                      'cyan-400': '#22d3ee',
                                      'cyan-500': '#06b6d4',
                                      'cyan-600': '#0891b2',
                                    };
                                    
                                    return (
                                      <svg
                                        key={service.name}
                                        viewBox="0 0 36 36"
                                        className="absolute inset-0 w-full h-full"
                                      >
                                        <path
                                          d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                          fill="none"
                                          stroke={`url(#gradient-${index})`}
                                          strokeWidth="4"
                                          strokeDasharray={strokeDasharray}
                                          strokeDashoffset={strokeDashoffset}
                                          strokeLinecap="round"
                                        />
                                        <defs>
                                          <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor={colorMap[startColor] || '#60a5fa'} />
                                            <stop offset="100%" stopColor={colorMap[endColor] || '#22d3ee'} />
                                          </linearGradient>
                                        </defs>
                                      </svg>
                                    );
                                  })}
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-xs font-bold text-blue-900">100%</span>
                                  </div>
                                </div>
                                <div className="mt-3 grid grid-cols-2 gap-2">
                                  {serviceData.map((service, index) => {
                                    // Extract colors safely
                                    const colorParts = service.color.split(' ');
                                    const startColor = colorParts[0]?.replace('from-', '') || 'blue-400';
                                    const endColor = colorParts[2]?.replace('to-', '') || 'cyan-300';
                                    
                                    // Map Tailwind color names to actual hex values
                                    const colorMap: Record<string, string> = {
                                      'blue-400': '#60a5fa',
                                      'blue-500': '#3b82f6',
                                      'blue-600': '#2563eb',
                                      'blue-700': '#1d4ed8',
                                      'cyan-300': '#67e8f9',
                                      'cyan-400': '#22d3ee',
                                      'cyan-500': '#06b6d4',
                                      'cyan-600': '#0891b2',
                                    };
                                    
                                    return (
                                      <div key={service.name} className="flex items-center">
                                        <div 
                                          className="w-3 h-3 rounded-full mr-2"
                                          style={{ 
                                            background: `linear-gradient(135deg, ${colorMap[startColor] || '#60a5fa'}, ${colorMap[endColor] || '#22d3ee'})`
                                          }}
                                        ></div>
                                        <span className="text-xs text-gray-700">
                                          {service.name}: {service.value}%
                                        </span>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>

                              {/* Enhanced Medical-Themed Line Graph */}
                              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100 backdrop-blur-sm">
                                <h3 className="text-sm font-bold text-green-900 mb-3 text-center">Recovery Progress</h3>
                                <div className="h-32 relative">
                                  <div className="absolute inset-0 flex items-end">
                                    {/* Grid lines */}
                                    {[0, 25, 50, 75, 100].map((percent) => (
                                      <div 
                                        key={percent} 
                                        className="absolute w-full flex items-center"
                                        style={{ bottom: `${percent}%` }}
                                      >
                                        <div className="w-full h-px bg-green-200"></div>
                                        <span className="text-[10px] text-green-700 ml-1">{percent}%</span>
                                      </div>
                                    ))}
                                    
                                    {/* Line graph */}
                                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                      <path
                                        d={`M 0,${100 - recoveryData[0].recovery} ${recoveryData.map((data, i) => `L ${i * 25},${100 - data.recovery}`).join(' ')}`}
                                        fill="none"
                                        stroke="url(#lineGradient)"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      {recoveryData.map((data, i) => {
                                        // Extract colors safely
                                        const colorParts = data.color.split(' ');
                                        const startColor = colorParts[0]?.replace('from-', '') || 'green-400';
                                        const endColor = colorParts[2]?.replace('to-', '') || 'emerald-300';
                                        
                                        // Map Tailwind color names to actual hex values
                                        const colorMap: Record<string, string> = {
                                          'green-400': '#4ade80',
                                          'green-500': '#22c55e',
                                          'green-600': '#16a34a',
                                          'green-700': '#15803d',
                                          'green-800': '#166534',
                                          'emerald-300': '#6ee7b7',
                                          'emerald-400': '#34d399',
                                          'emerald-500': '#10b981',
                                          'emerald-600': '#059669',
                                          'emerald-700': '#047857',
                                        };
                                        
                                        return (
                                          <circle
                                            key={i}
                                            cx={i * 25}
                                            cy={100 - data.recovery}
                                            r="2"
                                            fill={`url(#dotGradient-${i})`}
                                            className="transition-all duration-300 hover:r-3"
                                          >
                                            <animate attributeName="r" values="2;3;2" dur="2s" repeatCount="indefinite" />
                                          </circle>
                                        );
                                      })}
                                      <defs>
                                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                          <stop offset="0%" stopColor="#34d399" />
                                          <stop offset="100%" stopColor="#059669" />
                                        </linearGradient>
                                        {recoveryData.map((data, i) => {
                                          // Extract colors safely
                                          const colorParts = data.color.split(' ');
                                          const startColor = colorParts[0]?.replace('from-', '') || 'green-400';
                                          const endColor = colorParts[2]?.replace('to-', '') || 'emerald-300';
                                          
                                          // Map Tailwind color names to actual hex values
                                          const colorMap: Record<string, string> = {
                                            'green-400': '#4ade80',
                                            'green-500': '#22c55e',
                                            'green-600': '#16a34a',
                                            'green-700': '#15803d',
                                            'green-800': '#166534',
                                            'emerald-300': '#6ee7b7',
                                            'emerald-400': '#34d399',
                                            'emerald-500': '#10b981',
                                            'emerald-600': '#059669',
                                            'emerald-700': '#047857',
                                          };
                                          
                                          return (
                                            <linearGradient key={i} id={`dotGradient-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                              <stop offset="0%" stopColor={colorMap[startColor] || '#4ade80'} />
                                              <stop offset="100%" stopColor={colorMap[endColor] || '#34d399'} />
                                            </linearGradient>
                                          );
                                        })}
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="mt-2 flex justify-between">
                                  {recoveryData.map((data) => (
                                    <span key={data.name} className="text-xs text-green-800">
                                      {data.name}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Enhanced Medical-Themed Services List */}
                            <div className="mt-4 grid grid-cols-2 gap-3">
                              {[
                                { name: 'Knee Surgery', icon: '🦴', startColor: 'blue-500', endColor: 'cyan-400' },
                                { name: 'Hip Replacement', icon: '🏥', startColor: 'green-500', endColor: 'emerald-400' },
                                { name: 'Shoulder Care', icon: '💪', startColor: 'purple-500', endColor: 'fuchsia-400' },
                                { name: 'Spine Treatment', icon: '🧘‍♂️', startColor: 'amber-500', endColor: 'orange-400' }
                              ].map((service, index) => (
                                <Link 
                                  key={index}
                                  href="/services"
                                  className="flex items-center space-x-2 p-3 rounded-xl hover:shadow-md transition-all duration-300 group border border-gray-100"
                                  style={{ 
                                    background: `linear-gradient(135deg, white 0%, #f8fafc 100%)`
                                  }}
                                >
                                  <div 
                                    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                                    style={{ 
                                      background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                                      backgroundImage: `linear-gradient(135deg, ${service.startColor === 'blue-500' ? '#3b82f6' : service.startColor === 'green-500' ? '#10b981' : service.startColor === 'purple-500' ? '#8b5cf6' : '#f59e0b'}, ${service.endColor === 'cyan-400' ? '#22d3ee' : service.endColor === 'emerald-400' ? '#34d399' : service.endColor === 'fuchsia-400' ? '#e879f9' : '#fb923c'})`
                                    }}
                                  >
                                    <span className="text-white font-bold">{service.icon}</span>
                                  </div>
                                  <span className="text-xs font-bold text-gray-800 group-hover:text-gray-900">
                                    {service.name}
                                  </span>
                                </Link>
                              ))}
                            </div>

                            <div className="mt-4 text-center">
                              {/* <p className="text-xs text-gray-600 font-medium bg-blue-50 rounded-lg py-2 px-3 inline-block">
                                Real-time data from our patient care system
                              </p>
                              <p className="text-xs text-gray-600 font-medium bg-green-50 rounded-lg py-2 px-3 inline-block mt-1">
                                Updated weekly based on patient outcomes
                              </p> */}
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
              className="flex items-center space-x-2 bg-blue-900 text-white px-6 py-3.5 rounded-lg hover:bg-blue-800 transition-colors duration-200 shadow-md font-bold text-base whitespace-nowrap"
            >
              <Calendar size={18} />
              <span>Book Now</span>
            </Link>
            <a
              href="tel:+919876777393"
              className="flex items-center space-x-2 bg-gray-700 text-white px-5 py-3.5 rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-md font-bold text-base whitespace-nowrap"
            >
              <Phone size={18} />
              <span>Call</span>
            </a>
            <a
              href="https://wa.me/919876777393"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-600 text-white px-5 py-3.5 rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md font-bold text-base whitespace-nowrap"
            >
              <MessageCircle size={18} />
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
                  className="flex items-center justify-center space-x-2 bg-blue-900 text-white px-5 py-4 rounded-lg hover:bg-blue-800 transition-colors duration-200 shadow-md font-bold text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <Calendar size={20} />
                  <span>Book Appointment</span>
                </Link>
                <a
                  href="tel:+919876777393"
                  className="flex items-center justify-center space-x-2 bg-gray-700 text-white px-5 py-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-md font-bold text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone size={20} />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/919876777393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-600 text-white px-5 py-4 rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md font-bold text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <MessageCircle size={20} />
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