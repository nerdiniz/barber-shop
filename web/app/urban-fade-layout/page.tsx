"use client";

import "./styles.css";
import Image from "next/image";
import { Scissors, Music, Zap, Instagram, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function UrbanFadePage() {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen urban-container scroll-smooth">

            <nav className="border-b-4 border-black sticky top-0 bg-white z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/urban-fade-layout" className="text-3xl font-black italic tracking-tighter">
                        URBAN<span className="bg-[#f7ff00] px-1">FADE</span>
                    </Link>

                    <div className="hidden md:flex gap-8 font-black text-sm uppercase">
                        <a href="#street" onClick={(e) => scrollToSection(e, 'street')} className="hover:underline decoration-4 decoration-[#f7ff00] underline-offset-4">Ocorre</a>
                        <a href="#cuts" onClick={(e) => scrollToSection(e, 'cuts')} className="hover:underline decoration-4 decoration-[#f7ff00] underline-offset-4">Cortes</a>
                        <a href="#gang" onClick={(e) => scrollToSection(e, 'gang')} className="hover:underline decoration-4 decoration-[#f7ff00] underline-offset-4">Gangue</a>
                        <a href="#spot" onClick={(e) => scrollToSection(e, 'spot')} className="hover:underline decoration-4 decoration-[#f7ff00] underline-offset-4">Spot</a>
                    </div>

                    <button className="urban-btn px-6 py-2">Cola Aí</button>
                </div>
            </nav>

            {/* Hero */}
            <section id="street" className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
                <div className="absolute inset-x-0 top-20 text-[20vw] leading-none font-black text-gray-100 -z-10 select-none">
                    FRESH
                </div>

                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                >
                    <h1 className="text-6xl md:text-9xl font-black mb-6 uppercase italic">
                        Arte <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500">Urbana</span> <br />
                        <span className="urban-font-marker text-4xl md:text-6xl bg-black text-white px-4 py-2 rotate-2 inline-block">Na Régua</span>
                    </h1>
                    <p className="text-xl font-bold max-w-lg mx-auto mb-10">
                        Sem regras, só estilo. O spot definitivo para quem curte streetwear, hip-hop e um fade impecável.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="urban-btn px-10 py-5 text-xl">Agendar Corte</button>
                        <button className="px-10 py-5 text-xl font-black border-4 border-black hover:bg-gray-100 transition-colors">Ver Lookbook</button>
                    </div>
                </motion.div>
            </section>

            {/* Services */}
            <section id="cuts" className="py-24 px-6 bg-black text-white relative">
                <div className="max-w-5xl mx-auto">
                    <h2 className="urban-font-marker text-5xl text-[#f7ff00] mb-16 text-center -rotate-1">Tabela de Preços</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { name: "Fade Mestre", desc: "Degradê perfeito", price: "R$ 50" },
                            { name: "Artístico", desc: "Freestyle / Desenhos", price: "R$ 80+" },
                            { name: "Nevou", desc: "Platinado completo", price: "R$ 150" },
                            { name: "Trança Box", desc: "Estilo nagô / box braids", price: "R$ 100+" }
                        ].map((item, i) => (
                            <div key={i} className="border-4 border-white p-6 rotate-1 hover:rotate-0 transition-transform bg-[#111]">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-3xl font-black italic">{item.name}</h3>
                                    <span className="text-2xl font-bold text-[#f7ff00]">{item.price}</span>
                                </div>
                                <p className="font-mono text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section id="gang" className="py-24 px-6 bg-[#f7ff00]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-6xl font-black text-black mb-16 uppercase italic">A Gangue</h2>

                    <div className="flex flex-wrap justify-center gap-10">
                        {[
                            { name: "DJ Fade", skill: "Riscos & Freestyle" },
                            { name: "Dread Lord", skill: "Tranças" },
                            { name: "Ice Man", skill: "Platinados" }
                        ].map((member, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.1, rotate: 3 }}
                                className="urban-box w-72 h-96 flex flex-col justify-end p-6 relative bg-white"
                            >
                                <div className="absolute inset-0 bg-gray-200 bg-[url('/minimal.png')] bg-cover bg-center grayscale contrast-125"></div>
                                <div className="relative z-10 bg-white border-2 border-black p-4 -mr-10 -mb-10 shadow-[4px_4px_0px_#000]">
                                    <h3 className="text-2xl font-black uppercase italic">{member.name}</h3>
                                    <p className="font-bold text-sm bg-black text-white inline-block px-2">{member.skill}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <section id="spot" className="py-20 px-6 text-center">
                <h2 className="urban-font-marker text-5xl mb-8">Cola no Spot</h2>
                <div className="flex flex-col md:flex-row justify-center gap-10 text-xl font-bold mb-12">
                    <div className="flex items-center gap-2 justify-center">
                        <MapPin className="w-8 h-8" />
                        <span>Rua do Skate, 011</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                        <Instagram className="w-8 h-8" />
                        <span>@urbanfade_</span>
                    </div>
                </div>

                <Link href="/" className="inline-block px-8 py-3 bg-black text-white font-black uppercase text-lg hover:bg-[#f7ff00] hover:text-black transition-colors">
                    Voltar pro Início
                </Link>
            </section>
        </div>
    );
}
