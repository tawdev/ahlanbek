"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-white text-2xl font-bold mb-4">Ahlanbek</h3>
                        <p className="text-gray-400 mb-4">
                            Making your dream become true since 2009. We connect markets and people with quality services.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-white transition-colors">Investment</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Real Estate</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Tourism</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Import & Export</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="mt-1 text-primary" />
                                <span>Lot iguider N48 AV Allal El Fassi, Marrakesh, Morocco</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-primary" />
                                <span>+212 524 33 55 66</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-primary" />
                                <span>contact@ahlanbek.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Ahlanbek. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
