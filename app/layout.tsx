import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahlanbek - Make Your Dream Become True",
  description: "Since 2009 in Germany, we have been working on the supply of necessary things in Morocco.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsappContact from "@/components/WhatsappContact";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} selection:bg-blue-600/30 selection:text-blue-900`}>
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
