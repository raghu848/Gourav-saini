import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, CheckCircle, Users, Heart, Zap } from 'lucide-react'
import PageAnimationWrapper from '../../../components/PageAnimationWrapper'

export const metadata: Metadata = {
  title: 'Robotic Surgery | Dr. Gaurav Saini',
  description: 'Advanced robotic surgery with CORI technology for precise, minimally invasive procedures.',
  alternates: {
    canonical: 'https://drgauravsaini.com/services/robotic-surgery/'
  }
}

export default function RoboticSurgeryPage() {
  const roboticProcedures = [
    {
      title: 'Total Knee Replacement',
      description: 'Precision knee replacement using real-time 3D mapping'
    },
    {
      title: 'Total Hip Replacement',
      description: 'Advanced hip surgery with enhanced implant positioning'
    },
    {
      title: 'Partial Knee Replacement',
      description: 'Targeted resurfacing for localized knee damage'
    },
    {
      title: 'Complex Joint Reconstruction',
      description: 'Revision surgeries with robotic assistance'
    }
  ]

  const treatmentApproach = [
    'CORI robotic technology for real-time 3D mapping',
    'Personalized surgical planning using patient-specific data',
    'Minimally invasive techniques for faster recovery',
    'Enhanced precision and implant positioning',
    'Comprehensive rehabilitation program',
    'Long-term follow-up care'
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 relative">
      <PageAnimationWrapper />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link> &gt; 
          <Link href="/services" className="text-blue-600 hover:underline ml-2">Services</Link> &gt; 
          <span className="ml-2 text-gray-500">Robotic Surgery</span>
        </nav>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 font-serif mb-4">
              Robotic Surgery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced robotic-assisted surgery for unparalleled precision in orthopedic procedures
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
                Precision Surgery with Robotic Assistance
              </h2>
              <p className="text-gray-700 mb-6">
                Our robotic surgery program combines cutting-edge technology with expert surgical skills to provide the highest level of precision in orthopedic procedures.
              </p>
              <p className="text-gray-700 mb-6">
                Using the latest CORI robotic system, we ensure optimal implant placement and alignment for better long-term outcomes.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Robotic Procedures We Perform:</h3>
                <div className="space-y-4">
                  {roboticProcedures.map((procedure, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-gray-900">{procedure.title}:</span>
                        <span className="text-gray-700"> {procedure.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Robotic Approach</h3>
              <ul className="space-y-4">
                {treatmentApproach.map((approach, index) => (
                  <li key={index} className="flex items-start">
                    <Zap className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{approach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-serif">
              Advanced Robotic Surgery Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">CORI Robotic Technology</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Using the latest CORI robotic system for real-time 3D mapping and navigation.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Real-time 3D imaging and navigation
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Personalized surgical planning
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Enhanced implant positioning
                  </li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Benefits of Robotic Surgery</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Advantages of robotic-assisted orthopedic procedures.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    Enhanced precision and accuracy
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    Reduced tissue damage
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    Faster recovery times
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-green-900 text-white rounded-2xl p-4 lg:p-6 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-3xl font-bold font-serif mb-4">Why Choose Our Robotic Surgery?</h2>
                <p className="text-blue-100 mb-4">
                  Our robotic surgery program combines advanced technology with expert care for optimal outcomes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span>CORI robotic technology</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span>Personalized treatment plans</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span>Enhanced precision and outcomes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span>Comprehensive rehabilitation</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-2">
                {/* Added image container */}
                <div className="rounded-lg overflow-hidden border border-blue-200">
                  <Image 
                    src="/images/dr images/TRAUMA.jpg" 
                    alt="Dr. Gaurav Saini performing robotic surgery" 
                    width={500}
                    height={300}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="text-black text-center font-bold text-lg mt-1">
                  Focused on your recovery, powered by expertise and precision.
                </p>
                <h3 className="text-xl font-semibold mb-1">Robotic Surgery Statistics</h3>
                <div className="space-y-1">
                  <div className="flex justify-between items-center pb-1 border-b border-white/20">
                    <span className="text-sm">Precision Accuracy</span>
                    <span className="font-bold text-sm">100%</span>
                  </div>
                  <div className="flex justify-between items-center pb-1 border-b border-white/20">
                    <span className="text-sm">Patient Satisfaction</span>
                    <span className="font-bold text-sm">99%</span>
                  </div>
                  <div className="flex justify-between items-center pb-1 border-b border-white/20">
                    <span className="text-sm">Recovery Time</span>
                    <span className="font-bold text-sm">Reduced by 50%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Implant Longevity</span>
                    <span className="font-bold text-sm">Enhanced by 30%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Considering Robotic Surgery?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              For robotic surgery consultation, contact our specialists to discuss your treatment options.
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