'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, MessageCircle, Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [showScrollButtons, setShowScrollButtons] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

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
    // { href: '/book-appointment', label: 'BOOK APPOINMENT' },  // Removed from navbar but functionality remains
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-lg border-b border-blue-100 p-2">
      <div className="">
        <div className="flex justify-between items-center overflow-hidden">
          {/* Logo + Branding */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-200 bg-white shadow-md flex items-center justify-center p-1 ml-[40px]">
              <Image
                src="/images/dr-saini-logo.jpg?v=3"
                alt="Dr. Gaurav Saini Logo"
                width={60}
                height={60}
                className="object-contain w-full h-full"
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
              <span className="text-xl sm:text-sm font-extrabold text-blue-900 font-serif">
                Dr. Gaurav Saini
              </span>
              <span className="text-xs sm:text-sm text-gray-600 font-medium">
                Orthopaedics & Robotic Surgery Specialist
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1 max-w-4xl">
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
                <div 
                  key={link.href} 
                  className="relative group z-10 flex-shrink-0"
                  ref={link.href === '/services' ? servicesRef : null}
                  onMouseEnter={link.href === '/services' ? () => setIsServicesDropdownOpen(true) : undefined}
                  onMouseLeave={link.href === '/services' ? () => setIsServicesDropdownOpen(false) : undefined}
                >
                  <Link
                    href={link.href}
                    className={`px-3 py-2 text-sm font-extrabold whitespace-nowrap transition-colors duration-200 ${
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
                        : 'w-0'
                    }`}
                  />
                  
                  {/* Services Dropdown */}
                  {link.href === '/services' && isServicesDropdownOpen && (
                    <div className="fixed w-96" style={{ zIndex: 100 }}>
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-5">
                        <div className="text-center text-gray-700">
                          <p>Services dropdown content would appear here</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
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
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <div key={link.href}>
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
              </div>
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
        </div>
      )}
    </nav>
  )
}

export default Navbar