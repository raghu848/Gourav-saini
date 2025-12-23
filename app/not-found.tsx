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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center">
        <div className="text-6xl font-bold text-blue-600 mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or removed.
        </p>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 mb-2"
          >
            Back to Home
          </Link>
          
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <Link
              href="/services"
              className="px-4 py-2 bg-white text-blue-600 border border-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200 text-sm"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 bg-white text-blue-600 border border-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200 text-sm"
            >
              About Dr. Saini
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 bg-white text-blue-600 border border-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200 text-sm"
            >
              Contact
            </Link>
            <Link
              href="/book-appointment"
              className="px-4 py-2 bg-white text-blue-600 border border-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200 text-sm"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}