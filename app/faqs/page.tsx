import { Metadata } from 'next';
import Link from 'next/link';
import { 
  ChevronDown, 
  HelpCircle,
  MessageCircle,
  Calendar
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Dr. Gaurav Saini | Orthopedic Surgeon',
  description: 'Find answers to common questions about robotic knee replacement, hip surgery, sports injuries, and recovery from Dr. Gaurav Saini.',
};

export default function FAQPage() {
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
    },
    {
        question: "Is orthopedic surgery very painful?",
        answer: "With modern anesthesia and advanced pain management protocols (like nerve blocks), most patients experience minimal discomfort during and immediately after surgery. We prioritize your comfort throughout the recovery process."
    },
    {
        question: "Do I need a referral to see Dr. Gaurav Saini?",
        answer: "While many of our patients are referred by their primary care doctors, you do not necessarily need a referral to book a consultation. You can contact us directly to schedule an appointment."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 lg:pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link> &gt; 
          <span className="ml-2 text-gray-500">FAQs</span>
        </nav>

        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600">Find answers to common questions about our orthopedic services and procedures.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <HelpCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-700 to-teal-600 rounded-2xl p-8 text-white text-center shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="text-blue-100 mb-8 text-lg">Our team is here to help you understand your options and guide you through your recovery journey.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
                >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Consultation
                </Link>
                <a
                    href="https://wa.me/919876777393"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                </a>
            </div>
        </div>
      </div>
    </div>
  );
}
