"use client";

import { useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { gsap } from "@/lib/gsap-animations";
import { useGSAP } from "@/lib/gsap-animations";
import SplitTextReveal from "./SplitTextReveal";

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const imageMainRef = useRef<HTMLDivElement>(null);
    const imageSmallRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Subtle Parallax on scroll for images
        gsap.to(imageMainRef.current, {
            y: -80,
            scale: 1.05,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5
            }
        });

        gsap.to(imageSmallRef.current, {
            y: 80,
            scale: 0.95,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 2
            }
        });

        // Image entrance reveals
        gsap.fromTo([imageMainRef.current, imageSmallRef.current],
            { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
            {
                scrollTrigger: {
                    trigger: imageContainerRef.current,
                    start: "top 70%",
                    once: true
                },
                clipPath: "inset(0% 0% 0% 0%)",
                opacity: 1,
                stagger: 0.3,
                duration: 1.8,
                ease: "expo.inOut"
            }
        );

        // Content reveal
        gsap.fromTo(".about-content-item",
            { y: 30, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".about-content-item",
                    start: "top 85%",
                    once: true
                },
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            }
        );
    }, []);

    return (
        <section ref={containerRef} className="py-32 bg-white overflow-x-hidden relative" id="about">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,_rgba(37,99,235,0.03)_0%,_transparent_50%)]" />

            <div className="max-w-7xl 3xl:max-w-[1500px] 4xl:max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                    {/* Left Text Content */}
                    <div className="order-2 lg:order-1 space-y-10">
                        <div className="about-content-item">
                            <span className="inline-block text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 px-3 py-1 bg-blue-50 rounded-full border border-blue-100">
                                Our Story
                            </span>
                            <SplitTextReveal className="text-5xl sm:text-7xl font-black text-gray-900 leading-[0.95] tracking-tighter mb-8">
                                Crafting Excellence Since 2009.
                            </SplitTextReveal>
                        </div>

                        <p className="about-content-item text-xl text-gray-500 leading-relaxed font-light max-w-xl">
                            Founded in 2009, Ahlanbek started with a simple vision: to bridge the gap between markets and people.
                            Today, we are an international powerhouse delivering uncompromising quality.
                        </p>

                        <div className="about-content-item space-y-6">
                            {[
                                { title: "15+ Years of Excellence", desc: "A legacy of trust and quality." },
                                { title: "International Presence", desc: "Hubs in Europe, Dubai, and Morocco." },
                                { title: "Global Standards", desc: "Uncompromising attention to detail." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:rotate-12 transition-all duration-500">
                                        <CheckCircle2 size={24} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                                        <p className="text-gray-400 font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="about-content-item pt-8">
                            <Link
                                href="/about-us"
                                className="group relative inline-flex items-center gap-4 px-10 py-5 bg-gray-900 text-white rounded-2xl font-black hover:bg-blue-600 transition-all duration-500 shadow-2xl shadow-gray-900/10 active:scale-95"
                            >
                                Discover Our Journey
                                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-500" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Image Composition */}
                    <div ref={imageContainerRef} className="order-1 lg:order-2 relative h-[600px] lg:h-[750px]">
                        <div
                            ref={imageMainRef}
                            className="absolute right-0 top-0 w-full h-[85%] rounded-[60px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] z-10"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                                alt="Our Story"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-900/5 mix-blend-overlay" />
                        </div>

                        <div
                            ref={imageSmallRef}
                            className="absolute -left-12 bottom-0 w-[60%] h-[45%] rounded-[50px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.2)] border-[12px] border-white z-20"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070"
                                alt="Empowering Success"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-transparent" />
                        </div>

                        {/* Decorative background circle */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10 animate-pulse" />
                    </div>
                </div>
            </div>
        </section>
    );
}
