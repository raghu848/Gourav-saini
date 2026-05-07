import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - Dr. Gaurav Saini | Orthopedic Surgeon',
  description: 'Privacy Policy for Dr. Gaurav Saini\'s orthopedic clinic. Learn how we protect your medical records and personal information.',
};

export default function PrivacyPolicy() {
  const lastUpdated = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-24 lg:pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link> &gt; 
          <span className="ml-2 text-gray-500">Privacy Policy</span>
        </nav>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Privacy Policy</h1>
          <p className="text-gray-500 mb-8 italic">Last updated: {lastUpdated}</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p>
                Dr. Gaurav Saini ("we," "our," or "the Clinic") is committed to protecting the privacy and confidentiality of our patients' personal and medical information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p>We may collect personal information that you voluntarily provide to us, including but not limited to:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Contact information (name, email address, phone number)</li>
                <li>Appointment details and medical history provided via forms</li>
                <li>Inquiries sent through our contact pages</li>
                <li>Information about your use of our website via cookies and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Medical Records and Confidentiality</h2>
              <p>
                As a medical practice, we adhere to strict confidentiality standards regarding patient records. Medical information collected during consultations is handled in accordance with medical ethics and applicable healthcare data protection laws in India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Schedule and manage medical appointments</li>
                <li>Provide personalized orthopedic consultations and treatments</li>
                <li>Respond to your inquiries and provide patient support</li>
                <li>Improve our website functionality and user experience</li>
                <li>Send important health updates or clinic announcements (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information. Your data is stored on secure servers and access is limited to authorized medical and administrative staff only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Disclosure</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Request access to the personal data we hold about you</li>
                <li>Request corrections to any inaccurate information</li>
                <li>Opt-out of any marketing communications</li>
                <li>Request the deletion of your non-medical personal data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
              <p>
                If you have any questions regarding this Privacy Policy, you may contact us using the information below:
              </p>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="font-bold">Dr. Gaurav Saini</p>
                <p>Max Super Specialty Hospital, Mohali</p>
                <p>Email: info@drgauravsainiortho.com</p>
                <p>Phone: +91 98767 77393</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
