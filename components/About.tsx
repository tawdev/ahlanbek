"use client";

import { useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { gsap } from "@/lib/gsap-animations";
import { useGSAP } from "@/lib/gsap-animations";

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const subtitleRef = useRef<HTMLSpanElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const imageMainRef = useRef<HTMLDivElement>(null);
    const imageSmallRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });

        // Left Content Animations
        tl.fromTo(subtitleRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        )
            .fromTo(titleRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                "-=0.6"
            )
            .fromTo(descriptionRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.6"
            )
            .fromTo(listRef.current?.children || [],
                { x: -30, opacity: 0 },
                { x: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power2.out" },
                "-=0.6"
            )
            .fromTo(ctaRef.current,
                { scale: 0.9, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" },
                "-=0.4"
            );

        // Right Content (Images) Animations
        gsap.fromTo([imageMainRef.current, imageSmallRef.current],
            { x: 60, opacity: 0, scale: 1.1 },
            {
                scrollTrigger: {
                    trigger: imageContainerRef.current,
                    start: "top 80%",
                },
                x: 0,
                opacity: 1,
                scale: 1,
                stagger: 0.2,
                duration: 1.5,
                ease: "expo.out"
            }
        );

        // Subtle Parallax on scroll
        gsap.to(imageMainRef.current, {
            y: -50,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        gsap.to(imageSmallRef.current, {
            y: 50,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5
            }
        });
    });

    return (
        <section ref={containerRef} className="py-24 bg-[#fafafa] overflow-hidden" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Text Content */}
                    <div className="order-2 lg:order-1">
                        <span
                            ref={subtitleRef}
                            className="inline-block text-blue-600 font-bold uppercase tracking-[0.2em] text-xs mb-4 opacity-0"
                        >
                            Our Story
                        </span>
                        <h2
                            ref={titleRef}
                            className="text-4xl sm:text-5xl font-black text-gray-900 mb-8 leading-[1.1] opacity-0"
                        >
                            About Ahlanbek
                        </h2>
                        <p
                            ref={descriptionRef}
                            className="text-lg text-gray-600 mb-10 leading-relaxed font-light opacity-0"
                        >
                            Founded in 2009, Ahlanbek started with a simple vision: to bridge the gap between markets and people.
                            Since then, we have evolved into an international powerhouse, combining local insights with global best practices
                            to deliver uncompromising quality and excellence in supply chain management.
                        </p>

                        <div ref={listRef} className="space-y-5 mb-12 opacity-0">
                            {[
                                "15+ Years of Excellence",
                                "International Presence",
                                "Customer-Centric Approach"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                                        <CheckCircle2 size={16} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <span className="text-gray-800 font-medium tracking-tight text-lg">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div ref={ctaRef} className="opacity-0">
                            <Link
                                href="/about-us"
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all shadow-xl shadow-gray-200"
                            >
                                Learn More About Us
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Image Composition */}
                    <div ref={imageContainerRef} className="order-1 lg:order-2 relative h-[500px] sm:h-[600px]">
                        <div
                            ref={imageMainRef}
                            className="absolute right-0 top-0 w-4/5 h-4/5 rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] opacity-0"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                                alt="Our Story"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
                        </div>

                        <div
                            ref={imageSmallRef}
                            className="absolute left-0 bottom-4 w-3/5 h-2/5 rounded-[30px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.2)] border-8 border-white opacity-0"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070"
                                alt="Empowering Success"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
                        </div>

                        {/* Floating Decorative Elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full -z-10 blur-2xl animate-pulse" />
                        <div className="absolute -bottom-10 right-1/4 w-32 h-32 bg-gray-200/50 rounded-full -z-10 blur-3xl animate-bounce-slow" />
                    </div>
                </div>
            </div>
        </section>
    );
}
