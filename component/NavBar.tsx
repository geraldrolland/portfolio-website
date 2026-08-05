"use client";

import Menu from "./Menu";
import Separator from "./Seperator";
import DownloadCV from "./DownlaodCV";
import { Menu as MenuIcon } from "lucide-react";
import Link from "next/link";

type NavBarPropType = {
    setDisplayMenu: (displayMenu: boolean) => void,
};

const NavBar = ({ setDisplayMenu }: NavBarPropType) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
            <nav className="max-w-6xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setDisplayMenu(true)}
                        aria-label="Open menu"
                        className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                    >
                        <MenuIcon size={22} />
                    </button>
                    <Link href="/" className="text-xl font-bold text-slate-900">
                        Gerald<span className="text-blue-600">.</span>
                    </Link>
                </div>
                <div className="flex items-center gap-x-6">
                    <Menu />
                    <Separator />
                    <DownloadCV />
                </div>
            </nav>
        </header>
    )
}

export default NavBar;
