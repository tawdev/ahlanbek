"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { gsap } from "@/lib/gsap-animations";
import { useGSAP } from "@/lib/gsap-animations";
import { X } from "lucide-react";

const galleryImages = [
  {
    src: "/images/WhatsApp Image 2026-03-17 at 02.44.32.jpeg",
    alt: "Investment Projects",
    className: "lg:col-span-2 lg:row-span-2 h-[400px] lg:h-full",
  },
  {
    src: "/images/WhatsApp Image 2026-03-17 at 02.44.33 (1).jpeg",
    alt: "Business Excellence",
    className: "h-[250px] lg:h-[300px]",
  },
  {
    src: "/images/WhatsApp Image 2026-03-17 at 02.44.33 (2).jpeg",
    alt: "Corporate Identity",
    className: "lg:row-span-2 h-[400px] lg:h-full",
  },
  {
    src: "/images/WhatsApp Image 2026-03-17 at 02.44.33 (3).jpeg",
    alt: "Global Reach",
    className: "h-[250px] lg:h-[300px]",
  },
  {
    src: "/images/WhatsApp Image 2026-03-17 at 02.44.33 (4).jpeg",
    alt: "Strategic Planning",
    className: "lg:col-span-2 h-[250px] lg:h-[350px]",
  },
  {
    src: "/images/WhatsApp Image 2026-03-17 at 02.44.33 (5).jpeg",
    alt: "Digital Integration",
    className: "h-[250px] lg:h-[350px]",
  },
  {
    src: "/images/WhatsApp Image 2026-03-17 at 02.44.33.jpeg",
    alt: "Future Visions",
    className: "h-[250px] lg:h-[350px]",
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImage]);

  useGSAP(() => {
    gsap.fromTo(".gallery-header > *", 
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".gallery-header",
          start: "top 85%",
        },
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1.2,
        ease: "expo.out"
      }
    );
  });

  return (
    <section 
      ref={sectionRef}
      className="py-32 bg-[#FDFCF9] relative overflow-hidden" 
      id="gallery"
    >
      {/* Decorative Background */}
      <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-[1800px] mx-auto px-4 sm:px-10 lg:px-20 relative z-10">
        <div className="gallery-header mb-24 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-block text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-6 bg-primary/5 px-5 py-2 rounded-full border border-primary/10">
              The Collection
            </span>
            <h2 className="text-5xl md:text-8xl font-black text-[#1A1A1A] tracking-tighter font-display leading-[0.9] mb-8">
              Curated <br /><span className="text-primary italic font-serif font-medium">Moments</span>
            </h2>
          </div>
          <p className="text-gray-500 text-xl font-serif max-w-sm lg:mb-4 leading-relaxed italic opacity-80">
            "Capturing the essence of architecture, culture, and the spirit of our journey since 2009."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1.5, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1] 
              }}
              onClick={() => setSelectedImage(image.src)}
              className={`relative overflow-hidden rounded-[2.5rem] group cursor-pointer shadow-2xl shadow-black/5 ${image.className}`}
            >
              <div className="absolute inset-0 z-0">
                <motion.div 
                  className="h-[120%] w-full relative"
                  style={{ 
                    y: useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? 50 : -50]) 
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10 translate-y-4 group-hover:translate-y-0">
                  <span className="text-primary font-bold tracking-widest text-[10px] uppercase mb-2">View Fullscreen</span>
                  <h3 className="text-white text-2xl font-black tracking-tight font-display">{image.alt}</h3>
              </div>

              <div className="absolute inset-0 border border-white/10 group-hover:border-primary/40 rounded-[2.5rem] transition-all duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Image Viewer */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 md:p-10 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-7xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-0 right-0 md:-top-16 md:-right-16 text-white hover:text-primary transition-colors p-2"
              >
                <X size={40} strokeWidth={1.5} />
              </button>
              
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src={selectedImage}
                  alt="Gallery Preview"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
