import type { Metadata } from 'next'

const defaultKeywords = [
  'Best orthopaedic surgeon in tricity',
  'Best orthopedic surgeon in mohali',
  'Best doctor for knee replacement',
  'Best orthopedic surgeon for sports injury',
  'Best orthopedic surgeon in mohali for hip replacement',
  'Total knee replacement specialist',
  'Joint replacement surgeon Mohali',
  'Sports injury specialist Chandigarh',
  'Robotic knee surgery Mohali',
  'Best doctor for ACL surgery',
  'Hip replacement surgeon near me',
  'Arthroscopy specialist in Mohali',
  'Best orthopedic hospital in tricity',
  'Advanced knee surgery in Mohali',
  'Sports medicine doctor Chandigarh',
  'Minimally invasive joint surgery',
  'CORI robotic surgery specialist',
  'Knee pain treatment in Mohali',
  'Joint pain specialist near me',
  'Best orthopedic doctor Max Hospital',
  // New keywords
  'Orthopaedic Surgeon Mohali',
  'Best Orthopedic Doctor Chandigarh',
  'Joint Replacement Specialist Mohali',
  'Robotic Knee Replacement Mohali',
  'Trauma Care Hospital Chandigarh',
  'Sports Injury Clinic Mohali',
  'Orthopedic Doctor Near Max Hospital Mohali',
  'Best Knee Surgeon in Chandigarh',
  'Dr. Saini Robotic Surgery Mohali',
  'Affordable Joint Replacement Surgery Chandigarh',
  // Additional location-based keywords
  'Orthopaedic Surgeon Chandigarh',
  'Orthopaedic Surgeon Panchkula',
  'Orthopaedic Surgeon Zirakpur',
  'Joint Replacement Surgery Tricity',
  'Knee Replacement Surgery Chandigarh',
  'Hip Replacement Surgery Mohali',
  'Sports Injury Treatment Tricity',
  'Robotic Joint Surgery Punjab',
  'Orthopedic Clinic Mohali',
  'Bone and Joint Specialist Punjab'
]

