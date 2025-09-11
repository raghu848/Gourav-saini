import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, CheckCircle, Users, Shield, Heart } from 'lucide-react'
import PageAnimationWrapper from '../../../components/PageAnimationWrapper'

export const metadata: Metadata = {
  title: 'Fracture & Trauma Care - Dr. Gaurav Saini',
  description: 'Emergency trauma care with precision diagnostics for quick and compassionate treatment of fractures and complex injuries.',
}

export default function FractureTraumaCarePage() {
  const traumaTypes = [
    {
      title: 'Complex Fractures',
      description: 'Treatment of severe bone breaks requiring advanced surgical techniques'
    },
    {
      title: 'Polytrauma',
      description: 'Comprehensive care for patients with multiple traumatic injuries'
    },
    {
      title: 'Emergency Trauma',
      description: 'Immediate care for acute injuries with 24/7 availability'
    },
    {
      title: 'Deformity Correction',
      description: 'Surgical correction of bone deformities resulting from trauma or disease'
    }
  ]

  const treatmentApproach = [
    'Immediate stabilization and pain management',
    'Advanced imaging for precise diagnosis',
    'Surgical intervention when necessary',
    'Comprehensive rehabilitation program',
    'Long-term follow-up care',
    'Patient and family education'
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 relative">
      <PageAnimationWrapper />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link> &gt; 
          <Link href="/services" className="text-blue-600 hover:underline ml-2">Services</Link> &gt; 
          <span className="ml-2 text-gray-500">Fracture & Trauma Care</span>
        </nav>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 font-serif mb-4">
              Fracture & Trauma Care
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Emergency and specialized care for fractures, complex trauma, and polytrauma injuries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
                Comprehensive Trauma Care When It Matters Most
              </h2>
              <p className="text-gray-700 mb-6">
                Our trauma care team provides immediate, expert treatment for acute injuries with a focus on rapid stabilization and optimal long-term outcomes.
              </p>
              <p className="text-gray-700 mb-6">
                From simple fractures to complex polytrauma cases, we deliver compassionate, evidence-based care with the latest diagnostic and treatment technologies.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Types of Trauma We Treat:</h3>
                <div className="space-y-4">
                  {traumaTypes.map((type, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-gray-900">{type.title}:</span>
                        <span className="text-gray-700"> {type.description}</span>
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
              Advanced Trauma Care Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Emergency Response</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  24/7 emergency trauma care with immediate access to advanced diagnostics and surgical intervention.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Rapid assessment and stabilization
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Advanced imaging capabilities
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Immediate surgical intervention
                  </li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Specialized Treatment</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Expert care for complex fractures, revision surgeries, and polytrauma with deformity correction.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    Complex fracture management
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    Revision and corrective surgeries
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    Polytrauma care coordination
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-green-900 text-white rounded-2xl p-8 lg:p-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold font-serif mb-4">Why Choose Our Trauma Care?</h2>
                <p className="text-blue-100 mb-6">
                  Our comprehensive trauma program combines emergency expertise with specialized surgical skills for optimal patient outcomes.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span>24/7 emergency availability</span>
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
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Trauma Care Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-white/20">
                    <span>Emergency Response Time</span>
                    <span className="font-bold">&lt;15 min</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/20">
                    <span>Surgical Success Rate</span>
                    <span className="font-bold">99%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/20">
                    <span>Patient Satisfaction</span>
                    <span className="font-bold">97%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Recovery Time</span>
                    <span className="font-bold">Reduced by 30%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Emergency Trauma Care?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              For emergency trauma care, call our 24/7 trauma line or visit our emergency department immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876777393"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg"
              >
                <Heart className="w-5 h-5 mr-2" />
                Call Emergency Line
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Non-Emergency Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}