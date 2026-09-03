import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, CheckCircle, Users, Shield, Heart, Activity } from 'lucide-react'
import PageAnimationWrapper from '@/components/PageAnimationWrapper'
import { generateServiceMetadata } from '../../metadata-improved'

export const metadata: Metadata = generateServiceMetadata('fracture-trauma-care')

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
                "name": "Fracture & Trauma Care",
                "item": "https://drgauravsainiortho.com/services/fracture-trauma-care/"
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
            "name": "Fracture & Trauma Care",
            "description": "Emergency and specialized care for complex fractures, polytrauma, and orthopedic emergencies with 24/7 availability.",
            "procedureSteps": "Emergency stabilization, diagnostic imaging, surgical intervention (if required), multi-disciplinary recovery.",
            "preparation": "Emergency admission, rapid diagnostics, pre-operative stabilization.",
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
          <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/services" className="text-blue-600 hover:text-blue-800 transition-colors">Services</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500">Fracture & Trauma Care</span>
        </nav>

        <article className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Hero Section */}
          <header className="relative h-[450px] flex items-center justify-center text-white text-center overflow-hidden">
             <div className="absolute inset-0 bg-red-950/80 z-10"></div>
             <Image 
                src="/images/dr images/TRAUMA.webp" 
                alt="Emergency Fracture and Trauma Care" 
                fill
                className="object-cover"
             />
             <div className="relative z-20 px-4 max-w-4xl">
                <div className="inline-flex items-center px-4 py-2 bg-red-600/20 rounded-full border border-red-400/30 text-red-300 text-xs font-bold uppercase tracking-widest mb-6">
                  24/7 Emergency Support
                </div>
                <h1 className="text-4xl lg:text-7xl font-bold font-serif mb-6 leading-tight">
                  Fracture Doctor Near Me & <br/>
                  <span className="text-red-500">Bone Fracture Specialist</span>
                </h1>
                <p className="text-xl text-blue-100 font-medium leading-relaxed">
                  Advanced surgical reconstruction and compassionate care for complex injuries and life-threatening trauma.
                </p>
             </div>
          </header>

          <div className="p-8 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif leading-tight">
                  Consult Top Fracture Doctor Near Me & Trauma Specialist
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-6">
                  <p>
                    If you are facing an emergency and need a reliable **fracture doctor near me**, Dr. Gaurav Saini is a highly skilled **bone fracture specialist** who treats simple and complex fractures. Orthopedic trauma involves severe injuries to the musculoskeletal system, including bones, joints, ligaments, and tendons, requiring immediate intervention to prevent long-term disability.
                  </p>
                  <p>
                    Our approach to trauma is multi-disciplinary. We focus on not just "fixing the bone," but restoring the patient's entire quality of life. This includes advanced pain management, soft-tissue reconstruction, and a highly coordinated rehabilitation program. We are equipped to handle high-velocity impact injuries, pelvic fractures, and complex articular (joint) breaks that require sub-millimeter precision for successful outcomes.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6 font-serif">Conditions We Treat</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {traumaTypes.map((type, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-red-200 transition-all duration-300 group">
                        <h4 className="font-bold text-red-700 mb-2 group-hover:scale-105 transition-transform">{type.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{type.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              
              <aside className="space-y-8">
                <div className="bg-gradient-to-br from-red-900 to-gray-900 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <h3 className="text-2xl font-bold mb-8 font-serif border-b border-white/20 pb-4">The Trauma Protocol</h3>
                  <ul className="space-y-6">
                    {treatmentApproach.map((approach, index) => (
                      <li key={index} className="flex items-start group">
                        <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 text-white group-hover:scale-110 transition-transform shadow-lg shadow-red-900/40">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <span className="text-red-50 font-medium leading-relaxed">{approach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border-2 border-red-50 rounded-3xl p-8 shadow-sm">
                   <h3 className="text-xl font-bold text-gray-900 mb-6 font-serif flex items-center">
                     <Shield className="w-6 h-6 mr-3 text-red-600" />
                     Emergency Capability
                   </h3>
                   <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                        <span className="text-gray-600 font-medium">Response Window</span>
                        <span className="font-bold text-red-700 text-lg">&lt; 15 Mins</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                        <span className="text-gray-600 font-medium">Surgical Success</span>
                        <span className="font-bold text-red-700 text-lg">99%</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                        <span className="text-gray-600 font-medium">Emergency Availability</span>
                        <span className="font-bold text-red-700 text-lg">24/7/365</span>
                      </div>
                   </div>
                   <p className="mt-4 text-[10px] text-gray-400 leading-normal text-left">
                     * Note: Success rates and emergency response windows represent average clinical benchmarks and general statistics. Individual patient outcomes may vary based on clinical factors.
                   </p>
                </div>
              </aside>
            </div>

            {/* Advanced Techniques Section */}
            <section className="mb-24 py-16 bg-gray-900 -mx-8 lg:-mx-16 px-8 lg:px-16 text-white relative">
               <div className="max-w-5xl mx-auto">
                 <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center font-serif">Advanced Surgical Techniques</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
                      <h4 className="text-xl font-bold text-red-500 mb-4">Minimally Invasive Plate Osteosynthesis (MIPO)</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">A specialized technique that allows for the internal fixation of fractures using very small incisions. This preserves the blood supply to the bone, significantly accelerating the biological healing process.</p>
                   </div>
                   <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
                      <h4 className="text-xl font-bold text-red-500 mb-4">Limb Salvage & Reconstruction</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">For severe trauma cases where the limb is at risk, we utilize advanced microsurgical and reconstructive techniques to save the limb and restore its functional capacity.</p>
                   </div>
                 </div>
               </div>
            </section>

            {/* Recovery Guide */}
            <section className="mb-24">
               <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-serif">Post-Trauma Recovery Roadmap</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                       <Activity className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3">Phase 1: Stabilization</h4>
                    <p className="text-gray-600 text-sm">Focus on pain control, wound healing, and preventing complications during the initial surgical recovery period.</p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
                    <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                       <Users className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3">Phase 2: Mobility</h4>
                    <p className="text-gray-600 text-sm">Gradual weight-bearing and range-of-motion exercises guided by our specialized trauma physiotherapy team.</p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
                    <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                       <Heart className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3">Phase 3: Integration</h4>
                    <p className="text-gray-600 text-sm">Strengthening and functional training to return to daily activities and work with full confidence.</p>
                  </div>
               </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-24 bg-gray-50 rounded-3xl p-10 lg:p-16 border border-gray-100">
               <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-serif">Fracture Care FAQ</h2>
               <div className="max-w-4xl mx-auto space-y-4">
                  <details className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden" open>
                    <summary className="p-6 cursor-pointer font-bold text-gray-900 flex justify-between items-center list-none">
                      How do I know if my bone is broken or just sprained?
                      <span className="text-red-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-6 pt-0 text-gray-700 text-sm leading-relaxed border-t border-gray-50">
                      Common signs of a fracture include immediate severe pain, deformity, inability to bear weight, and bruising/swelling. However, an X-ray or CT scan is the only definitive way to diagnose a fracture.
                    </div>
                  </details>
                  <details className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <summary className="p-6 cursor-pointer font-bold text-gray-900 flex justify-between items-center list-none">
                      What is the average healing time for a fracture?
                      <span className="text-red-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-6 pt-0 text-gray-700 text-sm leading-relaxed border-t border-gray-50">
                      Healing time varies depending on the bone and severity. Most fractures take 6 to 12 weeks to unite biologically, though full functional strength may take several months of rehabilitation.
                    </div>
                  </details>
                  <details className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <summary className="p-6 cursor-pointer font-bold text-gray-900 flex justify-between items-center list-none">
                      Are implants removed after the bone heals?
                      <span className="text-red-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-6 pt-0 text-gray-700 text-sm leading-relaxed border-t border-gray-50">
                      In most cases, titanium or stainless steel implants are permanent and do not need removal unless they cause irritation or pain after the bone has fully healed.
                    </div>
                  </details>
               </div>
            </section>

            {/* Final CTA */}
            <footer className="bg-red-900 text-white rounded-3xl p-12 lg:p-20 relative overflow-hidden text-center shadow-2xl">
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-5xl font-bold mb-8 font-serif">Immediate Care Saves Lives and Limbs</h2>
                <p className="text-red-100 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
                  In an orthopedic emergency, every minute counts. Contact our 24/7 trauma team immediately for expert intervention.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="tel:+919876777393"
                    className="inline-flex items-center justify-center px-10 py-5 bg-white text-red-900 font-bold rounded-2xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    <Heart className="w-6 h-6 mr-3 fill-current" />
                    Emergency: +91 98767 77393
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 hover:scale-105 transition-all duration-300"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </footer>
            </div>
          </article>
        </div>
      </main>
    )
  }
