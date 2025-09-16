'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, MessageCircle, Calendar, ChevronDown, MapPin, User } from 'lucide-react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [imageError, setImageError] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false)
      }
    }

    if (isServicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isServicesDropdownOpen])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services', hasDropdown: true },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  const servicesItems = [
    'Knee Replacement Surgery',
    'Hip Replacement Surgery', 
    'Robotic Surgery',
    'Sports Injury Treatment',
    'Arthroscopic Surgery',
    'Spine Surgery'
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' 
          : 'bg-white/90 backdrop-blur-md shadow-md'
      }`}>
        
        {/* Top Info Bar - Hidden on mobile and small screens */}
        <div className="hidden xl:block bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2.5">
          <div className="max-w-screen-2xl mx-auto px-4">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <MapPin size={14} />
                  <span className="text-xs lg:text-sm">Chandigarh, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={14} />
                  <span className="text-xs lg:text-sm">+91 98767 77393</span>
                </div>
              </div>
              <div className="text-xs lg:text-sm font-medium">
                Available 24/7 for Emergency Cases
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="w-full">
          <div className="max-w-screen-2xl mx-auto px-2 sm:px-4 lg:px-6">
            <div className="flex justify-between items-center h-16 lg:h-20">
              
              {/* Logo Section */}
              <Link href="/" className="flex items-center space-x-2 lg:space-x-4 group flex-shrink-0 min-w-0">
                <div className="relative w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden border-2 border-blue-200 bg-white shadow-md group-hover:shadow-lg transition-all duration-300 p-0.5 flex-shrink-0">
                  {!imageError ? (
                    <Image
                      src="/images/dr-saini-logo.jpg"
                      alt="Dr. Gaurav Saini"
                      width={64}
                      height={64}
                      className="w-full h-full rounded-full object-contain object-top"
                      style={{ objectPosition: '50% 20%' }}
                      priority
                      unoptimized
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                      <User size={24} className="text-blue-600" />
                    </div>
                  )}
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <h1 className="text-sm sm:text-base lg:text-xl xl:text-2xl font-bold text-gray-900 leading-tight truncate">
                    Dr. Gaurav Saini
                  </h1>
                  <p className="text-xs sm:text-sm lg:text-base text-blue-600 font-medium truncate">
                    Orthopaedics & Robotic Surgery
                  </p>
                </div>
              </Link>

              {/* Desktop Navigation Links - Hidden on smaller screens */}
              <div className="hidden xl:flex items-center space-x-4 2xl:space-x-8 flex-shrink-0">
                {navLinks.map((link) => (
                  <div 
                    key={link.href}
                    className="relative group"
                    ref={link.hasDropdown ? servicesRef : null}
                    onMouseEnter={link.hasDropdown ? () => setIsServicesDropdownOpen(true) : undefined}
                    onMouseLeave={link.hasDropdown ? () => setIsServicesDropdownOpen(false) : undefined}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center space-x-1 px-2 lg:px-4 py-2 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 whitespace-nowrap ${
                        pathname === link.href
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      {link.hasDropdown && <ChevronDown size={16} className={`transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />}
                    </Link>

                    {/* Services Dropdown */}
                    {link.hasDropdown && isServicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                          <h3 className="text-white font-bold text-lg">Our Services</h3>
                          <p className="text-blue-100 text-sm">Comprehensive orthopaedic care</p>
                        </div>
                        <div className="p-2">
                          {servicesItems.map((service, index) => (
                            <Link
                              key={index}
                              href="/services"
                              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 text-sm font-medium"
                            >
                              {service}
                            </Link>
                          ))}
                        </div>
                        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                          <Link 
                            href="/services"
                            className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
                          >
                            View All Services →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Desktop CTA Buttons */}
              <div className="hidden lg:flex items-center space-x-1 lg:space-x-3 flex-shrink-0">
                <a
                  href="tel:+919876777393"
                  className="flex items-center space-x-1 lg:space-x-2 px-2 lg:px-4 py-2 lg:py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg lg:rounded-xl transition-all duration-300 font-medium text-xs lg:text-sm"
                >
                  <Phone size={16} />
                  <span className="hidden lg:inline">Call</span>
                </a>
                <a
                  href="https://wa.me/919876777393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 lg:space-x-2 px-2 lg:px-4 py-2 lg:py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg lg:rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl text-xs lg:text-sm"
                >
                  <MessageCircle size={16} />
                  <span className="hidden lg:inline">WhatsApp</span>
                </a>
                <Link
                  href="/book-appointment"
                  className="flex items-center space-x-1 lg:space-x-2 px-3 lg:px-6 py-2 lg:py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg lg:rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-xs lg:text-sm"
                >
                  <Calendar size={16} />
                  <span>Book Now</span>
                </Link>
              </div>

              {/* Tablet Menu (md to xl) */}
              <div className="hidden md:flex lg:hidden items-center space-x-2">
                <a
                  href="tel:+919876777393"
                  className="p-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-all duration-300"
                  title="Call"
                >
                  <Phone size={18} />
                </a>
                <a
                  href="https://wa.me/919876777393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all duration-300"
                  title="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
                <Link
                  href="/book-appointment"
                  className="px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold text-sm transition-all duration-300"
                >
                  Book
                </Link>
                <button
                  onClick={toggleMenu}
                  className="p-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-300"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-300 flex-shrink-0"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Navigation Menu */}
        <div className={`xl:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white border-t border-gray-100">
            <div className="max-w-screen-2xl mx-auto px-4 py-6 space-y-1">
              
              {/* Mobile Top Info */}
              <div className="xl:hidden flex flex-col sm:flex-row sm:justify-between items-center pb-6 border-b border-gray-100 mb-4 space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">Chandigarh, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">+91 98767 77393</span>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        className="flex items-center justify-between w-full px-4 py-4 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-300 font-medium"
                      >
                        <span>{link.label}</span>
                        <ChevronDown size={20} className={`transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isServicesDropdownOpen && (
                        <div className="ml-4 mt-2 space-y-1">
                          {servicesItems.map((service, index) => (
                            <Link
                              key={index}
                              href="/services"
                              className="block px-4 py-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200"
                              onClick={() => setIsOpen(false)}
                            >
                              {service}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block px-4 py-4 rounded-xl font-medium transition-all duration-300 ${
                        pathname === link.href
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="space-y-3 pt-6 border-t border-gray-100 md:hidden">
                <a
                  href="tel:+919876777393"
                  className="flex items-center justify-center space-x-3 w-full px-6 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-all duration-300 font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone size={20} />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/919876777393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 w-full px-6 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-all duration-300 font-semibold shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </a>
                <Link
                  href="/book-appointment"
                  className="flex items-center justify-center space-x-3 w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all duration-300 font-semibold shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <Calendar size={20} />
                  <span>Book Appointment</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16 lg:h-12   xl:h-22"></div>
    </>
  )
}

export default Navbar