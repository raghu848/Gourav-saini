'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle
} from 'lucide-react';

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form data:', data)
    setIsSubmitted(true)
    setIsSubmitting(false)
    reset();
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Cabin No 26 Ground floor, MAX SUPER SPECIALTY HOSPITAL, 56A, near Civil Hospital, Phase 6, Sector 56', 'Sahibzada Ajit Singh Nagar, Punjab 160055'],
      action: null
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 98767 77393'],
      action: 'tel:+919876777393'
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
                  {"Thank you for your message! We'll get back to you soon."}
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" autoComplete="off">
              
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  key="contact-name"
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                  autoComplete="off"
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
                  key="contact-email"
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
                  autoComplete="off"
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
                  key="contact-phone"
                  type="tel"
                  id="phone"
                  {...register('phone', { required: 'Phone number is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                  autoComplete="off"
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
                  key="contact-subject"
                  id="subject"
                  {...register('subject', { required: 'Please select a subject' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  autoComplete="off"
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
                  key="contact-message"
                  id="message"
                  rows={4}
                  {...register('message', { required: 'Message is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your condition or questions..."
                  autoComplete="off"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                key="contact-submit"
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
                  href="tel:+919876777393"
                  className="flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
                
                <a
                  href="https://wa.me/919876777393"
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
                href="tel:+919876777393"
                className="inline-flex items-center px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                Emergency: +91 98767 77393
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-96">
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
          <div className="p-6 bg-gray-50">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Max Super Speciality Hospital</h3>
                <p className="text-gray-600 mt-1">
                  Cabin No 26 Ground floor, MAX SUPER SPECIALTY HOSPITAL, Near Civil Hospital<br/>
                  56A, Phase 6, Sector 56, Sahibzada Ajit Singh Nagar, Punjab 160055
                </p>
              </div>
              <a 
                href="https://www.google.com/maps/dir//Cabin+No+26+Ground+floor,+MAX+SUPER+SPECIALTY+HOSPITAL,+56A,+near+Civil+Hospital,+Phase+6,+Sector+56,+Sahibzada+Ajit+Singh+Nagar,+Punjab+160055/@30.740054,76.6318948,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390fef3afc0a4d67:0xa2a365fdad38645f!2m2!1d76.7142961!2d30.74008?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}