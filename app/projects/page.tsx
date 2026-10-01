import Projects from "@/component/Projects"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects â€” Gerald Ujowundu",
    description: "Explore projects built by Onyeka Gerald Ujowundu â€” MERIDIAN, AI Veriscope, QueryMind, and Movie24.",
};

export default function ProjectPage() {
    return (
        <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
            <Projects />
        </div>
    )
}
