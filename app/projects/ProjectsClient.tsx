"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

interface Project {
    id: number;
    title: string;
    location: string;
    category: string;
    image: string;
}

const projects: Project[] = [
    { id: 1, title: "Science Lab Building", location: "New York, USA", category: "Commercial", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" },
    { id: 2, title: "Long Gate Bridge", location: "Malmo, SE", category: "Infrastructure", image: "https://images.unsplash.com/photo-1555109307-f7d9da25c244?w=800&q=80" },
    { id: 3, title: "Enix Lawyer Building", location: "Toronto, CA", category: "Commercial", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80" },
    { id: 4, title: "Deep Sea Bridge", location: "Athens, GR", category: "Infrastructure", image: "https://images.unsplash.com/photo-1449156733864-dd5471bb7427?w=800&q=80" },
    { id: 5, title: "Car Tech Building", location: "Denver, USA", category: "Technology", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
    { id: 6, title: "Nuctech Building", location: "Texas, USA", category: "Technology", image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&q=80" },
    { id: 7, title: "Vax Tech Building", location: "Ontario, CA", category: "Healthcare", image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80" },
    { id: 8, title: "Food Lab Building", location: "Athens, GR", category: "Research", image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&q=80" },
];

const categories = ["All", "Commercial", "Infrastructure", "Technology", "Healthcare", "Research"];

export default function ProjectsClient() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <section className="bg-gray-900 pt-48 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-gray-900 to-gray-900" />
                <div className="max-w-7xl 3xl:max-w-[1500px] 4xl:max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-6 backdrop-blur-sm border border-primary/30"
                    >
                        Our Portfolio
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Latest <span className="text-primary">Projects</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Explore our portfolio of successful projects delivered across the globe
                    </motion.p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
                <div className="max-w-7xl 3xl:max-w-[1500px] 4xl:max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category, index) => (
                            <motion.button
                                key={category}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2.5 rounded-full font-semibold transition-all ${selectedCategory === category
                                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                                    }`}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20">
                <div className="max-w-7xl 3xl:max-w-[1500px] 4xl:max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                            >
                                {/* Image */}
                                <div className="relative h-80 overflow-hidden">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Hover Icon */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileHover={{ opacity: 1, scale: 1 }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                                    >
                                        <ArrowRight className="text-white" size={28} />
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <MapPin size={18} className="text-primary" />
                                        <span className="text-sm font-medium">{project.location}</span>
                                    </div>
                                </div>

                                {/* Bottom Accent */}
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-amber-600"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <p className="text-gray-500 text-lg">No projects found in this category</p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gray-900 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-gray-900 to-gray-900" />
                <div className="relative z-10 max-w-4xl 3xl:max-w-[1200px] 4xl:max-w-[1400px] mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-6"
                    >
                        Have a project in mind?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg mb-8"
                    >
                        Let's work together to bring your vision to life
                    </motion.p>
                    <motion.a
                        href="/contact"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block bg-primary hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg shadow-primary/30"
                    >
                        Start Your Project
                    </motion.a>
                </div>
            </section>
        </div>
    );
}
