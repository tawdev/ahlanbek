"use client";

import { useEffect, ReactNode } from 'react';
import Lenis from 'lenis';
import { usePathname } from 'next/navigation';
import { gsap } from '@/lib/gsap-animations';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface SmoothScrollProps {
    children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
    const pathname = usePathname();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        const updateHandler = (time: number) => {
            lenis.raf(time * 1000);
        };

        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add(updateHandler);
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove(updateHandler);
        };
    }, []);

    // Refresh ScrollTrigger on route change to fix inconsistent footer/element rendering
    useEffect(() => {
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);
        return () => clearTimeout(timer);
    }, [pathname]);

    return <>{children}</>;
}
