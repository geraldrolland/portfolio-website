import Introduction from "@/component/Introduction";
import PersonaImage from "@/component/PersonaImage";
import Skills from "@/component/Skills";
import myImage from "../public/my-image.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gerald Ujowundu — Software Engineer",
    description:
        "Portfolio of Onyeka Gerald Ujowundu — a software engineer building secure, scalable web applications, AWS cloud infrastructure, and robust system designs.",
};

export default function HomePage() {
    return (
        <>
            <section className="pt-28 pb-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row flex-wrap justify-center items-center gap-x-[100px] gap-y-14">
                    <Introduction />
                    <PersonaImage image={myImage} />
                </div>
            </section>
            <Skills />
        </>
    );
}
