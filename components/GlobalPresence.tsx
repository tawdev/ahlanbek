"use client";

import { MapPin, ArrowRight, Globe } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const locations = [
    {
        country: "Munich",
        address: "Marsstaße 1, 80333 München, Germany",
        mapLink: "#",
        coords: { top: "26%", left: "51.5%" }
    },
    {
        country: "Dubai",
        address: "Business Bay, Dubai, UAE",
        mapLink: "#",
        coords: { top: "42%", left: "64%" }
    },
    {
        country: "London",
        address: "123 Oxford Street, London, UK",
        mapLink: "#",
        coords: { top: "22%", left: "49%" }
    },
    {
        country: "Rabat",
        address: "Avenue Mohammed V, Rabat, Morocco",
        mapLink: "#",
        coords: { top: "35%", left: "48%" }
    },
];

export default function GlobalPresence() {
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
                                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group"
                                >
                                    <div className="mt-1 bg-blue-500/20 p-3 rounded-full text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">{loc.country}</h3>
                                        <p className="text-gray-400 mb-3">{loc.address}</p>
                                        <Link href={loc.mapLink} className="text-sm font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 group/link">
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
                        className="relative h-[600px] w-full rounded-[3rem] overflow-hidden bg-gray-800/50 border border-white/10 shadow-2xl"
                    >
                        {/* Abstract Map Visualization */}
                        <div className="absolute inset-0 opacity-30 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center bg-no-repeat grayscale invert" />

                        {/* Pulsing Dots */}
                        {locations.map((loc, index) => (
                            <div
                                key={index}
                                className="absolute group z-20 cursor-pointer"
                                style={{ top: loc.coords.top, left: loc.coords.left }}
                            >
                                <div className="relative flex items-center justify-center w-6 h-6 -translate-x-1/2 -translate-y-1/2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500 border-2 border-white transition-transform group-hover:scale-125"></span>

                                    {/* Tooltip */}
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-white text-gray-900 text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl transform translate-y-2 group-hover:translate-y-0 pointer-events-none">
                                        {loc.country}
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white"></div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="absolute bottom-8 left-8 right-8 bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10">
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
