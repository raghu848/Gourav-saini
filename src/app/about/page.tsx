import { Metadata } from 'next'
import Image from 'next/image'
import PageAnimationWrapper from '../../components/PageAnimationWrapper'

export const metadata: Metadata = {
  title: 'About Dr. Gaurav Saini - MBBS, MS, DNB, MNAMS Orthopedic Surgeon',
  description: 'Meet Dr. Gaurav Saini, an award-winning orthopedic surgeon with 18 years of experience specializing in robotic joint replacement, sports injuries, and trauma care in Mohali.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 relative">
      <PageAnimationWrapper />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 font-serif mb-4">
            Meet the Doctor - Dr. Gaurav Saini
          </h1>
          <p className="text-xl text-blue-600 font-semibold mb-2">
            MBBS, MS, DNB, MNAMS - ORTHOPAEDIC SURGEON IN MOHALI
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Award-winning orthopedic surgeon with nearly 18 years of experience, completely dedicated to Robotic Hip and Knee Surgeries
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Doctor Image Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-8">
            <div className="flex-shrink-0">
              <div className="relative w-56 h-56 lg:w-64 lg:h-64">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-20 blur-xl"></div>
                <Image
                  src="/images/dr-saini-logo.jpg"
                  alt="Dr. Gaurav Saini - MBBS, MS, DNB, MNAMS Orthopaedic Surgeon"
                  fill
                  className="object-contain rounded-full border-4 border-blue-200 shadow-xl"
                  priority
                />
                <div className="hidden absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center border-4 border-blue-200 shadow-xl">
                  <div className="text-center text-white">
                    <div className="text-6xl font-bold mb-2">DS</div>
                    <div className="text-sm">Dr. Saini</div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-6">
                <h2 className="text-2xl font-bold text-gray-900 font-serif mb-2">
                  Dr. Gaurav Saini
                </h2>
                <p className="text-blue-600 font-semibold">
                  Senior Consultant Orthopaedics
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  MBBS, MS, DNB, MNAMS
                </p>
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
                Professional Excellence in Orthopedic Care
              </h2>
              <p className="text-gray-700 mb-4">
                Dr. Gaurav Saini is an accomplished Orthopaedic Surgeon with experience of nearly 18 years, completely dedicated to Robotic Hip and knee Surgeries. He has been an award-winning orthopedic surgeon for his exceptional work in the field of hip and knee surgery.
              </p>
              <p className="text-gray-700 mb-4">
                Dr. Saini is an expert in Sports Injuries, Knee Shoulder Arthroscopy, Complex Trauma, Revision Surgeries, Polytrauma, and Deformity Correction. His patient-centric approach combines advanced surgical techniques with compassionate care, ensuring optimal outcomes for each individual.
              </p>
              <p className="text-gray-700 mb-6">
                Besides his memberships, he is also trained at many well-respected high volume centres across the world in Hip arthroscopy, Knee arthroscopy, and knee surgeries for sports injuries. Dr. Saini stays at the forefront of orthopedic innovations, regularly attending international conferences and training programs.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Medical Services</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                  <li>• Robotic Joint Replacement</li>
                  <li>• Sports Injury Treatment</li>
                  <li>• Advanced Trauma Care</li>
                  <li>• Hip Replacement</li>
                  <li>• Knee Replacement</li>
                  <li>• Complex Trauma & Revision Surgeries</li>
                  <li>• Polytrauma & Deformity Correction</li>
                  <li>• Sports Injuries & Arthroscopy</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Credentials Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Qualifications & Expertise</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• MBBS - Bachelor of Medicine, Bachelor of Surgery</li>
                <li>• MS Orthopedics - Master of Surgery in Orthopedics</li>
                <li>• DNB Orthopedics - Diplomate of National Board</li>
                <li>• MNAMS - Member of National Academy of Medical Sciences</li>
                <li>• Fellowship in Robotic Joint Replacement Surgery</li>
                <li>• Specialized training in Hip & Knee Arthroscopy worldwide</li>
                <li>• Nearly 18 years of clinical experience</li>
                <li>• 5000+ successful surgeries performed</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Memberships</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• National Academy of Medical Sciences (NAMS) - Since 2011</li>
                <li>• Indian Orthopaedic Association (IOA) - Since 2011</li>
                <li>• North Zone Orthopaedic Association (NZOA) - Since 2011</li>
                <li>• International Society for Knowledge for Surgeons in Arthroscopy and Arthroplasty (ISKSAA) - Since 2011</li>
                <li>• AO Trauma Member</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}