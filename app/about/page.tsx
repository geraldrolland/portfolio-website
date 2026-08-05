import AboutMe from "@/component/AboutMe"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About — Gerald Ujowundu",
    description: "Learn more about Onyeka Gerald Ujowundu — software engineer, ALX graduate, and cloud developer.",
};

export default function AboutPage() {
    return (
        <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
            <AboutMe />
        </div>
    )
}
