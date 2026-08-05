import Label from "./Label"
import ExpCard from "./ExpCard";
import houseIcon from "../public/house-logo.svg";
import Reveal from "./motion";

const experience = [
    {
        logo: houseIcon,
        position: "Lead Software Engineer",
        company: "Global Tech",
        duration: "Nov 2023 - Oct 2025",
        descriptions: [
            "Leading a team of 4 software engineers to develop and maintain web applications.",
            "Implementing best practices for software development and ensuring code quality.",
            "Collaborating with cross-functional teams to deliver high-quality software solutions.",
        ]
    },
    {
        logo: houseIcon,
        position: "Backend Engineer",
        company: "Lead Tech",
        duration: "August 2021 - June 2022",
        descriptions: [
            "Leading a team of 10 software engineers to develop and maintain web applications.",
            "Implementing best practices for software development and ensuring code quality.",
            "Collaborating with cross-functional teams to deliver high-quality software solutions.",
        ]
    },
    {
        logo: houseIcon,
        position: "Intern Software Engineer",
        company: "HNG",
        duration: "Jan 2021 - May 2021",
        descriptions: [
            "Leading a team of 10 software engineers to develop and maintain web applications.",
            "Implementing best practices for software development and ensuring code quality.",
            "Collaborating with cross-functional teams to deliver high-quality software solutions.",
        ]
    }
]

const Experience = () => {
    return (
        <section className="w-full flex flex-col items-center gap-y-12">
            <Reveal>
                <Label title="Experience" description="My professional journey includes:" />
            </Reveal>
            <div className="relative max-w-3xl w-full px-4">
                <Reveal y={0} className="absolute left-[15px] md:left-[19px] top-3 bottom-3">
                    <span className="block w-0.5 h-full bg-blue-100 rounded-full"></span>
                </Reveal>
                <div className="flex flex-col gap-y-10">
                    {
                        experience.map(({ logo, position, company, duration, descriptions }) => (
                            <ExpCard
                                key={position}
                                logo={logo}
                                position={position}
                                company={company}
                                duration={duration}
                                descriptions={descriptions}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Experience;
