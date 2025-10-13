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
  const mobileMenuRef = useRef<HTMLDivElement>(null)
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
    const target = event.target as Node;

    // ✅ Desktop: close services dropdown if clicked outside
    if (window.innerWidth >= 1280) { // xl breakpoint
      if (servicesRef.current && !servicesRef.current.contains(target)) {
        setIsServicesDropdownOpen(false);
      }
    }

    // ✅ Mobile/Tablet: close menu when clicking outside container
    if (isOpen && !(target as Element).closest(".mobile-menu-container")) {
      setIsOpen(false);
      setIsServicesDropdownOpen(false);
    }
  };

  if (isServicesDropdownOpen || isOpen) {
    document.addEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [isServicesDropdownOpen, isOpen]);


  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services', hasDropdown: true },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  const servicesItems = [
    { name: 'Knee Replacement Surgery', link: '/services/knee-replacement-surgery' },
    { name: 'Hip Replacement Surgery', link: '/services/hip-replacement-surgery' }, 
    { name: 'Robotic Surgery', link: '/services/robotic-surgery' },
    { name: 'Sports Injury Treatment', link: '/services/sports-injury-treatment' },
    { name: 'Arthroscopic Surgery', link: '/services/arthroscopic-surgery' },
    { name: 'Spine Surgery', link: '/services/spine-surgery' }
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-100' 
          : 'bg-white/90 backdrop-blur-md shadow-lg'
      }`}>
        
        {/* Top Info Bar - Hidden on mobile and small screens */}
        <div className="hidden md:block bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700 text-white py-3">
          <div className="max-w-screen-2xl mx-auto px-4">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span className="text-sm">Chandigarh, India</span>
                </div>
                <a href="tel:+919876777393" className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
                  <Phone size={16} />
                  <span className="text-sm">+91 98767 77393</span>
                </a>
              </div>
              <div className="text-sm font-semibold">
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
                <div className="relative w-12 h-12 lg:w-16 lg:h-16 rounded-2xl overflow-hidden border-2 border-blue-200 bg-white shadow-lg group-hover:shadow-xl transition-all duration-300 p-1 flex-shrink-0">
                  {!imageError ? (
                    <Image
                      src="/images/dr-saini-logo.jpg"
                      alt="Dr. Gaurav Saini"
                      width={64}
                      height={64}
                      className="w-full h-full rounded-xl object-contain object-top"
                      style={{ objectPosition: '50% 50%' }}
                      priority
                      unoptimized
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-center justify-center">
                      <User size={28} className="text-blue-600" />
                    </div>
                  )}
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <h1 className="text-sm sm:text-base lg:text-xl xl:text-2xl font-bold text-gray-900 leading-tight truncate">
                    Dr. Gaurav Saini
                  </h1>
                  <p className="text-xs text-blue-800 font-medium truncate">
                  Orthopaedic & Robotic Surgeon
                  </p>
                </div>
              </Link>

              {/* Desktop Navigation Links - Hidden on smaller screens */}
              <div className="hidden lg:flex items-center space-x-2 xl:space-x-4 flex-shrink-0">
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
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-base font-bold transition-all duration-300 whitespace-nowrap ${
                        pathname === link.href
                          ? 'text-blue-800 bg-blue-50 shadow-sm'
                          : 'text-gray-800 hover:text-blue-800 hover:bg-blue-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      {link.hasDropdown && <ChevronDown size={16} className={`transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />}
                    </Link>

                    {/* Services Dropdown */}
                    {link.hasDropdown && isServicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                        <div className="bg-gradient-to-r from-blue-700 to-teal-600 px-6 py-4">
                          <h3 className="text-white font-bold text-lg">Our Services</h3>
                          <p className="text-blue-100 text-sm">Comprehensive orthopaedic care</p>
                        </div>
                        <div className="p-3">
                          {servicesItems.map((service, index) => (
                            <Link
                              key={index}
                              href={service.link}
                              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-all duration-200 text-sm font-medium"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                          <Link 
                            href="/services"
                            className="text-blue-700 font-semibold text-sm hover:text-blue-800 transition-colors"
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
              <div className="hidden lg:flex items-center space-x-2 flex-shrink-0">
                <a
                  href="tel:+919876777393"
                  className="flex items-center space-x-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-all duration-300 font-semibold text-sm shadow-sm hover:shadow-md"
                >
                  <Phone size={16} />
                  <span className="hidden xl:inline">Call</span>
                </a>
                <a
                  href="https://wa.me/919876777393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl text-sm"
                >
                  <MessageCircle size={16} />
                  <span className="hidden xl:inline">WhatsApp</span>
                </a>
                <Link
                  href="/book-appointment"
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-800 hover:to-teal-700 text-white rounded-lg transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
                >
                  <Calendar size={16} />
                  <span className="hidden xl:inline">Book Now</span>
                </Link>
              </div>

              {/* Tablet Menu (md to lg) */}
              <div className="hidden md:flex lg:hidden items-center space-x-2">
                <a
                  href="tel:+919876777393"
                  className="p-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-all duration-300 shadow-sm active:scale-95"
                  title="Call"
                >
                  <Phone size={20} />
                </a>
                <a
                  href="https://wa.me/919876777393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg transition-all duration-300 shadow-lg active:scale-95"
                  title="WhatsApp"
                >
                  <MessageCircle size={20} />
                </a>
                <Link
                  href="/book-appointment"
                  className="px-4 py-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-800 hover:to-teal-700 text-white rounded-lg font-bold transition-all duration-300 shadow-lg active:scale-95 text-sm"
                >
                  Book
                </Link>
                <button
                  onClick={toggleMenu}
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-300 shadow-sm active:scale-95"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="md:hidden flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-300 shadow-sm active:scale-95"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Navigation Menu */}
        <div className={`xl:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-[90vh] opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div 
            ref={mobileMenuRef}
            className="bg-white border-t border-gray-100 overflow-y-auto max-h-[calc(100vh-5rem)] mobile-menu-container"
          >
            <div className="max-w-screen-2xl mx-auto px-4 py-6 space-y-2">
              {/* Close Button for Mobile Menu - REMOVED AS PER USER REQUEST */}
              
              {/* Mobile Top Info */}
              <div className="xl:hidden flex flex-col sm:flex-row sm:justify-between items-center pb-6 border-b border-gray-100 mb-4 space-y-3 sm:space-y-0">
                <div className="flex items-center space-x-3">
                  <MapPin size={18} className="text-blue-600" />
                  <span className="text-base font-semibold text-gray-700">Chandigarh, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-blue-600" />
                  <span className="text-base font-semibold text-gray-700">+91 98767 77393</span>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsServicesDropdownOpen(!isServicesDropdownOpen);
                        }}
                        className="flex items-center justify-between w-full px-4 py-5 text-left text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 rounded-xl transition-all duration-300 font-bold text-xl shadow-sm border border-gray-200"
                      >
                        <span>{link.label}</span>
                        <ChevronDown size={24} className={`transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isServicesDropdownOpen && (
                        <div 
                          className="ml-0 mt-2 space-y-2 bg-blue-50 rounded-xl p-4 border border-blue-100"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="bg-gradient-to-r from-blue-700 to-teal-600 rounded-lg px-4 py-3 mb-2">
                            <h3 className="text-white font-bold text-lg">Our Services</h3>
                            <p className="text-blue-100 text-sm">Comprehensive orthopaedic care</p>
                          </div>
                          <div className="space-y-2">
                            {servicesItems.map((service, index) => (
                              <Link
                                key={index}
                                href={service.link}
                                className="block px-4 py-4 text-base text-gray-700 bg-white hover:bg-blue-100 hover:text-blue-600 rounded-lg transition-all duration-200 font-medium shadow-sm border border-gray-200 active:bg-blue-100 active:scale-95"
                                onClick={(e) => {
                                
                                  e.stopPropagation();
                                  setIsServicesDropdownOpen(false);
                                  setIsOpen(false);
                                }}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                          <div className="pt-2">
                            <Link 
                              href="/services"
                              className="inline-block px-6 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl font-bold text-lg hover:from-blue-800 hover:to-teal-700 transition-all duration-300 w-full text-center active:scale-95 shadow-lg"
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsServicesDropdownOpen(false);
                                setIsOpen(false);
                              }}
                            >
                              View All Services
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block px-4 py-5 rounded-xl font-bold text-xl transition-all duration-300 active:scale-95 ${
                        pathname === link.href
                          ? 'bg-gradient-to-r from-blue-50 to-teal-50 text-blue-600 shadow-sm'
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
              <div className="space-y-4 pt-6 border-t border-gray-100 md:hidden">
                <a
                  href="tel:+919876777393"
                  className="flex items-center justify-center space-x-3 w-full px-6 py-5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-all duration-300 font-bold text-lg shadow-md active:scale-95"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone size={24} />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/919876777393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 w-full px-6 py-5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl transition-all duration-300 font-bold text-lg shadow-lg active:scale-95"
                  onClick={() => setIsOpen(false)}
                >
                  <MessageCircle size={24} />
                  <span>WhatsApp</span>
                </a>
                <Link
                  href="/book-appointment"
                  className="flex items-center justify-center space-x-3 w-full px-6 py-5 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white rounded-xl transition-all duration-300 font-bold text-lg shadow-lg active:scale-95"
                  onClick={() => setIsOpen(false)}
                >
                  <Calendar size={24} />
                  <span>Book Appointment</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-12 lg:h-16 xl:h-20"></div>
    </>
  )
}

export default Navbar