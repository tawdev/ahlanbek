"use client";

import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const locations = [
    {
        country: "Morocco",
        address: "Lot iguider N48 AV Allal El Fassi, Marrakesh",
        mapLink: "#",
    },
    {
        country: "United Kingdom",
        address: "2367 Speers Road, Brampton",
        mapLink: "#",
    },
    {
        country: "Germany",
        address: "Marsstaße 1 80333 München",
        mapLink: "#",
    },
];

export default function GlobalPresence() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Transform Communities Across the <span className="text-primary">Globe</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            We have established a strong presence in key international markets to better serve our clients and partners.
                        </p>

                        <div className="space-y-8">
                            {locations.map((loc, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="mt-1 bg-blue-100 p-2 rounded-full text-primary">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{loc.country}</h3>
                                        <p className="text-gray-600 mb-2">{loc.address}</p>
                                        <Link href={loc.mapLink} className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                                            Get Direction <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-100 rounded-3xl h-[500px] w-full relative overflow-hidden flex items-center justify-center"
                    >
                        <div className="text-gray-400 text-center">
                            <MapPin size={64} className="mx-auto mb-4 opacity-50" />
                            <p>Interactive Map Placeholder</p>
                        </div>
                        {/* Use an actual image or map integration here */}
                        <div className="absolute inset-0 bg-blue-900/5 mix-blend-multiply pointer-events-none"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
