"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { gsap } from "@/lib/gsap-animations";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Prevent scrolling while loading
        if (isLoading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isLoading]);

    const finishLoading = () => {
        const tl = gsap.timeline({
            onComplete: () => setIsLoading(false)
        });

        tl.to(".preloader-logo", {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            ease: "power4.inOut"
        })
            .to(".preloader-bg", {
                y: "-100%",
                duration: 1.2,
                ease: "expo.inOut",
                stagger: 0.1
            });
    };

    return (
        <AnimatePresence>
            {isLoading && (
                <div className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden">
                    {/* Background Layers */}
                    <div className="preloader-bg absolute inset-0 bg-white z-10" />
                    <div className="preloader-bg absolute inset-0 bg-primary z-0" />

                    <div className="relative z-20 flex flex-col items-center">
                        <motion.div
                            className="preloader-logo"
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.5
                            }}
                            onAnimationComplete={finishLoading}
                        >
                            <Logo variant="silver" className="scale-150" showText={false} />
                            <motion.div
                                className="mt-8 overflow-hidden h-8"
                                initial={{ width: 0 }}
                                animate={{ width: "auto" }}
                                transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
                            >
                                <span className="text-primary text-3xl font-black tracking-[0.5em] uppercase whitespace-nowrap">
                                    AHLANBEK
                                </span>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-primary/20"
                            initial={{ width: 0 }}
                            animate={{ width: 192 }}
                            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                        >
                            <motion.div
                                className="h-full bg-primary"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                            />
                        </motion.div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
}
