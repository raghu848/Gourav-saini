import type { Metadata } from 'next'

// Default keywords for the entire site
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

// Default metadata for the home page
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
      url: 'https://drgauravsainiortho.com/images/dr-saini-logo.jpg',
      width: 1200,
      height: 630,
      alt: 'Dr. Gaurav Saini - Best Orthopaedic Surgeon in Mohali & Chandigarh'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Gaurav Saini - Best Orthopedic Surgeon in Mohali',
    description: 'Expert in robotic knee replacement, sports injuries, and joint surgery with 20+ years experience.',
    images: ['https://drgauravsainiortho.com/images/dr-saini-logo.jpg'],
    site: '@DrGauravSaini'
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
  other: {
    'twitter:site': '@DrGauravSaini',
    'twitter:creator': '@DrGauravSaini',
    'twitter:url': 'https://drgauravsainiortho.com',
    'twitter:card': 'summary_large_image',
  }
}

// Metadata for the About page
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
    type: 'website',
    locale: 'en_IN',
    url: 'https://drgauravsainiortho.com/about/',
    title: 'About Dr. Gaurav Saini - Senior Orthopaedic Surgeon in Mohali & Chandigarh',
    description: 'Learn about Dr. Gaurav Saini\'s qualifications, experience, and expertise in robotic joint replacement and sports injury treatment in Mohali & Chandigarh.',
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
    title: 'About Dr. Gaurav Saini - Senior Orthopaedic Surgeon in Mohali & Chandigarh',
    description: 'Learn about Dr. Gaurav Saini\'s qualifications, experience, and expertise in robotic joint replacement and sports injury treatment in Mohali & Chandigarh.',
    images: ['https://drgauravsainiortho.com/images/dr-saini-logo.jpg'],
    site: '@DrGauravSaini'
  },
  alternates: {
    canonical: 'https://drgauravsainiortho.com/about/'
  },
  other: {
    'twitter:site': '@DrGauravSaini',
    'twitter:creator': '@DrGauravSaini',
    'twitter:url': 'https://drgauravsainiortho.com/about/',
    'twitter:card': 'summary_large_image',
  }
}

// Metadata for the Blog page
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
  ].join(', '),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://drgauravsainiortho.com/blog/',
    title: 'Orthopaedic Health Blog - Dr. Gaurav Saini Mohali & Chandigarh',
    description: 'Stay updated with expert orthopaedic health information and treatment insights from Dr. Gaurav Saini in Mohali & Chandigarh.',
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
    title: 'Orthopaedic Health Blog - Dr. Gaurav Saini Mohali & Chandigarh',
    description: 'Stay updated with expert orthopaedic health information and treatment insights from Dr. Gaurav Saini in Mohali & Chandigarh.',
    images: ['https://drgauravsainiortho.com/images/dr-saini-logo.jpg'],
    site: '@DrGauravSaini'
  },
  alternates: {
    canonical: 'https://drgauravsainiortho.com/blog/'
  },
  other: {
    'twitter:site': '@DrGauravSaini',
    'twitter:creator': '@DrGauravSaini',
    'twitter:url': 'https://drgauravsainiortho.com/blog/',
    'twitter:card': 'summary_large_image',
  }
}



