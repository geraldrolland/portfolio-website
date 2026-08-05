import Label from "./Label";
import CertificateCard from "./CertificateCard";
import awsLogo from "../public/aws-logo.svg";
import dockerLogo from "../public/docker-logo.svg";
import pythonLogo from "../public/python-logo.svg";

const certifications = [
    {
        logo: awsLogo,
        name: "AWS Certified Cloud Practitioner",
        organization: "Amazon Web Services",
        issueDate: "March 2024",
        certificateUrl: "/sample-certificate.pdf",
    },
    {
        logo: dockerLogo,
        name: "Docker Essentials",
        organization: "Docker",
        issueDate: "November 2023",
        certificateUrl: "/sample-certificate.pdf",
    },
    {
        logo: pythonLogo,
        name: "Python for Data Science",
        organization: "Python Institute",
        issueDate: "June 2023",
        certificateUrl: "/sample-certificate.pdf",
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
