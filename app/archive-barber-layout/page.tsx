"use client";

import "./styles.css";
import Image from "next/image";
import { Scissors, Calendar, MapPin, Instagram, User, Clock, Star } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ArchiveBarberPage() {

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen archive-container flex flex-col scroll-smooth">
            {/* Navigation */}
            <nav className="archive-nav py-6 px-8 flex justify-between items-center sticky top-0 bg-white/95 backdrop-blur-md z-50">
                <Link href="/archive-barber-layout" className="text-2xl font-bold tracking-tighter uppercase">
                    Archive.
                </Link>
                <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
                    <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-gray-500 transition-colors">Sobre</a>
                    <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-gray-500 transition-colors">Serviços</a>
                    <a href="#team" onClick={(e) => scrollToSection(e, 'team')} className="hover:text-gray-500 transition-colors">Equipe</a>
                    <a href="#location" onClick={(e) => scrollToSection(e, 'location')} className="hover:text-gray-500 transition-colors">Local</a>
                </div>
                <button className="archive-button px-6 py-2 text-sm font-semibold uppercase tracking-wider">
                    Agendar
                </button>
            </nav>

            {/* Hero */}
            <section id="about" className="flex-1 flex flex-col md:flex-row min-h-[80vh] pt-20 md:pt-0">
                <div className="flex-1 flex flex-col justify-center px-8 md:px-20 py-10 order-2 md:order-1">
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Est. 2024</span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="archive-hero-text text-6xl md:text-8xl font-black mb-8"
                    >
                        PRECISÃO <br /> & ESTILO
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-600 max-w-md text-lg leading-relaxed mb-10"
                    >
                        Uma abordagem minimalista para o cuidado moderno. Focamos nos detalhes que importam, entregando cortes limpos em uma atmosfera calma.
                    </motion.p>
                    <div className="flex gap-4">
                        <button className="archive-button px-8 py-4 text-sm font-bold uppercase tracking-widest shadow-lg">
                            Agendar Horário
                        </button>
                        <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest border border-black hover:bg-black hover:text-white transition-colors">
                            Nossos Serviços
                        </a>
                    </div>
                </div>
                <div className="flex-1 relative min-h-[40vh] md:min-h-auto order-1 md:order-2 bg-gray-100">
                    <Image
                        src="/minimal.png"
                        alt="Barbeiro trabalhando"
                        fill
                        className="object-cover grayscale"
                        priority
                    />
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 px-8 bg-zinc-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black uppercase tracking-wider mb-4">Menu de Serviços</h2>
                        <div className="h-1 w-20 bg-black mx-auto"></div>
                    </div>

                    <div className="grid gap-8">
                        {[
                            { name: "Corte de Cabelo Clássico", price: "R$ 60", desc: "Consultoria, lavagem e finalização." },
                            { name: "Barba Tradicional", price: "R$ 45", desc: "Toalha quente, navalha e óleo essencial." },
                            { name: "Combo Completo", price: "R$ 95", desc: "A experiência completa de cuidado." },
                            { name: "Camuflagem de Brancos", price: "R$ 50", desc: "Resultado natural e discreto." }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex justified-between items-baseline border-b border-gray-200 pb-4 group hover:pl-4 transition-all duration-300"
                            >
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold uppercase tracking-wide group-hover:text-gray-600 transition-colors">{service.name}</h3>
                                    <p className="text-gray-500 text-sm mt-1">{service.desc}</p>
                                </div>
                                <span className="text-xl font-bold">{service.price}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-24 px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">Profissionais</span>
                        <h2 className="text-4xl font-black uppercase tracking-wider mt-2 mb-4">Nossa Equipe</h2>
                        <p className="text-gray-500 max-w-xl mx-auto">
                            Mestres na arte da barbearia clássica e moderna. Cada profissional traz anos de experiência e dedicação.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { name: "Carlos Silva", role: "Master Barber", img: "/modern.png" }, // Using placeholders
                            { name: "André Santos", role: "Especialista em Navalha", img: "/vintage.png" },
                            { name: "Ricardo Oliveira", role: "Estilista Sênior", img: "/minimal.png" }
                        ].map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="group"
                            >
                                <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-gray-100">
                                    <Image
                                        src={member.img}
                                        alt={member.name}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-wide text-center">{member.name}</h3>
                                <p className="text-gray-500 text-sm text-center uppercase tracking-widest mt-1">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info / Location */}
            <section id="location" className="border-t border-gray-100 py-20 px-8 bg-black text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div className="flex flex-col items-center">
                        <Clock className="w-8 h-8 mb-4 stroke-1 text-gray-400" />
                        <h3 className="text-lg font-bold uppercase tracking-wider mb-2">Horários</h3>
                        <p className="text-gray-400 text-sm">Seg - Sex: 09:00 - 20:00</p>
                        <p className="text-gray-400 text-sm">Sáb: 09:00 - 18:00</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <MapPin className="w-8 h-8 mb-4 stroke-1 text-gray-400" />
                        <h3 className="text-lg font-bold uppercase tracking-wider mb-2">Endereço</h3>
                        <p className="text-gray-400 text-sm">Rua Design, 123</p>
                        <p className="text-gray-400 text-sm">Bairro Criativo, São Paulo - SP</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Star className="w-8 h-8 mb-4 stroke-1 text-gray-400" />
                        <h3 className="text-lg font-bold uppercase tracking-wider mb-2">Contato</h3>
                        <p className="text-gray-400 text-sm">(11) 99999-9999</p>
                        <p className="text-gray-400 text-sm">contato@archivebarber.com.br</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-12 px-8 text-center border-t border-gray-900">
                <div className="flex justify-center mb-8 gap-6">
                    <Instagram className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
                </div>
                <p className="text-xs uppercase tracking-widest text-gray-600">© 2024 Archive Barber. Todos os direitos reservados.</p>
                <Link href="/" className="inline-block mt-8 text-xs text-gray-700 hover:text-white transition-colors">
                    Voltar para Vitrine
                </Link>
            </footer>
        </div>
    );
}
