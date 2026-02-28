import { Metadata } from "next";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Process from "@/components/Process";
import DiagonalMarquee from "@/components/DiagonalMarquee";
import Founders from "@/components/Founders";
import GlobalPresence from "@/components/GlobalPresence";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Ahlanbek. We specialize in investment, real estate development, and digital innovation to bridge global markets.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Services />
      <Process />
      <DiagonalMarquee />
      <About />
      <Founders />
      <Projects />
      <GlobalPresence />
      <Testimonials />
      <Contact />
    </div>
  );
}
