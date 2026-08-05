import Image from "next/image";

type CertificateCardPropType = {
    logo: any,
    name: string,
    organization: string,
    issueDate: string,
    certificateUrl: string,
};

const CertificateCard = ({logo, name, organization, issueDate, certificateUrl}: CertificateCardPropType) => {
    return (
        <div className="lg:w-[60%] p-4 rounded-md lg:shadow-lg md:shadow-md shadow-none md:w-[80%] w-[90%] flex justify-between lg:flex-row md:flex-col flex-col items-start">
            <div className="flex lg:w-[15%] items-start mb-6 flex-col gap-y-3 w-[30%]">
                <Image src={logo} alt={`${organization} logo`} width={50} height={50} />
                <h3 className="font-bold text-lg text-gray-700">{organization}</h3>
            </div>
            <div className="lg:w-[50%] lg:pl-0 pl-4 md:w-[80%] w-[100%] mb-4">
                <h1 className="font-semibold text-[18px] mb-2 text-gray-800">{name}</h1>
                <p className="text-[14px] text-gray-700">{organization}</p>
                <p className="text-[14px] text-gray-500 mt-1">Issued: {issueDate}</p>
            </div>
            <div className="lg:w-[25%] flex lg:justify-end items-start">
                {
                    certificateUrl ? (
                        <a
                            href={certificateUrl}
                            download
                            className="bg-blue-500 hover:bg-blue-600 text-white text-[14px] font-medium px-4 py-2 rounded-md transition-colors"
                        >
                            Download
                        </a>
                    ) : (
                        <span className="bg-gray-200 text-gray-600 text-[14px] font-medium px-4 py-2 rounded-md">
                            Certification In Process
                        </span>
                    )
                }
            </div>
        </div>
    )
}

export default CertificateCard;
