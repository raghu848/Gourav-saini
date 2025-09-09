import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, ArrowRight, CheckCircle, Users, Award, Heart } from 'lucide-react'
import PageAnimationWrapper from '../../../components/PageAnimationWrapper'

export const metadata: Metadata = {
  title: 'Robotic Joint Replacement with CORI Technology - Dr. Gaurav Saini',
  description: 'Advanced robotic joint replacement surgery using CORI technology for precise Total Knee and Hip Replacement with real-time 3D mapping.',
}

export default function RoboticJointReplacementPage() {
  const benefits = [
    {
      title: 'Precision Accuracy',
      description: 'CORI robotic technology ensures 100% precision accuracy in implant positioning'
    },
    {
      title: 'Minimal Tissue Damage',
      description: 'Reduced tissue trauma leads to less pain and faster recovery'
    },
    {
      title: 'Faster Recovery',
      description: 'Patients experience up to 50% faster recovery compared to traditional methods'
    },
    {
      title: 'Personalized Treatment',
      description: 'Each procedure is customized based on your unique anatomy'
    }
  ]

  const procedureSteps = [
    'Pre-operative 3D imaging and planning',
    'Real-time surgical navigation with CORI system',
    'Precise bone preparation and implant placement',
    'Immediate post-operative assessment',
    'Personalized rehabilitation program'
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 relative">
      <PageAnimationWrapper />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link> &gt; 
          <Link href="/services" className="text-blue-600 hover:underline ml-2">Services</Link> &gt; 
          <span className="ml-2 text-gray-500">Robotic Joint Replacement</span>
        </nav>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 font-serif mb-4">
              Robotic Joint Replacement with CORI Technology
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced robotic-assisted surgery for unparalleled precision in Total Knee and Hip Replacement
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
                Revolutionizing Joint Replacement Surgery
              </h2>
              <p className="text-gray-700 mb-6">
                Our CORI robotic technology represents the pinnacle of modern orthopedic surgery. This advanced system provides real-time 3D mapping and navigation, ensuring unprecedented precision in joint replacement procedures.
              </p>
              <p className="text-gray-700 mb-6">
                Unlike traditional methods, CORI adapts to your unique anatomy, creating a personalized surgical plan that maximizes implant longevity and functional outcomes.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits:</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-gray-900">{benefit.title}:</span>
                        <span className="text-gray-700"> {benefit.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">CORI Technology Features</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Real-time 3D Mapping</h4>
                    <p className="text-sm text-gray-600">Continuous feedback during surgery</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Enhanced Precision</h4>
                    <p className="text-sm text-gray-600">Sub-millimeter accuracy in implant placement</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Personalized Planning</h4>
                    <p className="text-sm text-gray-600">Customized to your unique anatomy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-serif">
              Surgical Procedure Overview
            </h2>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {procedureSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      {index + 1}
                    </div>
                    <p className="text-sm text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-green-900 text-white rounded-2xl p-8 lg:p-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold font-serif mb-4">Why Choose Our Robotic Joint Replacement?</h2>
                <p className="text-blue-100 mb-6">
                  With nearly 18 years of experience and over 5000 successful surgeries, Dr. Saini is at the forefront of robotic joint replacement technology.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span>Pioneer in CORI robotic technology in the region</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span>Personalized rehabilitation programs</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span>Comprehensive pre and post-operative care</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span>98% patient satisfaction rate</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Patient Outcomes</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">98%</div>
                    <div className="text-sm text-blue-200">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">50%</div>
                    <div className="text-sm text-blue-200">Faster Recovery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">0.5%</div>
                    <div className="text-sm text-blue-200">Infection Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">15+</div>
                    <div className="text-sm text-blue-200">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience Advanced Joint Care?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Schedule a consultation with Dr. Saini to discuss how robotic joint replacement can restore your mobility and improve your quality of life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}