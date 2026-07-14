'use client'

import { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, MapPin } from 'lucide-react'

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM'
]

const services = [
  'General Consultation',
  'Knee Replacement Surgery',
  'Hip Replacement Surgery', 
  'Sports Injury Treatment',
  'Arthroscopic Surgery',
  'Fracture Care',
  'Joint Pain Management',
  'Robotic Surgery Consultation'
]

export default function BookAppointmentForm() {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedService, setSelectedService] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [consent, setConsent] = useState(false)
  const [dates, setDates] = useState<{date: string, display: string}[]>([]) // Store generated dates
  const [isClient, setIsClient] = useState(false) // Track if we're on client

  // Set isClient to true on mount (client-side only)
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Generate calendar dates for the next 30 days (client-side only)
  useEffect(() => {
    if (isClient) {
      const generateDates = () => {
        const dates = []
        const today = new Date()
        
        for (let i = 1; i <= 30; i++) {
          const date = new Date(today)
          date.setDate(today.getDate() + i)
          
          // Skip Sundays (0 = Sunday)
          if (date.getDay() !== 0) {
            dates.push({
              date: date.toISOString().split('T')[0],
              display: date.toLocaleDateString('en-US', { 
                weekday: 'short', 
                month: 'short', 
                day: 'numeric' 
              })
            })
          }
        }
        return dates
      }
      
      setDates(generateDates())
    }
  }, [isClient])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create WhatsApp message
    const message = `Hello Dr. Saini, I would like to book an appointment:
    
📅 Date: ${selectedDate}
⏰ Time: ${selectedTime}
🏥 Service: ${selectedService}
👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}
💬 Message: ${formData.message}`

    // Only open window on client-side
    if (isClient && typeof window !== 'undefined') {
      const whatsappUrl = `https://wa.me/919876777393?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 mt-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 font-serif mb-6">
            Book Orthopedic Appointment
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Schedule a consultation with Dr. Gaurav Saini - Expert in Orthopedics & Robotic Surgery
          </p>
          
          {/* Clinic Info */}
          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-gray-800 font-medium">Max Hospital, Mohali</span>
            </div>
            <p className="text-sm text-gray-600">
              Cabin No 26 Ground floor, near Civil Hospital, Phase 6, Sector 56<br />
              Sahibzada Ajit Singh Nagar, Punjab 160055
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-8" autoComplete="off">
            
            {/* Service Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4 flex items-center">
                <MessageSquare className="w-4 h-4 mr-2" />
                Select Service
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {services.map((service) => (
                  <button
                    key={`service-${service}`}
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className={`p-3 text-left rounded-lg border-2 transition-colors duration-200 ${
                      selectedService === service
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Date Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Select Date
              </label>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-h-40 overflow-y-auto">
                {dates.map((dateObj) => (
                  <button
                    key={`date-${dateObj.date}`}
                    type="button"
                    onClick={() => setSelectedDate(dateObj.date)}
                    className={`p-3 text-sm rounded-lg border-2 transition-colors duration-200 ${
                      selectedDate === dateObj.date
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    {dateObj.display}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4 flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Select Time
              </label>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={`time-${time}`}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 text-sm rounded-lg border-2 transition-colors duration-200 ${
                      selectedTime === time
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Full Name *
                </label>
                <input
                  key="appointment-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                  autoComplete="off"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Phone Number *
                </label>
                <input
                  key="appointment-phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                  autoComplete="off"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Email Address
              </label>
              <input
                key="appointment-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email address"
                autoComplete="off"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Message
              </label>
              <textarea
                key="appointment-message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Any specific concerns or additional information..."
                autoComplete="off"
              />
            </div>

            {/* Privacy Consent Checkbox */}
            <div className="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100 mb-6">
              <div className="flex items-center h-5 mt-0.5">
                <input
                  id="consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                />
              </div>
              <div className="ml-3 text-sm text-left">
                <label htmlFor="consent" className="font-semibold text-gray-700 cursor-pointer select-none">
                  I consent to the collection of my personal contact details for appointment booking purposes in accordance with the <a href="/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</a>. *
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                key="appointment-submit"
                type="submit"
                disabled={!selectedDate || !selectedTime || !selectedService || !formData.name || !formData.phone || !consent}
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Book Appointment via WhatsApp
              </button>
              
              <p className="text-sm text-gray-600 mt-4">
                Your appointment request will be sent via WhatsApp for immediate confirmation
              </p>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Appointment Guidelines
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <ul className="list-disc list-inside space-y-1">
                  <li>Appointments are available Monday to Saturday, 9:00 AM - 4:00 PM</li>
                  <li>Please arrive 15 minutes early for your appointment</li>
                  <li>Bring your medical reports and previous prescriptions</li>
                  <li>For emergency cases, please call directly: +91 98767 77393</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}