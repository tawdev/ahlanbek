"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ContactForm() {
    const searchParams = useSearchParams();
    const serviceParam = searchParams.get("service");

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    useEffect(() => {
        if (serviceParam) {
            setFormState(prev => ({ ...prev, subject: serviceParam }));
        }
    }, [serviceParam]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const phoneNumber = "212607790956";
        const message = `Bonjour Ahlanbek!%0A%0A*Name:* ${formState.name}%0A*Email:* ${formState.email}%0A*Subject:* ${formState.subject}%0A*Message:* ${formState.message}`;

        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    const services = [
        "Events & Investment",
        "Real Estate",
        "Tourism Services",
        "Management Services",
        "Import & Export",
        "Web & App Development"
    ];

    return (
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50/50 p-8 md:p-12 rounded-[40px] border border-gray-100 backdrop-blur-sm"
            >
                <h2 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Full Name</label>
                            <input
                                type="text"
                                className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-gray-400 font-medium"
                                placeholder="John Doe"
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email Address</label>
                            <input
                                type="email"
                                className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-gray-400 font-medium"
                                placeholder="john@example.com"
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Service Required</label>
                        <select
                            className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium appearance-none"
                            value={formState.subject}
                            onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                            required
                        >
                            <option value="" disabled>Select a service</option>
                            {services.map(service => (
                                <option key={service} value={service}>{service}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Your Message</label>
                        <textarea
                            rows={5}
                            className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none placeholder:text-gray-400 font-medium"
                            placeholder="Tell us about your project..."
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-amber-600 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-2xl shadow-primary/25 active:scale-95"
                    >
                        <Send size={22} strokeWidth={2.5} />
                        <span className="text-lg">Send via WhatsApp</span>
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
                            <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-primary shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">Our Headquarter</h4>
                                <p className="text-gray-500">Lot iguider N48 AV Allal El Fassi,<br />Marrakesh, Morocco</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-primary shrink-0">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">Phone Number</h4>
                                <p className="text-gray-500">+212 607 790 956 / +212 524 308 038</p>
                                <p className="text-gray-400 text-sm">Mon-Fri 9am-6pm</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-primary shrink-0">
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
    );
}

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <section className="bg-slate-950 pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.1))] from-slate-900 via-slate-950 to-slate-950" />
                <div className="max-w-7xl 3xl:max-w-[1500px] 4xl:max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter"
                    >
                        Get in <span className="text-primary">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-400 max-w-2xl mx-auto font-light"
                    >
                        Have a project in mind or want to learn more about our services? We'd love to hear from you.
                    </motion.p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl 3xl:max-w-[1500px] 4xl:max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
                    <Suspense fallback={<div className="h-96 flex items-center justify-center font-bold text-2xl text-slate-400 animate-pulse">Loading Contact Form...</div>}>
                        <ContactForm />
                    </Suspense>
                </div>
            </section>
        </div>
    );
}
