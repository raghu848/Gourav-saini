import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { homepageMetadata } from './seo-metadata'

export const metadata: Metadata = homepageMetadata

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
    <div className="min-h-screen">
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
            <div className="relative z-10">
              <div className="backdrop-blur-sm bg-black/20 p-8 rounded-2xl border border-white/10 shadow-xl fade-in">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 font-serif leading-tight">
                  <span className="block text-white">Where Compassion</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-200 mt-2">Meets Innovation</span>
                </h1>
                
                <p className="text-lg sm:text-xl mb-6 text-blue-100 max-w-2xl">
                  Advanced Orthopedic Solutions for a Pain-Free, Active Lifestyle
                </p>
                
                <div className="mb-8">
                  <p className="text-base sm:text-lg text-blue-50 mb-4">
                    <span className="font-semibold text-white">Dr. Gaurav Saini</span> - Senior Orthopaedic Surgeon
                  </p>
                  <div className="flex items-center text-blue-200 mb-2">
                    <CheckCircle className="w-5 h-5 mr-2 text-teal-300" />
                    <span>Nearly 20 years of specialized experience</span>
                  </div>
                  <div className="flex items-center text-blue-200 mb-2">
                    <CheckCircle className="w-5 h-5 mr-2 text-teal-300" />
                    <span>Expert in Robotic Total Knee Replacement</span>
                  </div>

                  <div className="flex items-center text-blue-200">
                    <CheckCircle className="w-5 h-5 mr-2 text-teal-300" />
                    <span>Expert for Sports Injury & Hip surgeries</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
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
            </div>

            {/* Hero Image/Stats */}
            <div className="flex flex-col items-center lg:items-end relative z-10">
              <div className="relative w-full max-w-lg mx-auto fade-in">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <Image
                    src="/images/opretion.webp"
                    alt="Dr. Gaurav Saini - Senior Consultant Orthopaedics"
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
              <div className="bg-black/20 backdrop-blur rounded-xl p-6 w-full max-w-md mt-8 border border-white/20 fade-in">
                <div className="grid grid-cols-2 gap-4">
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

      {/* Specialties Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 fade-in">
              Our Specialties
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto fade-in">
              Comprehensive orthopedic care with expertise in the latest surgical techniques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              href="/about"
              className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover-effect block"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                About Us
              </h3>
              <p className="text-gray-600 text-sm">
                Learn about Dr. Gaurav Saini and his expertise in orthopedic care
              </p>
            </Link>
            
            <Link 
              href="/services"
              className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover-effect block"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Services
              </h3>
              <p className="text-gray-600 text-sm">
                Explore our comprehensive orthopedic services and treatments
              </p>
            </Link>
            
            <Link 
              href="/blog"
              className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover-effect block"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Blogs
              </h3>
              <p className="text-gray-600 text-sm">
                Read expert advice and insights on orthopedic health
              </p>
            </Link>
            

          </div>
        </div>
      </section>

      {/* Doctor Images Section */}
      <DoctorImagesSection />

      {/* Why Choose Us Section */}
      <section className="py-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 fade-in">
              Why Patients Choose Us
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto fade-in">
              Advanced technology, expert care, and proven results for comprehensive orthopedic treatment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-all duration-300 border border-gray-100 hover-effect"
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Doctor Section */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="fade-in">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                 Consult with Dr. Gaurav Saini
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  MBBS, MS, DNB, MNAMS - Senior Consultant Orthopaedics specializing in Robotic Hip and Knee Surgeries with nearly 20 years of dedicated experience.
                </p>
                <p className="text-gray-600 mb-8">
                  Award-winning orthopedic surgeon trained at prestigious centers worldwide, committed to providing cutting-edge orthopedic care with compassion and precision.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-md"
                  >
                    Learn More About Dr. Saini
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-red-600 border border-red-700 text-white font-medium rounded-lg hover:bg-red-700 hover:border-red-800 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl fade-in">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-400"></div>
                <Image
                  src="/images/dr-saini-logo.jpg"
                  alt="Dr. Gaurav Saini - Senior Consultant Orthopaedics"
                  width={1200}
                  height={800}
                  className="object-contain p-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 fade-in">
              What Our Patients Say
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto fade-in">
              Real experiences from patients who have transformed their lives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover-effect"
              >
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  {testimonial.text}
                </p>
                <div className="font-medium text-gray-900">
                  {testimonial.name}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 fade-in">
            <Link
              href="/testimonials"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300"
            >
              Read More Reviews
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-6 bg-gradient-to-r from-blue-800 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Your Recovery?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Schedule a consultation with Dr. Gaurav Saini today and take the first step towards a pain-free future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-800 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
              </Link>
              <a
                href="https://wa.me/919876777393"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}