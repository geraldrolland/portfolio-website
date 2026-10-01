"use client";

import Label from "./Label";
import myImage2 from "../public/my-image2.jpg";
import Image from "next/image";
import Reveal from "./motion";
import { MapPin, Mail, Code2, Briefcase } from "lucide-react";

const sections = [
    {
        heading: "Who I Am",
        content: [
            "Hello! I'm Onyeka Gerald Ujowundu, a graduate of the ALX Software Engineering program with over four years of hands-on experience designing, developing, and deploying scalable, secure software. I care about technology that solves real-world problems and delivers a seamless experience for the people who use it.",
            "My work is grounded in system thinking and software architecture — whether I'm crafting intuitive user interfaces or optimizing APIs for scale, I approach every project with precision and an understanding of how systems interact end-to-end.",
        ],
    },
    {
        heading: "Engineering Approach",
        content: [
            "I have extensive experience with AWS cloud infrastructure, using its tools and services to ensure high availability, scalability, and fault tolerance across deployments. I'm also hands-on with containerization and orchestration through Docker and Kubernetes, managing distributed applications and streamlining CI/CD workflows.",
            "Beyond development, I'm invested in system design and microservices — breaking monoliths into maintainable services that improve flexibility and reliability. My commitment to quality includes unit and integration testing, so every component I build is reliable and production-ready.",
            "I thrive in dynamic, fast-paced environments — whether that's optimizing performance bottlenecks, enhancing security, or designing architectures that support growth.",
        ],
    },
    {
        heading: "Beyond the Code",
        content: [
            "Collaboration is at the heart of how I work. Great software is built through communication, teamwork, and shared vision — ideas evolve through open discussion and experimentation.",
            "My goal is to build impactful solutions that combine technical excellence with user-centric design. I'm constantly learning and evolving, because technology never stands still — and neither do I.",
        ],
    },
];

const quickFacts = [
    { icon: Briefcase, label: "Focus", value: "Software Engineering" },
    { icon: Code2, label: "Specialties", value: "Full-Stack, AWS, System Design" },
    { icon: MapPin, label: "Location", value: "Lagos, Nigeria" },
    { icon: Mail, label: "Email", value: "geraldrolland123@gmail.com" },
];

const AboutMe = () => {
    return (
        <div className="w-full max-w-5xl mx-auto">
            <Reveal>
                <Label
                    as="h1"
                    index="01"
                    title="About"
                    description="Who I am, how I work, and what drives me beyond the code."
                />
            </Reveal>

            <div className="mt-12 flex flex-col lg:flex-row gap-12 items-start">
                <Reveal className="w-full lg:w-[300px] shrink-0 lg:sticky lg:top-24">
                    <div className="relative w-full aspect-[4/5] overflow-hidden group">
                        <Image
                            src={myImage2}
                            alt="Gerald Ujowundu"
                            fill
                            sizes="(max-width: 1024px) 100vw, 300px"
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                    <div className="mt-6 border-t border-line">
                        {
                            quickFacts.map((fact) => {
                                const Icon = fact.icon;
                                return (
                                    <div key={fact.label} className="flex items-start gap-3 py-3.5 border-b border-line">
                                        <Icon size={15} className="text-accent mt-0.5 shrink-0" aria-hidden="true" />
                                        <div className="min-w-0">
                                            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">{fact.label}</p>
                                            <p className="mt-1 text-sm text-foreground break-words">{fact.value}</p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </Reveal>

                <div className="flex-1 min-w-0">
                    {
                        sections.map((section, sectionIndex) => (
                            <Reveal key={section.heading} delay={sectionIndex * 0.05} className={sectionIndex > 0 ? "mt-10" : ""}>
                                <h2 className="flex items-baseline gap-3 font-display text-2xl font-medium tracking-tight text-foreground">
                                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                                        {String(sectionIndex + 1).padStart(2, "0")}
                                    </span>
                                    {section.heading}
                                </h2>
                                <div className="mt-4 space-y-4">
                                    {
                                        section.content.map((paragraph) => (
                                            <p key={paragraph.slice(0, 40)} className="text-[15px] leading-[1.75] text-muted">
                                                {paragraph}
                                            </p>
                                        ))
                                    }
                                </div>
                            </Reveal>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
