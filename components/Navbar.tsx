"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { gsap } from "@/lib/gsap-animations";
import { useGSAP } from "@/lib/gsap-animations";
import Logo from "./Logo";

// Navigation component - Updated menu order
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const navRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const btnRef = useRef<HTMLDivElement>(null);

    // Dark header pages need white text initially
    const isDarkHeader = pathname === "/contact" ||
        pathname === "/about-us" ||
        pathname === "/services" ||
        pathname === "/projects" ||
        pathname?.startsWith("/services/");

    const isTransparentPage = true;
    const effectiveScrolled = scrolled;

    const textColor = effectiveScrolled ? "text-slate-900" : isDarkHeader ? "text-white" : "text-slate-900";
    const logoColor = effectiveScrolled ? "text-blue-600" : isDarkHeader ? "text-white" : "text-blue-600";
    const hoverColor = effectiveScrolled ? "hover:text-blue-600" : isDarkHeader ? "hover:text-blue-200" : "hover:text-blue-600";
    const buttonBg = effectiveScrolled ? "bg-blue-600 text-white hover:bg-blue-700" : isDarkHeader ? "bg-white text-blue-600 hover:bg-gray-100" : "bg-blue-600 text-white hover:bg-blue-700";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1 } });

        tl.fromTo(navRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 })
            .fromTo(logoRef.current, { x: -20, opacity: 0 }, { x: 0, opacity: 1 }, "-=0.8")
            .fromTo(linksRef.current?.children || [], { y: -10, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1 }, "-=0.6")
            .fromTo(btnRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1 }, "-=0.4");
    });

    useGSAP(() => {
        if (isOpen) {
            gsap.fromTo(mobileMenuRef.current,
                { height: 0, opacity: 0 },
                { height: "auto", opacity: 1, duration: 0.5, ease: "power3.out" }
            );
            gsap.fromTo(mobileMenuRef.current?.querySelectorAll(".mobile-link") || [],
                { x: -20, opacity: 0 },
                { x: 0, opacity: 1, stagger: 0.1, delay: 0.2 }
            );
        } else {
            gsap.to(mobileMenuRef.current, { height: 0, opacity: 0, duration: 0.3, ease: "power3.in" });
        }
    }, [isOpen]);

    return (
        <nav
            ref={navRef}
            className={`fixed w-full z-50 transition-all duration-300 ${effectiveScrolled
                ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-2"
                : "bg-transparent py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div ref={logoRef} className="flex-shrink-0 opacity-0">
                        <Link href="/" className="flex items-center gap-2">
                            <Logo
                                variant={effectiveScrolled ? "silver" : (isDarkHeader ? "light" : "silver")}
                                showText={false}
                                className="scale-75 sm:scale-100 origin-left"
                            />
                            <span className={`text-xl font-black tracking-tighter ${effectiveScrolled ? "text-slate-500" : (isDarkHeader ? "text-slate-300" : "text-slate-500")}`}>
                                AHLANBEK
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div ref={linksRef} className="ml-10 flex items-baseline space-x-8">
                            {["Home", "Services", "Projects", "About Us", "Contact"].map((item) => (
                                <Link
                                    key={item}
                                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                                    className={`${textColor} ${hoverColor} px-3 py-2 rounded-md text-sm font-medium transition-all hover:-translate-y-0.5 opacity-0`}
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div ref={btnRef} className="hidden md:block opacity-0">
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

            <div
                ref={mobileMenuRef}
                className="md:hidden bg-white border-b border-gray-100 overflow-hidden h-0 opacity-0"
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {["Home", "Services", "Projects", "About Us", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                            className="mobile-link block text-gray-700 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium opacity-0"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
