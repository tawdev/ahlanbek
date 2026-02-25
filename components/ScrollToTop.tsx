'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollYProgress } = useScroll();

    // Smooth progress animation for the circle
    const scaleProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Toggle visibility based on scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll to top handler
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.5,
            }}
            onClick={scrollToTop}
            className="fixed bottom-28 right-8 z-50 flex items-center justify-center p-0 bg-transparent rounded-full group font-outfit cursor-pointer"
            aria-label="Scroll to top"
        >
            <div className="relative flex items-center justify-center w-14 h-14">
                {/* SVG Circle Progress */}
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="4"
                        className="text-slate-200"
                    />
                    {/* Progress circle */}
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        stroke="#D4AF37" // Metallic Gold
                        strokeWidth="4"
                        strokeDasharray="0 1"
                        style={{ pathLength: scaleProgress }}
                        className="drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
                    />
                </svg>

                {/* Icon */}
                <div className="relative z-10 text-industrial-dark transition-transform duration-300 group-hover:-translate-y-1 cursor-pointer">
                    <ArrowUp size={24} />
                </div>

                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-full bg-amber-500/0 group-hover:bg-amber-500/5 transition-colors duration-300" />
            </div>
        </motion.button>
    );
}
