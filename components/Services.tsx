"use client";

import { motion } from "framer-motion";
import { TrendingUp, Building2, Plane, Briefcase, Globe, Smartphone, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: TrendingUp,
        title: "L’investissement",
        description: "From concept to execution, we create memorable events that inspire, engage, and leave a lasting impression.",
    },
    {
        icon: Building2,
        title: "L’immobilier",
        description: "Connecting you to the best properties and investment opportunities with trust, transparency, and expertise.",
    },
    {
        icon: Plane,
        title: "Tourism",
        description: "Discover exceptional travel experiences, guided tours, and unique adventures that showcase the beauty of each destination.",
    },
    {
        icon: Briefcase,
        title: "Management (La gestion)",
        description: "Professional management services designed to streamline operations, optimize resources, and achieve sustainable growth.",
    },
    {
        icon: Globe,
        title: "Import & Export",
        description: "Facilitating global trade with reliable import and export solutions that connect markets and drive business success.",
    },
    {
        icon: Smartphone,
        title: "Web & App Development",
        description: "Innovative web and mobile applications designed to enhance your digital presence, boost user engagement, and drive business growth.",
    },
];

export default function Services() {
    return (
        <section className="py-20 bg-gray-50" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Our Capabilities</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Quality Services</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <Link href="#" className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all">
                                Learn more <ArrowRight size={16} className="ml-1" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
