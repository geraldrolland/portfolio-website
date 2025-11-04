
import Image from "next/image";

type ProjectCardPropType = {
    title: string;
    description: string;
    image: any;
    technologies: string[];
    link: string;
    github: string;
}
const ProjectCard = ({ title, description, image, technologies, link, github }: ProjectCardPropType) => {
    return(
        <div className="md:max-w-[80%] lg:shadow-lg rounded-md md:p-4 flex justify-between gap-y-6 w-[100%] flex-wrap lg:flex-wrap-none  items-start">
        <Image src={image} width={300}  height={350} alt={title}/>
        <div className="lg:w-[60%]  w-[100%]">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="mb-4 text-[14px] text-gray-700 line-clamp-4">{description}</p>
            <ul className="mb-6 flex flex-wrap gap-x-2 gap-y-2">
                {
                    technologies.map((tech) => <li key={tech} className="p-2 text-[14px] bg-gray-700 rounded-full shadow-md text-white">{tech}</li>)
                }
            </ul>
            <div className="flex gap-x-4">
                <a href={link} target="_blank" className="p-2 bg-blue-500 text-white shadow-md rounded-md">Live Demo</a>
                <a href={github} target="_blank" className="p-2 bg-white text-blue-500 shadow-md rounded-md">{"< / >"}</a>
            </div>
        </div>
        </div>
    )
}

export default ProjectCard;