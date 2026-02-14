"use client";

import { useRef } from "react";
import { TrendingUp, Building2, Plane, Briefcase, Globe, Smartphone, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "@/lib/gsap-animations";
import { useGSAP } from "@/lib/gsap-animations";
import SplitTextReveal from "./SplitTextReveal";

const services = [
    {
        icon: TrendingUp,
        title: "L'investissement",
        slug: "investment",
        description: "From concept to execution, we create memorable events that inspire, engage, and leave a lasting impression.",
        color: "bg-blue-500",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
    },
    {
        icon: Building2,
        title: "L'immobilier",
        slug: "real-estate",
        description: "Connecting you to the best properties and investment opportunities with trust, transparency, and expertise.",
        color: "bg-indigo-500",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    },
    {
        icon: Plane,
        title: "Tourism",
        slug: "tourism",
        description: "Discover exceptional travel experiences, guided tours, and unique adventures that showcase the beauty of each destination.",
        color: "bg-sky-500",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
    },
    {
        icon: Briefcase,
        title: "Management",
        slug: "management",
        description: "Professional management services designed to streamline operations, optimize resources, and achieve sustainable growth.",
        color: "bg-violet-500",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    },
    {
        icon: Globe,
        title: "Import & Export",
        slug: "import-export",
        description: "Facilitating global trade with reliable import and export solutions that connect markets and drive business success.",
        color: "bg-cyan-500",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    },
    {
        icon: Smartphone,
        title: "Web & App Development",
        slug: "web-development",
        description: "Innovative web and mobile applications designed to enhance your digital presence, boost user engagement, and drive business growth.",
        color: "bg-teal-500",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    },
];

export default function Services() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Header animation
        if (headerRef.current) {
            gsap.fromTo(Array.from(headerRef.current.children),
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 90%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out"
                }
            );
        }

        // Cards reveal handled by framer-motion whileInView

        // Magnetic Icon Effect
        const icons = document.querySelectorAll(".service-icon-container");
        icons.forEach(icon => {
            const moveIcon = (e: MouseEvent) => {
                const rect = icon.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                gsap.to(icon, {
                    x: x * 0.3,
                    y: y * 0.3,
                    duration: 0.4,
                    ease: "power2.out"
                });
            };

            const resetIcon = () => {
                gsap.to(icon, {
                    x: 0,
                    y: 0,
                    duration: 0.6,
                    ease: "elastic.out(1, 0.3)"
                });
            };

            icon.addEventListener("mousemove", moveIcon as any);
            icon.addEventListener("mouseleave", resetIcon);
        });
    });

    return (
        <section ref={sectionRef} className="py-24 bg-gray-50/50" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={headerRef} className="text-center mb-20 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 inline-block"
                    >
                        Our Capabilities
                    </motion.span>
                    <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter">
                        Quality <span className="text-blue-600">Services</span>
                    </h2>
                </div>

                <div
                    ref={cardsRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-white rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group relative overflow-hidden h-[450px] flex flex-col justify-end p-10 cursor-pointer"
                        >
                            {/* Background Image with Hover Parallax */}
                            <div className="absolute inset-0 z-0">
                                <motion.div
                                    className="absolute inset-0"
                                    whileHover={{ scale: 1.15 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 transition-colors duration-500 group-hover:from-black/80" />
                            </div>

                            <motion.div
                                whileHover={{ rotate: 12, scale: 1.1 }}
                                className={`w-16 h-16 ${service.color} bg-opacity-90 rounded-2xl flex items-center justify-center mb-8 relative z-10 shadow-clxl service-icon-container`}
                            >
                                <service.icon className={`w-8 h-8 text-white`} />
                            </motion.div>

                            <h4 className="text-3xl font-black text-white mb-4 relative z-10 tracking-tight">{service.title}</h4>
                            <p className="text-gray-300 mb-8 leading-relaxed relative z-10 text-sm font-light">
                                {service.description}
                            </p>

                            <Link href={`/services/${service.slug}`} className="inline-flex items-center text-white font-black group-hover:text-blue-400 transition-colors relative z-10 tracking-widest uppercase text-xs">
                                Discover More
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                >
                                    <ArrowRight size={18} className="ml-3" />
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
