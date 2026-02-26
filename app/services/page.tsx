"use client";

import { motion } from "framer-motion";
import Services from "@/components/Services";

export default function ServicesPage() {
    return (
        <>
            {/* Header */}
            <section className="bg-slate-900 pt-40 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.2)_0%,_transparent_100%)]" />
                <div className="max-w-7xl 3xl:max-w-[1500px] 4xl:max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter"
                    >
                        Our <span className="text-primary">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                        className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light"
                    >
                        Comprehensive solutions tailored to meet the evolving needs of the global market.
                        Delivering excellence across diverse sectors since 2009.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-gray-50/50 relative z-20">
                <Services />
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.15)_0%,_transparent_100%)]" />
                <div className="relative z-10 max-w-4xl 3xl:max-w-[1200px] 4xl:max-w-[1400px] mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Ready to start your journey?</h2>
                    <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        Contact us today to discuss how we can help you achieve your goals with our professional services and experts.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex bg-primary hover:bg-amber-600 text-white font-black py-5 px-12 rounded-full transition-all hover:scale-105 shadow-2xl shadow-primary/20 uppercase tracking-widest text-sm"
                    >
                        Get a Quote
                    </a>
                </div>
            </section>
        </>
    );
}
