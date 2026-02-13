"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formState);
        alert("Message sent! (This is a demo)");
    };

    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <section className="bg-gray-900 pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-gray-900 to-gray-900" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Get in <span className="text-blue-500">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Have a project in mind or want to learn more about our services? We'd love to hear from you.
                    </motion.p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                            placeholder="John Doe"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                            placeholder="john@example.com"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        placeholder="Project Inquiry"
                                        value={formState.subject}
                                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                    <textarea
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                                        placeholder="Tell us about your project..."
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-lg shadow-blue-500/30"
                                >
                                    <Send size={20} />
                                    Send Message
                                </button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                                    We are here to help and answer any question you might have. We look forward to hearing from you.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">Our Headquarter</h4>
                                            <p className="text-gray-500">Lot iguider N48 AV Allal El Fassi,<br />Marrakesh, Morocco</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">Phone Number</h4>
                                            <p className="text-gray-500">+212 524 33 55 66</p>
                                            <p className="text-gray-400 text-sm">Mon-Fri 9am-6pm</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">Email Address</h4>
                                            <p className="text-gray-500">contact@ahlanbek.com</p>
                                            <p className="text-gray-400 text-sm">We reply within 24 hours</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Embed */}
                            <div className="w-full h-[300px] bg-gray-200 rounded-3xl overflow-hidden shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13586.87329547072!2d-8.033480838612187!3d31.642996963286395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakesh!5e0!3m2!1sen!2sma!4v1707755555555!5m2!1sen!2sma"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: "grayscale(100%) invert(0%)" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
