"use client";

import SocialLinks from "./SocialLinks";
import { motion, type Variants } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Introduction = () => {
    return (
        <section className="md:w-[50%] self-start w-full order-1 lg:order-none">
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="flex flex-col"
            >
                <motion.span variants={item} className="inline-flex items-center gap-2 self-start rounded-full bg-green-50 border border-green-200 px-3 py-1 text-sm font-medium text-green-700">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
                    </span>
                    Available for hire
                </motion.span>

                <motion.h2 variants={item} className="mt-5 text-4xl sm:text-5xl font-bold text-slate-900">
                    Hi, I&apos;m Gerald
                </motion.h2>

                <motion.p variants={item} className="mt-2 text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Software Engineer &amp; Cloud Developer
                </motion.p>

                <motion.p variants={item} className="mt-5 text-[16px] leading-relaxed text-slate-600">
                    I&apos;m a software engineer with over 3 years of experience in building
                    secure and reliable software applications that
                    drive business impact. My work is grounded in system
                    thinking and design, ensuring that every solution is scalable,
                    efficient, and user-centered. I follow agile methodologies to
                    deliver high-quality software iteratively, with a strong emphasis on testing
                    and continuous improvement throughout the development process.
                </motion.p>

                <motion.div variants={item} className="mt-8 flex items-center gap-2">
                    <div className="flex flex-col justify-between items-center">
                        <IoLocationOutline className="font-bold text-[18px] text-slate-600" />
                        <div className="w-[10px] h-[10px] mb-[5.7px] rounded-[5px] bg-green-600"></div>
                    </div>
                    <div className="flex pl-3 flex-col justify-between gap-y-2">
                        <span className="font-semibold text-slate-800">Lagos, Nigeria</span>
                        <span className="font-semibold text-slate-500">Available for hire</span>
                    </div>
                </motion.div>

                <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                    >
                        View Projects
                        <ArrowRight size={16} />
                    </Link>
                    <SocialLinks />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Introduction;
