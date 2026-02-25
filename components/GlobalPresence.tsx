"use client";

import { MapPin, ArrowRight, Globe } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
} from "react-simple-maps";
import { gsap } from "@/lib/gsap-animations";
import { useGSAP } from "@/lib/gsap-animations";

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const locations = [
    {
        country: "Munich",
        address: "Marsstraße 1, 80333 München, Germany",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Marsstraße+1,+80333+München,+Germany",
        coordinates: [11.5583, 48.1425] as [number, number],
    },
    {
        country: "Dubai",
        address: "Business Bay, Dubai, UAE",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Business+Bay,+Dubai,+UAE",
        coordinates: [55.2708, 25.1851] as [number, number],
    },
    {
        country: "London",
        address: "128 City Road, London, EC1V 2NX, UK",
        mapLink: "https://www.google.com/maps/search/?api=1&query=128+City+Road,+London,+EC1V+2NX,+UK",
        coordinates: [-0.0877, 51.5273] as [number, number],
    },
    {
        country: "Marrakesh",
        address: "Lot Iguider N48 AV Allal El Fassi, Marrakesh, Morocco",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Lot+Iguider+N48+AV+Allal+El+Fassi,+Marrakesh,+Morocco",
        coordinates: [-7.9811, 31.6295] as [number, number],
        main: true
    },
];

export default function GlobalPresence() {
    const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useGSAP(() => {
        if (!mounted) return;

        // Content Reveal
        gsap.fromTo(".presence-content > *",
            { opacity: 0, x: -30 },
            {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            }
        );

        // Map Container Zoom Reveal
        gsap.fromTo(mapRef.current,
            { scale: 0.9, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: mapRef.current,
                    start: "top 80%",
                },
                scale: 1,
                opacity: 1,
                duration: 1.5,
                ease: "expo.out"
            }
        );

        // Individual Markers Plotting
        gsap.fromTo(".map-marker",
            { scale: 0, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: mapRef.current,
                    start: "top 70%",
                },
                scale: 1,
                opacity: 1,
                stagger: 0.2,
                duration: 0.8,
                delay: 0.5,
                ease: "back.out(1.7)"
            }
        );
    }, [mounted]);

    if (!mounted) return <div className="min-h-[800px] bg-gray-900 flex items-center justify-center rounded-3xl animate-pulse" />;

    return (
        <section ref={containerRef} className="py-24 bg-gray-900 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-gray-900 to-gray-900" />

            <div className="max-w-7xl 3xl:max-w-[1500px] 4xl:max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="presence-content space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
                                <Globe size={14} /> Global Reach
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Transform Communities <br />
                                Across the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">Globe</span>
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed font-light">
                                We have established a strong presence in key international markets to better serve our clients and partners with local expertise and global standards.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {locations.map((loc, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => setHoveredLocation(loc.country)}
                                    onMouseLeave={() => setHoveredLocation(null)}
                                    className={`flex items-start gap-4 p-4 rounded-2xl transition-all border ${hoveredLocation === loc.country
                                        ? "bg-white/10 border-white/20 translate-x-2"
                                        : "border-transparent hover:bg-white/5 hover:border-white/10"
                                        } group cursor-pointer`}
                                    onClick={() => window.open(loc.mapLink, '_blank')}
                                >
                                    <div className={`mt-1 p-3 rounded-xl transition-all ${hoveredLocation === loc.country
                                        ? "bg-primary text-white"
                                        : "bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white"
                                        }`}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3 className={`text-xl font-bold transition-colors ${hoveredLocation === loc.country ? "text-amber-300" : "text-white group-hover:text-amber-300"
                                                }`}>
                                                {loc.country}
                                            </h3>
                                            {loc.main && <span className="px-2 py-0.5 bg-primary/20 text-primary text-[10px] font-black rounded-md border border-primary/30 uppercase tracking-tighter">HQ</span>}
                                        </div>
                                        <p className="text-gray-400 text-sm">{loc.address}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Map */}
                    <div ref={mapRef} className="relative h-[600px] w-full rounded-[3rem] overflow-hidden bg-gray-950/50 border border-white/10 shadow-2xl flex items-center justify-center p-4">
                        <ComposableMap
                            projectionConfig={{
                                scale: 200,
                                center: [20, 30]
                            }}
                            className="w-full h-full"
                        >
                            <Geographies geography={geoUrl}>
                                {({ geographies }) =>
                                    geographies.map((geo) => (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            fill="#1F2937"
                                            stroke="#374151"
                                            strokeWidth={0.5}
                                            style={{
                                                default: { outline: "none" },
                                                hover: { fill: "#374151", outline: "none" },
                                                pressed: { outline: "none" },
                                            }}
                                        />
                                    ))
                                }
                            </Geographies>

                            {locations.map((loc, index) => (
                                <Marker
                                    key={index}
                                    coordinates={loc.coordinates}
                                    className="map-marker"
                                    onMouseEnter={() => setHoveredLocation(loc.country)}
                                    onMouseLeave={() => setHoveredLocation(null)}
                                >
                                    <g className="group cursor-pointer">
                                        <circle
                                            r={loc.main ? 10 : 6}
                                            fill={loc.main ? "rgba(212, 175, 55, 0.4)" : "rgba(212, 175, 55, 0.2)"}
                                            className="animate-ping"
                                        />
                                        <circle
                                            r={loc.main ? 5 : 3}
                                            fill="#D4AF37"
                                            stroke="#FFFFFF"
                                            strokeWidth={1.5}
                                        />

                                        {/* Tooltip-like Label */}
                                        <g className={`transition-all duration-300 ${hoveredLocation === loc.country ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                                            <rect
                                                x="-40"
                                                y="-45"
                                                width="80"
                                                height="30"
                                                rx="8"
                                                fill="#111827"
                                                stroke="#374151"
                                                strokeWidth="1"
                                            />
                                            <text
                                                textAnchor="middle"
                                                y="-25"
                                                style={{
                                                    fontFamily: "Inter",
                                                    fill: "#FFFFFF",
                                                    fontSize: "10px",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                {loc.country}
                                            </text>
                                        </g>
                                    </g>
                                </Marker>
                            ))}
                        </ComposableMap>

                        {/* Map Overlay Stats */}
                        <div className="absolute bottom-6 left-6 right-6 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Global Staff</p>
                                <p className="text-xl font-black text-white">1,500+</p>
                            </div>
                            <div className="w-px h-8 bg-white/10" />
                            <div className="text-right">
                                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Total Hubs</p>
                                <p className="text-xl font-black text-white">4 Offices</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
