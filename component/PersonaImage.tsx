"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";

type PersonaImagePropType = {
    image: StaticImageData,
}

const PersonaImage = ({ image }: PersonaImagePropType) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="relative w-[280px] h-[380px] sm:w-[320px] sm:h-[420px] order-2 lg:order-none"
        >
            <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl bg-blue-600/10 border border-blue-600/20"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
                <Image
                    src={image}
                    alt="Gerald Ujowundu"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 280px, 320px"
                />
            </div>
        </motion.div>
    )
}

export default PersonaImage;
