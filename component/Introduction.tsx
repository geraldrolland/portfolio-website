"use client";

import SocialLinks from "./SocialLinks";
import { IoLocationOutline } from "react-icons/io5";

const Introduction = () => {
    return (
        <>
        <section className="md:w-[50%] self-start w-full order-1 lg:order-none  ">
            <h2 className="text-[45px] text-gray-800 font-bold">Hi, I'm Gerald</h2>
            <p className="text-[16px] text-gray-800">I'm a software engineer with over 3 years of experience in building 
                secure and reliable software applications that 
                drive business impact. My work is grounded in system 
                thinking and design, ensuring that every solution is scalable, 
                efficient, and user-centered. I follow agile methodologies to 
                deliver high-quality software iteratively, with a strong emphasis on testing 
                and continuous improvement throughout the development process.</p>
                <div className="w-[300px] h-[55px] mt-10 flex">
                    <div className="flex flex-col justify-between items-center">
                        <IoLocationOutline className="font-bold text-[18px]" />
                        <div className="w-[10px] h-[10px] mb-[5.7px] rounded-[5px] bg-green-600"></div>
                    </div>
                    <div className="flex pl-3 flex-col  justify-between gap-y-2">
                    <span className="font-semibold">Lagos, Nigeria</span>
                    <span className="font-semibold">Available for hire</span>
                    </div>
                </div>
                <SocialLinks size="10" gap="4" color="gray-700" />
        </section>
        </>
    )
}

export default Introduction;