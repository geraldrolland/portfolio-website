"use client";

import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";
import { PersonStandingIcon } from "lucide-react";
import { CodeIcon } from "lucide-react";
import { BriefcaseIcon } from "lucide-react";
import { MailIcon } from "lucide-react";
import { FileTextIcon } from "lucide-react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";



type DropDownMenuPropType = {
    displayMenu: boolean,
    setDisplayMenu: (displayMenu: boolean) => void
};

const DropDownMenu = ({ displayMenu, setDisplayMenu }: DropDownMenuPropType) => {
    const pathname = usePathname();

    return (
        <motion.div
            initial={{ opacity: 0, translateX: "-100%" }}
            animate={{ opacity: displayMenu ? 1 : 0, translateX: displayMenu ? 0 : "-100%" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="w-full flex   justify-center top-0 fixed z-10 md:hidden block h-full">
            <div className="w-[80%]  bg-white   h-full px-2">
                <ul className={`w-full flex flex-col gap-y-6 mt-4 text-gray-700 text-[18px]`}>
                    <Link onClick={() => setDisplayMenu(false)} href="/" className={`flex gap-x-6 items-center p-2 ${pathname === '/' ? 'rounded-md shadow-sm' : ''}`}><Home className={`${pathname === '/' ? 'text-blue-500' : ''}`} /><p className={`${pathname === '/' ? 'text-blue-500' : ''}`}>Home</p></Link>
                    <Link onClick={() => setDisplayMenu(false)} href="/experience" className={`flex gap-x-6 items-center p-2 ${pathname === '/experience' ? 'rounded-md shadow-sm' : ''}`}><CodeIcon className={`${pathname === '/experience' ? 'text-blue-500' : ''}`} /><p className={`${pathname === '/experience' ? 'text-blue-500' : ''}`}>Experience</p></Link>
                    <Link onClick={() => setDisplayMenu(false)} href="/projects" className={`flex gap-x-6 items-center p-2 ${pathname === '/projects' ? 'rounded-md shadow-sm' : ''}`}><CodeIcon className={`${pathname === '/projects' ? 'text-blue-500' : ''}`} /><p className={`${pathname === '/projects' ? 'text-blue-500' : ''}`}>Projects</p></Link>
                    <Link onClick={() => setDisplayMenu(false)} href="/contact" className={`flex gap-x-6  items-center p-2 ${pathname === '/contact' ? 'rounded-md shadow-sm' : ''}`}><PersonStandingIcon className={`${pathname === '/contact' ? 'text-blue-500' : ''}`} /><p className={`${pathname === '/contact' ? 'text-blue-500' : ''}`}>Contact</p></Link>
                    <Link onClick={() => setDisplayMenu(false)} href="/about" className={`flex gap-x-6  items-center p-2 ${pathname === '/about' ? 'rounded-md shadow-sm' : ''}`}><MailIcon className={`${pathname === '/about' ? 'text-blue-500' : ''}`} /><p className={`${pathname === '/about' ? 'text-blue-500' : ''}`}>About</p></Link>
                </ul>
            </div>
            <div className="w-[20%] bg-white pr-2 py-2 backdrop-filter  bg-opacity-60 flex justify-end">
                <motion.button
                whileInView={{
                    rotate: 360
                }} 
                transition={{
                    duration: 0.5
                }}
                className="w-[40px] cursor-pointer h-[40px] shadow-md bg-white flex justify-center items-center rounded-[25px]">
                    <X onClick={() => setDisplayMenu(false)} className="text-gray-800" />
                </motion.button>
            </div>
        </motion.div>
    )
}

export default DropDownMenu;