"use client";

import "./styles.css";
import Image from "next/image";
import { Star, Clock, MapPin, Phone, Scissors, User } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function GentlemansPage() {

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen vintage-container relative scroll-smooth selection:bg-[#c5a059] selection:text-black">
            <div className="texture-overlay"></div>

            {/* Header */}
            <header className="sticky top-0 z-50 bg-[#1a1512]/95 border-b border-[#3e3228] backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex flex-col items-center">
                        <span className="text-xs uppercase tracking-[0.3em] vintage-gold-text">The</span>
                        <h1 className="text-2xl font-bold tracking-wider leading-none">GENTLEMAN&apos;S</h1>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/50">Co. Barber</span>
                    </div>

                    <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest vintage-font-sans">
                        <a href="#heritage" onClick={(e) => scrollToSection(e, 'heritage')} className="hover:text-[#c5a059] transition-colors">Tradição</a>
                        <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-[#c5a059] transition-colors">Serviços</a>
                        <a href="#barbers" onClick={(e) => scrollToSection(e, 'barbers')} className="hover:text-[#c5a059] transition-colors">Barbeiros</a>
                        <a href="#visit" onClick={(e) => scrollToSection(e, 'visit')} className="hover:text-[#c5a059] transition-colors">Localização</a>
                    </nav>

                    <button className="vintage-btn px-6 py-2 text-xs">
                        Reservar Cadeira
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <section id="heritage" className="relative min-h-[90vh] flex items-center justify-center text-center px-4 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/vintage.png"
                        alt="Background Vintage Shop"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1512] via-[#1a1512]/50 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="vintage-divider opacity-70">
                            <Star className="text-[#c5a059] w-4 h-4 mx-2" fill="#c5a059" />
                            <span className="uppercase tracking-[0.2em] text-sm">Desde 1928</span>
                            <Star className="text-[#c5a059] w-4 h-4 mx-2" fill="#c5a059" />
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black mb-6 vintage-gold-text drop-shadow-lg">
                            CAVALHEIROS <br /> & CANALHAS
                        </h2>
                        <p className="vintage-font-sans text-lg md:text-xl tracking-wide max-w-2xl mx-auto mb-10 text-white/80">
                            Cortes clássicos, barbas à navalha e a autêntica experiência de uma barbearia tradicional. Onde o estilo encontra a herança.
                        </p>
                        <button className="vintage-btn px-10 py-4 text-sm md:text-base mb-20 shadow-xl">
                            Agendar Experiência
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Services Menu */}
            <section id="services" className="py-24 px-6 bg-[#1f1915]">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl md:text-4xl font-bold vintage-gold-text mb-2">Nossos Serviços</h3>
                        <div className="vintage-divider max-w-xs mx-auto opacity-50"><Scissors className="w-5 h-5 text-[#c5a059]" /></div>
                        <p className="vintage-font-sans text-white/60">Preços para membros e convidados</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                        {[
                            { name: "Corte Executivo", details: "Lavagem, corte à tesoura e finalização", price: "R$ 75" },
                            { name: "Barba Real", details: "Toalha quente, navalha e massagem facial", price: "R$ 55" },
                            { name: "Corte & Barba", details: "O pacote completo do cavalheiro", price: "R$ 110" },
                            { name: "Pai & Filho", details: "Tradição passada de geração em geração", price: "R$ 130" },
                            { name: "Acabamento", details: "Limpeza de pescoço e contornos", price: "R$ 35" },
                            { name: "Tratamento Capilar", details: "Hidratação profunda e tônico", price: "R$ 45" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex justify-between items-end border-b border-[#3e3228] border-dashed pb-4 group"
                            >
                                <div>
                                    <h4 className="text-xl font-bold group-hover:text-[#c5a059] transition-colors">{item.name}</h4>
                                    <p className="vintage-font-sans text-xs text-white/40 mt-1 uppercase tracking-wide">{item.details}</p>
                                </div>
                                <span className="text-xl font-bold vintage-gold-text">{item.price}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team / Barbers */}
            <section id="barbers" className="py-24 px-6 relative">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl md:text-4xl font-bold vintage-gold-text mb-4">Mestres Barbeiros</h3>
                        <p className="vintage-font-sans text-white/60 max-w-xl mx-auto">
                            Nossos profissionais são guardiões da técnica clássica. Cada corte é uma obra de arte executada com precisão cirúrgica e estilo atemporal.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Sr. Arthur", role: "Proprietário", exp: "25 anos de experiência" },
                            { name: "Thomas 'Navalha'", role: "Mestre Barbeiro", exp: "Ex-Barbeiro Real" },
                            { name: "Henry Silva", role: "Especialista Clássico", exp: "Formado em Londres" }
                        ].map((barber, i) => (
                            <div key={i} className="vintage-card p-8 text-center hover:border-[#c5a059] transition-colors duration-300">
                                <div className="w-24 h-24 mx-auto bg-[#1a1512] rounded-full border-2 border-[#c5a059] flex items-center justify-center mb-6">
                                    <User className="w-10 h-10 text-[#c5a059]" />
                                </div>
                                <h4 className="text-2xl font-bold mb-2">{barber.name}</h4>
                                <p className="text-[#c5a059] uppercase tracking-widest text-xs font-bold mb-4">{barber.role}</p>
                                <div className="h-px w-12 bg-[#3e3228] mx-auto mb-4"></div>
                                <p className="vintage-font-sans text-sm text-white/50">{barber.exp}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location / Footer */}
            <section id="visit" className="bg-[#0f0c0a] py-20 px-6 border-t border-[#c5a059]">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-10">
                        <h2 className="text-4xl font-bold mb-8">Visite-nos</h2>
                        <div className="flex flex-col md:flex-row justify-center gap-12 text-left md:inline-flex">
                            <div className="flex gap-4">
                                <Clock className="text-[#c5a059] shrink-0" />
                                <div>
                                    <h5 className="vintage-gold-text font-bold uppercase tracking-widest text-sm mb-2">Horários</h5>
                                    <p className="vintage-font-sans text-sm text-white/60">Ter - Sex: 10:00 - 21:00</p>
                                    <p className="vintage-font-sans text-sm text-white/60">Sábado: 09:00 - 18:00</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <MapPin className="text-[#c5a059] shrink-0" />
                                <div>
                                    <h5 className="vintage-gold-text font-bold uppercase tracking-widest text-sm mb-2">Endereço</h5>
                                    <p className="vintage-font-sans text-sm text-white/60">Av. da Tradição, 1920</p>
                                    <p className="vintage-font-sans text-sm text-white/60">Centro Histórico</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Phone className="text-[#c5a059] shrink-0" />
                                <div>
                                    <h5 className="vintage-gold-text font-bold uppercase tracking-widest text-sm mb-2">Contato</h5>
                                    <p className="vintage-font-sans text-sm text-white/60">(11) 3333-1920</p>
                                    <p className="vintage-font-sans text-sm text-white/60">reserva@gentleman.co</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-20 border-t border-[#3e3228] vintage-font-sans text-xs text-white/30 tracking-widest uppercase">
                        <p>© 2024 The Gentleman&apos;s Co. Barber Shop. Todos os direitos reservados.</p>
                        <Link href="/" className="inline-block mt-4 hover:text-[#c5a059] transition-colors">Voltar para Vitrine</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
