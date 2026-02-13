"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Alice Howard",
        role: "Interior Designer",
        content: "The best service provider we have worked with. Their attention to detail is unmatched.",
        rating: 5,
    },
    {
        name: "Nathan Marshall",
        role: "Architect",
        content: "Incredible results! They truly understood our vision and executed it perfectly.",
        rating: 5,
    },
    {
        name: "Ema Romero",
        role: "Manager",
        content: "Professional, reliable, and efficient. I highly recommend their services to everyone.",
        rating: 5,
    },
    {
        name: "Ann Smith",
        role: "CEO",
        content: "A game-changer for our business. The growth we've seen since partnering is phenomenal.",
        rating: 5,
    },
    {
        name: "John Doe",
        role: "Developer",
        content: "Top-notch quality and support. They went above and beyond our expectations.",
        rating: 5,
    },
];

// Duplicate for infinite scroll
const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                    What Our Clients Say
                </h2>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                    Trusted by industry leaders across the globe.
                </p>
            </div>

            <div className="relative w-full overflow-hidden mask-gradient-x">
                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-8 w-max"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30,
                    }}
                >
                    {duplicatedTestimonials.map((item, index) => (
                        <div
                            key={index}
                            className="w-[350px] md:w-[450px] bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100 flex-shrink-0 hover:border-blue-200 transition-colors group"
                        >
                            <div className="mb-6 flex justify-between items-start">
                                <div className="p-3 bg-blue-100 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Quote size={24} fill="currentColor" />
                                </div>
                                <div className="flex gap-1 text-yellow-400">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star key={i} size={18} fill="currentColor" />
                                    ))}
                                </div>
                            </div>

                            <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">"{item.content}"</p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                                    {/* Placeholder Avatar */}
                                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base">{item.name}</h4>
                                    <p className="text-sm text-primary font-medium">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
