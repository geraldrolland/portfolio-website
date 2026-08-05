import Experience from "@/component/Experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Experience — Gerald Ujowundu",
    description: "Professional journey of Onyeka Gerald Ujowundu — lead software engineer, backend engineer, and intern at HNG.",
};

export default function ExperiencePage() {
    return (
        <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
            <Experience />
        </div>
    );
}
