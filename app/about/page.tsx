import { Metadata } from 'next'
import Image from 'next/image'
import { 
  Award,
  Heart, 
  Activity, 
  Shield, 
  Calendar, 
  MapPin,
  Phone,
  Mail,
  Star,
  ChevronRight,
  CheckCircle,
  UserCheck,
  Target,
  TrendingUp
} from 'lucide-react'
import PageAnimationWrapper from '../../components/PageAnimationWrapper'
import Link from 'next/link'

import { aboutMetadata } from '../seo-metadata'

export const metadata: Metadata = aboutMetadata

export default function AboutPage() {
  const achievements: { number: string; label: string }[] = [
    { number: '5000+', label: 'Successful Surgeries' },
    { number: '20+', label: 'Years Experience' },
    { number: '99%', label: 'Patient Satisfaction' },
    { number: '15+', label: 'Awards Received' }
  ]

  const specialties: { icon: React.ComponentType<{ className?: string }>; title: string; description: string }[] = [
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
      icon: Target,
      title: 'Advanced Trauma Care',
      description: 'Complex trauma, revision surgeries, and polytrauma with deformity correction'
    }
  ]

  const timeline: { year: string; title: string; description: string }[] = [
    {
      year: '2007',
      title: 'MBBS Degree',
      description: 'Completed Bachelor of Medicine, Bachelor of Surgery'
    },
    {
      year: '2011',
      title: 'MS Orthopedics',
      description: 'Master of Surgery in Orthopedics specialization'
    },
    {
      year: '2013',
      title: 'DNB Certification',
      description: 'Diplomate of National Board in Orthopedics'
    },
    {
      year: '2015',
      title: 'MNAMS Membership',
      description: 'Member of National Academy of Medical Sciences'
    },
    {
      year: '2018',
      title: 'Robotic Surgery Training',
      description: 'Advanced training in CORI Robotic Joint Replacement'
    },
    {
      year: '2022',
      title: 'International Recognition',
      description: 'Awarded for excellence in orthopedic surgery'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <PageAnimationWrapper />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 mt-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 font-serif mb-6">
            Meet the Doctor -  Dr. Gaurav Saini
          </h1>
          <p className="text-2xl text-blue-600 font-semibold mb-4">
            MBBS  , MS, DNB, MNAMS - ORTHOPAEDIC SURGEON IN MOHALI
          </p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Award-winning orthopedic surgeon with nearly 20 years of experience, completely dedicated to Robotic Hip and Knee Surgeries
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          {/* Doctor Profile Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-12">
            <div className="flex-shrink-0">
              <div className="relative w-56 h-56 lg:w-72 lg:h-72">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-20 blur-xl"></div>
                <Image
                  src="/images/dr-saini-logo.webp"
                  alt="Dr. Gaurav Saini - MBBS, MS, DNB, MNAMS Orthopaedic Surgeon"
                  fill
                  className="object-contain rounded-full border-4 border-blue-200 shadow-xl"
                  priority
                />
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
                
                {/* Contact Info */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Mohali, Punjab</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>+91 98767 77393</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href="mailto:drgauravsaini92@gmail.com" className="hover:underline">drgauravsaini92@gmail.com</a>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Appointment
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-4 py-2 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
                Orthopedic Excellence with Compassionate Care
              </h2>
              <p className="text-xl text-gray-700 mb-4">
                Dr. Gaurav Saini is an award-winning Orthopaedic Surgeon with 20 years of experience, specializing in Robotic Hip and Knee Surgeries.
              </p>
              <p className="text-xl text-gray-700 mb-4">
                Expert in Sports Injuries, Knee Shoulder Arthroscopy, Complex Trauma, and Joint Replacement. Combines advanced techniques with compassionate care.
              </p>
              <p className="text-xl text-gray-700 mb-6">
                Trained at high-volume centers worldwide. Stays current with orthopedic innovations through international conferences and training programs.
              </p>
              
              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 p-4 rounded-lg text-center border border-blue-100">
                    <div className="text-3xl font-bold text-blue-600">{achievement.number}</div>
                    <div className="text-lg text-gray-600">{achievement.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Specialties Section */}
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-2 text-blue-600" />
                  Expert Medical Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {specialties.map((specialty, index) => {
                    const IconComponent = specialty.icon
                    return (
                      <div key={index} className="flex items-start">
                        <IconComponent className="w-6 h-6 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <div>
                          <div className="text-lg font-medium text-gray-900">{specialty.title}</div>
                          <div className="text-base text-gray-600">{specialty.description}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          
          {/* Career Timeline */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-serif">
              Career Journey & Achievements
            </h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div 
                    key={index} 
                    className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 top-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2 ${index % 2 === 0 ? 'bg-blue-100 text-blue-800 md:ml-auto' : 'bg-green-100 text-green-800'}`}>
                          {item.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Hidden on mobile, visible on desktop for spacing */}
                    <div className="hidden md:block md:w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Credentials Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <UserCheck className="w-5 h-5 mr-2 text-blue-600" />
                Qualifications & Expertise
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span><strong>MBBS</strong> - Bachelor of Medicine, Bachelor of Surgery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span><strong>MS Orthopedics</strong> - Master of Surgery in Orthopedics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span><strong>DNB Orthopedics</strong> - Diplomate of National Board</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span><strong>MNAMS</strong> - Member of National Academy of Medical Sciences</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span><strong>Fellowship</strong> in Robotic Joint Replacement Surgery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Specialized training in Hip & Knee Arthroscopy worldwide</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span><strong>20 years</strong> of clinical experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span><strong>5000+</strong> successful surgeries performed</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-lg border border-green-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-green-600" />
                Professional Memberships & Awards
              </h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span><strong>National Academy of Medical Sciences (NAMS)</strong> - Since 2011</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span><strong>Indian Orthopaedic Association (IOA)</strong> - Since 2011</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span><strong>North Zone Orthopaedic Association (NZOA)</strong> - Since 2011</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span><strong>ISKSAA</strong> - International Society for Knowledge for Surgeons in Arthroscopy and Arthroplasty</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span><strong>AO Trauma Member</strong> - Advanced Orthopedic Trauma Care</span>
                </li>
              </ul>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2 text-yellow-600" />
                  Recent Recognition
                </h4>
                <p className="text-gray-700 text-sm">
                  Awarded for excellence in robotic joint replacement surgery and patient care outcomes in 2022.
                </p>
              </div>
            </div>
          </div>
          
          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-white mb-8">
            <h2 className="text-2xl font-bold mb-4 font-serif">My Mission</h2>
            <p className="text-lg mb-4">
              &quot;To provide the highest quality orthopedic care with compassion, precision, and innovation, 
              helping every patient regain their mobility and quality of life.&quot;
            </p>
            <p className="opacity-90">
              - Dr. Gaurav Saini
            </p>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Schedule a consultation with Dr. Saini today and begin your journey to better mobility and pain-free living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                <Activity className="w-5 h-5 mr-2" />
                View Services
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}