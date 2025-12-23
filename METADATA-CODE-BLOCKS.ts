import type { Metadata } from 'next'

// ================================
// DEFAULT SITE METADATA (HOME PAGE)
// ================================

export const defaultMetadata: Metadata = {
  title: 'Best Orthopedic Surgeon in Mohali & Tricity - Dr.Gaurav Saini',
  description: 'Dr. Gaurav Saini is a leading orthopaedic surgeon in Mohali, Chandigarh & Tricity with 20+ years of experience in robotic knee replacement and joint care.',
  keywords: [
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
  ].join(', '),
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
    title: 'Dr. Gaurav Saini - Best Orthopedic Surgeon in Mohali',
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
};

// ===================
// ABOUT PAGE METADATA
// ===================

export const aboutMetadata: Metadata = {
  title: 'About Dr. Gaurav Saini - Senior Orthopaedic Surgeon in Mohali & Chandigarh',
  description: 'Meet Dr. Gaurav Saini, MBBS, MS, DNB, MNAMS - Senior Consultant Orthopaedic Surgeon with 20+ years of experience specializing in robotic joint replacement and sports injury treatment in Mohali & Chandigarh.',
  keywords: [
    'Dr Gaurav Saini orthopedic surgeon',
    'Senior orthopaedic surgeon Mohali',
    'Orthopaedic surgeon qualifications',
    'Robotic joint replacement specialist',
    'Sports injury treatment expert',
    'Orthopaedic surgeon experience Mohali',
    'Chandigarh orthopedic doctor',
    'Tricity orthopedic specialist'
  ].join(', '),
  openGraph: {
    title: 'About Dr. Gaurav Saini - Senior Orthopaedic Surgeon in Mohali & Chandigarh',
    description: 'Learn about Dr. Gaurav Saini\'s qualifications, experience, and expertise in robotic joint replacement and sports injury treatment in Mohali & Chandigarh.'
  },
  alternates: {
    canonical: 'https://drgauravsainiortho.com/about'
  }
};

// =================
// BLOG PAGE METADATA
// =================

export const blogMetadata: Metadata = {
  title: 'Orthopaedic Health Blog - Dr. Gaurav Saini Mohali & Chandigarh',
  description: 'Expert insights on knee replacement, hip surgery, sports injuries, and orthopaedic care from Dr. Gaurav Saini in Mohali & Chandigarh. Stay informed about the latest treatments.',
  keywords: [
    'Orthopaedic health blog',
    'Knee replacement information',
    'Hip surgery blog',
    'Sports injury prevention',
    'Joint pain remedies',
    'Robotic surgery benefits',
    'Orthopaedic care tips',
    'Mohali orthopedic blog',
    'Chandigarh health articles'
  ].join(','),
  openGraph: {
    title: 'Orthopaedic Health Blog - Dr. Gaurav Saini Mohali & Chandigarh',
    description: 'Stay updated with expert orthopaedic health information and treatment insights from Dr. Gaurav Saini in Mohali & Chandigarh.'
  },
  alternates: {
    canonical: 'https://drgauravsainiortho.com/blog'
  }
};


// ====================
// CONTACT PAGE METADATA
// ====================

export const contactMetadata: Metadata = {
  title: 'Contact Dr. Gaurav Saini - Book Appointment for Orthopaedic Care',
  description: 'Schedule a consultation with Dr. Gaurav Saini, the leading orthopedic surgeon in Mohali & Chandigarh. Get expert care for knee replacement, hip surgery, and sports injuries.',
  keywords: [
    'Book orthopedic appointment Mohali',
    'Contact orthopaedic surgeon',
    'Orthopaedic consultation Chandigarh',
    'Knee replacement appointment',
    'Hip surgery consultation',
    'Sports injury treatment booking',
    'Dr Gaurav Saini contact',
    'Tricity orthopedic appointment'
  ].join(','),
  openGraph: {
    title: 'Contact Dr. Gaurav Saini - Book Appointment for Orthopaedic Care',
    description: 'Schedule your consultation with Dr. Gaurav Saini for expert orthopaedic care in Mohali & Chandigarh.'
  },
  alternates: {
    canonical: 'https://drgauravsainiortho.com/contact'
  }
};

// =======================
// SERVICE PAGES METADATA
// =======================

export const servicesMetadata = {
  'knee-replacement': {
    title: 'Knee Replacement Surgery in Mohali & Chandigarh | Dr. Gaurav Saini',
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
  'hip-replacement': {
    title: 'Hip Replacement Surgery in Mohali & Chandigarh | Dr. Gaurav Saini',
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
  'sports-injury': {
    title: 'Sports Injury Treatment in Mohali & Chandigarh | Dr. Gaurav Saini',
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
  'spine-surgery': {
    title: 'Spine Surgery in Mohali & Chandigarh | Dr. Gaurav Saini',
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
  },
  'fracture-trauma': {
    title: 'Fracture & Trauma Care in Chandigarh & Mohali | Dr. Gaurav Saini',
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
    title: 'Robotic Joint Surgery in Mohali & Chandigarh | Dr. Gaurav Saini',
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
  }
};

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
};