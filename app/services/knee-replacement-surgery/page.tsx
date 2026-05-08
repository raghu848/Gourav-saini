import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, CheckCircle, Users, Shield, Heart } from 'lucide-react'

import PageAnimationWrapper from '@/components/PageAnimationWrapper'
import { generateServiceMetadata } from '../../metadata-improved'

export const metadata: Metadata = generateServiceMetadata('knee-replacement-surgery')

export default function KneeReplacementSurgeryPage() {
  const kneeConditions = [
    {
      title: 'Osteoarthritis',
      description: 'Degenerative joint disease causing cartilage breakdown'
    },
    {
      title: 'Rheumatoid Arthritis',
      description: 'Inflammatory condition affecting joint lining'
    },
    {
      title: 'Post-Traumatic Arthritis',
      description: 'Arthritis developing after joint injury'
    },
    {
      title: 'Severe Knee Deformity',
      description: 'Correcting bowed legs or knock knees'
    }
  ]

  const treatmentApproach = [
    'Robotic-assisted knee replacement with CORI technology',
    'Personalized surgical planning using 3D imaging',
    'Minimally invasive techniques for faster recovery',
    'Comprehensive rehabilitation program',
    'Long-term follow-up care',
    'Patient education and prevention strategies'
  ]

  return (
    <main className="min-h-screen bg-gray-50 pt-24 lg:pt-32 relative">
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
                "name": "Services",
                "item": "https://drgauravsainiortho.com/services/"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Knee Replacement Surgery",
                "item": "https://drgauravsainiortho.com/services/knee-replacement-surgery/"
              }
            ]
          })
        }}
      />
      
      {/* MedicalProcedure Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Knee Replacement Surgery",
            "description": "Advanced robotic knee replacement surgery using CORI technology for precise implant placement and faster recovery.",
            "procedureSteps": "Initial consultation, 3D imaging, robotic surgical planning, minimally invasive surgery, rehabilitation.",
            "preparation": "Medical evaluation, physiotherapy consultation, pre-operative tests.",
            "relevantSpecialty": {
              "@type": "MedicalSpecialty",
              "name": "OrthopaedicSurgery"
            }
          })
        }}
      />
      <PageAnimationWrapper />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <nav className="mb-8 text-sm font-medium">
          <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/services" className="text-blue-600 hover:text-blue-800">Services</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500">Knee Replacement Surgery</span>
        </nav>

        <article className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Hero Section */}
          <header className="relative h-[400px] flex items-center justify-center text-white text-center overflow-hidden">
             <div className="absolute inset-0 bg-blue-900/80 z-10"></div>
             <Image 
                src="/images/Partial-Knee-Replacement.webp" 
                alt="Knee Replacement Surgery" 
                fill
                className="object-cover"
             />
             <div className="relative z-20 px-4">
                <h1 className="text-4xl lg:text-6xl font-bold font-serif mb-6 leading-tight">
                  Knee Replacement Surgery <br/>
                  <span className="text-teal-400">Restore Your Active Lifestyle</span>
                </h1>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto font-medium">
                  State-of-the-art robotic-assisted solutions to eliminate chronic knee pain and restore full mobility.
                </p>
             </div>
          </header>

          <div className="p-8 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif leading-tight">
                  Understanding Advanced Knee Arthroplasty
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-6">
                  <p>
                    Knee replacement surgery, also known as knee arthroplasty, is one of the most successful procedures in modern medicine. At our clinic, Dr. Gaurav Saini utilizes the latest **robotic-assisted CORI technology** to perform both Total Knee Replacements (TKR) and Unicompartmental (Partial) Knee Replacements.
                  </p>
                  <p>
                    Unlike conventional surgery, our approach involves a sub-millimeter level of precision. By creating a real-time 3D map of your knee joint, we can ensure that the prosthetic implant is aligned perfectly with your natural bone structure. This reduces wear and tear on the new joint and provides a more "natural" feel during movement.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6 font-serif">Knee Conditions We Address</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {kneeConditions.map((condition, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors">
                        <h4 className="font-bold text-blue-700 mb-2">{condition.title}</h4>
                        <p className="text-sm text-gray-600">{condition.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <aside className="space-y-8">
                <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <h3 className="text-2xl font-bold mb-8 font-serif border-b border-white/20 pb-4">Our Surgical Approach</h3>
                  <ul className="space-y-6">
                    {treatmentApproach.map((approach, index) => (
                      <li key={index} className="flex items-start group">
                        <div className="w-8 h-8 bg-teal-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 text-blue-900 group-hover:scale-110 transition-transform">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <span className="text-blue-50 font-medium leading-relaxed">{approach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border-2 border-blue-50 rounded-3xl p-8 shadow-sm">
                   <h3 className="text-xl font-bold text-gray-900 mb-6 font-serif flex items-center">
                     <Users className="w-6 h-6 mr-3 text-blue-600" />
                     Patient Statistics
                   </h3>
                   <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                        <span className="text-gray-600 font-medium">Surgical Success Rate</span>
                        <span className="font-bold text-blue-700">98%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                        <span className="text-gray-600 font-medium">Post-Op Satisfaction</span>
                        <span className="font-bold text-blue-700">99%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                        <span className="text-gray-600 font-medium">Recovery Time Reduction</span>
                        <span className="font-bold text-blue-700">40%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                        <span className="text-gray-600 font-medium">Implant Life Expectancy</span>
                        <span className="font-bold text-blue-700">25+ Yrs</span>
                      </div>
                   </div>
                </div>
              </aside>
            </div>

            {/* Specialized Knee Services Section */}
            <section className="mb-24 py-16 bg-gray-50 -mx-8 lg:-mx-16 px-8 lg:px-16 border-y border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-serif">Comprehensive Knee Care Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                    <Heart className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Total Knee Replacement (TKR)</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">Complete resurfacing of all three compartments of the knee joint using high-grade biocompatible materials.</p>
                  <ul className="text-xs space-y-2 text-gray-500 font-medium uppercase tracking-wider">
                    <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-green-500" /> Robotic Precision</li>
                    <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-green-500" /> Custom Implant Fit</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Partial Knee Replacement</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">Targeted treatment for arthritis limited to one area of the knee, preserving your healthy natural ligaments.</p>
                  <ul className="text-xs space-y-2 text-gray-500 font-medium uppercase tracking-wider">
                    <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-green-500" /> Bone Sparing</li>
                    <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-green-500" /> Faster Healing</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Revision Knee Surgery</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">Advanced corrective procedures for patients whose previous knee implants have worn out or failed over time.</p>
                  <ul className="text-xs space-y-2 text-gray-500 font-medium uppercase tracking-wider">
                    <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-green-500" /> Complex Reconstruction</li>
                    <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-green-500" /> Expert Planning</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Preparation Section */}
            <section className="mb-24">
              <div className="max-w-4xl mx-auto">
                 <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center font-serif">Preparing for Your Surgery</h2>
                 <div className="space-y-6">
                    <div className="flex gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                       <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                       <div>
                          <h4 className="font-bold text-gray-900 mb-2">Pre-Operative Assessment</h4>
                          <p className="text-gray-600 text-sm">Comprehensive medical tests and physical evaluations to ensure you are fit for the procedure.</p>
                       </div>
                    </div>
                    <div className="flex gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                       <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                       <div>
                          <h4 className="font-bold text-gray-900 mb-2">Physiotherapy Consultation</h4>
                          <p className="text-gray-600 text-sm">Meeting with our rehabilitation experts to understand the post-operative exercises and recovery goals.</p>
                       </div>
                    </div>
                    <div className="flex gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                       <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                       <div>
                          <h4 className="font-bold text-gray-900 mb-2">3D Surgical Planning</h4>
                          <p className="text-gray-600 text-sm">Our team uses robotic software to map your knee and select the ideal implant size and orientation.</p>
                       </div>
                    </div>
                 </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-24">
               <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-serif">Frequently Asked Questions</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4 font-serif">How long is the hospital stay?</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Most of our robotic knee replacement patients are able to walk within 6-8 hours and are discharged within 2 to 3 days of surgery.</p>
                  </div>
                  <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4 font-serif">When can I return to work?</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">For office-based jobs, most patients return in 4-6 weeks. For more physically demanding roles, it may take 10-12 weeks.</p>
                  </div>
                  <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4 font-serif">What materials are the implants made of?</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">We use high-grade cobalt-chromium and titanium alloys with ultra-high-molecular-weight polyethylene for maximum durability and biocompatibility.</p>
                  </div>
                  <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4 font-serif">Is physical therapy necessary?</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Absolutely. Physiotherapy is critical to ensuring the best functional outcome and regaining full strength in your new joint.</p>
                  </div>
               </div>
            </section>

            <footer className="bg-gradient-to-br from-gray-900 to-blue-950 text-white rounded-3xl p-10 lg:p-20 relative overflow-hidden text-center">
               <h2 className="text-3xl lg:text-5xl font-bold mb-8 font-serif">Rediscover the Joy of Movement</h2>
               <p className="text-blue-100 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
                 Take the first step toward a pain-free life. Join over 5,000 satisfied patients who have found relief through Dr. Gaurav Saini's expert care.
               </p>
               <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <Link href="/contact/" className="px-10 py-5 bg-teal-400 text-blue-900 font-bold rounded-2xl hover:bg-teal-300 transition-all hover:scale-105 shadow-xl shadow-teal-500/20">
                   Book Your Consultation
                 </Link>
                 <a href="tel:+919876777393" className="px-10 py-5 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
                   Call: +91 98767-77393
                 </a>
               </div>
            </footer>
          </div>
        </article>
      </div>
    </main>
  )
}
