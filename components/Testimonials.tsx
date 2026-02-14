"use client";

import { useRef, useState, useEffect } from "react";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { gsap } from "@/lib/gsap-animations";
import { useGSAP } from "@/lib/gsap-animations";

const testimonials = [
    {
        name: "Alice Howard",
        role: "Interior Designer",
        content: "The best service provider we have worked with. Their attention to detail is unmatched.",
        rating: 5,
    },
    {
        name: "Nathan Marshall",
        role: "Architect",
        content: "Incredible results! They truly understood our vision and executed it perfectly.",
        rating: 5,
    },
    {
        name: "Ema Romero",
        role: "Manager",
        content: "Professional, reliable, and efficient. I highly recommend their services to everyone.",
        rating: 5,
    },
    {
        name: "Ann Smith",
        role: "CEO",
        content: "A game-changer for our business. The growth we've seen since partnering is phenomenal.",
        rating: 5,
    },
    {
        name: "John Doe",
        role: "Developer",
        content: "Top-notch quality and support. They went above and beyond our expectations.",
        rating: 5,
    },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useGSAP(() => {
        // Entrance animation
        gsap.fromTo(containerRef.current,
            { opacity: 0, scale: 0.95 },
            {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: "power3.out"
            }
        );

        // Slide transition animation
        if (textRef.current) {
            gsap.fromTo(textRef.current.children,
                { opacity: 0, x: 20 },
                { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
            );
        }

        // Magnetic Buttons
        const buttons = document.querySelectorAll(".magnetic-nav");
        buttons.forEach(btn => {
            const moveBtn = (e: MouseEvent) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(btn, {
                    x: x * 0.4,
                    y: y * 0.4,
                    duration: 0.4,
                    ease: "power2.out"
                });
            };
            const resetBtn = () => {
                gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" });
            };
            btn.addEventListener("mousemove", moveBtn as any);
            btn.addEventListener("mouseleave", resetBtn);
        });
    }, [activeIndex]);

    const item = testimonials[activeIndex];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Trusted by industry leaders across the globe.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Testimonial Card */}
                    <div className="bg-gray-50 p-12 md:p-16 rounded-[3rem] shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden group">
                        <Quote className="absolute top-10 right-10 w-20 h-20 text-blue-100 -rotate-12 transition-transform group-hover:rotate-0 duration-700" size={80} />

                        <div ref={textRef} className="relative z-10">
                            <div className="flex gap-1 text-yellow-500 mb-8">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={20} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-2xl md:text-3xl text-gray-800 mb-10 leading-tight font-medium italic">
                                "{item.content}"
                            </p>

                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-black text-gray-900 text-xl">{item.name}</h4>
                                    <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-center gap-6 mt-12">
                        <button
                            onClick={prevSlide}
                            className="magnetic-nav w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-600 transition-colors shadow-lg bg-white"
                        >
                            <ArrowLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="magnetic-nav w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors shadow-xl shadow-blue-500/20"
                        >
                            <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
