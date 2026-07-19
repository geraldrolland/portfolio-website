import Label from "./Label";
import ProjectCard from "./ProjectCard";
import movie24 from "../public/movie24_image.png";
import ai_img from "../public/ai_img.jpg"

const projects = [
    {
        title: "AI Fake News Detector",
        description: " AI Fake News Project is a prototype solution for analyzing a webpage URL and predicting whether the extracted headlines look trustworthy or likely fake. The solution combines a FastAPI backend, a trained Keras/TensorFlow model, Selenium-based webpage scraping, and NLP preprocessing to provide a lightweight AI-powered fake-news detection workflow.",
        image: ai_img,
        technologies: ["Fastapi", "mySQL", "Python", "Redis", "TensorFlow", "Scikit-learn", "Selenium", "BeautifulSoup4"],
        link: "https://github.com/geraldrolland/AI_FAKE_NEW_PROJECT",
        github: "https://github.com/geraldrolland/AI_FAKE_NEW_PROJECT"
    },
    {
        title: "Movie24",
        description: "Movie24 is a fully responsive movie platform that offers a smooth and excellent user experience. Users can easily browse and search for movies, watch trailers, and download films for offline viewing. Designed for speed and functionality, Movie24 delivers seamless navigation across all devices, ensuring a functional and engaging streaming experience anytime, anywhere.",
        image: movie24,
        technologies: ["React", "TypeScript", "CSS", "HTML", "TailwindCss", "tmdb API"],
        link: "https://movie24-ui.vercel.app",
        github: "https://github.com/geraldrolland/Movie24_Ui"
    },
]
const Projects = () => {
    return (
        <>
        <section className="w-full  flex flex-col items-center gap-y-8">
            <Label title="Projects" description="some noteworthy project i have built:" />
            <div className="w-full flex flex-col items-center gap-y-14">
                {
                    projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))
                }
            </div>
        </section>
        </>
    )
}

export default Projects;