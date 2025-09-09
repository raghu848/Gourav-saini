import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, ArrowRight, CheckCircle, Users, Heart, Settings } from 'lucide-react'
import PageAnimationWrapper from '../../../components/PageAnimationWrapper'

export const metadata: Metadata = {
  title: 'Joint Replacement & Surgery Center - Dr. Gaurav Saini',
  description: 'Advanced orthopaedic surgery center specializing in robotic Total Knee Replacement and Total Hip Replacement procedures using the latest technology.',
}

export default function JointReplacementCenterPage() {
  const procedures = [
    {
      title: 'Total Knee Replacement (TKR)',
      description: 'Advanced resurfacing of damaged knee joints with personalized implant selection'
    },
    {
      title: 'Total Hip Replacement (THR)',
      description: 'Precision replacement of hip joints with enhanced mobility and reduced pain'
    },
    {
      title: 'Partial Knee Replacement',
      description: 'Targeted replacement for patients with damage in only one part of the knee'
    },
    {
      title: 'Revision Joint Surgery',
      description: 'Specialized procedures for joint replacements that need correction or updating'
    }
  ]

  const centerFeatures = [
    'State-of-the-art surgical facilities',
    'Advanced imaging and navigation systems',
    'Comprehensive pre-operative planning',
    'Personalized rehabilitation programs',
    '24/7 post-operative monitoring',
    'Long-term follow-up care'
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 relative">
      <PageAnimationWrapper />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link> &gt; 
          <Link href="/services" className="text-blue-600 hover:underline ml-2">Services</Link> &gt; 
          <span className="ml-2 text-gray-500">Joint Replacement Center</span>
        </nav>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 font-serif mb-4">
              Joint Replacement & Surgery Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced orthopaedic surgery center specializing in robotic joint replacement procedures
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
                Your Journey to Better Mobility Starts Here
              </h2>
              <p className="text-gray-700 mb-6">
                Our Joint Replacement Center combines cutting-edge technology with compassionate care to restore your mobility and improve your quality of life.
              </p>
              <p className="text-gray-700 mb-6">
                With our advanced surgical techniques and personalized approach, we help patients overcome joint pain and regain their independence.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Procedures We Offer:</h3>
                <div className="space-y-4">
                  {procedures.map((procedure, index) => (
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Center Features</h3>
              <ul className="space-y-4">
                {centerFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Settings className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-serif">
              Our Comprehensive Care Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultation</h3>
                <p className="text-sm text-gray-600">
                  Thorough evaluation and discussion of treatment options
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pre-Surgery</h3>
                <p className="text-sm text-gray-600">
                  Preparation and pre-operative planning for optimal outcomes
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Surgery</h3>
                <p className="text-sm text-gray-600">
                  Advanced surgical techniques with personalized care
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Recovery</h3>
                <p className="text-sm text-gray-600">
                  Comprehensive rehabilitation and long-term follow-up
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-green-900 text-white rounded-2xl p-8 lg:p-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold font-serif mb-4">Why Choose Our Joint Replacement Center?</h2>
                <p className="text-blue-100 mb-6">
                  Our specialized center combines advanced technology, experienced surgeons, and comprehensive care for optimal joint replacement outcomes.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span>Pioneer in CORI robotic technology</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span>Personalized treatment plans</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span>Comprehensive rehabilitation services</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span>98% patient satisfaction rate</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Center Outcomes</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-white/20">
                    <span>Surgical Success Rate</span>
                    <span className="font-bold">99%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/20">
                    <span>Average Recovery Time</span>
                    <span className="font-bold">4-6 weeks</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/20">
                    <span>Patient Satisfaction</span>
                    <span className="font-bold">98%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Implant Longevity</span>
                    <span className="font-bold">95% at 15 years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Restore Your Mobility?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Schedule a consultation with Dr. Saini to discuss your joint replacement options and develop a personalized treatment plan.
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