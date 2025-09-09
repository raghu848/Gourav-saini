'use client'

import Link from 'next/link'
import Image from 'next/image'
import {  Heart, Activity, Shield, Settings, Zap, ArrowRight, Play } from 'lucide-react'
import PageAnimationWrapper from '../../components/PageAnimationWrapper'

export default function ServicesPage() {
  const services = [
    {
      id: 'robotic-joint-replacement',
      title: 'Robotic Joint Replacement with CORI',
      description: 'We use CORI robotic technology for Total Knee (TKR) and Hip Replacement (THR) to deliver unmatched precision. With real-time 3D mapping, CORI ensures better alignment, minimal tissue damage, and faster recovery.',
      icon: Settings,
      features: ['Total Knee Replacement (TKR)', 'Total Hip Replacement (THR)', 'Real-time 3D Mapping', 'Minimal Tissue Damage', 'Precision Alignment', 'Faster Recovery'],
      image: '/images/Total-hip-replacement.webp',
    },
    {
      id: 'sports-injury-arthroscopy',
      title: 'Sports Injury & Arthroscopy',
      description: 'We help athletes and active individuals recover from ACL injuries, meniscus tears, and other sports injuries. With minimally invasive arthroscopy, our expert team ensures faster healing and long-term joint strength.',
      icon: Activity,
      features: ['ACL Reconstruction', 'Meniscus Repair', 'Shoulder Arthroscopy', 'Knee Arthroscopy', 'Sports Medicine', 'Return to Play Programs'],
      image: '/images/Knee-Arthroscopy-key-hole-surgery.webp',
    },
    {
      id: 'fracture-trauma-care',
      title: 'Fracture & Trauma Care',
      description: 'From sudden fractures to emergency trauma, our orthopedic experts provide quick and compassionate care. Using precision diagnostics and treatment protocols, we stabilize and strengthen your bones and joints.',
      icon: Shield,
      features: ['Emergency Trauma Care', 'Complex Fracture Treatment', 'Polytrauma Management', 'Deformity Correction', 'Revision Surgeries', '24/7 Emergency Support'],
      image: '/images/fracture-trauma-care.webp',
    },
    {
      id: 'joint-replacement-center',
      title: 'Joint Replacement & Surgery Center',
      description: 'Our advanced orthopaedic surgery center specializes in robotic Total Knee Replacement (TKR) and Total Hip Replacement (THR) procedures using the latest technology to restore mobility and reduce recovery time.',
      icon: Heart,
      features: ['Advanced Surgery Center', 'Robotic Assistance', 'Knee Resurfacing', 'Arthroplasty', 'Complex Joint Issues', 'Personalized Care'],
      image: '/images/Partial-Knee-Replacement.webp',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 relative">
      <PageAnimationWrapper />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 font-serif mb-4">
            Our Orthopedic Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive orthopedic care tailored to restore your mobility and improve your quality of life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 font-serif">{service.title}</h2>
                </div>
                
                {/* Service Image */}
                {service.image && (
                  <div className="mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="object-contain w-full h-48 border border-gray-200"
                      onError={(e) => {
                        console.error(`Error loading image: ${service.image}`, e);
                      }}
                    />
                  </div>
                )}
                
                <p className="text-gray-700 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            )
          })}
        </div>

        {/* YouTube Shorts Section */}
        <div className="my-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-100">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Watch Our Latest Medical Insights</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Discover expert orthopedic care and patient success stories through our informative videos
            </p>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Video 1 */}
                <a 
                  href="https://www.youtube.com/shorts/j0pIonJLabo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative pb-[56.25%] h-0"> {/* 16:9 Aspect Ratio */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900 to-green-800">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                        <div className="text-white px-2">
                          <h3 className="text-sm font-bold mb-1">Medical Insights #1</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                
                {/* Video 2 */}
                <a 
                  href="https://www.youtube.com/shorts/R-D6sdwEPrY" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative pb-[56.25%] h-0"> {/* 16:9 Aspect Ratio */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900 to-green-800">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                        <div className="text-white px-2">
                          <h3 className="text-sm font-bold mb-1">Medical Insights #2</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                
                {/* Video 3 */}
                <a 
                  href="https://www.youtube.com/shorts/z4DpEyO_q6w" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative pb-[56.25%] h-0"> {/* 16:9 Aspect Ratio */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900 to-green-800">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                        <div className="text-white px-2">
                          <h3 className="text-sm font-bold mb-1">Medical Insights #3</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://www.youtube.com/@drgauravsaini_official" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-200"
                >
                  <Play className="w-5 h-5 mr-2" />
                  View All Videos on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CORI Technology Highlight */}
        <div className="mb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold font-serif">CORI Robotic Technology</h2>
              </div>
              <p className="text-xl mb-6 text-blue-100">
                Advanced robotic-assisted surgery for unparalleled precision
              </p>
              <p className="text-blue-50 mb-6 leading-relaxed">
               {" Whether it's knee resurfacing, arthroplasty, or complex joint restoration, your care is fully customized and cutting-edge with our CORI robotic system that provides real-time feedback and precise surgical guidance."}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-sm text-blue-200">Precision Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">50%</div>
                  <div className="text-sm text-blue-200">Faster Recovery</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">3D</div>
                  <div className="text-sm text-blue-200">Real-time Mapping</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">Minimal</div>
                  <div className="text-sm text-blue-200">Tissue Damage</div>
                </div>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">CORI Technology Benefits:</h3>
             <ul className="space-y-3 text-black">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                  Real-time 3D imaging and navigation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                  Personalized surgical planning
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                  Enhanced implant positioning
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                  Reduced surgical time
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                  Improved long-term outcomes
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                  Faster return to normal activities
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-blue-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif">Book an Appointment for Consultation</h2>
          <p className="text-xl mb-6">
            Book your consultation with our orthopaedic specialist today — expert care begins with a simple appointment.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-900 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}