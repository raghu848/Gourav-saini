import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, CheckCircle, Users, Shield, Heart, Activity, Award } from 'lucide-react'
import PageAnimationWrapper from '@/components/PageAnimationWrapper'

import { generateServiceMetadata } from '../../metadata-improved'

export const metadata: Metadata = generateServiceMetadata('hip-replacement-surgery')

export default function HipReplacementSurgeryPage() {
  const hipConditions = [
    {
      title: 'Osteoarthritis',
      description: 'Degenerative joint disease causing cartilage breakdown'
    },
    {
      title: 'Rheumatoid Arthritis',
      description: 'Inflammatory condition affecting joint lining'
    },
    {
      title: 'Avascular Necrosis',
      description: 'Bone death due to inadequate blood supply'
    },
    {
      title: 'Hip Fractures',
      description: 'Breaks in the hip bone, especially in elderly patients'
    }
  ]

  const treatmentApproach = [
    'Robotic-assisted hip replacement with advanced technology',
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
                "name": "Hip Replacement Surgery",
                "item": "https://drgauravsainiortho.com/services/hip-replacement-surgery/"
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
            "name": "Hip Replacement Surgery",
            "description": "Advanced total hip replacement surgery using minimally invasive techniques for pain relief and restored mobility.",
            "procedureSteps": "Initial consultation, 3D imaging, surgical planning, minimally invasive surgery, rehabilitation.",
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
          <span className="text-gray-500">Hip Replacement Surgery</span>
        </nav>

        <article className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Hero Section */}
          <header className="relative h-[450px] flex items-center justify-center text-white text-center overflow-hidden">
             <div className="absolute inset-0 bg-indigo-900/80 z-10"></div>
             <Image 
                src="/images/Total-hip-replacement.webp" 
                alt="Total Hip Replacement Surgery" 
                fill
                className="object-cover"
             />
             <div className="relative z-20 px-4">
                <div className="inline-flex items-center px-4 py-2 bg-teal-400/20 rounded-full border border-teal-400/30 text-teal-300 text-sm font-bold uppercase tracking-widest mb-6">
                  Expert Surgical Care
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold font-serif mb-6 leading-tight">
                  Advanced Hip Replacement <br/>
                  <span className="text-teal-400">Restoring Lifelong Mobility</span>
                </h1>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto font-medium">
                  Relieve debilitating hip pain and return to your daily activities with precision-guided surgical excellence.
                </p>
             </div>
          </header>

          <div className="p-8 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif leading-tight">
                  Overcoming Chronic Hip Pain
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-6">
                  <p>
                    Total Hip Replacement (THR) is a transformative procedure designed to replace a damaged hip joint with a durable artificial prosthesis. Dr. Gaurav Saini specializes in modern, muscle-sparing approaches that minimize surgical trauma and accelerate the healing process.
                  </p>
                  <p>
                    Whether your hip pain is caused by severe osteoarthritis, rheumatoid arthritis, or Avascular Necrosis (AVN), our goal is to provide a solution that not only eliminates pain but also restores a full, natural range of motion. We utilize the most advanced prosthetic materials, including ceramic-on-polyethylene and ceramic-on-ceramic bearings, which are known for their exceptional durability and low wear rates.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6 font-serif">Medical Conditions Treated</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {hipConditions.map((condition, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 group hover:bg-blue-50 transition-colors">
                        <h4 className="font-bold text-indigo-700 mb-2 group-hover:scale-105 transition-transform">{condition.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{condition.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <aside className="space-y-8">
                <div className="bg-gradient-to-br from-indigo-900 to-blue-900 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-1/2 translate-x-1/2"></div>
                  <h3 className="text-2xl font-bold mb-8 font-serif border-b border-white/20 pb-4">Our Treatment Philosophy</h3>
                  <ul className="space-y-6">
                    {treatmentApproach.map((approach, index) => (
                      <li key={index} className="flex items-start group">
                        <div className="w-8 h-8 bg-teal-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 text-blue-900 shadow-lg shadow-teal-900/20 group-hover:rotate-12 transition-transform">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <span className="text-blue-50 font-medium leading-relaxed">{approach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                   <h3 className="text-xl font-bold text-gray-900 mb-6 font-serif flex items-center">
                     <Users className="w-6 h-6 mr-3 text-indigo-600" />
                     Surgical Outcomes
                   </h3>
                   <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-4 bg-indigo-50 rounded-2xl">
                        <div className="text-2xl font-bold text-indigo-700">98%</div>
                        <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Success Rate</div>
                      </div>
                      <div className="p-4 bg-indigo-50 rounded-2xl">
                        <div className="text-2xl font-bold text-indigo-700">99%</div>
                        <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Patient Joy</div>
                      </div>
                      <div className="p-4 bg-indigo-50 rounded-2xl">
                        <div className="text-2xl font-bold text-indigo-700">25+</div>
                        <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Year Longevity</div>
                      </div>
                      <div className="p-4 bg-indigo-50 rounded-2xl">
                        <div className="text-2xl font-bold text-indigo-700">48h</div>
                        <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Avg Discharge</div>
                      </div>
                   </div>
                   <p className="mt-4 text-[10px] text-gray-400 leading-normal text-left">
                     * Note: Success rates, satisfaction levels, and outcomes reflect general clinical statistics and database averages; individual results may vary depending on patient health conditions.
                   </p>
                </div>
              </aside>
            </div>

            {/* Tech Highlight Section */}
            <section className="mb-24 py-16 bg-indigo-950 -mx-8 lg:-mx-16 px-8 lg:px-16 text-white overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/hero-bg.webp')] opacity-5 bg-cover"></div>
              <div className="max-w-5xl mx-auto relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center font-serif leading-tight">The Precision Advantage in Hip Surgery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                      <h4 className="text-xl font-bold text-teal-400 mb-4">Anatomic Restoration</h4>
                      <p className="text-gray-300 leading-relaxed">By using advanced 3D planning software, we can precisely match the artificial joint to your original hip's center of rotation, ensuring equal leg lengths and optimal stability.</p>
                   </div>
                   <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                      <h4 className="text-xl font-bold text-teal-400 mb-4">Muscle-Sparing Approaches</h4>
                      <p className="text-gray-300 leading-relaxed">We prioritize surgical techniques that separate muscles rather than cutting them. This leads to significantly less post-operative pain and a much faster return to independent walking.</p>
                   </div>
                </div>
              </div>
            </section>

            {/* Life After Surgery Section */}
            <section className="mb-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-serif">Life After Your Hip Replacement</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="text-center p-8">
                    <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 shadow-inner">
                       <Activity className="w-10 h-10" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3">Pain-Free Activity</h4>
                    <p className="text-gray-600 text-sm">Return to walking, swimming, golfing, and cycling without the debilitating pain that once limited you.</p>
                 </div>
                 <div className="text-center p-8">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 shadow-inner">
                       <Shield className="w-10 h-10" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3">Joint Stability</h4>
                    <p className="text-gray-600 text-sm">Advanced prosthetic designs provide a secure, stable joint that feels natural even during complex movements.</p>
                 </div>
                 <div className="text-center p-8">
                    <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6 text-indigo-600 shadow-inner">
                       <Award className="w-10 h-10" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3">Proven Longevity</h4>
                    <p className="text-gray-600 text-sm">Our use of high-performance ceramic bearings ensures that your new hip is built to last for decades of active use.</p>
                 </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-24 bg-gray-50 rounded-3xl p-10 lg:p-16 border border-gray-100">
               <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-serif">Frequently Asked Questions</h2>
               <div className="max-w-4xl mx-auto space-y-4">
                  <details className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden" open>
                    <summary className="p-6 cursor-pointer font-bold text-gray-900 flex justify-between items-center list-none">
                      How long does the surgery take?
                      <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-6 pt-0 text-gray-700 text-sm leading-relaxed border-t border-gray-50">
                      Typically, a total hip replacement surgery takes between 60 to 90 minutes. You will be in the recovery area for another hour or two before being moved to your room.
                    </div>
                  </details>
                  <details className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <summary className="p-6 cursor-pointer font-bold text-gray-900 flex justify-between items-center list-none">
                      When can I walk without a walker?
                      <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-6 pt-0 text-gray-700 text-sm leading-relaxed border-t border-gray-50">
                      Most patients use a walker or crutches for the first 1 to 2 weeks for safety. By the 3rd or 4th week, many are walking independently or with just a cane.
                    </div>
                  </details>
                  <details className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <summary className="p-6 cursor-pointer font-bold text-gray-900 flex justify-between items-center list-none">
                      Is Avascular Necrosis (AVN) treatable with surgery?
                      <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-6 pt-0 text-gray-700 text-sm leading-relaxed border-t border-gray-50">
                      Yes. In advanced stages of AVN where the bone has collapsed, a total hip replacement is the most effective way to restore function and eliminate pain completely.
                    </div>
                  </details>
               </div>
            </section>

            {/* Final CTA */}
            <footer className="bg-gray-900 text-white rounded-3xl p-12 lg:p-20 relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500 opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
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