// Metadata for the Contact page
export const contactMetadata: Metadata = {
  title: 'Contact Dr. Gaurav Saini - Book Appointment for Orthopaedic Care',
  description: 'Schedule a consultation with Dr. Gaurav Saini, the leading orthopaedic surgeon in Mohali & Chandigarh. Get expert care for knee replacement, hip surgery, and sports injuries.',
  keywords: [
    'Book orthopedic appointment Mohali',
    'Contact orthopaedic surgeon',
    'Orthopaedic consultation Chandigarh',
    'Knee replacement appointment',
    'Hip surgery consultation',
    'Sports injury treatment booking',
    'Dr Gaurav Saini contact',
    'Tricity orthopedic appointment'
  ].join(', '),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://drgauravsainiortho.com/contact',
    title: 'Contact Dr. Gaurav Saini - Book Appointment for Orthopaedic Care',
    description: 'Schedule your consultation with Dr. Gaurav Saini for expert orthopaedic care in Mohali & Chandigarh.',
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
    title: 'Contact Dr. Gaurav Saini - Book Appointment for Orthopaedic Care',
    description: 'Schedule your consultation with Dr. Gaurav Saini for expert orthopaedic care in Mohali & Chandigarh.',
    images: ['https://drgauravsainiortho.com/images/dr-saini-logo.jpg'],
    site: '@DrGauravSaini'
  },
  alternates: {
    canonical: 'https://drgauravsainiortho.com/contact'
  },
  other: {
    'twitter:site': '@DrGauravSaini',
    'twitter:creator': '@DrGauravSaini',
    'twitter:url': 'https://drgauravsainiortho.com/contact',
    'twitter:card': 'summary_large_image',
  }
}

// Metadata for service pages
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
  },
  'arthroscopic-surgery': {
    title: 'Arthroscopic Surgery in Mohali & Chandigarh | Dr. Gaurav Saini',
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
    title: 'Fracture & Trauma Care in Chandigarh & Mohali | Dr. Gaurav Saini',
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
    title: 'Robotic Joint Replacement in Mohali & Chandigarh | Dr. Gaurav Saini',
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
    title: 'Sports Injury Treatment in Mohali & Chandigarh | Dr. Gaurav Saini',
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
  'sports-injury-arthroscopy': {
    title: 'Sports Injury & Arthroscopy in Mohali & Chandigarh | Dr. Gaurav Saini',
    description: 'Trusted sports injury doctor near me for advanced arthroscopic knee surgery and expert orthopedic care in Mohali & Chandigarh.',
    keywords: [
      'sports injury doctor near me',
      'sports injury clinic near me',
      'arthroscopy surgeon near me',
      'knee arthroscopy surgeon',
      'arthroscopic knee surgery'
    ].join(', ')
  },
  'joint-replacement-center': {
    title: 'Joint Replacement Center in Mohali & Chandigarh | Dr. Gaurav Saini',
    description: 'Advanced joint replacement center with robotic surgery using CORI technology for knee and hip replacements.',
    keywords: [
      'joint replacement center mohali',
      'robotic joint replacement',
      'CORI technology',
      'knee hip replacement',
      'joint replacement center chandigarh',
      'robotic knee replacement mohali',
      'hip replacement surgery chandigarh'
    ].join(', ')
  },
  'knee-replacement-surgery': {
    title: 'Knee Replacement Surgery in Mohali & Chandigarh | Dr. Gaurav Saini',
    description: 'Experience world-class robotic knee replacement in Mohali with Dr. Gaurav Saini. Advanced, precise orthopaedic care for superior knee, hip, and joint health.',
    keywords: [
      'robotic knee replacement',
      'robotic knee replacement in chandigarh',
      'robotic knee surgery',
      'robotic knee replacement near me',
      'knee replacement surgery in mohali',
      'best knee replacement surgeon',
      'total knee replacement',
      'CORI robotic knee surgery',
      'partial knee replacement',
      'Robotic Knee Replacement Mohali',
      'Best Knee Surgeon in Chandigarh',
      'Dr. Saini Robotic Surgery Mohali'
    ].join(', ')
  },
  'hip-replacement-surgery': {
    title: 'Hip Replacement Surgery in Mohali & Chandigarh | Dr. Gaurav Saini',
    description: 'Get trusted care with Dr. Gaurav Saini, the best knee replacement surgeon in Chandigarh. Advanced joint replacement & orthopedic care. Book today.',
    keywords: [
      'best knee replacement surgeon in chandigarh',
      'joint replacement hospital near me',
      'hip replacement surgery mohali',
      'best hip replacement surgeon',
      'total hip replacement',
      'minimally invasive hip surgery',
      'hip pain treatment',
      'hip arthritis specialist',
      'Joint Replacement Specialist Mohali',
      'Affordable Joint Replacement Surgery Chandigarh'
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
      type: 'website',
      locale: 'en_IN',
      url: `https://drgauravsainiortho.com/services/${service}`,
      title: serviceData.title,
      description: serviceData.description,
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
      title: serviceData.title,
      description: serviceData.description,
      images: ['https://drgauravsainiortho.com/images/dr-saini-logo.jpg'],
      site: '@DrGauravSaini'
    },
    alternates: {
      canonical: `https://drgauravsainiortho.com/services/${service}`
    },
    other: {
      'twitter:site': '@DrGauravSaini',
      'twitter:creator': '@DrGauravSaini',
      'twitter:url': `https://drgauravsainiortho.com/services/${service}`,
      'twitter:card': 'summary_large_image',
    }
  }
}

