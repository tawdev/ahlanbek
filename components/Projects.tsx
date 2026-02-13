"use client";

import { useRef } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { gsap } from "@/lib/gsap-animations";
import { useGSAP } from "@/lib/gsap-animations";

const projects = [
    { id: 1, title: "Science Lab Building", location: "New York, USA", category: "Commercial", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" },
    { id: 2, title: "Long Gate Bridge", location: "Malmo, SE", category: "Infrastructure", image: "https://images.unsplash.com/photo-1555109307-f7d9da25c244?w=800&q=80" },
    { id: 3, title: "Enix Lawyer Building", location: "Toronto, CA", category: "Commercial", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80" },
];

export default function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
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

        if (containerRef.current) {
            gsap.fromTo(Array.from(containerRef.current.children),
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: "power4.out",
                    clearProps: "y, scale, transform"
                }
            );
        }
    });

    return (
        <section className="py-24 bg-white" id="projects">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={headerRef} className="text-center mb-16">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3 bg-blue-100/50 inline-block px-4 py-1 rounded-full text-blue-700 opacity-0">
                        Our Portfolio
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight opacity-0">
                        Latest Projects
                    </h3>
                </div>

                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 opacity-0">
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 bg-blue-500/90 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h4>
                                <div className="flex items-center gap-2 text-gray-500">
                                    <MapPin size={18} className="text-blue-500" />
                                    <span className="text-sm font-medium">{project.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/projects" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
                        View All Projects
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
