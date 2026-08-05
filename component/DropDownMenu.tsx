"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Code2, Briefcase, Mail, User, Award, X } from "lucide-react";
import { useEffect } from "react";

type DropDownMenuPropType = {
    displayMenu: boolean,
    setDisplayMenu: (displayMenu: boolean) => void
};

const links = [
    { label: "Home", href: "/", icon: Home },
    { label: "Experience", href: "/experience", icon: Briefcase },
    { label: "Projects", href: "/projects", icon: Code2 },
    { label: "Certifications", href: "/certifications", icon: Award },
    { label: "Contact", href: "/contact", icon: Mail },
    { label: "About", href: "/about", icon: User },
];

const DropDownMenu = ({ displayMenu, setDisplayMenu }: DropDownMenuPropType) => {
    const pathname = usePathname();

    useEffect(() => {
        document.body.style.overflow = displayMenu ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [displayMenu]);

    return (
        <AnimatePresence>
            {displayMenu && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setDisplayMenu(false)}
                        className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden"
                    />
                    <motion.aside
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "tween", duration: 0.25, ease: "easeInOut" }}
                        className="fixed top-0 left-0 bottom-0 z-50 w-[80%] max-w-xs bg-white shadow-2xl lg:hidden"
                    >
                        <div className="flex items-center justify-between px-5 h-16 border-b border-slate-100">
                            <span className="text-lg font-bold text-slate-900">
                                Gerald<span className="text-blue-600">.</span>
                            </span>
                            <button
                                onClick={() => setDisplayMenu(false)}
                                aria-label="Close menu"
                                className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <nav className="p-4">
                            <ul className="flex flex-col gap-1">
                                {
                                    links.map((link, index) => {
                                        const active = pathname === link.href;
                                        const Icon = link.icon;
                                        return (
                                            <motion.li
                                                key={link.href}
                                                initial={{ opacity: 0, x: -16 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.08 * index + 0.1, duration: 0.3 }}
                                            >
                                                <Link
                                                    onClick={() => setDisplayMenu(false)}
                                                    href={link.href}
                                                    className={`flex items-center gap-3 px-3 py-3 rounded-lg text-[15px] font-medium transition-colors ${
                                                        active
                                                            ? "bg-blue-50 text-blue-600"
                                                            : "text-slate-700 hover:bg-slate-50"
                                                    }`}
                                                >
                                                    <Icon size={18} className={active ? "text-blue-600" : "text-slate-500"} />
                                                    {link.label}
                                                </Link>
                                            </motion.li>
                                        );
                                    })
                                }
                            </ul>
                        </nav>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    )
}

export default DropDownMenu;
