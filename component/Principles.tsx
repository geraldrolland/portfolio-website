"use client";

import Image from "next/image";
import Label from "./Label";
import Reveal from "./motion";
import { indexLabel } from "./ui";
import ddd from "../public/principle-ddd.svg";
import cqrs from "../public/principle-cqrs.svg";
import dry from "../public/principle-dry.svg";

const principles = [
    {
        title: "DDD",
        icon: ddd,
        description: "Domain-Driven Design — modeling software around business domains, bounded contexts, and ubiquitous language.",
    },
    {
        title: "CQRS",
        icon: cqrs,
        description: "Command Query Responsibility Segregation — separating read and write models for clarity and scale.",
    },
    {
        title: "DRY",
        icon: dry,
        description: "Don't Repeat Yourself — one authoritative representation for every piece of knowledge.",
    },
];

const Principles = () => {
    return (
        <section className="w-full mt-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <Reveal>
                    <Label
                        index="03"
                        title="Engineering Principles"
                        description="The standards I hold code to, project after project."
                    />
                </Reveal>
                <div className="mt-10 border-t border-l border-line grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        principles.map((item, itemIndex) => (
                            <Reveal
                                key={item.title}
                                delay={itemIndex * 0.05}
                                className="group p-6 border-b border-r border-line transition-colors duration-200 hover:bg-accent-soft"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <Image
                                        src={item.icon}
                                        alt=""
                                        width={26}
                                        height={26}
                                        aria-hidden="true"
                                        className="opacity-80 transition-opacity duration-200 group-hover:opacity-100 dark:invert"
                                    />
                                    <span className={indexLabel}>
                                        {String(itemIndex + 1).padStart(2, "0")}
                                    </span>
                                </div>
                                <h3 className="mt-5 font-display text-lg font-medium tracking-tight text-foreground">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted">
                                    {item.description}
                                </p>
                            </Reveal>
                        ))
                    }
                    <div
                        aria-hidden="true"
                        className="hidden sm:block lg:hidden border-b border-r border-line"
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default Principles;
