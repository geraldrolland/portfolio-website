"use client";

import Label from "./Label";
import myImage2 from "../public/my-image2.jpg";
import PersonaImage from "./PersonaImage";
import Reveal from "./motion";
import { MapPin, Mail, Code2, Briefcase } from "lucide-react";

const paragraphs = {
    whoIAm: [
        "Hello! I'm Onyeka Gerald Ujowundu, a graduate of the ALX Software Engineering program with over three years of hands-on experience in designing, developing, and deploying scalable and secure software solutions. My work is driven by a passion for creating technology that not only solves real-world problems but also delivers a seamless, engaging experience for users.",
        "Over the years, I've developed a strong foundation in system thinking and software architecture, allowing me to build systems that are both robust and efficient. My technical expertise spans frontend and backend development, where I focus on building engaging user interfaces supported by secure, high-performance backend systems. Whether it's crafting intuitive user experiences or optimizing APIs for large-scale applications, I approach every project with precision and a deep understanding of how systems interact end-to-end.",
    ],
    engineeringApproach: [
        "I have extensive experience working with AWS cloud infrastructure, leveraging its tools and services to ensure high availability, scalability, and fault tolerance across deployments. I also have solid hands-on experience in containerization and orchestration using Docker and Kubernetes, enabling me to manage distributed applications effectively and streamline CI/CD workflows.",
        "Beyond development, I'm deeply invested in system design and microservice architecture, breaking down monolithic applications into manageable, maintainable services that improve flexibility and reliability. My commitment to software quality is reinforced by my experience in unit testing and integration testing, ensuring that every component I build is reliable, maintainable, and production-ready.",
        "I take pride in being a problem solver who thrives in dynamic, fast-paced environments. I enjoy tackling complex technical challenges whether it's optimizing performance bottlenecks, enhancing security, or designing scalable architectures that support growth and innovation.",
    ],
    beyondCode: [
        "Collaboration is at the heart of how I work. I believe that great software is built through effective communication, teamwork, and shared vision. I value learning from others and contributing to a culture of continuous improvement, where ideas evolve through open discussion and experimentation.",
        "My goal as a software engineer is to build impactful solutions that combine technical excellence with user-centric design, empowering individuals and businesses to achieve more through technology. I'm constantly learning, evolving, and seeking opportunities to push boundaries because technology never stands still, and neither do I.",
    ],
};

const sections = [
    { heading: "Who I Am", content: paragraphs.whoIAm },
    { heading: "Engineering Approach", content: paragraphs.engineeringApproach },
    { heading: "Beyond the Code", content: paragraphs.beyondCode },
];

const quickFacts = [
    { icon: Briefcase, label: "Focus", value: "Software Engineering" },
    { icon: Code2, label: "Specialties", value: "Full-Stack, AWS, System Design" },
    { icon: MapPin, label: "Location", value: "Lagos, Nigeria" },
    { icon: Mail, label: "Email", value: "grealrolland@gmail.com" },
];

const AboutMe = () => {
    return (
        <div className="w-full flex flex-col items-center gap-y-12">
            <Reveal>
                <Label title="About Me" />
            </Reveal>
            <div className="w-full max-w-5xl px-4 flex flex-col lg:flex-row gap-12 items-start">
                <Reveal className="w-full lg:w-[320px] shrink-0 flex flex-col items-center gap-6">
                    <PersonaImage image={myImage2} />
                    <div className="w-full grid grid-cols-1 gap-3">
                        {
                            quickFacts.map((fact) => {
                                const Icon = fact.icon;
                                return (
                                    <div key={fact.label} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                                        <span className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                                            <Icon size={16} className="text-blue-600" />
                                        </span>
                                        <div className="min-w-0">
                                            <p className="text-xs uppercase tracking-wide text-slate-500">{fact.label}</p>
                                            <p className="text-sm font-medium text-slate-800 truncate">{fact.value}</p>
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
                            <Reveal key={section.heading} delay={sectionIndex * 0.05} className="mb-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                                    <span className="h-6 w-1 rounded-full bg-blue-600"></span>
                                    {section.heading}
                                </h3>
                                {
                                    section.content.map((paragraph) => (
                                        <p key={paragraph.slice(0, 40)} className="text-[14px] leading-relaxed text-slate-600 mb-4">
                                            {paragraph}
                                        </p>
                                    ))
                                }
                            </Reveal>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
