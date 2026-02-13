import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Founders from "@/components/Founders";
import GlobalPresence from "@/components/GlobalPresence";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Services />
      <About />
      <Founders />
      <Projects />
      <GlobalPresence />
      <Testimonials />
      <Contact />
    </main>
  );
}
