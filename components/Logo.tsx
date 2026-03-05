"use client";

import { useRef } from "react";

interface LogoProps {
    className?: string;
    variant?: "light" | "dark" | "blue" | "silver";
    showText?: boolean;
    type?: "video" | "image";
    videoSrc?: string;
    imageSrc?: string;
    width?: string;
    height?: string;
}

export default function Logo({
    className = "",
    variant = "silver",
    showText = true,
    type = "video",
    videoSrc = "/logoAhlanbek.mp4",
    imageSrc = "/logoFinal.png",
    width = "w-[120px] md:w-[220px]",
    height = "h-[40px] md:h-[80px]"
}: LogoProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className={`flex flex-col items-center group ${className}`}>
            <div className={`relative ${width} ${height} transition-all duration-500`}>
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
                        src={imageSrc}
                        alt="Ahlanbek Logo"
                        className="w-full h-full object-contain"
                    />
                )}
            </div>
        </div>
    );
}
