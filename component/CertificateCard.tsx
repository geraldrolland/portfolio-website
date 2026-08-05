"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Download, Clock } from "lucide-react";

type CertificateCardPropType = {
    logo: StaticImageData,
    name: string,
    organization: string,
    issueDate: string,
    certificateUrl: string,
};

const CertificateCard = ({ logo, name, organization, issueDate, certificateUrl }: CertificateCardPropType) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-5"
        >
            <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                <Image src={logo} alt={`${organization} logo`} width={36} height={36} />
            </div>
            <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-slate-900">{name}</h3>
                <p className="text-sm text-slate-600 mt-0.5">{organization}</p>
                <p className="text-xs text-slate-500 mt-1">Issued: {issueDate}</p>
            </div>
            <div className="w-full sm:w-auto shrink-0">
                {
                    certificateUrl ? (
                        <a
                            href={certificateUrl}
                            download
                            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                        >
                            <Download size={16} />
                            Download
                        </a>
                    ) : (
                        <span className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-slate-100 text-slate-500 text-sm font-medium px-4 py-2">
                            <Clock size={16} />
                            Certification In Process
                        </span>
                    )
                }
            </div>
        </motion.div>
    )
}

export default CertificateCard;
