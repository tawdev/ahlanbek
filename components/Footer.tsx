"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    <div className="lg:col-span-4">
                        <Link href="/" className="font-bold text-3xl text-primary flex items-center gap-2 mb-6">
                            <span className="bg-primary text-white w-10 h-10 rounded-xl flex items-center justify-center text-xl">A</span>
                            Ahlanbek
                        </Link>
                        <p className="text-gray-500 mb-8 leading-relaxed text-lg">
                            Making your dream become true since 2009. We connect markets, people, and opportunities with quality services and unwavering commitment.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg">
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2 lg:col-start-6">
                        <h4 className="text-gray-900 font-bold mb-6 text-lg">Quick Links</h4>
                        <ul className="space-y-4">
                            {["Home", "Services", "About Us", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`} className="text-gray-500 hover:text-primary transition-colors flex items-center gap-1 group">
                                        {item}
                                        <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-gray-900 font-bold mb-6 text-lg">Services</h4>
                        <ul className="space-y-4">
                            {["Investment", "Real Estate", "Tourism", "Import & Export"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h4 className="text-gray-900 font-bold mb-6 text-lg">Contact Info</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="p-2 bg-blue-50 text-primary rounded-lg shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <span className="text-gray-500">Lot iguider N48 AV Allal El Fassi, Marrakesh, Morocco</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="p-2 bg-blue-50 text-primary rounded-lg shrink-0">
                                    <Phone size={20} />
                                </div>
                                <span className="text-gray-500">+212 524 33 55 66</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="p-2 bg-blue-50 text-primary rounded-lg shrink-0">
                                    <Mail size={20} />
                                </div>
                                <span className="text-gray-500">contact@ahlanbek.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} C-Digital. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-gray-400">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
