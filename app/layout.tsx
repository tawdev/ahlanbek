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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <ScrollToTop />
        <WhatsappContact />
        <Footer />
      </body>
    </html>
  );
}
