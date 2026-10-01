"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navLinks } from "./nav-links";

const Menu = () => {
    const location = usePathname();

    return (
        <ul className="hidden lg:flex items-center gap-7">
            {
                navLinks.map((link) => {
                    const active = location === link.href;
                    return (
                        <li key={link.href} className="relative">
                            <Link
                                href={link.href}
                                aria-current={active ? "page" : undefined}
                                className={`block py-1 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors duration-200 ${
                                    active ? "text-accent" : "text-muted hover:text-foreground"
                                }`}
                            >
                                {link.label}
                            </Link>
                            {active && (
                                <motion.span
                                    layoutId="nav-active-indicator"
                                    className="absolute left-0 right-0 -bottom-0.5 h-px bg-accent"
                                />
                            )}
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default Menu;
