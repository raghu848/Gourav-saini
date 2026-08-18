import type { Metadata } from 'next'

// Deduplicated, high-intent default keywords for the entire site
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
]

// Default metadata for the home page (CTR-optimized)
export const defaultMetadata: Metadata = {
  title: 'Best Orthopaedic Surgeon in Mohali | Dr. Gaurav Saini',
  description: 'Consult Dr. Gaurav Saini, top orthopaedic surgeon in Mohali & Chandigarh with 20+ yrs experience in Robotic Knee & Hip Replacement at Max Hospital. Book now.',
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
    title: 'Best Orthopaedic Surgeon in Mohali | Dr. Gaurav Saini',
    description: 'Consult Dr. Gaurav Saini, top orthopaedic surgeon in Mohali & Chandigarh with 20+ yrs experience in Robotic Knee & Hip Replacement at Max Hospital. Book now.',
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
    title: 'Best Orthopaedic Surgeon in Mohali | Dr. Gaurav Saini',
    description: 'Consult Dr. Gaurav Saini, top orthopaedic surgeon in Mohali & Chandigarh with 20+ yrs experience in Robotic Knee & Hip Replacement at Max Hospital.',
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
    canonical: 'https://drgauravsainiortho.com/'
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
  title: 'About Dr. Gaurav Saini | Senior Orthopaedic Surgeon Mohali',
  description: 'Learn about Dr. Gaurav Saini (MBBS, MS, DNB) - Senior Consultant Orthopaedic Surgeon in Mohali & Chandigarh with 20+ years experience in robotic joint care.',
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
    title: 'About Dr. Gaurav Saini | Senior Orthopaedic Surgeon Mohali',
    description: 'Learn about Dr. Gaurav Saini (MBBS, MS, DNB) - Senior Consultant Orthopaedic Surgeon in Mohali & Chandigarh with 20+ years experience in robotic joint care.',
    siteName: 'Dr. Gaurav Saini - Orthopaedic Surgeon',
    images: [{
      url: 'https://drgauravsainiortho.com/images/dr-saini-logo.jpg',
      width: 1200,
      height: 630,
      alt: 'About Dr. Gaurav Saini - Orthopaedic Surgeon'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Dr. Gaurav Saini | Senior Orthopaedic Surgeon Mohali',
    description: 'Learn about Dr. Gaurav Saini (MBBS, MS, DNB) - Senior Consultant Orthopaedic Surgeon in Mohali & Chandigarh.',
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
  title: 'Orthopaedic Health Blog | Dr. Gaurav Saini Mohali',
  description: 'Expert medical articles on knee replacement, hip surgery & sports injuries by Dr. Gaurav Saini, top orthopaedic surgeon in Mohali & Chandigarh.',
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
    title: 'Orthopaedic Health Blog | Dr. Gaurav Saini Mohali',
    description: 'Expert medical articles on knee replacement, hip surgery & sports injuries by Dr. Gaurav Saini, top orthopaedic surgeon in Mohali & Chandigarh.',
    siteName: 'Dr. Gaurav Saini - Orthopaedic Surgeon',
    images: [{
      url: 'https://drgauravsainiortho.com/images/dr-saini-logo.jpg',
      width: 1200,
      height: 630,
      alt: 'Orthopaedic Health Blog - Dr. Gaurav Saini'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orthopaedic Health Blog | Dr. Gaurav Saini Mohali',
    description: 'Expert medical articles on knee replacement, hip surgery & sports injuries by Dr. Gaurav Saini.',
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
  title: 'Contact Dr. Gaurav Saini | Orthopedic Clinic Mohali',
  description: 'Book consultation with Dr. Gaurav Saini, senior orthopaedic surgeon at Max Hospital Mohali. Expert care for knee, hip & sports injuries. Call today.',
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
    title: 'Contact Dr. Gaurav Saini | Orthopedic Clinic Mohali',
    description: 'Book consultation with Dr. Gaurav Saini, senior orthopaedic surgeon at Max Hospital Mohali. Expert care for knee, hip & sports injuries.',
    siteName: 'Dr. Gaurav Saini - Orthopaedic Surgeon',
    images: [{
      url: 'https://drgauravsainiortho.com/images/dr-saini-logo.jpg',
      width: 1200,
      height: 630,
      alt: 'Contact Dr. Gaurav Saini'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Dr. Gaurav Saini | Orthopedic Clinic Mohali',
    description: 'Book consultation with Dr. Gaurav Saini, senior orthopaedic surgeon at Max Hospital Mohali.',
    images: ['https://drgauravsainiortho.com/images/dr-saini-logo.jpg'],
    site: '@DrGauravSaini'
  },
  alternates: {
    canonical: 'https://drgauravsainiortho.com/contact/'
  },
  other: {
    'twitter:site': '@DrGauravSaini',
    'twitter:creator': '@DrGauravSaini',
    'twitter:url': 'https://drgauravsainiortho.com/contact',
    'twitter:card': 'summary_large_image',
  }
}

// Service pages metadata map (Eliminating Cannibalization with Unique Primary Targets)
export const servicesMetadata = {
  'knee-replacement': {
    title: 'Knee Replacement Surgeon in Chandigarh | Dr. Gaurav Saini',
    description: 'Looking for top knee replacement surgeon in Chandigarh & Mohali? Dr. Gaurav Saini offers total & partial knee surgery at Max Hospital. Book appointment!',
    keywords: [
      'knee replacement surgeon in chandigarh',
      'total knee replacement mohali',
      'partial knee replacement surgery',
      'bilateral knee joint replacement',
      'knee osteoarthritis doctor',
      'knee replacement recovery'
    ].join(', ')
  },
  'hip-replacement': {
    title: 'Hip Replacement Surgery in Mohali | Dr. Gaurav Saini',
    description: 'Top hip replacement surgery in Mohali & Chandigarh by Dr. Gaurav Saini. Specializing in total hip arthroplasty & AVN treatment at Max Hospital. Book now.',
    keywords: [
      'hip replacement surgery in mohali',
      'best hip replacement surgeon chandigarh',
      'total hip arthroplasty',
      'avascular necrosis treatment mohali',
      'direct anterior hip replacement',
      'hip replacement cost'
    ].join(', ')
  },
  'sports-injury': {
    title: 'Sports Injury Doctor in Mohali | ACL & Arthroscopy Expert',
    description: 'Consult Dr. Gaurav Saini, leading sports injury doctor in Mohali for ACL reconstruction & knee arthroscopy. Fast-track recovery for athletes. Book appointment.',
    keywords: [
      'sports injury doctor in mohali',
      'knee arthroscopy surgeon chandigarh',
      'acl tear reconstruction specialist',
      'meniscus repair surgery',
      'rotator cuff arthroscopy tricity',
      'sports medicine clinic'
    ].join(', ')
  },
  'spine-surgery': {
    title: 'Spine Specialist in Mohali | Back Pain & Disc Surgery',
    description: 'Relieve severe back pain & sciatica with Dr. Gaurav Saini, top spine specialist in Mohali. Expert in minimally invasive disc surgery at Max Hospital. Call now.',
    keywords: [
      'spine specialist in mohali',
      'back pain doctor chandigarh',
      'sciatica treatment specialist',
      'herniated disc surgery mohali',
      'spinal decompression therapy',
      'minimally invasive spine surgery'
    ].join(', ')
  },
  'fracture-trauma': {
    title: '24/7 Fracture Doctor in Mohali | Emergency Trauma Care',
    description: 'Immediate bone fracture treatment & emergency trauma surgery in Mohali by Dr. Gaurav Saini at Max Hospital. 24/7 care for complex fractures. Call now.',
    keywords: [
      'fracture doctor in mohali',
      'bone fracture specialist chandigarh',
      'orthopedic trauma surgeon',
      'emergency fracture care mohali',
      '24 hour orthopedic hospital',
      'complex fracture treatment'
    ].join(', ')
  },
  'robotic-surgery': {
    title: 'Robotic Knee Replacement in Mohali | Dr. Gaurav Saini',
    description: 'Get precision CORI robotic knee replacement in Mohali by Dr. Gaurav Saini. 99% accuracy, zero bone loss & faster recovery at Max Hospital. Book consultation!',
    keywords: [
      'robotic knee replacement in mohali',
      'cori robotic knee surgery',
      'robotic total knee arthroplasty',
      'robotic knee replacement cost',
      'precision joint replacement chandigarh',
      'robotic knee surgery recovery'
    ].join(', ')
  },
  'arthroscopic-surgery': {
    title: 'Keyhole Arthroscopic Surgeon Mohali | Joint Repair',
    description: 'Advanced keyhole arthroscopic surgery in Mohali & Chandigarh by Dr. Gaurav Saini. Minimally invasive knee, shoulder & hip joint repair with faster recovery.',
    keywords: [
      'keyhole arthroscopic surgeon mohali',
      'knee arthroscopy',
      'shoulder arthroscopy',
      'hip arthroscopy',
      'minimally invasive joint surgery',
      'arthroscopy surgeon tricity'
    ].join(', ')
  },
  'fracture-trauma-care': {
    title: '24/7 Fracture Doctor in Mohali | Emergency Trauma Care',
    description: 'Immediate bone fracture treatment & emergency trauma surgery in Mohali by Dr. Gaurav Saini at Max Hospital. 24/7 care for complex fractures. Call now.',
    keywords: [
      'fracture doctor in mohali',
      'bone fracture specialist chandigarh',
      'orthopedic trauma surgeon',
      'emergency fracture care mohali',
      '24 hour orthopedic hospital',
      'complex fracture treatment'
    ].join(', ')
  },
  'robotic-joint-replacement': {
    title: 'Robotic Knee Replacement in Mohali | Dr. Gaurav Saini',
    description: 'Get precision CORI robotic knee replacement in Mohali by Dr. Gaurav Saini. 99% accuracy, zero bone loss & faster recovery at Max Hospital. Book consultation!',
    keywords: [
      'robotic knee replacement in mohali',
      'cori robotic knee surgery',
      'robotic total knee arthroplasty',
      'robotic knee replacement cost',
      'precision joint replacement chandigarh',
      'robotic knee surgery recovery'
    ].join(', ')
  },
  'sports-injury-treatment': {
    title: 'Sports Injury Doctor in Mohali | ACL & Arthroscopy Expert',
    description: 'Consult Dr. Gaurav Saini, leading sports injury doctor in Mohali for ACL reconstruction & knee arthroscopy. Fast-track recovery for athletes. Book appointment.',
    keywords: [
      'sports injury doctor in mohali',
      'knee arthroscopy surgeon chandigarh',
      'acl tear reconstruction specialist',
      'meniscus repair surgery',
      'rotator cuff arthroscopy tricity',
      'sports medicine clinic'
    ].join(', ')
  },
  'sports-injury-arthroscopy': {
    title: 'Sports Injury Doctor in Mohali | ACL & Arthroscopy Expert',
    description: 'Consult Dr. Gaurav Saini, leading sports injury doctor in Mohali for ACL reconstruction & knee arthroscopy. Fast-track recovery for athletes. Book appointment.',
    keywords: [
      'sports injury doctor in mohali',
      'knee arthroscopy surgeon chandigarh',
      'acl tear reconstruction specialist',
      'meniscus repair surgery',
      'rotator cuff arthroscopy tricity',
      'sports medicine clinic'
    ].join(', ')
  },
  'joint-replacement-center': {
    title: 'Joint Replacement Centre Mohali | Max Hospital Care',
    description: 'Visit the top joint replacement centre in Mohali led by Dr. Gaurav Saini. Expert in robotic joint surgery, revision knee & hip replacement. Schedule today.',
    keywords: [
      'joint replacement centre mohali',
      'joint surgery hospital chandigarh',
      'revision knee joint replacement',
      'revision hip arthroplasty mohali',
      'top joint care facility'
    ].join(', ')
  },
  'knee-replacement-surgery': {
    title: 'Knee Replacement Surgeon in Chandigarh | Dr. Gaurav Saini',
    description: 'Looking for top knee replacement surgeon in Chandigarh & Mohali? Dr. Gaurav Saini offers total & partial knee surgery at Max Hospital. Book appointment!',
    keywords: [
      'knee replacement surgeon in chandigarh',
      'total knee replacement mohali',
      'partial knee replacement surgery',
      'bilateral knee joint replacement',
      'knee osteoarthritis doctor',
      'knee replacement recovery'
    ].join(', ')
  },
  'hip-replacement-surgery': {
    title: 'Hip Replacement Surgery in Mohali | Dr. Gaurav Saini',
    description: 'Top hip replacement surgery in Mohali & Chandigarh by Dr. Gaurav Saini. Specializing in total hip arthroplasty & AVN treatment at Max Hospital. Book now.',
    keywords: [
      'hip replacement surgery in mohali',
      'best hip replacement surgeon chandigarh',
      'total hip arthroplasty',
      'avascular necrosis treatment mohali',
      'direct anterior hip replacement',
      'hip replacement cost'
    ].join(', ')
  }
}

export const generateServiceMetadata = (service: string): Metadata => {
  const serviceData = servicesMetadata[service as keyof typeof servicesMetadata] || {
    title: 'Orthopaedic Services in Mohali & Chandigarh | Dr. Gaurav Saini',
    description: 'Consult Dr. Gaurav Saini for robotic knee replacement, hip surgery & sports injury treatments at Max Hospital Mohali. Book an appointment today.',
    keywords: 'orthopaedic doctor in mohali, robotic knee replacement, hip surgery chandigarh'
  }
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
        alt: serviceData.title
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
      canonical: `https://drgauravsainiortho.com/services/${service}/`
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
  title: 'Book Appointment | Dr. Gaurav Saini Orthopaedic Surgeon',
  description: 'Book an appointment with Dr. Gaurav Saini at Max Hospital Mohali for robotic knee replacement, hip surgery & joint pain treatment. Instant online booking.',
  keywords: 'best doctor for knee pain near me, book orthopedic appointment, dr gaurav saini appointment',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://drgauravsainiortho.com/book-appointment/',
    title: 'Book Appointment | Dr. Gaurav Saini Orthopaedic Surgeon',
    description: 'Book an appointment with Dr. Gaurav Saini at Max Hospital Mohali for robotic knee replacement, hip surgery & joint pain treatment.',
    siteName: 'Dr. Gaurav Saini - Orthopaedic Surgeon',
    images: [{
      url: 'https://drgauravsainiortho.com/images/dr-saini-logo.jpg',
      width: 1200,
      height: 630,
      alt: 'Book Appointment - Dr. Gaurav Saini'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Appointment | Dr. Gaurav Saini Orthopaedic Surgeon',
    description: 'Book an appointment with Dr. Gaurav Saini at Max Hospital Mohali.',
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
  title: 'Patient Reviews & Testimonials | Dr. Gaurav Saini Mohali',
  description: 'Read patient reviews & recovery stories for Dr. Gaurav Saini, leading orthopaedic & robotic knee replacement surgeon in Mohali & Chandigarh. 4.9 Star Rating.',
  keywords: 'Dr Gaurav Saini orthopaedic reviews, orthopedic doctor testimonials, best orthopedic doctor in mohali reviews, orthopaedic surgeon patient reviews',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://drgauravsainiortho.com/testimonials/',
    title: 'Patient Reviews & Testimonials | Dr. Gaurav Saini Mohali',
    description: 'Read patient reviews & recovery stories for Dr. Gaurav Saini, leading orthopaedic & robotic knee replacement surgeon in Mohali & Chandigarh.',
    siteName: 'Dr. Gaurav Saini - Orthopaedic Surgeon',
    images: [{
      url: 'https://drgauravsainiortho.com/images/dr-saini-logo.jpg',
      width: 1200,
      height: 630,
      alt: 'Patient Reviews - Dr. Gaurav Saini'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patient Reviews & Testimonials | Dr. Gaurav Saini Mohali',
    description: 'Read patient reviews & recovery stories for Dr. Gaurav Saini in Mohali & Chandigarh.',
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