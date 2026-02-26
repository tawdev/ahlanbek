"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap-animations";
import { useGSAP } from "@/lib/gsap-animations";

const values = [
    "Innovation", "Integrity", "Excellence", "Global Reach", "Sustainable Growth",
    "Quality First", "Market Leader", "Customer Focused", "Building Futures",
    "Strategic Vision", "Partnership", "Trust"
];

export default function DiagonalMarquee() {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const marqueeRefReverse = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Continuous movement for the first row
        gsap.to(".marquee-item-1", {
            xPercent: -100,
            repeat: -1,
            duration: 30,
            ease: "none"
        });

        // Continuous movement for the second row (reverse)
        gsap.to(".marquee-item-2", {
            xPercent: 100,
            repeat: -1,
            duration: 35,
            ease: "none"
        });
    });

    return (
        <div className="w-full overflow-hidden bg-slate-900">
            <div className="relative py-20 bg-slate-900 select-none -skew-y-3 scale-110 origin-center">
                {/* First Row */}
                <div ref={marqueeRef} className="flex whitespace-nowrap border-y border-white/5 py-6">
                    <div className="flex animate-marquee marquee-item-1">
                        {[...values, ...values].map((value, i) => (
                            <span
                                key={i}
                                className="text-6xl md:text-8xl font-black text-transparent -webkit-text-stroke-1 stroke-white/20 px-8 flex items-center gap-4 hover:text-white hover:stroke-transparent transition-all duration-500 uppercase tracking-tighter"
                            >
                                {value}
                                <span className="w-3 h-3 rounded-full bg-primary" />
                            </span>
                        ))}
                    </div>
                </div>

                {/* Second Row */}
                <div ref={marqueeRefReverse} className="flex whitespace-nowrap border-b border-white/5 py-6 -mt-1">
                    <div className="flex animate-marquee-reverse marquee-item-2" style={{ transform: 'translateX(-50%)' }}>
                        {[...values, ...values].map((value, i) => (
                            <span
                                key={i}
                                className="text-6xl md:text-8xl font-black text-white px-8 flex items-center gap-4 hover:text-primary transition-all duration-500 uppercase tracking-tighter"
                            >
                                {value}
                                <span className="w-3 h-3 rounded-full bg-slate-700" />
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
