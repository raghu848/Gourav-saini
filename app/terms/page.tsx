import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Dr. Gaurav Saini | Orthopedic Surgeon',
  description: 'Terms and Conditions for using Dr. Gaurav Saini\'s website and orthopedic services. Read our medical disclaimer and appointment policies.',
  alternates: {
    canonical: 'https://drgauravsainiortho.com/terms/'
  }
};

export default function TermsAndConditions() {
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
          <span className="ml-2 text-gray-500">Terms & Conditions</span>
        </nav>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Terms & Conditions</h1>
          <p className="text-gray-500 mb-8 italic">Last updated: {lastUpdated}</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h2 className="text-xl font-bold text-red-900 mb-3">Medical Disclaimer</h2>
              <p className="text-red-800 font-medium">
                The content on this website is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. Always seek the advice of a qualified orthopedic surgeon or other healthcare provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of the Website</h2>
              <p>
                You agree to use the website for lawful purposes only. You are prohibited from using the site to engage in any activity that could damage, disable, or impair the server or network.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Appointment Policy</h2>
              <p>
                Scheduling an appointment through this website is a request and is subject to confirmation by the clinic staff. We reserve the right to reschedule or cancel appointments due to emergencies or unforeseen circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and images, is the property of Dr. Gaurav Saini and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without explicit permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
              <p>
                Dr. Gaurav Saini and his staff shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the information on this website or services provided.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. External Links</h2>
              <p>
                Our website may contain links to third-party websites. These links are provided for convenience and do not signify endorsement. We are not responsible for the content or privacy practices of these external sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Your continued use of the site following any changes signifies your acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in Chandigarh/Mohali.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
