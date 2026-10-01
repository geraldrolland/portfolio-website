"use client";

import Image from "next/image";
import Label from "./Label";
import Reveal from "./motion";
import { indexLabel } from "./ui";
import eventDriven from "../public/arch-event-driven.svg";
import microservices from "../public/arch-microservices.svg";
import monolithic from "../public/arch-monolithic.svg";
import clean from "../public/arch-clean.svg";

const architectures = [
    {
        title: "Event-Driven Architecture",
        icon: eventDriven,
        description: "Async events and loose coupling for scalable, real-time workflows.",
    },
    {
        title: "Microservices Architecture",
        icon: microservices,
        description: "Independently deployable services with clear ownership boundaries.",
    },
    {
        title: "Monolithic Architecture",
        icon: monolithic,
        description: "A single cohesive unit, structured for modularity and simplicity.",
    },
    {
        title: "Clean Architecture",
        icon: clean,
        description: "Business rules isolated from frameworks, UI, and infrastructure.",
    },
];

const Architecture = () => {
    return (
        <section className="w-full mt-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <Reveal>
                    <Label
                        index="02"
                        title="Architecture"
                        description="How I shape systems — from event-driven pipelines to clean boundaries."
                    />
                </Reveal>
                <div className="mt-10 border-t border-l border-line grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {
                        architectures.map((item, itemIndex) => (
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
                </div>
            </div>
        </section>
    );
};

export default Architecture;
