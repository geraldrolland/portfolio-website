"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export const staggerContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

type RevealPropType = {
    children: ReactNode,
    delay?: number,
    y?: number,
    className?: string,
    once?: boolean,
};

const Reveal = ({ children, delay = 0, y = 24, className, once = true }: RevealPropType) => {
    const reducedMotion = useReducedMotion();

    if (reducedMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, margin: "-60px" }}
            transition={{ duration: 0.55, delay, ease: EASE }}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
