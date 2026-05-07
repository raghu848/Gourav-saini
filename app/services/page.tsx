import { Metadata } from 'next'
import PageAnimationWrapper from '@/components/PageAnimationWrapper'

export const metadata: Metadata = {
  title: 'Services - Best Knee, Hip & Joint Replacement Services in Tricity',
  description: 'Dr. Gaurav Saini offers hip & knee care, robotic knee replacement, back pain & osteoarthritis treatment at a top orthopedic clinic near me.',
  keywords: 'hip and knee clinic, orthopedic surgeon knee specialist, orthopedic for back pain, robotic knee replacement, osteoarthritis doctor, orthopedic doctor in chandigarh, orthopedic clinic near me, orthopedic services in mohali',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://drgauravsainiortho.com/services/',
    title: 'Services - Best Knee, Hip & Joint Replacement Services in Tricity',
    description: 'Dr. Gaurav Saini offers hip & knee care, robotic knee replacement, back pain & osteoarthritis treatment at a top orthopedic clinic near me.',
    siteName: 'Dr. Gaurav Saini - Orthopaedic Surgeon',
    images: [{
      url: 'https://drgauravsainiortho.com/images/dr-saini-logo.jpg',
      width: 1200,
      height: 630,
      alt: 'Dr. Gaurav Saini - Best Orthopaedic Surgeon in Mohali & Chandigarh'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services - Best Knee, Hip & Joint Replacement Services in Tricity',
    description: 'Dr. Gaurav Saini offers hip & knee care, robotic knee replacement, back pain & osteoarthritis treatment at a top orthopedic clinic near me.',
    images: ['https://drgauravsainiortho.com/images/dr-saini-logo.jpg'],
    site: '@DrGauravSaini'
  },
  alternates: {
    canonical: 'https://drgauravsainiortho.com/services/'
  },
  other: {
    'twitter:site': '@DrGauravSaini',
    'twitter:creator': '@DrGauravSaini',
    'twitter:url': 'https://drgauravsainiortho.com/services/',
    'twitter:card': 'summary_large_image',
  }
}

import ServicesContent from './ServicesContent'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 relative pt-24 lg:pt-32">
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://drgauravsainiortho.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://drgauravsainiortho.com/services/"
              }
            ]
          })
        }}
      />
      <PageAnimationWrapper />
      <div className="pb-12">
        <ServicesContent />
      </div>
    </div>
  )
}