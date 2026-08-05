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
import Label from "./Label";
import { motion } from "framer-motion";

const technologies = [
    { name: "Javascript", icon: JsIcon },
    { name: "Python", icon: python },
    { name: "Node.js", icon: nodejs },
    { name: "Django", icon: django },
    { name: "Next.js", icon: nextjs },
    { name: "React", icon: react },
    { name: "MongoDB", icon: mongoDb },
    { name: "Kafka", icon: kafka },
    { name: "Redis", icon: redis },
    { name: "Linux", icon: linux },
    { name: "MySQL", icon: mysql },
    { name: "PostgreSQL", icon: postgresql },
    { name: "AWS", icon: aws },
    { name: "Firebase", icon: firebase },
    { name: "GitHub", icon: github },
    { name: "TypeScript", icon: typescript },
    { name: "Docker", icon: docker },
    { name: "Kubernetes", icon: kubernetes },
    { name: "Bash", icon: bash },
    { name: "Jenkins", icon: jenkins },
];

const Skills = () => {
    return (
        <section className="w-full mt-24">
            <Label title="Skills" description="The skills, tools and technologies I work with include:" />
            <div className="max-w-4xl mx-auto mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
                {
                    technologies.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.4, delay: (index % 5) * 0.06, ease: "easeOut" }}
                            className="group flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-blue-200 transition-all duration-300"
                        >
                            <Image
                                src={tech.icon}
                                alt={tech.name}
                                width={40}
                                height={40}
                                quality={75}
                                className="group-hover:scale-110 transition-transform duration-300"
                            />
                            <span className="text-sm font-medium text-slate-600 group-hover:text-blue-600 transition-colors duration-300">{tech.name}</span>
                        </motion.div>
                    ))
                }
            </div>
        </section>
    )
}

export default Skills;
