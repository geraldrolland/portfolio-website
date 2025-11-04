"use client"
import { Poppins } from "next/font/google"
import Link from "next/link"
import { usePathname } from "next/navigation"


const Menu = () => {
    const location = usePathname();

    return (
        <ul className={` gap-x-6 text-gray-700 md:flex hidden items-center  h-full `}>
            <li className={`${location === '/' ? 'text-blue-500' : ''}`}><Link href="/">Home</Link></li>
            <li className={`${location === '/experience' ? 'text-blue-500' : ''}`}><Link href="/experience">Experience</Link></li>
            <li className={`${location === '/projects' ? 'text-blue-500' : ''}`}><Link href="/projects">Projects</Link></li>
            <li className={`${location === '/contact' ? 'text-blue-500' : ''}`}><Link href="/contact">Contact</Link></li>
            <li className={`${location === '/about' ? 'text-blue-500' : ''}`}><Link href="/about">About</Link></li>
        </ul>
    )
}

export default Menu;