import Label from "./Label"
import ExpCard from "./ExpCard";

const experience = [
    {
        logo: "/logo.png",
        position: "Lead software Engineer",
        company: "Lead Tech",
        duration: "Nov 2021 - Present",
        descriptions: [
            "Leading a team of 10 software engineers to develop and maintain web applications.",
            "Implementing best practices for software development and ensuring code quality.",
            "Collaborating with cross-functional teams to deliver high-quality software solutions.",

        ]


    },
    {
        logo: "/logo.png",
        position: "Backend Engineer",
        company: "Lead Tech",
        duration: "Nov 2021 - Present",
        descriptions: [
            "Leading a team of 10 software engineers to develop and maintain web applications.",
            "Implementing best practices for software development and ensuring code quality.",
            "Collaborating with cross-functional teams to deliver high-quality software solutions.",

        ]


    },
    {
        logo: "/logo.png",
        position: "software Engineer",
        company: "Lead Tech",
        duration: "Nov 2021 - Present",
        descriptions: [
            "Leading a team of 10 software engineers to develop and maintain web applications.",
            "Implementing best practices for software development and ensuring code quality.",
            "Collaborating with cross-functional teams to deliver high-quality software solutions.",

        ]


    }
]
const Experience = () => {
    return (
        <>
        <section className="w-full  flex flex-col gap-y-8  items-center">
            <Label title="Experience" description="My professional journey includes:" />
            {
                experience.map(({logo, position, company, duration, descriptions}) => (
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
        </section>
        </>
    )
}

export default Experience;
