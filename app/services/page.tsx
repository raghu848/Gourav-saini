import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Orthopedic Services - Dr. Gaurav Saini',
  description: 'Comprehensive orthopedic services in Mohali & Chandigarh. Including robotic joint replacement, sports injury treatment, and trauma care. Book consultation.',
  alternates: {
    canonical: 'https://drgauravsaini.com/services/'
  }
}

import ServicesContent from './ServicesContent'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <ServicesContent />
    </div>
  )
}