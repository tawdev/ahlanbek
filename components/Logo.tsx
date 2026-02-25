"use client";

import Image from "next/image";
import { useRef } from "react";

interface LogoProps {
    className?: string;
    variant?: "light" | "dark" | "blue" | "silver";
    showText?: boolean;
}

export default function Logo({ className = "", variant = "silver", showText = true }: LogoProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    
    return (
        <div ref={containerRef} className={`flex flex-col items-center group cursor-pointer ${className}`}>
            <div className="relative w-[180px] h-[80px] md:w-[220px] md:h-[100px] transition-all duration-500 group-hover:scale-105">
                <Image
                    src="/logo.png"
                    alt="Ahlanbek Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    );
}
