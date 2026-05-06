import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found - Dr. Gaurav Saini | Orthopedic Surgeon',
  description: 'The page you are looking for does not exist. Visit Dr. Gaurav Saini\'s orthopedic clinic in Mohali & Chandigarh for expert care.',
  alternates: {
    canonical: 'https://drgauravsainiortho.com/404/'
  }
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full text-center">
        <div className="text-8xl font-bold text-blue-600 mb-6">404</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
          We couldn't find the page you were looking for. Don't worry, you're still in the right place for orthopedic care.
        </p>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What would you like to do next?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Popular Services</h3>
              <ul className="space-y-2 text-left">
                <li><Link href="/services/knee-replacement-surgery" className="text-blue-600 hover:underline">Knee Replacement</Link></li>
                <li><Link href="/services/hip-replacement-surgery" className="text-blue-600 hover:underline">Hip Replacement</Link></li>
                <li><Link href="/services/robotic-surgery" className="text-blue-600 hover:underline">Robotic Surgery</Link></li>
                <li><Link href="/services/sports-injury-treatment" className="text-blue-600 hover:underline">Sports Injury</Link></li>
              </ul>
            </div>
            
            <div className="p-4 bg-teal-50 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Quick Links</h3>
              <ul className="space-y-2 text-left">
                <li><Link href="/about" className="text-blue-600 hover:underline">About Dr. Saini</Link></li>
                <li><Link href="/blog" className="text-blue-600 hover:underline">Health Articles</Link></li>
                <li><Link href="/testimonials" className="text-blue-600 hover:underline">Patient Stories</Link></li>
                <li><Link href="/contact" className="text-blue-600 hover:underline">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 shadow-md"
            >
              Back to Home
            </Link>
            
            <Link
              href="/book-appointment"
              className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-medium rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-md"
            >
              Book Appointment
            </Link>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Need Help Finding Something?</h3>
            <p className="text-gray-600 mb-4">Contact our team directly for assistance</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876777393"
                className="px-4 py-2 bg-gray-100 text-gray-800 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200 inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                +91 98767 77393
              </a>
              <span
                className="px-4 py-2 bg-gray-100 text-gray-800 font-medium rounded-lg inline-flex items-center justify-center cursor-default"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                info [at] drgauravsainiortho [dot] com
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-500 text-sm mt-4">
          While we work on fixing this, explore our comprehensive orthopedic services
        </p>
      </div>
    </div>
  );
}