"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap-animations";
import { useGSAP } from "@/lib/gsap-animations";
import SplitTextReveal from "./SplitTextReveal";

const steps = [
    {
        id: "01",
        title: "Strategy & Consultation",
        description: "We begin by deeply understanding your vision and market potential, crafting a tailored roadmap for your success.",
        color: "bg-primary",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
        id: "02",
        title: "Market Analysis",
        description: "Our experts perform exhaustive research to identify unique opportunities and mitigate risks in the global marketplace.",
        color: "bg-slate-900",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
        id: "03",
        title: "Execution & Management",
        description: "We deploy resources with precision, managing every operational detail to ensure your project's seamless realization.",
        color: "bg-amber-600",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
    },
    {
        id: "04",
        title: "Growth & Optimization",
        description: "Post-launch, we continuously monitor and refine your operations to maximize efficiency and sustainable long-term growth.",
        color: "bg-slate-800",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
    }
];

export default function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLElement>(".process-card");

            // This creates the "stacking" effect
            cards.forEach((card, i) => {
                if (i === cards.length - 1) return; // Don't animate the last card

                gsap.to(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                        pin: true,
                        pinSpacing: false,
                    },
                    opacity: 0.1,
                    scale: 0.9,
                    filter: "blur(4px)",
                    duration: 1
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-white relative">
            <div className="max-w-7xl 3xl:max-w-[1500px] 4xl:max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20">
                    <span className="inline-block text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4">
                        Workflow
                    </span>
                    <SplitTextReveal className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-[0.9]">
                        Our Strategic Process.
                    </SplitTextReveal>
                </div>

                <div ref={containerRef} className="relative space-y-0">
                    {steps.map((step, i) => (
                        <div
                            key={step.id}
                            className="process-card sticky top-24 min-h-[70vh] w-full flex flex-col md:flex-row items-stretch rounded-[2.5rem] overflow-hidden shadow-2xl mb-[10vh] border border-white/10"
                            style={{ zIndex: i + 1 }}
                        >
                            {/* Left Content */}
                            <div className={`${step.color} w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center text-white relative`}>
                                <span className="text-8xl md:text-[12rem] font-black opacity-10 absolute -top-10 -left-5 tracking-tighter">
                                    {step.id}
                                </span>
                                <div className="relative z-10">
                                    <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                                        {step.title}
                                    </h3>
                                    <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
                                        {step.description}
                                    </p>
                                    <div className="mt-12 flex items-center gap-4 group cursor-pointer w-fit">
                                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:text-primary">
                                            <span className="text-sm font-bold">→</span>
                                        </div>
                                        <span className="text-sm font-bold uppercase tracking-widest">Explore Stage</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="w-full md:w-1/2 relative min-h-[40vh] md:min-h-full overflow-hidden">
                                <img
                                    src={step.image}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                                    alt={step.title}
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
