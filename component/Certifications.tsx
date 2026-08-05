import Label from "./Label";
import CertificateCard from "./CertificateCard";
import awsLogo from "../public/aws-logo.svg";
import dockerLogo from "../public/docker-logo.svg";
import pythonLogo from "../public/python-logo.svg";
import alxLogo from "../public/alx_logo.jpeg";
import nounLogo from "../public/noun_log_.png";

const certifications = [
    {
        logo: awsLogo,
        name: "AWS Certified Solutions Architect - Associate",
        organization: "Amazon Web Services",
        issueDate: "November 2025",
        certificateUrl: "/aws_solution_architect.pdf",
    },
    {
        logo: alxLogo,
        name: "Software Engineering Program",
        organization: "ALX Africa",
        issueDate: "February 2025",
        certificateUrl: "/alx_software_engineering.png",
    },
    {
        logo: alxLogo,
        name: "Cloud Computing",
        organization: "ALX Africa",
        issueDate: "December 2025",
        certificateUrl: "/alx_cloud_computing.png",
    },
    {
        logo: nounLogo,
        name: "Computer Science",
        organization: "National Open University of Nigeria",
        issueDate: "Currently Pursuing",
        certificateUrl: "",
    },
];

const Certifications = () => {
    return (
        <section className="w-full flex flex-col gap-y-8 items-center">
            <Label title="Certifications" description="Certifications and courses I have completed:" />
            {
                certifications.map(({logo, name, organization, issueDate, certificateUrl}) => (
                    <CertificateCard
                        key={name}
                        logo={logo}
                        name={name}
                        organization={organization}
                        issueDate={issueDate}
                        certificateUrl={certificateUrl}
                    />
                ))
            }
        </section>
    )
}

export default Certifications;
