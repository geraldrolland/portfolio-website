import Label from "./Label"
import ExpCard from "./ExpCard";
import houseIcon from "../public/house-logo.svg";



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
