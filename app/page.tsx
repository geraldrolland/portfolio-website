import Introduction from "@/component/Introduction";
import PersonaImage from "@/component/PersonaImage";
import Skills from "@/component/Skills";
import Architecture from "@/component/Architecture";
import Principles from "@/component/Principles";
import myImage from "../public/my-image.jpg";

export default function HomePage() {
    return (
        <>
            <section className="pt-32 pb-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-16">
                    <Introduction />
                    <PersonaImage image={myImage} />
                </div>
            </section>
            <Skills />
            <Architecture />
            <Principles />
        </>
    );
}
