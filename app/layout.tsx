import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedMedicalBackground from "../components/AnimatedMedicalBackground";
import EmergencyContactButton from "../components/EmergencyContactButton";
import StickySocialButtons from "../components/StickySocialButtons";
import GoogleTagManager from "../components/GoogleAnalytics";
import { homepageMetadata } from "./seo-metadata";
import { Suspense } from 'react';

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

// Critical CSS for above-the-fold content
const criticalCSS = `
.fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.hover-effect {
  transition: all 0.2s ease-in-out;
}

.hover-effect:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.font-serif {
  font-family: var(--font-playfair), serif;
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-inter), Arial, Helvetica, sans-serif;
}

:root {
  --background: #ffffff;
  --foreground: #171717;
}
`;

export const metadata: Metadata = homepageMetadata;

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
        {/* Inline critical CSS */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {GOOGLE_SEARCH_CONSOLE_VERIFICATION && (
          <meta 
            name="google-site-verification" 
            content={GOOGLE_SEARCH_CONSOLE_VERIFICATION} 
          />
        )}
        
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon configuration */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icons/favicon-192.png" />
        
        {/* Canonical URL will be handled by Next.js metadata */}
        
        {/* MedicalOrganization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "Dr. Gaurav Saini",
              "url": "https://drgauravsainiortho.com",
              "logo": "https://drgauravsainiortho.com/images/dr-saini-logo.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Max Super Specialty Hospital, Cabin No 26 Ground floor, 56A, near Civil Hospital, Phase 6, Sector 56",
                "addressLocality": "Sahibzada Ajit Singh Nagar",
                "addressRegion": "Punjab",
                "postalCode": "160055",
                "addressCountry": "IN"
              },
              "telephone": "+91-9876777393",
              "medicalSpecialty": [
                {
                  "@type": "MedicalSpecialty",
                  "name": "Orthopaedic Surgery"
                },
                {
                  "@type": "MedicalSpecialty",
                  "name": "Knee Replacement"
                },
                {
                  "@type": "MedicalSpecialty",
                  "name": "Hip Replacement"
                },
                {
                  "@type": "MedicalSpecialty",
                  "name": "Sports Injury Treatment"
                }
              ]
            })
          }}
        />
        
        {/* WebSite Schema with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Dr. Gaurav Saini",
              "url": "https://drgauravsainiortho.com",
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
          <Suspense>
            <GoogleTagManager 
              GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} 
              GTM_ID={GTM_ID} 
            />
          </Suspense>
        )}
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