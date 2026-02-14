"use client";

import { motion } from "framer-motion";
import Stats from "@/components/Stats";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <section className="bg-slate-900 pt-40 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(37,99,235,0.2)_0%,_transparent_100%)]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter"
                    >
                        About <span className="text-blue-500">Ahlanbek</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                        className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light"
                    >
                        Driven by passion, defined by excellence. We are dedicated to creating meaningful connections and fostering global growth.
                    </motion.p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight">Our Story</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Founded in 2009, Ahlanbek started with a simple vision: to bridge the gap between markets and people. What began as a small consultancy firm in Marrakesh has now grown into a multinational corporation with a presence in major global hubs including Munich, Dubai, and London.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Our journey is marked by a relentless pursuit of quality and innovation. Whether it's investment strategies, real estate development, or digital solutions, we bring a unique perspective that combines local insights with global best practices.
                            </p>

                            <div className="space-y-4">
                                {["15+ Years of Excellence", "International Presence", "Customer-Centric Approach"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 size={20} className="text-blue-500" />
                                        <span className="font-semibold text-gray-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[500px] rounded-3xl overflow-hidden bg-gray-100 shadow-2xl"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                            <div className="absolute bottom-8 left-8 text-white">
                                <p className="font-bold text-2xl">Empowering Success</p>
                                <p className="opacity-90">Since 2009</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <div className="bg-gray-50">
                <Stats />
            </div>

            {/* Mission */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight">Our Mission</h2>
                    <p className="text-2xl text-gray-600 font-light italic leading-relaxed">
                        "To provide world-class services that empower businesses and individuals to thrive in a connected world, upholding the values of integrity, innovation, and excellence in everything we do."
                    </p>
                </div>
            </section>
        </main>
    );
}
