"use client";

import Label from "./Label";
import myImage2 from "../public/my-image2.jpg";
import PersonaImage from "./PersonaImage";


const AboutMe = () => {
    return(
        <div className=" w-full flex-col items-center flex gap-y-8">
          <Label title="About Me" />
          <div className="md:w-[70%]  flex md:justify-between justify-center flex-wrap gap-y-8 items-start">
            <PersonaImage image={myImage2} />
            <section className=" lg:max-w-[50%] text-[14px] ">
                <p>
Hello! I'm <span className="font-semibold">Onyeka Gerald Ujowundu</span>, a graduate of the ALX 
Software Engineering program with over three years of hands-on 
experience in designing, developing, and deploying scalable and 
secure software solutions. My work is driven by a passion for creating 
technology that not only solves real-world problems 
but also delivers a seamless, engaging experience for users.
                </p>
                <br/>
                <p>
Over the years, I've developed a strong 
foundation in system thinking and software architecture, 
allowing me to build systems that are both robust and efficient. 
My technical expertise spans frontend and backend development, 
where I focus on building engaging user interfaces supported by 
secure, high-performance backend systems. Whether it's crafting 
intuitive user experiences or optimizing APIs for large-scale 
applications, I approach every project with precision and a deep 
understanding of how systems interact end-to-end.
                </p>
                <br/>
                <p>
I have extensive experience working 
with AWS cloud infrastructure, leveraging its tools and 
services to ensure high availability, scalability, and 
fault tolerance across deployments. I also have solid hands-on 
experience in containerization and orchestration using Docker 
and Kubernetes, enabling me to manage distributed applications 
effectively and streamline CI/CD workflows.
                </p>
                <br/>
                <p>
Beyond development, I'm deeply 
invested in system design and microservice architecture, 
breaking down monolithic applications into manageable, 
maintainable services that improve flexibility and reliability. 
My commitment to software quality is reinforced by my experience 
in unit testing and integration testing, ensuring that every component I build is
reliable, maintainable, and production-ready.
                </p>
                <br/>
                <p>
I take pride in being a problem 
solver who thrives in dynamic, fast-paced environments. 
I enjoy tackling complex technical challenges whether it's 
optimizing performance bottlenecks, enhancing security, or 
designing scalable architectures that support growth and innovation.
                </p>
                <br/>
                <p>
Collaboration is at the heart of how I work. 
I believe that great software is built through effective 
communication, teamwork, and shared vision. I value learning 
from others and contributing to a culture of continuous improvement,
 where ideas evolve through open discussion and experimentation.
                </p>
                <br/>
                <p>
My goal as a software engineer is to build 
impactful solutions that combine technical excellence with 
user-centric design, empowering individuals and businesses to 
achieve more through technology. I'm constantly learning, evolving,
 and seeking opportunities to push boundaries because technology
  never stands still, and neither do I.
                </p>
            </section>
          </div>
        </div>
    )
}

export default AboutMe;