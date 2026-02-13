import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import GlobalPresence from "@/components/GlobalPresence";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Services />
      <GlobalPresence />
      <Testimonials />
    </main>
  );
}
