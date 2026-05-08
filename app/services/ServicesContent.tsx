'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Heart, Activity, Shield, Settings, Zap, ArrowRight, Play, CheckCircle, Users } from 'lucide-react'
import PageAnimationWrapper from '../../components/PageAnimationWrapper'

export default function ServicesContent() {
  const services = [
    {
      id: 'robotic-joint-replacement',
      title: 'Robotic Joint Replacement',
      description: 'Experience the pinnacle of orthopedic innovation with our CORI robotic-assisted surgery system. Dr. Gaurav Saini specializes in Total Knee Replacement (TKR) and Total Hip Replacement (THR) procedures that utilize real-time 3D mapping for sub-millimeter precision.',
      icon: Settings,
      features: ['Precision-Guided Total Knee Replacement', 'Robotic-Assisted Total Hip Replacement', 'Real-time Intra-operative 3D Mapping', 'Minimal Soft Tissue Damage'],
      image: '/images/Total-hip-replacement.webp',
    },
    {
      id: 'knee-replacement-surgery',
      title: 'Knee Replacement Surgery',
      description: 'Comprehensive solutions for advanced knee arthritis. From partial resurfacing to total robotic replacement, we restore joint function and eliminate pain using the latest muscle-sparing techniques.',
      icon: Zap,
      features: ['Total Knee Arthroplasty (TKA)', 'Partial Knee Replacement', 'Robotic-Assisted Surgery', 'Rapid Recovery Protocols'],
      image: '/images/Partial-Knee-Replacement.webp',
    },
    {
      id: 'hip-replacement-surgery',
      title: 'Hip Replacement Surgery',
      description: 'Expert hip care for arthritis and fractures. We utilize advanced bearing surfaces and precision placement to ensure your new hip feels natural and lasts for decades.',
      icon: Heart,
      features: ['Total Hip Arthroplasty', 'Anterior & Posterior Approaches', 'Ceramic-on-Polyethylene Bearings', 'Minimally Invasive Techniques'],
      image: '/images/Total-hip-replacement.webp',
    },
    {
      id: 'sports-injury-arthroscopy',
      title: 'Sports Injury & Arthroscopy',
      description: 'Minimally invasive "keyhole" surgery for athletes. We specialize in ACL/PCL reconstruction and meniscus repairs to get you back to your sport safely and quickly.',
      icon: Activity,
      features: ['ACL & PCL Reconstruction', 'Arthroscopic Meniscus Repair', 'Shoulder Instability Repair', 'Rotator Cuff Surgery'],
      image: '/images/Knee-Arthroscopy-key-hole-surgery.webp',
    },
    {
      id: 'fracture-trauma-care',
      title: 'Fracture & Trauma Care',
      description: '24/7 emergency orthopedic support for complex fractures and musculoskeletal trauma. We follow international AO protocols for stabilizing and repairing serious injuries.',
      icon: Shield,
      features: ['Complex Fracture Management', 'Pelvic & Acetabular Surgery', 'Polytrauma Support', 'Deformity Correction'],
      image: '/images/fracture-trauma-care.webp',
    },
    {
      id: 'spine-surgery',
      title: 'Advanced Spine Surgery',
      description: 'Precision solutions for back pain, herniated discs, and spinal stenosis. We focus on minimally invasive spine surgery (MISS) for faster recovery and less tissue disruption.',
      icon: Settings,
      features: ['Microdiscectomy', 'Spinal Decompression', 'Minimally Invasive Fusion', 'Scoliosis Correction'],
      image: '/images/dr images/TRAUMA.jpg',
    },
  ]

  return (
    <main>
      <PageAnimationWrapper />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" itemScope itemType="https://schema.org/ItemList">
        <header className="text-center mb-16 mt-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 font-serif mb-6" itemProp="name">
            Our Orthopedic Services
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed" itemProp="description">
            Experience world-class orthopedic care led by Dr. Gaurav Saini. We combine nearly 20 years of surgical expertise with the latest medical innovations, including robotic-assisted joint replacement and minimally invasive arthroscopy.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <article key={service.id} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full" itemScope itemType="https://schema.org/ProfessionalService">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-4 shadow-sm">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 font-serif" itemProp="name">{service.title}</h2>
                </div>
                
                {service.image && (
                  <div className="mb-4 rounded-xl overflow-hidden shadow-sm aspect-video relative group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 30vw"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}
                
                <p className="text-gray-600 mb-6 leading-relaxed text-sm line-clamp-3" itemProp="description">{service.description}</p>
                
                <ul className="mb-6 space-y-2 flex-grow">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-xs text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={`/services/${service.id}/`}
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md group"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </article>
            )
          })}
        </div>

        {/* Other Specialized Centers */}
        <section className="mt-20 py-12 border-t border-gray-100">
           <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-serif">Specialized Care Centers</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { id: 'joint-replacement-center', title: 'Joint Replacement Center' },
                { id: 'robotic-surgery', title: 'Robotic Surgery Hub' },
                { id: 'arthroscopic-surgery', title: 'Arthroscopy Unit' },
                { id: 'sports-injury-treatment', title: 'Sports Medicine Unit' }
              ].map(center => (
                <Link key={center.id} href={`/services/${center.id}/`} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition-all text-center group">
                   <h4 className="font-bold text-gray-800 group-hover:text-blue-700">{center.title}</h4>
                   <span className="text-xs text-blue-600 font-bold mt-2 inline-block">Explore Center <ArrowRight className="w-3 h-3 inline ml-1" /></span>
                </Link>
              ))}
           </div>
        </section>

        {/* Commitment to Excellence Section */}
        <section className="py-20 mt-20 bg-white border-y border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif leading-tight">Our Commitment to Your Recovery Journey</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At our specialized orthopedic practice, we don't just treat conditions; we care for people. Dr. Gaurav Saini's approach integrates the highest surgical standards with a deep commitment to patient education and safety.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Highest Safety</h4>
                    <p className="text-gray-600 text-sm">Ultra-sterile OTs</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Patient-Centric</h4>
                    <p className="text-gray-600 text-sm">Individual plans</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 relative shadow-xl">
               <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Why Choose Us?</h3>
               <div className="space-y-6">
                  <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-bold text-blue-700 mb-1 text-sm">Expert Consultation</h4>
                    <p className="text-gray-600 text-xs">Nearly 20 years of experience in orthopedic surgery.</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-bold text-blue-700 mb-1 text-sm">Advanced Technology</h4>
                    <p className="text-gray-600 text-xs">State-of-the-art robotic systems for unmatched precision.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* YouTube Shorts Section */}
        <section className="my-20 bg-gray-900 text-white rounded-3xl p-10 lg:p-16 relative overflow-hidden" itemScope itemType="https://schema.org/VideoGallery">
          <div className="text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6 font-serif" itemProp="name">Insights from the Operating Room</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto" itemProp="description">
              Watch real patient outcomes and learn about advanced orthopedic procedures.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { id: 'j0pIonJLabo', title: 'ACL Recovery' },
                { id: 'R-D6sdwEPrY', title: 'Robotic TKR' },
                { id: 'z4DpEyO_q6w', title: 'Arthroscopy' }
              ].map(video => (
                <a key={video.id} href={`https://www.youtube.com/shorts/${video.id}`} target="_blank" rel="noopener noreferrer" className="group block bg-white/10 rounded-2xl overflow-hidden border border-white/10 p-12 text-center hover:bg-white/20 transition-all">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-6 h-6 text-white ml-1 fill-current" />
                  </div>
                  <h3 className="text-sm font-bold">{video.title}</h3>
                </a>
              ))}
            </div>
            <div className="mt-12 text-center">
               <a href="https://www.youtube.com/@drgauravsaini_official" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 shadow-xl">
                 <Play className="w-5 h-5 mr-3 fill-current" /> Subscribe to Our Channel
               </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}