export const defaultMetadata: Metadata = {
  title: 'Dr. Gaurav Saini - Best Orthopedic Surgeon in Mohali & Tricity',
  description: 'Dr. Gaurav Saini is the best orthopaedic surgeon in Mohali & Chandigarh, specializing in robotic knee replacement, sports injuries, and joint replacement surgery. Top-rated orthopedic surgeon in tricity with 20+ years experience. Book appointment today.',
  keywords: defaultKeywords.join(', '),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://drgauravsainiortho.com',
    title: 'Dr. Gaurav Saini - Leading Orthopaedic Surgeon in Mohali & Chandigarh | Joint Replacement Specialist',
    description: 'Best orthopaedic surgeon in Mohali & tricity area. Expert in robotic knee replacement, sports injuries, and joint surgery with 20+ years experience. Book appointment now.',
    siteName: 'Dr. Gaurav Saini - Orthopaedic Surgeon',
    images: [{
      url: '/images/dr-saini-logo.jpg',
      width: 1200,
      height: 630,
      alt: 'Dr. Gaurav Saini - Best Orthopaedic Surgeon in Mohali & Chandigarh'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Gaurav Saini - Best Orthopaedic Surgeon in Mohali',
    description: 'Expert in robotic knee replacement, sports injuries, and joint surgery with 20+ years experience.',
    images: ['/images/dr-saini-logo.jpg'],
  },
  authors: [{
    name: 'Dr. Gaurav Saini',
    url: 'https://drgauravsainiortho.com'
  }],
  formatDetection: {
    telephone: true,
    email: true,
    address: true
  },
  metadataBase: new URL('https://drgauravsainiortho.com'),
  alternates: {
    canonical: 'https://drgauravsainiortho.com'
  }
}

export const servicesMetadata = {
  'knee-replacement': {
    title: 'Best Knee Replacement Surgery in Mohali & Chandigarh | Dr. Gaurav Saini',
    description: 'Advanced robotic knee replacement surgery by Dr. Gaurav Saini, the best orthopedic surgeon in Mohali & Chandigarh. Expert in total & partial knee replacement using CORI technology. Book appointment today.',
    keywords: [
      'knee replacement surgery in mohali',
      'best knee replacement surgeon',
      'robotic knee surgery',
      'total knee replacement cost',
      'CORI robotic knee surgery',
      'partial knee replacement',
      'Robotic Knee Replacement Mohali',
      'Best Knee Surgeon in Chandigarh',
      'Dr. Saini Robotic Surgery Mohali',
      'knee replacement surgery chandigarh',
      'total knee replacement mohali',
      'partial knee replacement chandigarh'
    ].join(', ')
  },
  'sports-injury': {
    title: 'Best Sports Injury Treatment in Mohali & Chandigarh | Dr. Gaurav Saini',
    description: 'Expert sports injury treatment and arthroscopy by Dr. Gaurav Saini. Leading sports medicine specialist in Mohali & Chandigarh offering ACL reconstruction and advanced arthroscopic surgery. Book consultation today.',
    keywords: [
      'sports injury treatment mohali',
      'ACL surgery specialist',
      'arthroscopy surgeon',
      'sports medicine doctor',
      'knee arthroscopy',
      'ligament repair',
      'Sports Injury Clinic Mohali',
      'Sports injury specialist Chandigarh',
      'sports injury treatment chandigarh',
      'ACL reconstruction mohali',
      'sports medicine specialist tricity'
    ].join(', ')
  },
  'hip-replacement': {
    title: 'Best Hip Replacement Surgery in Mohali & Chandigarh | Dr. Gaurav Saini',
    description: 'Advanced hip replacement surgery by Dr. Gaurav Saini, the leading orthopedic surgeon in Mohali & Chandigarh. Expert in total hip replacement and minimally invasive techniques. Schedule consultation today.',
    keywords: [
      'hip replacement surgery mohali',
      'best hip replacement surgeon',
      'total hip replacement',
      'minimally invasive hip surgery',
      'hip pain treatment',
      'hip arthritis specialist',
      'Joint Replacement Specialist Mohali',
      'Affordable Joint Replacement Surgery Chandigarh',
      'hip replacement surgery chandigarh',
      'total hip replacement mohali',
      'hip replacement cost chandigarh'
    ].join(', ')
  },
  'fracture-trauma': {
    title: 'Best Trauma Care Hospital in Chandigarh & Mohali | Dr. Gaurav Saini',
    description: 'Emergency trauma care and fracture treatment by Dr. Gaurav Saini. Leading trauma care hospital in Chandigarh & Mohali offering 24/7 emergency orthopedic services. Emergency care available.',
    keywords: [
      'trauma care hospital chandigarh',
      'fracture treatment specialist',
      'emergency orthopedic care',
      'polytrauma treatment',
      'Trauma Care Hospital Chandigarh',
      'Orthopaedic Surgeon Mohali',
      'emergency fracture care mohali',
      '24 hour orthopedic hospital',
      'trauma care mohali',
      'emergency orthopedic surgeon chandigarh'
    ].join(', ')
  },
  'robotic-surgery': {
    title: 'Best Robotic Surgery in Mohali & Chandigarh | Dr. Gaurav Saini',
    description: 'Advanced robotic surgery using CORI technology by Dr. Gaurav Saini. Leading robotic surgery specialist in Mohali & Chandigarh for joint replacement procedures. Experience precision surgery.',
    keywords: [
      'robotic surgery mohali',
      'CORI robotic surgery',
      'robotic joint replacement',
      'advanced orthopedic surgery',
      'Dr. Saini Robotic Surgery Mohali',
      'Robotic Knee Replacement Mohali',
      'robotic surgery chandigarh',
      'CORI technology mohali',
      'robotic hip replacement',
      'precision joint surgery'
    ].join(', ')
  },
  'spine-surgery': {
    title: 'Best Spine Surgery in Mohali & Chandigarh | Dr. Gaurav Saini',
    description: 'Advanced spine surgery treatment by Dr. Gaurav Saini. Leading spine surgeon in Mohali & Chandigarh offering minimally invasive techniques for back pain and spinal conditions. Get relief today.',
    keywords: [
      'spine surgery mohali',
      'back pain specialist',
      'spinal surgery',
      'herniated disc treatment',
      'spine surgeon near me',
      'Orthopaedic Surgeon Mohali',
      'spine surgery chandigarh',
      'back pain treatment mohali',
      'minimally invasive spine surgery',
      'disc replacement surgery'
    ].join(', ')
  }
}

export const generateServiceMetadata = (service: string): Metadata => {
  const serviceData = servicesMetadata[service as keyof typeof servicesMetadata]
  return {
    title: serviceData.title,
    description: serviceData.description,
    keywords: serviceData.keywords,
    openGraph: {
      title: serviceData.title,
      description: serviceData.description
    },
    alternates: {
      canonical: `https://drgauravsainiortho.com/services/${service}`
    }
  }
}