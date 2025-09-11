import { Metadata } from 'next'
import Image from 'next/image'
import { Star, Quote, MessageCircle, ThumbsUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Patient Testimonials - Dr. Gaurav Saini | Real Patient Stories',
  description: 'Read genuine testimonials from patients who have experienced successful treatment with Dr. Gaurav Saini. Real stories of recovery and restored mobility.',
}

  export default function TestimonialsPage() {

    const recoveryPhotos = [
      {
        id: 1,
        image: '/images/testimonials/IMG-20250908-WA0010.jpg',
        patientName: 'Simran Kaur',
        age: 52,
        procedure: 'Total Knee Replacement (CORI Robotic)',
        recoveryTime: '3 months post-op',
        testimonial: 'I can walk without pain for the first time in 5 years! Dr. Saini&apos;s robotic surgery was a miracle. The precision was incredible and recovery was much faster than expected.',
        rating: 5
      },
      {
        id: 2,
        image: '/images/testimonials/IMG-20250908-WA0022.jpg', 
        patientName: 'Manjit Kaur',
        age: 48,
        procedure: 'Hip Replacement Surgery',
        recoveryTime: '4 months post-op',
        testimonial: 'Back to my daily activities with zero pain! Dr. Saini explained everything clearly and the surgery was performed with utmost care. Highly recommend!',
        rating: 5
      },
      {
        id: 3,
        image: '/images/testimonials/IMG-20250908-WA0025.jpg',
        patientName: 'Nimrat kaur', 
        age: 45,
        procedure: 'ACL Reconstruction',
        recoveryTime: '6 months post-op',
        testimonial: 'From sports injury to full recovery! Dr. Saini&apos;s expertise in sports medicine is outstanding. I&apos;m back to playing cricket with full confidence.',
        rating: 5
      },
      {
        id: 4,
        image: '/images/testimonials/IMG-20250908-WA0028.jpg',
        patientName: 'Surjeet singh',
        age: 38,
        procedure: 'Shoulder Arthroscopy',
        recoveryTime: '2 months post-op', 
        testimonial: 'Minimal scarring and quick recovery! The arthroscopic procedure was so advanced. Dr. Saini&apos;s skill and the modern techniques used were impressive.',
        rating: 5
      },
      {
        id: 5,
        image: '/images/testimonials/IMG-20250908-WA0029.jpg',
        patientName: 'Jasbir Singh',
        age: 55,
        procedure: 'Complex Fracture Treatment',
        recoveryTime: '5 months post-op',
        testimonial: 'Perfect bone healing after a complex fracture! Dr. Saini&apos;s trauma expertise saved my leg. The care and follow-up were exceptional throughout.',
        rating: 5
      },
      {
        id: 6,
        image: '/images/testimonials/patient-1 (3).jpg',
        patientName: 'Rahul Verma',
        age: 42,
        procedure: 'Robotic Hip Replacement',
        recoveryTime: '4 months post-op',
        testimonial: 'The robotic precision made all the difference in my hip replacement. Minimal pain and quick recovery allowed me to return to my daily activities.',
        rating: 5
      },
      {
        id: 7,
        image: '/images/testimonials/patient-1 (13).jpg',
        patientName: 'Priya Sharma',
        age: 35,
        procedure: 'Knee Arthroscopy',
        recoveryTime: '2 months post-op',
        testimonial: 'Dr. Saini&apos;s expertise in arthroscopic procedures helped me recover from my sports injury quickly. I&apos;m back to running marathons!',
        rating: 5
      },
      {
        id: 8,
        image: '/images/testimonials/patient-1 (17).jpg',
        patientName: 'Amit Patel',
        age: 58,
        procedure: 'Shoulder Replacement',
        recoveryTime: '5 months post-op',
        testimonial: 'After years of shoulder pain, the replacement surgery has given me a new lease on life. Dr. Saini&apos;s care was exceptional throughout.',
        rating: 5
      },
      {
        id: 9,
        image: '/images/testimonials/patient-1 (26).jpg',
        patientName: 'Kavita Singh',
        age: 47,
        procedure: 'Spinal Fusion Surgery',
        recoveryTime: '6 months post-op',
        testimonial: 'The spinal fusion surgery was complex, but Dr. Saini&apos;s skill and compassionate care made my recovery journey smooth and successful.',
        rating: 5
      }
    ]
    const testimonials = [
      {
        id: 1,
        name: 'Rajesh Kumar',
        age: 58,
        condition: 'Total Knee Replacement',
        rating: 5,
        text: 'Dr. Saini performed my knee replacement surgery 6 months ago, and I cannot express how grateful I am. I was in constant pain for years, and now I can walk without any discomfort. The surgery was smooth, and the recovery was much faster than I expected.',
        image: '/testimonials/patient-1.jpg'
      },
      {
        id: 2,
        name: 'Priya Sharma',
        age: 42,
        condition: 'ACL Reconstruction',
        rating: 5,
        text: 'As a professional athlete, my ACL injury was devastating. Dr. Saini not only repaired my knee but also helped me understand the rehabilitation process. I&apos;m back to competitive sports now, stronger than ever. His expertise is unmatched.',
        image: '/testimonials/patient-2.jpg'
      },
      {
        id: 3,
        name: 'Mohammad Ali',
        age: 65,
        condition: 'Arthritis Treatment',
        rating: 5,
        text: 'I had been suffering from severe arthritis pain for over 5 years. Dr. Saini&apos;s treatment plan completely changed my life. The combination of medication, therapy, and lifestyle changes he recommended has given me my freedom back.',
        image: '/testimonials/patient-3.jpg'
      },
      {
        id: 4,
        name: 'Sunita Patel',
        age: 51,
        condition: 'Shoulder Arthroscopy',
        rating: 5,
        text: 'The minimally invasive shoulder surgery Dr. Saini performed was incredible. The small incisions healed quickly, and I was back to my daily activities within weeks. His attention to detail and post-operative care was exceptional.',
        image: '/testimonials/patient-4.jpg'
      },
      {
        id: 5,
        name: 'Vikram Singh',
        age: 34,
        condition: 'Sports Injury',
        rating: 5,
        text: 'Dr. Saini treated my complex knee injury from a football accident. His comprehensive approach and clear explanations helped me understand every step of the treatment. I&apos;m now back to playing sports with full confidence.',
        image: '/testimonials/patient-5.jpg'
      },
      {
        id: 6,
        name: 'Anita Gupta',
        age: 47,
        condition: 'Partial Knee Replacement',
        rating: 5,
        text: 'I was hesitant about surgery, but Dr. Saini patiently explained all my options. The partial knee replacement he recommended was perfect for my condition. The results exceeded my expectations, and I wish I had done it sooner.',
        image: '/testimonials/patient-6.jpg'
      }
    ]

    const stats = [
      { number: '5000+', label: 'Successful Surgeries' },
      { number: '99%', label: 'Patient Satisfaction' },
      { number: '20+', label: 'Years Experience' },
      { number: '5/5', label: 'Average Rating' }
    ]

    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 font-serif mb-4">
              Patient Testimonials
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real patients who have experienced life-changing results with Dr. Gaurav Saini
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2 font-serif">
                  {stat.number}
                </div>
                <div className="text-gray-700 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Patient Recovery Photos Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 font-serif mb-4">
                Patient Recovery Gallery
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See the remarkable recovery journeys of our patients
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recoveryPhotos.map((patient) => (
                <div key={patient.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-56 border-4 border-blue-200 hover:border-blue-400 transition-colors duration-300 rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-2">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={patient.image}
                        alt={`${patient.patientName} - ${patient.procedure} Recovery`}
                        fill
                        style={{ objectFit: 'contain' }}
                        className="rounded-lg transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={patient.id <= 3}
                      />
                    </div>
                  </div>
                  <div className="p-6 hover:bg-blue-50 transition-colors duration-300">
                    <div className="flex items-center mb-2">
                      {[...Array(patient.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">
                      {patient.patientName}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Age {patient.age} • {patient.recoveryTime}
                    </p>
                    <p className="text-sm font-medium text-blue-600 mb-3">
                      {patient.procedure}
                    </p>
                    <p className="text-gray-700 text-sm italic">
                      {patient.testimonial}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What Our Patients Say Section */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 font-serif mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Real experiences from patients who have transformed their lives
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 relative">
                
                {/* Quote Icon */}
                <div className="absolute top-4 right-4">
                  <Quote className="w-6 h-6 text-blue-200" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 italic">
                  {testimonial.text}
                </p>

                {/* Patient Info */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    Age {testimonial.age} • {testimonial.condition}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Call to Action */}
          <div className="bg-blue-900 text-white rounded-lg p-8 text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Join Our Success Stories
            </h2>
            <p className="text-xl mb-6">
              Experience the same level of care and expertise that our patients rave about
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-900 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Schedule Consultation
              </a>
              <a
                href="tel:+919876777393"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-200"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Simple Comment Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 font-serif mb-6 flex items-center">
              <MessageCircle className="w-6 h-6 mr-2 text-blue-600" />
              Leave Your Comments
            </h2>
            
            <form className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <textarea
                placeholder="Share your experience with Dr. Saini or ask any questions..."
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={5}
              />
              <button
                type="submit"
                className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Post Comment
              </button>
            </form>

            {/* Sample Comments with Images */}
            <div className="space-y-6">
              <div className="border-b pb-6">
                <div className="flex items-start space-x-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-blue-400">
                    <Image
                      src="/images/testimonials/patient-1 (3).jpg"
                      alt="Patient Review"
                      fill
                      style={{ objectFit: 'contain' }}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-medium text-gray-900">Patient Review</h4>
                      <span className="text-sm text-gray-500">2 days ago</span>
                    </div>
                    <p className="text-gray-700">Amazing results! Dr. Saini is truly gifted. My knee surgery was a complete success and I&apos;m back to my normal activities.</p>
                    <div className="flex items-center mt-3 space-x-4">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-sm">12</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-b pb-6">
                <div className="flex items-start space-x-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-blue-400">
                    <Image
                      src="/images/testimonials/patient-1 (13).jpg"
                      alt="Recovery Story"
                      fill
                      style={{ objectFit: 'contain' }}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-medium text-gray-900">Recovery Story</h4>
                      <span className="text-sm text-gray-500">1 week ago</span>
                    </div>
                    <p className="text-gray-700">Thank you Dr. Saini for giving me my life back! The robotic surgery was incredible and recovery was much faster than expected.</p>
                    <div className="flex items-center mt-3 space-x-4">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-sm">8</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b pb-6">
                <div className="flex items-start space-x-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-blue-400">
                    <Image
                      src="/images/testimonials/patient-1 (17).jpg"
                      alt="Successful Treatment"
                      fill
                      style={{ objectFit: 'contain' }}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-medium text-gray-900">Successful Treatment</h4>
                      <span className="text-sm text-gray-500">3 days ago</span>
                    </div>
                    <p className="text-gray-700">The hip replacement surgery was life-changing. Dr. Saini&apos;s expertise and care made all the difference in my recovery journey.</p>
                    <div className="flex items-center mt-3 space-x-4">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-sm">15</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b pb-6">
                <div className="flex items-start space-x-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-blue-400">
                    <Image
                      src="/images/testimonials/patient-1 (26).jpg"
                      alt="Patient Experience"
                      fill
                      style={{ objectFit: 'contain' }}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-medium text-gray-900">Patient Experience</h4>
                      <span className="text-sm text-gray-500">5 days ago</span>
                    </div>
                    <p className="text-gray-700">After my shoulder surgery, I was able to return to playing tennis. The precision and care Dr. Saini provided were exceptional.</p>
                    <div className="flex items-center mt-3 space-x-4">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-sm">9</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }