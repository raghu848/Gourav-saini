import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, CheckCircle, Users, Heart, Eye } from 'lucide-react'
import PageAnimationWrapper from '@/components/PageAnimationWrapper'
import { generateServiceMetadata } from '../../metadata-improved'

export const metadata: Metadata = generateServiceMetadata('arthroscopic-surgery')

export default function ArthroscopicSurgeryPage() {
  const arthroscopicProcedures = [
    {
      title: 'Knee Arthroscopy',
      description: 'Diagnosis and treatment of knee joint problems'
    },
    {
      title: 'Shoulder Arthroscopy',
      description: 'Treatment for rotator cuff tears and shoulder instability'
    },
    {
      title: 'Hip Arthroscopy',
      description: 'Minimally invasive treatment for hip joint conditions'
    },
    {
      title: 'Ankle Arthroscopy',
      description: 'Treatment for ankle joint problems and injuries'
    }
  ]

  const treatmentApproach = [
    'Minimally invasive arthroscopic techniques',
    'Small incisions for reduced scarring',
    'Advanced visualization with high-definition cameras',
    'Precise diagnosis and treatment in one procedure',
    'Faster recovery and return to activities',
    'Comprehensive post-operative care'
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
          <span className="text-gray-500">Arthroscopic Surgery</span>
        </nav>

        <article className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Hero Section */}
          <header className="relative h-[450px] flex items-center justify-center text-white text-center overflow-hidden">
             <div className="absolute inset-0 bg-cyan-950/80 z-10"></div>
             <Image 
                src="/images/dr images/TRAUMA.jpg" 
                alt="Precision Arthroscopic Surgery" 
                fill
                className="object-cover"
             />
             <div className="relative z-20 px-4 max-w-4xl">
                <div className="inline-flex items-center px-4 py-2 bg-cyan-400/20 rounded-full border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-6">
                  Minimally Invasive Excellence
                </div>
                <h1 className="text-4xl lg:text-7xl font-bold font-serif mb-6 leading-tight">
                  Precision <br/>
                  <span className="text-cyan-400">Arthroscopic Surgery</span>
                </h1>
                <p className="text-xl text-blue-100 font-medium leading-relaxed">
                  World-class "keyhole" surgery to diagnose and treat joint conditions with sub-millimeter accuracy.
                </p>
             </div>
          </header>

          <div className="p-8 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif leading-tight">
                  Superior Joint Care Through Small Incisions
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-6">
                  <p>
                    Arthroscopy is a transformative surgical procedure used to visualize, diagnose, and treat problems inside a joint. Dr. Gaurav Saini utilizes an **Arthroscope**—a pencil-thin tube equipped with a high-definition camera and lighting system—to project a magnified view of the joint onto a monitor. This allow us to see structural issues that even an MRI might miss.
                  </p>
                  <p>
                    Because arthroscopy requires only tiny incisions (about the size of a buttonhole), it offers significant advantages over traditional "open" surgery. There is far less damage to the surrounding healthy tissues, which translates to a much more comfortable recovery and a faster return to work and daily life. We perform arthroscopy on nearly every major joint, including the knee, shoulder, hip, and ankle.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6 font-serif">Procedures We Perform</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {arthroscopicProcedures.map((procedure, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-cyan-200 transition-all duration-300">
                        <h4 className="font-bold text-cyan-700 mb-2">{procedure.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{procedure.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              
              <aside className="space-y-8">
                <div className="bg-gradient-to-br from-cyan-900 to-blue-900 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <h3 className="text-2xl font-bold mb-8 font-serif border-b border-white/20 pb-4">The Arthroscopy Advantage</h3>
                  <ul className="space-y-6">
                    {treatmentApproach.map((approach, index) => (
                      <li key={index} className="flex items-start group">
                        <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 text-blue-900 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-900/30">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <span className="text-blue-50 font-medium leading-relaxed">{approach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border-2 border-cyan-50 rounded-3xl p-8 shadow-sm">
                   <h3 className="text-xl font-bold text-gray-900 mb-6 font-serif flex items-center">
                     <Eye className="w-6 h-6 mr-3 text-cyan-600" />
                     Surgical Excellence
                   </h3>
                   <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                        <span className="text-gray-600 font-medium">Success Rate</span>
                        <span className="font-bold text-cyan-700 text-lg">97%</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                        <span className="text-gray-600 font-medium">Patient Satisfaction</span>
                        <span className="font-bold text-cyan-700 text-lg">98%</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                        <span className="text-gray-600 font-medium">Recovery Speed</span>
                        <span className="font-bold text-cyan-700 text-lg">50% Faster</span>
                      </div>
                   </div>
                </div>
              </aside>
            </div>

            {/* Diagnostic vs Therapeutic */}
            <section className="mb-24 py-16 bg-blue-950 -mx-8 lg:-mx-16 px-8 lg:px-16 text-white relative">
               <div className="max-w-5xl mx-auto">
                 <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center font-serif">Comprehensive Approach</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="p-10 bg-white/5 border border-white/10 rounded-3xl">
                      <h4 className="text-xl font-bold text-cyan-400 mb-4">Diagnostic Arthroscopy</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">When MRI or physical exams leave questions, direct visualization provides the answer. We use Ultra-HD cameras to inspect cartilage, ligaments, and the joint lining to find the exact source of pain.</p>
                   </div>
                   <div className="p-10 bg-white/5 border border-white/10 rounded-3xl">
                      <h4 className="text-xl font-bold text-cyan-400 mb-4">Therapeutic Arthroscopy</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Most conditions can be treated during the same procedure. Using specialized micro-tools, we can trim torn tissue, repair ligaments, or remove loose bodies (debris) from the joint space.</p>
                   </div>
                 </div>
               </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-24">
               <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-serif">Arthroscopy FAQ</h2>
               <div className="max-w-4xl mx-auto space-y-4">
                  <details className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden" open>
                    <summary className="p-6 cursor-pointer font-bold text-gray-900 flex justify-between items-center list-none">
                      Is arthroscopy considered major surgery?
                      <span className="text-cyan-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-6 pt-0 text-gray-700 text-sm leading-relaxed border-t border-gray-50">
                      While it is "surgery" requiring anesthesia, it is generally considered minimally invasive. Most patients go home the same day and experience significantly less trauma compared to traditional open joint surgery.
                    </div>
                  </details>
                  <details className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <summary className="p-6 cursor-pointer font-bold text-gray-900 flex justify-between items-center list-none">
                      What is the recovery timeline?
                      <span className="text-cyan-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-6 pt-0 text-gray-700 text-sm leading-relaxed border-t border-gray-50">
                      Recovery depends on the joint and the repair made. Most patients can perform light activities within a few days and return to work in 1-2 weeks. Full athletic return usually takes 4-12 weeks depending on the procedure.
                    </div>
                  </details>
                  <details className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <summary className="p-6 cursor-pointer font-bold text-gray-900 flex justify-between items-center list-none">
                      Are there any scars?
                      <span className="text-cyan-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-6 pt-0 text-gray-700 text-sm leading-relaxed border-t border-gray-50">
                       Since arthroscopy is minimally invasive, the incisions are very small (about the size of a buttonhole). Any resulting scars are minimal and often become barely visible over time.
                    </div>
                  </details>
                </div>
              </section>

              {/* Final CTA */}
              <footer className="bg-gray-900 text-white rounded-3xl p-12 lg:p-20 relative overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500 opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <h2 className="text-3xl lg:text-5xl font-bold mb-8 font-serif">Precision Surgery, Faster Recovery</h2>
                <p className="text-blue-100 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
                  Experience the benefits of minimally invasive orthopedic surgery. Contact Dr. Gaurav Saini's clinic today to schedule your consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/contact/" className="px-10 py-5 bg-cyan-400 text-blue-900 font-bold rounded-2xl hover:bg-cyan-300 transition-all hover:scale-105 shadow-xl shadow-cyan-500/20">
                    Book Consultation
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
