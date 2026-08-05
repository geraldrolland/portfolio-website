import Label from "./Label";
import whatsapIcon from "../public/whatsapp-logo.svg";
import emailIcon from "../public/gmail-logo.svg";
import linkedinIcon from "../public/linkedin-logo.svg";
import Image from "next/image";
import SubmitForm from "./SubmitForm";
import Reveal from "./motion";

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
        <div className="w-full flex flex-col items-center gap-y-12">
            <Reveal>
                <Label title="Contact Me" description="Get in touch" />
            </Reveal>
            <div className="w-full max-w-5xl px-4 grid lg:grid-cols-[1fr,1.3fr] gap-10 items-start">
                <Reveal className="order-2 lg:order-1 flex flex-col gap-4">
                    {
                        channels.map((channel) => (
                            <a
                                key={channel.label}
                                href={channel.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-blue-200 transition-all duration-300"
                            >
                                <span className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors duration-300">
                                    <Image width={22} height={22} src={channel.icon} alt={`${channel.label} icon`} />
                                </span>
                                <span>
                                    <span className="block font-semibold text-slate-900">{channel.label}</span>
                                    <span className="block text-sm text-slate-500">{channel.description}</span>
                                </span>
                            </a>
                        ))
                    }
                </Reveal>
                <Reveal delay={0.1} className="order-1 lg:order-2">
                    <SubmitForm />
                </Reveal>
            </div>
        </div>
    )
}

export default ContactMe;
