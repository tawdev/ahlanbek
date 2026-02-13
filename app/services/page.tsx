"use client";

import { motion } from "framer-motion";
import Services from "@/components/Services";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-gray-50/50">
            {/* Header */}
            <section className="bg-gray-900 pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-900/40 via-gray-900 to-gray-900" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Our <span className="text-blue-500">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Comprehensive solutions tailored to meet the evolving needs of the global market.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid (Reusing Component) */}
            <div className="-mt-12">
                <Services />
            </div>

            {/* CTA Section */}
            <section className="py-24 bg-gray-900 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/50 via-gray-900 to-gray-900" />
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your journey?</h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Contact us today to discuss how we can help you achieve your goals.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition-all hover:scale-105 shadow-lg shadow-blue-500/30"
                    >
                        Get a Quote
                    </a>
                </div>
            </section>
        </main>
    );
}
