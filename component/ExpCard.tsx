"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

type ExpCardPropType = {
    logo: StaticImageData,
    position: string,
    company: string,
    location?: string,
    duration: string,
    descriptions: string[],
}

const ExpCard = ({ logo, position, company, location, duration, descriptions }: ExpCardPropType) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative pl-12 md:pl-16"
        >
            <span className="absolute left-[7px] md:left-[11px] top-2 h-4 w-4 rounded-full border-2 border-blue-600 bg-white shadow-sm"></span>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                            <Image src={logo} alt={`${company} logo`} width={30} height={30} />
                        </div>
                        <div className="min-w-0">
                            <h3 className="font-bold text-slate-900 break-words">{position}</h3>
                            <p className="text-sm font-medium text-blue-600 break-words">{company}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5">
                        <span className="text-sm text-slate-500 bg-slate-50 border border-slate-200 rounded-full px-3 py-1">{duration}</span>
                        {location && (
                            <span className="flex items-center gap-1 text-xs text-slate-500">
                                <MapPin size={12} />
                                {location}
                            </span>
                        )}
                    </div>
                </div>
                <ul className="space-y-2">
                    {
                        descriptions.map((description) => (
                            <li key={description} className="flex gap-2.5 items-start text-sm text-slate-600">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0"></span>
                                {description}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </motion.div>
    )
}

export default ExpCard;
