import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, ArrowRight, CheckCircle, Users, Activity, Shield } from 'lucide-react'
import PageAnimationWrapper from '../../../components/PageAnimationWrapper'
import { generateServiceMetadata } from '../../../app/metadata'

export const metadata: Metadata = generateServiceMetadata('sports-injury')

export default function SportsInjuryArthroscopyPage() {
  const conditions = [
    {
      title: 'ACL Injuries',
      description: 'Complete reconstruction with advanced graft techniques for optimal stability'
    },
    {
      title: 'Meniscus Tears',
      description: 'Repair or partial meniscectomy to preserve joint function'
    },
    {
      title: 'Shoulder Injuries',
      description: 'Rotator cuff repairs and shoulder stabilization procedures'
    },
    {
      title: 'Knee Arthroscopy',
      description: 'Minimally invasive diagnosis and treatment of various knee conditions'
    }
  ]

  const benefits = [
    'Minimally invasive approach with smaller incisions',
    'Faster recovery and return to sports activities',
    'Reduced pain and scarring',
    'Precise diagnosis and treatment',
    'Outpatient procedure with same-day discharge',
    'Personalized rehabilitation programs'
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 relative">
      <PageAnimationWrapper />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link> &gt; 
          <Link href="/services" className="text-blue-600 hover:underline ml-2">Services</Link> &gt; 
          <span className="ml-2 text-gray-500">Sports Injury & Arthroscopy</span>
        </nav>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 font-serif mb-4">
              Sports Injury & Arthroscopy Treatment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced minimally invasive techniques to get athletes back to their peak performance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
                Expert Care for Athletes and Active Individuals
              </h2>
              <p className="text-gray-700 mb-6">
                Our sports injury treatment program combines cutting-edge arthroscopic techniques with personalized rehabilitation to ensure optimal recovery and return to sport.
              </p>
              <p className="text-gray-700 mb-6">
                Whether you&apos;re a professional athlete or weekend warrior, our specialized approach addresses the unique demands of your sport and activity level.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Conditions Treated:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {conditions.map((condition, index) => (
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Arthroscopy Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Shield className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-serif">
              Our Comprehensive Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Diagnosis & Assessment</h3>
                <p className="text-gray-600">
                  Thorough evaluation including imaging and functional testing to determine the best treatment approach
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Surgical Treatment</h3>
                <p className="text-gray-600">
                  Minimally invasive arthroscopic procedures performed with precision and care
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Rehabilitation</h3>
                <p className="text-gray-600">
                  Personalized recovery program to restore strength, flexibility, and sport-specific function
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-green-900 text-white rounded-2xl p-8 lg:p-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold font-serif mb-4">Why Choose Our Sports Medicine Program?</h2>
                <p className="text-blue-100 mb-6">
                  Our specialized approach combines advanced surgical techniques with evidence-based rehabilitation for optimal outcomes.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span>Expertise in sports-specific injuries</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span>Advanced arthroscopic techniques</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span>Personalized return-to-sport protocols</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span>Comprehensive care from injury to recovery</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Program Outcomes</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-white/20">
                    <span>Return to Sport Rate</span>
                    <span className="font-bold">95%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/20">
                    <span>Average Recovery Time</span>
                    <span className="font-bold">6-8 weeks</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/20">
                    <span>Patient Satisfaction</span>
                    <span className="font-bold">99%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Re&#45;injury Rate</span>
                    <span className="font-bold">&lt;5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Back in the Game?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Schedule a consultation with Dr. Saini to discuss your sports injury and develop a personalized treatment plan.
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