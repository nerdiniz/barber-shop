"use client";

import "./styles.css";
import Image from "next/image";
import { Zap, Clock, MapPin, Phone, Scissors, User } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Orbitron, Rajdhani } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700", "900"], variable: "--font-orbitron" });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["300", "500", "700"], variable: "--font-rajdhani" });

export default function NeonCutsPage() {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`min-h-screen neon-container scroll-smooth ${orbitron.variable} ${rajdhani.variable}`}>

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 bg-[#050505]/90 border-b border-[#00f3ff]/20 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/neon-cuts-layout" className="flex items-center gap-2">
                        <Zap className="text-[#00f3ff]" fill="#00f3ff" />
                        <span className="neon-font-display text-2xl font-bold tracking-widest text-white">NEON<span className="text-[#ff00ff]">CUTS</span></span>
                    </Link>

                    <div className="hidden md:flex gap-8 font-bold uppercase tracking-widest text-sm">
                        <a href="#vibe" onClick={(e) => scrollToSection(e, 'vibe')} className="hover:text-[#00f3ff] transition-colors hover:shadow-[0_0_10px_#00f3ff]">Vibe</a>
                        <a href="#menu" onClick={(e) => scrollToSection(e, 'menu')} className="hover:text-[#ff00ff] transition-colors hover:shadow-[0_0_10px_#ff00ff]">Menu</a>
                        <a href="#crew" onClick={(e) => scrollToSection(e, 'crew')} className="hover:text-[#00f3ff] transition-colors hover:shadow-[0_0_10px_#00f3ff]">Crew</a>
                        <a href="#base" onClick={(e) => scrollToSection(e, 'base')} className="hover:text-[#ff00ff] transition-colors hover:shadow-[0_0_10px_#ff00ff]">Base</a>
                    </div>

                    <button className="neon-btn px-6 py-2 text-xs">Agendar</button>
                </div>
            </nav>

            {/* Hero */}
            <section id="vibe" className="min-h-screen flex items-center justify-center relative pt-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/modern.png"
                        alt="Neon Barber Background"
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
                </div>

                <div className="relative z-10 text-center max-w-4xl px-4">
                    <motion.h1
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="neon-font-display text-5xl md:text-8xl font-black mb-6 leading-tight"
                    >
                        <span className="neon-text-primary">O FUTURO</span> <br />
                        <span className="text-white">DO SEU</span> <br />
                        <span className="neon-text-secondary">ESTILO</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Mais que um corte. Uma atualização de sistema para sua imagem.
                        Barbearia moderna para quem vive no ritmo da cidade.
                    </p>
                    <div className="flex justify-center gap-6">
                        <button className="neon-btn px-8 py-4 text-sm">Iniciar Protocolo</button>
                    </div>
                </div>
            </section>

            {/* Services Menu */}
            <section id="menu" className="py-24 px-6 relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00f3ff] to-transparent opacity-50"></div>

                <div className="max-w-5xl mx-auto">
                    <h2 className="neon-font-display text-4xl text-center mb-16 neon-text-secondary uppercase">Menu de Serviços</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { name: "Corte Cyber", price: "R$ 70", desc: "Degradê de precisão, tesoura e texturização." },
                            { name: "Barba Laser", price: "R$ 50", desc: "Alinhamento com navalha e terapia de ozônio." },
                            { name: "Platinado", price: "R$ 180", desc: "Descoloração global com proteção." },
                            { name: "Pigmentação", price: "R$ 45", desc: "Correção de falhas com tinta HD." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="neon-card p-6 neon-border rounded-lg group"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-white group-hover:text-[#00f3ff] transition-colors">{item.name}</h3>
                                    <span className="text-xl font-bold neon-text-primary">{item.price}</span>
                                </div>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Crew Section */}
            <section id="crew" className="py-24 px-6 bg-[#0a0a0a]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="neon-font-display text-4xl text-center mb-16 neon-text-primary uppercase">Nossa Crew</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Neo", role: "Visionary Barber", color: "cyan" },
                            { name: "Trinity", role: "Style Architect", color: "pink" },
                            { name: "Morpheus", role: "Master Cutter", color: "cyan" }
                        ].map((member, i) => (
                            <div key={i} className={`neon-card p-1 rounded-xl ${member.color === 'cyan' ? 'neon-border' : 'neon-border-pink'}`}>
                                <div className="bg-[#050505] p-8 rounded-lg text-center h-full">
                                    <div className={`w-24 h-24 mx-auto mb-6 rounded-full border-2 flex items-center justify-center ${member.color === 'cyan' ? 'border-[#00f3ff]' : 'border-[#ff00ff]'}`}>
                                        <User className={member.color === 'cyan' ? 'text-[#00f3ff]' : 'text-[#ff00ff]'} size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold uppercase mb-2">{member.name}</h3>
                                    <p className={`text-sm tracking-widest uppercase ${member.color === 'cyan' ? 'text-[#00f3ff]' : 'text-[#ff00ff]'}`}>{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Base / Location */}
            <section id="base" className="py-20 px-6 relative border-t border-[#ff00ff]/20">
                <div className="max-w-4xl mx-auto bg-[#101010] p-10 rounded-2xl neon-border-pink text-center">
                    <h2 className="neon-font-display text-3xl mb-12 text-white">CONECTE-SE À BASE</h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="flex flex-col items-center">
                            <Clock className="text-[#ff00ff] mb-4" />
                            <h4 className="font-bold text-[#ff00ff] uppercase mb-2">Operação</h4>
                            <p className="text-gray-400">10:00 - 22:00</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <MapPin className="text-[#00f3ff] mb-4" />
                            <h4 className="font-bold text-[#00f3ff] uppercase mb-2">Coordenadas</h4>
                            <p className="text-gray-400">Setor Urbano 7, SP</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Zap className="text-[#ff00ff] mb-4" />
                            <h4 className="font-bold text-[#ff00ff] uppercase mb-2">Sinal</h4>
                            <p className="text-gray-400">@neoncuts.br</p>
                        </div>
                    </div>
                </div>

                <footer className="text-center mt-20 text-gray-600 text-xs uppercase tracking-widest">
                    <p>© 2024 Neon Cuts System. All Systems Online.</p>
                    <Link href="/" className="inline-block mt-4 hover:text-[#00f3ff] transition-colors">&gt;&gt; Logout / Voltar</Link>
                </footer>
            </section>
        </div>
    );
}
