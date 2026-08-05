import Label from "./Label"
import ExpCard from "./ExpCard";
import houseIcon from "../public/house-logo.svg";
import Reveal from "./motion";

const experience = [
    {
        logo: houseIcon,
        position: "Lead Software Engineer",
        company: "GlobalTech Institute",
        location: "Ikorodu, Lagos, Nigeria",
        duration: "07.2020 - 03.2023",
        descriptions: [
            "Engineered a FastAPI-based data extraction microservice for managing connectors, data sources, extraction jobs, and automated scheduling, enabling reliable and scalable data ingestion workflows.",
            "Designed and implemented an asynchronous data processing pipeline using FastAPI, Celery, Redis, RabbitMQ, and WebSockets to extract, transform, flatten, and stream data from databases and files with real-time job progress updates.",
            "Built secure and resilient data processing features, including encrypted connector credentials, schema drift detection, idempotency validation, job lifecycle management, and fault-tolerant execution to ensure reliable extraction operations.",
            "Integrated Kafka and event-driven messaging to support scalable downstream data delivery, workflow orchestration, and real-time processing across distributed services.",
        ]
    },
    {
        logo: houseIcon,
        position: "Software Engineer",
        company: "Lead Tech Institute",
        location: "Ikeja, Lagos, Nigeria",
        duration: "01.2019 - 03.2020",
        descriptions: [
            "Engineered a FastAPI-based transactional email microservice to manage email delivery, template rendering, and notification workflows, providing a scalable and reliable messaging infrastructure.",
            "Designed and implemented an event-driven email processing pipeline by consuming RabbitMQ messages and integrating multiple delivery providers, including SMTP, SendGrid, and Amazon SES, through a unified provider abstraction layer.",
            "Improved system reliability by implementing idempotency, automated retry mechanisms, delivery tracking, failure handling, and comprehensive logging to ensure dependable email processing and observability.",
            "Enhanced application security and performance by implementing authentication, rate limiting, CSRF protection, and middleware-driven request processing, enabling secure, scalable, and production-ready email services.",
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
                        experience.map(({ logo, position, company, location, duration, descriptions }) => (
                            <ExpCard
                                key={position}
                                logo={logo}
                                position={position}
                                company={company}
                                location={location}
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
