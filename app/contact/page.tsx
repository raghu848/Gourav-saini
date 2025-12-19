import ContactForm from '../../components/ContactForm'
import { MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 mt-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 font-serif mb-6">
            Contact Us
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Ready to start your journey to better health? Get in touch with Dr. Gaurav Saini and his team
          </p>
        </div>

        <ContactForm />

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.878985413344!2d76.6789063151447!3d30.72445198164194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef111d418825%3A0x4a2a3e0a0d0d0d0d!2sMax%20Super%20Speciality%20Hospital!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hospital Location"
            ></iframe>
          </div>
          <div className="p-6 bg-gray-50">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Max Super Speciality Hospital</h3>
                <p className="text-gray-600 mt-1">
                  Cabin No 26 Ground floor, MAX SUPER SPECIALTY HOSPITAL, Near Civil Hospital<br/>
                  56A, Phase 6, Sector 56, Sahibzada Ajit Singh Nagar, Punjab 160055
                </p>
              </div>
              <a 
                href="https://www.google.com/maps/dir//Cabin+No+26+Ground+floor,+MAX+SUPER+SPECIALTY+HOSPITAL,+56A,+near+Civil+Hospital,+Phase+6,+Sector+56,+Sahibzada+Ajit+Singh+Nagar,+Punjab+160055/@30.740054,76.6318948,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390fef3afc0a4d67:0xa2a365fdad38645f!2m2!1d76.7142961!2d30.74008?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}