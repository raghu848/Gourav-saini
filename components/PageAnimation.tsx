'use client'

import React, { Suspense } from 'react'
import { usePathname } from 'next/navigation'

// Dynamically import animation components
import HomeAnimation from './animations/HomeAnimation'
import AboutAnimation from './animations/AboutAnimation'
import ServicesAnimation from './animations/ServicesAnimation'
import TestimonialsAnimation from './animations/TestimonialsAnimation'
import BlogAnimation from './animations/BlogAnimation'
import ContactAnimation from './animations/ContactAnimation'
import BookAppointmentAnimation from './animations/BookAppointmentAnimation'

const PageAnimation = () => {
  const pathname = usePathname()
  
  // Map pathname to animation component
  const getAnimationComponent = () => {
    switch (pathname) {
      case '/':
        return <HomeAnimation />
      case '/about':
        return <AboutAnimation />
      case '/services':
        return <ServicesAnimation />
      case '/testimonials':
        return <TestimonialsAnimation />
      case '/blog':
        return <BlogAnimation />
      case '/contact':
        return <ContactAnimation />
      case '/book-appointment':
        return <BookAppointmentAnimation />
      default:
        return <HomeAnimation />
    }
  }

  return (
    <Suspense fallback={null}>
      {getAnimationComponent()}
    </Suspense>
  )
}

export default PageAnimation