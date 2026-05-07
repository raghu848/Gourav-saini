import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedMedicalBackground from "../components/AnimatedMedicalBackground";
import EmergencyContactButton from "../components/EmergencyContactButton";
import StickySocialButtons from "../components/StickySocialButtons";
import GoogleTagManager from "../components/GoogleAnalytics";
import { defaultMetadata } from "./metadata-improved";
import { Suspense } from "react";

// Preload fonts for better performance
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ['serif'],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ['sans-serif'],
});



export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';
  const GOOGLE_SEARCH_CONSOLE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_VERIFICATION || '';
  
  return (
    <html lang="en">
      <head>

        
        {GOOGLE_SEARCH_CONSOLE_VERIFICATION && (
          <meta 
            name="google-site-verification" 
            content={GOOGLE_SEARCH_CONSOLE_VERIFICATION} 
          />
        )}
        
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* Preload critical images */}
        <link rel="preload" as="image" href="/images/dr-saini-logo.webp" />
        
        {/* Resource hints for better performance */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        

        
        {/* Favicon configuration */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icons/favicon-192.png" />
        
        {/* Canonical URL will be handled by Next.js metadata */}
        
        {/* Physician / LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              "name": "Dr. Gaurav Saini",
              "image": "https://drgauravsainiortho.com/images/dr-saini-logo.webp",
              "description": "Senior Orthopaedic Surgeon in Mohali & Chandigarh specializing in Robotic Knee and Hip Replacement with 20+ years of experience.",
              "url": "https://drgauravsainiortho.com/",
              "telephone": "+91-9876777393",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Max Super Specialty Hospital, Cabin No 26 Ground floor, 56A, near Civil Hospital, Phase 6, Sector 56",
                "addressLocality": "Sahibzada Ajit Singh Nagar",
                "addressRegion": "Punjab",
                "postalCode": "160055",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "30.7188",
                "longitude": "76.7161"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "medicalSpecialty": [
                "Orthopaedic Surgery",
                "Hip Replacement Surgery",
                "Knee Replacement Surgery",
                "Sports Medicine"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "5240"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9876777393",
                "contactType": "emergency",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi", "Punjabi"]
              }
            })
          }}
        />
        
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Dr. Gaurav Saini",
              "url": "https://drgauravsainiortho.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://drgauravsainiortho.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased relative overflow-x-hidden`}
      >
        {(GA_MEASUREMENT_ID || GTM_ID) && (
          <Suspense fallback={null}>
            <GoogleTagManager 
              GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} 
              GTM_ID={GTM_ID} 
            />
          </Suspense>
        )}
        <AnimatedMedicalBackground />
        <Navbar />
        <main className="min-h-screen relative z-10 pt-24 lg:pt-32">
          {children}
        </main>
        <Footer />
        <EmergencyContactButton />
        <StickySocialButtons />
      </body>
    </html>
  );
}