"use client";

import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <section className="py-20 text-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Nossas Criações Digitais
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-slate-600">
                    Explore nossa coleção de experiências web exclusivas para barbearias.
                    Cada design conta uma história única de estilo e tradição.
                </p>
            </motion.div>
        </section>
    );
}
