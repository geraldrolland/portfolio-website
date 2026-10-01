"use client";

import Image from "next/image";
import JsIcon from '../public/javascript-logo.svg';
import python from '../public/python-logo.svg';
import nodejs from '../public/nodejs-logo.svg';
import django from '../public/django-logo.svg';
import nextjs from '../public/nextjs-logo.svg';
import react from '../public/react-logo.svg';
import mongoDb from '../public/mongoDB-logo.svg';
import kafka from '../public/kafka-logo.svg';
import redis from '../public/redis-logo.svg';
import linux from '../public/linux-logo.svg';
import mysql from '../public/mysql-logo.svg';
import postgresql from '../public/postgresql-logo.svg';
import aws from '../public/aws-logo.svg';
import firebase from '../public/firebase-logo.svg';
import github from '../public/github-logo.svg';
import typescript from '../public/typescript-logo.svg';
import docker from '../public/docker-logo.svg';
import kubernetes from '../public/kubernetes-logo.svg';
import bash from '../public/bash-logo.svg';
import jenkins from '../public/jenkins-logo.svg';
import rabbitmq from '../public/rabbitmq-logo.svg';
import neo4j from '../public/neo4j-logo.svg';
import minio from '../public/minio-logo.svg';
import pinecone from '../public/pinecone-logo.png';
import opencode from '../public/opencode-logo.svg';
import claude from '../public/claude-logo.svg';
import coderabbit from '../public/coderabbit-logo.svg';
import Label from "./Label";
import Reveal from "./motion";

type Tech = { name: string, icon: typeof JsIcon, invert?: boolean };

const skillGroups: { category: string, items: Tech[] }[] = [
    {
        category: "Languages",
        items: [
            { name: "JavaScript", icon: JsIcon },
            { name: "TypeScript", icon: typescript },
            { name: "Python", icon: python },
            { name: "Bash", icon: bash },
        ],
    },
    {
        category: "Frameworks",
        items: [
            { name: "React", icon: react },
            { name: "Next.js", icon: nextjs },
            { name: "Node.js", icon: nodejs },
            { name: "Django", icon: django },
        ],
    },
    {
        category: "Data & Messaging",
        items: [
            { name: "PostgreSQL", icon: postgresql },
            { name: "MySQL", icon: mysql },
            { name: "MongoDB", icon: mongoDb },
            { name: "Redis", icon: redis },
            { name: "Kafka", icon: kafka },
            { name: "RabbitMQ", icon: rabbitmq },
            { name: "Neo4j", icon: neo4j },
            { name: "MinIO", icon: minio },
            { name: "Pinecone", icon: pinecone, invert: true },
        ],
    },
    {
        category: "Cloud & Infrastructure",
        items: [
            { name: "AWS", icon: aws },
            { name: "Firebase", icon: firebase },
            { name: "Docker", icon: docker },
            { name: "Kubernetes", icon: kubernetes },
            { name: "Jenkins", icon: jenkins },
            { name: "Linux", icon: linux },
        ],
    },
    {
        category: "Tooling",
        items: [
            { name: "GitHub", icon: github },
            { name: "OpenCode", icon: opencode, invert: true },
            { name: "Claude Code", icon: claude },
            { name: "CodeRabbit", icon: coderabbit },
        ],
    },
];

const Skills = () => {
    return (
        <section className="w-full mt-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <Reveal>
                    <Label
                        index="01"
                        title="Skills"
                        description="The languages, frameworks, and infrastructure I work with."
                    />
                </Reveal>
                <div className="mt-10 border-t border-line">
                    {
                        skillGroups.map((group, groupIndex) => (
                            <Reveal
                                key={group.category}
                                delay={groupIndex * 0.05}
                                className="grid gap-4 sm:grid-cols-[220px,1fr] py-6 border-b border-line"
                            >
                                <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-muted sm:pt-1.5">
                                    {group.category}
                                </h3>
                                <ul className="flex flex-wrap gap-x-7 gap-y-4">
                                    {
                                        group.items.map((tech) => (
                                            <li
                                                key={tech.name}
                                                className="group flex items-center gap-2.5 text-foreground transition-colors duration-200 hover:text-accent"
                                            >
                                                <Image
                                                    src={tech.icon}
                                                    alt=""
                                                    width={20}
                                                    height={20}
                                                    quality={75}
                                                    className={`opacity-70 group-hover:opacity-100 transition-opacity duration-200 ${tech.invert ? "dark:invert" : ""}`}
                                                    aria-hidden="true"
                                                />
                                                <span className="text-sm font-medium">{tech.name}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </Reveal>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Skills;
