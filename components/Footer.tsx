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
  Twitter
} from 'lucide-react'
import { useState, useEffect } from 'react'

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear()) // Initialize with client date
  const [isClient, setIsClient] = useState(false) // Track if we're on client

  // Set isClient to true on mount (client-side only)
  useEffect(() => {
    setIsClient(true)
    // Update year to ensure it's current
    setCurrentYear(new Date().getFullYear())
  }, [])

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blogs' },
    { href: '/contact', label: 'Contact' },
  ]

  const socialLinks = [
    { href: 'https://www.facebook.com/profile.php?id=61576684413754', icon: Facebook, label: 'Facebook' },
    { href: 'https://instagram.com/drgauravsainichd', icon: Instagram, label: 'Instagram' },
    { href: 'https://x.com/DrGauravSaini15', icon: Twitter, label: 'Twitter' },
    { href: 'https://linkedin.com/in/drgauravsaini', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://www.youtube.com/@drgauravsaini_official', icon: Youtube, label: 'YouTube' },
  ]

  const legalLinks = [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/sitemap', label: 'Sitemap' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 text-sm">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* About Section with Simplified Logo */}
          <div>
            <div className="flex items-center mb-4">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-gray-700 mr-3">
                <Image
                  src="/images/dr-saini-logo.jpg"
                  alt="Dr. Gaurav Saini"
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Dr. Gaurav Saini
                </h3>
                <p className="text-sm text-gray-400 font-bold">
                  Senior Consultant Orthopaedics
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4 font-bold">
              Expert Orthopedician & Knee Replacement Specialist dedicated to restoring mobility and relieving pain.
            </p>
            
            {/* Social Links - Simplified */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent size={24} className="transition-transform duration-200 hover:scale-110" />
                  </a>
                )
              })}
            </div>
            
            {/* WhatsApp Link - Moved below social media icons on the left side */}
            <div className="mt-4">
              <a
                href="https://wa.me/919876777393"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-3 rounded w-full justify-center text-base font-bold hover:bg-green-700 transition-colors duration-200"
              >
                <MessageCircle size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Contact Info - Simplified */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Info</h4>
            <div className="space-y-4">
              
              {/* Address */}
              <div className="flex gap-2">
                <MapPin size={16} className="text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm font-bold">
                    Cabin No 26 Ground floor, MAX SUPER SPECIALTY HOSPITAL, 56A, near Civil Hospital, Phase 6, Sector 56, Sahibzada Ajit Singh Nagar, Punjab 160055
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-2">
                <Phone size={16} className="text-gray-400 flex-shrink-0" />
                <a
                  href="tel:+919876777393"
                  className="text-gray-400 hover:text-white font-bold"
                >
                  +91 98767 77393
                </a>
              </div>

              {/* Email */}
              <div className="flex gap-2">
                <Mail size={16} className="text-gray-400 flex-shrink-0" />
                <a
                  href="mailto:info@drgauravsainiortho.com"
                  className="text-gray-400 hover:text-white font-bold"
                >
                  info@drgauravsainiortho.com
                </a>
              </div>

              {/* Hours */}
              <div className="flex gap-2">
                <Clock size={16} className="text-gray-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400 text-sm font-bold">
                  Monday to Saturday: 9:00 AM - 4:00 PM
                  Sunday: Closed
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links - Simplified */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm font-bold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Map Section - Moved from Services position */}
          <div>
            <h4 className="text-lg font-bold text-white mb-3">Find Us</h4>
            
            <div className="relative w-full h-40 rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.878985413344!2d76.6789063151447!3d30.72445198164194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef111d418825%3A0x4a2a3e0a0d0d0d0d!2sMax%20Super%20Speciality%20Hospital!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hospital Location"
              ></iframe>
            </div>
            
            {/* Directions Link */}
            <a 
              href="https://www.google.com/maps/dir//Cabin+No+26+Ground+floor,+MAX+SUPER+SPECIALTY+HOSPITAL,+56A,+near+Civil+Hospital,+Phase+6,+Sector+56,+Sahibzada+Ajit+Singh+Nagar,+Punjab+160055/@30.740054,76.6318948,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390fef3afc0a4d67:0xa2a365fdad38645f!2m2!1d76.7142961!2d30.74008?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-3 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-base font-bold"
            >
              <MapPin size={16} className="mr-2" />
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Simplified */}
      <div className="border-t border-gray-800 bg-gray-900 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-gray-500 text-xs font-bold">© {currentYear} Dr. Gaurav Saini. All rights reserved.</p>
          <div className="flex gap-4">
            {legalLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="text-gray-500 hover:text-white text-xs font-bold">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Bar - Simplified */}
      <div className="bg-red-700 text-white py-2 px-4 text-sm text-center">
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-2">
          <span className="font-bold">Emergency? Call us:</span>
          <a href="tel:+919876777393" className="font-bold">+91 98767 77393</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer