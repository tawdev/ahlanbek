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
    const imageRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        if (cardRef.current) {
            const el = cardRef.current;

            const onMouseEnter = () => {
                gsap.to(el, {
                    y: -15,
                    rotateY: -5,
                    rotateX: 2,
                    boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.2)",
                    duration: 0.6,
                    ease: "power2.out"
                });

                // Ken Burns, Color and Brightness on hover
                if (imageRef.current) {
                    gsap.to(imageRef.current, {
                        scale: 1.15,
                        filter: "grayscale(0%) brightness(1.1)",
                        duration: 0.8,
                        ease: "power2.out"
                    });
                }
            };

            const onMouseLeave = () => {
                gsap.to(el, {
                    y: 0,
                    rotateY: 0,
                    rotateX: 0,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                    duration: 0.6,
                    ease: "power2.out"
                });

                if (imageRef.current) {
                    gsap.to(imageRef.current, {
                        scale: 1.05,
                        filter: "grayscale(100%) brightness(1)",
                        duration: 0.6,
                        ease: "power2.out"
                    });
                }
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
            className="founder-card bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 h-full flex flex-col"
            style={{ perspective: '1000px' }}
        >
            <div className="relative h-[480px] w-full overflow-hidden">
                <img
                    ref={imageRef}
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover object-top"
                    style={{ transform: 'scale(1.05)', filter: 'grayscale(100%)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-80 pointer-events-none" />
            </div>
            <div className="p-8 flex-grow">
                <span className="text-primary font-bold text-sm uppercase tracking-widest mb-2 block">{position}</span>
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
            { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
        )
            .fromTo(titleRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "power4.out" },
                "-=0.7"
            )
            .fromTo(".founder-card",
                {
                    opacity: 0,
                    y: 100,
                    rotateX: -20,
                    scale: 0.9,
                    transformOrigin: "center bottom"
                },
                {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    scale: 1,
                    stagger: 0.2,
                    duration: 1.5,
                    ease: "elastic.out(1, 0.75)",
                    clearProps: "transform"
                },
                "-=0.5"
            );
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-white overflow-hidden" id="founders">
            <div className="max-w-7xl 3xl:max-w-[1500px] 4xl:max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span
                        ref={subtitleRef}
                        className="inline-block text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4 opacity-0"
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
