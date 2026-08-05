"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

type ProjectCardPropType = {
    title: string;
    description: string;
    image: StaticImageData;
    technologies: string[];
    link: string;
    github: string;
}

const ProjectCard = ({ title, description, image, technologies, link, github }: ProjectCardPropType) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="group w-full rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden lg:flex lg:flex-row"
        >
            <div className="relative lg:w-2/5 min-h-[220px] overflow-hidden shrink-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                />
            </div>
            <div className="p-6 lg:p-8 lg:w-3/5 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-4">{description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                    {
                        technologies.map((tech) => (
                            <li key={tech} className="rounded-full bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 text-xs font-medium">{tech}</li>
                        ))
                    }
                </ul>
                <div className="mt-6 flex gap-3">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                    >
                        <ExternalLink size={16} />
                        Live Demo
                    </a>
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 text-sm font-medium px-4 py-2 transition-colors duration-300"
                    >
                        <Github size={16} />
                        Code
                    </a>
                </div>
            </div>
        </motion.article>
    )
}

export default ProjectCard;
