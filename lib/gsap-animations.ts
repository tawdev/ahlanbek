"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLayoutEffect } from "react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export const useGSAP = (callback: () => void, deps: any[] = []) => {
    useLayoutEffect(() => {
        const ctx = gsap.context(callback);
        return () => ctx.revert();
    }, deps);
};

export { gsap, ScrollTrigger };
