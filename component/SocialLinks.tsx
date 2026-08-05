"use client";

import { LuLinkedin } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";

type SocialLinksPropType = {
    variant?: "dark" | "light",
};

const links = [
    { label: "GitHub", href: "https://github.com/geraldrolland", Icon: FiGithub },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/onyekaujowundu/", Icon: LuLinkedin },
];

const SocialLinks = ({ variant = "dark" }: SocialLinksPropType) => {
    const isLight = variant === "light";
    return (
        <div className="flex items-center gap-3">
            {
                links.map(({ label, href, Icon }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        title={label}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 ${
                            isLight
                                ? "text-slate-400 hover:text-white hover:bg-slate-800"
                                : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                        }`}
                    >
                        <Icon size={18} />
                    </a>
                ))
            }
        </div>
    )
}

export default SocialLinks;
