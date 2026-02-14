"use client";

import { MapPin, ArrowRight, Globe } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
} from "react-simple-maps";

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
    },
];

export default function GlobalPresence() {
    const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-gray-900 to-gray-900" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/20">
                            <Globe size={14} /> Global Reach
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Transform Communities <br />
                            Across the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Globe</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                            We have established a strong presence in key international markets to better serve our clients and partners with local expertise and global standards.
                        </p>

                        <div className="space-y-6">
                            {locations.map((loc, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    onMouseEnter={() => setHoveredLocation(loc.country)}
                                    onMouseLeave={() => setHoveredLocation(null)}
                                    className={`flex items-start gap-4 p-4 rounded-2xl transition-all border ${hoveredLocation === loc.country
                                            ? "bg-white/10 border-white/20"
                                            : "border-transparent hover:bg-white/5 hover:border-white/10"
                                        } group`}
                                >
                                    <div className={`mt-1 p-3 rounded-full transition-all ${hoveredLocation === loc.country
                                            ? "bg-blue-500 text-white"
                                            : "bg-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white"
                                        }`}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className={`text-xl font-bold transition-colors ${hoveredLocation === loc.country ? "text-blue-300" : "text-white group-hover:text-blue-300"
                                            }`}>
                                            {loc.country}
                                        </h3>
                                        <p className="text-gray-400 mb-3">{loc.address}</p>
                                        <Link href={loc.mapLink} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 group/link">
                                            Get Direction <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] w-full rounded-[3rem] overflow-hidden bg-gray-950/50 border border-white/10 shadow-2xl flex items-center justify-center p-4"
                    >
                        {/* Real Map Visualization */}
                        {mounted ? (
                            <ComposableMap
                                projectionConfig={{
                                    scale: 180,
                                    center: [20, 30]
                                }}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                <ZoomableGroup zoom={1} maxZoom={1} center={[20, 30]}>
                                    <Geographies geography={geoUrl}>
                                        {({ geographies }: { geographies: any[] }) =>
                                            geographies.map((geo: any) => (
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
                                            onMouseEnter={() => setHoveredLocation(loc.country)}
                                            onMouseLeave={() => setHoveredLocation(null)}
                                        >
                                            <g transform="translate(-12, -12)">
                                                <motion.circle
                                                    r="12"
                                                    className="fill-blue-500/20"
                                                    animate={{
                                                        scale: [1, 1.5, 1],
                                                        opacity: [0.5, 0, 0.5]
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: "easeInOut"
                                                    }}
                                                />
                                                <circle
                                                    r="6"
                                                    fill="#3B82F6"
                                                    stroke="#FFFFFF"
                                                    strokeWidth="2"
                                                    className="cursor-pointer transition-transform hover:scale-125"
                                                />
                                            </g>

                                            {/* Floating Label */}
                                            <AnimatePresence>
                                                {hoveredLocation === loc.country && (
                                                    <motion.g
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 10 }}
                                                    >
                                                        <foreignObject
                                                            x="-40"
                                                            y="-45"
                                                            width="80"
                                                            height="30"
                                                        >
                                                            <div className="flex justify-center">
                                                                <div className="bg-white text-gray-900 text-[10px] font-bold px-2 py-1 rounded shadow-xl whitespace-nowrap border border-gray-200">
                                                                    {loc.country}
                                                                </div>
                                                            </div>
                                                        </foreignObject>
                                                    </motion.g>
                                                )}
                                            </AnimatePresence>
                                        </Marker>
                                    ))}
                                </ZoomableGroup>
                            </ComposableMap>
                        ) : (
                            <div className="animate-pulse flex flex-col items-center gap-4">
                                <Globe size={48} className="text-gray-700" />
                                <p className="text-gray-600 text-sm font-medium">Loading World Map...</p>
                            </div>
                        )}

                        <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 z-20">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Total Offices</p>
                                    <p className="text-3xl font-bold text-white">4 <span className="text-base font-normal text-gray-500">Major Hubs</span></p>
                                </div>
                                <div className="h-10 w-px bg-white/20"></div>
                                <div>
                                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Global Staff</p>
                                    <p className="text-3xl font-bold text-white">1,500+</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
