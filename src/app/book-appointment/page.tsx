'use client'

import { useState } from 'react'
import { Metadata } from 'next'
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

export default function BookAppointmentPage() {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedService, setSelectedService] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  // Generate calendar dates for the next 30 days
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

    const whatsappUrl = `https://wa.me/919878777393?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 font-serif mb-4">
            Book Your Appointment
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Schedule a consultation with Dr. Gaurav Saini - Expert in Orthopedics & Robotic Surgery
          </p>
          
          {/* Clinic Info */}
          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-gray-800 font-medium">Max Hospital, Mohali</span>
            </div>
            <p className="text-sm text-gray-600">
              Cabin No 9B Ground floor, Near Civil Hospital, Phase 6, Sector 56<br />
              Sahibzada Ajit Singh Nagar, Punjab 160055
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Service Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4 flex items-center">
                <MessageSquare className="w-4 h-4 mr-2" />
                Select Service
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {services.map((service) => (
                  <button
                    key={service}
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
                {generateDates().map((dateObj) => (
                  <button
                    key={dateObj.date}
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
                    key={time}
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
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Any specific concerns or additional information..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={!selectedDate || !selectedTime || !selectedService || !formData.name || !formData.phone}
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
                  <li>For emergency cases, please call directly: +91 98787 77393</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}