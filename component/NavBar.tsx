"use client";

import { Menu as MenuIcon } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Menu from "./Menu";
import Separator from "./Separator";
import DownloadCV from "./DownloadCV";
import Link from "next/link";

type NavBarPropType = {
    setDisplayMenu: (displayMenu: boolean) => void,
};

const NavBar = ({ setDisplayMenu }: NavBarPropType) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-line">
            <nav className="max-w-6xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => setDisplayMenu(true)}
                        aria-label="Open menu"
                        className="lg:hidden p-2 -ml-2 text-foreground hover:text-accent transition-colors duration-200"
                    >
                        <MenuIcon size={22} />
                    </button>
                    <Link href="/" className="font-display text-xl font-medium tracking-tight text-foreground">
                        Gerald<span className="text-accent">.</span>
                    </Link>
                </div>
                <div className="flex items-center gap-x-5">
                    <Menu />
                    <Separator />
                    <DownloadCV />
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
