"use client";

import Image, { type StaticImageData } from "next/image";
import { Download } from "lucide-react";
import Reveal from "./motion";
import { linkArrow } from "./ui";

type CertificateCardPropType = {
    logo: StaticImageData,
    name: string,
    organization: string,
    issueDate: string,
    certificateUrl: string,
};

const CertificateCard = ({ logo, name, organization, issueDate, certificateUrl }: CertificateCardPropType) => {
    return (
        <Reveal className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 py-6 border-b border-line">
            <div className="w-12 h-12 border border-line flex items-center justify-center shrink-0 bg-card">
                <Image src={logo} alt={`${organization} logo`} width={28} height={28} />
            </div>
            <div className="flex-1 min-w-0">
                <h2 className="font-display text-lg font-medium tracking-tight text-foreground">{name}</h2>
                <p className="mt-1 text-sm text-muted">
                    {organization} <span className="text-line" aria-hidden="true">|</span> {issueDate}
                </p>
            </div>
            <div className="shrink-0">
                {
                    certificateUrl ? (
                        <a href={certificateUrl} download className={linkArrow}>
                            <Download size={15} aria-hidden="true" />
                            Download
                        </a>
                    ) : (
                        <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                            In progress
                        </span>
                    )
                }
            </div>
        </Reveal>
    );
};

export default CertificateCard;
