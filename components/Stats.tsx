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
            duration: 2,
            ease: "power2.out",
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
    });

    return (
        <span className="tabular-nums">
            <span ref={countRef}>0</span>
            {suffix}
        </span>
    );
}

export default function Stats() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (containerRef.current) {
            gsap.fromTo(Array.from(containerRef.current.children),
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 90%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    clearProps: "y, scale, transform"
                }
            );
        }
    });

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-8 bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 opacity-0"
                        >
                            <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-blue-600 mb-2">
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
