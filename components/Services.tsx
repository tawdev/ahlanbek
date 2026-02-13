"use client";

import { useRef } from "react";
import { TrendingUp, Building2, Plane, Briefcase, Globe, Smartphone, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "@/lib/gsap-animations";
import { useGSAP } from "@/lib/gsap-animations";

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

        // Cards staggered animation
        if (cardsRef.current) {
            const cards = Array.from(cardsRef.current.children);
            gsap.fromTo(cards,
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: "top 85%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.1,
                    ease: "power4.out",
                    clearProps: "y, scale, transform" // Only clear transform-related props to allow Tailwind hover effects
                }
            );
        }
    });

    return (
        <section ref={sectionRef} className="py-24 bg-gray-50/50" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={headerRef} className="text-center mb-20">
                    <h2
                        className="text-sm font-bold text-primary uppercase tracking-widest mb-3 bg-blue-100/50 inline-block px-4 py-1 rounded-full text-blue-700 opacity-0"
                    >
                        Our Capabilities
                    </h2>
                    <h3
                        className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight opacity-0"
                    >
                        Quality Services
                    </h3>
                </div>

                <div
                    ref={cardsRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden h-[400px] flex flex-col justify-end p-8 opacity-0"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/80 transition-colors duration-300" />
                            </div>

                            <div className={`w-14 h-14 ${service.color} bg-opacity-90 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-lg`}>
                                <service.icon className={`w-7 h-7 text-white`} />
                            </div>

                            <h4 className="text-2xl font-bold text-white mb-3 relative z-10">{service.title}</h4>
                            <p className="text-gray-200 mb-6 leading-relaxed relative z-10 text-sm line-clamp-3">
                                {service.description}
                            </p>

                            <Link href={`/services/${service.slug}`} className="inline-flex items-center text-white font-bold group-hover:text-blue-300 transition-colors relative z-10">
                                Learn more
                                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
