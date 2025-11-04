
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
        <>
        <section className="flex px-2 justify-center  items-center w-[100%] mt-[130px] flex-col">
            <Label title="Skills" description="The skills, tools and technologies I work with include:" />
            <div className="lg:w-[80%] md:gap-y-2 gap-y-6 min-w-[80%]  flex-wrap flex">
                {technologies.map((tech) => (
                    <div key={tech.name} className="md:basis-1/6 lg:basis-1/9 flex flex-col px-1 justify-between items-center basis-1/3 h-[70px]">
                        <Image src={tech.icon} alt={tech.name} width={40} height={40} quality={75} />
                        <span>{tech.name}</span>
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}

export default Skills;