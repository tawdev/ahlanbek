"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { ArrowRight, ChevronRight, Globe, Shield, Zap } from "lucide-react";
import { gsap } from "@/lib/gsap-animations";
import { useGSAP } from "@/lib/gsap-animations";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const bgElement1Ref = useRef<HTMLDivElement>(null);
    const bgElement2Ref = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const image1Ref = useRef<HTMLDivElement>(null);
    const image2Ref = useRef<HTMLDivElement>(null);

    const titleText = "Make Your Dream Become True";
    const words = titleText.split(" ");

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.4 } });

        // Initial states
        gsap.set(".word-inner", { y: "110%" });
        gsap.set(descriptionRef.current, { opacity: 0, y: 30 });
        gsap.set(buttonsRef.current?.children || [], { opacity: 0, scale: 0.9, y: 20 });
        gsap.set([image1Ref.current, image2Ref.current], { opacity: 0, scale: 0.8, x: 50 });

        // Sequence
        tl.to(".word-inner", {
            y: 0,
            stagger: 0.1,
            duration: 1.4,
            ease: "expo.out",
        })
            .to(descriptionRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
            }, "-=1")
            .to(buttonsRef.current?.children || [], {
                opacity: 1,
                scale: 1,
                y: 0,
                stagger: 0.1,
                duration: 1,
                ease: "back.out(1.7)",
            }, "-=0.8")
            .to([image1Ref.current, image2Ref.current], {
                opacity: 1,
                scale: 1,
                x: 0,
                stagger: 0.2,
                duration: 1.5,
                ease: "power3.out"
            }, "-=1.2");

        // Subtle Parallax Effect on background and content
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const xPos = (clientX / window.innerWidth - 0.5) * 40;
            const yPos = (clientY / window.innerHeight - 0.5) * 40;

            gsap.to(bgElement1Ref.current, {
                x: xPos * 1.5,
                y: yPos * 1.5,
                duration: 2,
                ease: "power2.out"
            });

            gsap.to(bgElement2Ref.current, {
                x: -xPos * 1.2,
                y: -yPos * 1.2,
                duration: 2,
                ease: "power2.out"
            });

            gsap.to(image1Ref.current, {
                x: xPos * 0.8,
                y: yPos * 0.8,
                duration: 2,
                ease: "power2.out"
            });

            gsap.to(image2Ref.current, {
                x: -xPos * 0.4,
                y: -yPos * 0.4,
                duration: 2.5,
                ease: "power2.out"
            });

            gsap.to(contentRef.current, {
                x: xPos * 0.2,
                y: yPos * 0.2,
                duration: 3,
                ease: "power3.out"
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Floating animations for background elements (continuous)
        gsap.to(bgElement1Ref.current, {
            y: "+=20",
            x: "-=15",
            rotation: 5,
            duration: 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        gsap.to(bgElement2Ref.current, {
            y: "-=30",
            x: "+=20",
            rotation: -5,
            duration: 12,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1
        });

        // Soft float for images
        gsap.to(image1Ref.current, {
            y: "+=15",
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        gsap.to(image2Ref.current, {
            y: "-=20",
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 0.5
        });

        return () => window.removeEventListener("mousemove", handleMouseMove);
    });

    return (
        <section ref={containerRef} className="relative bg-[#020617] pt-32 pb-20 lg:pt-20 lg:pb-20 overflow-hidden min-h-screen flex items-center">
            {/* Premium Deep Mesh Gradient */}
            <div className="absolute inset-0 bg-[#020617]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(37,99,235,0.1)_0%,_transparent_50%),radial-gradient(circle_at_80%_70%,_rgba(29,78,216,0.1)_0%,_transparent_50%)]" />
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div ref={contentRef} className="text-left max-w-2xl">
                        <h1
                            ref={titleRef}
                            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.95] perspective-1000"
                        >
                            {words.map((word, i) => (
                                <span key={i} className="inline-block overflow-hidden mr-3 py-1">
                                    <span className={`word-inner inline-block ${i >= 3 ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600" : ""}`}>
                                        {word}
                                    </span>
                                </span>
                            ))}
                        </h1>

                        <p
                            ref={descriptionRef}
                            className="text-lg text-gray-400 mb-10 leading-relaxed font-light"
                        >
                            Since 2009 in Germany, we have been working on the supply of necessary things in Morocco.
                            Bridging continents through excellence and uncompromising quality.
                        </p>

                        <div
                            ref={buttonsRef}
                            className="flex flex-col sm:flex-row items-center gap-5"
                        >
                            <Link
                                href="/services"
                                className="group relative px-8 py-4 bg-blue-600 text-white rounded-xl font-bold transition-all shadow-2xl shadow-blue-500/20 overflow-hidden flex items-center justify-center gap-3 text-lg w-full sm:w-auto"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Our Services
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-blue-700 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-expo" />
                            </Link>

                            <Link
                                href="/contact"
                                className="group px-8 py-4 bg-white/5 backdrop-blur-md text-white border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3 text-lg hover:border-white/20 w-full sm:w-auto"
                            >
                                Contact Us
                                <ChevronRight size={20} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                            </Link>
                        </div>

                        {/* Quick Stats/Features */}
                        <div className="mt-12 grid grid-cols-3 gap-6 pt-12 border-t border-white/5">
                            {[
                                { icon: Globe, label: "Global Reach" },
                                { icon: Shield, label: "Trusted Firm" },
                                { icon: Zap, label: "Fast Supply" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-2">
                                    <item.icon className="text-blue-500 w-6 h-6" />
                                    <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image Composition */}
                    <div ref={imageContainerRef} className="relative hidden lg:block h-[600px]">
                        <div
                            ref={image1Ref}
                            className="absolute top-0 right-0 w-4/5 h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
                                alt="Logistics"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />
                        </div>

                        <div
                            ref={image2Ref}
                            className="absolute -bottom-10 left-0 w-3/5 h-[300px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#020617]"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070"
                                alt="Modern Office"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay" />
                        </div>

                        {/* Decorative floating shapes */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-20 -left-10 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl" />
                    </div>
                </div>
            </div>

            {/* Cinematic background elements */}
            <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
                <div
                    ref={bgElement1Ref}
                    className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"
                />
                <div
                    ref={bgElement2Ref}
                    className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px]"
                />
            </div>
        </section>
    );
}
