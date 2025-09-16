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
  'Best orthopedic doctor Max Hospital'
]

export const defaultMetadata: Metadata = {
  title: 'Dr. Gaurav Saini - Best Orthopaedic & Joint Replacement Surgeon in Mohali',
  description: 'Dr. Gaurav Saini is the best orthopaedic surgeon in Mohali, specializing in robotic knee replacement, sports injuries, and joint replacement surgery. Top-rated orthopedic surgeon in tricity with 20+ years experience.',
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
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://drgauravsaini.com',
    title: 'Dr. Gaurav Saini - Leading Orthopaedic Surgeon in Mohali | Joint Replacement Specialist',
    description: 'Best orthopaedic surgeon in Mohali & tricity area. Expert in robotic knee replacement, sports injuries, and joint surgery with 20+ years experience. Book appointment now.',
    siteName: 'Dr. Gaurav Saini - Orthopaedic Surgeon',
    images: [{
      url: '/images/dr-saini-professional.jpg',
      width: 1200,
      height: 630,
      alt: 'Dr. Gaurav Saini - Best Orthopaedic Surgeon in Mohali'
    }]
  },
  authors: [{
    name: 'Dr. Gaurav Saini',
    url: 'https://drgauravsaini.com'
  }],
  formatDetection: {
    telephone: true,
    email: true,
    address: true
  },
  metadataBase: new URL('https://drgauravsaini.com')
}

export const servicesMetadata = {
  'knee-replacement': {
    title: 'Best Knee Replacement Surgery in Mohali | Dr. Gaurav Saini',
    description: 'Advanced robotic knee replacement surgery by Dr. Gaurav Saini, the best orthopedic surgeon in Mohali. Expert in total & partial knee replacement using CORI technology.',
    keywords: [
      'knee replacement surgery in mohali',
      'best knee replacement surgeon',
      'robotic knee surgery',
      'total knee replacement cost',
      'CORI robotic knee surgery',
      'partial knee replacement'
    ].join(', ')
  },
  'sports-injury': {
    title: 'Best Sports Injury Treatment in Mohali | Dr. Gaurav Saini',
    description: 'Expert sports injury treatment and arthroscopy by Dr. Gaurav Saini. Leading sports medicine specialist in Mohali offering ACL reconstruction and advanced arthroscopic surgery.',
    keywords: [
      'sports injury treatment mohali',
      'ACL surgery specialist',
      'arthroscopy surgeon',
      'sports medicine doctor',
      'knee arthroscopy',
      'ligament repair'
    ].join(', ')
  },
  'hip-replacement': {
    title: 'Best Hip Replacement Surgery in Mohali | Dr. Gaurav Saini',
    description: 'Advanced hip replacement surgery by Dr. Gaurav Saini, the leading orthopedic surgeon in Mohali. Expert in total hip replacement and minimally invasive techniques.',
    keywords: [
      'hip replacement surgery mohali',
      'best hip replacement surgeon',
      'total hip replacement',
      'minimally invasive hip surgery',
      'hip pain treatment',
      'hip arthritis specialist'
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
    }
  }
}