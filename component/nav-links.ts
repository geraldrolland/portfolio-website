import { Home, User, Briefcase, Code2, Award, Mail, type LucideIcon } from "lucide-react";

export type NavLink = {
    label: string,
    href: string,
    icon: LucideIcon,
};

export const navLinks: NavLink[] = [
    { label: "Home", href: "/", icon: Home },
    { label: "About", href: "/about", icon: User },
    { label: "Experience", href: "/experience", icon: Briefcase },
    { label: "Projects", href: "/projects", icon: Code2 },
    { label: "Certifications", href: "/certifications", icon: Award },
    { label: "Contact", href: "/contact", icon: Mail },
];
