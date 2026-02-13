"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative bg-gray-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-gray-900 to-gray-900" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-semibold mb-8 backdrop-blur-sm border border-blue-500/30"
                    >
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
                        </span>
                        #1 Leading International Company
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1]"
                    >
                        Make Your Dream <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                            Become True
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto"
                    >
                        Since 2009 in Germany, we have been working on the supply of necessary things in Morocco.
                        Following the demand, in 2012 we opened a Moroccan office and expanded our contacts and sales channels.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link href="/services" className="group w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 flex items-center justify-center gap-2 text-lg">
                            Our Services
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/contact" className="group w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2 hover:border-gray-300 text-lg">
                            Contact Us
                            <ChevronRight size={20} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -5, 0],
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl shadow-inner"
                />
            </div>
        </section>
    );
}
