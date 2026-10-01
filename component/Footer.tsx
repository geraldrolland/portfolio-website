"use client";

import SocialLinks from "./SocialLinks";
import CopyRight from "./CopyRight";
import Link from "next/link";
import { navLinks } from "./nav-links";

const Footer = () => {
    return (
        <footer className="mt-24 border-t border-line">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                        <Link href="/" className="font-display text-3xl font-medium tracking-tight text-foreground">
                            Gerald<span className="text-accent">.</span>
                        </Link>
                        <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
                            Software engineer building secure, scalable web applications, cloud infrastructure, and robust system designs.
                        </p>
                    </div>
                    <nav className="lg:col-span-4 lg:col-start-7" aria-label="Footer">
                        <p className="text-xs uppercase tracking-[0.18em] text-muted">Navigate</p>
                        <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
                            {
                                navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-foreground/80 hover:text-accent transition-colors duration-200">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <div className="lg:col-span-3">
                        <p className="text-xs uppercase tracking-[0.18em] text-muted">Connect</p>
                        <div className="mt-3 -ml-2">
                            <SocialLinks />
                        </div>
                        <a
                            href="mailto:geraldrolland123@gmail.com"
                            className="mt-2 block text-sm text-muted hover:text-accent transition-colors duration-200"
                        >
                            geraldrolland123@gmail.com
                        </a>
                    </div>
                </div>
                <div className="mt-12 border-t border-line pt-6">
                    <CopyRight />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
