"use client";

import Image, { type StaticImageData } from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import Reveal from "./motion";
import { linkArrow } from "./ui";

type ProjectCardPropType = {
    index: number,
    title: string,
    description: string,
    image: StaticImageData,
    technologies: string[],
    link?: string,
    github: string,
}

const ProjectCard = ({ index, title, description, image, technologies, link, github }: ProjectCardPropType) => {
    const reversed = index % 2 === 1;

    return (
        <Reveal className="group grid gap-7 md:grid-cols-2 md:gap-10 md:items-center py-10 border-b border-line">
            <div className={`relative aspect-[4/3] overflow-hidden ${reversed ? "md:order-2" : ""}`}>
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover grayscale-[35%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
                />
            </div>
            <div className={`min-w-0 ${reversed ? "md:order-1" : ""}`}>
                <span className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                    {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-1.5 font-display text-3xl font-medium tracking-tight text-foreground transition-colors duration-200 group-hover:text-accent">
                    {title}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted line-clamp-4">
                    {description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                    {
                        technologies.map((tech) => (
                            <li
                                key={tech}
                                className="border border-line px-2.5 py-1 text-xs text-muted transition-colors duration-200 group-hover:border-accent/40"
                            >
                                {tech}
                            </li>
                        ))
                    }
                </ul>
                <div className="mt-6 flex flex-wrap gap-5">
                    {link && (
                        <a href={link} target="_blank" rel="noopener noreferrer" className={linkArrow}>
                            Live Demo
                            <ArrowUpRight size={15} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    )}
                    <a href={github} target="_blank" rel="noopener noreferrer" className={linkArrow}>
                        <Github size={15} aria-hidden="true" />
                        Code
                    </a>
                </div>
            </div>
        </Reveal>
    );
};

export default ProjectCard;
