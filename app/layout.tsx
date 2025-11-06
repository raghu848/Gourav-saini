import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedMedicalBackground from "../components/AnimatedMedicalBackground";
import EmergencyContactButton from "../components/EmergencyContactButton";
import StickySocialButtons from "../components/StickySocialButtons";
import GoogleTagManager from "../components/GoogleAnalytics";
import { defaultMetadata } from "./metadata";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
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
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased relative overflow-x-hidden`}
      >
        {(GA_MEASUREMENT_ID || GTM_ID) && (
          <GoogleTagManager 
            GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} 
            GTM_ID={GTM_ID} 
          />
        )}
        <AnimatedMedicalBackground />
        <Navbar />
        <main className="min-h-screen relative z-10">
          {children}
        </main>
        <Footer />
        <EmergencyContactButton />
        <StickySocialButtons />
      </body>
    </html>
  );
}