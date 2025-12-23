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
  title: {
    default: 'Dr. Gaurav Saini - Orthopedic Surgeon Mohali & Chandigarh',
    template: '%s | Dr. Gaurav Saini'
  },
  description: 'Expert orthopaedic surgeon in Mohali. Specializing in robotic knee replacement and joint surgery.',
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
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/icons/favicon-192.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://drgauravsainiortho.com',
    title: 'Dr. Gaurav Saini - Orthopedic Surgeon Mohali & Chandigarh',
    description: 'Expert orthopaedic surgeon in Mohali. Specializing in robotic knee replacement and joint surgery.',
    siteName: 'Dr. Gaurav Saini - Orthopaedic Surgeon Mohali',
    images: [{
      url: '/images/dr-saini-logo.jpg',
      width: 1200,
      height: 630,
      alt: 'Dr. Gaurav Saini - Best Orthopaedic Surgeon in Mohali & Chandigarh'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Gaurav Saini - Orthopedic Surgeon Mohali',
    description: 'Expert in robotic knee replacement and joint surgery.',
    images: ['/images/dr-saini-logo.jpg'],
    creator: '@DrGauravSaini'
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
  },
  verification: {
    google: 'googlef908ecc32b2da324.html',
  }
}

export const servicesMetadata = {
  'knee-replacement': {
    title: 'Knee Replacement Surgery | Dr. Gaurav Saini',
    description: 'Advanced robotic knee replacement surgery. Expert in total & partial knee replacement using CORI technology.',
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
    title: 'Sports Injury Treatment | Dr. Gaurav Saini',
    description: 'Expert sports injury treatment and arthroscopy. Offering ACL reconstruction and advanced arthroscopic surgery.',
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
    title: 'Hip Replacement Surgery | Dr. Gaurav Saini',
    description: 'Advanced hip replacement surgery. Expert in total hip replacement and minimally invasive techniques.',
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
    title: 'Trauma Care | Dr. Gaurav Saini',
    description: 'Emergency trauma care and fracture treatment. Offering 24/7 emergency orthopedic services.',
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
    title: 'Robotic Surgery | Dr. Gaurav Saini',
    description: 'Advanced robotic surgery using CORI technology. Specialist in joint replacement procedures.',
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
  'joint-replacement-center': {
    title: 'Joint Replacement Center | Dr. Gaurav Saini',
    description: 'Advanced joint replacement center with robotic surgery using CORI technology for knee and hip replacements.',
    keywords: [
      'joint replacement center mohali',
      'robotic joint replacement',
      'CORI technology',
      'knee hip replacement',
      'Joint Replacement Specialist Mohali',
      'joint replacement center chandigarh',
      'robotic knee replacement mohali',
      'hip replacement surgery chandigarh'
    ].join(', ')
  },
  'sports-injury-arthroscopy': {
    title: 'Sports Injury & Arthroscopy | Dr. Gaurav Saini',
    description: 'Advanced sports injury treatment and arthroscopy. Expert in ACL reconstruction and minimally invasive techniques.',
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
  'arthroscopic-surgery': {
    title: 'Arthroscopic Surgery | Dr. Gaurav Saini',
    description: 'Minimally invasive arthroscopic surgery for joint problems with faster recovery and less scarring.',
    keywords: [
      'arthroscopic surgery mohali',
      'knee arthroscopy',
      'shoulder arthroscopy',
      'hip arthroscopy',
      'minimally invasive joint surgery',
      'arthroscopy surgeon',
      'joint surgery mohali',
      'arthroscopic surgery chandigarh',
      'knee surgery mohali',
      'shoulder surgery chandigarh'
    ].join(', ')
  },
  'fracture-trauma-care': {
    title: 'Fracture & Trauma Care | Dr. Gaurav Saini',
    description: 'Emergency orthopedic surgeon in Mohali & Tricity providing trauma care with precision diagnostics for fractures and complex injuries.',
    keywords: [
      'fracture care mohali',
      'trauma care chandigarh',
      'emergency orthopedic care',
      'complex fracture treatment',
      'polytrauma care',
      'Trauma Care Hospital Chandigarh',
      'Orthopaedic Surgeon Mohali',
      'emergency fracture care mohali',
      '24 hour orthopedic hospital',
      'trauma care mohali'
    ].join(', ')
  },
  'robotic-joint-replacement': {
    title: 'Robotic Joint Replacement | Dr. Gaurav Saini',
    description: 'Advanced robotic joint replacement with CORI technology for precise knee and hip surgery with faster recovery.',
    keywords: [
      'robotic joint replacement mohali',
      'CORI robotic surgery',
      'robotic knee replacement',
      'robotic hip replacement',
      'joint replacement surgery',
      'Dr. Saini Robotic Surgery Mohali',
      'Robotic Knee Replacement Mohali',
      'robotic surgery chandigarh',
      'CORI technology mohali',
      'precision joint surgery'
    ].join(', ')
  },
  'sports-injury-treatment': {
    title: 'Sports Injury Treatment | Dr. Gaurav Saini',
    description: 'Top orthopedic surgeon in Tricity & Mohali specializing in sports injury treatment including ACL tears and meniscus injuries.',
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
  'spine-surgery': {
    title: 'Spine Surgery | Dr. Gaurav Saini',
    description: 'Advanced spine surgery treatment. Offering minimally invasive techniques for back pain and spinal conditions.',
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
      canonical: `https://drgauravsainiortho.com/services/${service}/`
    }
  }
}