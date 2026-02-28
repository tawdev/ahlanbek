"use client";

import { useRef, useEffect, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { gsap } from "@/lib/gsap-animations";
import { useGSAP } from "@/lib/gsap-animations";

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const sectionRef = useRef<HTMLDivElement>(null);
    const formContainerRef = useRef<HTMLDivElement>(null);
    const infoContainerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const bgGradientRef = useRef<HTMLDivElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const phoneNumber = "212607790956";
        const messageText = `Bonjour Ahlanbek!\n\n*Nom:* ${formState.name}\n*Email:* ${formState.email}\n*Service:* ${formState.subject}\n*Message:* ${formState.message}`;
        const encodedText = encodeURIComponent(messageText);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
    };

    const services = [
        "Events & Investment",
        "Real Estate",
        "Tourism Services",
        "Management Services",
        "Import & Export",
        "Web & App Development"
    ];

    useGSAP(() => {
        // Floating Background Gradient Animation
        gsap.to(bgGradientRef.current, {
            x: "20%",
            y: "15%",
            duration: 8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
            }
        });

        // Entrance Animations
        tl.fromTo(formContainerRef.current,
            { x: -80, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power4.out", clearProps: "all" }
        )
            .fromTo(Array.from(formContainerRef.current?.querySelectorAll(".form-item") || []),
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out", clearProps: "all" },
                "-=0.6"
            )
            .fromTo(buttonRef.current,
                { scale: 0.9, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out", clearProps: "all" },
                "-=0.4"
            );

        gsap.fromTo(infoContainerRef.current,
            { x: 80, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: infoContainerRef.current,
                    start: "top 75%",
                },
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "expo.out",
                clearProps: "all"
            }
        );

        gsap.fromTo(Array.from(infoContainerRef.current?.children || []),
            { y: 30, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: infoContainerRef.current,
                    start: "top 75%",
                },
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.8,
                ease: "power3.out",
                clearProps: "all"
            }
        );

        // Magnetic Button Effect
        const handleMouseMove = (e: MouseEvent) => {
            if (!buttonRef.current) return;
            const { clientX, clientY } = e;
            const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;
            const moveX = (clientX - centerX) * 0.3;
            const moveY = (clientY - centerY) * 0.3;

            gsap.to(buttonRef.current, {
                x: moveX,
                y: moveY,
                duration: 0.4,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = () => {
            gsap.to(buttonRef.current, {
                x: 0,
                y: 0,
                duration: 0.6,
                ease: "elastic.out(1, 0.3)"
            });
        };

        buttonRef.current?.addEventListener("mousemove", handleMouseMove);
        buttonRef.current?.addEventListener("mouseleave", handleMouseLeave);

        // Focus State Animations (Glow Effect)
        const inputs = sectionRef.current?.querySelectorAll("input, textarea, select");
        inputs?.forEach(input => {
            input.addEventListener("focus", () => {
                gsap.to(input, {
                    boxShadow: "0 0 15px rgba(212, 175, 55, 0.2)",
                    borderColor: "#D4AF37",
                    duration: 0.3
                });
            });
            input.addEventListener("blur", () => {
                gsap.to(input, {
                    boxShadow: "none",
                    borderColor: "#e5e7eb",
                    duration: 0.3
                });
            });
        });

        // Parallax Effect on Scroll
        gsap.to(infoContainerRef.current, {
            y: -30,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        return () => {
            buttonRef.current?.removeEventListener("mousemove", handleMouseMove);
            buttonRef.current?.removeEventListener("mouseleave", handleMouseLeave);
        };
    });

    return (
        <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden" id="contact">
            {/* Animated Background Gradient */}
            <div
                ref={bgGradientRef}
                className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-amber-50/50 rounded-full blur-[120px] -z-10"
            />

            <div className="max-w-7xl 3xl:max-w-[1500px] 4xl:max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Side: Contact Form */}
                    <div ref={formContainerRef} className="bg-white p-8 md:p-12 rounded-[40px] border border-gray-100 backdrop-blur-sm shadow-sm">
                        <h2 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">Send us a message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="form-item">
                                    <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 outline-none transition-all placeholder:text-gray-400 font-medium"
                                        placeholder="John Doe"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="form-item">
                                    <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 outline-none transition-all placeholder:text-gray-400 font-medium"
                                        placeholder="john@example.com"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-item">
                                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Service Required</label>
                                <select
                                    className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 outline-none transition-all font-medium appearance-none"
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
                            <div className="form-item">
                                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Your Message</label>
                                <textarea
                                    rows={5}
                                    className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 outline-none transition-all resize-none placeholder:text-gray-400 font-medium"
                                    placeholder="Tell us about your project..."
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    required
                                ></textarea>
                            </div>
                            <button
                                ref={buttonRef}
                                type="submit"
                                className="w-full bg-primary hover:bg-amber-600 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-colors shadow-2xl shadow-primary/25 active:scale-95"
                            >
                                <Send size={22} strokeWidth={2.5} />
                                <span className="text-lg">Send via WhatsApp</span>
                            </button>
                        </form>
                    </div>

                    {/* Right Side: Contact Info */}
                    <div ref={infoContainerRef} className="lg:py-8 space-y-12">
                        <div>
                            <span className="inline-block text-primary font-bold uppercase tracking-widest text-xs mb-4">Get in touch</span>
                            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 tracking-tighter">Contact Information</h2>
                            <p className="text-gray-500 text-xl font-light leading-relaxed max-w-md">
                                Have a question or want to work together? Drop us a line and we'll get back to you within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {[
                                {
                                    icon: MapPin,
                                    title: "Our Headquarter",
                                    desc: "Lot iguider N48 AV Allal El Fassi, Marrakesh, Morocco",
                                    color: "bg-amber-50 text-primary"
                                },
                                {
                                    icon: Phone,
                                    title: "Phone Number",
                                    desc: "+212 607 790 956 / +212 524 308 038",
                                    color: "bg-amber-100 text-[#B8860B]"
                                },
                                {
                                    icon: Mail,
                                    title: "Email Address",
                                    desc: "contact@ahlanbek.com",
                                    color: "bg-amber-50 text-[#DAA520]"
                                }
                            ].map((item, i) => (
                                <div key={i} className="info-item flex items-start gap-6 group">
                                    <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                                        <item.icon size={28} strokeWidth={2} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-gray-900 text-xl tracking-tight mb-1">{item.title}</h4>
                                        <p className="text-gray-500 text-lg font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Decorative Line */}
                        <div className="w-20 h-1.5 bg-primary rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}
