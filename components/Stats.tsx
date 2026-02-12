"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Years of Experience", value: "16+", sub: "in Europe & Morocco" },
    { label: "Global Companies", value: "100+", sub: "all over the world" },
    { label: "Companies in Europe", value: "30+", sub: "trust our services" },
    { label: "Happy Colleagues", value: "1520+", sub: "& counting more daily" },
];

export default function Stats() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow border border-gray-100"
                        >
                            <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
                            <p className="text-lg font-semibold text-gray-800">{stat.label}</p>
                            <p className="text-sm text-gray-500">{stat.sub}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
