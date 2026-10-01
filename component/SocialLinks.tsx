"use client";

import { Github, Linkedin } from "lucide-react";

const links = [
    { label: "GitHub", href: "https://github.com/geraldrolland", Icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/onyeka-ujowundu-72b897246", Icon: Linkedin },
];

const SocialLinks = () => {
    return (
        <div className="flex items-center gap-2">
            {
                links.map(({ label, href, Icon }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        title={label}
                        className="w-10 h-10 rounded-full flex items-center justify-center text-muted transition-colors duration-200 hover:text-accent hover:bg-accent-soft"
                    >
                        <Icon size={18} />
                    </a>
                ))
            }
        </div>
    );
};

export default SocialLinks;
