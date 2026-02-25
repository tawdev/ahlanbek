"use client";

import { useRef } from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/gsap-animations";
import { useGSAP } from "@/lib/gsap-animations";
import Logo from "./Logo";

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const bottomBarRef = useRef<HTMLDivElement>(null);
    const bgShape1Ref = useRef<HTMLDivElement>(null);
    const bgShape2Ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Floating Background Shapes
        gsap.to(bgShape1Ref.current, {
            y: -50,
            x: 20,
            duration: 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
        gsap.to(bgShape2Ref.current, {
            y: 50,
            x: -20,
            duration: 12,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top 90%",
            }
        });

        // Entrance sequence: Bottom to top staggered reveal
        tl.fromTo(Array.from(contentRef.current?.children || []),
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.15,
                duration: 1.2,
                ease: "power4.out",
                clearProps: "all"
            }
        )
            .fromTo(bottomBarRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out", clearProps: "all" },
                "-=0.8"
            );

        // Social Icons Scale & Hover
        const socialIcons = contentRef.current?.querySelectorAll(".social-icon");
        if (socialIcons) {
            gsap.fromTo(socialIcons,
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 80%",
                    }
                }
            );
        }
    });

    return (
        <footer ref={footerRef} className="bg-white pt-24 pb-12 border-t border-gray-100 relative overflow-x-hidden w-full max-w-full">
            {/* Parallax BG Shapes */}
            <div ref={bgShape1Ref} className="absolute -top-10 -left-10 w-64 h-64 bg-amber-50/40 rounded-full blur-3xl -z-10" />
            <div ref={bgShape2Ref} className="absolute bottom-0 -right-10 w-80 h-80 bg-amber-50/50 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl 3xl:max-w-[1500px] 4xl:max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="flex items-center gap-4 mb-8 group">
                            <Logo variant="silver" className="scale-110 origin-left" />
                            <div className="flex flex-col">
                                <span className="text-2xl font-black tracking-tighter text-slate-500 group-hover:text-primary transition-colors">AHLANBEK</span>
                                <span className="text-[10px] font-bold tracking-[0.3em] text-primary/60 uppercase -mt-1">Global Excellence</span>
                            </div>
                        </Link>
                        <p className="text-gray-500 mb-8 leading-relaxed text-lg">
                            Making your dream become true since 2009. We connect markets, people, and opportunities with quality services and unwavering commitment.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="social-icon w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
                                >
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 lg:col-start-6">
                        <h4 className="text-gray-900 font-bold mb-6 text-lg tracking-tight">Quick Links</h4>
                        <ul className="space-y-4">
                            {["Home", "Services", "About Us", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                                        className="text-gray-500 hover:text-primary transition-all flex items-center gap-1 group translate-x-0 hover:translate-x-1"
                                    >
                                        {item}
                                        <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-gray-900 font-bold mb-6 text-lg tracking-tight">Services</h4>
                        <ul className="space-y-4">
                            {["Investment", "Real Estate", "Tourism", "Import & Export"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-500 hover:text-primary transition-all flex items-center gap-1 group translate-x-0 hover:translate-x-1">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact info Reveal from Right */}
                    <div className="lg:col-span-3">
                        <h4 className="text-gray-900 font-bold mb-6 text-lg tracking-tight">Contact Info</h4>
                        <ul className="space-y-6">
                            {[
                                { icon: MapPin, text: "Lot iguider N48 AV Allal El Fassi, Marrakesh, Morocco" },
                                { icon: Phone, text: "+212 607 790 956" },
                                { icon: Mail, text: "contact@ahlanbek.com" }
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 group">
                                    <div className="p-2 bg-amber-50 text-primary rounded-lg shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                        <item.icon size={20} />
                                    </div>
                                    <span className="text-gray-500 transition-colors group-hover:text-gray-900">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div ref={bottomBarRef} className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} cdigital. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-gray-400">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
