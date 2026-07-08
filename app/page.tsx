import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { defaultMetadata } from './metadata-improved'

export const metadata: Metadata = defaultMetadata

import { 
  Stethoscope, 
  Heart, 
  Activity, 
  CheckCircle, 
  Phone, 
  MessageCircle,
  Star,
  Award,
  Users,
  Calendar,
  ArrowRight
} from 'lucide-react'
import DoctorImagesSection from '../components/DoctorImagesSection'

export default function Home() {

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Robotic Joint Replacement with CORI',
      description: 'We use CORI robotic technology for Total Knee (TKR) and Hip Replacement (THR) to deliver unmatched precision. With real-time 3D mapping, CORI ensures better alignment, minimal tissue damage, and faster recovery.'
    },
    {
      icon: Users,
      title: 'Sports Injury & Arthroscopy',
      description: 'We help athletes and active individuals recover from ACL injuries, meniscus tears, and other sports injuries. With minimally invasive arthroscopy, our expert team ensures faster healing and long-term joint strength.'
    },
    {
      icon: Heart,
      title: 'Fracture & Trauma Care',
      description: 'From sudden fractures to emergency trauma, our orthopedic experts provide quick and compassionate care. Using precision diagnostics and treatment protocols, we stabilize and strengthen your bones and joints.'
    },
    {
      icon: CheckCircle,
      title: 'Award-Winning Expertise',
      description: 'Nearly 20 years of experience with specialized training at high-volume centers worldwide. Member of NAMS, IOA, NZOA, ISKSAA, and AO Trauma for cutting-edge orthopedic care.'
    }
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      text: 'Dr. Saini performed my knee replacement surgery. I cannot express how grateful I am. I can walk without any discomfort now.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      text: 'As a professional athlete, Dr. Saini not only repaired my ACL but helped me return to competitive sports stronger than ever.',
      rating: 5
    },
    {
      name: 'Mohammad Ali',
      text: 'I had been suffering from severe arthritis for 5 years. Dr. Saini\'s treatment plan completely changed my life.',
      rating: 5
    }
  ]

  const stats = [
    { number: '5000+', label: 'Successful Surgeries' },
    { number: '20+', label: 'Years Experience' },
    { number: '99%', label: 'Patient Satisfaction' },
    { number: 'CORI', label: 'Robotic Technology' }
  ]

  // FAQ data for structured data
  const faqs = [
    {
      question: "What is robotic knee replacement surgery?",
      answer: "Robotic knee replacement uses advanced CORI technology for precise implant placement. This minimally invasive procedure offers better alignment, less tissue damage, and faster recovery compared to traditional methods."
    },
    {
      question: "How long does it take to recover from knee replacement surgery?",
      answer: "Most patients can walk with assistance within 24 hours after surgery. Full recovery typically takes 3-6 months, with many patients returning to normal activities within 6-12 weeks."
    },
    {
      question: "What are the signs that I need a hip replacement?",
      answer: "Common signs include persistent hip pain that interferes with daily activities, stiffness that limits movement, and pain that continues while resting. A consultation with our orthopedic surgeon can determine if hip replacement is right for you."
    },
    {
      question: "How effective is ACL reconstruction surgery?",
      answer: "ACL reconstruction has a high success rate, with 90-95% of patients returning to their previous activity level. Our advanced arthroscopic techniques ensure minimal scarring and faster healing."
    },
    {
      question: "What should I expect during my first orthopedic consultation?",
      answer: "During your first visit, we'll review your medical history, perform a physical examination, and may order diagnostic tests like X-rays or MRIs. We'll discuss treatment options and develop a personalized care plan."
    }
  ];

  // FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData)
        }}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        {/* Subtle blurred circle decoration */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Hero Content */}
            <header className="relative z-10">
              <div className="bg-black/40 lg:backdrop-blur-sm lg:bg-black/20 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl fade-in">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 font-serif leading-tight">
                  <span className="block text-white">Where Compassion</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-200 mt-1 lg:mt-2">Meets Innovation</span>
                </h1>
                
                <p className="text-lg sm:text-xl mb-6 text-blue-100 max-w-2xl">
                  Advanced Orthopedic Solutions for a Pain-Free, Active Lifestyle. Experience the future of joint care with India's leading robotic surgeon.
                </p>
                
                <div className="mb-8">
                  <p className="text-base sm:text-lg text-blue-50 mb-4">
                    <span className="font-semibold text-white">Dr. Gaurav Saini</span> - A leading orthopaedic surgeon specializing in advanced joint reconstruction and sports medicine.
                  </p>
                  <div className="flex items-center text-blue-200 mb-2">
                    <CheckCircle className="w-5 h-5 mr-2 text-teal-300" />
                    <span>Nearly 20 years of specialized experience in complex surgeries</span>
                  </div>
                  <div className="flex items-center text-blue-200 mb-2">
                    <CheckCircle className="w-5 h-5 mr-2 text-teal-300" />
                    <span>Expert in Robotic Total Knee Replacement (TKR) & Hip Surgeries</span>
                  </div>

                  <div className="flex items-center text-blue-200">
                    <CheckCircle className="w-5 h-5 mr-2 text-teal-300" />
                    <span>Advanced Sports Injury Treatment & Arthroscopic Procedures</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact/"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-red-500/30"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Consultation
                  </Link>
                  <a
                    href="tel:+919876777393"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </div>
              </div>
            </header>

            {/* Hero Image/Stats */}
            <div className="flex flex-col items-center lg:items-end relative z-10">
              <div className="relative w-full max-w-lg mx-auto fade-in">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <Image
                    src="/images/opretion.webp"
                    alt="Dr. Gaurav Saini - Advanced Orthopedic Robotic Surgery"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>
              
              {/* Stats display */}
              <div className="bg-black/30 lg:backdrop-blur lg:bg-black/20 rounded-xl p-5 sm:p-6 w-full max-w-md mt-6 lg:mt-8 border border-white/20 fade-in">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-white">
                        {stat.number}
                      </div>
                      <div className="text-sm text-blue-100">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Shape */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-gray-800/50" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Detailed Introduction Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Welcome to the Future of Orthopedic Excellence</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At our practice, we believe that every patient deserves a life free from joint pain. Led by **Dr. Gaurav Saini**, recognized as the **best orthopedic doctor in mohali** and a pioneer in robotic-assisted orthopedic surgery, we combine nearly two decades of clinical experience with the world's most advanced medical technologies. Our mission is to provide personalized, compassionate care that gets you back to your active lifestyle faster and with better long-term results.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Whether you are suffering from chronic arthritis, a sports injury, or a complex fracture, we offer a full spectrum of orthopedic solutions. From non-surgical management and physical therapy to state-of-the-art **CORI robotic joint replacement**, our approach is always patient-centric. We don't just treat symptoms; we restore function and confidence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-lg mr-4">
                    <Activity className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Precision Diagnostics</h4>
                    <p className="text-gray-600 text-sm">Advanced 3D mapping and imaging for accurate surgical planning.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-50 p-3 rounded-lg mr-4">
                    <Stethoscope className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Patient-Centric Care</h4>
                    <p className="text-gray-600 text-sm">Customized recovery plans tailored to your unique lifestyle goals.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 font-serif">Quick Appointment</h3>
              <p className="mb-8 text-blue-100">Don't let joint pain hold you back. Schedule your consultation with Dr. Gaurav Saini today.</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-teal-300" />
                  <span>+91 98767-77393</span>
                </li>
                <li className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-3 text-teal-300" />
                  <span>WhatsApp Available</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block text-center py-4 bg-teal-400 hover:bg-teal-500 text-blue-900 font-bold rounded-xl transition-all duration-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 fade-in font-serif">
              Our Clinical Specialties
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto fade-in">
              We offer world-class orthopedic services using minimally invasive techniques and advanced robotic systems to ensure the best patient outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              href="/services/robotic-joint-replacement/"
              className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover-effect block"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Activity className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">
                Robotic TKR
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                State-of-the-art Total Knee Replacement using CORI robotic system for unmatched precision and faster recovery.
              </p>
              <span className="text-blue-600 font-semibold inline-flex items-center">Learn More <ArrowRight className="w-4 h-4 ml-1" /></span>
            </Link>
            
            <Link 
              href="/services/sports-injury-arthroscopy/"
              className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover-effect block"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">
                Sports Medicine
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Advanced arthroscopic treatments for ACL tears, meniscus injuries, and shoulder instability for athletes.
              </p>
              <span className="text-blue-600 font-semibold inline-flex items-center">Learn More <ArrowRight className="w-4 h-4 ml-1" /></span>
            </Link>
            
            <Link 
              href="/services/hip-replacement-surgery/"
              className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover-effect block"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">
                Hip Surgery
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Total and partial hip replacement procedures focused on restoring mobility and eliminating chronic hip pain.
              </p>
              <span className="text-blue-600 font-semibold inline-flex items-center">Learn More <ArrowRight className="w-4 h-4 ml-1" /></span>
            </Link>

            <Link 
              href="/services/fracture-trauma-care/"
              className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover-effect block"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">
                Trauma Care
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Expert emergency orthopedic care for complex fractures and musculoskeletal trauma using modern protocols.
              </p>
              <span className="text-blue-600 font-semibold inline-flex items-center">Learn More <ArrowRight className="w-4 h-4 ml-1" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Doctor Images Section */}
      <DoctorImagesSection />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 fade-in font-serif">
              Why Patients Trust Dr. Gaurav Saini
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto fade-in">
              With over 5,000 successful surgeries, Dr. Saini is recognized as a leader in robotic orthopedic procedures and comprehensive patient recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon
              return (
                <article 
                  key={index} 
                  className="bg-white rounded-2xl shadow-sm p-10 hover:shadow-xl transition-all duration-300 border border-gray-100 hover-effect"
                >
                  <div className="flex items-start mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg shadow-blue-200">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 font-serif pt-2">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Doctor Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <article className="order-2 lg:order-1">
              <div className="fade-in">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 font-serif leading-tight">
                 Meet Dr. Gaurav Saini <br/>
                 <span className="text-blue-600 text-2xl lg:text-3xl">Expert Senior Consultant Orthopaedics</span>
                </h2>
                <div className="prose prose-lg text-gray-700 mb-8">
                  <p className="mb-4">
                    **Dr. Gaurav Saini** (MBBS, MS, DNB, MNAMS) is a globally trained **orthopaedic surgeon** and widely known as the **best orthopedic surgeon in kharar** and Mohali, with a special interest in adult joint reconstruction and robotic surgeries. With a career spanning nearly 20 years, he has held senior positions at India's most prestigious medical institutions.
                  </p>
                  <p className="mb-4">
                    His expertise in **Robotic Total Knee Replacement** using the CORI system has made him a sought-after specialist for patients seeking precise results and rapid recovery. Dr. Saini is a member of the National Academy of Medical Sciences (NAMS), Indian Orthopaedic Association (IOA), and AO Trauma, ensuring he stays at the forefront of surgical innovation.
                  </p>
                  <p>
                    Known for his empathetic approach, Dr. Saini is highly recommended as the **best knee replacement surgeon in chandigarh** and the surrounding tricity region. He ensures that every patient understands their condition and treatment journey, fostering a relationship built on trust and clinical excellence.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link
                    href="/about/"
                    className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-xl shadow-blue-100"
                  >
                    View Full Profile
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-10 py-4 bg-red-600 border border-red-700 text-white font-bold rounded-xl hover:bg-red-700 transition-all duration-300 shadow-xl shadow-red-100"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Appointment
                  </Link>
                </div>
              </div>
            </article>
            <div className="order-1 lg:order-2">
              <div className="relative w-full aspect-square max-w-xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50 fade-in">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-400 opacity-20"></div>
                <Image
                  src="/images/dr-saini-logo.webp"
                  alt="Dr. Gaurav Saini - Senior Consultant Orthopaedics"
                  width={1200}
                  height={1200}
                  className="w-full h-full object-contain p-12"
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 fade-in font-serif">
              Patient Success Stories
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto fade-in">
              Read our genuine **orthopaedic surgeon patient reviews** and hear directly from those who have regained their mobility and joy of life through our expert orthopedic care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <article 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover-effect relative"
              >
                <div className="absolute -top-4 left-8 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  "
                </div>
                <div className="flex items-center mb-4 pt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12 fade-in">
            <Link
              href="/testimonials/"
              className="inline-flex items-center px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300"
            >
              Read More Reviews
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Homepage FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-serif">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Common questions about joint care, robotic surgery, and recovery.</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif flex items-start">
                  <span className="text-blue-600 mr-3">Q:</span>
                  {faq.question}
                </h3>
                <div className="flex items-start">
                  <span className="text-teal-500 mr-3 font-bold">A:</span>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
             <Link href="/faqs/" className="text-blue-600 font-bold hover:underline inline-flex items-center text-lg">
                View All FAQs <ArrowRight className="w-5 h-5 ml-1" />
             </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-teal-800 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
           <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-serif">
              Take the First Step Toward a Pain-Free Life
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-blue-100">
              Expert orthopedic consultation is just a call or click away. Schedule your visit with Dr. Gaurav Saini today and regain your freedom of movement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl"
              >
                <Calendar className="w-6 h-6 mr-3 text-blue-600" />
                Book Consultation Now
              </Link>
              <a
                href="https://wa.me/919876777393"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 bg-teal-500 text-blue-900 font-bold rounded-xl hover:bg-teal-400 transition-all duration-300 shadow-2xl"
              >
                <MessageCircle className="w-6 h-6 mr-3 text-blue-900" />
                Chat on WhatsApp
              </a>
            </div>
            <div className="mt-10 flex items-center justify-center text-blue-200">
               <Phone className="w-5 h-5 mr-2" />
               <span className="font-semibold">Emergency Trauma Line: +91 98767-77393</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}