import Label from "./Label";
import whatsapIcon from "../public/whatsapp-logo.svg";
import emailIcon from "../public/gmail-logo.svg";
import linkedinIcon from "../public/linkedin-logo.svg";
import Image from "next/image";
import SubmitForm from "./SubmitForm";
import Reveal from "./motion";
import { ArrowUpRight } from "lucide-react";

const channels = [
    {
        href: "https://wa.me/2349050894145",
        label: "WhatsApp",
        description: "Get in touch",
        icon: whatsapIcon,
    },
    {
        href: "mailto:geraldrolland123@gmail.com",
        label: "Email",
        description: "Send me a mail",
        icon: emailIcon,
    },
    {
        href: "https://www.linkedin.com/in/onyeka-ujowundu-72b897246",
        label: "LinkedIn",
        description: "Let's connect",
        icon: linkedinIcon,
    },
];

const ContactMe = () => {
    return (
        <div className="w-full max-w-5xl mx-auto">
            <Reveal>
                <Label
                    as="h1"
                    index="01"
                    title="Contact"
                    description="Available for freelance work and full-time roles."
                />
            </Reveal>
            <div className="mt-12 grid lg:grid-cols-[1fr,1.4fr] gap-12 lg:gap-16 items-start">
                <Reveal className="order-2 lg:order-1">
                    <div className="border-t border-line">
                        {
                            channels.map((channel) => (
                                <a
                                    key={channel.label}
                                    href={channel.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4 py-5 border-b border-line"
                                >
                                    <Image
                                        width={22}
                                        height={22}
                                        src={channel.icon}
                                        alt=""
                                        aria-hidden="true"
                                        className="opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                                    />
                                    <span className="flex-1 min-w-0">
                                        <span className="block font-display text-lg font-medium tracking-tight text-foreground transition-colors duration-200 group-hover:text-accent">
                                            {channel.label}
                                        </span>
                                        <span className="block text-sm text-muted">{channel.description}</span>
                                    </span>
                                    <ArrowUpRight
                                        size={17}
                                        aria-hidden="true"
                                        className="text-muted transition-all duration-200 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </a>
                            ))
                        }
                    </div>
                    <p className="mt-8 text-sm leading-relaxed text-muted">
                        Prefer email? Write directly to{" "}
                        <a href="mailto:geraldrolland123@gmail.com" className="text-accent hover:underline">
                            geraldrolland123@gmail.com
                        </a>
                    </p>
                </Reveal>
                <Reveal delay={0.1} className="order-1 lg:order-2">
                    <SubmitForm />
                </Reveal>
            </div>
        </div>
    );
};

export default ContactMe;