// Metadata for the Book Appointment page
export const bookAppointmentMetadata: Metadata = {
  title: 'Book Appointment | Dr. Gaurav Saini – Hip & Knee Surgery',
  description: 'Book an appointment with Dr. Gaurav Saini for advanced orthopedic care, including robotic joint replacement, hip & knee surgery, and joint pain treatment.',
  keywords: 'best doctor for knee pain near me, book orthopedic appointment, dr gaurav saini appointment',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://drgauravsainiortho.com/book-appointment/',
    title: 'Book Appointment | Dr. Gaurav Saini – Hip & Knee Surgery',
    description: 'Book an appointment with Dr. Gaurav Saini for advanced orthopedic care, including robotic joint replacement, hip & knee surgery, and joint pain treatment.',
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
    title: 'Book Appointment | Dr. Gaurav Saini – Hip & Knee Surgery',
    description: 'Book an appointment with Dr. Gaurav Saini for advanced orthopedic care, including robotic joint replacement, hip & knee surgery, and joint pain treatment.',
    images: ['https://drgauravsainiortho.com/images/dr-saini-logo.jpg'],
    site: '@DrGauravSaini'
  },
  alternates: {
    canonical: 'https://drgauravsainiortho.com/book-appointment/'
  },
  other: {
    'twitter:site': '@DrGauravSaini',
    'twitter:creator': '@DrGauravSaini',
    'twitter:url': 'https://drgauravsainiortho.com/book-appointment/',
    'twitter:card': 'summary_large_image',
  }
}

// Metadata for the Testimonials page
export const testimonialsMetadata: Metadata = {
  title: 'Trusted Orthopaedic Care | Patient Stories of Dr. Gaurav Saini',
  description: 'Read orthopaedic surgeon patient reviews for Dr. Gaurav Saini in Mohali & Chandigarh. Discover why patients trust his expert hip, knee & spine care.',
  keywords: 'Dr Gaurav Saini orthopaedic reviews, orthopedic doctor testimonials, best orthopedic doctor in mohali reviews, orthopaedic surgeon patient reviews',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://drgauravsainiortho.com/testimonials/',
    title: 'Trusted Orthopaedic Care | Patient Stories of Dr. Gaurav Saini',
    description: 'Read orthopaedic surgeon patient reviews for Dr. Gaurav Saini in Mohali & Chandigarh. Discover why patients trust his expert hip, knee & spine care.',
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
    title: 'Trusted Orthopaedic Care | Patient Stories of Dr. Gaurav Saini',
    description: 'Read orthopaedic surgeon patient reviews for Dr. Gaurav Saini in Mohali & Chandigarh. Discover why patients trust his expert hip, knee & spine care.',
    images: ['https://drgauravsainiortho.com/images/dr-saini-logo.jpg'],
    site: '@DrGauravSaini'
  },
  alternates: {
    canonical: 'https://drgauravsainiortho.com/testimonials/'
  },
  other: {
    'twitter:site': '@DrGauravSaini',
    'twitter:creator': '@DrGauravSaini',
    'twitter:url': 'https://drgauravsainiortho.com/testimonials/',
    'twitter:card': 'summary_large_image',
  }
}