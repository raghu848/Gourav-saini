'use client'

import { useState, useEffect } from 'react'
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Twitter 
} from 'lucide-react'

const StickySocialButtons = () => {
  const [isVisible, setIsVisible] = useState(true)

  // Handle scroll visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(true) // Always visible, but you can adjust this if needed
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const socialLinks = [
    { href: 'https://www.facebook.com/profile.php?id=61576684413754', icon: Facebook, label: 'Facebook', color: 'bg-blue-600' },
    { href: 'https://instagram.com/drgauravsainichd', icon: Instagram, label: 'Instagram', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
    { href: 'https://x.com/DrGauravSaini15', icon: Twitter, label: 'Twitter', color: 'bg-black' },
    { href: 'https://linkedin.com/in/drgauravsaini', icon: Linkedin, label: 'LinkedIn', color: 'bg-blue-700' },
    { href: 'https://www.youtube.com/@drgauravsaini_official', icon: Youtube, label: 'YouTube', color: 'bg-red-600' },
  ]

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-32 right-8 z-40 flex flex-col items-center gap-3">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex items-center justify-center w-12 h-12 rounded-full
                  ${social.color}
                  shadow-lg hover:shadow-xl
                  transform hover:scale-110 transition-all duration-300
                  border-2 border-white
                `}
                aria-label={social.label}
              >
                <IconComponent className="text-white w-5 h-5" />
              </a>
            )
          })}
        </div>
      )}
    </>
  )
}

export default StickySocialButtons