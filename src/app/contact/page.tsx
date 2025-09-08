'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { useForm } from 'react-hook-form'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle
} from 'lucide-react'

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form data:', data)
    setIsSubmitted(true)
    setIsSubmitting(false)
    reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Cabin No 9B Ground floor, Max Hospital', 'Near Civil Hospital, 56A, Phase 6, Sector 56', 'Sahibzada Ajit Singh Nagar, Punjab 160055'],
      action: null
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 98787 77393'],
      action: 'tel:+919878777393'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@drgauravsaini.com'],
      action: 'mailto:info@drgauravsaini.com'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Monday to Saturday: 9:00 AM - 4:00 PM', 'Sunday: Closed'],
      action: null
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 font-serif mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your journey to better health? Get in touch with Dr. Gaurav Saini and his team
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
              Send us a Message
            </h2>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-green-800">
                  Thank you for your message! We'll get back to you soon.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone', { required: 'Phone number is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  {...register('subject', { required: 'Please select a subject' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="consultation">Book Consultation</option>
                  <option value="knee-replacement">Knee Replacement Inquiry</option>
                  <option value="arthroscopy">Arthroscopy Information</option>
                  <option value="sports-injury">Sports Injury Treatment</option>
                  <option value="second-opinion">Second Opinion</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register('message', { required: 'Message is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your condition or questions..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          info.action ? (
                            <a
                              key={i}
                              href={info.action}
                              className="block text-gray-700 hover:text-blue-600 transition-colors duration-200"
                            >
                              {detail}
                            </a>
                          ) : (
                            <p key={i} className="text-gray-700">{detail}</p>
                          )
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 font-serif">
                Quick Actions
              </h3>
              
              <div className="space-y-4">
                <a
                  href="tel:+919878777393"
                  className="flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
                
                <a
                  href="https://wa.me/919878777393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Chat
                </a>
                
                <a
                  href="mailto:info@drgauravsaini.com"
                  className="flex items-center justify-center w-full px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </a>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                Medical Emergency?
              </h3>
              <p className="text-red-700 mb-4">
                For urgent medical situations, please call our emergency line or visit the nearest hospital.
              </p>
              <a
                href="tel:+919878777393"
                className="inline-flex items-center px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                Emergency: +91 98787 77393
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-96 bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                Interactive map will be integrated here
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Cabin No 9B Ground floor, Max Hospital, Near Civil Hospital<br/>
                56A, Phase 6, Sector 56, Sahibzada Ajit Singh Nagar, Punjab 160055
              </p>
              <a 
                href="https://www.google.com/maps/dir//Cabin+No+9B+Ground+floor,+Max+Hospital,+near+Civil+Hospital,+56A,+Phase+6,+Sector+56,+Sahibzada+Ajit+Singh+Nagar,+Punjab+160055/@30.740054,76.6318948,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390fef3afc0a4d67:0xa2a365fdad38645f!2m2!1d76.7142961!2d30.74008?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <MapPin className="w-4 h-4 mr-2" />
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}