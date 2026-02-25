"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap-animations";
import { useGSAP } from "@/lib/gsap-animations";

const stats = [
    { label: "Years of Experience", value: 16, suffix: "+", sub: "in Europe & Morocco" },
    { label: "Global Companies", value: 100, suffix: "+", sub: "all over the world" },
    { label: "Companies in Europe", value: 30, suffix: "+", sub: "trust our services" },
    { label: "Happy Colleagues", value: 1520, suffix: "+", sub: "& counting more daily" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const countRef = useRef<HTMLSpanElement>(null);

    useGSAP(() => {
        const obj = { val: 0 };
        gsap.to(obj, {
            val: value,
            duration: 2.5,
            ease: "expo.out",
            scrollTrigger: {
                trigger: countRef.current,
                start: "top 95%",
            },
            onUpdate: () => {
                if (countRef.current) {
                    countRef.current.innerText = Math.round(obj.val).toString();
                }
            }
        });

        // Metallic shimmer effect
        gsap.to(countRef.current, {
            backgroundPosition: "200% center",
            duration: 3,
            repeat: -1,
            ease: "linear"
        });
    });

    return (
        <span className="tabular-nums relative inline-block">
            <span
                ref={countRef}
                className="bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 bg-[length:200%_auto] text-transparent bg-clip-text"
            >
                0
            </span>
            <span className="text-amber-600">{suffix}</span>
        </span>
    );
}

export default function Stats() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (containerRef.current) {
            const cards = Array.from(containerRef.current.children);

            gsap.fromTo(cards,
                { y: 50, opacity: 0, scale: 0.9 },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 90%",
                        once: true
                    },
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: "power4.out",
                    clearProps: "all"
                }
            );

            // Hover effects for cards
            cards.forEach(card => {
                const onEnter = () => {
                    gsap.to(card, {
                        y: -8,
                        boxShadow: "0 20px 40px rgba(212, 175, 55, 0.1)",
                        borderColor: "rgba(212, 175, 55, 0.2)",
                        duration: 0.4,
                        ease: "power2.out"
                    });
                };
                const onLeave = () => {
                    gsap.to(card, {
                        y: 0,
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                        borderColor: "rgba(243, 244, 246, 1)",
                        duration: 0.4,
                        ease: "power2.out"
                    });
                };
                card.addEventListener("mouseenter", onEnter);
                card.addEventListener("mouseleave", onLeave);
            });
        }
    });

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-50/50 via-transparent to-transparent opacity-50" />

            <div className="max-w-7xl 3xl:max-w-[1500px] 4xl:max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-8 bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl transition-all duration-300"
                        >
                            <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-amber-600 mb-2">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </h3>
                            <p className="text-lg font-bold text-gray-800 mb-1">{stat.label}</p>
                            <p className="text-sm text-gray-500 font-medium">{stat.sub}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
