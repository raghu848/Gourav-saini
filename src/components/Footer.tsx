'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  MessageCircle,
  ArrowRight
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Dr. Saini' },
    { href: '/services', label: 'Services' },
    { href: '/testimonials', label: 'Patient Reviews' },
    { href: '/blog', label: 'Health Blog' },
    { href: '/contact', label: 'Contact Us' },
  ]

  const services = [
    { href: '/services/knee-replacement', label: 'Knee Replacement Surgery' },
    { href: '/services/arthroscopy', label: 'Arthroscopic Surgery' },
    { href: '/services/sports-injury', label: 'Sports Injury Treatment' },
    { href: '/services/joint-care', label: 'Joint Pain Management' },
    { href: '/services/fracture-care', label: 'Fracture Care' },
  ]

  const socialLinks = [
    { href: 'https://facebook.com/drgauravsaini', icon: Facebook, label: 'Facebook' },
    { href: 'https://instagram.com/drgauravsaini', icon: Instagram, label: 'Instagram' },
    { href: 'https://linkedin.com/in/drgauravsaini', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://youtube.com/@drgauravsaini', icon: Youtube, label: 'YouTube' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-400 bg-white shadow-lg mr-4">
                <Image
                  src="/images/dr-saini-logo.jpg"
                  alt="Dr. Gaurav Saini"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
                <div className="hidden absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  DS
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 font-serif text-blue-400">
                  Dr. Gaurav Saini
                </h3>
                <p className="text-sm text-gray-300">
                  Senior Consultant Orthopaedics
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Expert Orthopedician & Knee Replacement Specialist dedicated to restoring mobility and relieving pain with precision and compassion.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white flex items-center group transition-colors duration-200"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white flex items-center group transition-colors duration-200"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {service.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">Contact Info</h4>
            <div className="space-y-4">
              
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Cabin No 9B Ground floor, Max Hospital<br />
                    Near Civil Hospital, 56A, Phase 6, Sector 56<br />
                    Sahibzada Ajit Singh Nagar, Punjab 160055
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+919878777393"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  +91 98787 77393
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:info@drgauravsaini.com"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  info@drgauravsaini.com
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3">
                <Clock size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Monday to Saturday: 9:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="pt-4">
                <a
                  href="https://wa.me/919878777393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  <MessageCircle size={16} />
                  <span className="text-sm font-medium">Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Dr. Gaurav Saini. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Strip */}
      <div className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left">
            <span className="text-sm font-medium">
              Emergency? Call us: 
            </span>
            <a
              href="tel:+919878777393"
              className="text-sm font-bold ml-2 hover:underline"
            >
              +91 98787 77393
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer