import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, CheckCircle, Users, Shield, Heart } from 'lucide-react'
import PageAnimationWrapper from '../../../components/PageAnimationWrapper'
import { generateServiceMetadata } from '../../../app/metadata'

export const metadata: Metadata = generateServiceMetadata('spine-surgery')

export default function SpineSurgeryPage() {
  const spineConditions = [
    {
      title: 'Herniated Disc',
      description: 'Treatment for slipped or ruptured discs pressing on nerves'
    },
    {
      title: 'Spinal Stenosis',
      description: 'Surgical solutions for narrowing of the spinal canal'
    },
    {
      title: 'Scoliosis Correction',
      description: 'Advanced techniques for correcting spinal curvature'
    },
    {
      title: 'Degenerative Disc Disease',
      description: 'Treatment for worn down spinal discs causing pain'
    }
  ]

  const treatmentApproach = [
    'Minimally invasive spine surgery techniques',
    'Advanced imaging for precise diagnosis',
    'Personalized treatment plans',
    'Comprehensive rehabilitation program',
    'Long-term follow-up care',
    'Patient education and prevention'
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 relative">
      <PageAnimationWrapper />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link> &gt; 
          <Link href="/services" className="text-blue-600 hover:underline ml-2">Services</Link> &gt; 
          <span className="ml-2 text-gray-500">Spine Surgery</span>
        </nav>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 font-serif mb-4">
              Spine Surgery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced surgical solutions for spinal conditions and back pain with minimally invasive techniques
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
                Comprehensive Spine Care for Lasting Relief
              </h2>
              <p className="text-gray-700 mb-6">
                Our spine surgery team provides expert treatment for a wide range of spinal conditions, from simple back pain to complex spinal deformities.
              </p>
              <p className="text-gray-700 mb-6">
                Using the latest minimally invasive techniques and advanced surgical technologies, we help patients regain mobility and reduce pain.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Spinal Conditions We Treat:</h3>
                <div className="space-y-4">
                  {spineConditions.map((condition, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-gray-900">{condition.title}:</span>
                        <span className="text-gray-700"> {condition.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Treatment Approach</h3>
              <ul className="space-y-4">
                {treatmentApproach.map((approach, index) => (
                  <li key={index} className="flex items-start">
                    <Shield className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{approach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-serif">
              Advanced Spine Surgery Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Minimally Invasive Procedures</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Advanced minimally invasive spine surgery with smaller incisions, less pain, and faster recovery times.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Microdiscectomy for herniated discs
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Endoscopic spine surgery
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Percutaneous procedures
                  </li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Complex Spine Surgery</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Expert care for complex spinal conditions requiring advanced surgical intervention.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    Spinal fusion procedures
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    Scoliosis correction surgery
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    Revision spine surgery
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-green-900 text-white rounded-2xl p-4 lg:p-6 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-3xl font-bold font-serif mb-4">Why Choose Our Spine Surgery?</h2>
                <p className="text-blue-100 mb-4">
                  Our comprehensive spine program combines surgical expertise with advanced technology for optimal patient outcomes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span>Minimally invasive techniques</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span>Advanced diagnostic capabilities</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span>Multi-disciplinary care team</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span>Comprehensive rehabilitation services</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-2">
                {/* Added image container */}
                <div className="rounded-lg overflow-hidden border border-blue-200">
                  <Image 
                    src="/images/dr images/TRAUMA.jpg" 
                    alt="Dr. Gaurav Saini performing spine surgery" 
                    width={500}
                    height={300}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="text-black text-center font-bold text-lg mt-1">
                  Focused on your recovery, powered by expertise and precision.
                </p>
                <h3 className="text-xl font-semibold mb-1">Spine Surgery Statistics</h3>
                <div className="space-y-1">
                  <div className="flex justify-between items-center pb-1 border-b border-white/20">
                    <span className="text-sm">Success Rate</span>
                    <span className="font-bold text-sm">95%</span>
                  </div>
                  <div className="flex justify-between items-center pb-1 border-b border-white/20">
                    <span className="text-sm">Patient Satisfaction</span>
                    <span className="font-bold text-sm">98%</span>
                  </div>
                  <div className="flex justify-between items-center pb-1 border-b border-white/20">
                    <span className="text-sm">Minimally Invasive</span>
                    <span className="font-bold text-sm">85% Procedures</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Recovery Time</span>
                    <span className="font-bold text-sm">Reduced by 40%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Spine Surgery Consultation?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              For spine surgery consultation, contact our specialists to discuss your treatment options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876777393"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg"
              >
                <Heart className="w-5 h-5 mr-2" />
                Call for Consultation
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}