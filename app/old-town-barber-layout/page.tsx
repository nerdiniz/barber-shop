"use client";

import "./styles.css";
import Image from "next/image";
import { Scissors, Music, Star, MapPin, Phone, User, Calendar } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function OldTownPage() {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen retro-container scroll-smooth">

            {/* Navbar with Barber Pole Top */}
            <div className="barber-pole-stripes h-4 w-full sticky top-0 z-50"></div>
            <nav className="sticky top-4 z-40 bg-white/95 backdrop-blur-md shadow-md mx-4 rounded-full border-2 border-slate-100 max-w-6xl md:mx-auto">
                <div className="px-8 py-3 flex justify-between items-center">
                    <Link href="/old-town-barber-layout" className="flex items-center gap-2">
                        <div className="bg-[#d62828] text-white p-1 rounded-full font-bold w-8 h-8 flex items-center justify-center">50</div>
                        <h1 className="retro-font-script text-3xl retro-blue pt-1">Old Town</h1>
                    </Link>

                    <div className="hidden md:flex gap-8 font-bold text-[#003049] uppercase tracking-wide text-sm">
                        <a href="#diner" onClick={(e) => scrollToSection(e, 'diner')} className="hover:text-[#d62828] transition-colors">The Shop</a>
                        <a href="#cuts" onClick={(e) => scrollToSection(e, 'cuts')} className="hover:text-[#d62828] transition-colors">Cuts & Shaves</a>
                        <a href="#crew" onClick={(e) => scrollToSection(e, 'crew')} className="hover:text-[#d62828] transition-colors">The Boys</a>
                        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-[#d62828] transition-colors">Find Us</a>
                    </div>

                    <button className="retro-btn text-xs py-2 px-6">Get Styled</button>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="diner" className="pt-16 pb-24 px-6 relative overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#d62828]/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#003049]/10 rounded-full blur-3xl -z-10"></div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="font-bold tracking-widest uppercase text-[#d62828] mb-4">Est. 1955 • California Vibes</h2>
                    <h1 className="retro-font-script text-7xl md:text-9xl retro-blue mb-6 retro-shadow-text">
                        Classic Style <br /> Never Dies
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto">
                        Cortes rockabilly, toalhas quentes e a melhor conversa da cidade.
                        Volte aos tempos onde o estilo era lei.
                    </p>

                    <div className="relative w-full max-w-3xl mx-auto h-[400px] rounded-3xl overflow-hidden border-8 border-white shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                        <Image
                            src="/vintage.png"
                            alt="50s Barbershop"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#003049]/40 to-transparent mix-blend-multiply"></div>

                        <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg transform -rotate-2">
                            <p className="font-bold text-[#d62828] uppercase text-xs">Now Playing</p>
                            <div className="flex items-center gap-2">
                                <Music size={20} className="retro-blue" />
                                <span className="font-bold retro-blue">Elvis Presley - Jailhouse Rock</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Pricing / Services - Jukebox Style */}
            <section id="cuts" className="py-20 px-6 bg-white relative">
                <div className="absolute inset-0 checkerboard-bg"></div>

                <div className="relative z-10 max-w-5xl mx-auto">
                    <div className="bg-[#f0f0f0] p-8 md:p-12 rounded-[50px] shadow-xl border-4 border-white ring-4 ring-slate-100">
                        <h2 className="retro-font-script text-5xl text-center text-[#d62828] mb-12">Service Menu</h2>

                        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
                            {[
                                { title: "The Pompadour", price: "$ 25.00" },
                                { title: "Classic Fade", price: "$ 20.00" },
                                { title: "Hot Towel Shave", price: "$ 18.00" },
                                { title: "Flat Top", price: "$ 22.00" },
                                { title: "Kids Cut", price: "$ 15.00" },
                                { title: "Beard Sculpt", price: "$ 12.00" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border-b-4 border-slate-100"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="bg-[#003049] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                                            {i + 1}
                                        </div>
                                        <span className="font-bold text-xl text-[#333]">{item.title}</span>
                                    </div>
                                    <span className="font-bold text-[#d62828] text-xl retro-font-script">{item.price}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Crew Section */}
            <section id="crew" className="py-24 px-6 bg-[#003049] text-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="retro-font-script text-5xl text-white mb-16">Meet the Boys</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Johnny &quot;Grease&quot;", role: "Head Barber" },
                            { name: "Jimmy Ray", role: "Fade Master" },
                            { name: "Frankie", role: "Classic Cuts" }
                        ].map((member, i) => (
                            <div key={i} className="bg-white text-[#333] p-2 rounded-2xl transform hover:-translate-y-2 transition-transform duration-300">
                                <div className="bg-slate-200 h-64 rounded-xl mb-4 relative overflow-hidden">
                                    <Image
                                        src="/vintage.png"
                                        alt={member.name}
                                        fill
                                        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                <h3 className="retro-font-script text-3xl text-[#d62828]">{member.name}</h3>
                                <p className="font-bold uppercase tracking-wider text-slate-500 mb-4">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact / Footer */}
            <section id="contact" className="py-20 px-6 bg-[#d62828] text-white text-center relative overflow-hidden">
                {/* Stripes bg */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)' }}></div>

                <div className="relative z-10 max-w-2xl mx-auto bg-white/10 backdrop-blur-lg p-12 rounded-3xl border border-white/20">
                    <Star className="w-12 h-12 mx-auto mb-6 text-[#ffcd3c]" fill="#ffcd3c" />
                    <h2 className="retro-font-script text-5xl mb-8">Drop By Anytime</h2>

                    <p className="text-2xl font-bold mb-2">555 Retro Avenue</p>
                    <p className="text-xl opacity-90 mb-8">Los Angeles, CA</p>

                    <div className="flex justify-center gap-6 mb-12">
                        <div className="bg-white text-[#d62828] p-3 rounded-full hover:scale-110 transition-transform cursor-pointer">
                            <Phone size={24} />
                        </div>
                        <div className="bg-white text-[#d62828] p-3 rounded-full hover:scale-110 transition-transform cursor-pointer">
                            <MapPin size={24} />
                        </div>
                        <div className="bg-white text-[#d62828] p-3 rounded-full hover:scale-110 transition-transform cursor-pointer">
                            <Calendar size={24} />
                        </div>
                    </div>

                    <Link href="/" className="inline-block bg-[#003049] text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-[#003049] transition-colors border-2 border-transparent hover:border-[#003049]">
                        Back to All Styles
                    </Link>
                </div>
            </section>
        </div>
    );
}
