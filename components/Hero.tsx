"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, ChevronRight, Globe, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { gsap } from "@/lib/gsap-animations";
import { useGSAP } from "@/lib/gsap-animations";
import SplitTextReveal from "./SplitTextReveal";

export default function Hero() {
    const [isMounted, setIsMounted] = useState(false);
    const [floatingNodes, setFloatingNodes] = useState<any[]>([]);

    const containerRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const bgElement1Ref = useRef<HTMLDivElement>(null);
    const bgElement2Ref = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const image1Ref = useRef<HTMLDivElement>(null);
    const image2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsMounted(true);
        // Generate stable random values only on client to avoid hydration mismatch
        const nodes = [...Array(6)].map((_, i) => ({
            id: i,
            top: `${10 + Math.random() * 70}%`,
            left: `${10 + Math.random() * 80}%`,
            y: [0, -20 - Math.random() * 30, 0],
            rotate: [0, Math.random() * 25, 0],
            duration: 3 + Math.random() * 3,
            delay: Math.random() * 2,
            layer: (i % 3) + 1
        }));
        setFloatingNodes(nodes);
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.4 } });

        // Initial states
        gsap.set(descriptionRef.current, { opacity: 0, y: 30 });
        gsap.set(buttonsRef.current?.children || [], { opacity: 0, scale: 0.9, y: 20 });
        gsap.set([image1Ref.current, image2Ref.current], { opacity: 0, scale: 0.8, x: 50, rotateY: 20 });
        gsap.set(".hero-node", { opacity: 0, scale: 0 });

        // Continuous Floating Background Mesh
        gsap.to(bgElement1Ref.current, {
            x: "20%",
            y: "15%",
            rotate: 20,
            duration: 15,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
        gsap.to(bgElement2Ref.current, {
            x: "-15%",
            y: "-20%",
            rotate: -15,
            duration: 18,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Entrance Sequence
        tl.fromTo(descriptionRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=0.5")
            .fromTo(buttonsRef.current?.children || [], {
                opacity: 0, scale: 0.9, y: 20,
            }, {
                opacity: 1, scale: 1, y: 0,
                stagger: 0.15, duration: 1,
                ease: "back.out(1.2)"
            }, "-=0.8")
            .fromTo([image1Ref.current, image2Ref.current], {
                opacity: 0, scale: 1.1, x: 40, rotateY: 20,
            }, {
                opacity: 1, scale: 1, x: 0, rotateY: 0,
                stagger: 0.3, duration: 2,
                ease: "expo.out"
            }, "-=1.2")
            .fromTo(".hero-node", {
                opacity: 0,
                scale: 0,
            }, {
                opacity: 1,
                scale: 1,
                stagger: 0.08,
                duration: 1.2,
                ease: "back.out(1.7)"
            }, "-=1.5");

        // Advanced Mouse Parallax
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 60;
            const y = (clientY / window.innerHeight - 0.5) * 60;

            gsap.to(".parallax-layer-1", { x: x * 0.4, y: y * 0.4, duration: 2, ease: "power2.out" });
            gsap.to(".parallax-layer-2", { x: x * 1, y: y * 1, duration: 2.5, ease: "power2.out" });
            gsap.to(".parallax-layer-3", { x: x * 1.8, y: y * 1.8, duration: 3, ease: "power2.out" });
        };
        window.addEventListener("mousemove", handleMouseMove);

        // Scroll Parallax Enhancement
        gsap.to(image1Ref.current, {
            y: -80,
            rotate: 2,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1.5
            }
        });
        gsap.to(image2Ref.current, {
            y: -180,
            rotate: -4,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 2
            }
        });

        // Floating Nodes Parallax
        gsap.to(".hero-node", {
            y: (i) => i % 2 === 0 ? -100 : 100,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1
            }
        });

        // Magnetic Buttons Logic
        const buttons = buttonsRef.current?.querySelectorAll("a, button");

        const handleBtnMove = (e: MouseEvent, btn: HTMLElement) => {
            const rect = btn.getBoundingClientRect();
            const btnX = e.clientX - (rect.left + rect.width / 2);
            const btnY = e.clientY - (rect.top + rect.height / 2);
            gsap.to(btn, {
                x: btnX * 0.3,
                y: btnY * 0.3,
                duration: 0.6,
                ease: "power2.out"
            });
        };

        const handleBtnLeave = (btn: HTMLElement) => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.8,
                ease: "elastic.out(1, 0.3)"
            });
        };

        const btnMoveHandlers = new Map<HTMLElement, (e: MouseEvent) => void>();
        const btnLeaveHandlers = new Map<HTMLElement, () => void>();

        buttons?.forEach((btn) => {
            const moveHandler = (e: MouseEvent) => handleBtnMove(e, btn as HTMLElement);
            const leaveHandler = () => handleBtnLeave(btn as HTMLElement);

            btnMoveHandlers.set(btn as HTMLElement, moveHandler);
            btnLeaveHandlers.set(btn as HTMLElement, leaveHandler);

            btn.addEventListener("mousemove", moveHandler as any);
            btn.addEventListener("mouseleave", leaveHandler as any);
        });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            buttons?.forEach((btn) => {
                const moveHandler = btnMoveHandlers.get(btn as HTMLElement);
                const leaveHandler = btnLeaveHandlers.get(btn as HTMLElement);
                if (moveHandler) btn.removeEventListener("mousemove", moveHandler as any);
                if (leaveHandler) btn.removeEventListener("mouseleave", leaveHandler as any);
            });
        };
    }, []);

    return (
        <section ref={containerRef} className="relative bg-[#fcfcfc] pt-32 pb-20 lg:pt-20 lg:pb-20 overflow-x-hidden min-h-screen flex items-center w-full max-w-full">
            {/* Background Parallax Layers */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 w-full">
                <div className="parallax-layer-1 absolute inset-0 bg-white w-full" />
                {/* Subtle Metallic Gradients for Light Mode */}
                <div ref={bgElement1Ref} className="parallax-layer-2 absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-amber-100/30 rounded-full blur-[140px] opacity-40 max-w-none" />
                <div ref={bgElement2Ref} className="parallax-layer-3 absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] bg-slate-100/40 rounded-full blur-[120px] opacity-50 max-w-none" />
                <div className="absolute top-[20%] left-[30%] w-[400px] h-[400px] bg-amber-50/20 rounded-full blur-[100px] animate-pulse max-w-none" />

                {/* Abstract Grid Overlay (Darker dots for light background) */}
                <div className="absolute inset-0 opacity-[0.05] w-full"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.2) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />
                <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] invert w-full" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white w-full" />
            </div>

            <div className="max-w-7xl 3xl:max-w-[1500px] 4xl:max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full overflow-hidden">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div ref={contentRef} className="text-left col-span-12 lg:col-span-7">


                        <div className="relative">
                            <SplitTextReveal
                                type="chars"
                                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 tracking-tighter mb-4 leading-[0.9] perspective-1000"
                            >
                                Make Your Dream
                            </SplitTextReveal>
                            <SplitTextReveal
                                type="words"
                                delay={0.5}
                                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter mb-8 leading-[0.9] text-gray-700"
                            >
                                Become True
                            </SplitTextReveal>
                        </div>

                        <p
                            ref={descriptionRef}
                            className="text-lg text-gray-500 mb-10 leading-relaxed font-light mt-8 max-w-xl"
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
                                className="group relative px-8 py-4 bg-gray-900 text-white rounded-xl font-bold transition-all shadow-2xl shadow-gray-200/50 overflow-hidden flex items-center justify-center gap-3 text-lg w-full sm:w-auto hover:bg-black"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Our Services
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-expo" />
                            </Link>

                            <Link
                                href="/contact"
                                className="group px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-3 text-lg hover:border-gray-300 w-full sm:w-auto"
                            >
                                Contact Us
                                <ChevronRight size={20} className="text-primary group-hover:text-amber-500 transition-colors" />
                            </Link>
                        </div>

                        {/* Quick Features */}
                        <div className="mt-12 grid grid-cols-3 gap-6 pt-12 border-t border-gray-100 max-w-xl">
                            {[
                                { icon: Globe, label: "Global Reach" },
                                { icon: Shield, label: "Trusted Firm" },
                                { icon: Zap, label: "Fast Supply" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-2 hero-node">
                                    <item.icon className="text-primary w-6 h-6" />
                                    <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image Composition */}
                    <div ref={imageContainerRef} className="relative col-span-12 lg:col-span-5 h-[400px] sm:h-[500px] lg:h-[600px] perspective-2000 mt-12 lg:mt-0">
                        <div
                            ref={image1Ref}
                            className="absolute top-0 right-0 w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 parallax-layer-1"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
                                alt="Logistics"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
                        </div>

                        <div
                            ref={image2Ref}
                            className="absolute bottom-0 lg:-bottom-10 left-0 w-3/4 h-[250px] sm:h-[300px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20 parallax-layer-2"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070"
                                alt="Modern Office"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                        </div>

                        {/* Floating 3D Elements */}
                        {isMounted && floatingNodes.map((node) => (
                            <motion.div
                                key={node.id}
                                animate={{
                                    y: node.y,
                                    rotate: node.rotate
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: node.duration,
                                    delay: node.delay,
                                    ease: "easeInOut"
                                }}
                                className={`hero-node absolute w-4 h-4 rounded-full bg-primary/20 blur-sm parallax-layer-${node.layer}`}
                                style={{
                                    top: node.top,
                                    left: node.left,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
