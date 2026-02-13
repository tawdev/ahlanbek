"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap-animations";
import { useGSAP } from "@/lib/gsap-animations";

interface FounderCardProps {
    name: string;
    position: string;
    description?: string;
    image: string;
}

const FounderCard = ({ name, position, description, image }: FounderCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Hover animation handled by Tailwind usually, 
        // but user requested GSAP lift and shadow intensification.
        if (cardRef.current) {
            const el = cardRef.current;

            const onMouseEnter = () => {
                gsap.to(el, {
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                    duration: 0.4,
                    ease: "power2.out"
                });
            };

            const onMouseLeave = () => {
                gsap.to(el, {
                    y: 0,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                    duration: 0.4,
                    ease: "power2.out"
                });
            };

            el.addEventListener("mouseenter", onMouseEnter);
            el.addEventListener("mouseleave", onMouseLeave);

            return () => {
                el.removeEventListener("mouseenter", onMouseEnter);
                el.removeEventListener("mouseleave", onMouseLeave);
            };
        }
    }, []);

    return (
        <div
            ref={cardRef}
            className="founder-card bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 transition-shadow duration-300 h-full flex flex-col"
        >
            <div className="relative h-[480px] w-full overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover object-top transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-80" />
            </div>
            <div className="p-8 flex-grow">
                <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-2 block">{position}</span>
                <h4 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">{name}</h4>
                {description && (
                    <p className="text-gray-500 leading-relaxed font-light text-sm italic">
                        "{description}"
                    </p>
                )}
            </div>
        </div>
    );
};

export default function Founders() {
    const sectionRef = useRef<HTMLElement>(null);
    const subtitleRef = useRef<HTMLSpanElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const cardsContainerRef = useRef<HTMLDivElement>(null);

    const founders = [
        {
            name: "HICHAM MHAMEDI",
            position: "CEO",
            description: "Driving the vision of Ahlanbek with over 15 years of leadership experience in international business and development.",
            image: "/hicham.jpeg"
        }
    ];

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            }
        });

        tl.fromTo(subtitleRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        )
            .fromTo(titleRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
                "-=0.6"
            )
            .fromTo(".founder-card",
                { opacity: 0, y: 50, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    stagger: 0.2,
                    duration: 1,
                    ease: "power3.out",
                    clearProps: "all"
                },
                "-=0.4"
            );
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-white overflow-hidden" id="founders">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span
                        ref={subtitleRef}
                        className="inline-block text-blue-600 font-bold uppercase tracking-[0.2em] text-xs mb-4 opacity-0"
                    >
                        About Founders
                    </span>
                    <h2
                        ref={titleRef}
                        className="text-3xl md:text-5xl font-black text-gray-900 max-w-3xl mx-auto leading-tight opacity-0"
                    >
                        We Are Leading International Company In The World
                    </h2>
                </div>

                <div
                    ref={cardsContainerRef}
                    className="flex justify-center"
                >
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-md w-full">
                        {founders.map((founder, index) => (
                            <FounderCard key={index} {...founder} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
