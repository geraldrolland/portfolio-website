"use client";

import SocialLinks from "./SocialLinks";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { fadeUp, staggerContainer } from "./motion";
import { btnAccent } from "./ui";

const Introduction = () => {
    const reducedMotion = useReducedMotion();

    return (
        <section className="w-full lg:w-7/12">
            <motion.div
                variants={staggerContainer}
                initial={reducedMotion ? false : "hidden"}
                animate="visible"
                className="flex flex-col"
            >
                <motion.span
                    variants={fadeUp}
                    className="inline-flex items-center gap-2.5 self-start flex-wrap text-[13px] font-medium uppercase tracking-[0.16em] text-muted"
                >
                    <span className="inline-flex items-center gap-2.5">
                        <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
                        </span>
                        Available for hire
                    </span>
                    <span className="text-line" aria-hidden="true">—</span>
                    <span>4+ years experience</span>
                </motion.span>

                <motion.h1
                    variants={fadeUp}
                    className="mt-6 font-display text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.05] font-medium tracking-tight text-foreground"
                >
                    Onyeka Gerald
                    <br />
                    <span className="text-accent">Ujowundu</span>
                </motion.h1>

                <motion.p
                    variants={fadeUp}
                    className="mt-5 text-[13px] font-medium uppercase tracking-[0.22em] text-muted"
                >
                    Software Engineer &amp; Cloud Developer
                </motion.p>

                <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base leading-relaxed text-muted">
                    I build secure, scalable software — from event-driven backend
                    pipelines to cloud infrastructure on AWS. My work is grounded in
                    system thinking: reliable, efficient, and user-centered.
                </motion.p>

                <motion.p
                    variants={fadeUp}
                    className="mt-7 flex items-center gap-2 text-sm text-muted"
                >
                    <MapPin size={14} className="text-accent" aria-hidden="true" />
                    Lagos, Nigeria
                </motion.p>

                <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-6">
                    <Link href="/projects" className={`${btnAccent} group`}>
                        View Projects
                        <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                    <SocialLinks />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Introduction;
