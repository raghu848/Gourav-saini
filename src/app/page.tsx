'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  Stethoscope, 
  Heart, 
  Activity, 
  Shield, 
  CheckCircle, 
  Phone, 
  MessageCircle,
  Star,
  Award,
  Users,
  Calendar,
  ArrowRight
} from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedMedicalBackground from '../components/AnimatedMedicalBackground'
import PageAnimationWrapper from '../components/PageAnimationWrapper'

export default function Home() {
  const specialties = [
    {
      icon: Heart,
      title: 'Robotic Joint Replacement',
      description: 'CORI robotic technology for precise Total Knee and Hip Replacement with real-time 3D mapping'
    },
    {
      icon: Activity,
      title: 'Sports Injury & Arthroscopy',
      description: 'ACL injuries, meniscus tears treatment with minimally invasive arthroscopy for faster healing'
    },
    {
      icon: Shield,
      title: 'Fracture & Trauma Care',
      description: 'Emergency trauma care with precision diagnostics for quick and compassionate treatment'
    },
    {
      icon: Stethoscope,
      title: 'Advanced Trauma Care',
      description: 'Complex trauma, revision surgeries, and polytrauma with deformity correction'
    }
  ]

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Robotic Joint Replacement with CORI',
      description: 'We use CORI robotic technology for Total Knee (TKR) and Hip Replacement (THR) to deliver unmatched precision. With real-time 3D mapping, CORI ensures better alignment, minimal tissue damage, and faster recovery.'
    },
    {
      icon: Users,
      title: 'Sports Injury & Arthroscopy',
      description: 'We help athletes and active individuals recover from ACL injuries, meniscus tears, and other sports injuries. With minimally invasive arthroscopy, our expert team ensures faster healing and long-term joint strength.'
    },
    {
      icon: Heart,
      title: 'Fracture & Trauma Care',
      description: 'From sudden fractures to emergency trauma, our orthopedic experts provide quick and compassionate care. Using precision diagnostics and treatment protocols, we stabilize and strengthen your bones and joints.'
    },
    {
      icon: CheckCircle,
      title: 'Award-Winning Expertise',
      description: 'Nearly 18 years of experience with specialized training at high-volume centers worldwide. Member of NAMS, IOA, NZOA, ISKSAA, and AO Trauma for cutting-edge orthopedic care.'
    }
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      text: 'Dr. Saini performed my knee replacement surgery. I cannot express how grateful I am. I can walk without any discomfort now.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      text: 'As a professional athlete, Dr. Saini not only repaired my ACL but helped me return to competitive sports stronger than ever.',
      rating: 5
    },
    {
      name: 'Mohammad Ali',
      text: 'I had been suffering from severe arthritis for 5 years. Dr. Saini\'s treatment plan completely changed my life.',
      rating: 5
    }
  ]

  const stats = [
    { number: '5000+', label: 'Successful Surgeries' },
    { number: '18+', label: 'Years Experience' },
    { number: '98%', label: 'Patient Satisfaction' },
    { number: 'CORI', label: 'Robotic Technology' }
  ]

  return (
    <div className="min-h-screen relative">
      <PageAnimationWrapper />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-900 text-white overflow-hidden min-h-screen flex items-center">
        {/* Animated Medical Background */}
        <AnimatedMedicalBackground />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/60 to-green-900/70"></div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)',
              backgroundSize: '30px 30px'
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold mb-6 font-serif leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <span className="holographic-text">Where Compassion</span>
                <br />
                <span className="text-white">Meets </span>
                <span className="holographic-text">Innovation</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl lg:text-2xl mb-4 text-blue-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Advanced Orthopedic Solutions for a Pain-Free, Active Lifestyle
              </motion.p>
              
              <motion.p 
                className="text-lg mb-6 text-blue-50 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Dr. Gaurav Saini is an Orthopaedic Surgeon with experience of nearly 18 years & he is completely dedicated to Robotic Hip and knee Surgeries.
              </motion.p>
              
              <motion.div 
                className="text-base mb-8 text-blue-50 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <p className="mb-2"><strong className="text-green-300">Expert in:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li className="hover:text-green-200 transition-colors duration-200">Sports Injuries, Knee Shoulder Arthroscopy</li>
                  <li className="hover:text-green-200 transition-colors duration-200">Complex Trauma & Revision Surgeries</li>
                  <li className="hover:text-green-200 transition-colors duration-200">Polytrauma, Deformity Correction</li>
                  <li className="hover:text-green-200 transition-colors duration-200">Robotic Joint Replacement with CORI Technology</li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-white to-blue-50 text-blue-900 font-semibold rounded-lg hover:from-blue-50 hover:to-white transition-all duration-300 medical-glow transform hover:scale-105"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                </Link>
                <a
                  href="tel:+919878777393"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </motion.div>
            </motion.div>

            {/* Hero Image/Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center lg:items-end relative z-10"
            >
              <motion.div 
                className="mb-8 relative"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="relative w-72 h-72 lg:w-80 lg:h-80 mx-auto">
                  {/* Glowing ring animation */}
                  <motion.div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'conic-gradient(from 0deg, rgba(59, 130, 246, 0.3), rgba(16, 185, 129, 0.3), rgba(59, 130, 246, 0.3))'
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  />
                  
                  {/* Inner glowing effect */}
                  <div className="absolute inset-2 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-full blur-xl medical-heartbeat"></div>
                  
                  <Image
                    src="/images/dr-saini-logo.jpg"
                    alt="Dr. Gaurav Saini - Senior Consultant Orthopaedics"
                    fill
                    className="object-contain rounded-full border-4 border-white shadow-2xl relative z-10 medical-float"
                    priority={true}
                    sizes="(max-width: 768px) 288px, 320px"
                  />
                  
                  {/* Floating medical icons */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center shadow-lg"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
                      scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                    }}
                  >
                    <Heart className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                    animate={{
                      rotate: [360, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
                      scale: { duration: 2, delay: 1, repeat: Infinity, ease: 'easeInOut' }
                    }}
                  >
                    <Activity className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md medical-gradient border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={index} 
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div 
                        className="text-3xl font-bold font-serif text-white"
                        animate={{ 
                          textShadow: [
                            '0 0 10px rgba(59, 130, 246, 0.5)',
                            '0 0 20px rgba(16, 185, 129, 0.5)',
                            '0 0 10px rgba(59, 130, 246, 0.5)'
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-sm text-blue-100">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Wave Shape */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 text-gray-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-serif">
              Our Specialties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive orthopedic care with expertise in the latest surgical techniques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => {
              const IconComponent = specialty.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {specialty.title}
                  </h3>
                  <p className="text-gray-600">
                    {specialty.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-serif">
              Why Patients Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technology, expert care, and proven results for comprehensive orthopedic treatment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 font-serif">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Doctor Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-serif">
                Meet Dr. Gaurav Saini
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                MBBS, MS, DNB, MNAMS - Senior Consultant Orthopaedics specializing in Robotic Hip and Knee Surgeries with nearly 18 years of dedicated experience.
              </p>
              <p className="text-gray-600 mb-8">
                Award-winning orthopedic surgeon trained at prestigious centers worldwide, committed to providing cutting-edge orthopedic care with compassion and precision.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Learn More About Dr. Saini
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="order-1 lg:order-2 text-center">
              <div className="relative w-72 h-72 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-green-200 rounded-2xl opacity-50 blur-xl"></div>
                <Image
                  src="/images/dr-saini-logo.jpg"
                  alt="Dr. Gaurav Saini - Senior Consultant Orthopaedics"
                  fill
                  className="object-contain rounded-2xl shadow-2xl"
                />
                <div className="hidden absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-2xl">
                  <div className="text-center text-white">
                    <div className="text-8xl font-bold mb-4">DS</div>
                    <div className="text-xl font-semibold">Dr. Gaurav Saini</div>
                    <div className="text-sm opacity-90">Orthopedic Surgeon</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  ORTHOPAEDICS & JOINT REPLACEMENT, ROBOTIC SURGERY
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-serif">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from patients who have transformed their lives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  {testimonial.text}
                </p>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/testimonials"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Read More Reviews
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-serif">
            Ready to Start Your Recovery?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
           {" Don't let pain limit your life. Schedule a consultation with Dr. Gaurav Saini today and take the first step towards a pain-free future."}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Consultation
            </Link>
            <a
              href="https://wa.me/919878777393"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
