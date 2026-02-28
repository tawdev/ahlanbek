"use client";

import { useRef } from "react";

interface LogoProps {
    className?: string;
    variant?: "light" | "dark" | "blue" | "silver";
    showText?: boolean;
    type?: "video" | "image";
    videoSrc?: string;
}

export default function Logo({
    className = "",
    variant = "silver",
    showText = true,
    type = "video",
    videoSrc = "/logoAhlanbek.mp4"
}: LogoProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className={`flex flex-col items-center group ${className}`}>
            <div className="relative w-[380px] h-[100px] md:w-[450px] md:h-[130px] transition-all duration-500">
                {type === "video" ? (
                    <video
                        src={videoSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-contain"
                    />
                ) : (
                    <img
                        src="/logoFinal.png"
                        alt="Ahlanbek Logo"
                        className="w-full h-full object-contain"
                    />
                )}
            </div>
        </div>
    );
}
