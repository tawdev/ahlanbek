"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";

interface Stat {
    value: string;
    label: string;
}

interface Feature {
    title: string;
    description: string;
    icon: string;
}

interface ProcessStep {
    step: number;
    title: string;
    description: string;
}

interface Service {
    title: string;
    description: string;
    image: string;
    color: string;
    icon: string;
    stats: Stat[];
    features: Feature[];
    process: ProcessStep[];
    benefits: string[];
}

export default function ServiceDetailClient({ service }: { service: Service }) {
    // Dynamically get the icon component
    const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Star;

    return (
        <main className="min-h-screen bg-gray-50/50">
            {/* Hero Section */}
            <section className="bg-gray-900 pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-gray-900 to-gray-900" />

                {/* Background Image with Overlay */}
                <div className="absolute inset-0 opacity-20">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className={`inline-flex items-center justify-center w-20 h-20 ${service.color} rounded-3xl mb-6 shadow-lg`}
                            >
                                <IconComponent className="w-10 h-10 text-white" />
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-6xl font-bold text-white mb-4"
                            >
                                {service.title}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-gray-300 mb-8 leading-relaxed"
                            >
                                {service.description}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-wrap gap-4"
                            >
                                <Link
                                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:scale-105"
                                >
                                    Get Started
                                    <ArrowRight size={20} />
                                </Link>
                                <Link
                                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full transition-all backdrop-blur-sm border border-white/20"
                                >
                                    Contact Us
                                </Link>
                            </motion.div>
                        </div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="grid grid-cols-2 gap-6"
                        >
                            {service.stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                                >
                                    <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                                    <div className="text-gray-300 text-sm">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Key Features
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Discover what makes our {service.title.toLowerCase()} services exceptional
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {service.features.map((feature, index) => {
                            const FeatureIcon = (LucideIcons as any)[feature.icon] || LucideIcons.Star;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all border border-gray-100"
                                >
                                    <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                                        <FeatureIcon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Process
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            A streamlined approach to delivering exceptional results
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {service.process.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                                    <div className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl`}>
                                        {step.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                                {index < service.process.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Why Choose Us?
                            </h2>
                            <p className="text-gray-600 text-lg mb-8">
                                We deliver exceptional value through our commitment to excellence and customer satisfaction.
                            </p>
                            <div className="space-y-4">
                                {service.benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className={`w-6 h-6 ${service.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <p className="text-gray-700">{benefit}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/50 via-gray-900 to-gray-900" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-6"
                    >
                        Ready to Get Started?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg mb-8"
                    >
                        Let's discuss how our {service.title.toLowerCase()} services can help you achieve your goals
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Link
                            href={`/contact?service=${encodeURIComponent(service.title)}`}
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg shadow-blue-500/30 hover:scale-105"
                        >
                            Contact Us Today
                            <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-full transition-all backdrop-blur-sm border border-white/20"
                        >
                            View All Services
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
