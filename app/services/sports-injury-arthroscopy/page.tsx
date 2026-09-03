import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, ArrowRight, CheckCircle, Users, Activity, Shield, Award, Heart } from 'lucide-react'
import Image from 'next/image'
import PageAnimationWrapper from '../../../components/PageAnimationWrapper'
import { generateServiceMetadata } from '../../metadata-improved'

export const metadata: Metadata = generateServiceMetadata('sports-injury-arthroscopy')

export default function SportsInjuryArthroscopyPage() {
  const conditions = [
    {
      title: 'ACL Reconstruction',
      description: 'Advanced anatomical graft placement using hamstring, bone-patellar, or quad grafts for superior stability.'
    },
    {
      title: 'Meniscus Repair',
      description: 'Precision suturing techniques to preserve as much natural shock-absorbing tissue as possible.'
    },
    {
      title: 'Rotator Cuff Repair',
      description: 'Arthroscopic tendon reattachment using bio-absorbable anchors for shoulder strength restoration.'
    },
    {
      title: 'Bankart Repair',
      description: 'Treating recurrent shoulder dislocations by stabilizing the labrum and joint capsule.'
    }
  ]

  const benefits = [
    'Sub-centimeter incisions leading to minimal scarring',
    'Significantly lower risk of infection and complications',
    'Outpatient capability: Return home on the same day',
    'Ultra-HD visualization for unmatched diagnostic accuracy',
    'Accelerated rehabilitation: Start moving within 24 hours',
    'Sports-specific protocols tailored to your athletic goals'
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
                "name": "Sports Injury & Arthroscopy",
                "item": "https://drgauravsainiortho.com/services/sports-injury-arthroscopy/"
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
            "name": "Sports Injury & Arthroscopy Treatment",
            "description": "Comprehensive treatment for sports injuries including ACL reconstruction, meniscus repairs, and shoulder stabilization using advanced arthroscopic techniques.",
            "procedureSteps": "Initial assessment, diagnostic imaging, arthroscopic surgery, personalized rehabilitation, return-to-sport protocol.",
            "preparation": "Medical evaluation, physiotherapy assessment, pre-operative instructions.",
            "relevantSpecialty": {
              "@type": "MedicalSpecialty",
              "name": "SportsMedicine"
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
          <span className="text-gray-500">Sports Injury & Arthroscopy</span>
        </nav>

        <article className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Hero Section */}
          <header className="relative h-[450px] flex items-center justify-center text-white text-center overflow-hidden">
             <div className="absolute inset-0 bg-blue-900/85 z-10"></div>
             <Image 
                src="/images/Partial-Knee-Replacement.webp" 
                alt="Sports Injury Treatment" 
                fill
                className="object-cover scale-110"
             />
             <div className="relative z-20 px-4 max-w-4xl">
                <div className="inline-flex items-center px-4 py-2 bg-green-400/20 rounded-full border border-green-400/30 text-green-300 text-xs font-bold uppercase tracking-widest mb-6">
                  Elite Sports Medicine
                </div>
                <h1 className="text-4xl lg:text-7xl font-bold font-serif mb-6 leading-tight">
                  Sports Injury Doctor Near Me & <br/>
                  <span className="text-green-400">Arthroscopic Knee Surgery</span>
                </h1>
                <p className="text-xl text-blue-100 font-medium leading-relaxed">
                  Precision keyhole surgery and performance-focused recovery for athletes of all levels.
                </p>
             </div>
          </header>

          <div className="p-8 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif leading-tight">
                  Consult Top Sports Injury Doctor Near Me & Arthroscopy Specialist
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-6">
                  <p>
                    If you are searching for an experienced **sports injury doctor near me** in Mohali or Chandigarh, Dr. Gaurav Saini is widely recommended for his expertise in joint care. He utilizes advanced procedures like **arthroscopic knee surgery** and other minimally invasive techniques using a small camera (arthroscope) to treat joint issues with unparalleled precision.
                  </p>
                  <p>
                    Our sports medicine department specializes in complex ligament reconstructions and tendon repairs. By minimizing tissue damage during surgery, we reduce post-operative swelling and pain, allowing for a much more aggressive and effective rehabilitation program. Whether it's a field sport, swimming, or professional athletics, we tailor every procedure to the specific mechanics of your sport.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6 font-serif">Specialized Procedures</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {conditions.map((condition, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-green-200 transition-all duration-300">
                        <h4 className="font-bold text-blue-700 mb-2">{condition.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{condition.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              
              <aside className="space-y-8">
                <div className="bg-gradient-to-br from-blue-900 to-green-900 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <h3 className="text-2xl font-bold mb-8 font-serif border-b border-white/20 pb-4">The Arthroscopy Advantage</h3>
                  <ul className="space-y-6">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start group">
                        <div className="w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 text-blue-900 group-hover:scale-110 transition-transform shadow-lg shadow-green-900/30">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <span className="text-blue-50 font-medium leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border-2 border-green-50 rounded-3xl p-8 shadow-sm">
                   <h3 className="text-xl font-bold text-gray-900 mb-6 font-serif flex items-center">
                     <Activity className="w-6 h-6 mr-3 text-green-600" />
                     Performance Metrics
                   </h3>
                   <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                        <span className="text-gray-600 font-medium">Return to Sport Rate</span>
                        <span className="font-bold text-green-700 text-lg">95%</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                        <span className="text-gray-600 font-medium">Avg. Recovery Time</span>
                        <span className="font-bold text-green-700 text-lg">6-8 Weeks</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                        <span className="text-gray-600 font-medium">Re-injury Frequency</span>
                        <span className="font-bold text-green-700 text-lg">&lt; 5%</span>
                      </div>
                   </div>
                   <p className="mt-4 text-[10px] text-gray-400 leading-normal text-left">
                     * Note: Success rates and recovery windows represent average clinical benchmarks and general statistics. Individual patient outcomes may vary based on clinical factors.
                   </p>
                </div>
              </aside>
            </div>

            {/* Treatment Roadmap */}
            <section className="mb-24 py-16 bg-blue-950 -mx-8 lg:-mx-16 px-8 lg:px-16 text-white relative">
               <div className="max-w-5xl mx-auto">
                 <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center font-serif">Your Path to the Podium</h2>
                 <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="relative">
                       <div className="text-5xl font-bold text-white/10 mb-4">01</div>
                       <h4 className="text-lg font-bold text-green-400 mb-2">Functional Assessment</h4>
                       <p className="text-sm text-gray-400">Dynamic testing to evaluate joint stability and sport-specific mechanics.</p>
                    </div>
                    <div className="relative">
                       <div className="text-5xl font-bold text-white/10 mb-4">02</div>
                       <h4 className="text-lg font-bold text-green-400 mb-2">Precision Surgery</h4>
                       <p className="text-sm text-gray-400">Minimally invasive correction with focus on ligament tension and graft alignment.</p>
                    </div>
                    <div className="relative">
                       <div className="text-5xl font-bold text-white/10 mb-4">03</div>
                       <h4 className="text-lg font-bold text-green-400 mb-2">Early Mobility</h4>
                       <p className="text-sm text-gray-400">Immediate post-op movement protocols to prevent stiffness and muscle atrophy.</p>
                    </div>
                    <div className="relative">
                       <div className="text-5xl font-bold text-white/10 mb-4">04</div>
                       <h4 className="text-lg font-bold text-green-400 mb-2">Elite Rehab</h4>
                       <p className="text-sm text-gray-400">Proprioceptive training and sport-specific drills for safe return to competition.</p>
                    </div>
                 </div>
               </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-24">
               <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-serif">Sports Medicine FAQ</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                       <Heart className="w-5 h-5 mr-3 text-red-500 fill-current" />
                       When can I start running after ACL surgery?
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Typically, light jogging starts around 12-16 weeks post-surgery, once quadriceps strength is at least 70% of the opposite leg and joint stability is confirmed.</p>
                  </div>
                  <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                       <Award className="w-5 h-5 mr-3 text-yellow-500 fill-current" />
                       Is arthroscopy better than open surgery?
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">For most joint conditions, yes. It offers better visualization for the surgeon, smaller scars, less pain, and a much faster overall recovery timeline.</p>
                  </div>
                  <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                       <Shield className="w-5 h-5 mr-3 text-blue-500 fill-current" />
                       Do I need a brace after meniscus repair?
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Usually, a hinged knee brace is required for 4-6 weeks to protect the repair while it heals, limiting certain ranges of motion.</p>
                  </div>
                  <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                       <Users className="w-5 h-5 mr-3 text-indigo-500 fill-current" />
                       What is the success rate for rotator cuff repair?
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Success rates are excellent, with over 90% of patients reporting significant pain relief and improved shoulder function after dedicated rehab.</p>
                  </div>
               </div>
            </section>

            {/* Final CTA */}
            <footer className="bg-gradient-to-br from-blue-900 via-blue-950 to-green-950 text-white rounded-3xl p-10 lg:p-20 relative overflow-hidden text-center">
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-5xl font-bold mb-8 font-serif leading-tight">Don't Let an Injury Sideload Your Career</h2>
                <p className="text-blue-100 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
                  Join hundreds of professional and amateur athletes who have returned to their sports stronger than ever under Dr. Gaurav Saini's specialized care.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="tel:+919876777393"
                    className="inline-flex items-center justify-center px-10 py-5 bg-green-500 text-gray-900 font-bold rounded-2xl hover:bg-green-400 hover:scale-105 transition-all duration-300 shadow-xl shadow-green-900/40"
                  >
                    <Calendar className="w-6 h-6 mr-3" />
                    Book Priority Consult
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-900 font-bold rounded-2xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <ArrowRight className="w-6 h-6 mr-3" />
                    Our Recovery Protocol
                  </Link>
                </div>
                <p className="mt-8 text-green-300 text-sm font-semibold tracking-widest uppercase">Trusted by Elite Athletes • Focused on Performance</p>
              </div>
            </footer>
          </div>
        </article>
      </div>
    </main>
  )
}