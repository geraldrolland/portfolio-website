"use client";

import NavBar from "@/component/NavBar";
import DropDownMenu from "@/component/DropDownMenu";
import Footer from "@/component/Footer";
import Notification from "@/component/Notification";
import ScrollProgress from "@/component/ScrollProgress";
import ScrollToTop from "@/component/ScrollToTop";
import { useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const ClientLayout = ({ children }: { children: ReactNode }) => {
    const [displayMenu, setDisplayMenu] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <ScrollProgress />
            <NavBar setDisplayMenu={setDisplayMenu} />
            <DropDownMenu displayMenu={displayMenu} setDisplayMenu={setDisplayMenu} />
            <motion.main
                key={pathname}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
            >
                {children}
            </motion.main>
            <Footer />
            <Notification />
            <ScrollToTop />
        </>
    );
};

export default ClientLayout;
