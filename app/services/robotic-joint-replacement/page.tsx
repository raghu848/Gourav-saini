import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, ArrowRight, CheckCircle, Users, Award, Heart } from 'lucide-react'
import PageAnimationWrapper from '../../../components/PageAnimationWrapper'
import { generateServiceMetadata } from '../../metadata-improved'

export const metadata: Metadata = generateServiceMetadata('robotic-joint-replacement')

export default function RoboticJointReplacementPage() {
  const benefits = [
    {
      title: 'Precision Accuracy',
      description: 'CORI robotic technology ensures 100% precision accuracy in implant positioning'
    },
    {
      title: 'Minimal Tissue Damage',
      description: 'Reduced tissue trauma leads to less pain and faster recovery'
    },
    {
      title: 'Faster Recovery',
      description: 'Patients experience up to 50% faster recovery compared to traditional methods'
    },
    {
      title: 'Personalized Treatment',
      description: 'Each procedure is customized based on your unique anatomy'
    }
  ]

  const procedureSteps = [
    'Pre-operative 3D imaging and planning',
    'Real-time surgical navigation with CORI system',
    'Precise bone preparation and implant placement',
    'Immediate post-operative assessment',
    'Personalized rehabilitation program'
  ]

  return (
    <main className="min-h-screen bg-gray-50 py-12 relative pt-24 lg:pt-32">
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
                "name": "Robotic Joint Replacement",
                "item": "https://drgauravsainiortho.com/services/robotic-joint-replacement/"
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
            "name": "Robotic Joint Replacement",
            "description": "State-of-the-art robotic-assisted joint replacement surgery using CORI technology for unmatched precision in knee and hip procedures.",
            "procedureSteps": "Pre-operative 3D imaging, real-time surgical navigation, precise bone preparation, robotic implant placement, rehabilitation.",
            "preparation": "Medical evaluation, 3D imaging consultation, pre-operative screening.",
            "relevantSpecialty": {
              "@type": "MedicalSpecialty",
              "name": "OrthopaedicSurgery"
            }
          })
        }}
      />
      <PageAnimationWrapper />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm font-medium">
          <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/services" className="text-blue-600 hover:text-blue-800 transition-colors">Services</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500">Robotic Joint Replacement</span>
        </nav>

        <article className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-12">
          {/* Hero Section */}
          <header className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white p-8 lg:p-16 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold font-serif mb-6 leading-tight">
              Robotic Joint Replacement <br/>
              <span className="text-teal-400">Precision Powered by CORI</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Eliminate chronic joint pain and rediscover the joy of movement with India's most advanced robotic-assisted surgical technology.
            </p>
          </header>

          <div className="p-8 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif leading-tight">
                  Why Robotic Technology is the Future of Orthopedics
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-6">
                  <p>
                    Traditional joint replacement surgery relies on the surgeon's visual estimation and manual tools. While effective, there is always a margin for human error. State-of-the-art **robotic knee replacement** with the CORI system removes that margin, offering a level of precision that was previously impossible.
                  </p>
                  <p>
                    Using advanced sensors and software, the CORI system creates a real-time, digital 3D model of your joint during **robotic knee surgery**. This allows Dr. Gaurav Saini to map your unique anatomy and plan the exact placement of the implant before a single cut is made. The result? An implant that fits perfectly, feels natural, and lasts significantly longer.
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">When Should You Consider Surgery?</h3>
                  <p>
                    If you are experiencing any of the following symptoms, it may be time to discuss robotic joint replacement with a specialist:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                      <span>**Chronic Pain**: Severe pain that persists even while resting or at night.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                      <span>**Restricted Mobility**: Inability to perform daily activities like walking, climbing stairs, or getting out of a chair.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                      <span>**Joint Deformity**: Visible "bowing" of the legs or severe swelling.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                      <span>**Failure of Conservative Treatments**: No relief from medications, physical therapy, or injections.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <aside className="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-inner">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center font-serif uppercase tracking-wider">The CORI Advantage</h3>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start p-6 bg-white rounded-2xl shadow-sm border border-gray-50 hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-5 flex-shrink-0 text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 p-6 bg-blue-900 text-white rounded-2xl text-center">
                  <p className="text-sm font-medium opacity-80 mb-2">Technological Standard</p>
                  <p className="text-lg font-bold">No Pre-Op CT Scans Required</p>
                  <p className="text-xs mt-2 opacity-70">Saves you time and reduces radiation exposure.</p>
                </div>
              </aside>
            </div>

            {/* Detailed Recovery Timeline */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-serif">Your Path to Recovery</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative pt-12">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-white">1</div>
                  <h4 className="font-bold text-gray-900 mb-4 text-center">Days 1-2</h4>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">Begin walking with assistance. Most patients go home within 24-48 hours of robotic surgery.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative pt-12">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-white">2</div>
                  <h4 className="font-bold text-gray-900 mb-4 text-center">Weeks 1-2</h4>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">Physical therapy begins to restore range of motion. Incision healing is monitored closely.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative pt-12">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-white">3</div>
                  <h4 className="font-bold text-gray-900 mb-4 text-center">Weeks 3-6</h4>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">Gradual return to light daily activities. Most patients can drive and walk independently.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative pt-12">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-white">4</div>
                  <h4 className="font-bold text-gray-900 mb-4 text-center">3 Months+</h4>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">Full return to active lifestyle. Joyful, pain-free movement is fully restored.</p>
                </div>
              </div>
            </section>

            {/* Stats / Proof Section */}
            <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white rounded-3xl p-10 lg:p-16 mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold font-serif mb-6">World-Class Outcomes</h2>
                  <p className="text-blue-100 text-lg mb-8">
                    With nearly 20 years of expertise and over 5,000 successful surgeries, Dr. Gaurav Saini is a recognized leader in robotic-assisted orthopedic procedures.
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="border-l-4 border-teal-400 pl-6">
                      <div className="text-4xl font-bold">99%</div>
                      <div className="text-blue-200 text-sm uppercase font-bold tracking-widest mt-1">Patient Satisfaction</div>
                    </div>
                    <div className="border-l-4 border-teal-400 pl-6">
                      <div className="text-4xl font-bold">&lt;0.5%</div>
                      <div className="text-blue-200 text-sm uppercase font-bold tracking-widest mt-1">Infection Rate</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                   <h3 className="text-xl font-bold mb-6">Our Patient Promise</h3>
                   <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                        <span>Advanced minimally invasive techniques</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                        <span>Customized post-operative rehabilitation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                        <span>Comprehensive family counseling sessions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                        <span>Lifetime support for joint longevity</span>
                      </li>
                   </ul>
                </div>
              </div>
            </section>

            {/* FAQs Section */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-serif">Frequently Asked Questions</h2>
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 font-serif">Is robotic surgery safe?</h4>
                  <p className="text-gray-700 leading-relaxed">Yes, it is extremely safe. The robot does not perform the surgery; it acts as a high-precision tool under the full control of Dr. Saini. It provides additional safety barriers to prevent any accidental damage to surrounding tissues.</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 font-serif">How long does the implant last?</h4>
                  <p className="text-gray-700 leading-relaxed">Due to the precise alignment provided by the CORI robotic system, wear and tear on the implant is significantly reduced. Most modern implants last 20-25 years or even longer when perfectly positioned.</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 font-serif">What is the hospital stay like?</h4>
                  <p className="text-gray-700 leading-relaxed">Because robotic surgery is minimally invasive, most patients are encouraged to walk on the same day. Average hospital stay is just 1 to 2 days.</p>
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <footer className="text-center bg-gray-900 text-white rounded-3xl p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-serif">Regain Your Active Lifestyle Today</h2>
              <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">
                Don't let joint pain limit your possibilities. Schedule a consultation with Dr. Gaurav Saini to see if robotic joint replacement is right for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-900/40"
                >
                  <Calendar className="w-6 h-6 mr-3" />
                  Book Appointment
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/20 text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  Explore Other Services
                </Link>
              </div>
            </footer>
          </div>
        </article>
      </div>
    </main>
  )
}
