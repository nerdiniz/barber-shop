"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    title: string;
    category: string;
    description: string;
    imageSrc: string;
    href?: string;
    className?: string;
    imageFilter?: string; // New prop for css filters
}

export function ProjectCard({ title, category, description, imageSrc, href, className, imageFilter = "" }: ProjectCardProps) {
    const CardContent = (
        <motion.div
            whileHover={{ y: -5 }}
            className={`group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 ${className || ""} h-full`}
        >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50 p-6 flex items-center justify-center">
                <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                    {/* Mockup Container effect */}
                    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg transform group-hover:rotate-1 transition-transform duration-500">
                        <Image
                            src={imageSrc}
                            alt={title}
                            fill
                            className={`object-cover ${imageFilter}`}
                        />
                    </div>
                </div>
            </div>

            <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-1">{title}</h3>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">{category}</p>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                    {description}
                </p>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white p-2 rounded-full shadow-lg text-slate-900">
                        <ArrowUpRight size={20} />
                    </div>
                </div>
            </div>
        </motion.div>
    );

    if (href) {
        return (
            <Link href={href} className="block h-full">
                {CardContent}
            </Link>
        );
    }

    return CardContent;
}
