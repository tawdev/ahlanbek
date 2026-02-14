"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap-animations";
import { useGSAP } from "@/lib/gsap-animations";

interface LogoProps {
    className?: string;
    variant?: "light" | "dark" | "blue" | "silver";
    showText?: boolean;
}

export default function Logo({ className = "", variant = "silver", showText = true }: LogoProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const wingsRef = useRef<SVGGElement>(null);
    const centerRef = useRef<SVGGElement>(null);

    const colors = {
        light: { main: "#FFFFFF", text: "#FFFFFF" },
        dark: { main: "#0F172A", text: "#0F172A" },
        blue: { main: "#2563EB", text: "#1E40AF" },
        silver: { main: "url(#chromeGradient)", text: "#94A3B8" }
    };

    const color = colors[variant];

    useGSAP(() => {
        if (!containerRef.current) return;

        const onMouseEnter = () => {
            gsap.to(".wing-item", {
                x: (i) => i < 3 ? -8 : 8,
                duration: 0.6,
                stagger: 0.05,
                ease: "power2.out"
            });
            gsap.to(centerRef.current, {
                scale: 1.05,
                duration: 0.5,
                transformOrigin: "center center",
                ease: "back.out(2)"
            });
        };

        const onMouseLeave = () => {
            gsap.to(".wing-item", { x: 0, duration: 0.5, ease: "power2.inOut" });
            gsap.to(centerRef.current, { scale: 1, duration: 0.5, ease: "power2.inOut" });
        };

        containerRef.current.addEventListener("mouseenter", onMouseEnter);
        containerRef.current.addEventListener("mouseleave", onMouseLeave);

        return () => {
            containerRef.current?.removeEventListener("mouseenter", onMouseEnter);
            containerRef.current?.removeEventListener("mouseleave", onMouseLeave);
        };
    }, [variant]);

    return (
        <div ref={containerRef} className={`flex flex-col items-center group cursor-pointer ${className}`}>
            <svg
                width="120"
                height="60"
                viewBox="0 0 240 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(148,163,184,0.4)]"
            >
                <defs>
                    {/* Advanced Chrome/Silver Gradient */}
                    <linearGradient id="chromeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F8FAFC" />
                        <stop offset="20%" stopColor="#E2E8F0" />
                        <stop offset="40%" stopColor="#94A3B8" />
                        <stop offset="60%" stopColor="#CBD5E1" />
                        <stop offset="80%" stopColor="#64748B" />
                        <stop offset="100%" stopColor="#475569" />
                    </linearGradient>

                    <linearGradient id="blueLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#93C5FD" />
                        <stop offset="50%" stopColor="#2563EB" />
                        <stop offset="100%" stopColor="#1E3A8A" />
                    </linearGradient>

                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                <g ref={wingsRef}>
                    {/* Left Wing (Representing 'B') */}
                    <g className="wing-item">
                        <path d="M85 35H10L25 45H85V35Z" fill={variant === "silver" ? "url(#chromeGradient)" : color.main} />
                        <path d="M85 55H25L35 65H85V55Z" fill={variant === "silver" ? "url(#chromeGradient)" : color.main} />
                        <path d="M85 75H45L55 85H85V75Z" fill={variant === "silver" ? "url(#chromeGradient)" : color.main} />
                        {/* Vertical connector for 'B' feel */}
                        <rect x="80" y="35" width="5" height="50" fill={variant === "silver" ? "url(#chromeGradient)" : color.main} />
                    </g>

                    {/* Right Wing (Representing 'E') */}
                    <g className="wing-item">
                        <path d="M155 35H230L215 45H155V35Z" fill={variant === "silver" ? "url(#chromeGradient)" : color.main} />
                        <path d="M155 55H215L205 65H155V55Z" fill={variant === "silver" ? "url(#chromeGradient)" : color.main} />
                        <path d="M155 75H195L185 85H155V75Z" fill={variant === "silver" ? "url(#chromeGradient)" : color.main} />
                        {/* Vertical connector for 'E' */}
                        <rect x="155" y="35" width="5" height="50" fill={variant === "silver" ? "url(#chromeGradient)" : color.main} />
                    </g>
                </g>

                {/* Center 'A' */}
                <g ref={centerRef} filter="url(#glow)">
                    <path
                        d="M120 25L145 95H132L120 60L108 95H95L120 25Z"
                        fill={variant === "silver" ? "url(#chromeGradient)" : color.main}
                    />
                    <path d="M108 65H132V72H108V65Z" fill={variant === "silver" ? "url(#chromeGradient)" : color.main} />
                </g>
            </svg>

            {showText && (
                <div className="flex flex-col items-center -mt-2">
                    <span
                        className={`text-[12px] font-black tracking-[0.5em] uppercase transition-all duration-300 group-hover:tracking-[0.6em]
                        ${variant === "light" ? "text-white" : variant === "silver" ? "text-slate-400" : "text-gray-900"}`}
                        style={{
                            WebkitTextStroke: variant === "silver" ? "0.5px rgba(255,255,255,0.2)" : "none",
                            textShadow: variant === "silver" ? "0 2px 4px rgba(0,0,0,0.2)" : "none"
                        }}
                    >
                        Ahlanbek
                    </span>
                </div>
            )}
        </div>
    );
}
