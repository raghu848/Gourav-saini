import type { Metadata } from 'next'
import { servicesMetadata } from '../metadata-improved'

export const metadata: Metadata = {
  title: 'Services - Best Knee, Hip & Joint Replacement Services in Tricity',
  description: 'Dr. Gaurav Saini offers hip & knee care, robotic knee replacement, back pain & osteoarthritis treatment at a top orthopedic clinic near me.',
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

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}