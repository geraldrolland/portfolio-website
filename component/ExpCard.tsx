import Image from "next/image";

type ExpCardPropType = {
    logo: any,
    position: string,
    company: string,
    duration: string,
    descriptions: string[],
}


const ExpCard = ({logo, position, company, duration, descriptions}: ExpCardPropType) => {
    return (
        <>
        <div className="lg:w-[60%]  p-4 rounded-md  lg:shadow-lg md:shadow-md  shadow-none  md:w-[80%] flex justify-between lg:flex-row md:flex-col flex-col items-start">
            <div className="flex lg:w-[15%]  items-start mb-6 flex-col gap-y-3 w-[30%]">
            <Image src={logo} alt={`${company} logo`} width={50} height={50} />
            <h3 className="font-bold text-lg text-gray-700">{company}</h3>
            </div>
            <div className="lg:w-[50%] lg:pl-0 pl-4 md:w-[80%] w-[100%] mb-4">
                <h1 className="font-semibold text-[18px] mb-2 text-gray-800">{position}</h1>
                <ul>
                    {
                        descriptions.map(description => <li key={description} className="list-disc text-[14px] inset-8 text-gray-700">{description}</li>)
                    }
                </ul>
            </div>
            <h3 className="text-gray-800 lg:text-right  lg:w-[25%] text-[14px]">{duration}</h3>
        </div>
        </>
    )
}

export default ExpCard;