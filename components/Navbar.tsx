"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Dark header pages (Home, Contact, About Us, Services) need white text initially
    const isDarkHeader = pathname === "/" || pathname === "/contact" || pathname === "/about-us" || pathname === "/services";

    // All pages now have dark headers, so all support transparent navbar
    const isTransparentPage = true;
    const effectiveScrolled = scrolled;

    const textColor = effectiveScrolled ? "text-gray-700" : isDarkHeader ? "text-white" : "text-gray-700";
    const logoColor = effectiveScrolled ? "text-primary" : isDarkHeader ? "text-white" : "text-primary";
    const hoverColor = effectiveScrolled ? "hover:text-primary" : isDarkHeader ? "hover:text-blue-300" : "hover:text-primary";
    const buttonBg = effectiveScrolled ? "bg-primary text-white" : isDarkHeader ? "bg-white text-primary hover:bg-gray-100" : "bg-primary text-white";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${effectiveScrolled
                ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-2"
                : "bg-transparent py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className={`font-bold text-2xl flex items-center gap-2 ${logoColor}`}>
                            <span className={`${effectiveScrolled || !isDarkHeader ? "bg-primary text-white" : "bg-white text-primary"} w-8 h-8 rounded-lg flex items-center justify-center text-lg`}>A</span>
                            Ahlanbek
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {["Home", "Services", "Contact", "About Us"].map((item) => (
                                <Link
                                    key={item}
                                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                                    className={`${textColor} ${hoverColor} px-3 py-2 rounded-md text-sm font-medium transition-all hover:-translate-y-0.5`}
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <Link href="/contact" className={`${buttonBg} px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}>
                            Get Started
                        </Link>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className={`inline-flex items-center justify-center p-2 rounded-md ${textColor} hover:text-primary focus:outline-none`}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {["Home", "Services", "Contact", "About Us"].map((item, index) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                                        className="block text-gray-700 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
