import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, CheckCircle, Users, Heart, Activity, ArrowRight } from 'lucide-react'
import PageAnimationWrapper from '@/components/PageAnimationWrapper'
import { generateServiceMetadata } from '../../metadata-improved'

export const metadata: Metadata = generateServiceMetadata('sports-injury-treatment')

export default function SportsInjuryTreatmentPage() {
  const sportsInjuries = [
    {
      title: 'ACL Injuries',
      description: 'Anterior cruciate ligament tears and reconstruction'
    },
    {
      title: 'Meniscus Tears',
      description: 'Treatment for torn cartilage in the knee'
    },
    {
      title: 'Shoulder Injuries',
      description: 'Rotator cuff tears and shoulder instability'
    },
    {
      title: 'Ankle Sprains',
      description: 'Ligament injuries and chronic instability'
    }
  ]

  const treatmentApproach = [
    'Immediate assessment and diagnosis',
    'Personalized treatment plans for each athlete',
    'Minimally invasive arthroscopic techniques',
    'Comprehensive rehabilitation program',
    'Return to play protocols',
    'Injury prevention education'
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
          <span className="text-gray-500">Sports Injury Treatment</span>
        </nav>

        <article className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Hero Section */}
          <header className="relative h-[450px] flex items-center justify-center text-white text-center overflow-hidden">
             <div className="absolute inset-0 bg-emerald-950/80 z-10"></div>
             <Image 
                src="/images/dr images/TRAUMA.jpg" 
                alt="Elite Sports Medicine and Injury Treatment" 
                fill
                className="object-cover"
             />
             <div className="relative z-20 px-4 max-w-4xl">
                <div className="inline-flex items-center px-4 py-2 bg-emerald-400/20 rounded-full border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-6">
                  Peak Performance Recovery
                </div>
                <h1 className="text-4xl lg:text-7xl font-bold font-serif mb-6 leading-tight">
                  Sports Injury <br/>
                  <span className="text-emerald-400">Treatment</span>
                </h1>
                <p className="text-xl text-blue-100 font-medium leading-relaxed">
                  Specialized clinical care designed to get athletes back to their peak performance safely and rapidly.
                </p>
             </div>
          </header>

          <div className="p-8 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif leading-tight">
                  Expert Sports Medicine for All Levels
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-6">
                  <p>
                    A sports injury isn't just a physical setback; it's a break in your passion and lifestyle. Dr. Gaurav Saini provides elite-level sports medicine services to athletes of all backgrounds—from professional competitors to recreational "weekend warriors." Our philosophy is built on the pillars of **Rapid Diagnosis**, **Biological Healing**, and **Functional Restoration**.
                  </p>
                  <p>
                    We utilize advanced diagnostic imaging and functional testing to understand not just the injury, but the biomechanical cause behind it. Whether you're dealing with a complex ligament tear or a recurring strain, our goal is to restore your joint's stability and strength using the most conservative yet effective methods available.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6 font-serif">Injuries We Specialize In</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {sportsInjuries.map((injury, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-emerald-200 transition-all duration-300">
                        <h4 className="font-bold text-emerald-700 mb-2">{injury.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{injury.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              
              <aside className="space-y-8">
                <div className="bg-gradient-to-br from-emerald-900 to-teal-900 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <h3 className="text-2xl font-bold mb-8 font-serif border-b border-white/20 pb-4">Our Treatment Pillars</h3>
                  <ul className="space-y-6">
                    {treatmentApproach.map((approach, index) => (
                      <li key={index} className="flex items-start group">
                        <div className="w-8 h-8 bg-emerald-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 text-emerald-900 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-900/30">
                          <Activity className="w-5 h-5" />
                        </div>
                        <span className="text-emerald-50 font-medium leading-relaxed">{approach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border-2 border-emerald-50 rounded-3xl p-8 shadow-sm">
                   <h3 className="text-xl font-bold text-gray-900 mb-6 font-serif flex items-center">
                     <Users className="w-6 h-6 mr-3 text-emerald-600" />
                     Athlete Success
                   </h3>
                   <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                        <span className="text-gray-600 font-medium">Return to Play Rate</span>
                        <span className="font-bold text-emerald-700 text-lg">95%</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                        <span className="text-gray-600 font-medium">Recovery Speed</span>
                        <span className="font-bold text-emerald-700 text-lg">30% Faster</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                        <span className="text-gray-600 font-medium">Re-injury Prevention</span>
                        <span className="font-bold text-emerald-700 text-lg">95% Success</span>
                      </div>
                   </div>
                </div>
              </aside>
            </div>

            {/* Return to Play Section */}
            <section className="mb-24 py-16 bg-emerald-950 -mx-8 lg:-mx-16 px-8 lg:px-16 text-white relative">
               <div className="max-w-5xl mx-auto">
                 <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center font-serif">The Return to Play Protocol</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="p-10 bg-white/5 border border-white/10 rounded-3xl">
                      <h4 className="text-xl font-bold text-emerald-400 mb-4">Phase 1: Protection & Healing</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Focus on reducing inflammation, protecting the injured structure, and initiating gentle range-of-motion exercises without compromising biological healing.</p>
                   </div>
                   <div className="p-10 bg-white/5 border border-white/10 rounded-3xl">
                      <h4 className="text-xl font-bold text-emerald-400 mb-4">Phase 2: Functional Loading</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Progressive strengthening and neuromuscular retraining. We prepare your body for the specific stresses of your sport through targeted, sport-specific movements.</p>
                   </div>
                 </div>
               </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-24">
               <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-serif">Sports Medicine FAQ</h2>
               <div className="max-w-4xl mx-auto space-y-4">
                  <details className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden" open>
                    <summary className="p-6 cursor-pointer font-bold text-gray-900 flex justify-between items-center list-none">
                      How soon can I start running after an ACL reconstruction?
                      <span className="text-emerald-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-6 pt-0 text-gray-700 text-sm leading-relaxed border-t border-gray-50">
                      Typically, straight-line running starts around the 3-month mark, provided you have met specific strength and stability milestones. We use objective testing to ensure your knee is ready for the impact.
                    </div>
                  </details>
                  <details className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <summary className="p-6 cursor-pointer font-bold text-gray-900 flex justify-between items-center list-none">
                      Do all sports injuries require surgery?
                      <span className="text-emerald-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-6 pt-0 text-gray-700 text-sm leading-relaxed border-t border-gray-50">
                      No. Many injuries like low-grade sprains, muscle tears, and some meniscus injuries can be managed successfully with high-quality physiotherapy and biological treatments (like PRP). Surgery is reserved for structural instabilities that cannot heal on their own.
                    </div>
                  </details>
                  <details className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <summary className="p-6 cursor-pointer font-bold text-gray-900 flex justify-between items-center list-none">
                      What is the goal of a Return to Play protocol?
                      <span className="text-emerald-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-6 pt-0 text-gray-700 text-sm leading-relaxed border-t border-gray-50">
                      The goal is to ensure you return to your sport with a near-zero risk of re-injury. It's a data-driven approach where you must "pass" specific functional and strength tests before being cleared for competition.
                    </div>
                  </details>
               </div>
            </section>

            {/* Final CTA */}
            <footer className="bg-gradient-to-br from-emerald-900 to-teal-900 text-white rounded-3xl p-12 lg:p-20 relative overflow-hidden text-center shadow-2xl">
              <div className="absolute inset-0 opacity-10 bg-[url('/images/hero-bg.webp')] bg-cover"></div>
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-5xl font-bold mb-8 font-serif leading-tight">Get Back in the Game</h2>
                <p className="text-emerald-100 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
                  Don't let an injury sideline you. Schedule your sports medicine evaluation with Dr. Gaurav Saini today and start your journey back to the field.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="tel:+919876777393"
                    className="inline-flex items-center justify-center px-10 py-5 bg-emerald-500 text-white font-bold rounded-2xl hover:bg-emerald-400 hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    <Calendar className="w-6 h-6 mr-3" />
                    Book Sports Consult
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-10 py-5 bg-white text-emerald-900 font-bold rounded-2xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <ArrowRight className="w-6 h-6 mr-3" />
                    View Treatment Options
                  </Link>
                </div>
                <p className="mt-8 text-emerald-300 text-sm font-semibold tracking-widest uppercase">Expert Sports Medicine • Biological Healing • Peak Recovery</p>
              </div>
            </footer>
          </div>
        </article>
      </div>
    </main>
  )
}