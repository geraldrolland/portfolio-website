"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { EASE } from "./motion";

type PersonaImagePropType = {
    image: StaticImageData,
}

const PersonaImage = ({ image }: PersonaImagePropType) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            className="relative w-[min(300px,80vw)] sm:w-[360px] aspect-[4/5] shrink-0"
        >
            <div className="absolute -top-3 -right-3 w-full h-full border border-accent/50" aria-hidden="true"></div>
            <div className="relative w-full h-full overflow-hidden group">
                <Image
                    src={image}
                    alt="Gerald Ujowundu"
                    fill
                    sizes="(max-width: 640px) 300px, 360px"
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
                />
            </div>
        </motion.div>
    );
};

export default PersonaImage;
