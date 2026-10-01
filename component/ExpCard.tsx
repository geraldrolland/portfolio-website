"use client";

import { MapPin } from "lucide-react";
import Reveal from "./motion";

type ExpCardPropType = {
    index: number,
    position: string,
    company: string,
    location?: string,
    duration: string,
    descriptions: string[],
}

const ExpCard = ({ index, position, company, location, duration, descriptions }: ExpCardPropType) => {
    return (
        <Reveal className="grid gap-5 md:grid-cols-[240px,1fr] md:gap-10 py-8 border-b border-line">
            <div>
                <p className="font-display text-lg font-medium text-accent">
                    {duration.replace(" - ", " — ")}
                </p>
                {location && (
                    <p className="mt-2 flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-muted">
                        <MapPin size={12} aria-hidden="true" />
                        {location}
                    </p>
                )}
            </div>
            <div className="min-w-0">
                <div className="flex items-baseline gap-3">
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                        <h2 className="font-display text-xl sm:text-2xl font-medium tracking-tight text-foreground">
                            {position}
                        </h2>
                        <p className="mt-1 text-sm font-medium uppercase tracking-[0.12em] text-muted">
                            {company}
                        </p>
                    </div>
                </div>
                <ul className="mt-5 space-y-3.5">
                    {
                        descriptions.map((description) => (
                            <li key={description} className="flex gap-3.5 items-start text-[15px] leading-relaxed text-muted min-w-0 break-words">
                                <span className="mt-3 h-px w-4 bg-accent shrink-0" aria-hidden="true"></span>
                                {description}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </Reveal>
    );
};

export default ExpCard;
