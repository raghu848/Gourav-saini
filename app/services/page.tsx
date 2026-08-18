import { Metadata } from 'next'
import PageAnimationWrapper from '@/components/PageAnimationWrapper'

export const metadata: Metadata = {
  title: 'Orthopaedic Services in Mohali | Dr. Gaurav Saini',
  description: 'Explore specialized orthopaedic services by Dr. Gaurav Saini in Mohali & Chandigarh. Robotic knee replacement, hip surgery & sports medicine. Book now.',
  keywords: 'orthopaedic services in mohali, robotic knee replacement, hip surgery chandigarh, sports injury doctor, fracture care mohali',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://drgauravsainiortho.com/services/',
    title: 'Orthopaedic Services in Mohali | Dr. Gaurav Saini',
    description: 'Explore specialized orthopaedic services by Dr. Gaurav Saini in Mohali & Chandigarh. Robotic knee replacement, hip surgery & sports medicine. Book now.',
    siteName: 'Dr. Gaurav Saini - Orthopaedic Surgeon',
    images: [{
      url: 'https://drgauravsainiortho.com/images/dr-saini-logo.jpg',
      width: 1200,
      height: 630,
      alt: 'Orthopaedic Services - Dr. Gaurav Saini'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orthopaedic Services in Mohali | Dr. Gaurav Saini',
    description: 'Explore specialized orthopaedic services by Dr. Gaurav Saini in Mohali & Chandigarh.',
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