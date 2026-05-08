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
import Link from 'next/link'

import { aboutMetadata } from '../metadata-improved'
import PageAnimationWrapper from '@/components/PageAnimationWrapper'

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
    <main className="min-h-screen bg-gray-50 relative pt-24 lg:pt-32">
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://drgauravsainiortho.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": "https://drgauravsainiortho.com/about/"
              }
            ]
          })
        }}
      />
      {/* Person Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Dr. Gaurav Saini",
            "jobTitle": "Senior Orthopaedic Surgeon",
            "honorificPrefix": "Dr.",
            "image": "https://drgauravsainiortho.com/images/dr-saini-logo.webp",
            "url": "https://drgauravsainiortho.com/about/",
            "description": "Senior Consultant Orthopaedic Surgeon with nearly 20 years of experience, specializing in Robotic Hip and Knee Surgeries.",
            "alumniOf": [
              {
                "@type": "EducationalOrganization",
                "name": "MBBS"
              },
              {
                "@type": "EducationalOrganization",
                "name": "MS Orthopaedics"
              },
              {
                "@type": "EducationalOrganization",
                "name": "DNB Orthopaedics"
              }
            ],
            "memberOf": [
              {
                "@type": "Organization",
                "name": "National Academy of Medical Sciences (MNAMS)"
              },
              {
                "@type": "Organization",
                "name": "Indian Orthopaedic Association"
              },
              {
                "@type": "Organization",
                "name": "ISKSAA"
              }
            ],
            "knowsAbout": [
              "Orthopaedic Surgery",
              "Robotic Knee Replacement",
              "Hip Replacement",
              "Sports Medicine",
              "Arthroscopy",
              "Trauma Care"
            ],
            "worksFor": {
              "@type": "MedicalOrganization",
              "name": "Max Super Specialty Hospital, Mohali"
            }
          })
        }}
      />
      <PageAnimationWrapper />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Hero Section */}
        <header className="text-center mb-16 mt-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 font-serif mb-6">
            Meet the Doctor - Dr. Gaurav Saini
          </h1>
          <p className="text-2xl text-blue-600 font-semibold mb-4">
            MBBS, MS, DNB, MNAMS - Expert Orthopaedic Surgeon in Mohali
          </p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A pioneer in robotic-assisted joint replacement, Dr. Gaurav Saini brings nearly 20 years of clinical expertise and a commitment to precision-based orthopedic care to patients across Northern India.
          </p>
        </header>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-12 border border-gray-100">
          {/* Doctor Profile Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mb-16">
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-400 rounded-3xl opacity-20 blur-2xl"></div>
                <Image
                  src="/images/dr-saini-logo.webp"
                  alt="Dr. Gaurav Saini - Expert Robotic Orthopaedic Surgeon"
                  fill
                  className="object-contain rounded-3xl border-2 border-white shadow-2xl bg-gray-50"
                  priority
                />
              </div>
              <div className="text-center mt-8">
                <h2 className="text-2xl font-bold text-gray-900 font-serif mb-2">
                  Dr. Gaurav Saini
                </h2>
                <p className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">
                  Senior Consultant Orthopaedics
                </p>
                
                {/* Contact Info */}
                <div className="space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                    <span className="text-sm font-medium">Mohali, Punjab, India</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Phone className="w-5 h-5 mr-3 text-blue-600" />
                    <span className="text-sm font-medium">+91 98767 77393</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Mail className="w-5 h-5 mr-3 text-blue-600" />
                    <a href="mailto:drgauravsaini92@gmail.com" className="text-sm font-medium hover:text-blue-700">drgauravsaini92@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 font-serif leading-tight">
                A Legacy of Orthopedic Excellence & Innovation
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Dr. Gaurav Saini is not just a surgeon; he is a specialist dedicated to the art and science of joint restoration. With a career spanning two decades, he has witnessed and led the transition from traditional orthopedic methods to the precision of **Robotic-Assisted Surgery**.
                </p>
                <p>
                  His clinical journey has been defined by a relentless pursuit of excellence. Having performed over **5,000 successful procedures**, Dr. Saini specializes in complex primary and revision joint replacements, advanced trauma management, and sports medicine. He is recognized for his skill in using the **CORI robotic system**, which allows for 3D mapping and sub-millimeter accuracy in knee replacements.
                </p>
                <p>
                  Beyond the operating theater, Dr. Saini is known for his holistic approach to patient care. He believes that surgery is only one part of the healing process. By integrating advanced diagnostics with personalized rehabilitation protocols, he ensures that his patients don't just recover—they thrive.
                </p>
              </div>
              
              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl text-center shadow-lg shadow-blue-100">
                    <div className="text-3xl font-bold text-white mb-1">{achievement.number}</div>
                    <div className="text-xs font-bold text-blue-100 uppercase tracking-widest">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-gray-100 mb-16" />

          {/* Philosophy Section */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Surgical Philosophy: Precision Meets Patience</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Dr. Saini's approach is rooted in the belief that "less is more." By utilizing minimally invasive techniques and muscle-sparing approaches, he reduces the physiological stress of surgery on the body. This philosophy extends to his use of robotic technology, which acts as a precision tool to enhance the surgeon's natural skill.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-800 font-medium">Evidence-Based Treatment Protocols</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-800 font-medium">Shared Decision-Making with Patients</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-800 font-medium">Continuous Post-Operative Support</span>
                  </li>
                </ul>
              </div>
              <div className="bg-teal-50 p-8 rounded-3xl border border-teal-100 italic text-teal-900 text-xl leading-relaxed relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white text-4xl font-serif">"</div>
                "My goal is not just to replace a joint, but to restore a life. Every patient has unique goals—whether it's walking pain-free, returning to professional sports, or simply playing with grandchildren. We tailor our surgical precision to meet those specific human aspirations."
                <p className="mt-4 font-bold not-italic text-sm text-teal-700">— Dr. Gaurav Saini</p>
              </div>
            </div>
          </section>
          
          {/* Specialties Section */}
          <section className="mb-20">
             <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-gray-900 font-serif">Core Areas of Expertise</h2>
               <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Providing a comprehensive range of orthopedic solutions with a focus on advanced technology and rapid recovery.</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {specialties.map((specialty, index) => {
                 const IconComponent = specialty.icon
                 return (
                   <article key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300">
                     <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">{specialty.title}</h3>
                     <p className="text-gray-600 text-sm leading-relaxed">{specialty.description}</p>
                   </article>
                 )
               })}
             </div>
          </section>
          
          {/* Career Timeline */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-serif">
              Professional Milestones
            </h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 transform -translate-x-1/2"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <article 
                    key={index} 
                    className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 top-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="bg-white p-8 rounded-2xl shadow-md border border-blue-50 hover:shadow-xl transition-shadow duration-300">
                        <div className={`inline-block px-4 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase ${index % 2 === 0 ? 'bg-blue-100 text-blue-800' : 'bg-teal-100 text-teal-800'}`}>
                          {item.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="hidden md:block md:w-5/12"></div>
                  </article>
                ))}
              </div>
            </div>
          </section>
          
          {/* Credentials Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="bg-blue-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 -translate-y-1/2 translate-x-1/2 rounded-full"></div>
              <h3 className="text-2xl font-bold mb-8 flex items-center font-serif">
                <UserCheck className="w-6 h-6 mr-3 text-teal-400" />
                Medical Qualifications
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-blue-50 font-medium leading-tight">**MBBS** - Bachelor of Medicine, Bachelor of Surgery (Government Medical College)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-blue-50 font-medium leading-tight">**MS Orthopedics** - Master of Surgery in specialized Orthopedic medicine</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-blue-50 font-medium leading-tight">**DNB Orthopedics** - Diplomate of National Board (Post-Graduate Specialization)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-blue-50 font-medium leading-tight">**MNAMS** - Member of the National Academy of Medical Sciences</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-blue-50 font-medium leading-tight">Advanced International Fellowship in Robotic Arthroplasty</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center font-serif">
                <Award className="w-6 h-6 mr-3 text-blue-600" />
                Memberships & Awards
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-500 mt-1 mr-4 flex-shrink-0" />
                  <span className="font-medium">Active Member: **Indian Orthopaedic Association (IOA)**</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-500 mt-1 mr-4 flex-shrink-0" />
                  <span className="font-medium">Fellow: **ISKSAA** (International Society for Arthroscopy & Arthroplasty)</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-500 mt-1 mr-4 flex-shrink-0" />
                  <span className="font-medium">Member: **AO Trauma** (Global Orthopedic Trauma Foundation)</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-500 mt-1 mr-4 flex-shrink-0" />
                  <span className="font-medium">Life Member: **North Zone Orthopaedic Association**</span>
                </li>
              </ul>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100 flex items-start">
                <TrendingUp className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" />
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  Recognized as a leading expert in CORI Robotic Knee Replacement in Punjab, with a specialization in complex revision cases.
                </p>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="text-center bg-gray-900 text-white rounded-3xl p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-serif">
              Begin Your Journey to Pain-Free Movement
            </h2>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">
              Whether you need a second opinion on a joint replacement or expert care for a sports injury, Dr. Gaurav Saini is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-xl"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Book Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/20 text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
