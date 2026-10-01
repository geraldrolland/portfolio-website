"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";
import { useEffect, useRef } from "react";
import { navLinks } from "./nav-links";
import { EASE } from "./motion";
import { btnAccent } from "./ui";

type DropDownMenuPropType = {
    displayMenu: boolean,
    setDisplayMenu: (displayMenu: boolean) => void
};

const DropDownMenu = ({ displayMenu, setDisplayMenu }: DropDownMenuPropType) => {
    const pathname = usePathname();
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        document.body.style.overflow = displayMenu ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [displayMenu]);

    useEffect(() => {
        if (!displayMenu) return;
        closeButtonRef.current?.focus();
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setDisplayMenu(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [displayMenu, setDisplayMenu]);

    return (
        <AnimatePresence>
            {displayMenu && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setDisplayMenu(false)}
                        className="fixed inset-0 z-40 bg-foreground/40 backdrop-blur-sm lg:hidden"
                    />
                    <motion.aside
                        role="dialog"
                        aria-modal="true"
                        aria-label="Navigation menu"
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="fixed top-0 left-0 bottom-0 z-50 w-full sm:w-[420px] bg-background border-r border-line flex flex-col lg:hidden"
                    >
                        <div className="flex items-center justify-between px-6 h-16 border-b border-line shrink-0">
                            <Link href="/" onClick={() => setDisplayMenu(false)} className="font-display text-xl font-medium tracking-tight">
                                Gerald<span className="text-accent">.</span>
                            </Link>
                            <button
                                ref={closeButtonRef}
                                type="button"
                                onClick={() => setDisplayMenu(false)}
                                aria-label="Close menu"
                                className="p-2 -mr-2 text-muted hover:text-accent transition-colors duration-200"
                            >
                                <X size={22} />
                            </button>
                        </div>
                        <nav className="flex-1 overflow-y-auto px-6 py-6" aria-label="Primary">
                            <ul className="flex flex-col">
                                {
                                    navLinks.map((link, index) => {
                                        const active = pathname === link.href;
                                        return (
                                            <motion.li
                                                key={link.href}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.07 * index + 0.08, duration: 0.35, ease: EASE }}
                                                className="border-b border-line last:border-b-0"
                                            >
                                                <Link
                                                    onClick={() => setDisplayMenu(false)}
                                                    href={link.href}
                                                    aria-current={active ? "page" : undefined}
                                                    className={`group flex items-baseline gap-4 py-5 transition-colors duration-200 ${
                                                        active ? "text-accent" : "text-foreground hover:text-accent"
                                                    }`}
                                                >
                                                    <span className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-accent w-7 shrink-0">
                                                        {String(index + 1).padStart(2, "0")}
                                                    </span>
                                                    <span className="font-display text-3xl font-medium tracking-tight">
                                                        {link.label}
                                                    </span>
                                                </Link>
                                            </motion.li>
                                        );
                                    })
                                }
                            </ul>
                        </nav>
                        <div className="px-6 py-5 border-t border-line shrink-0 flex flex-col gap-4">
                            <a
                                href="/mycv.pdf"
                                download
                                className={`${btnAccent} w-full`}
                            >
                                <Download size={15} aria-hidden="true" />
                                Download CV
                            </a>
                            <a
                                href="mailto:geraldrolland123@gmail.com"
                                className="text-sm text-muted hover:text-accent transition-colors duration-200"
                            >
                                geraldrolland123@gmail.com
                            </a>
                        </div>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
};

export default DropDownMenu;
