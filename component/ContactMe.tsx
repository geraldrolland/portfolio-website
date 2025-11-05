import Label from "./Label";
import whatsapIcon from "../public/whatsapp-logo.svg";
import emailIcon from "../public/gmail-logo.svg";
import linkedinIcon from "../public/linkedin-logo.svg";
import Image from "next/image";
import SubmitForm from "./SubmitForm";

const ContactMe = () => {
    return (
        <div className="w-full flex flex-col items-center gap-y-8">
            <Label title="Contact Me" description="Get in touch" />
            <section className="lg:min-w-[65%]  md:px-6 px-0 md:min-w-[75%]  flex md:justify-between justify-center min-w-[85%] flex-wrap gap-y-10 items-start">
                <div className=" md:p-6 p-0 lg:order-1  order-2 ">
                    <ul className="w-[100%] flex flex-col gap-y-6">
                        <a href="" className="h-[50px] hover:shadow-none hover:bg-gray-700 hover:text-white items-center transition-all duration-500 rounded-full bg-white shadow-md flex gap-x-6 p-4 block">
                            <Image height={25} width={27} src={whatsapIcon} alt="whatsapp image" />
                            <p>+234 9050894145</p>                            
                        </a>
                        <a href="" className="h-[50px] hover:shadow-none hover:bg-gray-700 hover:text-white items-center transition-all duration-500 rounded-full bg-white shadow-md flex gap-x-6 p-4 block">
                            <Image height={30} width={27} src={emailIcon} alt="whatsapp image" />
                            <p>geraldrolland123@gmail.com</p>                            
                        </a>
                        <a href="" className="h-[50px] hover:shadow-none hover:bg-gray-700 hover:text-white items-center transition-all duration-500 rounded-full bg-white shadow-md flex gap-x-6 p-4 block">
                            <Image height={30} width={27} src={linkedinIcon} alt="whatsapp image" />
                            <p>Onyeka Gerald Ujowundu</p>                            
                        </a>
                    </ul>
                </div>
                <SubmitForm />
            </section>
        </div>
    )
}

export default ContactMe;