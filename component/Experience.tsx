import Label from "./Label"
import ExpCard from "./ExpCard";
import Reveal from "./motion";

const experience = [
    {
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
        <section className="w-full max-w-5xl mx-auto">
            <Reveal>
                <Label
                    as="h1"
                    index="01"
                    title="Experience"
                    description="My professional journey, role by role."
                />
            </Reveal>
            <div className="mt-12 border-t border-line">
                {
                    experience.map((job, index) => (
                        <ExpCard
                            key={job.position}
                            index={index}
                            position={job.position}
                            company={job.company}
                            location={job.location}
                            duration={job.duration}
                            descriptions={job.descriptions}
                        />
                    ))
                }
            </div>
        </section>
    );
};

export default Experience;
