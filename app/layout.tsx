import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ahlanbek.com"),
  title: {
    default: "Ahlanbek - Excellence & Global Innovation Since 2009",
    template: "%s | Ahlanbek"
  },
  description: "Ahlanbek is a multinational corporation delivering excellence in investment, real estate, tourism, and digital solutions across Morocco, Germany, UAE, and UK.",
  keywords: ["Ahlanbek", "Investment Morocco", "Real Estate Marrakesh", "Digital Solutions", "Ahlane Bek", "International Business"],
  authors: [{ name: "Ahlanbek Team" }],
  creator: "Ahlanbek",
  publisher: "Ahlanbek",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/logo.png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahlanbek.com",
    siteName: "Ahlanbek",
    title: "Ahlanbek - Make Your Dream Become True",
    description: "Since 2009, delivering world-class services in investment, real estate, and technology.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Ahlanbek Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahlanbek - Excellence & Global Innovation",
    description: "Multi-sector global services and innovative solutions.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsappContact from "@/components/WhatsappContact";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import JsonLd from "@/components/JsonLd";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ahlanbek",
  "url": "https://ahlanbek.com",
  "logo": "https://ahlanbek.com/logo.png",
  "sameAs": [
    "https://facebook.com/ahlanbek",
    "https://linkedin.com/company/ahlanbek",
    "https://instagram.com/ahlanbek"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+212 607 790 956",
    "contactType": "customer service",
    "areaServed": "MA",
    "availableLanguage": ["Arabic", "French", "English", "German"]
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ahlanbek HQ",
  "image": "https://ahlanbek.com/logo.png",
  "@id": "https://ahlanbek.com",
  "url": "https://ahlanbek.com",
  "telephone": "+212 607 790 956",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Lot iguider N48 AV Allal El Fassi",
    "addressLocality": "Marrakesh",
    "postalCode": "40000",
    "addressCountry": "MA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 31.6430,
    "longitude": -8.0335
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PTB5JFRG');`}
        </Script>
      </head>
      <body className={`${inter.className} selection:bg-primary/30 selection:text-primary`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PTB5JFRG"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
        {/* Cinematic Grain Overlay */}
        <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <filter id="noiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.65"
                numOctaves="3"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>

        <Preloader />
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        <ScrollToTop />
        <WhatsappContact />
      </body>
    </html>
  );
}
