"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Certifications", href: "/certifications" },
    { label: "Contact", href: "/contact" },
];

const Menu = () => {
    const location = usePathname();

    return (
        <ul className="hidden lg:flex items-center gap-1 h-full">
            {
                links.map((link) => {
                    const active = location === link.href;
                    return (
                        <li key={link.href} className="relative h-full flex items-center">
                            <Link
                                href={link.href}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                                    active ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
                                }`}
                            >
                                {link.label}
                            </Link>
                            {active && (
                                <motion.span
                                    layoutId="nav-active-indicator"
                                    className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-blue-600"
                                />
                            )}
                        </li>
                    );
                })
            }
        </ul>
    )
}

export default Menu;
