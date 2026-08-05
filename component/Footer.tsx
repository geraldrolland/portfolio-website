"use client";

import SocialLinks from "./SocialLinks";
import CopyRight from "./CopyRight";
import Link from "next/link";

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Certifications", href: "/certifications" },
    { label: "Contact", href: "/contact" },
];

const Footer = () => {
    return (
        <footer className="mt-20 bg-slate-900 text-slate-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-3">
                <div>
                    <p className="text-xl font-bold text-white mb-3">
                        Gerald<span className="text-blue-500">.</span>
                    </p>
                    <p className="text-sm leading-relaxed text-slate-400">
                        Software engineer building secure, scalable web applications, cloud infrastructure, and robust system designs.
                    </p>
                </div>
                <div>
                    <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</p>
                    <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
                        {
                            quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-slate-400 hover:text-white transition-colors duration-200">
                                        {link.label}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Connect</p>
                    <SocialLinks variant="light" />
                    <a href="mailto:geraldrolland123@gmail.com" className="inline-block mt-4 text-sm text-slate-400 hover:text-white transition-colors duration-200">
                        geraldrolland123@gmail.com
                    </a>
                </div>
            </div>
            <div className="border-t border-slate-800">
                <CopyRight />
            </div>
        </footer>
    )
}

export default Footer;
