import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight, CheckCircle, Users, Heart, Settings, Shield } from 'lucide-react'
import PageAnimationWrapper from '../../../components/PageAnimationWrapper'
import { generateServiceMetadata } from '../../metadata-improved'

export const metadata: Metadata = generateServiceMetadata('joint-replacement-center')

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
    <main className="min-h-screen bg-gray-50 pt-24 lg:pt-32 relative">
      <PageAnimationWrapper />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <nav className="mb-8 text-sm font-medium">
          <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/services" className="text-blue-600 hover:text-blue-800 transition-colors">Services</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500">Joint Replacement Center</span>
        </nav>

        <article className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Hero Section */}
          <header className="relative h-[450px] flex items-center justify-center text-white text-center overflow-hidden">
             <div className="absolute inset-0 bg-blue-900/80 z-10"></div>
             <Image 
                src="/images/dr images/TRAUMA.webp" 
                alt="Joint Replacement Center Excellence" 
                fill
                className="object-cover"
             />
             <div className="relative z-20 px-4 max-w-4xl">
                <div className="inline-flex items-center px-4 py-2 bg-blue-400/20 rounded-full border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
                  Center of Excellence
                </div>
                <h1 className="text-4xl lg:text-7xl font-bold font-serif mb-6 leading-tight">
                  Joint Replacement <br/>
                  <span className="text-blue-400">& Surgery Center</span>
                </h1>
                <p className="text-xl text-blue-100 font-medium leading-relaxed">
                  A multi-disciplinary facility dedicated to restoring mobility and life quality through advanced orthopedic surgery.
                </p>
             </div>
          </header>

          <div className="p-8 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif leading-tight">
                  Your Journey to Pain-Free Living
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-6">
                  <p>
                    The Joint Replacement Center under Dr. Gaurav Saini's leadership is a specialized hub designed for patients suffering from end-stage arthritis and complex joint injuries. We don't just perform surgeries; we manage a comprehensive clinical pathway that begins with an exhaustive diagnostic evaluation and extends through custom-tailored rehabilitation.
                  </p>
                  <p>
                    By integrating **Robotic Assistance**, **Precision Navigation**, and **Patient-Specific Implants**, we ensure that every replacement is unique to the patient's anatomy. Our center is optimized for high-volume, high-success procedures, maintaining a sterile environment and a nursing staff specifically trained in orthopedic recovery protocols.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6 font-serif">Specialized Procedures</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {procedures.map((procedure, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300">
                        <h4 className="font-bold text-blue-700 mb-2">{procedure.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{procedure.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              
              <aside className="space-y-8">
                <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <h3 className="text-2xl font-bold mb-8 font-serif border-b border-white/20 pb-4">Center Features</h3>
                  <ul className="space-y-6">
                    {centerFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start group">
                        <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 text-blue-900 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/30">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <span className="text-blue-50 font-medium leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border-2 border-blue-50 rounded-3xl p-8 shadow-sm">
                   <h3 className="text-xl font-bold text-gray-900 mb-6 font-serif flex items-center">
                     <Shield className="w-6 h-6 mr-3 text-blue-600" />
                     Clinical Performance
                   </h3>
                   <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                        <span className="text-gray-600 font-medium">Surgical Success Rate</span>
                        <span className="font-bold text-blue-700 text-lg">99%</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                        <span className="text-gray-600 font-medium">Avg. Recovery Time</span>
                        <span className="font-bold text-blue-700 text-lg">4-6 Weeks</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                         <span className="text-gray-600 font-medium">Patient Satisfaction</span>
                         <span className="font-bold text-blue-700 text-lg">99%</span>
                      </div>
                   </div>
                   <p className="mt-4 text-[10px] text-gray-400 leading-normal text-left">
                     * Note: Success rates and outcomes reflect general clinical statistics and database averages; individual results may vary depending on patient health conditions.
                   </p>
                </div>
              </aside>
            </div>

            {/* Care Process */}
            <section className="mb-24 py-16 bg-blue-950 -mx-8 lg:-mx-16 px-8 lg:px-16 text-white relative">
               <div className="max-w-6xl mx-auto">
                 <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center font-serif">The Comprehensive Care Pathway</h2>
                 <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                   <div className="text-center group">
                      <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors">
                        <Users className="w-10 h-10 text-blue-400 group-hover:text-white" />
                      </div>
                      <h4 className="text-lg font-bold mb-3">1. Consultation</h4>
                      <p className="text-gray-400 text-sm">Deep diagnostic dive with X-rays, MRI, and personalized mobility assessment.</p>
                   </div>
                   <div className="text-center group">
                      <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors">
                        <Settings className="w-10 h-10 text-blue-400 group-hover:text-white" />
                      </div>
                      <h4 className="text-lg font-bold mb-3">2. 3D Planning</h4>
                      <p className="text-gray-400 text-sm">Pre-operative virtual modeling to select the exact implant and surgical path.</p>
                   </div>
                   <div className="text-center group">
                      <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors">
                        <Shield className="w-10 h-10 text-blue-400 group-hover:text-white" />
                      </div>
                      <h4 className="text-lg font-bold mb-3">3. Precision Surgery</h4>
                      <p className="text-gray-400 text-sm">Computer-guided or robotic execution for sub-millimeter placement accuracy.</p>
                   </div>
                   <div className="text-center group">
                      <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors">
                        <Heart className="w-10 h-10 text-blue-400 group-hover:text-white" />
                      </div>
                      <h4 className="text-lg font-bold mb-3">4. Recovery</h4>
                      <p className="text-gray-400 text-sm">Accelerated rehab program to get you walking safely within 24 hours of surgery.</p>
                   </div>
                 </div>
               </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-24">
               <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-serif">Center FAQ</h2>
               <div className="max-w-4xl mx-auto space-y-4">
                  <details className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden" open>
                    <summary className="p-6 cursor-pointer font-bold text-gray-900 flex justify-between items-center list-none">
                      How soon can I walk after surgery at your center?
                      <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-6 pt-0 text-gray-700 text-sm leading-relaxed border-t border-gray-50">
                      Our accelerated recovery protocol (ERAS) aims to have most patients taking their first steps with support on the same day of surgery or within the first 24 hours.
                    </div>
                  </details>
                  <details className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <summary className="p-6 cursor-pointer font-bold text-gray-900 flex justify-between items-center list-none">
                      What kind of implants do you use?
                      <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-6 pt-0 text-gray-700 text-sm leading-relaxed border-t border-gray-50">
                      We use US-FDA approved, high-durability implants from global leaders like Smith+Nephew, Stryker, and Zimmer Biomet, specifically chosen for their longevity and biocompatibility.
                    </div>
                  </details>
                  <details className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <summary className="p-6 cursor-pointer font-bold text-gray-900 flex justify-between items-center list-none">
                      Do you perform revision (second-time) surgeries?
                      <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-6 pt-0 text-gray-700 text-sm leading-relaxed border-t border-gray-50">
                      Yes, our center is a tertiary referral hub for complex revision surgeries, addressing issues like implant loosening, infection, or structural instability from previous operations.
                    </div>
                  </details>
               </div>
            </section>

            {/* Final CTA */}
            <footer className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white rounded-3xl p-12 lg:p-20 relative overflow-hidden text-center shadow-2xl">
              <div className="absolute inset-0 opacity-10 bg-[url('/images/hero-bg.webp')] bg-cover"></div>
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-5xl font-bold mb-8 font-serif leading-tight">Expertise You Can Trust</h2>
                <p className="text-blue-100 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
                  Join the thousands who have found new life at the Joint Replacement Center. Schedule your evaluation with Dr. Gaurav Saini today.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="tel:+919876777393"
                    className="inline-flex items-center justify-center px-10 py-5 bg-blue-500 text-white font-bold rounded-2xl hover:bg-blue-400 hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    <Calendar className="w-6 h-6 mr-3" />
                    Book Consultation
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-900 font-bold rounded-2xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <ArrowRight className="w-6 h-6 mr-3" />
                    Contact Center
                  </Link>
                </div>
                <p className="mt-8 text-blue-300 text-sm font-semibold tracking-widest uppercase">99% Success Rate • Advanced Robotics • Specialized Rehab</p>
              </div>
            </footer>
          </div>
        </article>
      </div>
    </main>
  )
}