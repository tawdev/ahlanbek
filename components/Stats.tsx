"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
    { label: "Years of Experience", value: 16, suffix: "+", sub: "in Europe & Morocco" },
    { label: "Global Companies", value: 100, suffix: "+", sub: "all over the world" },
    { label: "Companies in Europe", value: 30, suffix: "+", sub: "trust our services" },
    { label: "Happy Colleagues", value: 1520, suffix: "+", sub: "& counting more daily" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) => Math.round(current));

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, value, spring]);

    return (
        <span ref={ref} className="tabular-nums">
            <motion.span>{display}</motion.span>
            {suffix}
        </span>
    );
}

export default function Stats() {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-center p-8 bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-blue-600 mb-2">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </h3>
                            <p className="text-lg font-bold text-gray-800 mb-1">{stat.label}</p>
                            <p className="text-sm text-gray-500 font-medium">{stat.sub}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
