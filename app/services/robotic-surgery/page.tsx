import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, CheckCircle, Users, Heart, Zap, ArrowRight } from 'lucide-react'
import PageAnimationWrapper from '../../../components/PageAnimationWrapper'
import { generateServiceMetadata } from '../../metadata-improved'

export const metadata: Metadata = generateServiceMetadata('robotic-surgery')

export default function RoboticSurgeryPage() {
  const roboticProcedures = [
    {
      title: 'Total Knee Replacement',
      description: 'Precision knee replacement using real-time 3D mapping'
    },
    {
      title: 'Total Hip Replacement',
      description: 'Advanced hip surgery with enhanced implant positioning'
    },
    {
      title: 'Partial Knee Replacement',
      description: 'Targeted resurfacing for localized knee damage'
    },
    {
      title: 'Complex Joint Reconstruction',
      description: 'Revision surgeries with robotic assistance'
    }
  ]

  const treatmentApproach = [
    'CORI robotic technology for real-time 3D mapping',
    'Personalized surgical planning using patient-specific data',
    'Minimally invasive techniques for faster recovery',
    'Enhanced precision and implant positioning',
    'Comprehensive rehabilitation program',
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
          <span className="text-gray-500">Robotic Surgery</span>
        </nav>

        <article className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Hero Section */}
          <header className="relative h-[450px] flex items-center justify-center text-white text-center overflow-hidden">
             <div className="absolute inset-0 bg-blue-950/85 z-10"></div>
             <Image 
                src="/images/dr images/TRAUMA.jpg" 
                alt="Robotic Assisted Orthopedic Surgery" 
                fill
                className="object-cover"
             />
             <div className="relative z-20 px-4 max-w-4xl">
                <div className="inline-flex items-center px-4 py-2 bg-blue-400/20 rounded-full border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
                  The Future of Orthopedics
                </div>
                <h1 className="text-4xl lg:text-7xl font-bold font-serif mb-6 leading-tight">
                  Next-Gen <br/>
                  <span className="text-blue-400">Robotic Surgery</span>
                </h1>
                <p className="text-xl text-blue-100 font-medium leading-relaxed">
                  Redefining surgical precision with the CORI™ Robotics System for superior clinical outcomes.
                </p>
             </div>
          </header>

          <div className="p-8 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif leading-tight">
                  Unmatched Precision with CORI™ Technology
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-6">
                  <p>
                    Robotic-assisted surgery is not about a robot performing the operation; it is about providing the surgeon with ultra-precise digital tools. Dr. Gaurav Saini utilizes the **CORI™ Surgical System**, which uses advanced computer software to create a 3D digital model of your unique anatomy during the procedure.
                  </p>
                  <p>
                    This real-time mapping eliminates the need for preoperative CT scans (reducing radiation exposure) and allows for a "virtual" surgery to be performed before any bone is actually cut. The result is an implant that is perfectly aligned with your body’s natural mechanics, leading to a joint that feels more natural and lasts significantly longer.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6 font-serif">Robotic-Assisted Specializations</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {roboticProcedures.map((procedure, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300">
                        <h4 className="font-bold text-blue-700 mb-2">{procedure.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{procedure.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              
              <aside className="space-y-8">
                <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <h3 className="text-2xl font-bold mb-8 font-serif border-b border-white/20 pb-4">Our Robotic Approach</h3>
                  <ul className="space-y-6">
                    {treatmentApproach.map((approach, index) => (
                      <li key={index} className="flex items-start group">
                        <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 text-blue-900 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/30">
                          <Zap className="w-5 h-5" />
                        </div>
                        <span className="text-blue-50 font-medium leading-relaxed">{approach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border-2 border-blue-50 rounded-3xl p-8 shadow-sm">
                   <h3 className="text-xl font-bold text-gray-900 mb-6 font-serif flex items-center">
                     <Users className="w-6 h-6 mr-3 text-blue-600" />
                     Patient Benefits
                   </h3>
                   <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                        <span className="text-gray-600 font-medium">Placement Accuracy</span>
                        <span className="font-bold text-blue-700 text-lg">99.9%</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                        <span className="text-gray-600 font-medium">Recovery Time</span>
                        <span className="font-bold text-blue-700 text-lg">50% Reduction</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                        <span className="text-gray-600 font-medium">Implant Longevity</span>
                        <span className="font-bold text-blue-700 text-lg">+30% Increase</span>
                      </div>
                   </div>
                </div>
              </aside>
            </div>

            {/* Why Robotic Section */}
            <section className="mb-24 py-16 bg-slate-950 -mx-8 lg:-mx-16 px-8 lg:px-16 text-white relative">
               <div className="max-w-5xl mx-auto">
                 <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center font-serif">Why Choose Robotic Assistance?</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="p-10 bg-white/5 border border-white/10 rounded-3xl">
                      <h4 className="text-xl font-bold text-blue-400 mb-4">No Pre-op CT Scans</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Unlike older robotic systems, the CORI system maps your joint during surgery. This saves you from expensive CT scans and unnecessary radiation exposure while providing more accurate data.</p>
                   </div>
                   <div className="p-10 bg-white/5 border border-white/10 rounded-3xl">
                      <h4 className="text-xl font-bold text-blue-400 mb-4">Soft Tissue Balance</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Robotics isn't just about bone cuts; it's about the ligaments. We can balance the tension of your soft tissues digitally to ensure the joint remains stable and fluid throughout its range of motion.</p>
                   </div>
                 </div>
               </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-24">
               <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-serif">Robotic Surgery FAQ</h2>
               <div className="max-w-4xl mx-auto space-y-4">
                  <details className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden" open>
                    <summary className="p-6 cursor-pointer font-bold text-gray-900 flex justify-between items-center list-none">
                      Does the robot perform the surgery by itself?
                      <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-6 pt-0 text-gray-700 text-sm leading-relaxed border-t border-gray-50">
                      No. Dr. Saini remains in full control. The robotic system acts as a high-precision guide that prevents any movement outside the pre-planned surgical path, ensuring millimeter-perfect accuracy.
                    </div>
                  </details>
                  <details className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <summary className="p-6 cursor-pointer font-bold text-gray-900 flex justify-between items-center list-none">
                      Is robotic surgery more expensive?
                      <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-6 pt-0 text-gray-700 text-sm leading-relaxed border-t border-gray-50">
                      While the technology is advanced, the overall cost is often offset by shorter hospital stays, fewer post-operative complications, and a reduced need for revision surgeries in the future.
                    </div>
                  </details>
                  <details className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <summary className="p-6 cursor-pointer font-bold text-gray-900 flex justify-between items-center list-none">
                      Is everyone a candidate for robotic surgery?
                      <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-6 pt-0 text-gray-700 text-sm leading-relaxed border-t border-gray-50">
                      Most patients requiring total or partial joint replacement are excellent candidates for robotic assistance. Dr. Saini will evaluate your specific condition and bone quality to determine if this is the best approach for you.
                    </div>
                  </details>
               </div>
            </section>

            {/* Final CTA */}
            <footer className="bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-3xl p-12 lg:p-20 relative overflow-hidden text-center shadow-2xl">
              <div className="absolute inset-0 opacity-10 bg-[url('/images/hero-bg.webp')] bg-cover"></div>
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-5xl font-bold mb-8 font-serif leading-tight">Step Into the Future of Joint Replacement</h2>
                <p className="text-blue-100 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
                  Join the elite group of patients benefiting from robotic precision. Contact us to schedule your evaluation.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="tel:+919876777393"
                    className="inline-flex items-center justify-center px-10 py-5 bg-blue-500 text-white font-bold rounded-2xl hover:bg-blue-400 hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    <Calendar className="w-6 h-6 mr-3" />
                    Book Robotic Consult
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-900 font-bold rounded-2xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <ArrowRight className="w-6 h-6 mr-3" />
                    Learn More
                  </Link>
                </div>
                <p className="mt-8 text-blue-300 text-sm font-semibold tracking-widest uppercase">Expert Robotic Surgery • Millimeter Precision • Faster Recovery</p>
              </div>
            </footer>
          </div>
        </article>
      </div>
    </main>
  )
}