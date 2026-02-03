"use client";

import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContactModal } from "./ContactModal";
import { MessageCircle } from "lucide-react";

interface Project {
    title: string;
    category: string;
    description: string;
    imageSrc: string;
    href: string;
    imageFilter?: string;
}

const projects: Project[] = [
    {
        title: "Archive Barber",
        category: "Minimalist / Clean",
        description: "Um layout limpo e elegante focado na simplicidade, tipografia e apresentação visual premium.",
        imageSrc: "/minimal.png", // Base minimal
        href: "/archive-barber-layout",
    },
    {
        title: "The Gentleman’s Co.",
        category: "Vintage / Classic",
        description: "Um layout clássico de barbearia inspirado na tradição, herança e estética atemporal de cuidados pessoais.",
        imageSrc: "/gentlemans_preview.png",
        href: "/gentlemans-co-layout",
    },
    {
        title: "Neon Cuts",
        category: "Modern / Dark",
        description: "Um design ousado e moderno com tons escuros e detalhes em neon, perfeito para barbearias urbanas e contemporâneas.",
        imageSrc: "/neon_cuts_preview.png",
        href: "/neon-cuts-layout",
    },
    {
        title: "Iron Blade",
        category: "Industrial / Bold",
        description: "Um layout forte em estilo industrial com alto contraste, tipografia poderosa e identidade visual masculina.",
        imageSrc: "/iron_blade_preview.png",
        href: "/iron-blade-layout",
    },
    {
        title: "Old Town Barber",
        category: "Retro / Heritage",
        description: "Um layout de inspiração retro que evoca confiança, artesanato e a atmosfera das barbearias tradicionais de bairro.",
        imageSrc: "/old_town_preview.png",
        href: "/old-town-barber-layout",
    },
    {
        title: "Urban Fade",
        category: "Contemporary / Street",
        description: "Um layout moderno estilo street focado em fades, cortes freestyle e cultura urbana.",
        imageSrc: "/urban_fade_preview.png",
        href: "/urban-fade-layout",
    }
];

export function ProjectGrid() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    return (
        <section className="px-4 pb-20 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="h-full"
                    >
                        <ProjectCard
                            title={project.title}
                            category={project.category}
                            description={project.description}
                            imageSrc={project.imageSrc}
                            imageFilter={project.imageFilter}
                            href={project.href}
                        />
                    </motion.div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all shadow-xl hover:shadow-slate-200 cursor-pointer active:scale-95 flex items-center gap-2 mx-auto"
                >
                    <MessageCircle size={20} />
                    Entrar em Contato
                </button>
            </div>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </section>
    );
}
