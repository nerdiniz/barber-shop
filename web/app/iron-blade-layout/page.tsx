"use client";

import "./styles.css";
import Image from "next/image";
import { Hammer, Clock, MapPin, Shield, Star, Award } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function IronBladePage() {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen iron-container iron-texture scroll-smooth">

            <nav className="fixed w-full z-50 bg-[#121212] border-b border-[#333]">
                <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                    <Link href="/iron-blade-layout" className="iron-font-heading text-3xl font-bold tracking-tighter text-white">
                        IRON<span className="iron-accent">BLADE</span>
                    </Link>

                    <div className="hidden md:flex gap-8 font-bold uppercase tracking-wider text-sm">
                        <a href="#forge" onClick={(e) => scrollToSection(e, 'forge')} className="hover:text-white transition-colors">A Forja</a>
                        <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-white transition-colors">Serviços</a>
                        <a href="#team" onClick={(e) => scrollToSection(e, 'team')} className="hover:text-white transition-colors">Equipe</a>
                        <a href="#location" onClick={(e) => scrollToSection(e, 'location')} className="hover:text-white transition-colors">QG</a>
                    </div>

                    <button className="iron-btn px-6 py-2">Agendar</button>
                </div>
            </nav>

            {/* Hero */}
            <section id="forge" className="pt-20 min-h-screen flex items-center relative border-b border-[#333]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/modern.png" // Fallback image
                        alt="Industrial BG"
                        fill
                        className="object-cover grayscale brightness-25"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                    >
                        <div className="inline-block bg-[#333] px-3 py-1 mb-6 text-xs font-bold uppercase tracking-wider text-white">Desde 2015</div>
                        <h1 className="iron-font-heading text-7xl md:text-9xl font-bold text-white leading-none mb-8">
                            CORTES <br /> <span className="iron-accent">AÇO &</span> <br /> ESTILO
                        </h1>
                        <p className="text-xl max-w-md mb-10 text-gray-400">
                            Barbearia industrial para homens que valorizam força, precisão e um ambiente sem frescuras.
                        </p>
                        <button className="iron-btn px-10 py-4 text-lg">Garantir Vaga</button>
                    </motion.div>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="py-24 px-6 bg-[#1a1a1a]">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="h-2 w-12 iron-bg-accent"></div>
                        <h2 className="iron-font-heading text-4xl text-white">Nossos Trabalhos</h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            { name: "Corte Navalhado", desc: "Acabamento zero, precisão cirúrgica.", price: "R$ 65" },
                            { name: "Barba Lenhador", desc: "Modelagem bruta e tratamento de pele.", price: "R$ 55" },
                            { name: "Corte + Barba", desc: "Manutenção completa da armadura.", price: "R$ 100" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#121212] p-8 border-l-4 border-[#333] hover:border-[#ff4500] transition-colors flex justify-between items-center group"
                            >
                                <div>
                                    <h3 className="iron-font-heading text-2xl text-white mb-2">{item.name}</h3>
                                    <p className="text-gray-500">{item.desc}</p>
                                </div>
                                <span className="iron-font-heading text-3xl iron-accent">{item.price}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section id="team" className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="iron-font-heading text-4xl text-white text-center mb-16">Comando</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Sargento", role: "Líder" },
                            { name: "Viking", role: "Especialista em Barba" },
                            { name: "Titan", role: "Cortes Clássicos" }
                        ].map((member, i) => (
                            <div key={i} className="bg-[#1a1a1a] h-80 relative group overflow-hidden border border-[#333]">
                                <div className="absolute inset-0 flex items-center justify-center bg-[#222]">
                                    <Shield size={64} className="text-[#333] group-hover:text-[#ff4500] transition-colors" />
                                </div>
                                <div className="absolute bottom-0 left-0 w-full bg-[#ff4500] p-4 transform translate-y-full group-hover:translate-y-0 transition-transform">
                                    <h3 className="iron-font-heading text-xl text-white">{member.name}</h3>
                                    <p className="text-black font-bold uppercase text-xs">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location */}
            <section id="location" className="py-20 px-6 bg-[#000] text-center border-t border-[#333]">
                <div className="max-w-md mx-auto">
                    <Hammer className="text-[#ff4500] w-12 h-12 mx-auto mb-6" />
                    <h2 className="iron-font-heading text-3xl text-white mb-8">Base de Operações</h2>
                    <p className="mb-2 text-xl font-bold">Galpão 4, Zona Industrial</p>
                    <p className="mb-8 text-gray-500">São Paulo, SP</p>

                    <div className="inline-block border-2 border-[#ff4500] p-4 mb-10">
                        <p className="iron-font-heading text-xl text-white">TER - SÁB / 09H - 21H</p>
                    </div>

                    <div className="flex justify-center gap-4 text-gray-600 mb-8">
                        <span>(11) 9999-0000</span> | <span>contato@ironblade.com</span>
                    </div>

                    <Link href="/" className="text-xs uppercase font-bold text-[#ff4500] hover:text-white transition-colors">Voltar aos Projetos</Link>
                </div>
            </section>
        </div>
    );
}
