import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, CheckCircle, Users, Shield, Heart, ArrowRight } from 'lucide-react'
import PageAnimationWrapper from '@/components/PageAnimationWrapper'
import { generateServiceMetadata } from '../../metadata-improved'

export const metadata: Metadata = generateServiceMetadata('spine-surgery')

export default function SpineSurgeryPage() {
  const spineConditions = [
    {
      title: 'Herniated Disc',
      description: 'Treatment for slipped or ruptured discs pressing on nerves'
    },
    {
      title: 'Spinal Stenosis',
      description: 'Surgical solutions for narrowing of the spinal canal'
    },
    {
      title: 'Scoliosis Correction',
      description: 'Advanced techniques for correcting spinal curvature'
    },
    {
      title: 'Degenerative Disc Disease',
      description: 'Treatment for worn down spinal discs causing pain'
    }
  ]

  const treatmentApproach = [
    'Minimally invasive spine surgery techniques',
    'Advanced imaging for precise diagnosis',
    'Personalized treatment plans',
    'Comprehensive rehabilitation program',
    'Long-term follow-up care',
    'Patient education and prevention'
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
                "name": "Spine Surgery",
                "item": "https://drgauravsainiortho.com/services/spine-surgery/"
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
            "name": "Spine Surgery",
            "description": "Advanced surgical solutions for spinal conditions including herniated discs and spinal stenosis using minimally invasive techniques.",
            "procedureSteps": "Diagnostic assessment, surgical planning, minimally invasive spinal procedure, rehabilitation.",
            "preparation": "Neurological evaluation, MRI/CT scans, pre-operative medical clearance.",
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
          <span className="text-gray-500">Spine Surgery</span>
        </nav>

        <article className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Hero Section */}
          <header className="relative h-[450px] flex items-center justify-center text-white text-center overflow-hidden">
             <div className="absolute inset-0 bg-blue-950/85 z-10"></div>
             <Image 
                src="/images/dr images/TRAUMA.jpg" 
                alt="Advanced Spine Surgery" 
                fill
                className="object-cover"
             />
             <div className="relative z-20 px-4 max-w-4xl">
                <div className="inline-flex items-center px-4 py-2 bg-indigo-400/20 rounded-full border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-6">
                  Precision Spinal Care
                </div>
                <h1 className="text-4xl lg:text-7xl font-bold font-serif mb-6 leading-tight">
                  Advanced <br/>
                  <span className="text-indigo-400">Spine Surgery</span>
                </h1>
                <p className="text-xl text-blue-100 font-medium leading-relaxed">
                  Relieving chronic pain and restoring mobility through world-class minimally invasive spinal interventions.
                </p>
             </div>
          </header>

          <div className="p-8 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif leading-tight">
                  Specialized Solutions for Back and Neck Pain
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-6">
                  <p>
                    Spinal conditions can be debilitating, affecting every aspect of your daily life. Dr. Gaurav Saini specializes in **Minimally Invasive Spine Surgery (MISS)**, an advanced surgical philosophy that focuses on achieving the surgical goal with the least amount of tissue disruption. This means smaller incisions, less post-operative pain, and a significantly faster return to normal activities.
                  </p>
                  <p>
                    Whether you are suffering from a herniated disc, spinal stenosis, or complex degenerative changes, we utilize high-definition magnification and precision instrumentation to decompress nerves and stabilize the spine. Our goal is to provide lasting relief by addressing the root cause of your pain while preserving the natural mechanics of your spinal column.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6 font-serif">Conditions and Treatments</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {spineConditions.map((condition, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-indigo-200 transition-all duration-300">
                        <h4 className="font-bold text-indigo-700 mb-2">{condition.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{condition.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              
              <aside className="space-y-8">
                <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <h3 className="text-2xl font-bold mb-8 font-serif border-b border-white/20 pb-4">The MISS Advantage</h3>
                  <ul className="space-y-6">
                    {treatmentApproach.map((approach, index) => (
                      <li key={index} className="flex items-start group">
                        <div className="w-8 h-8 bg-indigo-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 text-blue-900 group-hover:scale-110 transition-transform shadow-lg shadow-indigo-900/30">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <span className="text-blue-50 font-medium leading-relaxed">{approach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border-2 border-indigo-50 rounded-3xl p-8 shadow-sm">
                   <h3 className="text-xl font-bold text-gray-900 mb-6 font-serif flex items-center">
                     <Shield className="w-6 h-6 mr-3 text-indigo-600" />
                     Clinical Outcomes
                   </h3>
                   <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                        <span className="text-gray-600 font-medium">Surgical Success Rate</span>
                        <span className="font-bold text-indigo-700 text-lg">95%</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                        <span className="text-gray-600 font-medium">Minimally Invasive</span>
                        <span className="font-bold text-indigo-700 text-lg">85% Cases</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                        <span className="text-gray-600 font-medium">Avg. Recovery Reduction</span>
                        <span className="font-bold text-indigo-700 text-lg">40% Faster</span>
                      </div>
                   </div>
                </div>
              </aside>
            </div>

            {/* Specialized Spine Procedures */}
            <section className="mb-24 py-16 bg-gray-950 -mx-8 lg:-mx-16 px-8 lg:px-16 text-white relative">
               <div className="max-w-5xl mx-auto">
                 <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center font-serif">Core Spinal Expertise</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors">
                      <h4 className="text-xl font-bold text-indigo-400 mb-4">Microdiscectomy</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Using microscopic visualization to remove pressure from a pinched nerve caused by a herniated disc. This procedure is the gold standard for relieving leg pain (sciatica) and restoring nerve function.</p>
                   </div>
                   <div className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors">
                      <h4 className="text-xl font-bold text-indigo-400 mb-4">Spinal Decompression & Fusion</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">For patients with spinal instability or severe stenosis, we perform precision decompression followed by stabilization using advanced implants, ensuring the long-term integrity of the spinal column.</p>
                   </div>
                 </div>
               </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-24">
               <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-serif">Spine Surgery FAQ</h2>
               <div className="max-w-4xl mx-auto space-y-4">
                  <details className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden" open>
                    <summary className="p-6 cursor-pointer font-bold text-gray-900 flex justify-between items-center list-none">
                      How long is the hospital stay after spine surgery?
                      <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-6 pt-0 text-gray-700 text-sm leading-relaxed border-t border-gray-50">
                      With minimally invasive techniques, many patients can go home the same day or within 24-48 hours. Complex fusion surgeries may require a stay of 3-4 days for monitoring and initial physical therapy.
                    </div>
                  </details>
                  <details className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <summary className="p-6 cursor-pointer font-bold text-gray-900 flex justify-between items-center list-none">
                      When can I return to work after surgery?
                      <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-6 pt-0 text-gray-700 text-sm leading-relaxed border-t border-gray-50">
                      For sedentary/desk jobs, most patients return in 2-4 weeks. For physically demanding jobs, it may take 8-12 weeks, depending on the extent of the surgery and the progress of your rehabilitation.
                    </div>
                  </details>
                  <details className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <summary className="p-6 cursor-pointer font-bold text-gray-900 flex justify-between items-center list-none">
                      Is spine surgery always the last resort?
                      <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-6 pt-0 text-gray-700 text-sm leading-relaxed border-t border-gray-50">
                      While we always explore conservative treatments (physiotherapy, injections) first, surgery is recommended when there is progressive nerve damage, severe weakness, or pain that significantly limits life quality despite non-surgical efforts.
                    </div>
                  </details>
               </div>
            </section>

            {/* Final CTA */}
            <footer className="bg-gradient-to-br from-indigo-900 to-blue-900 text-white rounded-3xl p-12 lg:p-20 relative overflow-hidden text-center shadow-2xl">
              <div className="absolute inset-0 opacity-10 bg-[url('/images/hero-bg.webp')] bg-cover"></div>
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-5xl font-bold mb-8 font-serif leading-tight">Reclaim Your Life from Chronic Back Pain</h2>
                <p className="text-blue-100 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
                  Join the thousands of patients who have restored their mobility and found freedom from pain under Dr. Gaurav Saini's specialized spinal care.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="tel:+919876777393"
                    className="inline-flex items-center justify-center px-10 py-5 bg-indigo-500 text-white font-bold rounded-2xl hover:bg-indigo-400 hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    <Calendar className="w-6 h-6 mr-3" />
                    Book Spine Consult
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-10 py-5 bg-white text-indigo-900 font-bold rounded-2xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <ArrowRight className="w-6 h-6 mr-3" />
                    Contact Our Team
                  </Link>
                </div>
                <p className="mt-8 text-indigo-300 text-sm font-semibold tracking-widest uppercase">Expert Spinal Surgery • Minimally Invasive • Precision Care</p>
              </div>
            </footer>
          </div>
        </article>
      </div>
    </main>
  )
}
