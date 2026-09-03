import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Home, 
  User, 
  Stethoscope, 
  FileText, 
  MessageCircle, 
  MapPin, 
  ChevronRight,
  ShieldCheck,
  Globe
} from 'lucide-react';
import PageAnimationWrapper from '@/components/PageAnimationWrapper';

export const metadata: Metadata = {
  title: 'Sitemap | Dr. Gaurav Saini, Orthopaedic Surgeon',
  description: 'Explore all pages on Dr. Gaurav Saini\'s website. Comprehensive index of orthopedic services, blog posts, and clinic information.',
  alternates: {
    canonical: 'https://drgauravsainiortho.com/sitemap/'
  }
};

export default function SitemapPage() {
  const sitemapData = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
        { name: 'Home', href: '/' },
        { name: 'About Dr. Saini', href: '/about/' },
        { name: 'Orthopedic Services', href: '/services/' },
        { name: 'Patient Testimonials', href: '/testimonials/' },
        { name: 'Health Blog', href: '/blog/' },
        { name: 'Contact Us', href: '/contact/' },
        { name: 'Book Appointment', href: '/book-appointment/' },
        { name: 'Frequently Asked Questions', href: '/faqs/' }
      ]
    },
    {
      title: 'Specialized Services',
      icon: Stethoscope,
      links: [
        { name: 'Robotic Joint Replacement', href: '/services/robotic-joint-replacement/' },
        { name: 'Knee Replacement Surgery', href: '/services/knee-replacement-surgery/' },
        { name: 'Hip Replacement Surgery', href: '/services/hip-replacement-surgery/' },
        { name: 'Sports Injury & Arthroscopy', href: '/services/sports-injury-arthroscopy/' },
        { name: 'Fracture & Trauma Care', href: '/services/fracture-trauma-care/' },
        { name: 'Spine Surgery', href: '/services/spine-surgery/' },
        { name: 'Joint Replacement Center', href: '/services/joint-replacement-center/' }
      ]
    },
    {
      title: 'Legal & Policy',
      icon: ShieldCheck,
      links: [
        { name: 'Privacy Policy', href: '/privacy/' },
        { name: 'Terms & Conditions', href: '/terms/' },
        { name: 'Sitemap (XML)', href: '/sitemap.xml' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 lg:pt-32 pb-16">
      <PageAnimationWrapper />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif mb-4">
            Website Sitemap
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive index of all content and services available on our website.
          </p>
        </div>

        {/* Sitemap Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapData.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <section.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
              </div>
              
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="flex items-center text-gray-700 hover:text-blue-600 group transition-colors duration-200"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-blue-300 group-hover:text-blue-600 transition-colors" />
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Search Suggestion */}
        <div className="mt-16 bg-blue-900 rounded-3xl p-8 lg:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Our team is ready to help you with any orthopedic concerns or questions about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/"
                className="px-8 py-3 bg-white text-blue-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-200"
              >
                Contact Support
              </Link>
              <Link
                href="/faqs/"
                className="px-8 py-3 bg-blue-800 text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-200 border border-blue-700"
              >
                Browse FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
